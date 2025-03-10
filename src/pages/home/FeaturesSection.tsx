import img1 from "../../assets/Frame.png";
import print from "../../assets/fingerprint.png";
import vector from "../../assets/Vector.png";
import search from "../../assets/search.png";

const FeaturesSection = () => {
  return (
    <section className="max-w-contained mx-auto">
      <div className="flex flex-col md:flex-row gap-8 md:gap-36 mt-7 md:mt-[150px] mx-5 md:mx-0">
        <p className="font-outfit font-bold text-[48px] leading-[60px]">
          Let’s Explore our Top Key Features
        </p>
        <div className="">
          <p className="text-[#6b6b6b] font-normal text-[20px] leading-[32px] font-opensans">
            LeafAI Search sprouted from a simple idea: make enterprise knowledge
            as easy to find as a Google search
          </p>
          <button className="px-5 py-3 mt-[21px] bg-primary text-white border-none rounded-md">
            Get Started
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[69px] mx-5 md:mx-0 ">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center border border-gray/30 rounded-xl p-6 "
          >
            <div className="relative">
              <img
                src={feature.img}
                alt={feature.title}
                className="w-11 h-11 mb-4 object-contain mt-[50px] "
              />
              <div className="absolute top-[36%] left-4 w-8 h-8 rounded-full bg-primary/30"></div>
            </div>
            <h3 className="font-bold font-roboto text-[23px] text-nowrap text-center mb-2">
              {feature.title}
            </h3>
            <p className="text-center mt-[9px] text-[17px] font-normal text-[#161C2D]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

const features = [
  {
    id: 1,
    img: img1,
    title: "AI-Driven Insights",
    description:
      "With lots of unique blocks, you can easily build a page without coding.",
  },
  {
    id: 2,
    img: search,
    title: "Unified Search Experience",
    description:
      "With lots of unique blocks, you can easily build a page without coding.",
  },
  {
    id: 3,
    img: vector,
    title: "Boosted Productivity",
    description:
      "With lots of unique blocks, you can easily build a page without coding.",
  },
  {
    id: 4,
    img: print,
    title: "Secure & Compliant",
    description:
      "With lots of unique blocks, you can easily build a page without coding.",
  },
];
