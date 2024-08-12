import Title_description_icon from "@/app/ui/components/title/title_description_icon";
import Icon_chat from "@/app/ui/icons/direccionadores/chat";
import Icon_clipboard from "@/app/ui/icons/direccionadores/clipboard";
import Icon_people from "@/app/ui/icons/direccionadores/people";
import Icon_rocket from "@/app/ui/icons/direccionadores/rocket";


export const direccionadores =  [
    {slide: <Title_description_icon title={'Fomentar a cultura de inovação'} description={'Criar um ambiente propício para a criatividade e experimentação, encorajando a busca por por soluções inovadoras e eficientes.'} icon={<Icon_rocket />}/>},
    {slide: <Title_description_icon title={'Orientado por dados (data driven)'} description={'Desenvolver a cultura da tomada de decisões baseada em análise de dados e evidências.'} icon={<Icon_clipboard />}/>},
    {slide: <Title_description_icon title={'Centrado nas pessoas'} description={'Colocar as necessidades, experiências e perspectivas das pessoas no centro das decisões, estratégias e ações internas.'} icon={<Icon_people />}/>},
    {slide: <Title_description_icon title={`Promover conexões`} description={'Promover conexões entre os ecossistemas, estimulando a troca de conhecimento e boas práticas.'} icon={<Icon_chat />}/>},
]