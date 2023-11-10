import React from 'react'
import MainLayout from '@/common/layouts/MainLayout'
import aboutImg from '@/common/constants/about'
import Image from 'next/image'

const about = () => {
  return (
    <MainLayout>
    <div className="w-full overflow-hidden h-screen bg-cover bg-center bg-no-repeat relative ">
      <div>
        <Image
          className="w-full h-screen absolute"
          src={aboutImg.Background}
          alt="bg"
        />
      </div>
      <div className="absolute end-0 w-[40%] h-screen bg-gradient-to-r from-red-500  to-red-200">
      </div>
      <div className=''>
        <div className="flex items-center absolute">
          <h1 className="mt-0 text-5xl font-bold   px-44 py-12 leading-tight text-primary " >
            About Us
          </h1>
        </div>

        <div className='absolute py-32 px-12  '>

          <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">
            <li class="flex items-center justify-between ">
              <p class="overflow-ellipsis overflow-hidden w-[680px] p-2 leading-8 text-xl">
                Our Company is a sole proprietorship owned business.
                Established since year 1988 in Baghdad Iraq as a retailer, and
                started to import in 1998 from Dubai-UAE. After a few years of
                good business result in year 2000 the business had gained a
                good profit which leads us also to import directly from Korean
                factories; where 4years after in the year of 2004 We had
                started new company in Dubai-UAE. As years past by in the
                field of Import/exports we had gone beyond our expertise and
                successfully owned a total of 5 companies as below while also
                owned 17 warehouses for our stock storage and distribution

              </p>
            </li>
          </ul>
        </div>


      </div>
      <div className='absolute flex items-center justify-center top-[-130px] left-[120px]'>
        <div className=''>
          <Image src={aboutImg.about} alt="" />
        </div>
      </div>
      <div className="absolute bottom-6 px-7 left flex items-center justify-start w-full h-fit ">
        <div className="flex justify-start">
          <button class="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg ">
            ENQUIRE NOW
          </button>
        </div>

      </div>

    </div>

      
    </MainLayout>
  )
}

export default about