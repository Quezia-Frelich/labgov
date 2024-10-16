'use client'

import Container from "../../components/container/container";
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Link from "next/link";
import Text_display_3 from "../../components/text/text-display-3";
import Text_head_1 from "../../components/text/text-head-1";


export default function Section_programs(){
    return(
        <>
        <section className="min-h-72 flex flex-col items-center justify-center ">
            <Container className={'border-t py-20'}>
            <Text_head_1 className={'text-violet-crea-400 mb-10 text-center'}>Outros programas</Text_head_1>
            <Swiper
            slidesPerView={4}
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
                slidesPerView: 4,
                centeredSlides: true,
                },
            }}
            modules={[Pagination, Autoplay]}
            id="main"
            >
                <SwiperSlide><Link target="blank" href="https://unicrea.crea-sc.org.br/"><img src="/programs/crea_unicrea.png" alt="Crea Unicrea" className="h-96 mx-auto"/></Link></SwiperSlide>
                <SwiperSlide><Link target="blank" href="https://entidadesdeclasse.crea-sc.org.br/"><img src="/programs/crea_entidades.png" alt="Crea entidades de classe" className="h-96 mx-auto"/></Link></SwiperSlide>
                <SwiperSlide><Link target="blank" href="https://acelera.crea-sc.org.br/"><img src="/programs/crea_acelera.png" alt="Crea Acelera" className="h-96 mx-auto"/></Link></SwiperSlide>
                <SwiperSlide><Link target="blank" href="https://creajovem.crea-sc.org.br/"><img src="/programs/crea_jovem.png" alt="Crea Jovem" className="h-96 mx-auto"/></Link></SwiperSlide>
                <SwiperSlide><Link target="blank" href="https://www.creajr-sc.org.br/landing/"><img src="/programs/crea_jr.png" alt="Crea JR" className="h-96 mx-auto"/></Link></SwiperSlide>
                <SwiperSlide><Link target="blank" href="https://inovacao.crea-sc.org.br/"><img src="/programs/crea_inova.png" alt="Crea Inova" className="h-96 mx-auto"/></Link></SwiperSlide>
            </Swiper>
            </Container>
        </section>

        </>
    )
}