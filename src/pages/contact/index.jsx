import MainLayout from "@/common/layouts/MainLayout";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillPrinter, AiFillShop } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import MapComponent from "@/components/contact/gmap";

export default function index() {
  return (
    <MainLayout>
      <div className="w-full overflow-hidden h-screen bg-cover bg-center bg-no-repeat relative ">
        <div className="absolute   w-[50%] h-full bg-[#4152B3] rounded-r-full ">
          <div className="ml-12 py-4 leading-9">
            <h1 class="  font-semibold text-4xl leading-none tracking-tight text-gray-900 dark:text-white">
              How Can we Help You ?
            </h1>
            <p className="text-white">send us a message...</p>
          </div>
        </div>
        <div className="absolute py-24 px-14">
          <div class="grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4">
            <form action="" className="p z-20">
              <div class="flex flex-wrap ">
                <div class="w-full">
                  <label
                    class="block uppercase tracking-wide text-white text-xs font-bold "
                    for="grid-password"
                  >
                    Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div class="flex flex-wrap ">
                <div class="w-full">
                  <label
                    class="block uppercase tracking-wide text-white text-xs font-bold "
                    for="grid-password"
                  >
                    Email
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="flex flex-wrap ">
                <div class="w-full">
                  <label
                    class="block uppercase tracking-wide text-white text-xs font-bold "
                    for="grid-password"
                  >
                    Number
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="text"
                    placeholder="Contact Number"
                  />
                </div>
              </div>
              <div class="flex flex-wrap ">
                <div class="w-full">
                  <label
                    class="block uppercase tracking-wide text-white text-xs font-bold "
                    for="grid-password"
                  >
                    Subjuct
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Subjuct"
                  />
                </div>
              </div>
              <div>
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Your Message
                </label>
                <textarea
                  rows="10"
                  class="appearance-none block w-[370px] h-40 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Note"
                ></textarea>
              </div>
              <button
                class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded w-80"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="end w-full h-full bg-gradient-to-r from-red-500  to-red-200">
          <div className=" absolute    ">
            <div className="grid justify-center ml-[575px]">
              <h1 class=" text-center font-semibold py-7 text-4xl  tracking-tight text-gray-900 dark:text-white">
                Contact Us
              </h1>
              <ul className="items-center text-xl text-white leading-5   px-32">
                <li className="flex gap-4  ">
                  <span className="m-2">
                    <BsFillTelephoneFill />
                  </span>
                  Tel: +971-42272836 / +971 42272324
                </li>
                <li className="flex gap-4 ">
                  <span className="m-2">
                    <AiFillPrinter />
                  </span>
                  Fax: +971-42272837
                </li>
                <br />
                <li className="flex gap-4">
                  <span className="m-2 leading-3">
                    <BiLogoGmail />
                  </span>
                  E-mail: hussein@nassemalrafedin.com
                  genelyn@nassemalrafedin.com
                </li>
                <br />
                <li className="flex gap-4">
                  <span className="m-2">
                    <AiFillShop />
                  </span>
                  SHOWROOM: 9 Moh. Al Qaizi Building
                </li>
                <li className="flex gap-4">
                  <span className="m-2">
                    <ImLocation2 />
                  </span>
                  Location: Al Maktoum Hospital Road, Fish Round about Deira,
                  Dubai United Arab Emirates (P.O. Box: 90741)
                </li>
                <br />
                <li className="flex gap-4">
                  <span className="m-2">
                    <HiMiniBuildingOffice2 />
                  </span>
                  MAIN OFFICE: : Office No: 403,Iris Bay
                </li>
                <li className="flex gap-4">
                  <span className="m-2">
                    <ImLocation2 />
                  </span>
                  Location: Tower,Al Mustaqbal ST.Business Bay Dubai,United Arab
                  Emirates P.O Box :90741
                </li>
              </ul>
            </div>
            <div className="absolute end-56 py-5  w-[400px] h-[400px]">
              <MapComponent />
            </div>
          </div>
        </div>
        <div className="py-16 lg:section" id="contact"></div>
      </div>
    </MainLayout>
  );
}
