import { useEffect, useState } from "react";
import img from "../../assets/image 63.png";
import timer from "../../assets/timer.png";
import { useNavigate } from "react-router-dom";

const Connecting = () => {
  const [progress, setProgress] = useState(0);
  //   const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          setLoading(false);
          setTimeout(() => {
            navigate("/docsscan"); // Redirect to next page
          }, 500); // Hide loading after completion
          return 100;
        }
        return oldProgress + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [navigate]);
  return (
    <section className="flex flex-col md:flex-row">
      <div className="w-full md:w-[50%] px-16">
        <img src={img} alt="" className="mt-[121px]" />
        <p className="font-opensans font-bold text-3xl mt-7">
          Preparing Your Personalized Search Experience
        </p>
        <p className="font-opensans font-normal text-xl text-gray/50 mt-[22px]">
          Please wait while we index your data
        </p>
        <p className="font-opensans font-semibold text-xl mt-3">
          We're hard at work setting up your Enterprise Search Bot. This process
          involves:
        </p>
        <ol className="list-decimal pl-4 text-gray/70 mt-2">
          <li className="mb-3">
            Establishing secure connections to your selected data sources
          </li>
          <li className="mb-3">
            Scanning and categorizing your documents Building
          </li>
          <li className="mb-3">A comprehensive search index</li>
          <li className="mb-3">
            Optimizing AI models for your specific content
          </li>
        </ol>
        <div className="flex max-w-[510px] justify-between border mt-60 mb-14 border-white bg-primary/10 gap-2">
          <img src={timer} alt="" className="pl-3 py-1" />
          <p className=" mt-3 px-1 items-center text-justify text-[13px] font-semibold font-opensans text-primary">
            This may take a few minutes depending on the volume of your data.
            Thank you for your patience.
          </p>
        </div>
      </div>
      <div className="w-full md:w-[50%] bg-green-50">
        <div className="flex flex-col items-center justify-center h-screen  bg-cover">
          {loading ? (
            <>
              <p className="text-2xl font-opensans font-bold  mb-3 mt-[416px]">
                Connecting To Data Sources...
              </p>
              <div className="w-80 h-10 bg-primary/30 rounded-full">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500 mb-[514px]"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </>
          ) : (
            <p className="text-lg font-semibold text-gray-700 mt-[416px]">
              ✅ Data Sources Connected!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Connecting;
const steps = [
  { text: "Scanning Documents...", color: "green" },
  { text: "Building Search Index...", color: "lightgreen" },
  { text: "Optimizing AI Models...", color: "yellowgreen" },
  { text: "Finalizing Setup...", color: "darkgreen" },
];
