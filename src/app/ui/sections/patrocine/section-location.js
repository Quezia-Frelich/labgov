import { MapPinIcon } from "@heroicons/react/24/outline";
import Card_benefit from "../../components/cards/card-benefit";
import Container from "../../components/container/container";
import Text_display_3 from "../../components/text/text-display-3";
import Text_head_1 from "../../components/text/text-head-1";
import Text_link from "../../components/text/text-link";

export default function Section_location ( {} ) {
  return (
    <section className="my-10 py-10 flex items-center justify-center">
        <Container>
          <Text_display_3 className={'text-violet-crea-400 font-bold mb-5'}>O espaço</Text_display_3>
          <div className="mb-5">
            <Text_head_1 className={'font-bold'}>Expocentro Balneário Camboriú</Text_head_1>
            <Text_link href={'#'} className={'flex items-center gap-2'}>
              <MapPinIcon className='size-6'/> 
              Av. Marginal Oeste Nova Esperança, Balneário Camboriú
            </Text_link>
          </div>
        <img src="/elements/espaco.webp" className="rounded-lg"/>
        </Container>
    </section>
  );
}