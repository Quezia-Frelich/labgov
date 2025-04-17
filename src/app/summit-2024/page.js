'use client';

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Section_banner from "../ui/sections/summit-2024/section-banner";
import Section_button_nav from "../ui/sections/summit-2024/section-button-nav";
import Section_about from "../ui/sections/summit-2024/section-about";
import Section_location from "../ui/sections/summit-2024/section-location";
import Section_numbers from "../ui/sections/summit-2024/section-numbers";
import Section_palestrantes from "../ui/sections/summit-2024/section-palestrantes";
import Section_reviews from "../ui/sections/summit-2024/section-reviews";
import Section_brands from "../ui/sections/summit-2024/section-brands";
import Section_schedule from "../ui/sections/summit-2024/section-schedule";
import Section_sponsors from "../ui/sections/summit-2024/section-sponsors";

export default function Summit_2024() {
  const [activeSection, setActiveSection] = useState(1);

  const { ref: sectionOneRef, inView: sectionOneInView } = useInView({ threshold: 0, rootMargin: "-50% 0px -50% 0px" });
  const { ref: sectionTwoRef, inView: sectionTwoInView } = useInView({ threshold: 0, rootMargin: "-50% 0px -50% 0px" });
  const { ref: sectionThreeRef, inView: sectionThreeInView } = useInView({ threshold: 0, rootMargin: "-50% 0px -50% 0px" });
  const { ref: sectionFourRef, inView: sectionFourInView } = useInView({ threshold: 0, rootMargin: "-50% 0px -50% 0px" });
  const { ref: sectionFiveRef, inView: sectionFiveInView } = useInView({ threshold: 0, rootMargin: "-50% 0px -50% 0px" });
  const { ref: sectionSixRef, inView: sectionSixInView } = useInView({ threshold: 0, rootMargin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (sectionOneInView) {
      setActiveSection(1);
    } else if (sectionTwoInView) {
      setActiveSection(2);
    } else if (sectionThreeInView) {
      setActiveSection(3);
    } else if (sectionFourInView) {
      setActiveSection(4);
    } else if (sectionFiveInView) {
      setActiveSection(5);
    } else if (sectionSixInView) {
      setActiveSection(6);
    }
  }, [sectionOneInView, sectionTwoInView, sectionThreeInView, sectionFourInView, sectionFiveInView, sectionSixInView]);

  return (
    <>
      <Section_banner/>

      <Section_button_nav activeSection={activeSection} /> {/* <-- Movido pra logo abaixo do banner */}
      
      <Section_about/>

      <section ref={sectionOneRef} id="galeria" className="scroll-mt-32">
        <Section_numbers/>
      </section>
    
      <Section_location/>

      <section ref={sectionTwoRef} id="numeros" className="scroll-mt-32">
      <Section_schedule/>
      </section>

      <section ref={sectionThreeRef} id="palestrantes" className="scroll-mt-32">
      <Section_palestrantes/>
      </section>

      <section ref={sectionFourRef} id="reviews" className="scroll-mt-32">
      <Section_reviews/>
      </section>

      <section ref={sectionFiveRef} id="programacao" className="scroll-mt-32">
      <Section_brands/>
      </section>

      <Section_sponsors />      
    </>
  );
}