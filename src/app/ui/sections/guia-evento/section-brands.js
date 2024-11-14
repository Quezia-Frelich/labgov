
'use client'

import { useState, useEffect } from "react";
import Container from "../../components/container/container";
import Text_head_1 from "../../components/text/text-head-1";
import Text_display_3 from "../../components/text/text-display-3";
import Text_body from "../../components/text/text-body";
import { ArrowRightIcon, ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { data_empresas_expositoras } from "../../../../../data/data-empresas-expositoras";
import Button_outline from "../../components/buttons/button_outline";

export default function Section_brands(){
    const [openBox, setOpenBox] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const [filteredData, setFilteredData] = useState(data_empresas_expositoras);

    const handleOpenBox = (index) => {
      setOpenBox(openBox === index ? null : index);
    };

    useEffect(() => {
        const filtered = data_empresas_expositoras.filter((empresa) => {
            const matchesSearch = empresa.NomeDaEmpresa.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = filterCategory === 'Todos' || filterCategory === '' || empresa.Tag === filterCategory;
            return matchesSearch && matchesCategory;
        });
        setFilteredData(filtered);
    }, [searchTerm, filterCategory]);

    return (
        <section className="py-20 flex flex-col items-center justify-center">
            <Container className="flex flex-col gap-10 text-violet-crea-700">
                <div>
                    <Text_display_3 className="font-bold mb-5">Feira tecnológica</Text_display_3>
                    <Text_body>Descubra soluções inovadoras na feira do CREA Summit...</Text_body>
                </div>

                <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
                    <div className="flex items-center gap-2 p-3 bg-violet-crea-400/10 border border-violet-crea-400 rounded-lg w-full md:w-96">
                        <MagnifyingGlassIcon className="size-5"/>
                        <input 
                            type="text" 
                            placeholder="Buscar" 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-transparent text-violet-crea-600 placeholder:text-violet-crea-600 w-full focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center  gap-2 p-3 bg-violet-crea-400/10 border border-violet-crea-400 rounded-lg w-full md:w-min">
                        <select 
                            value={filterCategory} 
                            onChange={(e) => setFilterCategory(e.target.value)}
                            className="bg-transparent text-violet-crea-600 placeholder:text-violet-crea-600 w-full md:w-52 focus:outline-none"
                        >
                            <option value="" disabled>Filtrar por</option>
                            <option value="Todos">Todos</option>
                            <option value="Agtech">Agtech</option>
                            <option value="Construtech">Construtech</option>
                            <option value="Energia">Energia</option>
                            <option value="Ferramentas Digitais">Ferramentas Digitais</option>
                            <option value="Manufatura 4.0">Manufatura 4.0</option>
                            <option value="Smart Cities">Smart Cities</option>
                            <option value="Sistema Profissional">Sistema Profissional</option>
                            <option value="Parceira">Parceira</option>
                            <option value="Aceleradas">Aceleradas</option>
                        </select>
                    </div>
                </div>
                
                <div className={'grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3 text-violet-crea-600'}>
                {filteredData.map((empresa, index) => (
                    <div key={index} className={`${openBox === index ? 'col-span-2 xl:col-span-3 flex' : 'col-span-1 border-transparent max-w-96 mx-auto overflow-hidden'} border-2 border-violet-crea-500 rounded-lg transition-all duration-300 relative cursor-pointer group`} onClick={() => handleOpenBox(index)}>
                    
                    {/* Profile da empresa */}
                    <div></div>
                    <img src={`/empresas-expositoras-2024/${empresa.Tag}/${empresa.NomeDaEmpresa}.png`} alt={empresa.NomeDaEmpresa} className={`rounded-md max-h-80 ${openBox === index && 'hidden md:block'} `}/>

                    {/* Nome e titulo em profile */}
                    <div className={'absolute bottom-0 p-5 h-full flex flex-col justify-end text-center w-full'}>
                    {empresa.Tag !== "Parceira" && empresa.Tag !== "Sistema Profissional" && (
                        <div>
                        <img 
                            src={
                            empresa.Tag === "Aceleradas" ? `/empresas-expositoras-2024/${empresa.Tag}/crea-acelera.png` :
                            empresa.Tag === "Agtech" ? `/empresas-expositoras-2024/${empresa.Tag}/Acate-agtech.png` :
                            empresa.Tag === "Construtech" ? `/empresas-expositoras-2024/${empresa.Tag}/Acate-construtech.png` :
                            empresa.Tag === "Energia" ? `/empresas-expositoras-2024/${empresa.Tag}/Acate-energia.png` :
                            empresa.Tag === "Ferramentas Digitais" ? `/empresas-expositoras-2024/${empresa.Tag}/inovacrea.png` :
                            empresa.Tag === "Manufatura 4.0" ? `/empresas-expositoras-2024/${empresa.Tag}/Acate-manufatura.png` :
                            empresa.Tag === "Smart Cities" ? `/empresas-expositoras-2024/${empresa.Tag}/Acate-smart-cities.png` :
                            empresa.Tag === "Sistema Profissional" ? `/empresas-expositoras-2024/${empresa.Tag}/crea-acelera.png` :
                            ""
                            }
                            alt={empresa.NomeDaEmpresa} 
                            className={`rounded-md max-w-16 ${openBox === index ? 'hidden md:block absolute left-20 -translate-x-3 bottom-5' : 'mx-auto'}`}
                        />
                        </div>
                    )}
                    
                    <button className={openBox === index ? 'hidden' : 'bg-violet-crea-400 text-white rounded-full absolute top-2 right-2 w-5 group-hover:w-20 h-5 text-xs transition-all'}> 
                        <span className="block group-hover:hidden">+</span>
                        <span className="hidden group-hover:block">Ver mais</span>
                    </button>
                    </div>
          

                    {/* Descrição do empresa */}
                    <div className={openBox === index ? 'p-5' : 'hidden'}>
                        <div className="flex items-center gap-5">
                        <img src={`/empresas-expositoras-2024/${empresa.Tag}/${empresa.NomeDaEmpresa}.png`} alt={empresa.NomeDaEmpresa} className={`rounded-md max-h-20 md:hidden`}/>
                        <div>
                            <Text_head_1 className={'font-bold'}>{empresa.NomeDaEmpresa}</Text_head_1>
                            <p className={`text-xs text-nowrap w-min rounded-full py-1 px-3 my-2 text-[#072440] 
                                ${empresa.Tag === "Aceleradas" && 'bg-[#B6D7F5]' }
                                ${empresa.Tag === "Agtech" && 'bg-[#C3F48D]' }
                                ${empresa.Tag === "Construtech" && 'bg-[#FF9399]' }
                                ${empresa.Tag === "Energia" && 'bg-[#FFD290]' }
                                ${empresa.Tag === "Ferramentas Digitais" && 'bg-[#F5B6ED]' }
                                ${empresa.Tag === "Manufatura 4.0" && 'bg-[#C2CAD0]' }
                                ${empresa.Tag === "Parceira" && 'bg-[#C7A4FF]' }
                                ${empresa.Tag === "Smart Cities" && 'bg-[#E0D0C0]' }
                                ${empresa.Tag === "Sistema Profissional" && 'bg-[#8E90FF]' }
                                `}>
                                    {empresa.Tag}
                            </p>
                        </div>
                        </div>
                        {empresa.Bio && <p className="text-xs mt-2">{empresa.Bio}</p>}
                        {empresa.Site && 
                        <div className="mt-4 max-w-52">
                            {empresa.Site && 
                            <Button_outline
                            href={empresa.Site}
                            text={"Acessar site"}
                            icon={<ArrowRightIcon className="size-5"/>}
                            className={`items-center justify-between rounded-full py-2 px-5 transition-all flex bg-violet-crea-400 hover:bg-violet-crea-700 text-white text-sm`}
                            target={true}/>                        
                            }
                        </div>
                        }
                    </div>               

                    </div>

                ))}
                </div>
            </Container>
        </section>
    );
}
