import React from "react";
import { features } from "../constants/content";

const Feature = ({ feature }) => {
  return (
    <div className="flex flex-col items-center md:flex-row lg:flex-col gap-8">
      <div className="flex p-4 h-28 w-28 bg-[#093E67] rounded-[40px]">
        <img
          src={feature.imageUrl}
          alt=""
          className="w-full h-full object-contain mx-auto"
        />
      </div>
      <div className="max-w-[250px] text-center md:max-w-[350px] md:text-left">
        <h2 className="text-lg text-white font-bold">{feature.title}</h2>
        <p className="text-gray-400 mt-4">{feature.description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="flex gap-14 items-center justify-center flex-col lg:flex-row max-w-[1200px] mx-auto my-24 p-4 features">
      {features.map((feature) => (
        <Feature key={feature.id} feature={feature} />
      ))}
    </section>
  );
};

export default Features;
