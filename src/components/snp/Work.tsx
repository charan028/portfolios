"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Work({ data }: { data: any }) {
    return (
        <section className="w-full py-28 px-6 relative z-10 border-t border-black/10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20"
                >
                    <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#9c3b2e]">
                        01 — Projects
                    </p>
                    <h2 className="font-display text-5xl md:text-7xl tracking-tight mb-5 text-[#26211a]">
                        Selected Work
                    </h2>
                    <p className="text-lg md:text-xl text-[#5b5344] max-w-2xl leading-relaxed">
                        Projects across AI, VR, and data engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.projects.map((project: any, index: number) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                        >
                            <Link
                                href={project.href}
                                target="_blank"
                                className="group block h-full relative overflow-hidden rounded-2xl bg-white/40 border border-black/10 hover:border-[#9c3b2e]/50 hover:bg-white/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500"
                            >
                                <div className="aspect-video w-full overflow-hidden bg-black/5 relative">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                        />
                                    ) : project.video ? (
                                        <video
                                            src={project.video}
                                            autoPlay
                                            loop
                                            muted
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-black/5 text-black/20">
                                            No Preview
                                        </div>
                                    )}
                                </div>

                                <div className="p-7 relative">
                                    <div className="flex justify-between items-start gap-4 mb-4">
                                        <h3 className="font-display flex items-center gap-2 text-2xl md:text-3xl text-[#26211a] group-hover:text-[#9c3b2e] transition-colors">
                                            {project.title}
                                            <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                                        </h3>
                                        <span className="shrink-0 text-[11px] font-mono text-[#8a8070] border border-black/15 px-2.5 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                                            {project.dates}
                                        </span>
                                    </div>
                                    <p className="text-[#5b5344] mb-6 line-clamp-3 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 4).map((tech: string) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-[#5b5344] transition-colors group-hover:border-black/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-[#8a8070]">
                                                +{project.technologies.length - 4}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
