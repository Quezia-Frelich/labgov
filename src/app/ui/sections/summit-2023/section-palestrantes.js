"use client"

import { data_palestrantes } from "../../../../../data/data-palestrantes";
import Container from "../../components/container/container";
import Text_body from "../../components/text/text-body";
import Text_display_3 from "../../components/text/text-display-3";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import required modules
import { Grid, Pagination } from 'swiper/modules';


export default function Section_palestrantes(){
    return(
        <>
        <section className="py-20 flex flex-col items-center justify-center">
            <Container className="flex flex-col gap-10">
                <div>
                    <Text_display_3 className="text-pink-summit-400 font-bold mb-5">Palestrantes</Text_display_3>
                    <Text_body className={'text-pink-summit-500 max-w-5xl'}>22 palestrantes abordaram temas como: desafios tecnológicos, digitalização da construção, agronegócio e desafios profissionais, empreendedorismo, mercado de trabalho, regulamentação profissional, inovação, BIM nas engenharias e smart cities.</Text_body>
                </div>

                <div className="hidden md:grid grid-cols-2 md:grid-cols-8 gap-5">
                    {data_palestrantes.map((palestrante, index) => (
                        <div key={index} className="space-y-3">
                            <img src={palestrante.profile} alt={palestrante.profile} className="rounded-md"/>
                            <div className="text-center">
                                <Text_body className={'text-sm text-violet-crea-500 font-medium leading-4 mb-1'}>{palestrante.name}</Text_body>
                                <Text_body className={'text-xs'}>{palestrante.subtitle}</Text_body>
                                <Text_body className={'text-xs'}>{palestrante.position}</Text_body>
                            </div>
                        </div>
                    ) )}

                </div>

                <div className="grid md:hidden h-[550px] ">

                        <Swiper
                            breakpoints={{
                      
                                350: { // A partir de 640px
                                  slidesPerView: 2,  
                                  grid: {
                                    rows: 3, 
                                  },
                                },
                                980: { // A partir de 640px
                                  slidesPerView: 7,  
                                  grid: {
                                    rows: 3, 
                                  },
                                },
                                
                              }}
                            
                            spaceBetween={20}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[Grid, Pagination]}
                            className="w-full mx-auto h-[550px]"
                            id="swiper-palestrantes"
                        >
                            
                                
                                    
                            {data_palestrantes.map((palestrante, index) => (
                                <SwiperSlide key={index} className="space-y-3">
                                    <img src={palestrante.profile} alt={palestrante.profile} className="rounded-md w-32 mx-auto"/>
                                    <div className="text-center">
                                        <Text_body className={'text-sm text-violet-crea-500 font-medium leading-4 mb-1'}>{palestrante.name}</Text_body>
                                        <Text_body className={'text-xs'}>{palestrante.subtitle}</Text_body>
                                         <Text_body className={'text-xs'}>{palestrante.position}</Text_body>
                                    </div>
                                </SwiperSlide>
                            ))}
                                    
                                
                      
                        

                        </Swiper>
                </div>

            </Container>
        </section>

        </>
    )
}