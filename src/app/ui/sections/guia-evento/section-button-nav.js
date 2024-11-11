import Button_outline from "../../components/buttons/button_outline";
import Container from "../../components/container/container";
import Text_body from "../../components/text/text-body";
import Text_display_3 from "../../components/text/text-display-3";

export default function Section_button_nav ( {} ) {
  return (
    <section className="mb-10 bg-white sticky top-24">
        <Container className={'text-violet-crea-700 flex lg:grid grid-cols-5 gap-5 overflow-x-scroll py-5 snap-x'}>
        <Button_outline
            href={'#macro'}
            text={'Macro Programação'}
            className={'snap-center items-center rounded-full w-full min-w-32 md:min-w-40 text-nowrap py-3 px-7 border-violet-crea-700 hover:text-white hover:bg-violet-crea-400 transition-all'}
          />
        <Button_outline
            href={'#localDoEvento'}
            text={'Local do Evento'}
            className={'snap-center items-center rounded-full w-full min-w-32 md:min-w-40 text-nowrap py-3 px-7 border-violet-crea-700 hover:text-white hover:bg-violet-crea-400 transition-all'}
          />
        <Button_outline
            href={'#restaurantes'}
            text={'Restaurantes'}
            className={'snap-center items-center rounded-full w-full min-w-32 md:min-w-40 text-nowrap py-3 px-7 border-violet-crea-700 hover:text-white hover:bg-violet-crea-400 transition-all'}
          />
        <Button_outline
            href={'#dicas'}
            text={'Dicas'}
            className={'snap-center items-center rounded-full w-full min-w-32 md:min-w-40 text-nowrap py-3 px-7 border-violet-crea-700 hover:text-white hover:bg-violet-crea-400 transition-all'}
          />
        <Button_outline
            href={'#feiraTecnológica'}
            text={'Feira Tecnológica'}
            className={'snap-center items-center rounded-full w-full min-w-32 md:min-w-40 text-nowrap py-3 px-7 border-violet-crea-700 hover:text-white hover:bg-violet-crea-400 transition-all'}
          />
        </Container>
    </section>
  );
}