'use client'

import { useState } from "react";
import Text_head_3 from "../ui/components/text/text-head-3";
import Section_button_nav from "../ui/sections/guia-evento/section-button-nav";
import Section_description from "../ui/sections/guia-evento/section-description";
import Section_hero from "../ui/sections/guia-evento/section-hero";
import Section_schedule from "../ui/sections/guia-evento/section-schedule";

export default function GuiaEvento() {
  const [activeSection, setActiveSection] = useState(1)
  return (
    <>
      <Section_hero/>
      <Section_description/>
      <Section_button_nav />
      <Section_schedule/>
    </>
  );
}
