import Section_about from "../ui/sections/summit-2023/section-about";
import Section_banner from "../ui/sections/summit-2023/section-banner";
import Section_galery from "../ui/sections/summit-2023/section-galery";
import Section_numbers from "../ui/sections/summit-2023/section-numbers";
import Section_palestrantes from "../ui/sections/summit-2023/section-palestrantes";
import Section_reviews from "../ui/sections/summit-2023/section-reviews";
import Section_schedule from "../ui/sections/summit-2023/section-schedule";
import Section_sponsors from "../ui/sections/summit-2023/section-sponsors";

export default function Summit_2023 ( {} ) {
  return (
    <>
      <Section_banner />
      <Section_about />
      <Section_galery />
      <Section_numbers />
      <Section_palestrantes />
      <Section_schedule />
      <Section_reviews />
      <Section_sponsors />
    </>
  );
}