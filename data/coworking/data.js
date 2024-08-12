import Form_coworking from "@/app/ui/components/forms/form_coworking";
import Modal_link from "@/app/ui/components/modal/modal_link.js";
import Table_coworking from "@/app/ui/components/tables/table_coworking";

export const coworking = [
  /* Coworking Reference */
  {
    banner: [
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Coworking Reference/01 - Coworking Reference.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Coworking Reference/02 - Coworking Reference.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Coworking Reference/03 - Coworking Reference.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Coworking Reference/04 - Coworking Reference.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Coworking Reference/05 - Coworking Reference.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Coworking Reference/06 - Coworking Reference.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Coworking Reference/07 - Coworking Reference.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Coworking Reference/08 - Coworking Reference.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Coworking Reference/09 - Coworking Reference.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
    ],
    title: "Coworking Reference",
    description:
      "Ambiente colaborativo com sala de reunião e estações de trabalho. Possui copa equipada e recepção para clientes.",
    schedule: "8h - 18h segunda à sexta-feira",
    address: "Rua João Pedro Rodrigues, 51 - Centro, Caçador - SC",
    location: "Caçador - SC",
    phone: "(49) 3565-0010",
    price:
      "100% de desconto para estação de trabalho e 20% de desconto para sala de reunião.",
    limit: "9 estações de trabalho",
    form: <Form_coworking title="Coworking Reference" />,
    observation: "*Limitado à 2 solicitações semanais por profissional",
  },

  /* Inspetoria de Chapecó */
  {
    banner: [
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Inspetoria Chapecó/1 Inspetoria Chapeco.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Inspetoria Chapecó/2 Inspetoria Chapeco.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Inspetoria Chapecó/3 Inspetoria Chapeco.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Inspetoria Chapecó/4 Inspetoria Chapeco.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
    ],
    title: "Inspetoria de Chapecó",
    description:
      "A Inspetoria de Chapecó possui uma sala de reunião que acomoda até 10 pessoas (sentadas), oferecendo um ambiente com ar condicionado e Wi-Fi.",
    schedule: "09h às 12h e das 13h30 às 17h",
    address: "Rua Nereu Ramos, 2440 D – Bairro Universitário, Chapecó/SC",
    location: "Chapecó – SC",
    phone: "(49) 3322-0177",
    price: "100% de desconto",
    limit: "10 pessoas",
    form: <Form_coworking title="Inspetoria de Chapecó" />,
    observation: "*Limitado à 2 solicitações semanais por profissional",
  },

  /* Inspetoria de Concórdia */
  {
    banner: [
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Inspetoria Concórdia/1 Inspetoria Concordia.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Inspetoria Concórdia/2 Inspetoria Concordia.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
    ],
    title: "Inspetoria de Concórdia",
    description:
      "A Inspetoria de Concórdia dispõe de uma sala de reuniões, ideal tanto para encontros colaborativos quanto para servir como estações de trabalho individuais. ",
    schedule: "09h às 12h e das 13h30 às 17h",
    address: "R. Benjamin Furlan, 234 – São Miguel, Concórdia/SC",
    location: "Concórdia – SC",
    phone: "(49) 3442-2047",
    price: "100% de desconto",
    limit: "10 pessoas",
    form: <Form_coworking title="Inspetoria de Concórdia" />,
    observation: "*Limitado à 2 solicitações semanais por profissional",
  },

  /* Inspetoria de Criciúma */
  {
    banner: [
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Inspetoria Criciúma/1 Inspetoria Criciuma.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Inspetoria Criciúma/2 Inspetoria Criciuma.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Inspetoria Criciúma/3 Inspetoria Criciuma.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
    ],
    title: "Inspetoria de Criciúma",
    description:
      "A Inspetoria de Criciúma possui uma sala de reunião que acomoda até 16 pessoas (sentadas), oferecendo um ambiente com ar condicionado e Wi-Fi.",
    schedule: "09h às 12h e das 13h30 às 17h",
    address: "Rua Thomé de Souza, nº 829 – Santa Bárbara, Criciúma/SC",
    location: "Criciúma – SC",
    phone: "(48) 3433-4777",
    price: "100% de desconto",
    limit: "16 pessoas",
    form: <Form_coworking title="Inspetoria de Criciúma" />,
    observation: "*Limitado à 2 solicitações semanais por profissional",
  },

  /* Caracóis e Caramujos - Campeche */
  // {
  //   banner:[
  //       {slide: <div style={{backgroundImage: `url("/banners/coworking/Caracóis e Caramujos - Campeche/1 Caracois e Caramujos.png")`}} className='rounded-t-lg bg-cover bg-center h-52 w-full'></div>},
  //       {slide: <div style={{backgroundImage: `url("/banners/coworking/Caracóis e Caramujos - Campeche/2 Caracois e Caramujos.jpg")`}} className='rounded-t-lg bg-cover bg-center h-52 w-full'></div>},
  //       {slide: <div style={{backgroundImage: `url("/banners/coworking/Caracóis e Caramujos - Campeche/3 Caracois e Caramujos.jpg")`}} className='rounded-t-lg bg-cover bg-center h-52 w-full'></div>},
  //       {slide: <div style={{backgroundImage: `url("/banners/coworking/Caracóis e Caramujos - Campeche/4 Caracois e Caramujos.jpg")`}} className='rounded-t-lg bg-cover bg-center h-52 w-full'></div>},
  //     ],
  //   title:"Caracóis e Caramujos - Campeche",
  //   description:"Contamos com mais de 50 posições de trabalho, cabine de call, sala de reunião, salas privativas, copa e café quentinho.",
  //   schedule:"8h-21h de 2° à 6° feira, das 10h-21h nos sábados e das 14h-20h nos domingos",
  //   address:"SC-405, 4397 - Oka, Florianópolis - SC, 88065-000",
  //   location: "Florianópolis – SC",
  //   phone:"(48) 99942-3181",
  //   price:"100% de desconto",
  //   limit:"Sem limitação",
  //   form:<Form_coworking title='Caracóis e Caramujos - Campeche'/>,
  //   observation: "*Limitado à 2 solicitações semanais por profissional",
  // },
  /* Cool2work - Centro */
  {
    banner: [
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Cool2work - Centro/1 cool2work centro.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Cool2work - Centro/2 cool2work centro.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Cool2work - Centro/3 cool2work centro.png")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
    ],
    title: "Cool2work - Centro",
    description:
      "11 salas privativas para equipes de 4 a 13 pessoas, 10 posições compartilhadas, uma sala de reunião para até 15 pessoas e uma arquibancada para eventos de até 100 pessoas.",
    schedule: "9h - 18h segunda à sexta-feira",
    address: "R. Felipe Schmidt, 835 - Centro, Florianópolis - SC",
    location: "Florianópolis – SC",
    phone: "(48) 98845-7400",
    price: "30% de desconto",
    limit: "Sem limitação",
    form: <Form_coworking title="Cool2work - Centro" />,
    observation: "*Limitado à 2 solicitações semanais por profissional",
  },

  /* Cool2work - Spotmarkt */
  {
    banner: [
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Cool2work - Spotmarkt/1 cool2work spotmarkt.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Cool2work - Spotmarkt/2 cool2work spotmarkt.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Cool2work - Spotmarkt/3 cool2work spotmarkt.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Cool2work - Spotmarkt/4 cool2work spotmarkt.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
    ],
    title: "Cool2work - Spotmarkt",
    description:
      "Oferecemos 7 salas privativas, uma sala de reunião para até 12 pessoas e 22 posições compartilhadas.",
    schedule: "9h - 18h segunda à sexta-feira",
    address:
      "R. João Pio Duarte Silva, 1630 - Córrego Grande, Florianópolis - SC",
    location: "Florianópolis – SC",
    phone: "(48) 98845-7400",
    price:
      "A 1ª diária de mesa compartilhada na semana é gratuita. A partir da 2ª diária na semana, ",
    modal: (
      <Modal_link
        textLink={"verificar valores aqui."}
        children={<Table_coworking />}
      />
    ),
    limit: "Sem limitação",
    form: <Form_coworking title="Cool2work - Spotmarkt" />,
    observation: "*Limitado à 2 solicitações semanais por profissional",
  },

  /* Inspetoria de Florianópolis */
  {
    banner: [
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Inspetoria Florianópolis/1 Inspetoria Florianopolis.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Inspetoria Florianópolis/2 Inspetoria Florianopolis.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Inspetoria Florianópolis/3 Inspetoria Florianopolis.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Inspetoria Florianópolis/4 Inspetoria Florianopolis.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
    ],
    title: "Inspetoria de Florianópolis",
    description:
      "A Inspetoria de Florianópolis possui uma sala de reunião que acomoda até 14 pessoas (sentadas), oferecendo um ambiente com ar condicionado e Wi-Fi.",
    schedule: "09h às 12h e das 13h30 às 17h",
    address: "Rua Dom Jaime Câmara, 248 – Centro, Florianópolis/SC",
    location: "Florianópolis – SC",
    phone: "(48) 3324-3027",
    price: "100% de desconto",
    limit: "14 pessoas",
    form: <Form_coworking title="Inspetoria de Florianópolis" />,
    observation: "*Limitado à 2 solicitações semanais por profissional",
  },

  /* Linklab Primavera - Florianópolis */
  {
    banner: [
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Linklab Primavera - Florianópolis/1 Linklab primavera.png")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Linklab Primavera - Florianópolis/2 Linklab primavera.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Linklab Primavera - Florianópolis/3 Linklab primavera.png")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Linklab Primavera - Florianópolis/4 Linklab primavera.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
    ],
    title: "Linklab Primavera - Florianópolis",
    description:
      "Ambiente colaborativo com sala de reunião e amplo espaço de coworking. Possui áreas de uso comum para reuniões informais, copa equipada e espaço para descanso.",
    schedule: "9h - 19h segunda à sexta-feira",
    address:
      "Rod. José Carlos Daux - SC 401, 4120 - km 4, sala 24. Bairro Saco Grande Florianópolis/SC",
    location: "Florianópolis – SC",
    phone: "(48) 2107-2720",
    price: "100% de desconto",
    limit: "7 pessoas",
    form: <Form_coworking title="Linklab Primavera - Florianópolis" />,
    observation: "*Limitado à 2 solicitações semanais por profissional",
  },

  /* Sede – Sala Engenharia Elétrica */
  {
    banner: [
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Sede - Sala Engenharia Elétrica/1 Sala Engenharia Eletrica.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Sede - Sala Engenharia Elétrica/2 Sala Engenharia Eletrica.png")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
    ],
    title: "Sede – Sala Engenharia Elétrica",
    description:
      "A sala de reunião oferece um ambiente inovador com equipamentos como TV e HDMI, câmera, microfone, ar condicionado e Wi-Fi.",
    schedule: "8h - 17:30 segunda à sexta",
    address: "Rodovia Admar Gonzaga, 2125 - Itacorubi, Florianópolis – SC",
    location: "Florianópolis – SC",
    phone: "(48) 3331-2000",
    price: "100% de desconto",
    limit: "12 pessoas",
    form: <Form_coworking title="CREA-SC - Sala Engenharia Elétrica" />,
    observation: "*Limitado à 2 solicitações semanais por profissional",
  },

  /* Sede - Sala Geologia Engenharia de Minas e Agrimensura */
  {
    banner: [
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Sede - Sala Geologia Engenharia de Minas e Agrimensura/1 Sala Geologia Engenharia de Minas e Agrimensura.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Sede - Sala Geologia Engenharia de Minas e Agrimensura/2 Sala Geologia Engenharia de Minas e Agrimensura.png")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
    ],
    title: "Sede - Sala Geologia, Engenharia de Minas e Agrimensura",
    description:
      "A sala oferece um ambiente inovador com equipamentos como TV e HDMI, câmera, microfone, ar condicionado e Wi-Fi.",
    schedule: "8h - 17:30 segunda à sexta",
    address: "Rodovia Admar Gonzaga, 2125 - Itacorubi, Florianópolis – SC",
    location: "Florianópolis – SC",
    phone: "(48) 3331-2000",
    price: "100% de desconto",
    limit: "10 pessoas",
    form: (
      <Form_coworking title="CREA-SC - Sala Geologia, Engenharia de Minas e Agrimensura" />
    ),
    observation: "*Limitado à 2 solicitações semanais por profissional",
  },

  /* Inspetoria de Jaraguá do Sul */
  /* {    
    banner:[
        {slide: <div style={{backgroundImage: `url("/banners/coworking/Inspetoria Jaraguá do Sul/1 Inspetoria Jaragua do Sul.jpeg")`}} className='rounded-t-lg bg-cover bg-center h-52 w-full'></div>},
        {slide: <div style={{backgroundImage: `url("/banners/coworking/Inspetoria Jaraguá do Sul/2 Inspetoria Jaragua do Sul.jpeg")`}} className='rounded-t-lg bg-cover bg-center h-52 w-full'></div>},
      ],
    title:"Inspetoria de Jaraguá do Sul",
    description:"A Inspetoria de Jaraguá do Sul possui uma sala de reunião que acomoda até XX pessoas(sentadas), oferecendo um ambiente com ar condicionado e Wi-Fi.",
    schedule:"08h às 13h",
    address:"Rua Felipe Schmidt, 190 – Centro,Jaraguá do Sul/SC",
    location: "Jaraguá do Sul – SC",
    phone:"(47) 3371-9922",
    price:"100% de desconto",
    limit:"XX pessoas",
    form:<Form_coworking title='Inspetoria de Jaraguá do Sul'/>,
    observation: "*Limitado à 2 solicitações semanais por profissional",
  }, */

  /* LinkLab Ágora - Joinville */
  {
    banner: [
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/LinkLab Ágora - Joinville/1 Linklab Agora.webp")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/LinkLab Ágora - Joinville/2 Linklab Agora.webp")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/LinkLab Ágora - Joinville/3 Linklab Agora.webp")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
    ],
    title: "LinkLab Ágora - Joinville",
    description:
      "Possui 275m² com salas de reunião, call rooms, copa, espaço para pitches e apresentações, além de espaço colaborativo para coworking.",
    schedule: "8h - 19h segunda à sexta-feira",
    address:
      "Rua Dona Francisca, nº 8300 - Ágora Hub, 1º andar, sala 213. Perini Business Park - Zona Industrial Norte, Joinville - SC",
    location: "Joinville – SC",
    phone: "(48) 2107-2747",
    price: "100% de desconto",
    limit: "Sem limitação",
    form: (
      <Form_coworking
        title="LinkLab Ágora - Joinville"
        advanceBookingDays="2"
      />
    ),
    observation: "*Limitado à 2 solicitações semanais por profissional",
  },

  /* Orion Park Tecnológico - Lages */
  {
    banner: [
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Orion Park Tecnológico - Lages/1 Orion Park.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Orion Park Tecnológico - Lages/2 Orion Park.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Orion Park Tecnológico - Lages/3 Orion Park.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Orion Park Tecnológico - Lages/4 Orion Park.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
    ],
    title: "Orion Park Tecnológico - Lages",
    description:
      "Oferecendo conforto, segurança, inspiração e compartilhamento de serviços e recursos. Possui salas de reunião, espaços para cursos e treinamentos e eventos e auditórios, além de espaço colaborativo para coworking.",
    schedule: "9h - 19h segunda à sexta-feira",
    address: "R. Heitor Villa Lobos, 525 - São Francisco, Lages - SC",
    location: "Lages – SC",
    phone: "(48) 2107-2747",
    price: "100% de desconto",
    limit: "Sem limitação",
    form: <Form_coworking title="Orion Park Tecnológico - Lages" />,
    observation: "*Limitado à 2 solicitações semanais por profissional",
  },

  /* Inspetoria de São Miguel D'Oeste */
  {
    banner: [
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Inspetoria São Miguel D'Oeste/1 Inspetoria Sao Miguel dOeste.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Inspetoria São Miguel D'Oeste/2 Inspetoria Sao Miguel dOeste.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Inspetoria São Miguel D'Oeste/3 Inspetoria Sao Miguel dOeste.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
    ],
    title: "Inspetoria de São Miguel D'Oeste",
    description:
      "A Inspetoria de São Miguel D'Oeste possui uma sala de reunião que acomoda até 12 pessoas (sentadas), oferecendo um ambiente com ar condicionado e Wi-Fi.",
    schedule: "09h às 12h e das 13h30 às 17h",
    address: "Avenida Salgado Filho, 901, Centro,São Miguel Do Oeste/SC",
    location: "São Miguel Do Oeste – SC",
    phone: "(49) 3622.0266  |  (49) 3621.1667",
    price: "100% de desconto",
    limit: "12 pessoas",
    form: <Form_coworking title="Inspetoria de São Miguel D'Oeste" />,
    observation: "*Limitado à 2 solicitações semanais por profissional",
  },
  /* Colmeia Coworking */
  {
    banner: [
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Colmeia coworking/1 Colmeia coworking.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Colmeia coworking/2 Colmeia coworking.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Colmeia coworking/3 Colmeia coworking.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Colmeia coworking/4 Colmeia coworking.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Colmeia coworking/5 Colmeia coworking.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Colmeia coworking/6 Colmeia coworking.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Colmeia coworking/7 Colmeia coworking.jpg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
    ],
    title: "Colmeia Coworking",
    description:
      "Ambiente de trabalho completo, com a opção do cuidado infantil para profissionais que necessitam trazer seus filhos. Possuímos sala compartilhada, de treinamentos e de reuniões. ",
    schedule:
      "8h às 12h e das 13h30 às 18h (até às 22h com agendamento prévio)",
    address: "Rua Antônio Hulse, 541 - Dehon - Tubarão/SC",
    location: "Tubarão – SC",
    phone: "(48) 3192-1882",
    price: "10% de desconto",
    limit: "2 pessoas",
    form: <Form_coworking title="Colmeia Coworking" />,
    observation: "*Limitado à 2 solicitações semanais por profissional",
  },

  /* Inspetoria de Videira */
  {
    banner: [
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Inspetoria Videira/1 Inspetoria Videira.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
      {
        slide: (
          <div
            style={{
              backgroundImage: `url("/banners/coworking/Inspetoria Videira/2 Inspetoria Videira.jpeg")`,
            }}
            className="h-52 w-full rounded-t-lg bg-cover bg-center"
          ></div>
        ),
      },
    ],
    title: "Inspetoria de Videira",
    description:
      "A Inspetoria de Videira possui uma sala de reunião que acomoda até 06 pessoas (sentadas) e 02 estações de trabalho.",
    schedule: "09h às 12h e das 13h30 às 17h",
    address: "R. Campos Novos, 8 - Matriz, Videira - SC, 89560-000",
    location: "Videira – SC",
    phone: "(49) 3566-0909",
    price: "100% de desconto",
    limit: "6 pessoas",
    form: <Form_coworking title="Inspetoria de Videira" />,
    observation: "*Limitado à 2 solicitações semanais por profissional",
  },
];
