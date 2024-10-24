'use client'

import Container from "../../components/container/container";
import Number_count from "../../components/number_count/number_count";



export default function Section_numbers(){
    return(
        <>
        <section className="min-h-72 bg-radial-gradient text-white py-20 flex flex-col items-center justify-center">
            <Container className="grid grid-cols-2 lg:grid-cols-4 gap-20">

                <div className="flex flex-col items-center justify-center gap-5">
                    <img src="/icons/icon_participantes.png" alt="Participantes" className="h-12 md:h-14"></img>
                    <Number_count before_number={'+'} number={700} title={'Participantes'} animate={true}/>
                </div>

                <div className="flex flex-col items-center justify-center gap-5">
                    <img src="/icons/icon_estandes.png" alt="Participantes" className="h-12 md:h-14"></img>
                    <Number_count before_number={'+'} number={50} title={'Estandes'} animate={true}/>
                </div>

                <div className="flex flex-col items-center justify-center gap-5">
                    <img src="/icons/icon_palestrantes.png" alt="Participantes" className="h-12 md:h-14"></img>
                    <Number_count before_number={'+'} number={30} title={'Palestrantes'} animate={true}/>
                </div>

                <div className="flex flex-col items-center justify-center gap-5">
                    <img src="/icons/icon_horas.png" alt="Participantes" className="h-12 md:h-14"></img>
                    <Number_count before_number={'+'} number={11} after_number={'h'} title={'de conteúdo'} animate={true}/>
                </div>

            </Container>
        </section>

        </>
    )
}