import React from "react";

const Heading = () => {
  return (
    <div className="py-10 text-center w-11/12 mx-auto">
      <h1 className="text-[#244D3F] mb-2 font-bold text-3xl lg:text-5xl">
        Friends to keep close in your life
      </h1>
      <p className="text-[#64748B] mb-3 text-[12px] lg:text-[16px]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white">+ Add a Friend</button>
    </div>
  );
};

export default Heading;
