import Text_head_3 from "../ui/components/text/text-head-3";

export default function GuiaEvento() {
  return (
    <>
      <section className="md:min-h-[80vh] flex flex-col items-center justify-center">
        <img src={"elements/Imagem construção.svg"} className="rounded-md" />
        <Text_head_3 className={"mb-10 text-center	"}>
          Estamos construindo algo incrível para você.
          <br />
          Volte em breve para conferir nossas novidades!
        </Text_head_3>
      </section>
    </>
  );
}
