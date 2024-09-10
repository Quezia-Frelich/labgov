import { MapPinIcon } from "@heroicons/react/24/outline";
import Card_benefit from "../../components/cards/card-benefit";
import Container from "../../components/container/container";
import Text_display_3 from "../../components/text/text-display-3";
import Text_head_1 from "../../components/text/text-head-1";
import Text_link from "../../components/text/text-link";
import Text_body from "../../components/text/text-body";


export default function Section_cta ( {} ) {
  return (
    <section className="my-10 flex items-center justify-center">
        <Container>
          <div className="py-10 border-y-2 border-violet-crea-400 text-center">
            <Text_display_3 className={'text-violet-crea-400 font-bold mb-4'}>Quer patrocinar o evento?</Text_display_3>
            <Text_link className={'text-violet-crea-400 hover:text-violet-crea-500 underline underline-offset-4 text-xl transition-all'} href={'https://portal.crea-sc.org.br/wp-content/uploads/2024/09/Edital-e-Anexos.zip'}>Acese o Edital de Chamamento Público</Text_link>
          </div>
        </Container>
      </section>
  );
}