"use client";

import Section_welcome from "./ui/sections/home/section-welcome";
import Section_numbers from "./ui/sections/home/section-description";
import Section_sponsors from "./ui/sections/home/section-sponsors";
import Section_support from "./ui/sections/home/section-support";
import Section_speakers from "./ui/sections/home/section-speakers";
import Section_schedule from "./ui/sections/home/section-schedule";


export default function Home() {
  return (
    <>
      <section id="inicio">
        <Section_welcome />
      </section>
      <Section_numbers />
      
      <section id="empresas">
        
      </section>
      <Section_support />
      <Section_speakers />
     
      <section id="progamacao">
        <Section_sponsors />
      </section>
 
    </>
  );
}
