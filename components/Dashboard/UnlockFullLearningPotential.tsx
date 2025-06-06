import Image from "next/image";
import GrowIcon from "../GrowIcon";

export default function UnlockFullLearningPotential() {
    return (
        <div className="mx-auto max-w-[1000px] text-center">
          <div className="text-2xl text-[#A594FD] my-8">
            <GrowIcon className="mr-3 inline [vertical-align:baseline]" />
            <span>Team Collaboration</span>
          </div>
          <div className="text-[60px] font-bold my-8">Unlock Your Team&apos;s Full Learning Potential</div>
          <div className="flex gap-4">
            <div className="bg-[#101010] rounded-lg w-1/3 py-8 relative group transition-transform hover:[transform:scale(0.95)] duration-[.8s]">
              <Image src="/Flexible.png" alt="logo" className="mx-auto" width={100} height={100} />
              <div className="p-8">
                <div className="text-3xl font-bold">Flexible</div>
                <div className="my-4 text-neutral-500">Learners can either plan for the long-term (profession track) or get what they need, when they need it (goal track).
                </div>
              </div>
              <div className="absolute w-px h-[86px] left-0 top-[80%] z-[1] opacity-0 [background:linear-gradient(0deg,_rgba(59,_56,_65,_0)_22.4%,_#a594fd_60.94%,_rgba(59,_56,_65,_0))] [transition:top_0.8s,opacity_0.4s_linear] group-hover:top-[20%] group-hover:opacity-100 [will-change:top,opacity]"></div>
            </div>
            <div className="bg-[#101010] rounded-lg w-1/3 py-8 relative group transition-transform hover:[transform:scale(0.95)] duration-[.8s]">
              <Image src="/Self-Regulated.png" alt="logo" className="mx-auto" width={100} height={100} />
              <div className="p-8">
                <div className="text-3xl font-bold">Self-Regulated</div>
                <div className="my-4 text-neutral-500">Your team decides what they want to learn -- we believe ownership over your learning journey creates better learning outcomes.
                </div>
              </div>
              <div className="absolute w-px h-[86px] left-0 top-[80%] z-[1] opacity-0 [background:linear-gradient(0deg,_rgba(59,_56,_65,_0)_22.4%,_#a594fd_60.94%,_rgba(59,_56,_65,_0))] [transition:top_0.8s,opacity_0.4s_linear] group-hover:top-[20%] group-hover:opacity-100 [will-change:top,opacity]"></div>
            </div>
            <div className="bg-[#101010] rounded-lg w-1/3 py-8 relative group transition-transform hover:[transform:scale(0.95)] duration-[.8s]">
              <Image src="/Adaptive.png" alt="logo" className="mx-auto" width={100} height={100} />
              <div className="p-8">
                <div className="text-3xl font-bold">Adaptive</div>
                <div className="my-4 text-neutral-500">The difficulty levels adjust automatically, allowing for continuous growth and progress.
                </div>
              </div>
              <div className="absolute w-px h-[86px] left-0 top-[80%] z-[1] opacity-0 [background:linear-gradient(0deg,_rgba(59,_56,_65,_0)_22.4%,_#a594fd_60.94%,_rgba(59,_56,_65,_0))] [transition:top_0.8s,opacity_0.4s_linear] group-hover:top-[20%] group-hover:opacity-100 [will-change:top,opacity]"></div>
            </div>
          </div>
        </div>
    );
}
