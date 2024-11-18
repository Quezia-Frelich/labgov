import Container from "../../components/container/container";
import Text_body from "../../components/text/text-body";
import Text_display_3 from "../../components/text/text-display-3";

export default function Section_description ( {} ) {
  return (
    <section className="mb-10 py-10">
        <Container className={'text-violet-crea-700'}>
            <div>
                <Text_display_3 className={'font-bold mb-5'}>Bem-vindos ao CREA Summit!</Text_display_3>
                <Text_body>
                É um prazer recebê-los no CREA Summit 2024, um evento inovador que reúne profissionais, acadêmicos, empresários e gestores públicos das áreas de Engenharia, Agronomia e Geociências. Nosso objetivo é criar um espaço para troca de conhecimentos, discussão sobre inovações tecnológicas e as principais tendências que estão transformando o setor.
                <br></br><br></br>
                Durante o evento, vocês poderão participar de palestras e painéis pensados para enriquecer seu desenvolvimento profissional e ampliar suas conexões. Estejam prontos para se inspirar com grandes nomes do setor e explorar novas ideias.
                <br></br><br></br>
                Esperamos que o CREA Summit SC seja um marco na sua carreira e que você saia daqui motivado e preparado para os desafios do futuro.
                <br></br><br></br>
                Atenciosamente,
                <br></br><br></br>
                Equipe Organizadora do CREA Summit SC
                </Text_body>
            </div>
        </Container>
    </section>
  );
}