import React, { useEffect } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

export default function SummaryTextReveal() {
  const text =
    "Scholé has reimagined adult upskilling: using the best of AI to teach AI. Using award-winning research in AI for education, we provide highly personalized data science learning tailored exactly to your organization's context. Prepare your workforce to thrive in an AI-driven world.";

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", () => {
      // Handle scroll event if needed
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const splitTypes = document.querySelectorAll("#reveal-type");

    splitTypes.forEach((word) => {
      const text2 = new SplitType(word as HTMLElement, { types: "words" });

      gsap.from(text2.words, {
        scrollTrigger: {
          trigger: word,
          start: "top 60%",
          end: "bottom 50%",
          scrub: true,
          toggleActions: "play play reverse reverse",
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });
  }, []);

  return (
    <div id="reveal-type" className="mx-auto max-w-[1500px] px-20 py-40 text-2xl md:text-[4vw] md:leading-[1.5]">{text}
    </div>
  );
}
