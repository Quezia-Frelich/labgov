
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
          <div className="flex items-center gap-4 mb-5">
            <img src="/brand/expocentro.webp" alt="Expocentro Crea 2024" className="max-w-16"/>
            <div>
              <Text_head_1 className={'font-bold'}>Expocentro Balneário Camboriú</Text_head_1>
              <Text_link href={'https://maps.app.goo.gl/f9BiA5J1BuWWHkxg9'} className={'flex items-center gap-2 underline underline-offset-4'}>
                <MapPinIcon className='size-6'/> 
                Av. Marginal Oeste Nova Esperança, Balneário Camboriú
              </Text_link>
            </div>
          </div>
        <img src="/elements/espaco.webp" className="rounded-lg hidden md:block"/>
        <img src="/elements/espaco-responsive.png" className="rounded-lg block md:hidden"/>
        </Container>
    </section>
  );
}