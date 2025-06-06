import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';

export default function NewVisionLearningAI() {
    return (
        <div className="overflow-hidden">
        <div style={{ perspective: 1000 }}>
            <motion.div
                className="flex items-center mx-auto sm:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1160px] 2xl:max-w-[1200px] p-8 border outline border-[#333333] outline-[#333333] outline-1 outline-offset-4 my-4 rounded-md"
                style={{
                    rotateX: useTransform(useScroll().scrollY, [0, 1000], [0, 95])
                }}
            >
                <div className="p-4 text-white w-1/2">
                    <div className="font-bold text-[2.4vw]">A New Vision for Learning AI</div>
                    <div className="text-xl">
                        <p className="py-4">Scholé (n.) &quot;leisurely learning; set-apart, undistracted time to study the things most worthwhile.&quot;</p>
                        <p className="py-4">Scholé has reimagined adult upskilling: using the best of AI to teach AI. Using award-winning research in AI for education, we provide highly personalized data science learning tailored exactly to your organization&apos;s context. Prepare your workforce to thrive in an AI-driven world.</p>
                    </div>
                    <button className="bg-[#101010] px-4 py-2 rounded-lg mt-8 font-bold transition:bg,text duration-[0.2s] hover:bg-gray-300 hover:text-[#101010]">Schedule a call</button>
                </div>
                <div className="p-4 w-1/2 h-full relative">
                    <Image src="/Winner_Finalist.png" alt="image load is failed." width={1000} height={1000} className="object-cover h-auto w-full" />
                </div>
            </motion.div>
        </div>
        </div>
    );
}
