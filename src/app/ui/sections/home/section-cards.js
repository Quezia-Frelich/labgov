import Card_benefit from "../../components/cards/card-2025";
import Container from "../../components/container/container";
import Text_display_3 from "../../components/text/text-display-3";

export default function Section_banner ( {} ) {
  return (
    <section className="min-h-[80vh] py-10 bg-radial-gradient25 text-white flex flex-col items-center justify-center">
        <Container>
          <Text_display_3 className={'text-center mb-10 mt-10'}>O maior fórum de <span className={"font-bold"}>inovação e empreendedorismo</span> voltado para as áreas de engenharia, agronomia e geociências de Santa Catarina já está com inscrições abertas.</Text_display_3>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <Card_benefit 
  title={'Painéis'} 
  subtitle={'Grandes nomes, grandes ideias'} 
  description={'Encontros com especialistas e líderes do setor discutindo os desafios e as oportunidades que moldam o futuro da Engenharia, Agronomia e Geociências.'}
/>
<Card_benefit 
  title={'Tecnologia'} 
  subtitle={'O futuro ao seu alcance'} 
  description={'Conheça as soluções tecnológicas que estão transformando o mercado, com demonstrações práticas e experiências imersivas.'}
/>
<Card_benefit 
  title={'Inovação'} 
  subtitle={'Ideias que mudam o jogo'} 
  description={'Descubra projetos disruptivos, startups promissoras e cases reais que estão redefinindo o papel da Engenharia e Agronomia no Brasil.'}
/>
<Card_benefit 
  title={'Networking'} 
  subtitle={'Conexões que impulsionam carreiras e negócios'} 
  description={'Aproxime-se de profissionais, empresas e instituições em um ambiente feito para gerar parcerias, oportunidades e colaboração.'}
/>

          </div>
        </Container>
      </section>
  );
}