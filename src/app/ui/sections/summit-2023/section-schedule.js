'use client'

import Container from "../../components/container/container";
import Text_body from "../../components/text/text-body";
import Text_display_2 from "../../components/text/text-display-2";
import Text_display_3 from "../../components/text/text-display-3";
import Text_head_1 from "../../components/text/text-head-1";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Text_head_3 from "../../components/text/text-head-3";



export default function Section_schedule(){
    return(
        <>
        <section className="py-20 flex flex-col items-center justify-center">
            <Container className="flex flex-col gap-10">
                <div>
                    <Text_display_3 className="text-pink-summit-400 font-bold mb-5">Programação</Text_display_3>
                    <Text_body className={'text-pink-summit-500 max-w-5xl'}>O evento ocorreu em 2 dias e foi dividido nos seguintes assuntos:</Text_body>
                </div>
                
                <div className="flex gap-5">
                    <div className="py-1 px-5 bg-violet-crea-700 max-w-min h-8 rounded-md text-white">
                        <Text_body className={'font-bold'}>07/07</Text_body>
                    </div>
                    <div className="space-y-2">
                        <Text_head_3 className={'font-bold text-violet-crea-700'}>Primeiro dia de evento</Text_head_3>
                        <ul class="list-disc list-inside">
                            <li>17h - Credenciamento do CREA Summit 2023</li>
                            <li>19h - Abertura do CREA Summit 2023</li>
                            <li>20h - Phygital: a imersão digital no mundo da engenharia</li>
                            <li>20:20 - Palestra: “Inovação e desafios tecnológicos profissionais”</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-5">
                    <div className="py-1 px-5 bg-violet-crea-700 max-w-min h-8 rounded-md text-white">
                        <Text_body className={'font-bold'}>08/07</Text_body>
                    </div>
                    <div className="space-y-2">
                        <Text_head_3 className={'font-bold text-violet-crea-700'}>Segundo dia de evento</Text_head_3>
                        <ul class="list-disc list-inside">
                            <li>08h - Credenciamento do CREA Summit 2023</li>
                            <li>09h - Painel: “Tecnologias que proporcionam a identificação de obras irregulares”</li>
                            <li>10h - Palestra: “Tendências e tecnologias para cidades inteligentes e sustentáveis”</li>
                            <li>11h - Oportunidades no setor de tecnologia e case Prevision</li>
                            <li>14h - Palestra: “Digitalização da Construção”</li>
                            <li>15h - Painel: Benefício da regulamentação da profissão para os profissionais registrados no CREA-SC</li>
                            <li>16h - Painel: Tecnologias em ascensão no agronegócio (Agro 4.0) e os desafios profissionais</li>
                            <li>17h - Palestra: Mercado de trabalho e empreendedorismo, tendências e a realidade de Santa Catarina</li>
                            <li>18h - O uso do BIM nas diversas especialidades de engenharia</li>
                            <li>18:30 - Encerramento do CREA Summit 2023</li>
                        </ul>

                    </div>
                </div>
            </Container>
        </section>

        </>
    )
}