"use client";

import Header from "@/components/Dashboard/Header";
import NewVisionLearningAI from "@/components/Dashboard/NewVisionLearningAI";
import InstructionsCompanies from "@/components/Dashboard/InstructionsCompaniesList";
import CompetitiveEdge from "@/components/Dashboard/CompetitiveEdge";
import ExploreOurDynamicLearningFormats from "@/components/Dashboard/ExploreOurDynamicLearningFormats";
import EmpowerAcrossVariousDomains from "@/components/Dashboard/EmpowerAcrossVariousDomains";
import UnlockFullLearningPotential from "@/components/Dashboard/UnlockFullLearningPotential";
import BasdSwissExcellenceAIResearch from "@/components/Dashboard/BasdSwissExcellenceAIResearch";
import MeetingScholeTeam from "@/components/Dashboard/MeetingScholeTeam";
import Footer from "@/components/Dashboard/Footer";

export default function Home() {

  return (
    <>
      <div className="bg-black text-white">
        <Header />
        <NewVisionLearningAI />
        <InstructionsCompanies />
        <hr className="mx-auto my-8 max-w-[1200px] text-[#101010]"></hr>
        <CompetitiveEdge />
        <UnlockFullLearningPotential />
        <hr className="my-24 mx-auto max-w-[1000px] text-[#101010]"></hr>
        <ExploreOurDynamicLearningFormats />
        <EmpowerAcrossVariousDomains />
        <BasdSwissExcellenceAIResearch />
        <MeetingScholeTeam />
        <Footer />
      </div>
    </>
  );
}
