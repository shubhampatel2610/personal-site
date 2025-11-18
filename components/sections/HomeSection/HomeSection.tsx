"use client";

import MainSection from "@/components/commonComponents/MainSection/MainSection";
import { observer } from "mobx-react-lite";

const HomeSection = observer(() => {
  return (
    <div className="overflow-hidden">
      <MainSection />
    </div>
  );
});

export default HomeSection;
