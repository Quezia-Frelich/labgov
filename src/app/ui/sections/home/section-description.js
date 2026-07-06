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

                <p className="pt-5 pb-3 me-4 md:me-60">
  O LABGOV Summit é um encontro voltado à{" "}
  <span className="font-bold text-green-labgov-500">inovação</span> e à{" "}
  <span className="font-bold text-green-labgov-500">transformação digital no setor público</span>, com o propósito
  de gerar conexões que impulsionem a modernização dos serviços públicos no Brasil.
</p>

<p className="pb-3 me-4 md:me-60">
  O evento reúne organizações com sólida experiência em projetos públicos para compartilhar casos reais, soluções 
  implementadas e abordagens que geram impacto concreto na gestão pública.​
</p>

<p className="me-4 md:me-60">
  Mais do que um evento, o LABGOV Summit promove a articulação entre empresas, gestores públicos e lideranças, criando 
  um ambiente orientado à troca de experiências e à construção de soluções práticas e escaláveis para desafios reais 
  da transformação digital.​
</p>
            </Container>
        </section>
    )
}
