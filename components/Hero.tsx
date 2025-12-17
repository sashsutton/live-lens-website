"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const yBg = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Video Background */}
            <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
                <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
                    {[1, 2, 3, 4].map((num) => (
                        <div key={num} className="relative w-full h-full overflow-hidden">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src={`/videos/video_${num}.mp4`} type="video/mp4" />
                            </video>
                        </div>
                    ))}
                </div>
            </motion.div>

            <div className="container relative z-20 px-6 text-center">
                <motion.div
                    style={{ y: yText }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50">
                            Turn your lens
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600">
                            into assets
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    style={{ y: yText }}
                    className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    Join the decentralized network. Capture the world, verify with AI, and earn crypto for your data.
                </motion.p>

                <motion.div
                    style={{ y: yText }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    <button className="px-8 py-4 bg-[#007AFF] hover:bg-[#0062CC] text-white rounded-full font-semibold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(0,122,255,0.5)]">
                        Start Earning
                    </button>
                </motion.div>
            </div>

            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A] z-10 pointer-events-none" />
        </section>
    );
}
