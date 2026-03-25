"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Work({ data }: { data: any }) {
    return (
        <section className="min-h-screen w-full bg-black text-white py-20 px-4 md:px-12 relative z-10 transition-colors duration-700">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6">
                        Selected Work
                    </h2>
                    <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed">
                        A collection of projects showcasing my expertise in AI, VR, and Data Engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
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
                                className="group block h-full relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500"
                            >
                                <div className="aspect-video w-full overflow-hidden bg-black/50 relative">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                        />
                                    ) : project.video ? (
                                        <video
                                            src={project.video}
                                            autoPlay
                                            loop
                                            muted
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-white/5 text-white/20">
                                            No Preview
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                <div className="p-8 relative">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="text-xs font-mono text-white/40 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                                            {project.dates}
                                        </span>
                                    </div>
                                    <p className="text-white/60 mb-8 line-clamp-3 leading-relaxed font-light">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 4).map((tech: string) => (
                                            <Badge variant="outline" key={tech} className="bg-white/5 text-white/80 border-white/10 hover:bg-white/10 hover:text-white transition-colors py-1 px-3">
                                                {tech}
                                            </Badge>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <Badge variant="outline" className="bg-white/5 text-white/60 border-white/10 py-1 px-3">
                                                +{project.technologies.length - 4}
                                            </Badge>
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
