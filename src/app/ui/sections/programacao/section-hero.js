import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Button_outline from "../../components/buttons/button_outline";
import Container from "../../components/container/container";
import Text_display_2 from "../../components/text/text-display-2";
import Text_head_2 from "../../components/text/text-head-2";

export default function Section_hero() {
  return (
    <section className="bg-[url('/backgrounds/bg_section_cta25.png')] bg-cover bg-center bg-no-repeat min-h-96 mb-10 py-16 flex items-center justify-center">
      <Container className="text-white flex flex-col items-center gap-8 text-center">
        <div>
          <Text_display_2 className="font-bold mb-4">Programação</Text_display_2>
          <Text_head_2 className="w-full md:w-[550px]">
            Fique por dentro dos temas e horários das palestras que acontecerão no evento!
          </Text_head_2>
          <Text_head_2 className="w-full font-bold md:w-[550px] mt-2">
            *Programação sujeita a alterações
          </Text_head_2>
        </div>

        <Button_outline
          href="/programacao.pdf"
          text="Baixar programação"
          icon={<ArrowDownTrayIcon className="size-5" />}
          className="items-center rounded-full w-auto min-w-40 py-3 px-6 bg-white/20 hover:bg-white/10 transition-all"
          target={true}
        />
      </Container>
    </section>
  );
}
