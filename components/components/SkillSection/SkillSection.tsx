import AppConstants from "@/constant/AppConstants";
import SkillListRenderer from "@/components/common/SkillListRenderer/SkillListRenderer";

const SkillSection = () => {
  return (
    <section className="relative w-full py-10 bg-[#0a0a0a] overflow-hidden">

      {/* Grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#3B82F6]/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto p-3 md:px-6">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            <span className="text-[#3B82F6] text-xs font-medium tracking-widest uppercase">
              Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Skills & Tools
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent rounded-full" />
        </div>

        {/* Skills + Tools blocks */}
        <div className="flex flex-col gap-5">

          {/* Skills */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 px-1">
              <span className="text-white font-semibold text-base tracking-tight shrink-0">
                {AppConstants.SKILLS_HEADER}
              </span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-white/[0.08] to-transparent" />
            </div>
            <SkillListRenderer
              itemList={AppConstants.SKILLS_LIST}
              direction="left"
            />
          </div>

          {/* Tools */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 px-1">
              <span className="text-white font-semibold text-base tracking-tight shrink-0">
                {AppConstants.TOOLS_HEADER}
              </span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-white/[0.08] to-transparent" />
            </div>
            <SkillListRenderer
              itemList={AppConstants.TOOLS_LIST}
              direction="right"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillSection;