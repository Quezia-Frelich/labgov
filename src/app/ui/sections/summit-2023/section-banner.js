import Card_benefit from "../../components/cards/card-benefit";
import Container from "../../components/container/container";
import Text_display_3 from "../../components/text/text-display-3";

export default function Section_banner ( {} ) {
  return (
    <>
      <img src="/banners/summit-2023.webp" className="hidden md:block" />
      <img src="/banners/summit-2023-responsive.webp" className="block md:hidden" />
    </>
  );
}