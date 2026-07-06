'use client'

import { useState } from "react";
import Container from "../../components/container/container";
import { data_palestrantes_2024 } from "../../../../../data/data-palestrantes-2025";
import Text_head_3 from "../../components/text/text-head-3";
import Text_head_1 from "../../components/text/text-head-1";
import Text_display_3 from "../../components/text/text-display-3";
import Icon_instagram from "../../icons/footer/Instagram";
import Icon_linkedin from "../../icons/footer/LinkedIn";

export default function Section_speakers() {
  const [openBox, setOpenBox] = useState(null);

  const handleOpenBox = (index) => {
    setOpenBox(openBox === index ? null : index);
  }

  return (
    <section className="py-10 bg-black flex flex-col text-white items-center justify-center" id="palestrantes">
      <Container>
        <div className="flex flex-col">
                    <Text_head_1 className="font-bold ">
                      Palestrantes
                    </Text_head_1>
                  </div>
        <div className={'grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5 pt-10 text-violet-crea-600'}>
          {data_palestrantes_2024.map((palestrante, index) => (
            <div key={index} className={`${openBox === index ? 'col-span-2 xl:col-span-3 border-2 border-violet-crea-600 flex' : 'col-span-1 border-transparent max-w-96 mx-auto overflow-hidden'} border-2 rounded-lg transition-all duration-300 relative cursor-pointer group`} onClick={() => handleOpenBox(index)}>
              
              {/* Profile do palestrante */}
              <img src={palestrante.profile} alt={palestrante.fullName} className={`rounded-md max-h-64 ${openBox === index && 'hidden md:block'} `}/>

              {/* Nome e titulo em profile */}
              <div className={openBox === index ? 'hidden' : 'absolute bottom-0 p-4 h-full flex flex-col justify-end text-center bg-gradient-to-b from-40% from-violet-crea-600/0 to-violet-crea-600/80 w-full text-white'}>
                <div>
                  <Text_head_3 className={'font-extrabold'}>{palestrante.fullName}</Text_head_3>
                  <p className={'text-xs leading-tight'}>{palestrante.position}</p>
                </div>
                <button className="bg-green-labgov-500 text-white rounded-full absolute top-2 right-2 w-5 group-hover:w-20 h-5 text-xs transition-all"> 
                  <span className="block group-hover:hidden">+</span>
                  <span className="hidden group-hover:block">Ver mais</span>
                </button>
              </div>             

              {/* Descrição do palestrante */}
              <div className={openBox === index ? 'p-5' : 'hidden'}>
                <div className="flex items-center gap-5">
                  <img src={palestrante.profile} alt={palestrante.fullName} className={`rounded-md max-h-20 md:hidden`}/>
                  <div>
                    <Text_head_1 className={'font-bold'}>{palestrante.fullName}</Text_head_1>
                    <p className={'text-green-labgov-500 text-sm'}>{palestrante.position}</p>
                  </div>
                </div>
                <p className="text-xs mt-2">{palestrante.description}</p>
                <div className="flex items-center justify-start gap-5 mt-2 text-green-labgov-500">
                  {palestrante.instagram && <Icon_instagram key={palestrante.instagram} href={palestrante.instagram}/>}
                  {palestrante.linkedin && <Icon_linkedin key={palestrante.linkedin} href={palestrante.linkedin}/>}
                </div>
              </div>               

            </div>

          ))}
        </div>
      </Container>
    </section>
  );
}
