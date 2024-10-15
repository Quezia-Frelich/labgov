'use client'

import Container from "../../components/container/container";
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, autoplay } from 'swiper/modules';
import Link from "next/link";


export default function Section_programs(){
    return(
        <>
        <section className="min-h-72 py-20 flex flex-col items-center justify-center">
            <Container>
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            centeredSlides={true} // Centrando los slides
            autoplay={{
                delay: 3000, // Retraso entre cada slide en milisegundos (3 segundos)
                disableOnInteraction: false, // Para que el autoplay no se detenga al interactuar
            }}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                // Cuando la ventana es >= 320px
                320: {
                slidesPerView: 1, // 1 slide por vista en pantallas pequeñas
                spaceBetween: 20,
                centeredSlides: true, // Centrando el slide en versión responsive
                },
                // Cuando la ventana es >= 640px
                640: {
                slidesPerView: 2,
                spaceBetween: 20,
                },
                // Cuando la ventana es >= 768px
                768: {
                slidesPerView: 3,
                spaceBetween: 30,
                },
                // Cuando la ventana es >= 1024px
                1024: {
                slidesPerView: 4,
                spaceBetween: 30,
                },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            >
                <SwiperSlide><Link href="#"><img src="/programs/crea_unicrea.png" alt="Crea Unicrea" className="h-96"/></Link></SwiperSlide>
                <SwiperSlide><Link href="#"><img src="/programs/crea_entidades.png" alt="Crea entidades de classe" className="h-96"/></Link></SwiperSlide>
                <SwiperSlide><Link href="#"><img src="/programs/crea_acelera.png" alt="Crea Acelera" className="h-96"/></Link></SwiperSlide>
                <SwiperSlide><Link href="#"><img src="/programs/crea_jovem.png" alt="Crea Jovem" className="h-96"/></Link></SwiperSlide>
                <SwiperSlide><Link href="#"><img src="/programs/crea_jr.png" alt="Crea JR" className="h-96"/></Link></SwiperSlide>
                <SwiperSlide><Link href="#"><img src="/programs/crea_inova.png" alt="Crea Inova" className="h-96"/></Link></SwiperSlide>
            </Swiper>
            </Container>
        </section>

        </>
    )
}