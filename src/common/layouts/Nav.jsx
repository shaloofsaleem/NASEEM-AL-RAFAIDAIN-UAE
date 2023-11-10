import Image from "next/image";
import home from "../constants/home";
import Link from "next/link";

const Nav = () => {
  return (
    <header>
      <div className=" w-full h-fit">
        <div className="flex ">
          <div className="w-[40%]">
            <div className="">
              <Image className="" width={300} height={300} src={home.NavLogo} />
            </div>
          </div>
          <div className="w-[60%] flex items-center gap-10 px-7 ">
            <div className="ml-20 p-1 px-4 rounded-full flex justify-center items-center bg-slate-700 text-white ">
             <Link href="/home">Home</Link> 
            </div>
            <div className=" p-1 px-5 rounded-full flex justify-center items-center bg-slate-700 text-white">
              <Link href="/products">Products</Link>
            </div>
            <div className=" p-1 px-4 rounded-full flex justify-center items-center bg-slate-700 text-white">
             <Link href="/about"> About Us</Link>
            </div>
            <div className=" p-1 px-4 rounded-full flex justify-center items-center bg-slate-700 text-white">
             <Link href="/gallery"> Gallery</Link>
            </div>
            <div className=" p-1 px-4 rounded-full flex justify-center items-center bg-slate-700 text-white">
             <Link href="/contact"> Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
