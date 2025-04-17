import Icon_dicas from "../../icons/button-nav/icon-dicas";
import Icon_feira from "../../icons/button-nav/icon-feira";
import Icon_speakers from "../../icons/button-nav/icon-speakers copy";
import Icon_info from "../../icons/button-nav/icon-info";
import Icon_Macro_programacao from "../../icons/button-nav/icon-macro-programacao";
import Icon_menssage from "../../icons/button-nav/icon-menssage";
import Button_outline from "../../components/buttons/button_outline";
import Container from "../../components/container/container";

export default function Section_button_nav({ activeSection }) {

  return (
    <section className=" bg-white sticky top-24 z-30">
      <Container className={`text-violet-crea-700 grid grid-cols-5 gap-5 py-5 m-5`}>
        <Button_outline
          icon={<Icon_info />}
          iconFirst={true}
          hiddenText={true}
          href={'#galeria'}
          text={'Sobre o Evento'}
          className={`items-center rounded-full w-full text-nowrap py-3 border-violet-crea-700 hover:text-white hover:bg-violet-crea-400 transition-all ${activeSection === 1 ? 'bg-violet-crea-400 text-white' : ''}`}
        />

        <Button_outline
          icon={<Icon_Macro_programacao />}
          iconFirst={true}
          hiddenText={true}
          href={'#numeros'}
          text={'Programação'}
          className={`items-center rounded-full w-full text-nowrap py-3 border-violet-crea-700 hover:text-white hover:bg-violet-crea-400 transition-all ${activeSection === 2 ? 'bg-violet-crea-400 text-white' : ''}`}
        />

        <Button_outline
          icon={<Icon_speakers />}
          iconFirst={true}
          hiddenText={true}
          href={'#palestrantes'}
          text={'Palestrantes'}
          className={`items-center rounded-full w-full text-nowrap py-3 border-violet-crea-700 hover:text-white hover:bg-violet-crea-400 transition-all ${activeSection === 3 ? 'bg-violet-crea-400 text-white' : ''}`}
        />

        <Button_outline
          icon={<Icon_menssage />}
          iconFirst={true}
          hiddenText={true}
          href={'#reviews'}
          text={'Depoimentos'}
          className={`items-center rounded-full w-full text-nowrap py-3 border-violet-crea-700 hover:text-white hover:bg-violet-crea-400 transition-all ${activeSection === 4 ? 'bg-violet-crea-400 text-white' : ''}`}
        />

        <Button_outline
          icon={<Icon_feira />}
          iconFirst={true}
          hiddenText={true}
          href={'#programacao'}
          text={'Feira Tecnológica'}
          className={`items-center rounded-full w-full text-nowrap py-3 border-violet-crea-700 hover:text-white hover:bg-violet-crea-400 transition-all ${activeSection === 5 ? 'bg-violet-crea-400 text-white' : ''}`}
        />
      </Container>
    </section>
  );
}