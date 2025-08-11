"use client";

import Section_welcome from "./ui/sections/home/section-welcome";
import Section_numbers from "./ui/sections/home/section-numbers";
import Section_location from "./ui/sections/global/section-location";
import Section_cta from "./ui/sections/global/section-cta";
import Section_sponsors from "./ui/sections/global/section-sponsors";
import Section_programs from "./ui/sections/home/section-programs";
import Section_speakers from "./ui/sections/home/section-speakers";
import Section_support from "./ui/sections/home/section-support";


export default function Home() {
  return (
    <>
      <section id="inicio">
        <Section_welcome />
      </section>
      <Section_numbers />
      
      <section id="empresas">
        <Section_speakers />
      </section>
      <Section_support />
     
      <section id="progamacao">
        <Section_sponsors />
      </section>
 
    </>
  );
}
