import React from "react";
import Landing from "../Components/DecoLabs/Landing";
import Features from "../Components/DecoLabs/Features";
import Join from "../Components/DecoLabs/Join";
import Questions from "../Components/DecoLabs/Questions";
import Description from "../Components/DecoLabs/Description";
import EventGuide from "../Components/DecoLabs/EventGuide";
import { TracingBeam } from "../Components/ui/tracing-beam";

const DeCoLabs = () => {
  return (
    <div>
      <Landing />
      <Description />
      <EventGuide />
      <Features />
      <Join />
      <Questions />
    </div>
  );
};

export default DeCoLabs;
