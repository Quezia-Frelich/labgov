'use client'

import Container from "../../components/container/container";
import Text_body from "../../components/text/text-body";
import Text_display_3 from "../../components/text/text-display-3";
import Card_restaurant from "../../components/cards/card-restaurant";
import { data_restaurants } from "../../../../../data/data-restaurants";
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';



export default function Section_restaurant(){
    return(
        <>
        <section className="py-20 flex flex-col items-center justify-center">
            <Container className="flex flex-col gap-10 text-violet-crea-700">
                <div>
                    <Text_display_3 className="font-bold mb-5">Restaurantes no local</Text_display_3>
                    <Text_body>O EXPOCENTRO conta com uma praça de alimentação no local, contendo os seguintes restaurantes:</Text_body>
                </div>
                
                <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
                    {data_restaurants.map((restaurante, index)=>(
                        <Card_restaurant key={index} brand={restaurante.brand} description={restaurante.description} image={restaurante.image} menu={restaurante.menu} instagram={restaurante.instagram}/>
                    ))}
                </div>

                <div className="block md:hidden">
                    <Swiper
                    slidesPerView={1}
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
                    modules={[Pagination, Autoplay]}
                    id="main"
                    className="z-0"
                    >
                        {data_restaurants.map((restaurante, index)=>(
                            <SwiperSlide key={index}>
                                <Card_restaurant brand={restaurante.brand} description={restaurante.description} image={restaurante.image} menu={restaurante.menu} instagram={restaurante.instagram}/>
                            </SwiperSlide>
                        ))}
                        
                    </Swiper>
                </div>
            </Container>
        </section>

        </>
    )
}