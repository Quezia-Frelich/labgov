import { MapPinIcon } from "@heroicons/react/24/outline";
import Card_benefit from "../../components/cards/card-benefit";
import Container from "../../components/container/container";
import Text_display_3 from "../../components/text/text-display-3";
import Text_head_1 from "../../components/text/text-head-1";
import Text_link from "../../components/text/text-link";
import Text_body from "../../components/text/text-body";

export default function Section_space ( {} ) {
  return (
    <section className="my-10 py-10 flex items-center justify-center">
        <Container>
          <Text_display_3 className={'text-violet-crea-400 font-bold mb-10'}>Mapa do evento</Text_display_3>

          <div className="flex flex-col md:flex-row items-center gap-10">

            <img src="/elements/plano.webp" className="rounded-lg md:max-w-lg"/>

            <div className="w-full space-y-4">
              <Text_head_1 className={'font-bold mb-5'}>Investimentos disponíveis</Text_head_1>

              <Text_body className={'flex items-center gap-5'}>
                <span className="h-7 w-7 bg-violet-crea-400 rounded-md"></span>
                Investimento Bronze
              </Text_body>

              <Text_body className={'flex items-center gap-5'}>
                <span className="h-7 w-7 bg-violet-crea-500 rounded-md"></span>
                Investimento Prata
              </Text_body>

              <Text_body className={'flex items-center gap-5'}>
                <span className="h-7 w-7 bg-violet-crea-600 rounded-md"></span>
                Investimento Ouro
              </Text_body>

              <Text_body className={'flex items-center gap-5'}>
                <span className="h-7 w-7 bg-violet-crea-800 rounded-md"></span>
                Investimento Diamante
              </Text_body>

              <Text_body className={'flex items-center gap-5'}>
                <span className="h-7 w-7 bg-violet-crea-300 rounded-md"></span>
                Espaços Experiência
              </Text_body>

            </div>
            
          </div>
        </Container>
      </section>
  );
}