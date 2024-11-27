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
            src="/brand/Crea_summit_2024_white.png"
            className="w-52 md:w-80 mb-10 animate-fade-up animate-once animate-duration-500 animate-ease-in-out"
          />

          <Text_head_2 className={"flex gap-5"}>
            Muito obrigado pela sua participação!
          </Text_head_2>

          <Text_head_2 className={"flex gap-5"}>Nos vemos em 2025.</Text_head_2>

          {/* <Button_outline
            href={'https://www.sympla.com.br/crea-summit-2024__2629588'}
            text={'Garantir meu ingresso'}
            icon={<ArrowRightIcon className='size-5' />}
            className={'items-center rounded-full w-full min-w-32 md:min-w-40 py-5 px-7 bg-white/20 hover:bg-white/10 transition-all'}
            target={true}
          /> */}
          {/* 
          <Button_outline
            href={
              "https://creascorgbr-my.sharepoint.com/:f:/g/personal/audiovisual_crea-sc_org_br/EqFA19JqJ5lKin1JI2PsJDUBguzgMYiy5RW0BOJezUFtwA?e=1mL3vi"
            }
            text={"Confira aqui as fotos do evento!"}
            icon={<ArrowRightIcon className="size-5" />}
            className={
              "items-center rounded-full w-full min-w-32 md:min-w-40 py-5 px-7 bg-white/20 hover:bg-white/10 transition-all"
            }
            target={true}
          /> */}
        </Container>
      </div>
    </section>
  );
}
