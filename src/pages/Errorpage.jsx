import React from "react";
import errorImage from "../assets/error.png";
import { Link } from "react-router";
const Errorpage = () => {
  return (
    <div className=" flex min-h-[90vh] items-center justify-center  px-4">
      <div className="  rounded-2xl    text-center">
        <img src={errorImage} alt="Error" className=" mx-auto mb-6 " />

        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Errorpage;
