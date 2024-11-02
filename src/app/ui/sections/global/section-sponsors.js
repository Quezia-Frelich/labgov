import { MapPinIcon } from "@heroicons/react/24/outline";
import Card_benefit from "../../components/cards/card-benefit";
import Container from "../../components/container/container";
import Text_display_3 from "../../components/text/text-display-3";
import Text_head_1 from "../../components/text/text-head-1";
import Text_link from "../../components/text/text-link";
import Text_body from "../../components/text/text-body";

export default function Section_sponsors ( {} ) {
  return (
    <section className="my-10 py-10 flex items-center justify-center">
        <Container>
          <div className="mb-20">
            <Text_head_1 className={'text-violet-crea-400 mb-5 text-center'}>Realização</Text_head_1>
            <div className="mb-5 flex items-center justify-center">
              <img src="/brand/Crea_SC-color.png" className="rounded-lg max-h-20"/>
            </div>
          </div>

          <div className="mb-20">
            <Text_head_1 className={'text-violet-crea-400 mb-5 text-center'}>Apoio Institucional</Text_head_1>
            <div className="mb-5 flex flex-col md:flex-row items-center justify-center gap-10">
              <img src="/brand/confeacrea-color.png" className="rounded-lg max-h-12"/>
              <img src="/brand/Crea_SC-color.png" className="rounded-lg max-h-12"/>
              <img src="/brand/Mutua-SC-color.png" className="rounded-lg max-h-12"/>
            </div>
          </div>

          <div>
            <Text_head_1 className={'text-violet-crea-400 mb-5 text-center'}>Parcerias</Text_head_1>
            <div className="mb-5 flex flex-col md:flex-row items-center justify-center gap-10">
              <img src="/brand/ACATE.png" className="rounded-lg max-h-12"/>
              <img src="/brand/SEBRAE.png" className="rounded-lg max-h-12"/>
              <img src="/brand/CREDCREA.png" className="rounded-lg max-h-12"/>
              <img src="/brand/balneario camboriu.png" className="rounded-lg max-h-12"/>
              <img src="/brand/logo rede cat.png" className="rounded-lg max-h-12"/>
              <img src="/brand/scgovbr.webp" className="rounded-lg max-h-12"/>
            </div>
          </div>
        </Container>
    </section>
  );
}