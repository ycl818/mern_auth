import React from "react";

const Home = () => {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        Welcome to my Auth App
      </h1>
      <p className="mb-4 text-slate-600">
        This is a MERN stack application with authentication. It allows users to
        sign up, log in and log out. It also allows users to update their
        profile and delete their account.
      </p>
      <p className="mb-4 text-slate-600">
        The front-end of the application is built with React and uses React
        Router for client-side routing. The back-end of the application is built
        with Node.js and Express, and uses MongoDB as the database.
        Authentication is implemented with JSON Web Tokens (JWT).
      </p>
      <p className="mb-4 text-slate-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
        molestias ratione voluptatem iste quas facere laborum consequuntur quasi
        temporibus. Error ex repellat reiciendis non animi! Exercitationem nemo
        iste vero mollitia!
      </p>
    </div>
  );
};

export default Home;
