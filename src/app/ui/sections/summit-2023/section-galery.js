'use client'

import Container from "../../components/container/container";
import Text_body from "../../components/text/text-body";
import Text_display_2 from "../../components/text/text-display-2";
import Text_display_3 from "../../components/text/text-display-3";
import Text_head_1 from "../../components/text/text-head-1";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// import required modules
import { Grid, Pagination } from 'swiper/modules';


const galery = [
    {url: '/summit-2023/crea-summit-2023-1.jpeg'},
    {url: '/summit-2023/crea-summit-2023-2.jpeg'},
    {url: '/summit-2023/crea-summit-2023-3.jpeg'},
    {url: '/summit-2023/crea-summit-2023-4.jpeg'},
    {url: '/summit-2023/crea-summit-2023-5.jpeg'},
    {url: '/summit-2023/crea-summit-2023-6.jpeg'},
    {url: '/summit-2023/crea-summit-2023-7.jpeg'},
    {url: '/summit-2023/crea-summit-2023-8.jpeg'},
    {url: '/summit-2023/crea-summit-2023-9.jpeg'},
    {url: '/summit-2023/crea-summit-2023-10.jpeg'},
    {url: '/summit-2023/crea-summit-2023-11.jpeg'},
    {url: '/summit-2023/crea-summit-2023-12.jpeg'},
    {url: '/summit-2023/crea-summit-2023-13.jpeg'},
    {url: '/summit-2023/crea-summit-2023-14.jpeg'},
    {url: '/summit-2023/crea-summit-2023-15.jpeg'},
    {url: '/summit-2023/crea-summit-2023-16.jpeg'},
    {url: '/summit-2023/crea-summit-2023-17.jpeg'},
    {url: '/summit-2023/crea-summit-2023-18.jpeg'},
    {url: '/summit-2023/crea-summit-2023-19.jpeg'},
    {url: '/summit-2023/crea-summit-2023-20.jpeg'},
    {url: '/summit-2023/crea-summit-2023-21.jpeg'},
    {url: '/summit-2023/crea-summit-2023-22.jpeg'},
    {url: '/summit-2023/crea-summit-2023-23.jpeg'},
    {url: '/summit-2023/crea-summit-2023-24.jpeg'},
    {url: '/summit-2023/crea-summit-2023-25.jpeg'},
    {url: '/summit-2023/crea-summit-2023-26.jpeg'},
    {url: '/summit-2023/crea-summit-2023-27.jpeg'},
]


export default function Section_galery(){
    return(
        <>
        <section className="py-20 flex flex-col items-center justify-center">
            <Container className="flex flex-col gap-5 ">

                <Text_display_3 className="text-pink-summit-400 font-bold mb-5">Galeria de fotos</Text_display_3>

                <div className="grid h-[450px]">

                    <PhotoProvider>
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
                            className="w-full mx-auto h-[450px]"
                            id="swiper-summit_2023"
                        >
                            {galery.map((image, index) => (
                                <SwiperSlide>
                                    <PhotoView key={index} src={image.url}>
                                        <img src={image.url} className={`rounded-md h-auto hover:scale-95 transition-all`} alt={image.url}/>
                                    </PhotoView>
                                </SwiperSlide>
                            ))}
                        

                        </Swiper>
                </PhotoProvider>
                </div>

            </Container>
        </section>

        </>
    )
}