import home from "@/common/constants/home";
import Image from "next/image";
import React from "react";

const Desktop3 = () => {
  return (
    <div className="w-full overflow-hidden h-screen bg-cover bg-center bg-no-repeat relative ">
      <div>
        <Image
          className="w-full h-screen absolute"
          src={home.Background}
          alt="bg"
        />
      </div>

      <div className="absolute w-[500px] h-[550px] top-40 left-36">
        <h3 className="text-[#32286E] font-bold text-[50px]">OUR MISSION</h3>
        <div className="mb-5 font-medium">
          Our company's mission is to identify, anticipate and provide
          customer's satisfaction by meeting their requirements profitability
          and maintaining product excellence and good services.
        </div>
        <div className="mb-5 font-medium">
          There is only one valid definition of our business purpose: to create
          a customer loyalty, At its simplest, if we do not gain our customers
          satisfaction for the product and the service we offers, then there is
          no reason for continuing existence.
        </div>
        <div className="mb-5 font-medium">
          Through our year of experience, we managed to provide the exact
          requirements to our clients with the wide range of Tires and
          Automotive Batteries we have in all brands.
        </div>
        <div className="mb-5 font-medium">
          Product, price, and place; our team can provide you at your
          convenience with our best competitive prices, and where ever you need
          it to be.
        </div>
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
  );
};

export default Desktop3;
