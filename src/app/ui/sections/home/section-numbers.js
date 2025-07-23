'use client'

import Container from "../../components/container/container";
import Number_count from "../../components/number_count/number_count";
import Text_body from "../../components/text/text-body";
import Text_display_2 from "../../components/text/text-display-2";
import Text_display_3 from "../../components/text/text-display-3";
import Text_head_1 from "../../components/text/text-head-1";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



export default function Section_numbers() {
    return (
        <>
            <section className="min-h-72 bg-radial-gradient25 text-white py-20 flex flex-col items-center justify-center">
                <Text_display_3 className={'text-center mb-10'}>Expectativas da edição</Text_display_3>

                <Container className="grid grid-cols-2 lg:grid-cols-5 gap-20">

                    <div className="flex flex-col items-center justify-center gap-5">
                        <img src="/icons/icon_participantes.png" alt="Participantes" className="h-12 md:h-14"></img>
                        <Number_count before_number={'+'} number={2000} title={'Participantes'} animate={true} />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5">
                        <img src="/icons/icon_estados.png" alt="Participantes" className="h-12 md:h-14"></img>
                        <Number_count number={20} title={'Estados Presentes'} animate={true} />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5">
                        <img src="/icons/icon_estandes.png" alt="Participantes" className="h-12 md:h-14"></img>
                        <Number_count number={110} title={'Estandes'} animate={true} />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5">
                        <img src="/icons/icon_palestrantes.png" alt="Participantes" className="h-12 md:h-14"></img>
                        <Number_count number={55} title={'Palestrantes'} animate={true} />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5">
                        <img src="/icons/icon_horas.png" alt="Participantes" className="h-12 md:h-14"></img>
                        <Number_count before_number={'+'} number={13} after_number={'h'} title={'de conteúdo'} animate={true} />
                    </div>

                </Container>
            </section>

        </>
    )
}