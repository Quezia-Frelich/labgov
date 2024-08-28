"use client"


import { useInView } from 'react-intersection-observer';
import Section_welcome from './ui/sections/section-welcome';

export default function Home() {

  const { ref, inView, entry } = useInView();

  return (
    <>
    <Section_welcome />
    </>
  );
}
