import bg from "../../assets/bg-hero.png";
import img1 from "../../assets/Group 427320841.png";
import img2 from "../../assets/1st.png";
import img3 from "../../assets/2nd.png";
import img4 from "../../assets/3rd.png";

const About = () => {
  return (
    <section className="max-w-contained mx-auto mt-10 md:mt-[254px] bg-[#F9FAF9] h-full">
      <div className="flex flex-col md:flex-row px-3 gap-10 md:gap-52">
        <h3 className="font-outfit font-bold text-[48px] text-nowrap">
          About Us
        </h3>
        <p className="text-[#6D6D6D] font-opensans font-semibold text-[18px] leading-[32px]">
          LeafAI Search sprouted from a simple idea: make enterprise knowledge
          as easy to find as a Google search. We're a team of A I enthusiasts,
          search experts, and UX designers on a mission to revolutionize how
          organizations discover and utilize their collective knowledge.
        </p>
      </div>
      <div className="mt-[72px] flex flex-col lg:flex-row  gap-[24px]">
        <img src={img1} alt="Software Support logo" className="h-1/2 p-2" />
        <div
          className="bg-cover  w-full border-none rounded-lg items-center overflow-hidden flex flex-col md:flex-row"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <img
            src={img2}
            alt=""
            className=" md:h-[275px] md:w-[275px] mx-[35px] "
          />
          <img
            src={img3}
            alt=""
            className="rotate-90 mt-3 md:rotate-0 lg:h-32 lg:w-full z-0 "
          />
          <img
            src={img4}
            alt=""
            className="w-16 h-16 mt-16 md:mt-4 lg:mt-0 lg:mr lg: lg:-ml-24 z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
