import { ArrowDownIcon, ArrowDownTrayIcon, ArrowRightIcon, CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Container from "../../components/container/container";
import Text_body from "../../components/text/text-body";
import Text_display_3 from "../../components/text/text-display-3";
import Button_outline from "../../components/buttons/button_outline";
import Text_link from "../../components/text/text-link";

export default function Section_tips ( {} ) {
  return (
    <section className="mb-10 py-20 bg-gradient-to-r from-violet-crea-700 to-violet-crea-400">
        <Container className={'text-white flex flex-col md:flex-row justify-between items-center gap-10'}>
          
          <div className="w-full">
              <div>
              <Text_display_3 className={'font-bold mb-10'}>Dicas para o evento</Text_display_3>

              <ul class="space-y-8 list-disc list-inside">
                <li>
                  <span class="font-bold">Facilite a troca de informações:</span> Leve cartões de visita ou utilize QR codes digitais para facilitar a troca de contatos com agilidade e profissionalismo.
                </li>
                <li>
                  <span class="font-bold">Visite os stands das empresas:</span> Conversar com expositores pode abrir portas para parcerias e novas oportunidades.
                </li>
                <li>
                  <span class="font-bold">Mantenha o contato após o evento:</span> Não esqueça de conectar-se com seus novos contatos nas redes sociais para continuar o networking.
                </li>
                <li>
                  <span class="font-bold">Cuide-se:</span> Hidrate-se regularmente e priorize o descanso e o bem-estar. Assim, você aproveitará o evento com disposição.
                </li>
                <li>
                  <span class="font-bold">Tenha em mente a climatização:</span> Os palcos podem ser climatizados, por isso, leve um casaco leve para se manter confortável durante o evento.
                </li>
              </ul>

              </div>

              <div className="my-10 p-4 bg-white/20 border border-white rounded-md">
                <Text_body className={'font-bold'}>Conexão WiFi</Text_body>
                <Text_body className={'flex items-center gap-5'}> A rede Wi-Fi do evento será aberta para todos os participantes. Basta se conectar à rede "CREASummit" sem a necessidade de senha.</Text_body>
              </div>

          </div>

          <div className="w-full">
            <img src="/elements/crea_networking.png" className="md:max-w-96 mx-auto" alt="Local do evento"></img>
          </div>

        </Container>
    </section>
  );
}