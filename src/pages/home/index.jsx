import home from "@/common/constants/home";
import MainLayout from "@/common/layouts/MainLayout";
import Desktop3 from "@/components/Home/Desktop3";
import Desktop4 from "@/components/Home/Desktop4";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <MainLayout>
      <div className="w-full overflow-hidden h-screen bg-cover bg-center bg-no-repeat relative ">
        <div>
          <Image
            className="w-full h-screen absolute"
            src={home.Background}
            alt="bg"
          />
        </div>
        <div className="">
          <Image
            width={500}
            height={500}
            className="absolute top-40 left-28"
            src={home.desk2}
            alt="bbb"
          />
        </div>

        <div className="absolute end-0 w-[40%] h-full bg-gradient-to-r from-red-500  to-red-200">
          <div className="">
            <Image
              width={500}
              height={500}
              className="absolute top-36 right-11"
              src={home.tirebat}
              alt="bbb"
            />
          </div>
        </div>
      </div>

      <Desktop3 />
      <Desktop4 />
    </MainLayout>
  );
};

export default index;
