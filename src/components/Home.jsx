import React from "react";
import Cards from "./Cards";
import { cardContents } from "../Constants";
const Home = () => {
  return (
    <div className="w-screen flex items-center justify-center min-h-screen h-full bg-[#111827] box-border sm:px-4 md:px-28">
      <div className="w-full  flex items-center justify-center   gap-12  pt-24  flex-wrap sm:px-4 sm:w-10/12 ">
        {cardContents.map((card, index) => (
          <Cards key={index} {...card} />
        ))}
      </div>
      {/* <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards /> */}
    </div>
  );
};

export default Home;
