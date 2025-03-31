import React from "react";
import "./styles.less";

const Home = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600">Welcome to My Website</h1>
      <p className="text-center text-gray-700 mt-4">
        This is a React frontend website using Tailwind CSS and Less.
      </p>
    </div>
  );
};

export default Home;
