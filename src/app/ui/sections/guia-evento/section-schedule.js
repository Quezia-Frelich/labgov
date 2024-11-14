'use client'

import Container from "../../components/container/container";
import Text_body from "../../components/text/text-body";
import Text_display_2 from "../../components/text/text-display-2";
import Text_display_3 from "../../components/text/text-display-3";
import Text_head_1 from "../../components/text/text-head-1";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Text_head_3 from "../../components/text/text-head-3";
import Link from "next/link";
import Text_link from "../../components/text/text-link";



export default function Section_schedule(){
    return(
        <>
        <section className="min-h-screen py-20 flex flex-col items-center justify-center">
            <Container className="flex flex-col gap-10 text-violet-crea-700">
                <div>
                    <Text_display_3 className="font-bold mb-5">Macro Programação</Text_display_3>
                </div>
                
                <div className="flex gap-5">
                    <div className="py-1 px-5 bg-gradient-to-r from-violet-crea-700 to-violet-crea-400 max-w-min h-8 rounded-md text-white">
                        <Text_body className={'font-bold'}>22/11</Text_body>
                    </div>
                    <div className="space-y-2">
                        <Text_head_3 className={'font-bold text-violet-crea-700'}>Sexta Feira</Text_head_3>
                        <ul class="list-disc list-inside">
                            <li>17h - Credenciamento e abertura da feira</li>
                            <li>19h - Abertura oficial do evento</li>
                            <li>21h - Encerramento do primeiro dia</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-5">
                    <div className="py-1 px-5 bg-gradient-to-r from-violet-crea-700 to-violet-crea-400 max-w-min h-8 rounded-md text-white">
                        <Text_body className={'font-bold'}>23/11</Text_body>
                    </div>
                    <div className="space-y-2">
                        <Text_head_3 className={'font-bold text-violet-crea-700'}>Sábado</Text_head_3>
                        <ul class="list-disc list-inside">
                            <li>08h - Credenciamento e abertura da feira</li>
                            <li>09h - Início dos painéis/palestras do segundo dia</li>
                            <li>12h - Intervalo para almoço</li>
                            <li>14h - Retorno dos painéis/palestras</li>
                            <li>18h - Encerramento do evento</li>
                        </ul>

                    </div>
                </div>

                <Text_body>Para ver a programação detalhada <Text_link href={'/programacao'} underline={true}><strong>clique aqui.</strong></Text_link></Text_body>
            </Container>
        </section>

        </>
    )
}