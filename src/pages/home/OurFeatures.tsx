import img1 from "../../assets/search-status.png";
import img2 from "../../assets/search-status1.png";
import img3 from "../../assets/search-status2.svg";
import img4 from "../../assets/search-status3.svg";
import img5 from "../../assets/search-status4.svg";
import img6 from "../../assets/search-status5.svg";
import { FiArrowRight } from "react-icons/fi";

const features = [
  {
    id: 1,
    icon: img1, // Replace with actual icon IDs or components
    title: "Unified Search",
    text: "Search across Confluence, SharePoint, and all your documents from a single interface. Consistent experience regardless of where your information.",
  },
  {
    id: 2,
    icon: img2,
    title: "AI-Powered Relevance",
    text: "Machine learning algorithms that understand context and intent. Results that improve over time based on your organization's usage patterns.",
  },
  {
    id: 3,
    icon: img3,
    title: "Smart Reviews",
    text: "AI-generated summaries of lengthy documents. Quick view of key information without opening files.",
  },
  {
    id: 4,
    icon: img4,
    title: "Natural Language Processing",
    text: "Ask questions in plain English and get accurate answers. Understand complex queries and industry-specific jargon.",
  },
  {
    id: 5,
    icon: img5,
    title: "Personalized Results",
    text: "Tailored search results based on your role, projects, and past interactions. Recommended content that anticipates your needs.",
  },
  {
    id: 6,
    icon: img6,
    title: "Advanced Analytics",
    text: "Gain insights into your organization's knowledge base. Identify knowledge gaps and popular resources.",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="max-w-contained mx-auto  mt-[214px]">
      <div className="flex flex-col justify-between items-center mx-2 lg:mx-0">
        <h1 className="font-outfit font-bold text-[48px]">Our Features</h1>
        <p className="font-opensans font-normal text-[#6D6D6D] text-[20px] leading-[32px] items-center justify-items-center text-center mx-2 md:mx-[32%]">
          Discover the power of intelligent search across your entire digital
          workspace.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-[70px]">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="border-none rounded-lg p-6 shadow-[20px_10px_90px_10px_#00000020] bg-white"
          >
            <img className=" mb-4 " src={feature.icon}></img>
            <h3 className="font-bold mb-4 font-opensans text-[21px]">
              {feature.title}
            </h3>
            <p className="text-gray font-opensans text-[16px] font-normal mb-[16px]">
              {feature.text}
            </p>
            <div className="flex items-center gap-3">
              <a className="font-opensans font-bold text[16px]">learn more</a>
              <FiArrowRight size={24} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
