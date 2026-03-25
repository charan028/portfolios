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
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Header />
      <div className="fixed inset-0 z-50 pointer-events-none mix-blend-difference">
        <div className="bg-noise absolute inset-0 opacity-[0.03]"></div>
      </div>

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
