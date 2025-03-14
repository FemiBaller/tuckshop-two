"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { LiaBehanceSquare } from "react-icons/lia";
import { IoLogoFacebook } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

function FAQS() {
  const [selected, setSelected] = useState(null);
  const handleFaqs = (faqid) => {
    setSelected(faqid === selected ? null : faqid);
  };
  const faqs = [
    {
      id: 1,
      text: "What are frequently asked questions?",
      subtext:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae repudiandae nihil voluptatibus nostrum non culpa dolor sapiente maxime at, consequuntur quas fugit eaque nisi consequatur voluptatum reiciendis totam. Dicta, nihil.",
      plusicon: <FiPlus />,
      minusicon: <FiMinus />,
    },
    {
      id: 2,
      text: "What are frequently asked questions?",
      subtext:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae repudiandae nihil voluptatibus nostrum non culpa dolor sapiente maxime at, consequuntur quas fugit eaque nisi consequatur voluptatum reiciendis totam. Dicta, nihil.",
      plusicon: <FiPlus />,
      minusicon: <FiMinus />,
    },
    {
        id: 3,
        text: "What are frequently asked questions?",
        subtext:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae repudiandae nihil voluptatibus nostrum non culpa dolor sapiente maxime at, consequuntur quas fugit eaque nisi consequatur voluptatum reiciendis totam. Dicta, nihil.",
        plusicon: <FiPlus />,
        minusicon: <FiMinus />,
      },
      {
        id: 4,
        text: "What are frequently asked questions?",
        subtext:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae repudiandae nihil voluptatibus nostrum non culpa dolor sapiente maxime at, consequuntur quas fugit eaque nisi consequatur voluptatum reiciendis totam. Dicta, nihil.",
        plusicon: <FiPlus />,
        minusicon: <FiMinus />,
      },
      {
        id: 5,
        text: "What are frequently asked questions?",
        subtext:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae repudiandae nihil voluptatibus nostrum non culpa dolor sapiente maxime at, consequuntur quas fugit eaque nisi consequatur voluptatum reiciendis totam. Dicta, nihil.",
        plusicon: <FiPlus />,
        minusicon: <FiMinus />,
      },
      {
        id: 6,
        text: "What are frequently asked questions?",
        subtext:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae repudiandae nihil voluptatibus nostrum non culpa dolor sapiente maxime at, consequuntur quas fugit eaque nisi consequatur voluptatum reiciendis totam. Dicta, nihil.",
        plusicon: <FiPlus />,
        minusicon: <FiMinus />,
      },
  ];
  return (
    <div className='flex flex-col   bg-primary px-[17px] py-[96px] sm:px-[60px] xl:px-[100px]' id='FAQs'>
      <div>
        <div>
          <div className='flex justify-center sm:justify-start'>
            <div className='flex flex-col gap-[1px] mb-[23px] '>
              <h1 className='text-[#1C1042] text-[16px] font-bold leading-[24px] '>
                FAQs
              </h1>
              <span className='bg-[#6945D3] w-[45px] h-[3px] rounded-[10px]  inline-block '></span>
            </div>
          </div>

          <div className='mb-[48px] flex justify-center sm:justify-start'>
            <p className='text-center text-[24px] text-[#6945D3] font-medium leading-tight max-w-[331px] sm:text-left md:text-[40px]
            md:max-w-[600px] '>
              Answers To Frequently Asked Questions
            </p>
          </div>
        </div>
      </div>
      <div>
        {faqs.map((item, index) => (
          <div
            onClick={() => handleFaqs(item.id)}
            key={index}
            className='w-full bg-[#F5F3FC] mb-[32px] py-[8px] px-[16px] rounded-[6px] ease-in-out duration-300 transition-transform '
          >
            <div className='flex items-center justify-between '>
              <p className='text-[16px] font-bold text-black max-w-[234px] xs:max-w-full sm:max-w-full md:text-[24px]'>
                {item.text}
              </p>
              <p className="text-2xl font-bold md:text-3xl">{selected === item.id ? <FiMinus /> : <FiPlus />}</p>
            </div>
            <div className={`transition-all duration 300 ease-in-out overflow-hidden ${selected === item.id ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"} `}>
              <p>{item.subtext}</p>
            </div>
          </div>
        ))}
        <div className='px-[25px]'>
          <p className='text-center text-[24px] font-medium text-black mt-[64px] md:text-left'>
            Connect with us
          </p>
          <div className='flex items-center justify-between mb-[35px] mt-[23px] text-xl md:justify-start md:max-w-[300px] md:gap-[40px] '>
            <p>
              <FaLinkedinIn />
            </p>
            <p>
              <BsInstagram />
            </p>
            <p>
              <LiaBehanceSquare />
            </p>
            <p>
              <IoLogoFacebook />
            </p>
            <p>
              <RiTwitterXFill />
            </p>
          </div>
        </div>
        <div className='flex items-center justify-between border-[1px] py-[18px] px-[24px] border-solid border-[#6945D3] rounded-[8px]'>
          <p className='text-[14px] text-[#4A29AD] font-semibold leading-[22px]'>
            Subscribe to our newsletter
          </p>
          <p className='text-[#4A29AD] text-xl'>
            <FaArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQS;
