'use client'

import { useState } from "react";
import Container from "../../components/container/container";
import { beneficios } from "../../../../../data/data-support";
import Button_outline from "../../components/buttons/button_outline";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Text_head_1 from "../../components/text/text-head-1";

export default function SectionShowcaseLocal() {
  const [openCard, setOpenCard] = useState(null);

  const handleToggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <section className="py-10 bg-black flex flex-col text-white items-center justify-center" id="feiratecnologica">
      <Container className="flex flex-col gap-10">
        <div className="flex items-center gap-2">
          <div className="h-12 bg-textDarkGreen rounded w-[5px]"></div>
          <div className="flex flex-col">
            <Text_head_1 className="font-bold ">
              Apoio Institucional
            </Text_head_1>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {beneficios.map((beneficio, index) => {
            const isOpen = openCard === index;
            return (
              <div
                key={index}
                onClick={() => handleToggleCard(index)}
                className="bg-black text-white border border-green-labgov-500 rounded-xl overflow-hidden shadow-md cursor-pointer transition-all duration-300"
              >
                <div className="w-full h-40 overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={beneficio.urlLogo}
                    alt={beneficio.titulo}
                    className="w-full h-full object-contain"
                    onError={(e) => (e.target.src = "/placeholder.png")}
                  />
                </div>

                {isOpen && (
                  <div className="p-5 space-y-3">
                    <h3 className="text-xl font-bold">{beneficio.titulo}</h3>

                    <p className="text-sm leading-relaxed">
                      {beneficio.descricaoBeneficio || beneficio.descricao}
                    </p>
                    {beneficio.link &&
                      <div className="mt-4 max-w-52">
                        {beneficio.link &&
                          <Button_outline
                            href={beneficio.link}
                            text={"Acessar site"}
                            icon={<ArrowRightIcon className="size-5" />}
                            className={`items-center justify-between rounded-full py-2 px-5 transition-all flex bg-violet-crea-400 hover:bg-violet-crea-700 text-white text-sm`}
                            target={true} />
                        }
                      </div>}

                  </div>


                )}
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
