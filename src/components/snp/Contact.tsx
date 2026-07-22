"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Contact({ data }: { data: any }) {
    return (
        <section className="py-28 px-6 relative z-20 border-t border-black/10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#9c3b2e]">
                        03 — Contact
                    </p>
                    <h2 className="font-display text-5xl md:text-7xl tracking-tight mb-10 max-w-3xl text-[#26211a]">
                        Let&apos;s build something{" "}
                        <span className="italic text-[#26211a]/45">extraordinary.</span>
                    </h2>

                    <a
                        href={`mailto:${data.contact.email}`}
                        className="group inline-flex flex-wrap items-center gap-3 text-xl sm:text-2xl md:text-4xl font-display text-[#3a3227] hover:text-[#9c3b2e] transition-colors break-all"
                    >
                        {data.contact.email}
                        <ArrowUpRight className="w-6 h-6 md:w-9 md:h-9 text-[#9c3b2e] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>
                    <div className="mt-3 h-px w-full max-w-2xl bg-gradient-to-r from-[#9c3b2e]/60 to-transparent" />
                </motion.div>

                {/* Bottom footer */}
                <div className="mt-24 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[#8a8070] text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} {data.name}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {Object.entries(data.contact.social)
                            .filter(([key]) => key !== "email")
                            .map(([key, value]: [string, any]) => (
                                <Link
                                    key={key}
                                    href={value.url}
                                    target="_blank"
                                    className="hover:text-[#26211a] transition-colors"
                                >
                                    {value.name ?? key}
                                </Link>
                            ))}
                        <span className="font-mono text-xs text-[#8a8070]/70">
                            {data.location}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
