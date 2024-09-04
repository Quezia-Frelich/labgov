'use client'

import Container from "../../components/container/container";
import Text_body from "../../components/text/text-body";
import Text_display_2 from "../../components/text/text-display-2";
import Text_display_3 from "../../components/text/text-display-3";
import Text_head_1 from "../../components/text/text-head-1";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



export default function Section_about(){
    return(
        <>
        <section className="md:min-h-[80vh] py-20 flex flex-col items-center justify-center">
            <Container className="flex flex-col gap-5 md:flex-row justify-between items-center">

                <div className="w-full md:w-96 ">
                    <Text_display_3 className="text-pink-summit-400 font-bold mb-5">Sobre o evento</Text_display_3>
                    <Text_body className={'text-pink-summit-500'}>O CREA-SC promove este evento com o intuito de ampliar o debate em relação a inovação e às novas tendências tecnológicas nas áreas da Engenharia, Agronomia e Geociências.</Text_body>
                </div>
                <video controls src="/summit-2023/video/video-summit-2023.mp4" className="w-full md:max-w-2xl rounded-lg"></video>
            </Container>
        </section>

        </>
    )
}