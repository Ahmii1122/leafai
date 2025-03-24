import { FaAtlassian, FaFileAlt, FaMicrosoft } from "react-icons/fa";
import img from "../../assets/image 63.png";
import { useState } from "react";
import img2 from "../../assets/Group 1000001747.png";
import { useNavigate } from "react-router-dom";

interface DataSource {
  id: number;
  name: string;
  description: string;
  requirements: string;
  icon: React.ReactNode;
  bgColor: string;
}

const DataSource: React.FC = () => {
  const [selectedSource, setSelectedSource] = useState<DataSource | null>(null);
  const navigate = useNavigate();

  const handleSelect = (source: DataSource) => {
    setSelectedSource(source);
  };

  const handleConnect = async () => {
    if (!selectedSource) {
      alert("Please select a data source");
      return;
    }

    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("User ID not found. Please sign in again.");
      return navigate("/signup"); // Redirect to signup if no userId found
    }

    const requestData = {
      dataSource: selectedSource.name,
      timestamp: new Date().toISOString(), // Optional: Store selection time
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    };

    try {
      const res = await fetch(
        `https://leafai-e8118-default-rtdb.firebaseio.com/userData/${userId}/selectedDataSource.json`,
        options
      );

      if (res.ok) {
        alert("Data source saved successfully!");
        navigate("/Connecting"); // 🔥 Change to your actual next step route
      } else {
        alert("An error occurred while saving the data.");
      }
    } catch (error) {
      console.error("❌ Error saving data source:", error);
      alert("Failed to save data source.");
    }
  };

  return (
    <section className="max-w-contained mx-auto flex flex-col md:flex-row ">
      <div className="w-full md:w-[50%] px-20">
        <img src={img} alt="Connect Data Sources" className="mt-12" />
        <p className="font-opensans font-semibold text-2xl mt-5">
          Connect Your Data Sources
        </p>
        <p className="font-opensans font-normal text-gray-500 mt-2 mb-7">
          Let's integrate your information repositories.
        </p>

        {dataSources.map((source) => (
          <div
            key={source.id}
            className={`p-4 w-full rounded-lg border border-gray/20 cursor-pointer mb-4 transition-all max-w-[460px] ${
              selectedSource?.id === source.id
                ? "border-2 border-blue-500 bg-blue-50 border-none"
                : source.bgColor
            }`}
            onClick={() => handleSelect(source)}
          >
            <div className="flex items-center space-x-3 mt-[18px]">
              {source.icon}
              <h2 className="text-lg font-semibold font-opensans">
                {source.name}
              </h2>
            </div>
            <p className="text-gray/50 font-opensans font-normal text-[14px] mt-3 mb-2">
              {source.description}
            </p>
            <p className="text-sm font-medium mt-1 text-gray-700">
              <span className="font-semibold mb-4">Requirements:</span>{" "}
              {source.requirements}
            </p>
          </div>
        ))}
        <p className="mt-8 font-opensans font-normal texct-[14px]">
          Don't worry if you have multiple data sources. You can add more after
          the initial setup in your dashboard settings.
        </p>
        <button
          onClick={handleConnect}
          className="mt-6 mb-5 bg-primary-dark text-nowrap text-white px-16 lg:px-40 py-3 rounded-md shadow hover:bg-primary/50 transition"
        >
          Connect Data Source
        </button>
      </div>
      <div className="w-screen md:w-[45%] lg:w-[50%] bg-light-primary/30 flex flex-col justify-center">
        <p className="font-roboto font-bold text-[36px]  lg:text-[50px] px-[5%] md:px-[60px] mt-[40px] md:mt-[106px] mb-3 text-center">
          The Easiest Way To Manage Your Work
        </p>
        <p className="font-opensans font-normal text-[#515151] text-[18px] md:text-[20px] text-center leading-7 px-[5%] md:px-[60px]">
          To begin your seamless search experience, we just need a few details
          from you.
        </p>
        <div className="pt-[80px] md:pt-[116px] pb-16 flex justify-center">
          <img className="w-screen md:w-auto" src={img2} alt="Illustration" />
        </div>
      </div>
    </section>
  );
};

export default DataSource;

const dataSources: DataSource[] = [
  {
    id: 1,
    name: "Confluence",
    description:
      "Integrate Seamlessly With Your Atlassian Confluence Workspace.",
    requirements: "Confluence Account Credentials Or API Key",
    icon: <FaAtlassian className="text-blue-500 text-2xl" />,
    bgColor: "bg-white",
  },
  {
    id: 2,
    name: "SharePoint",
    description:
      "Connect Directly To Your Microsoft SharePoint Sites And Libraries.",
    requirements: "SharePoint Admin Credentials Or App Permissions",
    icon: <FaMicrosoft className="text-red-500 text-2xl" />,
    bgColor: "bg-white",
  },
  {
    id: 3,
    name: "Raw Data (PDF And Word Files)",
    description:
      "Upload And Index Your Documents Directly From Your Local Storage Or Cloud Drives.",
    requirements: "Supported Formats: PDF, Doc, Docx, Txt, And More",
    icon: <FaFileAlt className="text-red-500 text-2xl" />,
    bgColor: "bg-white",
  },
];
