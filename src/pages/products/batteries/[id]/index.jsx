import MainLayout from "@/common/layouts/MainLayout";
import React from "react";
import Image from "next/image";
import batteryImg from "@/common/constants/battery";
import { battery } from "@/common/productData/battery";
import { useRouter } from "next/router";
const index = () => {

  const router = useRouter();
  const { id } = router.query;
  const batteryItem = battery.find(item => item.id === id);

  if (!batteryItem) {
    return <div>Battery not found for ID: {id}</div>;
  }
  return (
    <MainLayout>
      <div>
        <div className="w-full overflow-hidden h-screen bg-cover bg-center bg-no-repeat relative ">
          <div>
            <Image
              className="w-full h-screen absolute"
              src={batteryImg.Backgroundp}
              alt="bg"
            />
          </div>
          <div className="absolute w-full border border-green-400 flex items-center justify-center font-[700] text-4xl top-6 text-white">
            Products
          </div>
          <div class="  absolute    top-24 left-16">
            <div class="font-medium leading-7 text">
              <div class="text-white font-bold py-3 px-6 rounded">
                <h5>SPECIFICATION : {batteryItem.SPECIFICATION}</h5>
                <h5>DIMENSION : {batteryItem.DIMENSION}</h5>
                <h5>TYPE : {batteryItem.TYPE}</h5>
                <h5>AMPERE : {batteryItem.AMPERE}</h5>
                <hr class="border-t-4 w-96 border-indigo-500 absolute"></hr>
              </div>
            </div>
          </div>
          <div className="absolute top-52 border border-blue-400 w-full">
            <div className="w-full flex items-center justify-center">
              <Image
                src={batteryItem.photo}
                className="w-1/4 border border-green-500"
                alt=""
              />
            </div>
            <div class="absolute   top-14 right-20 ">
              <div class="font-extrabold leading-7 text ">
                <div class="text-white font-semibold text-6xl py-3 rounded">
                  <h2>{batteryItem.BRAND}</h2>
                </div>
              </div>
            </div>
            <div class="absolute   top-52 right-24 ">
              <div class="font-medium leading-7 text ">
                <div class="text-white font-bold py-3 rounded">
                  <hr class="border-t-4 w-96  border-indigo-500 absolute"></hr>
                  <h2>TERMINAL : {batteryItem.TERMINAL}</h2>
                  <h5>TERMINAL CLASSIFICATION : {batteryItem.TERMINAL_CLASSIFICATION}</h5>
                  <h5>HOLD DOWN : {batteryItem.HOLD_DOWN}</h5>
                  <h5>SIZE : {batteryItem.SIZE}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default index;
