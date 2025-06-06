import Image from "next/image";
import GrowIcon from "../GrowIcon";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2, // Delay between each child
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function EmpowerAcrossVariousDomains() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

    const images = [
        "/Sales.png",
        "/Software Engineering.png",
        "/DataScience.png"
    ];

    useEffect(() => {
        if (inView) controls.start('show');
    }, [inView, controls]);

    return (
        <>
            <div className="mx-auto max-w-[1000px] text-center">
                <div className="text-2xl text-[#A594FD] my-8">
                    <GrowIcon className="mr-3 inline [vertical-align:baseline]" />
                    <span>Versatile</span>
                </div>
                <div className="text-[60px] font-bold my-8">Empowering Across Various Domains</div>
                <motion.div
                    className="flex gap-4 max-w-[1000px]"
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    style={{ perspective: 1000 }}
                >
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{
                                rotateY: 10,
                                transition: {
                                    duration: 0.5,
                                    ease: 'easeInOut'
                                }
                            }}
                            style={{ transformStyle: 'preserve-3d' }} // Needed for rotateX to work visually
                            className="bg-[#101010] rounded-lg w-1/3 h-80 py-8 relative"
                        >
                            <Image src={images[i]} alt="logo" fill />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
}
