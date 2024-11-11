import Link from "next/link";
import Text_head_3 from "./ui/components/text/text-head-3";
import Text_display_3 from "./ui/components/text/text-display-3";

export default function GuiaEvento() {
  return (
    <>
      <section className="md:min-h-[80vh] flex flex-col items-center justify-center">
        <img src={"elements/Imagem construção.svg"} className="rounded-md" />
        <Text_display_3 className={"mb-10 text-center"}>
        A página que você está procurando não existe ou foi removida.
        </Text_display_3>
        <Text_head_3>Mas não se preocupe! Você pode voltar para a nossa <Link href={'/'}>página inicial</Link> e continuar navegando.</Text_head_3>
      </section>
    </>
  );
}
