'use client';

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Section_button_nav from "../ui/sections/guia-evento/section-button-nav";
import Section_description from "../ui/sections/guia-evento/section-description";
import Section_hero from "../ui/sections/guia-evento/section-hero";
import Section_schedule from "../ui/sections/guia-evento/section-schedule";
import Section_local from "../ui/sections/guia-evento/section-local";
import Section_tips from "../ui/sections/guia-evento/section-tips";
import Section_restaurant from "../ui/sections/guia-evento/section-restaurant";
import Section_brands from "../ui/sections/guia-evento/section-brands";

export default function GuiaEvento() {
  const [activeSection, setActiveSection] = useState(1);

  // Configuración de los observadores para cada sección
  const { ref: sectionOneRef, inView: sectionOneInView } = useInView({ threshold: 0, rootMargin: "-50% 0px -50% 0px" });
  const { ref: sectionTwoRef, inView: sectionTwoInView } = useInView({ threshold: 0, rootMargin: "-50% 0px -50% 0px" });
  const { ref: sectionThreeRef, inView: sectionThreeInView } = useInView({ threshold: 0, rootMargin: "-50% 0px -50% 0px" });
  const { ref: sectionFourtRef, inView: sectionFourtInView } = useInView({ threshold: 0, rootMargin: "-50% 0px -50% 0px" });
  const { ref: sectionFiveRef, inView: sectionFiveInView } = useInView({ threshold: 0, rootMargin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (sectionOneInView) {
      setActiveSection(1);
    } else if (sectionTwoInView) {
      setActiveSection(2);
    } else if (sectionThreeInView) {
      setActiveSection(3);
    } else if (sectionFourtInView) {
      setActiveSection(4);
    } else if (sectionFiveInView) {
      setActiveSection(5);
    }
  }, [sectionOneInView, sectionTwoInView, sectionThreeInView, sectionFourtInView, sectionFiveInView]);

  return (
    <>
      <Section_hero />
      <Section_description />
      <Section_button_nav activeSection={activeSection} />
      
      <section ref={sectionOneRef} id="macro" className="scroll-mt-32">
        <Section_schedule />
      </section>
      
      <section ref={sectionTwoRef} id="localDoEvento" className="scroll-mt-32">
        <Section_local />
      </section>
      
      <section ref={sectionThreeRef} id="restaurantes" className="scroll-mt-32">
        <Section_restaurant />
      </section>
      
      <section ref={sectionFourtRef} id="dicas" className="scroll-mt-32">
        <Section_tips />
      </section>

      <section ref={sectionFiveRef} id="feiraTecnológica" className="scroll-mt-32">
        <Section_brands />
      </section>
    </>
  );
}
