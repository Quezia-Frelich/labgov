'use client'

import Container from "../../components/container/container";
import Number_count from "../../components/number_count/number_count";
import Text_body from "../../components/text/text-body";
import Text_display_2 from "../../components/text/text-display-2";
import Text_display_3 from "../../components/text/text-display-3";
import Text_head_1 from "../../components/text/text-head-1";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, Keyboard} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { data_reviews } from "../../../../../data/data-reviews-2024";


export default function Section_reviews(){

    const autoplayConfig = {
        disableOnInteraction: false,
        delay: 2500,
        pauseOnMouseEnter: true,
      }

    return(
        <>
        <section className="min-h-72 bg-radial-gradient text-white py-20 flex flex-col items-center justify-center">
            <Container className="space-y-10">
                <Text_display_3 className="font-bold mb-5">Depoimentos</Text_display_3>
                <Swiper
                slidesPerView={1}
                spaceBetween={20}
                modules={[Pagination, Autoplay, Navigation]}
                className="min-h-[470px]"
                id="swiper-summit_2023-reviews"
                autoplay={autoplayConfig}
                navigation={false}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                >
                {/* render array */}
                {data_reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                    <div className="border rounded-md bg-white/10 border-white p-5 text-white min-h-96 space-y-5 flex flex-col justify-center">
                        <Text_body>{review.review}</Text_body>
                        <Text_body className={'font-bold'}>{review.profile}</Text_body>
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </Container>
        </section>

        </>
    )
}