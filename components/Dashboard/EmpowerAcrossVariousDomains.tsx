import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import GlowIcon from "../GrowIcon";
import Image from "next/image";

const EmpowerAcrossVariousDomains = () => {
    const { scrollYProgress } = useScroll();
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [unsubscribearea, setUnsubscribearea] = useState({ top: 0.45, bottom: 0.66 });
    const interval = unsubscribearea.bottom - unsubscribearea.top;
    const cardArr = ["/Sales.png", "/Software Engineering.png", "/DataScience.png"];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setUnsubscribearea(prev => ({ ...prev, top: 0.33 }));
            } else {
                setUnsubscribearea(prev => ({ ...prev, top: 0.45 }));
            }
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const newIndex = Math.floor(Math.max(Math.min((scrollYProgress.get() - unsubscribearea.top) / interval * cardArr.length, 2), 0));
            if (newIndex !== currentCardIndex) {
                setCurrentCardIndex(newIndex);
            }
            console.log('scrollYProgress', scrollYProgress.get(), Math.floor((scrollYProgress.get() - unsubscribearea.top) / interval * cardArr.length), newIndex)
        };

        const unsubscribeScroll = scrollYProgress.onChange(handleScroll);

        return () => {
            unsubscribeScroll();
        };
    }, [scrollYProgress, cardArr.length, currentCardIndex, interval, unsubscribearea.top]);

    const height = useTransform(scrollYProgress, [unsubscribearea.top, unsubscribearea.bottom], ["0%", "100%"]);

    // Display the current card based on the currentCardIndex
    const currentCard = cardArr.length > 0 ? cardArr[currentCardIndex % cardArr.length] : null;

    return (
        <>
            <div className="lg:hidden py-4 px-20 lg:h-screen w-full lg:w-1/2">
                <div className="text-[#FFA500] text-xl">
                    <GlowIcon className="mr-3 inline [vertical-align:baseline]" />
                    <span>Versatile</span>
                </div>
                <div className="text-[60px] font-bold my-8 leading-tight">Empowering Across Various Domains</div>
                <div className="text-xl text-neutral-500">
                    Scholé&apos;s platform provides customized data science learning experiences across various fields, including retail sales, medical trainings, diplomatic staff, software engineering - just to name a few!
                    We know that data science challenges are different for different companies.
                </div>
            </div>
            <div className="relative h-[600vh]">
                <div className="max-w-[1000px] mx-auto px-20 py-4 flex flex-col lg:flex-row gap-16 justify-between sticky top-20">
                    <div className="hidden lg:block pt-12 h-screen w-full lg:w-1/2">
                        <div className="text-[#FFA500] text-xl">
                            <GlowIcon className="mr-3 inline [vertical-align:baseline]" />
                            <span>Versatile</span>
                        </div>
                        <div className="text-[60px] font-bold my-8 leading-tight">Empowering Across Various Domains</div>
                        <div className="text-xl text-neutral-500">
                            Scholé&apos;s platform provides customized data science learning experiences across various fields, including retail sales, medical trainings, diplomatic staff, software engineering - just to name a few!
                            We know that data science challenges are different for different companies.
                        </div>
                    </div>
                    <div className="gap-16 flex justify-between w-full lg:w-1/2">
                        <div className="top-0 lg:top-20 relative w-full h-auto">
                            <AnimatePresence mode="wait">
                                {currentCard && (
                                    <motion.div
                                        key={currentCard}
                                        initial={{ opacity: 0, y: -100, scale: 0.5 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 100, scale: 0.5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Image src={currentCard} alt="card image load failed." fill />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="h-[72vh] flex w-4 flex-col items-center">
                            <span className="page">01</span>
                            <div className="bg-[#232323] h-full m-2 rounded-lg">
                                <motion.div
                                    className="w-1 bg-[#FFA500] opacity-500"
                                    style={{
                                        height: height,
                                    }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                ></motion.div>
                            </div>
                            <span className="page">03</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmpowerAcrossVariousDomains;
