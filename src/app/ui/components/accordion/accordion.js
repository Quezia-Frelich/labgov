'use client'

import { useState } from "react";
import Accordion_item from "./accordion-item";

export default function Accordion ( {data} ) {
    const[isActive, setIsActive] = useState (0)
    const setItemActive = (index) => {
        setIsActive(index === isActive ? isActive : index)
    }
  return (
    <>
    <div className='relative flex flex-col md:flex-row'>
      <div className='flex flex-col gap-5 w-full md:min-w-[550px]'>
          {data.map((item, index) => (
              <Accordion_item key={index} index={index} title={item.title} description={item.description} img={item.img} isActive={isActive} onClick={()=>setItemActive(index)}/>
          ))}
      </div>
      <img src={ data[isActive].img } className='hidden md:block w-full md:w-auto md:sticky md:h-96 right-0 inset-y-32 translate-x-2/4'></img>
    </div>
    </>
  );
}