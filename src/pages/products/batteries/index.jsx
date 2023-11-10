import MainLayout from "@/common/layouts/MainLayout";
import React from "react";
import Image from "next/image";
// Import Swiper React components

    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

import { Carousel } from "flowbite-react";
import { battery } from "@/common/productData/battery";

import bt1 from "@/assets/Battery/BTR/28.png";
import Link from "next/link";

const batteries = () => {
  return (
    <MainLayout>
      <div>
        <div className="relative w-full h-screen bg-gradient-to-r from-red-500  to-red-200 ">
          <div className="absolute w-full  flex items-center justify-center font-[700] text-4xl top-6 text-white">
            Products
          </div>
          <div className="absolute top-28  w-full">
            <div className="w-full flex items-center justify-center">
              <Image
                src={battery.icone}
                className="w-fit "
                alt=""
              />
            </div>
          </div>
          <div className="absolute top-28 w-full h-[500px] border border-yellow-200">
            <div className=" w-full h-full flex  justify-center pl-52 pr-52">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper "
              >
                {battery.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className=" w-[250px] h-[400px] flex flex-col ">
                      <div className="w-full h-[50%]  flex items-center justify-center">
                        <Image
                          className=""
                          src={item.photo}
                          alt=""
                        />
                      </div>
                      <div className="w-full h-[50%] rounded-lg bg-gradient-to-r from-black via-gray-600 to-gray-400 p-3">
                        <div className="text-white text-xl font-bold">
                          {item.BRAND}
                        </div>
                        <div className="text-white text-xs font-bold">
                          {item.SIZE}
                        </div>
                        <div className="text-white text-xs font-bold">
                          {item.AMPERE}
                        </div>
                        <div className="text-white text-xs font-bold">
                          {item.TYPE}
                        </div>
                        <div className="text-white text-xs font-bold">
                          {item.DIMENSION}
                        </div>
                        <Link href={`/products/batteries/${item.id}`}>
                          <div className="text-sm font-bold mt-3 text-blue-500">
                            Explore more
                          </div>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default batteries;

{
  /* <div className="border border-yellow-200 w-[250px] h-[400px] flex flex-col">
                <div className="w-full h-[50%] border border-green-500 flex items-center justify-center">
                  <Image
                    className="border border-orange-500"
                    src={bt1}
                    alt=""
                  />
                </div>
                <div className="w-full h-[50%] border border-green-500 rounded-lg bg-gradient-to-r from-black via-gray-600 to-gray-400 p-3">
                  <div className=" text-white text-3xl font-bold">
                    INDIGO - R
                  </div>
                  <div className="text-white text-sm font-bold">
                    80D26L (NS70L)
                  </div>
                  <div className="text-white text-sm font-bold">70 AH</div>
                  <div className="text-white text-sm font-bold">
                    CALCIUM MAINTENANCE FREE BATTERY
                  </div>
                  <div className="text-white text-sm font-bold">
                    280mm*175MM*200NM
                  </div>
                  <div className=" text-sm font-bold mt-3 text-blue-500">
                    Explore more
                  </div>
                </div>
              </div> */
}

// {battery.map((item) => (
//   <div
//     key={item.id}
//     className="border border-yellow-200 w-[250px] h-[400px] flex flex-col "
//   >
//     <div className="w-full h-[50%] border border-green-500 flex items-center justify-center">
//       <Image
//         className="border border-orange-500"
//         src={item.photo}
//         alt=""
//       />
//     </div>
//     <div className="w-full h-[50%] border border-green-500 rounded-lg bg-gradient-to-r from-black via-gray-600 to-gray-400 p-3">
//       <div className="text-white text-xl font-bold">
//         {item.BRAND}
//       </div>
//       <div className="text-white text-xs font-bold">
//         {item.SIZE}
//       </div>
//       <div className="text-white text-xs font-bold">
//         {item.AMPERE}
//       </div>
//       <div className="text-white text-xs font-bold">
//         {item.TYPE}
//       </div>
//       <div className="text-white text-xs font-bold">
//         {item.DIMENSION}
//       </div>
//       <div className="text-sm font-bold mt-3 text-blue-500">
//         Explore more
//       </div>
//     </div>
//   </div>
// ))}
