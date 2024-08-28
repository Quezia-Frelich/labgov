import Card_benefit from "../../components/cards/card-benefit";
import Container from "../../components/container/container";
import Text_display_3 from "../../components/text/text-display-3";

export default function Section_banner ( {} ) {
  return (
    <section className="min-h-[80vh] py-10 bg-radial-gradient text-white flex flex-col items-center justify-center">
        <Container>
          <Text_display_3 className={'font-bold text-center mb-10 mt-10'}>Patrocine nosso evento e leve sua marca a um novo patamar de visibilidade e engajamento.</Text_display_3>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            <Card_benefit icon={'/icons/networking.png'} title={'Networking exclusivo'} description={'Conecte-se com líderes e profissionais do setor'}/>
            <Card_benefit icon={'/icons/visibilidade.png'} title={'Visibilidade de marca'} description={'Exponha sua marca para um público qualificado'}/>
            <Card_benefit icon={'/icons/oportunidade.png'} title={'Oportunidade de negócios'} description={'Interaja com potenciais clientes e parceiros'}/>
            <Card_benefit icon={'/icons/conteudo.png'} title={'Conteúdo de qualidade'} description={'Atualize-se com as últimas tendências e tecnologias'}/>
            <Card_benefit icon={'/icons/ambiente.png'} title={'Ambiente inspirador'} description={'Troque ideias em um ambiente dinâmico e inovador'}/>
          </div>
        </Container>
      </section>
  );
}