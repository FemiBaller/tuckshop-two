import React from "react";
import Image from "next/image";
import imageone from "../../public/assets/imageone.png";
import { Button } from "./Button";

function Reviews() {
  const cards = [
    { id: 1, cardImage: imageone, username: "King Khay", text: "Nunc ullamcorper iaculis phasellus ac pharetra. Auctor vitae nibh sit maecenas eget adipiscing. Diam et sed nulla aenean urna amet eget in. Viverra consequat ornare id massa." },
    { id: 2, cardImage: imageone, username: "King Khay", text: "Nunc ullamcorper iaculis phasellus ac pharetra. Auctor vitae nibh sit maecenas eget adipiscing. Diam et sed nulla aenean urna amet eget in. Viverra consequat ornare id massa." },
    { id: 3, cardImage: imageone, username: "King Khay", text: "Nunc ullamcorper iaculis phasellus ac pharetra. Auctor vitae nibh sit maecenas eget adipiscing. Diam et sed nulla aenean urna amet eget in. Viverra consequat ornare id massa." },
    { id: 4, cardImage: imageone, username: "King Khay", text: "Nunc ullamcorper iaculis phasellus ac pharetra. Auctor vitae nibh sit maecenas eget adipiscing. Diam et sed nulla aenean urna amet eget in. Viverra consequat ornare id massa." },
    { id: 5, cardImage: imageone, username: "King Khay", text: "Nunc ullamcorper iaculis phasellus ac pharetra. Auctor vitae nibh sit maecenas eget adipiscing. Diam et sed nulla aenean urna amet eget in. Viverra consequat ornare id massa." },
  ];

  return (
    <div className='bg-[#6945D3] py-[96px] px-[17px] overflow-hidden sm:px-[60px] xl:px-[100px]     ' id='Reviews'>
      <div>
        <div className='flex justify-center sm:justify-start'>
          <div className='flex flex-col gap-[1px] mb-[20px]'>
            <h1 className='text-white text-[16px] font-bold leading-[24px]'>Reviews</h1>
            <span className='bg-white w-[45px] h-[3px] rounded-[10px] inline-block'></span>
          </div>
        </div>

        <div className='mb-[64px] flex justify-center sm:justify-start'>
          <p className='max-w-[292px] text-[24px] text-[#F5F3FC] font-medium text-center leading-tight sm:text-left sm:max-w-[320px] md:text-[40px] md:max-w-[600px]'>
            Here is what our customers are saying
          </p>
        </div>
      </div>

      <div className='flex overflow-x-auto snap-x snap-mandatory scrollbar-hide'>
        <div className='flex gap-7'>
          {cards.map((item, index) => (
            <div
              key={index}
              className='py-[48px] px-[24px] border-[#A28CE4] border-2 rounded-[32px] max-w-[350px] flex-shrink-0 snap-center md:max-w-[650px]'
            >
              <div className="md:flex items-start gap-[32px]">
                <Image src={imageone} alt='' className="md:h-[64px] w-[64px]" />
                <p className='font-medium text-[24px] text-[#E8E7E9] leading-[32px] mt-[32px] md:mt-0'>
                  {item.text}
                </p>
              </div>
              <p className='text-white font-bold text-[20px] italic mt-[24px] text-center'>
                -{item.username}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col items-center gap-[24px] mt-[64px] md:flex-row md:justify-start md:gap-[65px]'>
        <p className='max-w-[172px] text-[20px] text-[#F5F3FC] font-bold text-center leading-tight md:max-w-full md:text-[29px]'>
          Ready to share your experience?
        </p>
        <Button children='Book Appointment' className='bg-[#FFEC41] text-black' />
      </div>
    </div>
  );
}

export default Reviews;
