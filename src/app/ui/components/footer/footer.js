'use client'
import Image from "next/image";
import Icon_facebook from "@/app/ui/icons/footer/Facebook";
import Icon_instagram from "@/app/ui/icons/footer/Instagram";
import Icon_linkedin from "@/app/ui/icons/footer/LinkedIn";
import Icon_youtube from "@/app/ui/icons/footer/YouTube";
import Icon_email from "@/app/ui/icons/footer/email";
import Icon_person from "@/app/ui/icons/footer/person";
import Icon_phone from "@/app/ui/icons/footer/phone";
import Icon_twitter from "@/app/ui/icons/footer/twitter";
import Icon_ubication from "@/app/ui/icons/footer/ubication";
import Link from "next/link";
import Icon_whatsapp from "../../icons/footer/whatsapp";
import { usePathname } from "next/navigation";
import Crea_logo from "../../../../../public/brand/crea_logo";
import Container from "../container/container";

export default function Footer() {
  const pathName = usePathname();
  return (
    <>
      {/* Section Contact */}
      <section className="py-20 md:py-20 min-h-96 flex flex-col justify-center bg-radial-gradient">
     
        <Container className={'flex flex-col md:flex-row justify-between gap-16 text-white'}>
          
          {/* Section 1 */}
          <div>

              <Link href={"/"} target="_blank">
                <img src="/brand/crea_logo_white.png" className="max-w-60"/>
              </Link>

          </div>

          {/* Section 2 */}
          <div>
              <p className=" mb-5 text-xl">Contato</p>
              <div className=" flex flex-col gap-4">

                <div className="flex items-center gap-2 font-light text-sm">
                  <Icon_phone href={"#"} />
                  <p>(048) 3331-2000</p>
                </div>
                <div className="flex items-center gap-2 font-light text-sm">
                  <Icon_email href={"mailto:creasummit@crea-sc.org.br"} />
                  <p>creasummit@crea-sc.org.br</p>
                </div>
              </div>
          </div>

          {/* Section 3 */}
          <div>
            <p className=" mb-5 text-xl">Nos acompanhe</p>
            <div className="flex gap-5 items-center">
              
              <Icon_instagram
                href={"https://www.instagram.com/creascoficial/?hl=pt"}
                setClass={"transition-all hover:text-blue-600"}
              />
              <Icon_linkedin
                href={
                  "https://www.linkedin.com/company/crea---sc/?originalSubdomain=br"
                }
                setClass={"transition-all hover:text-blue-600"}
              />
              <Icon_youtube
                href={
                  "https://www.youtube.com/channel/UCSgs2Xvs4T6EIEjFa4oE4sQ"
                }
                setClass={"transition-all hover:text-blue-600"}
              />
              <Icon_facebook
                href={"https://www.facebook.com/creasc/?locale=pt_BR"}
                setClass={"transition-all hover:text-blue-600"}
              />
              <Icon_twitter
                href={"https://twitter.com/creasc"}
                setClass={"transition-all hover:text-blue-600"}
              />
            </div>
          </div>
        </Container>
      
      </section>
    </>
  );
}
