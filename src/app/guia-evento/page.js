'use client';

import { useState, useRef, useEffect } from "react";
import { useInView } from "framer-motion";
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

  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);
  const sectionFourtRef = useRef(null);
  const sectionFiveRef = useRef(null);

  const sectionOneInView = useInView(sectionOneRef, { threshold: 0, rootMargin: "0px 0px 0px 0px" });
  const sectionTwoInView = useInView(sectionTwoRef, { threshold: 0, rootMargin: "0px 0px 0px 0px" });
  const sectionThreeInView = useInView(sectionThreeRef, { threshold: 0, rootMargin: "0px 0px 0px 0px" });
  const sectionFourtInView = useInView(sectionFourtRef, { threshold: 0, rootMargin: "0px 0px 0px 0px" });
  const sectionFiveInView = useInView(sectionFiveRef, { threshold: 0, rootMargin: "0px 0px 0px 0px" });

  useEffect(() => {
    if (sectionOneInView) {
      setActiveSection(1);
    } else if (sectionTwoInView) {
      setActiveSection(2);
    }
     else if (sectionThreeInView) {
      setActiveSection(3);
    }
     else if (sectionFourtInView) {
      setActiveSection(4);
    }
     else if (sectionFiveInView) {
      setActiveSection(5);
    }
  }, [sectionOneInView, sectionTwoInView, sectionThreeInView, sectionFourtInView, sectionFiveInView]);

  return (
    <>
      <Section_hero />

      <Section_description />

      <Section_button_nav activeSection={activeSection} />
      
      <section ref={sectionOneRef} id="macro">
      <Section_schedule />
      </section>
      
      <section ref={sectionTwoRef} id="localDoEvento">
      <Section_local/>
      </section>
      
      <section ref={sectionThreeRef} id="restaurantes">
      <Section_restaurant/>
      </section>
      
      <section ref={sectionFourtRef} id="dicas">
      <Section_tips/>

      </section>
      <section ref={sectionFiveRef} id="feiraTecnológica">
      <Section_brands/>
      </section>
    </>
  );
}
