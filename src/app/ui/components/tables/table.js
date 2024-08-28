import { CheckIcon } from "@heroicons/react/24/outline";
import Text_head_1 from "../text/text-head-1";
import Text_display_3 from "../text/text-display-3";

const sponsorshipPlans = [
  {
    plan: 'Diamante',
    price: '40.000,00',
    standSize: '18m²',
    features: {
      welcomeKit: true,
      stageScreen: true,
      sponsorPanel: true,
      mcMention: true,
      videoOnStage: true,
      eventReport: true,
      websiteLogo: true,
      socialMediaApp: true,
      emailMarketing: true,
      mediaKit: true,
    },
  },
  {
    plan: 'Ouro',
    price: '30.000,00',
    standSize: '12m²',
    features: {
      welcomeKit: true,
      stageScreen: true,
      sponsorPanel: true,
      mcMention: true,
      videoOnStage: false,
      eventReport: true,
      websiteLogo: true,
      socialMediaApp: true,
      emailMarketing: true,
      mediaKit: false,
    },
  },
  {
    plan: 'Prata',
    price: '20.000,00',
    standSize: '9m²',
    features: {
      welcomeKit: true,
      stageScreen: true,
      sponsorPanel: true,
      mcMention: false,
      videoOnStage: false,
      eventReport: false,
      websiteLogo: true,
      socialMediaApp: true,
      emailMarketing: false,
      mediaKit: false,
    },
  },
  {
    plan: 'Bronze',
    price: '10.000,00',
    standSize: '4m²',
    features: {
      welcomeKit: true,
      stageScreen: true,
      sponsorPanel: true,
      mcMention: false,
      videoOnStage: false,
      eventReport: false,
      websiteLogo: true,
      socialMediaApp: true,
      emailMarketing: false,
      mediaKit: false,
    },
  },
  {
    plan: 'Visibilidade',
    price: '3.000,00',
    standSize: null,
    features: {
      welcomeKit: true,
      stageScreen: false,
      sponsorPanel: false,
      mcMention: false,
      videoOnStage: false,
      eventReport: false,
      websiteLogo: true,
      socialMediaApp: false,
      emailMarketing: false,
      mediaKit: true,
    },
  },
];

export default function SponsorshipTable() {
  return (
    <>
      {/* Desktop version */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-6 gap-2">
        <div className="col-span-1 md:col-span-6 grid grid-cols-8 gap-2">
          <div className="col-span-3"></div>
          {sponsorshipPlans.map((item, index) => (
            <div className="p-5 border-2 rounded-md text-center font-bold bg-white/10" key={index}>
              <p>{item.plan}</p>
            </div>
          ))}
        </div>

        {/* Valor do investimento */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Valor do investimento</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center">R$ <strong>{item.price}</strong></div>
          ))}
        </div>

        {/* Tamanho do estande */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Tamanho do estande</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center font-bold">{item.standSize || ' '}</div>
          ))}
        </div>

        {/* Material no kit de boas-vindas do evento */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Material no kit de boas-vindas do evento*</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center">{item.features.welcomeKit ? <CheckIcon className="w-6 h-6 mx-auto" /> : ' '}</div>
          ))}
        </div>

        {/* Exibição da marca na tela do palco principal */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Exibição da marca na tela do palco principal</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center">{item.features.stageScreen ? <CheckIcon className="w-6 h-6 mx-auto" /> : ' '}</div>
          ))}
        </div>

        {/* Exibição da marca em painel de patrocinadores e participantes */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Exibição da marca em painel de patrocinadores e participantes</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center">{item.features.sponsorPanel ? <CheckIcon className="w-6 h-6 mx-auto" /> : ' '}</div>
          ))}
        </div>

        {/* Menção da marca pelo Mestre de Cerimônias no palco principal */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Menção da marca pelo Mestre de Cerimônias no palco principal</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center">{item.features.mcMention ? <CheckIcon className="w-6 h-6 mx-auto" /> : ' '}</div>
          ))}
        </div>

        {/* Vídeo de até 60 segundos no palco principal */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Vídeo de até 60 segundos no palco principal</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center">{item.features.videoOnStage ? <CheckIcon className="w-6 h-6 mx-auto" /> : ' '}</div>
          ))}
        </div>

        {/* Relatório completo com os resultados do evento */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Relatório completo com os resultados do evento</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center">{item.features.eventReport ? <CheckIcon className="w-6 h-6 mx-auto" /> : ' '}</div>
          ))}
        </div>

        {/* Logo no site oficial do evento */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Logo no site oficial do evento</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center">{item.features.websiteLogo ? <CheckIcon className="w-6 h-6 mx-auto" /> : ' '}</div>
          ))}
        </div>

        {/* Aplicação da marca nas redes sociais do evento */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Aplicação da marca nas redes sociais do evento</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center">{item.features.socialMediaApp ? <CheckIcon className="w-6 h-6 mx-auto" /> : ' '}</div>
          ))}
        </div>

        {/* Aplicação da marca em e-mail marketing de divulgação */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Aplicação da marca em e-mail marketing de divulgação</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center">{item.features.emailMarketing ? <CheckIcon className="w-6 h-6 mx-auto" /> : ' '}</div>
          ))}
        </div>

        {/* Envio de enxoval de peças para divulgação em redes sociais */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Envio de enxoval de peças para divulgação em redes sociais</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center">{item.features.mediaKit ? <CheckIcon className="w-6 h-6 mx-auto" /> : ' '}</div>
          ))}
        </div>
      </div>

      {/* Responsive version */}
      <div className="space-y-5 block md:hidden">
        {sponsorshipPlans.map((item, index) => (
            <div key={index} className="p-5 border-2 rounded-md text-center bg-white/10">
              <Text_head_1 className="font-bold mb-5">{item.plan}</Text_head_1>
              <p className="py-2 border-b">R$ <strong>{item.price}</strong></p>
              <p className="py-2 border-b">Tamanho do estande: <strong>{item.standSize}</strong></p>
              {item.features.welcomeKit && <p className="py-2 border-b">Material no kit de boas-vindas do evento*</p>}
              {item.features.stageScreen && <p className="py-2 border-b">Exibição da marca na tela do palco principal</p>}
              {item.features.sponsorPanel && <p className="py-2 border-b">Exibição da marca em painel de patrocinadores e participantes</p>}
              {item.features.mcMention && <p className="py-2 border-b">Menção da marca pelo Mestre de Cerimônias no palco principal</p>}
              {item.features.videoOnStage && <p className="py-2 border-b">Vídeo de até 60 segundos no palco principal</p>}
              {item.features.eventReport && <p className="py-2 border-b">Relatório completo com os resultados do evento</p>}
              {item.features.websiteLogo && <p className="py-2 border-b">Logo no site oficial do evento</p>}
              {item.features.socialMediaApp && <p className="py-2 border-b">Aplicação da marca nas redes sociais do evento</p>}
              {item.features.emailMarketing && <p className="py-2 border-b">Aplicação da marca em e-mail marketing de divulgação</p>}
              {item.features.mediaKit && <p className="py-2">Envio de enxoval de peças para divulgação em redes sociais</p>}
            </div>
      ))}
      </div>
    </>
  );
}
