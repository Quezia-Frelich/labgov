'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../container/container";
import Image from "next/image";

import Icon_instagram from "../../icons/footer/Instagram";
import Icon_linkedin from "../../icons/footer/LinkedIn";
import Icon_youtube from "../../icons/footer/YouTube";
import Icon_phone from "../../icons/footer/phone";
import Icon_email from "../../icons/footer/email";
import Icon_facebook from "../../icons/footer/Facebook";
import Icon_twitter from "../../icons/footer/twitter";

export default function Footer() {
  const pathName = usePathname();
  return (
    <>
      {/* Section Contact */}
      <section className="py-20 md:py-20 flex items-center justify-center bg-black">
      <Container className="flex justify-center text-white">
        <Image
          src="/brand/logo-labgov-header.png"
          alt="Logo LabGov"
          width={160}
          height={60}
          className="h-auto"
        />
      </Container>
    </section>
    </>
  );
}
