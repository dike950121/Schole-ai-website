import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const imageTexts = [
    {
        description: "We should always have a human approach to AI."
    },
    {
        description: "Self-Regulated Learning Across Modaites"
    },
    {
        description: "Anything-in, Anything-out: A New Modular AI Model"
    }
];

export default function BasdSwissExcellenceAIResearch() {
    const [activeIndex, setActiveIndex] = useState(0);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = imageRefs.current.findIndex(ref => ref === entry.target);
                        if (index !== -1) {
                            setActiveIndex(index);
                        }
                    }
                });
            },
            {
                threshold: 0.5,
                rootMargin: '-100px 0px'
            }
        );

        imageRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex gap-16 mx-auto my-20 max-w-[1500px] relative text-center">
            <div className="py-8 w-1/2 sticky top-0 [height:fit-content]">
                <div className="relative w-[50%]">
                    <div className="text-[40px] font-bold my-8 w-[90%] mx-auto">Based on Swiss Excellence in AI Research</div>
                    <div className="text-2xl text-neutral-500 mt-4">
                        Scholé is based on cutting-edge scientific research in machine learning developed at the EPFL Machine Learning for Education research group and supported by the EPFL AI Center and EPFL LEARN Center.
                    </div>
                    {imageTexts.map((text, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-700 absolute top-0 left-[80%] w-[90%] text-3xl [transform:translate(50%_,50%_)] rounded-lg p-4 bg-[var(--color-tertiary)] text-[var(--color-primary)] ${activeIndex === index
                                    ? 'opacity-100 transition-y-0'
                                    : 'opacity-0 transition-y-4'
                                }`}
                        >
                            <div className="absolute top-[50%] left-full -mt-2 border-l-[10px] border-t-[5px] border-b-[15px] border-solid border-transparent border-l-[var(--color-tertiary)]"></div>
                            {text.description}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-8 px-8 py-16 w-1/2 bg-[var(--color-secondary)] rounded-lg">
                {[
                    "/Vinitra Swamy and Paola Mejia.jpg",
                    "/Navigating Self-regulated Learning Dimensions.webp",
                    "/Machine Learning Neural Network.jpg"
                ].map((src, index) => (
                    <div
                        key={index}
                        ref={(el: HTMLDivElement | null) => {
                            imageRefs.current[index] = el;
                        }}
                        className="relative"
                    >
                        <Image
                            src={src}
                            className="!h-auto !relative"
                            alt={`Research image ${index + 1}`}
                            fill
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
