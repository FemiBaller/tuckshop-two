import React from 'react'

function Demo() {
  return (
    <div className='px-[17px] py-[96px] bg-primary sm:px-[60px] xl:px-[100px]' id='Watch Demo'> 
         <div>
        <div className='flex justify-center sm:justify-start '>
          <div className='flex flex-col gap-[1px] mb-[23px] '>
            <h1 className='text-[#1C1042] text-[16px] font-bold leading-[24px] '>
              Watch Demo
            </h1>
            <span className='bg-[#6945D3] w-[45px] h-[3px] rounded-[10px]  inline-block '></span>
          </div>
        </div>

        <div className='mb-[48px] flex justify-center sm:justify-start'>
          <p className='text-center text-[24px] text-[#6945D3] font-medium leading-tight max-w-[277px]  sm:text-left sm:max-w-[320px] md:max-w-[600px] md:text-[40px] '>
        This is an overview of how the app works    
          </p>
        </div>
      </div>

  </div>
  )
}

export default Demo