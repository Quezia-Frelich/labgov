
import { MapPinIcon } from "@heroicons/react/24/outline";
import Card_benefit from "../../components/cards/card-benefit";
import Container from "../../components/container/container";
import Text_display_3 from "../../components/text/text-display-3";
import Text_head_1 from "../../components/text/text-head-1";
import Text_link from "../../components/text/text-link";
import GoogleMap from "../../components/maps/map";
import Text_display_1 from "../../components/text/text-display-1";
import Text_body from "../../components/text/text-body";

export default function Section_location ( { showMap } ) {
  return (
    <section className="my-10 py-10 flex items-center justify-center" id="comoChegar">
        <Container>
          <div>
            <Text_display_3 className={'text-violet-crea-400 font-bold mb-5'}>O espaço</Text_display_3>
            <div className="flex items-center gap-4 mb-5">
              <img src="/brand/expocentro.webp" alt="Expocentro Crea 2024" className="max-w-16"/>
              <div>
                <Text_head_1 className={'font-bold'}>Expocentro Balneário Camboriú</Text_head_1>
                <Text_link href={'https://maps.app.goo.gl/f9BiA5J1BuWWHkxg9'} className={'flex items-center gap-2 underline underline-offset-4'}>
                  <MapPinIcon className='size-6'/> 
                  Av. Marginal Oeste Nova Esperança, Balneário Camboriú
                </Text_link>
                <Text_body className={''}>
                  <span className="font-extrabold pl-1 pr-2 text-lg">P</span>O local possui estacionamento para aproximadamente 1.000 veículos
                </Text_body>
              </div>
            </div>

            <div className={showMap && 'flex flex-col md:flex-row gap-5 h-96'}>
              <img src="/elements/espaco-responsive.png" className={`${!showMap && 'w-full'} rounded-lg`}/>
              { showMap && <GoogleMap /> }
            </div>

          </div>
          
        </Container>
    </section>
  );
}