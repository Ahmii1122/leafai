import timer from "../../assets/timer.png";
import img from "../../assets/image 63.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BuildingSearch = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          navigate("/optimizingai");
          return 100;
        }
        return prev + 5;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [navigate]);

  const getFillColor = () => {
    if (progress < 33) return "#86efac"; // Light Green
    if (progress < 66) return "#22c55e"; // Medium Green
    return "#166534"; // Dark Green
  };

  return (
    <section className="flex flex-col-reverse md:flex-row">
      <div className="w-full md:w-[50%] px-3 md:px-16">
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
        <div className="flex md:max-w-[510px] justify-between border mt-10 md:mt-60 mb-14 border-white bg-primary/10 gap-2">
          <img src={timer} alt="" className="pl-3 py-1" />
          <p className=" mt-3 px-1 items-center text-justify text-[13px] font-semibold font-opensans text-primary">
            This may take a few minutes depending on the volume of your data.
            Thank you for your patience.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-green-100">
        <div className="flex flex-col items-center justify-center mt-10 mb-10">
          <svg
            width="150"
            height="150"
            viewBox="0 0 120 120"
            className="fill-green-100"
          >
            {/* Background Circle */}
            <circle cx="60" cy="60" r="50" fill={getFillColor()} />

            {/* Filling Circle */}
            <circle
              cx="60"
              cy="60"
              r="50"
              fill=""
              clipPath="url(#circleClip)"
            />

            {/* Clip Path to Fill Inwards */}
            <defs>
              <clipPath id="circleClip">
                <circle cx="60" cy="60" r={50 - progress / 2} />
              </clipPath>
            </defs>
          </svg>
          <p className=" mt-5font-opensans font-bold text-[24px]">
            Building Search Index...
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuildingSearch;
