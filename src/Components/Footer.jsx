import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandInstagramFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className=" bg-[#244D3F] py-10">
      <div className="lg:container w-11/12 mx-auto text-center lg:px-20">
        <div className="border-b border-gray-500">
          <div className="space-y-2">
            <h1 className="text-white text-4xl lg:text-6xl font-bold">KeenKeeper</h1>
            <p className="text-white font-thin lg:text-[16px] text-[12px]">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
          </div>
          <p className="text-xl mb-5 text-white mt-5">Social Links</p>
          <div className="flex justify-center items-center gap-3 mb-5">
            <div className="bg-white p-2 rounded-full">
              <TbBrandInstagramFilled size={20} />
            </div>
            <div className="bg-white p-2 rounded-full">
              <FaFacebookSquare size={20} />
            </div>
            <div className="bg-white p-2 rounded-full">
              <FaXTwitter size={20} />
            </div>
          </div>
        </div>

        <div className="lg:flex lg:items-center space-y-5 lg:space-y-0 justify-between mt-3">
          <p className="text-white">© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex items-center justify-center gap-10">
            <p className="text-white">Privacy Policy </p>
            <p className="text-white"> Terms of Service</p>
            <p className="text-white"> Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
