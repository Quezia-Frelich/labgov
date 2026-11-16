import Container from "../../components/container/container";
import {
  CalendarDaysIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Text_head_2 from "../../components/text/text-head-2";
import Button_outline from "../../components/buttons/button_outline";
import { EVENT_REGISTRATION_URL } from "../../../event-config";

export default function Section_welcome() {
  return (
    <section className="h-screen relative overflow-hidden">
      <video
        muted
        loop
        autoPlay
        playsInline
        className="absolute top-0 left-0 w-auto min-w-full min-h-full max-w-none z-10"
      >
        <source src="/video/video-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 z-20 opacity-80 bg-black h-screen w-full mix-blend-multiply"></div>
      <div className="absolute top-0 z-30 h-screen w-full">
        <Container
          className={
            "flex flex-col gap-8 py-20 mt-10 justify-center items-center h-full text-white"
          }
        >
          <div className="flex flex-col items-center gap-3 animate-fade-up animate-once animate-duration-500 animate-ease-in-out">
            <img
              src="/brand/logo-labgov.png"
              alt="LabGov Summit"
              className="w-72 sm:w-[30rem] md:w-[32rem]"
            />
            <span className="w-40 sm:w-52 border-y border-green-labgov-500 py-1 text-center text-base sm:text-lg md:text-2xl font-medium">
              3ª Edição - 2026
            </span>
          </div>

          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold">
              DO DADO À INTELIGÊNCIA:
            </p>
            <Text_head_2 className="max-w-3xl">
              Governança, Ecossistemas de Dados e<br/> Inteligência Artificial no
              Setor Público.
            </Text_head_2>
          </div>

          <Text_head_2 className={'flex gap-5'}>
            <CalendarDaysIcon className="size-8 text-green-labgov-500" />
            01 de dezembro de 2026
          </Text_head_2>

          <Text_head_2 className={'flex gap-5'}>
            <MapPinIcon className="size-8 text-green-labgov-500" />
            Auditório Crea-SC
          </Text_head_2>

          {<Button_outline
            href={EVENT_REGISTRATION_URL}
            text={"Garantir meu ingresso"}
            className={
              "items-center rounded-full w-full min-w-32 md:min-w-40 py-3 px-7 bg-white/20 hover:bg-white/10 transition-all border-2 border-white"
            }
            target={true}
          />}

        </Container>
      </div>
    </section>
  );
}
