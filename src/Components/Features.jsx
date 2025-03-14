import React from "react";
import { IoPlay } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


function Features() {
  const features = [
    {
      id: 1,
      title: "Main Title",
      subtitle:
        "Ac euismod maecenas arcu sodales leo ipsum proin turpis. Ultricies tristique mollis risus et pretium placerat suspendie. Sed neque arcu volutpat malesuada nullam quisque egestas felis massa lectus.",
    },
    {
      id: 2,
      title: "Main Title",
      subtitle:
        "Ac euismod maecenas arcu sodales leo ipsum proin turpis. Ultricies tristique mollis risus et pretium placerat suspendie. Sed neque arcu volutpat malesuada nullam quisque egestas felis massa lectus.",
    },
    {
      id: 3,
      title: "Main Title",
      subtitle:
        "Ac euismod maecenas arcu sodales leo ipsum proin turpis. Ultricies tristique mollis risus et pretium placerat suspendie. Sed neque arcu volutpat malesuada nullam quisque egestas felis massa lectus.",
    },
    {
      id: 4,
      title: "Main Title",
      subtitle:
        "Ac euismod maecenas arcu sodales leo ipsum proin turpis. Ultricies tristique mollis risus et pretium placerat suspendie. Sed neque arcu volutpat malesuada nullam quisque egestas felis massa lectus.",
    },
    {
      id: 5,
      title: "Main Title",
      subtitle:
        "Ac euismod maecenas arcu sodales leo ipsum proin turpis. Ultricies tristique mollis risus et pretium placerat suspendie. Sed neque arcu volutpat malesuada nullam quisque egestas felis massa lectus.",
    },
    {
      id: 6,
      title: "Main Title",
      subtitle:
        "Ac euismod maecenas arcu sodales leo ipsum proin turpis. Ultricies tristique mollis risus et pretium placerat suspendie. Sed neque arcu volutpat malesuada nullam quisque egestas felis massa lectus.",
    },
  ];
  return (
    <div className='bg-primary  px-[17px] py-[18px] xs:px-[60px] xl:px-[100px]' id='Features'>
      <div>
        <div className='flex justify-center sm:justify-start '>
          <div className='flex flex-col gap-[1px] mb-[23px] '>
            <h1 className='text-[#1C1042] text-[16px] font-bold leading-[24px] '>
              Features
            </h1>
            <span className='bg-[#6945D3] w-[45px] h-[3px] rounded-[10px]  inline-block '></span>
          </div>
        </div>

        <div className='mb-[48px] flex justify-center xs:justify-center sm:justify-start'>
          <p className='text-center text-[24px] text-[#6945D3] font-medium leading-tight max-w-[315px] xs:text-center  sm:text-left sm:max-w-[370px] md:text-[40px] md:max-w-[600px]' >
            The Features you get for using our Tuckshop App
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-[48px] sm:grid sm:grid-cols-2 xl:grid-cols-3 '>
        {features.map((item, index) => (
          <div
            key={index}
            className=' w-auto max-w-[500px] border-solid border-2 border-[#A28CE4] bg-[#F5F3FC] rounded-[24px] pt-[72px]  pr-[24px] pb-[56px] pl-[24px] relative'
          >
            <p className='text-[#1C1042] text-[24px] font-bold leading-[32px] mb-[22px]'>
              {item.title}
            </p>
            <p className='text-[18px] text-[#3F3E42] leading-[24px] font-medium'>
              {" "}
              {item.subtitle}
            </p>
            <p className='absolute top-[-20px] left-[-8px] rounded-[50%] p-4 border-[1.5px] border-[#A28CE4] border-solid z-10 bg-[#F5F3FC] text-3xl'>
              <FaArrowRight />

            </p>
          </div>
        ))}
    
      </div>
      <div className='mt-[64px] flex justify-center'>
          <button className='flex items-center justify-center gap-[6px] rounded-[8px] py-[10px] px-[20px] border-solid border-[2px] border-[#6945D3] text-[16px] font-bold text-white bg-[#7452D6]'>
            Watch Demo
            <span className='text-white text-2xl'>
            <IoPlay />

            </span>
          </button>
        </div>
    </div>
  );
}

export default Features;
