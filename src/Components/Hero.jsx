import React from "react";
import { Button } from "./Button";
import { IoPlay } from "react-icons/io5";
import Image from "next/image";
import hero from "../../public/assets/hero.png";


function Hero() {
  return (
    <div
      className='px-[17px] pt-[150px] bg-primary  pb-[96px] min-h-screen xs:px-[30px] sm:px-[60px] lg:pr-0 w-full xl:pr-0 xl:pl-[100px]  xl:pt-[100px] '
      id='Home'
    >
      <div className='flex flex-col items-center xs:items-start   '>
        <div className="flex items-center  justify-between xl:w-full">
        <div>
        <p className='text-[32px] text-[#6945D3] text-center font-medium leading-tight mb-[32px] max-w-[326px] xs:max-w-[720px] 
        xs:text-[50px] md:text-[65px] md:text-left xl:max-w-[800px] '>
          Transform Your Tuck Shop with
          <span className='font-extrabold'> Smart Inventory Management</span>
        </p>
        <p className='text-[#3F3E42] text-[18px] text-center leading-tight font-medium max-w-[302px] xs:max-w-[600px] xs:text-[22px]
        md:text-[24px] md:text-left lg:max-w-[720px]'>
          Easily manage your stock, reduce waste, and increase profits with our
          intuitive software and integrated e-wallet system.
        </p>
        </div>

         <div className="hidden lg:block">
          <Image src={hero} />
        </div> 
        </div>
     
   
      </div>
      <div className='flex items-center flex-col mt-[60px] mb-[20px] gap-[20px]   xs:justify-center  xs:flex-row md:justify-start lg:mt-0'>
        <div>
          <Button
            children='Book Apointment'
            className='bg-[#7452D6] w-auto text-white'
          />
        </div>
        <div>
          <button className=' hover:bg-[] flex items-center justify-center gap-[6px] rounded-[8px] py-[10px] px-[20px] border-solid border-[2px] border-[#6945D3] text-[16px] font-bold text-[#6945D3]'>
            Watch Demo
            <span className='text-[#6945D3] text-2xl'>
              <IoPlay />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
