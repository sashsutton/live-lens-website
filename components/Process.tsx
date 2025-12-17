"use client";

import { motion } from "framer-motion";
import { ScanFace, Wallet, DoorOpen } from "lucide-react";

export default function Process() {
    const steps = [
        {
            title: 'Accept Mission',
            desc: 'Browse available data collection missions in your area.',
            icon: <DoorOpen className="w-8 h-8 text-[#007AFF]" />
        },
        {
            title: 'AI Verification',
            desc: 'Our AI instantly verifies your footage for authenticity.',
            icon: <ScanFace className="w-8 h-8 text-[#007AFF]" />
        },
        {
            title: 'Get Paid in $LENS',
            desc: 'Receive instant crypto payments to your wallet.',
            icon: <Wallet className="w-8 h-8 text-[#007AFF]" />
        }
    ];

    return (
        <section id="process" className="py-32 relative bg-[#0A0A0A]">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    How it works
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className="glass p-8 rounded-3xl flex flex-col items-center text-center max-w-sm w-full hover:bg-white/10 transition-colors duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            whileHover={{
                                scale: 1.05,
                                rotateX: 5,
                                rotateY: 5,
                                transition: { duration: 0.2 }
                            }}
                            style={{
                                transformStyle: "preserve-3d",
                                perspective: "1000px"
                            }}
                        >
                            <div className="mb-6 p-4 rounded-full bg-blue-500/10 shadow-[0_0_20px_rgba(0,122,255,0.3)] transform-gpu transition-transform duration-500 group-hover:scale-110">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                            <p className="text-white/60 leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
