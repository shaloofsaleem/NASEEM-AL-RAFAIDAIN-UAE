import Image from "next/image";
import { Inter } from "next/font/google";
import home from "@/common/constants/home";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="main flex justify-center ">
      <div className="2xl:container w-full h-full flex:col justify-center ">
        <div className="w-full overflow-hidden h-screen bg-cover bg-center bg-no-repeat relative ">
          <div>
            <Image
              className="w-full h-screen absolute"
              src={home.BackgroundLogo}
              alt="bg"
            />
          </div>
          <div className="absolute">
            <Image className=""width={400} src={home.logo} alt="bgg" />
          </div>
          <div className="absolute top-36 flex items-center justify-center w-full h-fit ">
            <div className="flex flex-col items-center justify-center ">
              <div className="font-[700] text-[65px] text-[#32286E] ">
                WELCOME TO
              </div>
              <div className="font-[700] text-[140px] text-red-500">
                نسيم الرافدين
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full ">
            <div className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat  ">
              <div className=" relative">
                <Link href="/home" className="absolute top-7  left-72 px-4  p-2 rounded-full w-fit  bg-gradient-to-r from-[#004AAD] to-[#CB6CE6] text-white hover:cursor-pointer">
                  EXPLORE NOW
                </Link>
                <Image className=""width={700}  src={home.tireandbat} alt="mainpg" />
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
}
