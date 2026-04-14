import React from "react";
import Heading from "../Components/Heading";
import HeadingCard from "../Components/HeadingCard";
import Friends from "../Components/Friends";

const Home = () => {
  return (
    <div className="bg-[#F8FAFC] ">
      <div className="lg:container lg:w-10/12 w-11/12 mx-auto">
      <Heading />
      <HeadingCard />
      <Friends />

      </div>
    </div>
  );
};

export default Home;
