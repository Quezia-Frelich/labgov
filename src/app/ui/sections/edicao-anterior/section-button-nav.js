import Icon_patrocinadores from "../../icons/button-nav/icon-dicas";
import Icon_apoio from "../../icons/button-nav/icon-dicas";
import Icon_programacao from "../../icons/button-nav/icon-dicas";

import Button_outline from "../../components/buttons/button_outline";
import Container from "../../components/container/container";

export default function Section_button_nav({ activeSection }) {
  return (
    <section className="bg-black sticky top-24 z-30">
      <Container className="grid grid-cols-3 gap-5 py-5 text-white">

        <Button_outline
          icon={<Icon_patrocinadores />}
          iconFirst
          hiddenText
          href="#patrocinadores"
          text="Patrocinadores"
          className={`
            items-center
            w-full
            rounded-full
            py-3
            border-white
            text-white
            hover:bg-white
            hover:text-black
            transition-all
            ${
              activeSection === 1
                ? "bg-white text-black"
                : "bg-transparent"
            }
          `}
        />

        <Button_outline
          icon={<Icon_apoio />}
          iconFirst
          hiddenText
          href="#apoioInstitucional"
          text="Apoio Institucional"
          className={`
            items-center
            w-full
            rounded-full
            py-3
            border-white
            text-white
            hover:bg-white
            hover:text-black
            transition-all
            ${
              activeSection === 2
                ? "bg-white text-black"
                : "bg-transparent"
            }
          `}
        />

        <Button_outline
          icon={<Icon_programacao />}
          iconFirst
          hiddenText
          href="#programacao"
          text="Programação"
          className={`
            items-center
            w-full
            rounded-full
            py-3
            border-white
            text-white
            hover:bg-white
            hover:text-black
            transition-all
            ${
              activeSection === 3
                ? "bg-white text-black"
                : "bg-transparent"
            }
          `}
        />

      </Container>
    </section>
  );
}