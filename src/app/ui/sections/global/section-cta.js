
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Button_outline from "../../components/buttons/button_outline";
import Container from "../../components/container/container";
import Text_display_2 from "../../components/text/text-display-2";
import Text_display_3 from "../../components/text/text-display-3";
import Text_head_1 from "../../components/text/text-head-1";
import Text_head_2 from "../../components/text/text-head-2";
import Text_link from "../../components/text/text-link";

export default function Section_cta ( {} ) {
  return (
    <section className="bg-[url('/backgrounds/bg_section_cta.jpg')] bg-cover bg-center bg-no-repeat min-h-96 my-10 py-10 flex items-center justify-center">
        <Container className={'text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-10'}>
            <div>
                <Text_display_3 className={'font-bold mb-5'}>Confira a programação</Text_display_3>
                <Text_head_2 className={'w-full md:w-[550px]'}>Fique por dentro dos temas e horários das palestras que acontecerão no evento!</Text_head_2>
            </div>
            <Button_outline href={'/programacao'} text={'Confira a programação'} icon={<ArrowRightIcon className='size-5'/>} className={'items-center rounded-full w-full min-w-32 md:min-w-40 py-5 px-7 bg-white/20 hover:bg-white/10 transition-all'}/>

        </Container>
    </section>
  );
}