import { MapPinIcon } from "@heroicons/react/24/outline";
import Card_benefit from "../../components/cards/card-benefit";
import Container from "../../components/container/container";
import Text_display_3 from "../../components/text/text-display-3";
import Text_head_1 from "../../components/text/text-head-1";
import Text_link from "../../components/text/text-link";
import Text_body from "../../components/text/text-body";
import Table from "../../components/tables/table";

export default function Section_price ( {} ) {
  return (
    <section className="min-h-[80vh] py-20 bg-radial-gradient text-white flex flex-col items-center justify-center">
        <Container>
          <Text_display_3 className={'font-bold mb-10'}>Contrapartidas</Text_display_3>
          <Table />
          <div className=" mt-10 space-y-3">
            <Text_body>*Aproximadamente 1.200 Kits de boas-vindas, onde o material a ser colocado no kit deverá ser fornecido por parte do patrocinador</Text_body>
            <Text_body>As cotas estarão disponíveis através de Edital de Chamamento Público</Text_body>
          </div>
        </Container>
      </section>
  );
}