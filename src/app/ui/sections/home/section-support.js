'use client'

import { useState } from "react";
import Container from "../../components/container/container";
import { empresas } from "../../../../../data/data-palestrantes-2024";
import Button_outline from "../../components/buttons/button_outline";
import {
  ArrowRightIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import Text_head_1 from "../../components/text/text-head-1";

export default function SectionShowcaseLocal() {
  const [openCard, setOpenCard] = useState(null);

  const handleToggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <section
      className="bg-black flex flex-col text-white items-center justify-center"
      id="feiratecnologica"
    >
      <Container className="flex flex-col gap-10">
        <div className="flex items-center gap-2">
          <div className="h-12 bg-textDarkGreen rounded w-[5px]"></div>
          <div className="flex flex-col">
            <Text_head_1 className="font-bold">
              Apoio Institucional
            </Text_head_1>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {empresas.map((empresa, index) => {
            const isOpen = openCard === index;

            return (
              <div
                key={index}
                onClick={() => handleToggleCard(index)}
                className="group relative bg-black text-white border border-green-labgov-500 rounded-xl overflow-hidden shadow-md cursor-pointer transition-all duration-300 hover:border-white"
              >
                {/* Seta 
                <div
                  className={`
                    absolute
                    top-3
                    right-3
                    bg-white
                    rounded-full
                    p-2
                    shadow-lg
                    transition-all
                    duration-300
                    opacity-0
                    translate-y-1
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    ${
                      isOpen
                        ? "opacity-100 translate-y-0 rotate-180"
                        : ""
                    }
                  `}
                >
                  <ArrowDownIcon className="w-5 h-5 text-black" />
                </div>*/}

                {/* Logo */}
                <div className="w-full h-40 overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={empresa.urlLogo}
                    alt={empresa.titulo}
                    className="w-full h-full object-contain"
                    onError={(e) => (e.target.src = "/placeholder.png")}
                  />
                </div>

                {/* Conteúdo 
                {isOpen && (
                  <div className="p-5 space-y-3">
                    <h3 className="text-xl font-bold">
                      {empresa.titulo}
                    </h3>

                    <p className="text-sm leading-relaxed">
                      {empresa.descricaoEmpresas || empresa.descricao}
                    </p>

                    {empresa.link && (
                      <div className="mt-4 max-w-52">
                        <Button_outline
                          href={empresa.link}
                          text="Acessar site"
                          icon={<ArrowRightIcon className="size-5" />}
                          className="items-center justify-between rounded-full py-2 px-5 transition-all flex bg-violet-crea-400 hover:bg-violet-crea-700 text-white text-sm"
                          target={true}
                        />
                      </div>
                    )}
                  </div>
                )}*/}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}