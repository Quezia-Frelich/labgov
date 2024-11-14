import Button_outline from "../../components/buttons/button_outline";
import Container from "../../components/container/container";

export default function Section_button_nav ( { activeSection } ) {

  return (
    <section className=" bg-white sticky top-24 z-30">
        <Container className={`scroll-smooth text-violet-crea-700 flex ${activeSection === 2 && 'justify-start'} ${activeSection === 3 && 'justify-center'} ${activeSection === 4 && 'justify-end'} lg:grid grid-cols-5 gap-5 overflow-x-scroll md:overflow-hidden py-5 snap-x transition-all`}>
        <Button_outline
            href={'#macro'}
            text={'Macro Programação'}
            className={`scroll-m-10 snap-end items-center rounded-full w-full min-w-32 md:min-w-40 text-nowrap py-3 px-7 border-violet-crea-700 hover:text-white hover:bg-violet-crea-400 transition-all ${activeSection === 1 && 'bg-violet-crea-400 text-white'}`}
          />
        <Button_outline
            href={'#localDoEvento'}
            text={'Local do Evento'}
            className={`scroll-m-10 snap-end items-center rounded-full w-full min-w-32 md:min-w-40 text-nowrap py-3 px-7 border-violet-crea-700 hover:text-white hover:bg-violet-crea-400 transition-all ${activeSection === 2 && 'bg-violet-crea-400 text-white'}`}
          />
        <Button_outline
            href={'#restaurantes'}
            text={'Restaurantes'}
            className={`scroll-m-10 snap-end items-center rounded-full w-full min-w-32 md:min-w-40 text-nowrap py-3 px-7 border-violet-crea-700 hover:text-white hover:bg-violet-crea-400 transition-all ${activeSection === 3 && 'bg-violet-crea-400 text-white'}`}
          />
        <Button_outline
            href={'#dicas'}
            text={'Dicas'}
            className={`scroll-m-10 snap-end items-center rounded-full w-full min-w-32 md:min-w-40 text-nowrap py-3 px-7 border-violet-crea-700 hover:text-white hover:bg-violet-crea-400 transition-all ${activeSection === 4 && 'bg-violet-crea-400 text-white'}`}
          />
        <Button_outline
            href={'#feiraTecnológica'}
            text={'Feira Tecnológica'}
            className={`scroll-m-10 snap-end items-center rounded-full w-full min-w-32 md:min-w-40 text-nowrap py-3 px-7 border-violet-crea-700 hover:text-white hover:bg-violet-crea-400 transition-all ${activeSection === 5 && 'bg-violet-crea-400 text-white'}`}
          />
        </Container>
    </section>
  );
}