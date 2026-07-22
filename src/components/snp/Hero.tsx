"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import StringsCanvas from "./StringsCanvas";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
};

export default function Hero({ data }: { data: any }) {
    const socials = Object.entries(data.contact.social).filter(
        ([key]) => key !== "email"
    );

    return (
        <section className="relative min-h-screen w-full overflow-hidden select-none">
            {/* String threads hanging from the roof/header */}
            {/* full-width curtain hanging from the beam line; fades out toward the bottom */}
            <StringsCanvas className="absolute inset-x-0 top-[84px] md:top-[92px] z-0 h-[70%] w-full opacity-70" />
            {/* paper fade so the headline zone stays readable */}
            <div className="absolute inset-x-0 bottom-0 h-[55%] z-[1] bg-gradient-to-t from-[#ece3cf] via-[#ece3cf]/70 to-transparent pointer-events-none" />

            {/* corner marks, like the reference's country cards */}
            <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-1/3 left-6 md:left-12 hidden lg:block max-w-[10rem] font-mono text-[10px] leading-relaxed tracking-[0.25em] text-[#8a8070] uppercase"
            >
                缘分 (Yuánfèn) · A destined meeting
            </motion.div>
            <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute top-1/3 right-6 md:right-12 hidden lg:block font-mono text-[10px] tracking-[0.25em] text-[#8a8070] uppercase text-right"
            >
                Portfolio · {new Date().getFullYear()}
            </motion.div>

            {/* Bottom composition */}
            <div className="absolute inset-x-0 bottom-0 z-10">
                <div className="mx-auto w-full max-w-6xl px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-10 items-end">
                    {/* Left: headline + CTAs */}
                    <div className="md:col-span-2">
                        <motion.div
                            {...fadeUp}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-black/15 bg-white/30 text-[#5b5344] text-xs font-mono tracking-widest backdrop-blur-xl"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9c3b2e] opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9c3b2e]" />
                            </span>
                            OPEN TO WORK · {data.location.toUpperCase()}
                        </motion.div>

                        <motion.h1
                            {...fadeUp}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-6xl sm:text-7xl md:text-8xl tracking-tight text-[#26211a] leading-[0.9]"
                        >
                            Sai Charan{" "}
                            <span className="italic text-[#26211a]/45">Merugu</span>
                        </motion.h1>

                        <motion.div
                            {...fadeUp}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mt-8 flex flex-wrap items-center gap-4"
                        >
                            <a
                                href="#work"
                                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#26211a] text-[#ece3cf] font-semibold text-sm hover:bg-[#3a3227] transition-colors"
                            >
                                View Work
                                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center px-6 py-3 rounded-full border border-black/20 text-[#26211a] font-semibold text-sm hover:bg-black/5 hover:border-black/40 transition-colors"
                            >
                                Get In Touch
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: caption + socials, like the reference's footnote */}
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.8, delay: 0.45 }}
                        className="md:justify-self-end md:text-right md:max-w-[16rem]"
                    >
                        <p className="font-mono text-xs leading-relaxed text-[#8a8070]">
                            AI &amp; UX engineer designing intelligent, human-centered
                            interfaces — LLM systems, data platforms, and immersive VR.
                        </p>
                        <div className="mt-5 flex md:justify-end items-center gap-5">
                            {socials.map(([key, value]: [string, any]) => (
                                <a
                                    key={key}
                                    href={value.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex items-center gap-1 text-sm text-[#8a8070] hover:text-[#26211a] transition-colors"
                                >
                                    {value.name ?? key}
                                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
