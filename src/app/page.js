"use client";

import Section_welcome from "./ui/sections/home/section-welcome";
import Section_cards from "./ui/sections/home/section-cards";
import Section_numbers from "./ui/sections/home/section-numbers";
import Section_location from "./ui/sections/global/section-location";
import Section_cta from "./ui/sections/global/section-cta";
import Section_sponsors from "./ui/sections/global/section-sponsors";
import Section_programs from "./ui/sections/home/section-programs";
import Section_speakers from "./ui/sections/home/section-speakers";

export default function Home() {
  return (
    <>
      <Section_welcome />
      <Section_cards/>
      <Section_speakers />
      <Section_numbers />
      <Section_location showMap={true} />
      <Section_cta /> */
      <Section_sponsors />
      <Section_programs />
    </>
  );
}
