"use client";

import { observer } from "mobx-react-lite";
import MainSection from "@/components/commonComponents/MainSection/MainSection";
import ServiceSection from "@/components/commonComponents/ServiceSection/ServiceSection";

const HomeSection = observer(() => {
  return (
    <div className="overflow-hidden">
      <MainSection />
      <ServiceSection />
    </div>
  );
});

export default HomeSection;
