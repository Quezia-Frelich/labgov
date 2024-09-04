'use client'

import Container from "../../components/container/container";
import Number_count from "../../components/number_count/number_count";
import Text_body from "../../components/text/text-body";
import Text_display_2 from "../../components/text/text-display-2";
import Text_display_3 from "../../components/text/text-display-3";
import Text_head_1 from "../../components/text/text-head-1";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



export default function Section_numbers(){
    return(
        <>
        <section className="min-h-72 bg-radial-gradient text-white py-20 flex flex-col items-center justify-center">
            <Container className="flex flex-col gap-10 md:flex-row justify-between items-center md:items-start">
                <Number_count number={500} title={'Participantes no evento'} animate={true}/>
                <Number_count number={'5,5'} after_number={'k'} title={'Visualizações na página do evento'}/>
                <Number_count number={314} after_number={'k'} title={'Impressões no Instagram'} animate={true}/>
                <Number_count number={6} after_number={'k'} title={'Impressões no Facebook'}/>
            </Container>
        </section>

        </>
    )
}