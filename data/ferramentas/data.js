import Form_ferramenta from "@/app/ui/components/forms/form_ferramenta";

export const ferramentas = [
  /* Autodesk */
  {
    banner: `/banners/ferramentas/autodesk/Autodesk`,
    title: `Autodesk`,
    target: ["Para profissionais"],
    description: `<strong>Software de criação para todas as indústrias:</strong> conecte as equipes de projetos de construção e infraestrutura, desde o projeto até o produto final.`,
    video: `/videos/autodesk.mp4`,

    first_item: {
      title:
        "Inovação & Tecnologia para a Transformação Digital do mercado AEC",
      description: `Somos uma empresa de tecnologia especializada no segmento de Arquitetura, Engenharia e Construção.
            <br><br>
            Um dos maiores parceiros Autodesk da América Latina, oferecendo softwares, consultoria, capacitação e suporte que impulsionam a transformação digital.
            Nos diferenciamos por acompanhar toda a sua jornada digital, desde a instalação da primeira licença até o desenvolvimento de integrações entre sistemas complexos, contando com uma equipe especializada que se dedica a conhecer seu negócio para construir uma proposta de solução personalizada.
            <br><br>
            <strong>Traga sua empresa para a Era Digital escolhendo um parceiro que é referência em inovação!</strong>`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "",
      form: "",
    },

    second_item: {
      title: `Para quem se destina`,
      description: `
            Os benefícios apresentados a seguir são destinados para os profissionais registrados no CREA-SC.
            <br>
            <span style='font-size: 12px;'>OBS: benefício disponível apenas para profissionais com até 5 anos de registro.<span>`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "",
      form: "",
    },

    third_item: {
      title: `Benefícios`,
      description: ``,
      last_description: `
            <ol class="list-decimal">
                <li>Ferramentas Autodesk 25% abaixo do preço de mercado.</li>
                <li>Para cada ferramenta fornecida, serão liberados 2 cursos conceito do software adquirido em nossa plataforma educacional.</li>
                    <ul>
                    <li>1 curso de conceito BIM - valores variam de <s>300,00</s> a <s>500,00</s> por 0,00 (acesso gratuito).</li>
                    <li>1 curso de software de autoria em BIM - valores variam de <s>700,00</s> a <s>1200,00</s> por 0,00 (acesso gratuito).</li>
                    </ul>
                <li>Suporte Técnico da maior equipe da América Latina para instalação, licenciamento e uso.</li>
                <li>Jornada de Sucesso do Cliente personalizada</li>
            </ol>
            `,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "",
      form: "",
    },

    fourth_item: {
      title: `Pacotes`,
      description: ``,
      last_description: ``,
      partners: [
        { logo: `/banners/ferramentas/autodesk/prices/architecture.png` },
        { logo: `/banners/ferramentas/autodesk/prices/product.png` },
      ],
      partners_description: `
            Oferta válida também para as ferramentas individuais. Consulte outras opções clicando em "Fazer a Inscrição."
            <br>
            <span style='font-size: 13px;'>*Valores de referencia em reais, sujeitos a mudança de acordo com a variação cambial.</span>
            `,
      button_link: "",
      link: "",
      button_form: "",
      form: "",
    },

    fifth_item: {
      title: `Principais ferramentas em Architecture, Engineering & Construction`,
      description: ``,
      last_description: ``,
      partners: [
        { logo: `/banners/ferramentas/autodesk/construction/autodesk (1).png` },
        { logo: `/banners/ferramentas/autodesk/construction/autodesk (2).png` },
        { logo: `/banners/ferramentas/autodesk/construction/autodesk (3).png` },
        { logo: `/banners/ferramentas/autodesk/construction/autodesk (4).png` },
        { logo: `/banners/ferramentas/autodesk/construction/autodesk (5).png` },
        { logo: `/banners/ferramentas/autodesk/construction/autodesk (6).png` },
      ],
      partners_description: ``,
      button_link: "Ver todas as ferramentas",
      link: "https://lp.ff.solutions/parceria-crea-sc#aec-collection",
      button_form: "",
      form: "",
    },

    sixth_item: {
      title: `Principais ferramentas em Product Design & Manufacturing`,
      description: ``,
      last_description: ``,
      partners: [
        { logo: `/banners/ferramentas/autodesk/product/image  (1).png` },
        { logo: `/banners/ferramentas/autodesk/product/image  (2).png` },
        { logo: `/banners/ferramentas/autodesk/product/image  (3).png` },
        { logo: `/banners/ferramentas/autodesk/product/image  (4).png` },
        { logo: `/banners/ferramentas/autodesk/product/image  (5).png` },
        { logo: `/banners/ferramentas/autodesk/product/image  (6).png` },
      ],
      partners_description: ``,
      button_link: "Ver todas as ferramentas",
      link: "https://lp.ff.solutions/parceria-crea-sc#PDM",
      button_form: "",
      form: "",
    },

    seventh_item: {
      title: `Como me inscrever`,
      description: `
            <ol>
            <li>Registrar seus dados através do formulário.</li>
            <li>Aguardar e-mail com as instruções de liberação dos benefícios.</li>
            </ol>`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "Fazer inscrição",
      form: (
        <Form_ferramenta
          title={"Autodesk"}
          input_contato={true}
          input_cpf={true}
          emailEmpresa={"breno.bueno@ff.solutions"}
          emailCREA={"ferramentasdigitais@crea-sc.org.br"}
          urlRedirect={"https://lp.ff.solutions/parceria-crea-sc"}
        />
      ),
    },
  },

  /* Alto QI */
  {
    banner: `/banners/ferramentas/alto/Altoqi`,
    title: `Alto QI`,
    target: ["Para profissionais"],
    description: `<strong>Uma nova história para a construção civil:</strong> com mais de 30 anos de mercado, a AltoQi é líder nacional em soluções tecnológicas para projetos de edificação, colaboração, orçamento e planejamento de obras.`,
    video: `/videos/Altoqi.mp4`,

    first_item: {
      title: "Gestão digital do empreendimento",
      description: `Com mais de 30 anos de mercado, e mais de 60.000 clientes a AltoQi é líder nacional em soluções tecnológicas para projetos de edificação, colaboração, orçamento e planejamento de obras. Atuamos em BIM 3D (modelagem) , 4D (planejamento) e 5D (orçamento), além de disponibilizarmos um ambiente comum de dados (CDE) para gestão da comunicação, processos e documentação do empreendimento.`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "",
      form: "",
    },

    second_item: {
      title: `Para quem se destina`,
      description: `
            Os benefícios apresentados a seguir são destinados para os profissionais registrados no CREA-SC, pessoas físicas em início de jornada profissional, seja em formação ou no 1º e 2º ano de registro.
            <br>
            <span style='font-size: 12px;'>*Oferta válida para pessoas físicas em licenças individuais de uso.<span>`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "",
      form: "",
    },

    third_item: {
      title: `Benefícios`,
      description: `
            <ol class="list-decimal">
            <li>Primeiro ano de registro no CREA-SC</li>
                <ul>
                <li>Software - 50% de desconto na assinatura do valor vigente;</li>
                <li>Cursos - 50% de desconto do valor vigente;</li>
                <li>Pós-graduações - 20% de desconto do valor vigente.</li>
                </ul>
            <li>Até dezembro de 2023: 75% de desconto do valor vigente para os 200 primeiros inscritos na contratação de software.</li>
            <li>Segundo ano de registro no CREA-SC</li>
                <ul>
                <li>Software - 50% de desconto na assinatura do valor vigente;</li>
                <li>Cursos - 50% de desconto do valor vigente;</li>
                <li>Pós-graduações - 20% de desconto do valor vigente.</li>
                </ul>
            </ol>
            `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "",
      form: "",
    },

    fourth_item: {
      title: `Ferramentas`,
      description: ``,
      last_description: ``,
      partners: [
        { logo: `/banners/ferramentas/alto/prices/image  (1).png` },
        { logo: `/banners/ferramentas/alto/prices/image  (2).png` },
        { logo: `/banners/ferramentas/alto/prices/image  (3).png` },
        { logo: `/banners/ferramentas/alto/prices/image  (4).png` },
      ],
      partners_description: ``,
      button_link: "Ver detalhes das ferramentas",
      link: "https://www.altoqi.com.br/home",
      button_form: "",
      form: "",
    },

    fifth_item: {
      title: ``,
      description: ``,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    sixth_item: {
      title: ``,
      description: ``,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    seventh_item: {
      title: `Como me inscrever`,
      description: `
            <ol>
            <li>Registrar seus dados através do formulário.</li>
            <li>Aguardar e-mail com as instruções de liberação dos benefícios.</li>
            </ol>`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "Fazer inscrição",
      form: (
        <Form_ferramenta
          title={"Alto QI"}
          input_contato={true}
          input_cpf={true}
          emailEmpresa={"marcelo@altoqi.com.br"}
          emailCREA={"ferramentasdigitais@crea-sc.org.br"}
          urlRedirect={"https://ae.altoqi.com.br/parceria-crea-sc"}
        />
      ),
    },
  },

  /* Bitável SC */
  {
    banner: `/banners/ferramentas/bitavel/bitavel`,
    title: `Bitável SC`,
    target: ["Para profissionais", "Para empresas", "Para estudantes"],
    description: `<strong>Sistema online de planejamento e controle de obras 4D BIM:</strong> plataforma brasileira pioneira em adaptar o Digital Twin no canteiro de obras em tempo real.`,
    video: `/videos/bitavel.mp4`,

    first_item: {
      title: "Bitável SC Tecnologia",
      description: `Com a plataforma BitGOL de gerenciamento e controle de obras, somos a única plataforma a apresentar o previsto x realizado do andamento da sua obra em tempo real, em projeto 3D, na mesma tela, facilitando a visualização das etapas da obra e agilizando a comunicação dos processos construtivos até 9x mais rápido. Através do acompanhamento do cronograma e orçamento da construção é possível gerenciar com a nossa plataforma todas as áreas que envolvem pessoas, processos e tecnologia.
            <br><br>
            Somos especialistas em Digital Twin e por ser um acesso online, acabando com a necessidade de baixar aplicativos e softwares e permitindo a liberdade geográfica de acesso.`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "",
      form: "#",
    },

    second_item: {
      title: `Principais Funcionalidades`,
      description: `
            <ul>
            <li>Gerenciamento de Projeto e Obra;</li>
            <li>Planejamento 4D/5D BIM;</li>
            <li>Simulação 4D/5D;</li>
            <li>Controle 4D/5D;</li>
            <li>Cronograma 4D/5D (n níveis da EAP);</li>
            <li>Fiscalização 4D/5D;</li>
            <li>Acompanhamento 4D/5D;</li>
            <li>Digital Twin (Gêmeo Digital);</li>
            <li>Múltiplos projetos e obras;</li>
            <li>Especialistas para treinamento e suporte técnico para demais serviços.</li>
            </ul>`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "Ver detalhes",
      link: "https://www.bitavel.com.br/funcionalidades",
      button_form: "",
      form: "",
    },

    third_item: {
      title: `Para quem se destina`,
      description: `Os benefícios apresentados a seguir são destinados para pessoas físicas e jurídicas com registro ativo no CREA/SC.`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "",
      form: "",
    },

    fourth_item: {
      title: `Planos`,
      description: `
            <ol class="list-decimal">
            <li>Plano Organizador</li>
                <ul>
                <li>Para gestor ou empreendedor;</li>
                <li>R$317,00/ano.</li>
                </ul>
            <li>Plano Planejador</li>
                <ul>
                <li>Mais de um gestor ou escritório de engenharia;</li>
                <li>R$ 299/mês.</li>
                </ul>
            <li>Plano Controle</li>
                <ul>
                <li>Departamento de obras / empresas ou escritórios de engenharia / construtoras ou incorporadoras;</li>
                <li>R$ 499/mês.</li>
                </ul>
            </ol>
            `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    fifth_item: {
      title: `Benefícios`,
      description: `
            <ul>
            <li>Primeiros três meses de cadastro na plataforma*</li>
                <ul>
                <li>Acesso gratuito*;</li>
                <li>Implantação grátis via EAD.<br>*Direito a uma licença na base teste.</li>
                </ul>
            <li>Até um ano de uso da plataforma**</li>
                <ul>
                <li>30% de desconto na mensalidade do valor vigente;<br>**Desconto válido apenas com renovação da anuidade CREA.</li>
                </ul>
            <li>Após um ano de uso (renovação)***</li>
                <ul>
                <li>20% de desconto na mensalidade do valor vigente, podendo ser negociado os demais anos de uso.<br>***Desconto válido apenas com contratação via CNPJ e renovação da anuidade CREA.</li>
                <li>R$ 499/mês.</li>
                </ul>
            <li>Acesso gratuito para estudantes de Engenharia Civil até o final do curso</li>
            <li>Seis (6) meses de acesso gratuito para recém formados</li>
            </ul>
            <br><br>
            Curso gratuito de Fundamentos para Gerenciamento de Obras 4D BIM
            `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "#",
    },

    sixth_item: {
      title: `Condições`,
      description: `
            <ul class='ul-main'>
            <li>Acesso restrito a 1 licença grátis nos primeiros 3 meses;</li>
            <li>Suporte pela plataforma, via chat, ou reuniões agendadas;</li>
            <li>Necessário ao menos dois ou três usuários (dependendo do plano de aquisição) para acesso mensal;</li>
            <li>Contrato anual para os Planejador e Controle.</li>
            <li>Válido para membros do CREA/SC.</li>
            </ul>
            `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    seventh_item: {
      title: `Como me inscrever`,
      description: `
            <ol>
            <li>Registrar seus dados através do formulário.</li>
            <li>Aguardar e-mail com as instruções de liberação dos benefícios.</li>
            </ol>`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "Fazer inscrição",
      form: (
        <Form_ferramenta
          title={"Bitável SC"}
          input_email={true}
          input_contato={true}
          input_razaosocial={true}
          input_registro={true}
          input_cpf={true}
          input_observacoes={true}
          emailEmpresa={"karol.costa@bitavel.com"}
          emailCREA={"ferramentasdigitais@crea-sc.org.br"}
        />
      ),
    },
  },

  /* Ecustos */
  {
    banner: `/banners/ferramentas/e-custos/ecustos`,
    title: `eCustos`,
    target: ["Para profissionais"],
    description: `Plataforma intuitiva para a gestão de orçamentos de obras, que simplifica a engenharia de custos através de bases confiáveis, índices de mercado e inteligência de dados, garantindo saltos de performance e resultados.`,
    video: `/videos/ecustos.mp4`,

    first_item: {
      title: "Software de orçamento de obras",
      description: `Plataforma intuitiva para a gestão de orçamentos de obras, que simplifica a engenharia de custos através de bases confiáveis, índices de mercado e inteligência de dados, garantindo saltos de performance e resultados.
            <br><br>
            O software realiza qualquer tipo de orçamento de obra de forma estruturada com mais agilidade. Na versão PRO, temos a base de custos SINAPI, ORSE, DNIT e Eng.Custos, onde são atualizadas quando disponíveis. Tem a possibilidade de criar composições próprias, emitir 3 tipos de relatórios, o sintético, analítico e de curva abc.`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "",
      form: "#",
    },

    second_item: {
      title: `Principais funcionalidades`,
      description: `
            <ul class='ul-main'>
            <li>Ganhe tempo e dinheiro com orçamentos mais ágeis e entregues no tempo certo;</li>
            <li>Interface inteligente que estrutura seu orçamento da maneira correta;</li>
            <li>Gere relatórios e tenha controle das obras com apenas 1 clique.</li>
            </ul>`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "Ver detalhes das funcionalidades",
      link: "https://www.ecustos.com.br/",
      button_form: "",
      form: "",
    },

    third_item: {
      title: `Para quem se destina`,
      description: `Os benefícios apresentados a seguir são destinados para os profissionais registrados no CREA-SC.`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "",
      form: "",
    },

    fourth_item: {
      title: `Benefícios`,
      description: `
            <ol class="list-decimal">
            <li>Primeiro ano de cadastro na plataforma</li>
                <ul>
                <li>De <s>697,00</s>/ano por 0,00 (acesso gratuito);</li>
                <li>R$317,00/ano.</li>
                </ul>
            <li>Segundo ano (renovação)</li>
                <ul>
                <li>30% de desconto do valor vigente</li>
                <li>R$ 299/mês.</li>
                </ul>
            <li>Terceiro ano (renovação)</li>
                <ul>
                <li>20% de desconto do valor vigente</li>
                </ul>
            </ol>
            `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    fifth_item: {
      title: `Condições`,
      description: `
            <ul class='ul-main'>
            <li>Um ano de isenção da assinatura;</li>
            <li>Uma licença por cadastro;</li>
            <li>Um acesso mensal, para não ser cancelado o cadastro;</li>
            <li>Suporte pelos vídeos tutoriais;</li>
            <li>Capacitação pela plataforma Engenheiro de Custos com 50% de desconto em todos os treinamentos, utilizando o cupom CREASC.</li>
            <li>(valores variam de <s>797,00</s> a <s>147,00</s> por 73,50 a 398,50)</li>
            </ul>
            `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "#",
    },

    sixth_item: {
      title: ``,
      description: ``,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    seventh_item: {
      title: `Como me inscrever`,
      description: `
            <ol>
            <li>Registrar seus dados através do formulário.</li>
            <li>Aguardar e-mail com as instruções de liberação dos benefícios.</li>
            </ol>`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "Fazer inscrição",
      form: (
        <Form_ferramenta
          title={"eCustos"}
          input_email={true}
          input_contato={true}
          input_razaosocial={true}
          input_registro={true}
          input_cpf={true}
          input_observacoes={true}
          emailEmpresa={"thais@ecustos.com.br"}
          emailCREA={"ferramentasdigitais@crea-sc.org.br"}
        />
      ),
    },
  },

  /* E-licencie */
  {
    banner: `/banners/ferramentas/e-licencie/e-licencie`,
    title: `E-licencie`,
    target: ["Para profissionais", "Para estudantes"],
    description: `<strong>Gestão de processos ambientais para governos, consultorias e indústrias.:</strong> empresa de base tecnológica fundada por engenheiros que ajuda gestores ambientais a economizarem 35% do seu tempo na gestão dos processos ambientais.`,
    video: `/videos/E-licencie.mp4`,

    first_item: {
      title:
        "Gestão de processos ambientais para governos, consultorias e indústrias.",
      description: `Somos uma empresa de tecnologia fundada por engenheiros que ajuda gestores ambientais a economizarem 35% do seu tempo na gestão dos processos ambientais.
            Estamos em 23 estados resolvendo problemas relacionados à perda de prazos, organização de equipes e aumento de competitividade de empresas dos segmentos de consultoria, engenharia, indústria, construção civil e agroindústria.
            <br><br>
            <strong>Nossa inspiração é tornar o processo manual de licenciamento ambiental em um controle automatizado.</strong>
            <ul class='ul-main'>
                <li>Praticidade e agilidade para você não perder mais prazos e automatizar os processos de gestão.</li>
                <li>Monitore qualquer licença de forma simples e rápida.</li>
            </ul>
            
            `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "",
      form: "#",
    },

    second_item: {
      title: `Para quem se destina`,
      description: `Os benefícios apresentados a seguir são destinados para os profissionais registrados no CREA-SC e estudantes registrados no CREA Jr-SC`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "",
      form: "",
    },

    third_item: {
      title: `Benefícios`,
      description: `
            <ol class="list-decimal">
            <li>CREA Jr-SC</li>
                <ul>
                <li>1 ano gratuito para quem faz parte do CREA Jr-SC.</li>
                </ul>
            <li>Programa INOVA Jr</li>
                <ul>
                <li>Descontos para profissionais nos Plano Individual, Start e Consultoria.</li>
                <li>6 meses gratuitos.</li>
                <li>Após os 6 meses de utilização, ganha 50% de desconto nos Planos Individual e Start para mais 6 meses de utilização.</li>
                <li>Na renovação do contrato (após 12 meses), ganha 30% de desconto para o segundo ano de utilização.</li>
                </ul>
            <li>Profissionais</li>
                <ul>
                <li>30% de desconto para o primeiro ano de utilização dos Planos Individual, Start, Consultoria e Empresarial:</li>
                <li>Valores dos Planos (aplicar o desconto conforme o enquadramento)</li>
                    <ul>
                    <li>Plano Individual: 129,00/mês</li>
                    <li>Plano Start: 229,00/mês</li>
                    <li>Plano Consultoria: 319,00/mês</li>
                    <li>Plano Empresarial: 459,00/mês</li>
                    </ul>
                </ul>
            </ol>
            `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "",
      form: "",
    },

    fourth_item: {
      title: ``,
      description: ``,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    fifth_item: {
      title: ``,
      description: ``,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "#",
    },

    sixth_item: {
      title: ``,
      description: ``,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    seventh_item: {
      title: `Como me inscrever`,
      description: `
            <ol>
            <li>Registrar seus dados através do formulário.</li>
            <li>Aguardar e-mail com as instruções de liberação dos benefícios.</li>
            </ol>`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "Fazer inscrição",
      form: (
        <Form_ferramenta
          title={"E-licencie"}
          input_contato={true}
          input_cpf={true}
          emailCREA={"ferramentasdigitais@crea-sc.org.br"}
          emailEmpresa={"contato@e-licencie.com.br"}
          urlRedirect={
            "https://app.e-licencie.com.br/vamos/land-video/cadastro"
          }
        />
      ),
    },
  },

  /* Prevision */
  {
    banner: `/banners/ferramentas/prevision/prevision`,
    title: `Prevision`,
    target: ["Para empresas"],
    description: `<strong>Plataforma líder em planejamento lean:</strong> a Prevision é a plataforma líder na aplicação de Lean Construction para gerar eficiência na Indústria da Construção.`,
    video: `/videos/prevision.mp4`,

    first_item: {
      title: "Plataforma líder em Planejamento Lean",
      description: `A Prevision é a plataforma líder na aplicação de Lean Construction para gerar eficiência na Indústria da Construção. É especialista em Planejamento Lean, feito em Linha de Balanço, que gera conexão entre canteiro de obra e escritório, garantindo previsibilidade e possibilitando a visão do melhor cenário de evolução de todas as obras em uma única tela.
            <br><br>
            Atua no mercado há mais de 5 anos, atende mais de 300 clientes presentes em 110 cidades brasileiras e já otimizou mais de 2.600 obras. A Prevision faz parte do Ecossistema Tecnológico da Indústria da Construção, desenvolvido pela Softplan, uma das maiores empresas de tecnologia do Brasil.
            `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    second_item: {
      title: `Principais funcionalidades`,
      description: `
            <ul class='ul-main'>
            <li>Tomar decisões baseadas em estratégias bem definidas;</li>
            <li>Padronizar a gestão das obras com relatórios visuais;</li>
            <li>Centralizar informações e diminuir controles paralelos;</li>
            <li>Criar cenários para tomadas de ação;</li>
            <li>Comparativo de orçamentos (real x financiamento).</li>
            </ul>
            `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "Ver detalhes das funcionalidades",
      link: "https://www.prevision.com.br/",
      button_form: "",
      form: "",
    },

    third_item: {
      title: `Para quem se destina`,
      description: `Os benefícios apresentados a seguir são destinados para pessoas físicas e jurídicas com registro ativo no CREA/SC.`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "",
      form: "",
    },

    fourth_item: {
      title: `Benefícios`,
      description: `
            <ol class="list-decimal">
            <li>Primeiro ano de cadastro na plataforma</li>
                <ul>
                <li>De <s>2.499,00</s>/mês por 0,00 (acesso gratuito);</li>
                <li>Implantação grátis via EAD.</li>
                </ul>
            <li>*Desconto válido para pessoas físicas e jurídicas</li>
            <li>Segundo ano (renovação)*</li>
                <ul>
                <li>30% de desconto na mensalidade do valor vigente;</li>
                <li>30% de desconto na implantação do valor vigente</li>
                </ul>
            <li>*Desconto válido apenas com contratação via CNPJ e renovação da anuidade CREA</li>
            <li>Terceiro ano (renovação)*</li>
                <ul>
                <li>20% de desconto na mensalidade do valor vigente.</li>
                </ul>
            <li>*Desconto válido apenas com contratação via CNPJ e renovação da anuidade CREA</li>
            </ol>
            `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    fifth_item: {
      title: `Condições`,
      description: `
            <ul class='ul-main'>
                <li>Acesso restrito a 1 licença grátis no primeiro período de 1 ano;</li>
                <li>Suporte exclusivamente pela plataforma, via chat;</li>
                <li>Necessário ao menos um acesso mensal;</li>
                <li>Necessário estar certificado;</li>
                <li>Após o 1º ano o associado receberá o contato do especialista para a contratação do Prevision, caso não seja feita a contratação a parceria será encerrada;</li>
                <li>Disponibilização de até 60 bases do Prevision por ano (até 5 bases por mês) para esta parceria;</li>
                <li>O benefício dá direito a 1 licença. Para licenças adicionais, considerar desconto do segundo ano.</li>
            </ul>
            `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    sixth_item: {
      title: ``,
      description: ``,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    seventh_item: {
      title: `Como me inscrever`,
      description: `
            <ol>
            <li>Registrar seus dados através do formulário.</li>
            <li>Aguardar e-mail com as instruções de liberação dos benefícios.</li>
            </ol>`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "Fazer inscrição",
      form: (
        <Form_ferramenta
          title={"Prevision"}
          input_email={true}
          input_contato={true}
          input_razaosocial={true}
          input_registro={true}
          input_cpf={true}
          input_observacoes={true}
          emailEmpresa={"contato@prevision.com.br"}
          emailCREA={"ferramentasdigitais@crea-sc.org.br"}
        />
      ),
    },
  },

  /* Reune */
  {
    banner: `/banners/ferramentas/reune/reune`,
    title: `Reune`,
    target: ["Para Entidades de Classe"],
    description: `<strong>Software de Gestão de Eventos e Reuniões:</strong> A Reune é uma plataforma que organiza todos os eventos e reuniões, permitindo uma organização da agenda da associação em uma só tela.`,
    video: `/videos/Reune.mp4`,

    first_item: {
      title: "Software de Gestão de Eventos e Reuniões",
      description: `A Reune é uma plataforma que organiza todos os eventos e reuniões, permitindo uma organização da agenda da associação em uma só tela. Também faz a gestão de grupos e subgrupos, configurando acessos conforme necessário.`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    second_item: {
      title: `Principais funcionalidades`,
      description: `
              <ul class='ul-main'>
                  <li>
                    Gestão eventos com bilhetagem
                  </li>
                  <li>
                    Gestão de Reuniões com Atas e checkins                </li>
                  <li>
                    Cadastro Membros
                  </li>
                  <li>
                    Listas amarelas das empresas dos associados                </li>
                  <li>
                    Gestão de Grupo e Subgrupo
                  </li>
                  <li>
                    Gestão de Tarefas em formato Kanban                </li>
                  <li>
                    Gestão salas
                  </li>
              </ul>
              `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "",
      form: "",
    },

    third_item: {
      title: `Para quem se destina`,
      description: `Destinado para empresas do terceiro setor, sem fins lucrativos que exercem atividades de interesse social setor, Associações, Sindicatos, Fundações e organizações Religiosas.`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "",
      form: "",
    },

    fourth_item: {
      title: `Benefícios via CREA`,
      description: `
              <ol class="list-decimal">
                <li>Opção 1: Sem uso de eventos pagos: 40% desconto em todos os planos</li>
                <ol class="list-[lower-alpha]">
                <li>Até 50 associados: R$ 129,00 - 40% = R$ 77,40</li>
                  <li>Até 500 associados: R$ 199,00 - 40% = R$ 119,40</li>
                  <li>Até 2000 associados: R$ 399,00 - 50% = R$ 239,40</li>
                </ol>
                <li>Opção 2: Caso use os eventos pagos, com consumo mensal, não precisa pagar mensalidade.</li>
              </ol>
              `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    fifth_item: {
      title: `Como me inscrever`,
      description: `
              <ol>
              <li>Registrar seus dados através do formulário.</li>
              <li>Aguardar e-mail com as instruções de liberação dos benefícios.</li>
              </ol>`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "Fazer inscrição",
      form: (
        <Form_ferramenta
          title={"Reune"}
          input_email={true}
          input_contato={true}
          input_razaosocial={true}
          input_registro={true}
          input_cpf={true}
          input_observacoes={true}
          emailEmpresa={"ismarmarquardt@gmail.com"}
          emailCREA={"ferramentasdigitais@crea-sc.org.br"}
        />
      ),
    },
  },

  /* GO Gestor Obras */
  {
    banner: `/banners/ferramentas/siengego/siengego`,
    title: `GO Gestor Obras`,
    target: ["Para profissionais", "Para empresas"],
    description: `<strong>O software para gestão completa das obras:</strong> organize suas finanças, orçamentos e controle os prazos dentro e fora da obra. Com o Sienge Go! você garante uma gestão eficiente e realista. Acabe com problemas de planejamento e gastos imprevistos.`,
    video: `/videos/Sienge_Go.mp4`,

    first_item: {
      title: "O software para gestão completa das obras",
      description: `Organize suas finanças, orçamentos e controle os prazos dentro e fora da obra. Com o GO Gestor Obras você garante uma gestão eficiente e realista. Acabe com problemas de planejamento e gastos imprevistos.
            <br><br>
            Além de oferecer 3 módulos integrados de Financeiro, Compras e Engenharia, o ERP ainda traz um dashboard completo com visualização dinâmica e simplificada das informações mais relevantes para a tomada de decisão diária dos gestores.
            `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    second_item: {
      title: `Módulos`,
      description: `
            <ul class='ul-main'>
                <li>Financeiro: acesso e edição rápidos de todos os parâmetros que envolvem transações financeiras na construtora. Tudo separado por empresa e obra!
                </li>
                <li>Compras: analisa seus pedidos e avisa em poucos segundos se você está comprando um insumo por um preço mais alto do que já pagou.
                </li>
                <li>Engenharia: aproveite a Tabela Padrão de Insumos e Composições e a integração com a SINAPI, com milhares de itens cadastrados.</li>
            </ul>
            `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "Ver detalhes",
      link: "https://gestor-obras.com/",
      button_form: "",
      form: "",
    },

    third_item: {
      title: `Para quem se destina`,
      description: `Os benefícios apresentados a seguir são destinados para pessoa física e jurídica.`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "",
      form: "",
    },

    fourth_item: {
      title: `Benefícios`,
      description: `
            <ol class="list-decimal">
            <li>Primeiro ano de cadastro na plataforma</li>
                <ul>
                    <li>De <s>399,00</s> por 0,00 (acesso gratuito);</li>
                    <li>1.159,00 (valor de implantação);</li>
                        <ul>
                            <li>Indicação de 1 empresa e a implantação será gratuita.</li>
                        </ul>
                </ul>
            <li>Segundo ano (renovação)*</li>
                <ul>
                    <li>Desconto de 50% na mensalidade do valor vigente (mediante contrato assinado).</li>
                </ul>
            <li>Terceiro ano (renovação)*</li>
                <ul>
                    <li>Indicação de 2 empresas terá também 20% de desconto;</li>
                    <li>Indicação de 3 ou mais empresas, 30% de desconto;</li>
                    <li>Sem desconto na mensalidade, caso não tenha feito indicação de empresas no momento de adesão ao Go.</li>
                </ul>
            </ol>
            `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    fifth_item: {
      title: `Condições`,
      description: `
            <ul class='ul-main'>
                <li>É necessário ao menos um acesso mensal do associado no Sienge Go para manter a base ativa;</li>
                <li>É necessário passar pelo processo de implantação de até 3 horas (a implantação é no modelo remoto);</li>
                <li>Após o 1º ano o associado receberá o contato do especialista para a contratação do Sienge Go, caso não seja feita a contratação a parceria será encerrada;</li>
                <li>Necessário estar certificado;</li>
                <li>Após o 1º ano o associado receberá o contato do especialista para a contratação do Prevision, caso não seja feita a contratação a parceria será encerrada;</li>
                <li>Não será necessário CNPJ para acesso do 1º ano, a partir do 2º é necessário para assinatura do contrato;</li>
                <li>O benefício será concedido ao associado, não podendo ser utilizado para uma empresa terceira;</li>
                <li>Os descontos oferecidos por indicação precisam estar dentro dos critérios:</li>
                    <ul>
                        <li>As indicações precisam ser feitas até a adesão ao Sienge Go, ou seja, antes da base ser liberada. Após este período o benefício de indicação não é válido;</li>
                        <li>A empresa indicada precisa ter um CNPJ válido e ativo, não sendo aceito MEI;</li>
                        <li>A empresa indicada precisa estar dentro do CNAE de construção civil.</li>
                    </ul>
            </ul>
            `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    sixth_item: {
      title: ``,
      description: ``,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    seventh_item: {
      title: `Como me inscrever`,
      description: `
            <ol>
            <li>Registrar seus dados através do formulário.</li>
            <li>Aguardar e-mail com as instruções de liberação dos benefícios.</li>
            </ol>`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "Fazer inscrição",
      form: (
        <Form_ferramenta
          title={"Prevision"}
          input_email={true}
          input_contato={true}
          input_razaosocial={true}
          input_registro={true}
          input_cpf={true}
          input_empresas={true}
          input_observacoes={true}
          emailEmpresa={
            "relacionamentogestorobras@softplan.com.br; prevendassiengego@softplan.com.br"
          }
          emailCREA={"ferramentasdigitais@crea-sc.org.br"}
        />
      ),
    },
  },

  /* Castor WEB */
  {
    banner: `/banners/ferramentas/castor/castor`,
    title: `Castor`,
    target: ["Para empresas"],
    description: `<strong>Software de gestão para Associações e Sindicatos:</strong> solução inovadora para melhor gestão de entidades de classe. Uma ferramenta que otimiza
    todos os processos dentro da instituição, agilizando as atividades diárias e gerando informações precisas e
    integradas.`,
    video: `/videos/castor.mp4`,

    first_item: {
      title: "Software de gestão para Associações e Sindicatos",
      description: `O CASTOR é uma plataforma 100% web que dispensa altos investimentos com instalação, compra de outros softwares e equipamentos. Possui custo reduzido, automatiza todos os processos, proporcionando economia de mão de obra.      
            <br><br>
            Sistema leve e ágil, infraestrutura de ponta, com eficientes processos de segurança, otimização, backup e atualizações feitas diretamente no servidor. Com mais de 15 anos de experiência no mercado, atende entidades de classe em todos os estados do Brasil. 
            `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    second_item: {
      title: `Principais funcionalidades`,
      description: `
            <ul class='ul-main'>
                <li>
                  Associado - Módulo de controle de dados cadastrais;
                </li>
                <li>
                  Convênio - Módulo de controle de planos, mensalidades e benefícios;
                </li>
                <li>
                  Financeiro - Módulo de controle de contas, receitas, despesas e arquivos;
                </li>
                <li>
                  Integração bancária - Módulo de boleto, PIX, cartão de crédito e débito em conta;
                </li>
                <li>
                  Comunicação - Módulo para envio de documentos, personalização e emails;
                </li>
                <li>
                  Segurança - Módulo para controle de acesso, com níveis de permissão;
                </li>
                <li>
                  Área do associado - Módulo para consultar de extratos, dados e documentos;
                </li>
                <li>
                  Relatórios - Customizados nos demais módulos;
                </li>
            </ul>
            `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "",
      form: "",
    },

    third_item: {
      title: `Para quem se destina`,
      description: `Destinado para empresas do terceiro setor, sem fins lucrativos que exercem atividades de interesse social setor, Associações, Sindicatos, Fundações e organizações Religiosas.`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "",
      form: "",
    },

    fourth_item: {
      title: `Benefícios via CREA`,
      description: `
            <ol class="list-decimal">
              <li>Plano ENTERPRISE, com acesso a todos os módulos;</li>
              <li>Assinatura mensal, contrato sem prazo de permanência ou fidelidade;</li>
              <li>Implantação e treinamento (isentos*);</li>
              <li>Atendimento personalizado (consultor*);</li>
              <li>Tabela de desconto, conforme quantidade de associados;</li>
            </ol>
            <span style='font-size: 12px;'>(* Serviço prestado virtualmente via chat, e-mail ou qualquer outro canal de comunicação digital).<span>
            `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    fifth_item: {
      title: `Condições de desconto, mensalidade CASTORWEB`,
      description: `
            <ul class='ul-main'>
                <li>65% de desconto até 100 associados, de R$ 550,00/mês por R$ 192,50/mês**;</li>
                <li>55% de desconto de 101 a 200 associados, de R$ 550,00/mês por R$ 247,50/mês**;</li>
                <li>45% de desconto de 201 a 300 associados, de R$ 550,00/mês por R$ 302,50/mês**;</li>
                <li>35% de desconto de 301 a 500 associados, de R$ 550,00/mês por R$ 357,50/mês**;</li>
                <li>20% de desconto de 501 a 1000 associados, de R$ 550,00/mês por R$ 440,00/mês**;</li>
                <li>A partir de 1001 associados, mensalidade a negociar.</li>
                <span style='font-size: 12px;'>(** Com integração bancária própria do CASTOR, sem customizações e novas funcionalidades)</span>
            </ul>
            `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    sixth_item: {
      title: `Site institucional SaaS`,
      description: `
      Todos os sites possuirão:
      <ul class='ul-main'>
        <li>Página HOME com estrutura padrão: menu, carrossel de banners, seção resumo Quem Somos, seção carrossel Convênios, rodapé com endereços e contatos;</li>
        <li>Seção para “associar-se”;</li>
        <li>Link para WhatsApp ou direcionamento;</li>
        <li>Botão direcionando para área do associado;</li>
        <li>Página Quem Somos com banner e texto; </li>
        <li>Página Convênios com lista de todos os convênios; </li>
        <li>Gerenciador de conteúdo para alterar banners, textos, imagens, cadastrar/editar convênios, editar dados de contato e editar links dos botões; * </li>
        <li>Hospedagem; </li>
        </ul>
      <span style='font-size: 12px;'>(* O conteúdo do site, texto, e dados dos convênios deverão ser fornecidos pela entidade contratante)</span>
        `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    seventh_item: {
      title: `Condições de pagamento por recorrência`,
      description: `
      <ul class='ul-main'>
        <li>Para cada site fechado na parceria com o CASTORWEB, os valores irão variar de acordo com o meio de pagamento e recorrência; ** </li>
        <li>Pagamento no cartão de crédito no primeiro ano: 12 x R$ 109,90 </li>
        <li>Renovação após 12 meses, pagamento no boleto: R$ 199,90/mês. </li>
      </ul>
      <span style='font-size: 12px;'>(** A contração do Site não está atrelada a contratação do sistema, podendo a entidade aderir conforme sua necessidade)</span>
      `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "#",
      button_form: "",
      form: "",
    },

    eigth_item: {
      title: `Marketing digital e redes sociais`,
      description: `
        As redes sociais serão analisadas caso a caso, pois envolvem muita criação de artes e conteúdo. *** <br />
        <span style='font-size: 12px;'>(***Orçamento individualizado conforme demanda de cada entidade)</span>
        `,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "",
      form: "",
    },

    ninth_item: {
      title: `Como me inscrever`,
      description: `
            <ol>
            <li>Registrar seus dados através do formulário.</li>
            <li>Aguardar e-mail com as instruções de liberação dos benefícios.</li>
            </ol>`,
      last_description: ``,
      partners: [],
      partners_description: ``,
      button_link: "",
      link: "",
      button_form: "Fazer inscrição",
      form: (
        <Form_ferramenta
          title={"Castor"}
          input_email={true}
          input_contato={true}
          input_razaosocial={true}
          input_registro={true}
          input_cpf={true}
          input_observacoes={true}
          emailEmpresa={
            "rodrigo-gama@castorweb.com.br; comercial@castorweb.com.br"
          }
          emailCREA={"ferramentasdigitais@crea-sc.org.br"}
        />
      ),
    },
  },
];
