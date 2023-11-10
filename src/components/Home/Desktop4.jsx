"use client";

import { Carousel } from "flowbite-react";

import home from "@/common/constants/home";
import Image from "next/image";
import React from "react";

const Desktop4 = () => {
  return (
    <div>
      <div className="w-full overflow-hidden h-[800px] bg-cover bg-center bg-no-repeat relative ">
        <div>
          <Image
            className="w-full h-screen absolute"
            src={home.Background}
            alt="bg"
          />
        </div>
        <div className="absolute  w-full h-[800px]  p-6 ">
          <div className=" w-full h-full ">
            {/* ----------------- */}

            <Carousel>
              <Image
                alt="Description of the image 1"
                src={home.homeCaroseljpg}
                
              />
              <Image
                alt="Description of the image 2"
                src={home.homecaroselsec}
              />
            </Carousel>

            {/* -------------------- */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop4;
