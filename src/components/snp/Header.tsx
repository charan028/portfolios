"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Header() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = lastScrollY;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setLastScrollY(latest);
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none"
        >
            <nav className="pointer-events-auto bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-8 py-3 flex items-center gap-8 shadow-lg">
                <Link href="#hero" className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest">
                    Home
                </Link>
                <Link href="#work" className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest">
                    Work
                </Link>
                <Link href="#about" className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest">
                    About
                </Link>
                <Link href="#contact" className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest">
                    Contact
                </Link>
            </nav>
        </motion.header>
    );
}
