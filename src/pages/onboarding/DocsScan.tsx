import timer from "../../assets/timer.png";
import img from "../../assets/image 63.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const DocsScan = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/buildingsearch");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="max-w-contained mx-auto flex flex-col-reverse md:flex-row">
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
        <div className="flex md:max-w-[510px] justify-between border mt-60 mb-14 border-white bg-primary/10 gap-2">
          <img src={timer} alt="" className="pl-3 py-1" />
          <p className=" mt-3 px-1 items-center text-justify text-[13px] font-semibold font-opensans text-primary">
            This may take a few minutes depending on the volume of your data.
            Thank you for your patience.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-primary/20 bg-cover ">
        <div className="   flex   items-center justify-center  ">
          <div className="relative w-32 h-32 mt-11 md:mt-[316px] flex items-center justify-center">
            {/* Rotating Circle with the same thickness as dots */}
            <div className="w-full h-full border-[16px] border-green-700 border-t-transparent rounded-full animate-spin-slow"></div>

            {/* Dots Rotating Along the Circle */}
            <div className="absolute w-full h-full animate-spin-fast">
              <div className="absolute w-6 h-4 bg-green-700 rounded-md top-0 left-[50%] transform -translate-x-1/2"></div>
              <div className="absolute w-6 h-4 bg-green-700 rounded-md bottom-0 left-[50%] transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
        <p className=" flex justify-center mb-5 mt-10 font-opensans font-bold text-[24px] items-center">
          Scanning Documents...
        </p>
      </div>
    </section>
  );
};

export default DocsScan;
