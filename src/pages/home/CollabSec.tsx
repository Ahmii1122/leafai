import bg from "../../assets/bg-hero.png";

const CollabSec = () => {
  return (
    <section className="max-w-contained mx-auto">
      <div
        className="relative flex flex-col md:flex-row bg-cover bg-center mb-10 bg-no-repeat mt-[157px] border-none rounded-xl max-w-contained mx-auto px-6 py-24"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="px-[54px]  ">
          <h1 className="font-outfit   justify-between text-center leading-tight md:text-start font-bold text-[48px]">
            Let’s Collaborate With Us
          </h1>
          <p className="font-opensans font-normal text-[30px] leading-tight px- text-center md:text-start mt-4">
            Ready to revolutionize your organization's search experience?
          </p>
        </div>
        <div className="flex flex-row justify-between items-center gap-[24px] mt-6">
          <button className="px-5 font-opensans font-bold py-3 border-none  rounded-lg text-white text-nowrap bg-primary">
            Book a Demo
          </button>
          <button className="px-5 py-3 md:mr-[54px] border font-bold border-primary rounded-lg text-nowrap text-primary bg-transparent">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollabSec;
