"use client";

import { useEffect, useRef } from "react";

// Hanging-strings text curtain (inspired by "Strings" by Liam Egan).
// Columns of characters pinned at the top, verlet physics + mouse repulsion.
const TEXT =
    "UX·UI·ENGINEER·AI·VR·缘分·HUMAN·COMPUTER·INTERACTION·DESIGN·SYSTEMS·REACT·NEXTJS·PYTHON·LLM·DATA·";

const GRAVITY = 0.18;
const DAMPING = 0.965;
const ITERATIONS = 4;
const MOUSE_RADIUS = 110;
const MOUSE_STRENGTH = 3.2;

type P = { x: number; y: number; px: number; py: number; pinned: boolean; ch: string };

export default function StringsCanvas({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        let particles: P[] = [];
        let cols = 0;
        let rows = 0;
        let cellW = 0;
        let cellH = 0;
        const mouse = { x: -9999, y: -9999 };
        let raf = 0;

        function build() {
            if (!canvas || !ctx) return;
            const w = canvas.clientWidth;
            const h = canvas.clientHeight;
            canvas.width = Math.round(w * dpr);
            canvas.height = Math.round(h * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            // ponytail: caps keep particle count ~<2500 so plain fillText stays cheap
            cols = Math.min(64, Math.floor(w / 13));
            rows = Math.min(48, Math.floor(h / 14));
            cellW = w / cols;
            cellH = h / (rows + 3); // strings end above the bottom edge

            particles = [];
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    // half-cell insets: no clipped glyphs at the edges or the seam
                    const x = (i + 0.5) * cellW;
                    const y = (j + 0.5) * cellH;
                    particles.push({
                        x,
                        y,
                        px: x,
                        py: y,
                        pinned: j === 0,
                        // stagger each string's text so no diagonal stripes appear
                        ch: TEXT[(i * 13 + j) % TEXT.length],
                    });
                }
            }
            ctx.font = `600 11px ui-monospace, monospace`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
        }

        let t = 0;
        function step() {
            t += 0.008;
            for (const p of particles) {
                if (p.pinned) continue;
                const vx = (p.x - p.px) * DAMPING;
                const vy = (p.y - p.py) * DAMPING;
                p.px = p.x;
                p.py = p.y;
                p.x += vx + Math.sin(t + p.py * 0.02) * 0.02; // gentle wind
                p.y += vy + GRAVITY;

                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const d2 = dx * dx + dy * dy;
                if (d2 < MOUSE_RADIUS * MOUSE_RADIUS && d2 > 0.01) {
                    const d = Math.sqrt(d2);
                    const f = ((MOUSE_RADIUS - d) / MOUSE_RADIUS) * MOUSE_STRENGTH;
                    p.x += (dx / d) * f;
                    p.y += (dy / d) * f;
                }
            }
            // vertical distance constraints, top-down so pins propagate
            for (let k = 0; k < ITERATIONS; k++) {
                for (let i = 0; i < cols; i++) {
                    for (let j = 1; j < rows; j++) {
                        const a = particles[i * rows + j - 1];
                        const b = particles[i * rows + j];
                        const dx = b.x - a.x;
                        const dy = b.y - a.y;
                        const d = Math.sqrt(dx * dx + dy * dy) || 0.001;
                        const diff = (d - cellH) / d;
                        const ox = dx * diff * 0.5;
                        const oy = dy * diff * 0.5;
                        if (a.pinned) {
                            b.x -= ox * 2;
                            b.y -= oy * 2;
                        } else {
                            a.x += ox;
                            a.y += oy;
                            b.x -= ox;
                            b.y -= oy;
                        }
                    }
                }
            }
        }

        function draw() {
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
            for (const p of particles) {
                // fade strings out toward the bottom
                const alpha = 0.5 * (1 - p.y / canvas.clientHeight);
                if (alpha <= 0) continue;
                ctx.fillStyle = `rgba(38, 33, 26, ${alpha})`;
                ctx.fillText(p.ch, p.x, p.y);
            }
        }

        function loop() {
            step();
            draw();
            raf = requestAnimationFrame(loop);
        }

        build();
        if (prefersReduced) {
            draw(); // static curtain, no motion
        } else {
            loop();
        }

        const onMove = (e: PointerEvent) => {
            const r = canvas.getBoundingClientRect();
            mouse.x = e.clientX - r.left;
            mouse.y = e.clientY - r.top;
        };
        const onLeave = () => {
            mouse.x = -9999;
            mouse.y = -9999;
        };
        const onResize = () => build();
        window.addEventListener("pointermove", onMove);
        window.addEventListener("pointerleave", onLeave);
        window.addEventListener("resize", onResize);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerleave", onLeave);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
