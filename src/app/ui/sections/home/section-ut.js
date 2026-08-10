import Image from "next/image";

export default function SectionEcossistema() {
    return (
        <section className="relative overflow-hidden bg-[#0F1111]">
            {/* Gradientes */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#B78763] to-transparent" />


            <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-24 lg:flex-row lg:justify-center lg:gap-24">

                <div className="flex justify-center">
                    <Image
                        src="/elements/simbolo.png"
                        alt="Urban Tech Forum"
                        width={350}
                        height={350}
                        className="w-64 sm:w-72 lg:w-[350px] h-auto"
                        priority
                    />
                </div>

                <div className="max-w-2xl text-center lg:text-left">
                    <h5 className=" font-bold leading-tight text-white md:text-4xl ">
                        Conhecimento pela manhã
                        <br />
                        Conexões para o futuro à tarde
                    </h5>

                    <p className="mt-6 text-lg text-white/80">
                        Amplie sua experiência no Urban Tech Forum e faça parte do
                        ecossistema que está impulsionando a inovação, o governo digital e
                        o desenvolvimento das cidades inteligentes.
                    </p>

                    <a
                        href="https://sc.acate.com.br/urbantechforum#rd-box-joq3m2m2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="mt-8 rounded-full bg-white/10 px-8 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
                            Saiba mais
                        </button>
                    </a>
                </div>

            </div>
        </section>
    );
}