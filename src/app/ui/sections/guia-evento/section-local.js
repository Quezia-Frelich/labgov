import {
  ArrowDownIcon,
  ArrowDownTrayIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Container from "../../components/container/container";
import Text_body from "../../components/text/text-body";
import Text_display_3 from "../../components/text/text-display-3";
import Button_outline from "../../components/buttons/button_outline";
import Text_link from "../../components/text/text-link";

export default function Section_local({}) {
  return (
    <section className="mb-10 py-20 bg-gradient-to-r from-violet-crea-700 to-violet-crea-400">
      <Container
        className={
          "text-white flex flex-col md:flex-row justify-between items-center gap-10"
        }
      >
        <div>
          <Text_display_3 className={"font-bold mb-5 block md:hidden"}>
            Local do Evento
          </Text_display_3>
          <img
            src="/elements/local-do-evento.png"
            className="md:max-w-96"
            alt="Local do evento"
          ></img>
        </div>
        <div className="space-y-8">
          <div>
            <Text_display_3 className={"font-bold mb-10 hidden md:block"}>
              Local do Evento
            </Text_display_3>

            <Text_body>
              O CREA Summit será realizado no Expocentro Balneário Camboriú com
              uma estrutura pensada para oferecer conforto e acessibilidade.
            </Text_body>
          </div>

          <div className="my-10 space-y-5">
            <Text_link
              href={"https://maps.app.goo.gl/f9BiA5J1BuWWHkxg9"}
              underline={true}
              className={"flex items-center gap-5"}
            >
              <img
                src="/icons/icon_location.png"
                className="h-6"
                alt="Endereço"
              />
              Av. Marginal Oeste Nova Esperança, Balneário Camboriú
            </Text_link>
            <Text_body className={"flex items-center gap-5"}>
              <img
                src="/icons/icon_parking.png"
                className="h-5"
                alt="Estacionamiento do evento"
              />
              O local possui estacionamento para aproximadamente 1.000 veículos
              e custa R$ 60,00 cada vez que for utilizado.
            </Text_body>
          </div>

          <Text_body>
            Explore o CREA Summit SC! Encontre os palcos, a feira de expositores
            . Navegue por todas as atrações e aproveite cada oportunidade de
            conhecimento e conexão.
            <br></br>
            <br></br>
            {/*Clique no botão abaixo e veja com mais detalhes o mapa do evento.*/}
          </Text_body>

          {/*<div className="max-w-72">
            <Button_outline
              href={"/pdf/Mapa expocentro - CREA Summit 2024.pdf"}
              text={"Baixar mapa do evento"}
              icon={<ArrowDownTrayIcon className="size-5" />}
              className={
                "items-center rounded-full w-full min-w-32 md:min-w-40 py-3 px-7 bg-white/20 hover:bg-white/10 transition-all"
              }
              target={true}
            />
          </div>*/}
        </div>
      </Container>
    </section>
  );
}
