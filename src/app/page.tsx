"use client";

import dynamic from "next/dynamic";
import { DATA } from "@/data/resume";
import Work from "@/components/snp/Work";
import About from "@/components/snp/About";
import Contact from "@/components/snp/Contact";

import Header from "@/components/snp/Header";

const Hero = dynamic(() => import("@/components/snp/Hero"), { ssr: false });

export default function Page() {
  return (
    <main className="min-h-screen bg-[#ece3cf] text-[#26211a] selection:bg-[#26211a] selection:text-[#ece3cf]">
      <Header />
      <div className="fixed inset-0 z-50 pointer-events-none bg-noise opacity-[0.03]" />

      <div id="hero">
        <Hero data={DATA} />
      </div>
      <div id="work">
        <Work data={DATA} />
      </div>
      <div id="about">
        <About data={DATA} />
      </div>
      <div id="contact">
        <Contact data={DATA} />
      </div>
    </main>
  );
}
