"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useState, useRef, Suspense } from "react";
import { motion } from "framer-motion";

function Stars(props: any) {
    const ref = useRef<any>();
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5000), { radius: 1.5 })
    );

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled={false}
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default function Hero({ data }: { data: any }) {
    return (
        <section className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Suspense fallback={null}>
                        <Stars />
                    </Suspense>
                </Canvas>
            </div>

            <div className="z-10 text-center px-4 pointer-events-none">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-4"
                >
                    {data.name}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-white/70 max-w-lg mx-auto"
                >
                    {data.description}
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
}
