import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const singup = async (req, res, next) => {
  console.log("req.body", req.body);
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  console.log("req.body", req.body);
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found!"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "wrong credentials"));
    }
    const accessToken = jwt.sign(
      { id: validUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );

    const { password: hashedPassword, ...rest } = validUser._doc;
    res
      .cookie("jwt", accessToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        // sameSite: "None",
      })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
