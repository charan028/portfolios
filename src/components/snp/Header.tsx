"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const LINKS = [
    { href: "#hero", label: "Home" },
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

const INK = "#26211a";
const RED = "#9c3b2e";

function Roof() {
    return (
        <svg
            viewBox="0 0 340 64"
            className="w-[300px] md:w-[340px] h-auto drop-shadow-[0_4px_10px_rgba(38,33,26,0.2)]"
            aria-hidden="true"
        >
            {/* ridge finial */}
            <rect x="166" y="0" width="8" height="6" rx="2" fill={RED} />
            {/* top tier, low profile */}
            <path
                d="M170 3 C 132 6 100 15 76 30 C 88 34 102 36 116 36 L 224 36 C 238 36 252 34 264 30 C 240 15 208 6 170 3 Z"
                fill={INK}
            />
            {/* top eave tips, upturned */}
            <path d="M76 30 C 66 27 58 22 53 15 C 58 27 66 33 76 33 Z" fill={INK} />
            <path d="M264 30 C 274 27 282 22 287 15 C 282 27 274 33 264 33 Z" fill={INK} />
            {/* lower tier, wider, separated by a paper gap */}
            <path
                d="M170 26 C 116 29 74 38 42 52 C 58 58 76 60 94 60 L 246 60 C 264 60 282 58 298 52 C 266 38 224 29 170 26 Z"
                fill={INK}
                stroke="#ece3cf"
                strokeWidth="2.5"
            />
            {/* lower eave tips */}
            <path d="M42 52 C 32 49 24 44 18 36 C 24 49 32 56 42 56 Z" fill={INK} />
            <path d="M298 52 C 308 49 316 44 322 36 C 316 49 308 56 298 56 Z" fill={INK} />
        </svg>
    );
}

export default function Header() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setHidden(latest > lastScrollY && latest > 150);
        setLastScrollY(latest);
    });

    return (
        <motion.header
            variants={{ visible: { y: 0 }, hidden: { y: "-130%" } }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
        >
            <div className="pointer-events-auto flex flex-col items-center">
                <Roof />
                {/* beam with embedded nav */}
                <nav className="-mt-1 flex w-[300px] md:w-[340px] items-center justify-center gap-0.5 md:gap-1 rounded-b-lg bg-[#26211a] px-3 py-1 shadow-lg shadow-black/20">
                    <Link
                        href="#hero"
                        className="mr-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#9c3b2e] text-[11px] font-bold text-[#ece3cf]"
                        aria-label="Home"
                    >
                        C
                    </Link>
                    {LINKS.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="rounded-md px-2.5 py-1 text-[11px] md:text-xs font-medium tracking-wide text-[#ece3cf]/65 transition-colors hover:bg-white/10 hover:text-[#ece3cf]"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </motion.header>
    );
}
