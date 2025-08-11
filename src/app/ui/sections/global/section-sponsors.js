import Image from "next/image";
import { programacao } from "../../../../../data/data-programacao-card";

export default function ProgramacaoSection() {
  return (
    <section className="relative min-h-72 bg-black text-white py-40 flex flex-col px-32 overflow-hidden">
      <h2 className="text-white text-xl font-bold mb-6">Programação</h2>
      <div className="space-y-4">
        {programacao.map((item, idx) => (
          <div key={idx} className="border-b border-white/30 pb-4">
            <div className="flex items-start gap-4">
              {/* Ícone */}
              <div className="flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.titulo}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>

              {/* Horário */}
              <div className="text-white font-semibold w-14">
                {item.hora}
              </div>

              {/* Conteúdo */}
              <div className="flex-1">
                <h3 className="text-white font-bold">{item.titulo}</h3>
                {item.descricoes.length > 0 && (
                  <div className="mt-1 space-y-1">
                    {item.descricoes.map((desc, i) => (
                      <p key={i} className="text-gray-300 text-sm">
                        {desc}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
