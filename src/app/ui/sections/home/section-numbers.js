'use client'

import Container from "../../components/container/container";
import Number_count from "../../components/number_count/number_count";

export default function Section_numbers() {
    return (
        <section className="relative min-h-72 bg-black text-white py-40 flex flex-col items-center justify-center overflow-hidden">
            {/* Imagem SVG fixa na direita */}
            <img
                src="/elements/grafo.svg"
                alt=""
                className="absolute right-0 top-0 h-full object-contain pointer-events-none"
            />

            <Container>
                <img
                    src={"/brand/logo-labgov-header.png"}
                    className="w-82"
                    alt="Crea Summit 2024 Logo"
                />

                <p className="pt-5 pb-3 me-60">
                    O LABGOV Summit é um encontro voltado à{" "}
                    <span className="font-bold text-green-labgov-500">inovação</span> e à{" "}
                    <span className="font-bold text-green-labgov-500">transformação digital no setor público</span>, com o propósito
                    de gerar conexões que impulsionem a modernização dos serviços públicos no Brasil.
                </p>

                <p className="pb-3 me-60">
                    Idealizado por um grupo de empresas que integram o Núcleo de Transformação Digital e Inovação da Vertical
                    Smart Cities da ACATE, o evento reúne organizações com sólida experiência em projetos públicos para compartilhar 
                    cases reais, boas práticas, tecnologias aplicadas e modelos de gestão inovadores.
                </p>
                
                <p className="me-60">
                    Mais do que um evento, o LABGOV Summit é um espaço de troca, inspiração e articulação entre empresas, gestores
                    públicos, lideranças e agentes de inovação, com foco em soluções práticas e escaláveis para os desafios da
                    transformação digital no setor público.
                </p>
            </Container>
        </section>
    )
}
