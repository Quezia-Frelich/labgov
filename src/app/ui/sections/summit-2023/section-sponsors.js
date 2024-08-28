import { MapPinIcon } from "@heroicons/react/24/outline";
import Card_benefit from "../../components/cards/card-benefit";
import Container from "../../components/container/container";
import Text_display_3 from "../../components/text/text-display-3";
import Text_head_1 from "../../components/text/text-head-1";
import Text_link from "../../components/text/text-link";
import Text_body from "../../components/text/text-body";
import { data_sponsors_2023_divulgacao, data_sponsors_2023_parcerias } from "../../../../../data/data-sponsors-2023";

export default function Section_sponsors ( {} ) {
  return (
    <section className="my-10 py-10 flex items-center justify-center">
        <Container>
          <div className="mb-20">
            <Text_head_1 className={'text-pink-summit-400 mb-5 text-center'}>Parcerias</Text_head_1>
            <div className="mb-5 flex flex-wrap gap-10 items-center justify-center">
              {data_sponsors_2023_parcerias.map((parceria, index)=>(
                <img key={index} src={parceria.logo} alt={parceria.logo} className="rounded-lg max-h-10"/>
              ))}
            </div>
          </div>

          <div>
            <Text_head_1 className={'text-pink-summit-400 mb-5 text-center'}>Divulgação</Text_head_1>
            <div className="mb-5 flex flex-wrap items-center justify-center gap-10">
              {data_sponsors_2023_divulgacao.map((divulgacao, index)=>(
                <img key={index} src={divulgacao.logo} alt={divulgacao.logo} className="rounded-lg max-h-8"/>
              ))}
            </div>
          </div>
        </Container>
    </section>
  );
}