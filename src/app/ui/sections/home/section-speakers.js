'use client'

import { useState } from "react";
import Container from "../../components/container/container";
import { data_palestrantes_2024 } from "../../../../../data/data-palestrantes-2024";
import Text_head_3 from "../../components/text/text-head-3";
import Text_head_1 from "../../components/text/text-head-1";
import Text_body from "../../components/text/text-body";
import Icon_linkedin from "../../icons/footer/LinkedIn";
import Icon_instagram from "../../icons/footer/Instagram";
import Text_display_3 from "../../components/text/text-display-3";

export default function Section_speakers() {
  const [openBox, setOpenBox] = useState(2);

  const handleOpenBox = (index) => {
    setOpenBox(openBox === index ? 2 : index);
  }

  return (
    <section className="my-10 py-10 flex items-center justify-center">
      <Container>
        <Text_display_3 className={'text-violet-crea-400 font-bold mb-10'}>Palestrantes</Text_display_3>
        <div className={'grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-10 text-violet-crea-600'}>
          {data_palestrantes_2024.map((palestrante, index) => (
            <div key={index} className={`${openBox === index ? 'col-span-2 border-2 border-violet-crea-600 flex' : 'col-span-1 border-transparent max-w-96 mx-auto overflow-hidden'} border-2 rounded-lg transition-all duration-300 relative`} onClick={() => handleOpenBox(index)}>
              
              {/* Profile do palestrante */}
              <img src={palestrante.profile} alt={palestrante.fullName} className={`rounded-md max-h-96 ${openBox === index && 'hidden md:block'} `}/>

              {/* Nome e titulo em profile */}
              <div className={openBox === index ? 'hidden' : 'absolute bottom-0 p-5 h-44 flex flex-col justify-end text-center bg-gradient-to-b from-violet-crea-600/0 to-violet-crea-600/80 w-full text-white'}>
                <div>
                  <Text_head_3 className={'font-extrabold'}>{palestrante.fullName}</Text_head_3>
                  <p className={'text-xs'}>{palestrante.position}</p>
                </div>
              </div>

              {/* Descrição do palestrante */}
              <div className={openBox === index ? 'p-5' : 'hidden'}>
                <div className="flex items-center gap-5">
                  <img src={palestrante.profile} alt={palestrante.fullName} className={`rounded-md max-h-20 md:hidden`}/>
                  <div>
                    <Text_head_1 className={'font-bold'}>{palestrante.fullName}</Text_head_1>
                    <Text_body className={'text-violet-crea-500'}>{palestrante.position}</Text_body>
                  </div>
                </div>
                <p className="text-xs mt-5">{palestrante.description}</p>
                <div className="flex items-center justify-start gap-5 mt-5 text-violet-crea-400">
                  {palestrante.instagram && <Icon_instagram href={palestrante.instagram}/>}
                  {palestrante.linkedin && <Icon_linkedin href={palestrante.linkedin}/>}
                </div>
              </div>               

            </div>

          ))}
        </div>
      </Container>
    </section>
  );
}
