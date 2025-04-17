'use client'

import Container from "../../components/container/container";
import Text_body from "../../components/text/text-body";
import Text_display_2 from "../../components/text/text-display-2";
import Text_display_3 from "../../components/text/text-display-3";
import Text_head_1 from "../../components/text/text-head-1";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Text_head_3 from "../../components/text/text-head-3";
import Text_link from "../../components/text/text-link";



export default function Section_schedule() {
    return (
        <>
            <section className="py-20 flex flex-col items-center justify-center">
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
                            <ul className="list-disc list-inside">
                                <li>17:00 - Abertura da Feira Tecnológica </li>
                                <li>19:00 - Abertura do CREA Summit 2024
                                    <button
                                        className="py-1 px-5 mx-3 rounded-full bg-schedule-violet-100 text-schedule-violet-500 text-sx"
                                        onClick={() => handleFilterScenery('')} disabled
                                    >
                                        <Text_body className="text-xs">PLENÁRIA</Text_body>
                                    </button>
                                </li>
                                <li>19:30 - Painel LIDE: Desafios e Oportunidades para o Brasil
                                    <button
                                        className="py-1 px-5 mx-3 rounded-full bg-schedule-violet-100 text-schedule-violet-500 text-sx"
                                        onClick={() => handleFilterScenery('')} disabled
                                    >
                                        <Text_body className="text-xs">PLENÁRIA</Text_body>
                                    </button>
                                </li>
                                <li>20:30 - Encerramento e Networking
                                    <button
                                        className="py-1 px-5 mx-3 rounded-full bg-schedule-violet-100 text-schedule-violet-500 text-sx"
                                        onClick={() => handleFilterScenery('')} disabled
                                    >
                                        <Text_body className="text-xs">PLENÁRIA</Text_body>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className="py-1 px-5 bg-gradient-to-r from-violet-crea-700 to-violet-crea-400 max-w-min h-8 rounded-md text-white">
                            <Text_body className={'font-bold'}>23/11</Text_body>
                        </div>
                        <div className="space-y-2">
                            <Text_head_3 className={'font-bold text-violet-crea-700'}>Sábado</Text_head_3>
                            <ul className="list-disc list-inside">
                                <li>08:00 - Abertura da Feira Tecnológica</li>
                                <li>09:00 - Soluções Construtivas Ágeis
                                    <button
                                        className="py-1 px-5 mx-3 rounded-full bg-schedule-violet-100 text-schedule-violet-500 text-sx"
                                        onClick={() => handleFilterScenery('')} disabled
                                    >
                                        <Text_body className="text-xs">PLENÁRIA</Text_body>
                                    </button>
                                </li>
                                <li>09:00 - Sistemas de produção mais resilientes: O papel da Agricultura Regenerativa
                                    <button
                                        className="py-1 px-5 mx-3 rounded-full bg-schedule-blue-100 text-schedule-blue-500 text-sx"
                                        onClick={() => handleFilterScenery('')} disabled
                                    >
                                        <Text_body className="text-xs">TECH 1</Text_body>
                                    </button>
                                </li>
                                <li>09:00 - Eficiência em Manufatura: Modelos Matemáticos e IA para Maximizar a Produtividade
                                    <button
                                        className="py-1 px-5 mx-3 rounded-full bg-schedule-pink-100 text-schedule-pink-500 text-sx"
                                        onClick={() => handleFilterScenery('')} disabled
                                    >
                                        <Text_body className="text-xs">TECH 2</Text_body>
                                    </button>
                                </li>
                                <li>09:40 - O papel dos profissionais do sistema na transformação das cidades em ambientes mais inteligentes e sustentáveis
                                    <button
                                        className="py-1 px-5 mx-3 rounded-full bg-schedule-violet-100 text-schedule-violet-500 text-sx"
                                        onClick={() => handleFilterScenery('')} disabled
                                    >
                                        <Text_body className="text-xs">PLENÁRIA</Text_body>
                                    </button>
                                </li>
                                <li>09:40 - Sistemas Energéticos Eficientes
                                    <button
                                        className="py-1 px-5 mx-3 rounded-full bg-schedule-blue-100 text-schedule-blue-500 text-sx"
                                        onClick={() => handleFilterScenery('')} disabled
                                    >
                                        <Text_body className="text-xs">TECH 1</Text_body>
                                    </button>
                                </li>
                                <li>09:40 - Do Campus ao Mercado: Inovações, Empreendedorismo e Oportunidades
                                    <button
                                        className="py-1 px-5 mx-3 rounded-full bg-schedule-pink-100 text-schedule-pink-500 text-sx"
                                        onClick={() => handleFilterScenery('')} disabled
                                    >
                                        <Text_body className="text-xs">TECH 2</Text_body>
                                    </button>
                                </li>
                                <li>10:20 - Inovação no Sistema Profissional
                                <button
                                        className="py-1 px-5 mx-3 rounded-full bg-schedule-violet-100 text-schedule-violet-500 text-sx"
                                        onClick={() => handleFilterScenery('')} disabled
                                    >
                                        <Text_body className="text-xs">PLENÁRIA</Text_body>
                                    </button>
                                </li>
                                <li>11:10 - Indústria 4.0 e Neo Industrialização: A Revolução Digital que está redefinindo o futuro da produção
                                <button
                                        className="py-1 px-5 mx-3 rounded-full bg-schedule-violet-100 text-schedule-violet-500 text-sx"
                                        onClick={() => handleFilterScenery('')} disabled
                                    >
                                        <Text_body className="text-xs">PLENÁRIA</Text_body>
                                    </button>
                                </li>
                                <li>14:00 - Energia Renovável e o Mercado Livre
                                <button
                                        className="py-1 px-5 mx-3 rounded-full bg-schedule-violet-100 text-schedule-violet-500 text-sx"
                                        onClick={() => handleFilterScenery('')} disabled
                                    >
                                        <Text_body className="text-xs">PLENÁRIA</Text_body>
                                    </button>
                                </li>
                                <li>14:40 - Tecnologias disruptivas: Hidrogênio para a Eficiência Energética e Descarbonização
                                <button
                                        className="py-1 px-5 mx-3 rounded-full bg-schedule-violet-100 text-schedule-violet-500 text-sx"
                                        onClick={() => handleFilterScenery('')} disabled
                                    >
                                        <Text_body className="text-xs">PLENÁRIA</Text_body>
                                    </button>
                                </li>
                                <li>15:30 - Comitê BIM CREA-SC ações e desafios para Santa Catarina
                                <button
                                        className="py-1 px-5 mx-3 rounded-full bg-schedule-violet-100 text-schedule-violet-500 text-sx"
                                        onClick={() => handleFilterScenery('')} disabled
                                    >
                                        <Text_body className="text-xs">PLENÁRIA</Text_body>
                                    </button>
                                </li>
                                <li>15:30 - Novo profissional do Agronegócio
                                <button
                                        className="py-1 px-5 mx-3 rounded-full bg-schedule-blue-100 text-schedule-blue-500 text-sx"
                                        onClick={() => handleFilterScenery('')} disabled
                                    >
                                        <Text_body className="text-xs">TECH 1</Text_body>
                                    </button>
                                </li>
                                <li>15:30 - Engenharia com Elas: Conquistas, Desafios e Oportunidades para as Próximas Gerações
                                <button
                                        className="py-1 px-5 mx-3 rounded-full bg-schedule-pink-100 text-schedule-pink-500 text-sx"
                                        onClick={() => handleFilterScenery('')} disabled
                                    >
                                        <Text_body className="text-xs">TECH 2</Text_body>
                                    </button>
                                </li>
                                <li>6:10 - Mútua SC, inovação para o fortalecimento dos profissionais e entidades
                                <button
                                        className="py-1 px-5 mx-3 rounded-full bg-schedule-violet-100 text-schedule-violet-500 text-sx"
                                        onClick={() => handleFilterScenery('')} disabled
                                    >
                                        <Text_body className="text-xs">PLENÁRIA</Text_body>
                                    </button>
                                </li>
                                <li>16:25 - Senna Tower - Maior Edifício Residencial do Mundo
                                <button
                                        className="py-1 px-5 mx-3 rounded-full bg-schedule-violet-100 text-schedule-violet-500 text-sx"
                                        onClick={() => handleFilterScenery('')} disabled
                                    >
                                        <Text_body className="text-xs">PLENÁRIA</Text_body>
                                    </button>
                                </li>
                                <li>17:15 - Encerramento
                                <button
                                        className="py-1 px-5 mx-3 rounded-full bg-schedule-violet-100 text-schedule-violet-500 text-sx"
                                        onClick={() => handleFilterScenery('')} disabled
                                    >
                                        <Text_body className="text-xs">PLENÁRIA</Text_body>
                                    </button>
                                </li>
                            </ul>

                        </div>
                    </div>
                </Container>
            </section>

        </>
    )
}