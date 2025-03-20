import timer from "../../assets/timer.png";
import img from "../../assets/image 63.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation

const OptimizingAi = () => {
  const [step, setStep] = useState(0);
  const [cycle, setCycle] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev >= 4) {
          if (cycle < 1) {
            setCycle((prevCycle) => prevCycle + 1); // Increment cycle count
            return 0; // Restart the animation
          } else {
            clearInterval(interval);
            // setTimeout(() => navigate("/finalizing"), 500); // Navigate after delay
          }
        }
        return prev + 1; // Move to next step
      });
    }, 500); // Change every 0.5 seconds

    return () => clearInterval(interval);
  }, [cycle, navigate]);

  return (
    <section className="flex flex-col-reverse md:flex-row">
      <div className="w-full md:w-[50%] px-3 lg:px-16">
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
          <li className="mb-3">Scanning and categorizing your documents</li>
          <li className="mb-3">Building a comprehensive search index</li>
          <li className="mb-3">
            Optimizing AI models for your specific content
          </li>
        </ol>
        <div className="flex md:max-w-[510px] justify-between border mt-10 md:mt-60 mb-14 border-white bg-primary/10 gap-2">
          <img src={timer} alt="" className="pl-3 py-1" />
          <p className="mt-3 px-1 items-center text-justify text-[13px] font-semibold font-opensans text-primary">
            This may take a few minutes depending on the volume of your data.
            Thank you for your patience.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center  bg-primary/20">
        <div className="relative w-40 h-40 mt-10">
          {/* Top Left Quarter */}
          {step >= 4 && (
            <div className="absolute w-20 h-20 bg-green-400 rounded-tl-full top-0 left-0"></div>
          )}

          {/* Top Right Quarter */}
          {step >= 1 && (
            <div className="absolute w-20 h-20 bg-green-500 rounded-tr-full top-0 right-0"></div>
          )}

          {/* Bottom Right Quarter */}
          {step >= 2 && (
            <div className="absolute w-20 h-20 bg-green-600 rounded-br-full bottom-0 right-0"></div>
          )}

          {/* Bottom Left Quarter */}
          {step >= 3 && (
            <div className="absolute w-20 h-20 bg-green-700 rounded-bl-full bottom-0 left-0"></div>
          )}
        </div>

        {/* Optimizing AI text */}
        <p className="mt-6 font-opensans font-bold text-[24px] mb-10">
          Optimizing AI...
        </p>
      </div>
    </section>
  );
};

export default OptimizingAi;
