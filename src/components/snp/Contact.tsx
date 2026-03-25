"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Contact({ data }: { data: any }) {
    return (
        <section className="bg-black text-white min-h-[60vh] py-24 px-4 relative z-20 border-t border-white/10 flex flex-col justify-between">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

                    {/* Left Column: Call to Action & Terminal */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold tracking-tighter mb-8"
                        >
                            Let's build something <br /> <span className="text-white/40">extraordinary.</span>
                        </motion.h2>

                        <div className="font-mono bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm max-w-md">
                            <div className="flex gap-2 mb-4 opacity-30">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="space-y-2 text-sm md:text-base">
                                <p className="text-white/60"># Send me a message</p>
                                <div className="flex items-center text-white">
                                    <span className="mr-2 text-green-400">-&gt;</span>
                                    <span className="mr-2 text-blue-400">~</span>
                                    <span className="mr-2 opacity-50">mail</span>
                                    <Link
                                        href={`mailto:${data.contact.email}`}
                                        className="hover:text-green-400 hover:underline transition-all"
                                    >
                                        {data.contact.email}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Navigation & Socials */}
                    <div className="grid grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest">Sitemap</h3>
                            <div className="flex flex-col space-y-4">
                                {["Home", "Work", "About"].map((item) => (
                                    <Link
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="text-2xl font-medium hover:text-white/50 transition-colors flex items-center group"
                                    >
                                        {item}
                                        <ArrowUpRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest">Connect</h3>
                            <div className="flex flex-col space-y-4">
                                {Object.entries(data.contact.social).map(([key, value]: [string, any]) => (
                                    <Link
                                        key={key}
                                        href={value.url}
                                        target="_blank"
                                        className="text-lg hover:text-white/50 transition-colors capitalize flex items-center gap-2 group"
                                    >
                                        {key}
                                        <div className="h-px w-0 bg-white group-hover:w-4 transition-all duration-300" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="max-w-7xl mx-auto w-full mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/20 text-sm">
                <p>&copy; {new Date().getFullYear()} {data.name}.</p>
                <div className="flex gap-6 mt-4 md:mt-0 font-mono text-xs">
                    <span>LOCAL_TIME: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}</span>
                    <span>DESIGN_SYSTEM: SNP_V2</span>
                </div>
            </div>
        </section>
    );
}
