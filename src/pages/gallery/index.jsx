import gallery from '@/common/constants/gallery'
import MainLayout from '@/common/layouts/MainLayout'
import React from 'react'
import Image from "next/image";



export default function index() {
  return (
    <MainLayout>
              <div className="w-full overflow-hidden h-screen bg-cover bg-center bg-no-repeat relative ">
            <div>
              <Image
                className="w-full h-screen absolute"
                src={gallery.Background}
                alt="bg"
              />
            </div>
            <div className="absolute top-10  flex items-center justify-center w-full h-fit ">
                <div className="flex  items-center justify-center  ">
                    <div className="font-[700] text-[65px] text-[#32286E] leading-3 items-center">
                        Gallery
                    </div>
                </div>      
            </div>
            
            <div>
       
      </div>
      <div className="absolute   flex items-center justify-center w-full h-fit ">
                <div className="flex items-center justify-center  ">
                    <div className="border border-none -top-14 h-[60vh] absolute w-[80%]">
                      <Image className='absolute ' src={gallery.ads} alt=""  />
                        
                    </div>
                </div>      
            </div>
            

      <div className=" ">

</div>
      </div>
    </MainLayout>
  )
}
