"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Car, Building2, Box } from "lucide-react";

export default function WhyData() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const reasons = [
        {
            title: "Autonomous Systems",
            description: "Self-driving fleets need diverse, real-world edge cases to learn safe navigation.",
            icon: <Car className="w-8 h-8 text-blue-400" />
        },
        {
            title: "Smart Cities",
            description: "Urban planners analyze traffic flow and pedestrian safety patterns anonymously.",
            icon: <Building2 className="w-8 h-8 text-purple-400" />
        },
        {
            title: "Retail Analytics",
            description: "Stores optimize layouts by understanding customer movement and engagement.",
            icon: <Box className="w-8 h-8 text-cyan-400" />
        }
    ];

    return (
        <section ref={containerRef} className="py-32 relative bg-[#0A0A0A] overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#111] to-[#0A0A0A] z-0" />

            {/* Floating Background Elements */}
            <motion.div
                style={{ y }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="container relative z-10 mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Left Content */}
                    <div className="flex-1">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6"
                        >
                            Powering the <br /> Next Gen of AI.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl text-white/70 mb-8 leading-relaxed"
                        >
                            The biggest bottleneck in AI development isn't compute—it's data.
                            Companies are desperate for high-quality, real-world video footage to train
                            their models effectively.
                        </motion.p>
                    </div>

                    {/* Right Cards */}
                    <div className="flex-1 w-full relative">
                        {reasons.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                                className="mb-6 last:mb-0 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all cursor-crosshair shadow-lg"
                                style={{
                                    transformStyle: "preserve-3d",
                                    perspective: "1000px"
                                }}
                            >
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="p-3 bg-white/5 rounded-xl">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                </div>
                                <p className="text-white/60 ml-[60px]">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
