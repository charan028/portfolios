"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Markdown from "react-markdown";

export default function About({ data }: { data: any }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"],
    });

    const clipPathObject = useTransform(
        scrollYProgress,
        [0, 1],
        ["circle(0% at 50% 50%)", "circle(100% at 50% 50%)"]
    );

    return (
        <section ref={containerRef} className="relative z-20 bg-black text-white py-24 px-4 overflow-hidden">
            <div className="max-w-4xl mx-auto relative">
                <div className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">About extended</h2>
                        <div className="prose prose-invert prose-lg mx-auto text-white/80">
                            <Markdown>{data.summary}</Markdown>
                        </div>
                    </motion.div>
                </div>

                {/* Circular reveal image background effect */}
                <motion.div
                    style={{
                        clipPath: clipPathObject
                    }}
                    className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center"
                >
                    {/* Abstract shape or image could go here if user had one, for now utilizing a gradient or the avatar as a large background element */}
                    <img src={data.avatarUrl} alt="About Background" className="w-[800px] h-[800px] object-cover rounded-full grayscale blur-sm" />
                </motion.div>
            </div>

            {/* Detailed Experience Timeline */}
            <div className="max-w-3xl mx-auto mt-20 relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-center">Journey</h3>
                <div className="space-y-12">
                    {data.work.map((job: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border-l-2 border-white/20 pl-8 relative"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white" />
                            <h4 className="text-xl font-bold">{job.company}</h4>
                            <p className="text-white/60 mb-2">{job.title} | {job.start} - {job.end}</p>
                            <p className="text-white/80 text-sm leading-relaxed">{job.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
}
