import MainLayout from "@/common/layouts/MainLayout";
import React from "react";
import Image from "next/image";
import wheel from "@/common/constants/wheel";
const tires = () => {
  return (
    <MainLayout>
      <div>
      <div className="relative w-full h-screen bg-gradient-to-r from-red-500  to-red-200 border border-red-500">
          <div className="absolute w-full border border-green-400 flex items-center justify-center font-[700] text-4xl top-6 text-white">
            Products
          </div>
          <div className="absolute top-28 border border-blue-400 w-full">
            <div className="w-full flex items-center justify-center">
              <Image
                src={wheel.icone}
                className="w-fit border border-green-500"
                alt=""
              />
            </div>
          </div>
        </div>
          
      </div>
    </MainLayout>
  );
};

export default tires;
