import Icon_dicas from "../../icons/button-nav/icon-dicas";
import Icon_feira from "../../icons/button-nav/icon-feira";
import Icon_local from "../../icons/button-nav/icon-local";
import Icon_Macro_programacao from "../../icons/button-nav/icon-macro-programacao";
import Icon_restaurantes from "../../icons/button-nav/icon-restaurantes";
import Button_outline from "../../components/buttons/button_outline";
import Container from "../../components/container/container";

export default function Section_button_nav ( { activeSection } ) {

  return (
    <section className=" bg-white sticky top-24 z-30">
        <Container className={`text-violet-crea-700 grid grid-cols-5 gap-5 py-5`}>
        <Button_outline
            icon={<Icon_Macro_programacao/>}
            iconFirst={true}
            hiddenText={true}
            href={'#macro'}
            text={'Macro Programação'}
            className={`items-center rounded-full w-full  text-nowrap py-3 px-7 border-violet-crea-700 hover:text-white hover:bg-violet-crea-400 transition-all ${activeSection === 1 && 'bg-violet-crea-400 text-white'}`}
          />
        <Button_outline
            icon={<Icon_local/>}
            iconFirst={true}
            hiddenText={true}
            href={'#localDoEvento'}
            text={'Local do Evento'}
            className={`items-center rounded-full w-full  text-nowrap py-3 px-7 border-violet-crea-700 hover:text-white hover:bg-violet-crea-400 transition-all ${activeSection === 2 && 'bg-violet-crea-400 text-white'}`}
          />
        <Button_outline
            icon={<Icon_restaurantes/>}
            iconFirst={true}
            hiddenText={true}
            href={'#restaurantes'}
            text={'Restaurantes'}
            className={`items-center rounded-full w-full  text-nowrap py-3 px-7 border-violet-crea-700 hover:text-white hover:bg-violet-crea-400 transition-all ${activeSection === 3 && 'bg-violet-crea-400 text-white'}`}
          />
        <Button_outline
            icon={<Icon_dicas/>}
            iconFirst={true}
            hiddenText={true}
            href={'#dicas'}
            text={'Dicas'}
            className={`items-center rounded-full w-full  text-nowrap py-3 px-7 border-violet-crea-700 hover:text-white hover:bg-violet-crea-400 transition-all ${activeSection === 4 && 'bg-violet-crea-400 text-white'}`}
          />
        <Button_outline
            icon={<Icon_feira/>}
            iconFirst={true}
            hiddenText={true}
            href={'#feiraTecnológica'}
            text={'Feira Tecnológica'}
            className={`items-center rounded-full w-full text-nowrap py-3 px-7 border-violet-crea-700 hover:text-white hover:bg-violet-crea-400 transition-all ${activeSection === 5 && 'bg-violet-crea-400 text-white'}`}
          />
        </Container>
    </section>
  );
}