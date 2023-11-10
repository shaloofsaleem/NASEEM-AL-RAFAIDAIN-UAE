import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import product from "@/common/constants/product";
import MainLayout from "@/common/layouts/MainLayout";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const products = () => {
  return (
    <MainLayout>
      <div className="w-full overflow-hidden h-screen bg-cover bg-center bg-no-repeat relative ">
        <div>
          <Image
            className="w-full h-screen absolute"
            src={product.Background}
            alt="bg"
          />
        </div>

        <div className="absolute w-[400px] h-[400px] top-28 left-36 ">
          <Image
            width={400}
            height={200}
            className=""
            src={product.Battery}
            alt=""
          />
          <div className="flex items-center justify-center w-full ">
            <Link href="products/batteries">
             
              <div className=" w-fit p-3 px-6 bg-[#00B1E0] rounded-lg text-white">
                Battery
              </div>
            </Link>
          </div>
        </div>

        <div className="absolute end-0 w-[50%] h-full bg-gradient-to-r from-red-500  to-red-200 ">
          <div className="absolute w-[400px] h-[400px] top-28 left-36  flex flex-col items-center">
            <Image
              width={200}
              height={200}
              className=""
              src={product.Tire}
              alt=""
            />
            <div className="flex items-center justify-center w-full mt-9">
              <Link href="products/tires">
                
                <div className=" w-fit p-3 px-6 bg-[#00B1E0] rounded-lg text-white">
                  Tire
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full overflow-hidden h-screen bg-cover bg-center bg-no-repeat relative ">
        <div>
          <Image
            className="w-full h-screen absolute"
            src={product.Background}
            alt="bg"
          />
        </div>

        <div className="absolute end-0 w-[50%] h-full bg-gradient-to-r from-red-500  to-red-200"></div>

        <div className="absolute top-20  flex items-center justify-center w-full h-fit ">
          <div className="flex  items-center justify-center  ">
            <div className="font-[700] text-[65px] text-[#32286E] leading-3 items-center">
              Product
            </div>
          </div>
        </div>
        <div className="absolute bottom-28  flex items-center justify-center w-full h-fit ">
          <div className="flex  items-center justify-center  ">
            <button class="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg ">
              ENQUIRE NOW
            </button>
          </div>
        </div>

        <div>
          <div className="flex flex-col bottom-16 justify-center absolute   left-80 ">
            <Image className="" src={product.Battery} alt="" />
            <div className="absolute flex items-center bottom-24 right-80">
              <div class="rounded-md shadow">
                <Link
                  href="products/tires"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  TIRES
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center bottom-12 justify-center absolute right-56 ">
            <Image src={product.Wheel} alt="" />
            <div className="absolute flex items-center bottom-28 left-80">
              <div class="rounded-md shadow">
                <Link
                  href="products/batteries"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  BATTERIES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </MainLayout>
  );
};

export default products;
