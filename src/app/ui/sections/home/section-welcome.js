import Container from "../../components/container/container";
import {
  CalendarDaysIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Text_head_2 from "../../components/text/text-head-2";
import Button_outline from "../../components/buttons/button_outline";

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
          <img
            src="/brand/logo-labgov.png"
            className="w-72 md:w-[30rem] animate-fade-up animate-once animate-duration-500 animate-ease-in-out"
          />


          <Text_head_2 className={"text-center"}>Conexões para aceleração da<br></br>transformação digital no setor público.</Text_head_2>

          <Text_head_2 className={'flex gap-5'}>
            <CalendarDaysIcon className="size-8 text-green-labgov-500" />
            15 de setembro
          </Text_head_2>

          <Text_head_2 className={'flex gap-5'}>
            <ClockIcon className="size-8 text-green-labgov-500" />
            8:30 às 12:00
          </Text_head_2>

          <Text_head_2 className={'flex gap-5'}>
            <MapPinIcon className="size-8 text-green-labgov-500" />
            Auditório da ACATE - Primavera
          </Text_head_2>

          {<Button_outline
            href={
              "https://painel.egem.org.br//createInscritoNaoLogado/1714?_gl=1*1e62sh4*_ga*MTcwNjc0Mzg2OS4xNzg2MTIzODU4*_ga_Z9E9F8TPED*czE3ODYxMjM4NTgkbzEkZzEkdDE3ODYxMjM4NjUkajUzJGwwJGgxNzg1Nzk1ODI4"
            }
            text={"Garantir meu ingresso"}
            className={
              "items-center rounded-full w-full min-w-32 md:min-w-40 py-5 px-7 bg-white/20 hover:bg-white/10 transition-all border-2 border-green-labgov-500"
            }
            target={true}
          />}

        </Container>
      </div>
    </section>
  );
}
