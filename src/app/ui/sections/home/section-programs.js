'use client'

import Container from "../../components/container/container";
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Link from "next/link";
import Text_head_1 from "../../components/text/text-head-1";


export default function Section_programs(){
    return(
        <>
        <section className="min-h-72 flex flex-col items-center justify-center ">
            <Container className={'border-t py-20'}>
                <Text_head_1 className={'text-violet-crea-400 mb-10 text-center'}>Programas do CREA-SC</Text_head_1>

                <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-5 ">
                    <Link target="blank" href="https://unicrea.crea-sc.org.br/"><img src="/programs/crea_unicrea.png" alt="Crea Unicrea" className="w-full"/></Link>
                    <Link target="blank" href="https://entidadesdeclasse.crea-sc.org.br/"><img src="/programs/crea_entidades.png" alt="Crea entidades de classe" className="w-full"/></Link>
                    <Link target="blank" href="https://acelera.crea-sc.org.br/"><img src="/programs/crea_acelera.png" alt="Crea Acelera" className="w-full"/></Link>
                    <Link target="blank" href="https://creajovem.crea-sc.org.br/"><img src="/programs/crea_jovem.png" alt="Crea Jovem" className="w-full"/></Link>
                    <Link target="blank" href="https://www.creajr-sc.org.br/landing/"><img src="/programs/crea_jr.png" alt="Crea JR" className="w-full"/></Link>
                    <Link target="blank" href="https://inovacao.crea-sc.org.br/"><img src="/programs/crea_inova.png" alt="Crea Inova" className="w-full"/></Link>
                </div>
                
                <div className="block md:hidden">
                    <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={false}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        // Cuando la ventana es >= 320px
                        320: {
                        slidesPerView: 1, 
                        centeredSlides: true,
                        },
                        // Cuando la ventana es >= 640px
                        640: {
                        slidesPerView: 2,
                        },
                        // Cuando la ventana es >= 768px
                        990: {
                        slidesPerView: 3,
                        centeredSlides: true,
                        },
                        // Cuando la ventana es >= 1024px
                        1024: {
                        slidesPerView: 5,
                        centeredSlides: true,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    id="main"
                    >
                        <SwiperSlide><Link target="blank" href="https://unicrea.crea-sc.org.br/"><img src="/programs/crea_unicrea.png" alt="Crea Unicrea" className="h-72 mx-auto"/></Link></SwiperSlide>
                        <SwiperSlide><Link target="blank" href="https://entidadesdeclasse.crea-sc.org.br/"><img src="/programs/crea_entidades.png" alt="Crea entidades de classe" className="h-72 mx-auto"/></Link></SwiperSlide>
                        <SwiperSlide><Link target="blank" href="https://acelera.crea-sc.org.br/"><img src="/programs/crea_acelera.png" alt="Crea Acelera" className="h-72 mx-auto"/></Link></SwiperSlide>
                        <SwiperSlide><Link target="blank" href="https://creajovem.crea-sc.org.br/"><img src="/programs/crea_jovem.png" alt="Crea Jovem" className="h-72 mx-auto"/></Link></SwiperSlide>
                        <SwiperSlide><Link target="blank" href="https://www.creajr-sc.org.br/landing/"><img src="/programs/crea_jr.png" alt="Crea JR" className="h-72 mx-auto"/></Link></SwiperSlide>
                        <SwiperSlide><Link target="blank" href="https://inovacao.crea-sc.org.br/"><img src="/programs/crea_inova.png" alt="Crea Inova" className="h-72 mx-auto"/></Link></SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </section>

        </>
    )
}