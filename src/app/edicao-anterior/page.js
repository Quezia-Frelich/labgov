'use client';

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Section_button_nav from "../ui/sections/edicao-anterior/section-button-nav";
import Section_description from "../ui/sections/edicao-anterior/section-description";
import Section_sponsors from "../ui/sections/edicao-anterior/section-sponsors";
import Section_support from "../ui/sections/edicao-anterior/section-support";
import Section_schedule from "../ui/sections/edicao-anterior/section-schedule";

export default function EdicaoAnterior() {
  const [activeSection, setActiveSection] = useState(1);

  const { ref: sectionOneRef, inView: sectionOneInView } = useInView({
    threshold: 0,
    rootMargin: "-50% 0px -50% 0px",
  });

  const { ref: sectionTwoRef, inView: sectionTwoInView } = useInView({
    threshold: 0,
    rootMargin: "-50% 0px -50% 0px",
  });

  const { ref: sectionThreeRef, inView: sectionThreeInView } = useInView({
    threshold: 0,
    rootMargin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    if (sectionOneInView) {
      setActiveSection(1);
    } else if (sectionTwoInView) {
      setActiveSection(2);
    } else if (sectionThreeInView) {
      setActiveSection(3);
    }
  }, [
    sectionOneInView,
    sectionTwoInView,
    sectionThreeInView,
  ]);

  return (
    <>
      <Section_description />

      <Section_button_nav activeSection={activeSection} />

      <section
        ref={sectionOneRef}
        id="patrocinadores"
        className="scroll-mt-32"
      >
        <Section_sponsors />
      </section>

      <section
        ref={sectionTwoRef}
        id="apoioInstitucional"
        className="scroll-mt-32"
      >
        <Section_support />
      </section>

      <section
        ref={sectionThreeRef}
        id="programacao"
        className="scroll-mt-32"
      >
        <Section_schedule />
      </section>
    </>
  );
}