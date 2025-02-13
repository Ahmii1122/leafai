import bg from "../../assets/bg-hero.png";
import img1 from "../../assets/fi_18052141.png";
import xml from "../../assets/xml.png";
import txt from "../../assets/txt.png";
import ppt from "../../assets/ppt.png";
import pdf from "../../assets/pdf.png";
import docs from "../../assets/docs.png";
import xls from "../../assets/excel.png";

const HeroSection = () => {
  return (
    <section className="mx-auto mt-[56px] max-w-contained">
      <div
        className="relative bg-cover bg-center bg-no-repeat mt-[144px] border-none rounded-xl max-w-contained mx-auto px-6 py-12"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Badge Section */}
        <div className="flex items-center justify-center mt-[69px] bg-white border border-green-light rounded-full mx-[25%] md:mx-[28%] lg:mx-[23%] z-10 relative">
          <img src={img1} alt="" className="text-center ml-1 lg:mr-3" />
          <p className="font-opensans text-center leading-8 font-normal text-wrap lg:text-nowrap text-[12px] mr-2 lg:text-[16px]">
            AI-Powered Enterprise Search for Seamless Information Discovery
          </p>
        </div>

        {/* Heading */}
        <div className="flex items-center justify-between text-center mt-[15px] lg:mx-[17%] relative z-10">
          <p className="font-overlock font-black leading-[80px] text-[60px]">
            Unlock Your Organization's Knowledge with{" "}
            <span className="text-primary"> LeafAI</span> Search
          </p>
        </div>

        {/* Paragraph */}
        <div className="flex text-center mt-[12px] items-center justify-between mx-[21%] relative z-10">
          <p className="font-opensans font-normal items-center justify-center text-center text-gray text-[20px] leading-[32px]">
            Discover the power of intelligent search across your entire digital
            workspace. LeafAI Search connects Confluence, SharePoint, and all
            your documents into one intuitive platform.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-[24px] pt-[23px] py-[95px] relative z-10">
          <button className="py-3 px-5 bg-primary rounded-md text-white font-bold font-opensans">
            Get Started
          </button>
          <button className="py-3 px-5 bg-transparent border font-bold font-opensans text-primary border-primary rounded-md">
            See Demo
          </button>
        </div>

        {/* Logos */}
        <div className="">
          <img
            src={xml}
            alt=""
            className="absolute top-[10%] md:left-44 z-0 left-[6%] "
          />
          <img src={txt} alt="" className="absolute top-[42%] left-[5%] z-0" />
          <img
            src={ppt}
            alt=""
            className="absolute bottom-[17%] left-[13%] z-0"
          />
          <img
            src={pdf}
            alt=""
            className="absolute top-[10%] right-[10%] z-0"
          />
          <img
            src={docs}
            alt=""
            className="absolute top-[43%] right-[5%] z-0"
          />
          <img
            src={xls}
            alt=""
            className="absolute bottom-[17%] right-[10%] z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
