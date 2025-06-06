import Card_benefit from "../../components/cards/card-2025";
import Container from "../../components/container/container";
import Text_display_3 from "../../components/text/text-display-3";

export default function Section_banner ( {} ) {
  return (
    <section className="min-h-[80vh] py-10 bg-radial-gradient25 text-white flex flex-col items-center justify-center">
        <Container>
          <Text_display_3 className={'text-center mb-10 mt-10'}>O maior fórum de <span className={"font-bold"}>inovação e empreendedorismo</span> voltado para as áreas de engenharia, agronomia e geociências de Santa Catarina já está com inscrições abertas.</Text_display_3>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <Card_benefit title={'Painéis'} description={'promovendo debates sobre as transformações tecnológicas e desafios do futuro nas engenharias'}/>
            <Card_benefit title={'Tecnologia'} description={'promovendo debates sobre as transformações tecnológicas e desafios do futuro nas engenharias'}/>
            <Card_benefit title={'Inovação'} description={'promovendo debates sobre as transformações tecnológicas e desafios do futuro nas engenharias'}/>
            <Card_benefit title={'Networking'} description={'promovendo debates sobre as transformações tecnológicas e desafios do futuro nas engenharias'}/>
          </div>
        </Container>
      </section>
  );
}