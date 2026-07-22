"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
};

export default function About({ data }: { data: any }) {
    const skills: string[] = [
        ...data.skills,
        ...data.dataengineering.filter((s: string) => !data.skills.includes(s)),
    ];

    return (
        <section className="relative z-20 py-28 px-6 border-t border-black/10">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
                    {/* Left: heading + portrait */}
                    <div className="md:col-span-2">
                        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
                            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#9c3b2e]">
                                02 — About
                            </p>
                            <h2 className="font-display text-5xl md:text-7xl tracking-tight mb-8 text-[#26211a]">
                                Behind
                                <br />
                                <span className="italic">the work</span>
                            </h2>
                            <div className="relative w-56 md:w-full max-w-xs overflow-hidden rounded-2xl border border-black/10 shadow-lg shadow-black/10">
                                <Image
                                    src={data.avatarUrl}
                                    alt={data.name}
                                    width={400}
                                    height={480}
                                    className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <p className="mt-4 font-mono text-xs text-[#8a8070]">
                                {data.location}
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: story, skills, journey */}
                    <div className="md:col-span-3 space-y-16">
                        <motion.p
                            {...fadeUp}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg md:text-xl text-[#3a3227] leading-relaxed"
                        >
                            {data.summary}
                        </motion.p>

                        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
                            <h3 className="font-display text-2xl mb-5 text-[#26211a]">
                                Toolbox
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-black/10 bg-white/40 px-3.5 py-1.5 text-sm text-[#5b5344] transition-colors hover:border-[#9c3b2e]/50 hover:bg-[#9c3b2e]/10 hover:text-[#26211a]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <div>
                            <motion.h3
                                {...fadeUp}
                                transition={{ duration: 0.6 }}
                                className="font-display text-2xl mb-8 text-[#26211a]"
                            >
                                Journey
                            </motion.h3>
                            <div className="space-y-12">
                                {data.work.map((job: any, index: number) => (
                                    <motion.div
                                        key={index}
                                        {...fadeUp}
                                        transition={{ duration: 0.6, delay: index * 0.05 }}
                                        className="border-l border-black/15 pl-7 relative"
                                    >
                                        <div className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-[#9c3b2e] ring-4 ring-[#9c3b2e]/15" />
                                        <h4 className="font-display text-xl text-[#26211a]">
                                            {job.company}
                                        </h4>
                                        <p className="mb-3 text-sm text-[#9c3b2e]">
                                            {job.title} · {job.start} — {job.end}
                                        </p>
                                        <ul className="list-disc space-y-1.5 pl-4 text-[#5b5344] text-sm leading-relaxed marker:text-[#9c3b2e]/50">
                                            {(Array.isArray(job.description)
                                                ? job.description
                                                : [job.description]
                                            ).map((line: string, i: number) => (
                                                <li key={i}>{line}</li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
