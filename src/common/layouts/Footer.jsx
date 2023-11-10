import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="w-full h-24  flex bg-red-500 rounded-t-2xl bg-gradient-to-r from-red-500  to-red-200">
        <div className="w-[50%] ">
          <Link href="/contact">
          <div className=" w-fit rounded-full px-7 p-2 mt-5 ml-7  bg-gradient-to-r from-[#004AAD] to-[#CB6CE6] text-white hover:cursor-pointer font-bold">ENQUIRE NOW</div>
          </Link>
        </div>
        <div className="w-[50%]  flex justify-end mt-5  mr-7">
          <div className=" border border-black w-[300px] bg-white h-10 rounded-full flex items-end justify-end">
            <div className="w-8 h-9 border rounded-full mr-1 bg-blue-600 flex items-center justify-center text-white">
              <AiOutlineSearch />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
