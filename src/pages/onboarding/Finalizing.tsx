import timer from "../../assets/timer.png";
import img from "../../assets/image 63.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Finalizing = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate("/finalpage");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="max-w-contained mx-auto flex flex-col-reverse md:flex-row">
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
      <div className="w-full md:w-1/2 bg-primary/10 ">
        {" "}
        <div className="flex flex-col items-center justify-center mt-10  md:mt-60">
          {loading && (
            <div className="relative w-40 h-40 flex items-center justify-center">
              <div className="w-24 h-24 bg-green-600 rounded-full animate-ping"></div>
              <div className="absolute w-32 h-32  rounded-full opacity-75"></div>
            </div>
          )}
          <p className=" flex items-center justify-center font-opensans mb-10  md:mt-20  font-bold text-[24px]">
            Finalizing setup...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Finalizing;
