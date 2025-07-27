import Container from "../../components/container/container";
import {
  CalendarDaysIcon,
  MapPinIcon,
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
        <source src="/video/crea_summit_video.mp4" type="video/mp4" />
        <source src="/video/crea_summit_video.webm" type="video/webm" />
        <source src="/video/crea_summit_video.ogg" type="video/ogg" />
      </video>

      <div className="absolute top-0 z-20 opacity-70 bg-radial-gradient h-screen w-full mix-blend-multiply"></div>
      <div className="absolute top-0 z-30 h-screen w-full">
        <Container
          className={
            "flex flex-col gap-8 py-20 justify-center items-center h-full text-white"
          }
        >
          <img
            src="/brand/CREA Summit 2025_logo.svg"
            className="w-52 md:w-80 animate-fade-up animate-once animate-duration-500 animate-ease-in-out"
          />

          <Text_head_2 className={'flex gap-5'}>
            <CalendarDaysIcon className='size-8' /> 
            25 e 26 de julho de 2025
          </Text_head_2>

          <Text_head_2 className={'flex gap-5'}>
            <MapPinIcon className='size-8' /> 
            Expocentro Balneário Camboriú
          </Text_head_2>
          
          {/* <Button_outline
            href={'https://www.sympla.com.br/crea-summit-2024__2629588'}
            text={'Garantir meu ingresso'}
            icon={<ArrowRightIcon className='size-5' />}
            className={'items-center rounded-full w-full min-w-32 md:min-w-40 py-5 px-7 bg-white/20 hover:bg-white/10 transition-all'}
            target={true}
          /> */}

          <Button_outline
            href={
              "https://drive.google.com/drive/folders/1DOmRHqulZc1KOfA-XSZLR9anNwa084-N"
            }
            text={"Confira as Fotos do Evento"}
            icon={<ArrowRightIcon className="size-5" />}
            className={
              "items-center rounded-full w-full min-w-32 md:min-w-40 py-5 px-7 bg-white/20 hover:bg-white/10 transition-all"
            }
            target={true}
          />
        </Container>
      </div>
    </section>
  );
}
