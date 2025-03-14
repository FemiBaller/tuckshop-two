"use client"
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Button } from "./Button";
function Navbar() {
    const [menu, setMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState(1)
    const handleMenu = (menuid) => {
        setActiveMenu(menuid)

        
        
       

    }
    const nav = [
        {id:1,
            name:"Home"

        },
        {id:2,
            name:"Features"

        },
        {id:3,
            name:"Watch Demo"

        },
        {id:4,
            name:"Reviews"

        },
        {id:5,
            name:"FAQs"

        },
    ]


  return (
    <div className="relative " >
    <nav className='w-full h-[108px] bg-[#7452D6] flex items-center justify-between px-[16px] py-[22px] fixed top-0 left-0  z-20 xs:px-[60px]   '>
      <h1 className='text-[18px] text-white '>Tuckshop.</h1>
      <p className='text-white text-4xl lg:hidden' onClick={() => setMenu(true)}>
        <IoMdMenu />
      </p>
      <div className="hidden lg:block">
      <ul className="flex flex-row gap-[24px]">
        {nav.map((item, index) => 
        ( 
         <div> <a href={"#" + item.name}>
             <li key={index} onClick={() => handleMenu(item.id)}  className={`pb-[1px] inline-block text-[20px] text-white font-medium ${activeMenu === item.id ? " border-b-4 border-white border-solid " : null} transition-all duration-300 ease-in-out`}> {item.name} </li>

         </a>
         
         </div>)
        )}

        </ul>
      </div>
      <div className="hidden lg:block">
      <Button children="Book Appointment" className="bg-[#FFEC41] text-black" />

      </div>
    
     
    </nav>
    
       <div className={` shadow-md bg-[#FAFAFA] h-[452px] w-[70%] rounded-[8px]  py-[11px] pl-[32px] pr-[18px] top-0 right-0 transition-transform duration-300 ease-in-out  ${menu ? " translate-x-0" : "translate-x-full " } z-40 fixed  `}>
       <div className="flex justify-end mb-[17px]">
       <p className="text-right text-[#4A29AD] text-3xl bg-[#D7CEF3] inline-block rounded-full p-1 " onClick={()=>setMenu(false)}> <IoClose />
       </p>
       </div>
       <div>
        <ul className="flex flex-col gap-[24px] mb-[32px]">
        {nav.map((item, index) => 
        ( 
         <div> <a href={"#" + item.name}>
             <li key={index} onClick={() => handleMenu(item.id)}  className={`pb-[1px] inline-block text-[20px] text-[#6945D3] font-medium ${activeMenu === item.id ? " border-b-4 border-[#4A29AD] border-solid " : null} transition-all duration-300 ease-in-out`}> {item.name} </li>

         </a>
         
         </div>)
        )}

        </ul>
         <Button children="Book Appointment" className="bg-[#7452D6] text-white" />
     
       </div>
       
    
   </div>

    
 
    </div>
  );
}

export default Navbar;
