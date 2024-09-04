import { CheckIcon } from "@heroicons/react/24/outline";
import Text_head_1 from "../text/text-head-1";
import Text_display_3 from "../text/text-display-3";

const sponsorshipPlans = [
  {
    plan: 'Diamante',
    price: '40.000,00',
    standSize: '18m²',
    features: {
      kit_de_boas_vindas: true,
      palco_principal: true,
      painel_de_patrocinadores: true,
      mencao_da_marca_pelo_mestre: true,
      video_no_palco: true,
      resultados_do_evento: true,
      logo_no_site: true,
      marca_nas_redes: true,
      marca_em_email: true,
      envio_de_enxoval: true,
    },
  },
  {
    plan: 'Ouro',
    price: '30.000,00',
    standSize: '12m²',
    features: {
      kit_de_boas_vindas: true,
      palco_principal: true,
      painel_de_patrocinadores: true,
      mencao_da_marca_pelo_mestre: true,
      video_no_palco: false,
      resultados_do_evento: true,
      logo_no_site: true,
      marca_nas_redes: true,
      marca_em_email: true,
      envio_de_enxoval: true,
    },
  },
  {
    plan: 'Prata',
    price: '20.000,00',
    standSize: '9m²',
    features: {
      kit_de_boas_vindas: true,
      palco_principal: true,
      painel_de_patrocinadores: true,
      mencao_da_marca_pelo_mestre: false,
      video_no_palco: false,
      resultados_do_evento: true,
      logo_no_site: true,
      marca_nas_redes: false,
      marca_em_email: true,
      envio_de_enxoval: true,
    },
  },
  {
    plan: 'Bronze',
    price: '10.000,00',
    standSize: '4m²',
    features: {
      kit_de_boas_vindas: true,
      palco_principal: false,
      painel_de_patrocinadores: true,
      mencao_da_marca_pelo_mestre: false,
      video_no_palco: false,
      resultados_do_evento: true,
      logo_no_site: true,
      marca_nas_redes: false,
      marca_em_email: true,
      envio_de_enxoval: true,
    },
  },
  {
    plan: 'Visibilidade',
    price: '3.000,00',
    standSize: null,
    features: {
      kit_de_boas_vindas: true,
      palco_principal: false,
      painel_de_patrocinadores: false,
      mencao_da_marca_pelo_mestre: false,
      video_no_palco: false,
      resultados_do_evento: false,
      logo_no_site: true,
      marca_nas_redes: false,
      marca_em_email: false,
      envio_de_enxoval: false,
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
            <div key={index} className="text-center">{item.features.kit_de_boas_vindas ? <CheckIcon className="w-6 h-6 mx-auto" /> : ' '}</div>
          ))}
        </div>

        {/* Exibição da marca na tela do palco principal */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Exibição da marca na tela do palco principal</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center">{item.features.palco_principal ? <CheckIcon className="w-6 h-6 mx-auto" /> : ' '}</div>
          ))}
        </div>

        {/* Exibição da marca em painel de patrocinadores e participantes */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Exibição da marca em painel de patrocinadores e participantes</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center">{item.features.painel_de_patrocinadores ? <CheckIcon className="w-6 h-6 mx-auto" /> : ' '}</div>
          ))}
        </div>

        {/* Menção da marca pelo Mestre de Cerimônias no palco principal */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Menção da marca pelo Mestre de Cerimônias no palco principal</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center">{item.features.mencao_da_marca_pelo_mestre ? <CheckIcon className="w-6 h-6 mx-auto" /> : ' '}</div>
          ))}
        </div>

        {/* Vídeo de até 60 segundos no palco principal */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Vídeo de até 60 segundos no palco principal</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center">{item.features.video_no_palco ? <CheckIcon className="w-6 h-6 mx-auto" /> : ' '}</div>
          ))}
        </div>

        {/* Relatório completo com os resultados do evento */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Relatório completo com os resultados do evento</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center">{item.features.resultados_do_evento ? <CheckIcon className="w-6 h-6 mx-auto" /> : ' '}</div>
          ))}
        </div>

        {/* Logo no site oficial do evento */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Logo no site oficial do evento</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center">{item.features.logo_no_site ? <CheckIcon className="w-6 h-6 mx-auto" /> : ' '}</div>
          ))}
        </div>

        {/* Aplicação da marca nas redes sociais do evento */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Aplicação da marca nas redes sociais do evento</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center">{item.features.marca_nas_redes ? <CheckIcon className="w-6 h-6 mx-auto" /> : ' '}</div>
          ))}
        </div>

        {/* Aplicação da marca em e-mail marketing de divulgação */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Aplicação da marca em e-mail marketing de divulgação</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center">{item.features.marca_em_email ? <CheckIcon className="w-6 h-6 mx-auto" /> : ' '}</div>
          ))}
        </div>

        {/* Envio de enxoval de peças para divulgação em redes sociais */}
        <div className="p-5 col-span-1 md:col-span-6 border-2 rounded-md bg-white/10 grid grid-cols-8 gap-2">
          <div className="col-span-3">Envio de enxoval de peças para divulgação em redes sociais</div>
          {sponsorshipPlans.map((item, index) => (
            <div key={index} className="text-center">{item.features.envio_de_enxoval ? <CheckIcon className="w-6 h-6 mx-auto" /> : ' '}</div>
          ))}
        </div>
      </div>

      {/* Responsive version */}
      <div className="space-y-5 block md:hidden">
        {sponsorshipPlans.map((item, index) => (
            <div key={index} className="p-5 border-2 rounded-md text-center bg-white/10">
              <Text_head_1 className="font-bold mb-5">{item.plan}</Text_head_1>
              <p className="py-2 border-b">R$ <strong>{item.price}</strong></p>
              {item.standSize && <p className="py-2 border-b">Tamanho do estande: <strong>{item.standSize}</strong></p>}       
              {item.features.kit_de_boas_vindas && <p className="py-2 border-b">Material no kit de boas-vindas do evento*</p>}
              {item.features.palco_principal && <p className="py-2 border-b">Exibição da marca na tela do palco principal</p>}
              {item.features.painel_de_patrocinadores && <p className="py-2 border-b">Exibição da marca em painel de patrocinadores e participantes</p>}
              {item.features.mencao_da_marca_pelo_mestre && <p className="py-2 border-b">Menção da marca pelo Mestre de Cerimônias no palco principal</p>}
              {item.features.video_no_palco && <p className="py-2 border-b">Vídeo de até 60 segundos no palco principal</p>}
              {item.features.resultados_do_evento && <p className="py-2 border-b">Relatório completo com os resultados do evento</p>}
              {item.features.logo_no_site && <p className="py-2 border-b">Logo no site oficial do evento</p>}
              {item.features.marca_nas_redes && <p className="py-2 border-b">Aplicação da marca nas redes sociais do evento</p>}
              {item.features.marca_em_email && <p className="py-2 border-b">Aplicação da marca em e-mail marketing de divulgação</p>}
              {item.features.envio_de_enxoval && <p className="py-2">Envio de enxoval de peças para divulgação em redes sociais</p>}
            </div>
      ))}
      </div>
    </>
  );
}
