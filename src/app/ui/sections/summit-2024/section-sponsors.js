import { MapPinIcon } from "@heroicons/react/24/outline";
import Card_benefit from "../../components/cards/card-benefit";
import Container from "../../components/container/container";
import Text_display_3 from "../../components/text/text-display-3";
import Text_head_1 from "../../components/text/text-head-1";
import Text_link from "../../components/text/text-link";
import Text_body from "../../components/text/text-body";
import Link from "next/link";

export default function Section_sponsors({ }) {
  return (
    <section className="my-10 py-10 flex items-center justify-center">
      <Container>
        <div className="mb-20">
          <Text_head_1 className={'text-violet-crea-400 mb-5 text-center'}>Realização</Text_head_1>
          <div className="mb-5 flex items-center justify-center">
            <Link href="https://portal.crea-sc.org.br/">
              <img src="/brand/Crea_SC-color.png" className="rounded-lg max-h-20" />
            </Link>
          </div>
        </div>

        <div className="mb-20">
          <Text_head_1 className={'text-violet-crea-400 mb-5 text-center'}>Apoio Institucional</Text_head_1>
          <div className="mb-5 flex flex-col md:flex-row items-center justify-center gap-10">
            <Link href="https://www.confea.org.br/">
              <img src="/brand/confeacrea-color.png" className="rounded-lg max-h-12" />
            </Link>
            <Link href="https://portal.crea-sc.org.br/">
              <img src="/brand/Crea_SC-color.png" className="rounded-lg max-h-12" />
            </Link>
            <Link href="https://www.mutua.com.br/">
              <img src="/brand/Mutua-SC-color.png" className="rounded-lg max-h-12" />
            </Link>
          </div>
        </div>

        <div>
          <Text_head_1 className={'text-violet-crea-400 mb-5 text-center'}>Parcerias</Text_head_1>
          <div className="mb-5 flex flex-col md:flex-row items-center justify-center gap-10">
            <Link href="https://www.acate.com.br/">
              <img src="/brand/ACATE.png" className="rounded-lg max-h-12" />
            </Link>
            <Link href="https://sebrae.com.br/sites/PortalSebrae">
              <img src="/brand/SEBRAE.png" className="rounded-lg max-h-12" />
            </Link>
            <Link href="https://www.credcrea.coop.br/">
              <img src="/brand/CREDCREA.png" className="rounded-lg max-h-12" />
            </Link>
            <Link href="https://www.visitebalneariocamboriu.com.br/">
              <img src="/brand/balneario camboriu.png" className="rounded-lg max-h-12" />
            </Link>
          </div>
          <div className="mb-5 flex flex-col md:flex-row items-center justify-center gap-10">
            <Link href="https://www.scti.sc.gov.br/centrosdeinovacao/">
              <img src="/brand/logo rede cat.png" className="rounded-lg max-h-12" />
            </Link>
            <Link href="https://www.sc.gov.br/">
              <img src="/brand/scgovbr.webp" className="rounded-lg max-h-12" />
            </Link>
            <Link href="https://sapiensparque.sc.gov.br/">
              <img src="/brand/logo sapiens.png" className="rounded-lg max-h-12" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}