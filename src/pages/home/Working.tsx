import { useState } from "react";
import img from "../../assets/Pasted image.png";
import { FaChevronCircleRight } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Connect",
    text: "Easily integrate LeafAI Search with your existing systems—Confluence, SharePoint, and document repositories.",
  },
  {
    id: 2,
    title: "Index",
    text: "Index your data efficiently and retrieve information seamlessly.",
  },
  {
    id: 3,
    title: "Enhance",
    text: "Improve search accuracy with AI-driven enhancements.",
  },
  {
    id: 4,
    title: "Search",
    text: "Perform fast and relevant searches across multiple platforms.",
  },
  {
    id: 5,
    title: "Learn",
    text: "Gain insights and analytics from your search data.",
  },
];

const Working = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);
  return (
    <section className="max-w-contained mx-auto mt-[198px]">
      <div className="flex flex-col justify-between items-center text-center">
        <h1 className="font-outfit font-bold text-[48px]">How it Works</h1>
        <p className="font-opensans text-gray font-normal text-[20px] leading-[32px] mx-[30%]">
          Discover the power of intelligent search across your entire digital
          workspace.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 p-6 mt-[70px]">
        <div className="md:w-[44%] flex flex-col gap-2 ">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature)}
              className={`p-[49px] text-left rounded-lg shadow-md flex flex-col ${
                activeFeature.id === feature.id
                  ? "bg-primary-dark text-white"
                  : "bg-white text-gray/60 font-roboto font-normal text-[30px]"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <h3 className="font-roboto font-semibold text-[30px]">
                  {feature.title}
                </h3>
                <FaChevronCircleRight
                  size={46}
                  className={
                    activeFeature.id === feature.id
                      ? "text-white rotate-90"
                      : "text-primary/50"
                  }
                />
              </div>

              {/* Description - Only shown when the button is selected */}
              {activeFeature.id === feature.id && (
                <p className="mt-2 text-white text-[18px] font-normal">
                  {feature.text}
                </p>
              )}
            </button>
          ))}
        </div>
        <div className="md:w-[56%]  bg-white p-6 shadow-2xl rounded-lg">
          <h2 className="text-[38px] font-bold font-roboto  mt-[41px] mx-[44px] mb-4">
            {activeFeature.title}
          </h2>
          <p className="text-gray font-opensans font-normal text-[24px] mt-[21px] mx-[44px] leading-[32px]">
            {activeFeature.text}
            {activeFeature.text}
          </p>
          <button className="mx-[44px] mt-[26px] bg-primary-dark text-white px-5 py-3 rounded-lg">
            Get Started
          </button>
          <div className="mt-16 flex gap-4">
            <img src={img} alt="" className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
