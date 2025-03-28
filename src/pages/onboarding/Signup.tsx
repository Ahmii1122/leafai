import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/image 63.png";
import img2 from "../../assets/Group 1000001747.png";

interface FormData {
  email: string;
  name: string;
  companyName: string;
  role: string;
  termsAccepted: boolean;
  pricingPlan: string;
}

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    companyName: "",
    role: "",
    termsAccepted: false,
    pricingPlan: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const getdata = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!formData.termsAccepted) {
      e.preventDefault();
      alert("Please accept the terms & conditions to proceed.");
      return;
    }

    e.preventDefault();
    const { email, name, companyName, role, termsAccepted } = formData;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        companyName,
        role,
        termsAccepted,
      }),
    };

    try {
      const res = await fetch(
        "https://leafai-e8118-default-rtdb.firebaseio.com/userData.json",
        options
      );

      if (res.ok) {
        const responseData = await res.json(); // Get Firebase-generated ID
        const userId = responseData.name; // Firebase returns the unique key under `.name`

        localStorage.setItem("userId", userId);
        alert("Data Saved");
        navigate("./selectplan");
      } else {
        alert("An Error occurred ");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <section className="max-w-contained mx-auto flex flex-col md:flex-row">
      {/* Left Section - Form */}
      <div className="w-full md:w-[55%] lg:w-1/2 mt-[146px] mb-[66px] flex flex-col justify-center px-[5%] md:px-10">
        <img className="w-fit" src={img} alt="Leaf ai logo" />
        <p className="font-opensans mt-[27px] font-semibold text-[24px]">
          Get started absolutely free Now
        </p>
        <p className="text-gray/50 mb-[66px]">
          Enter your credentials to create your account.
        </p>

        <form className="space-y-4 max-w-[90%] md:max-w-[480px]">
          <div>
            <label className="block pb-3 text-[16px] font-normal pl-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full font-opensans pr-4 font-light text-[14px] p-3 border rounded-md border-gray/30"
              placeholder="johnsnow00@company.com"
              required
            />
          </div>
          <div>
            <label className="block pb-3 text-[16px] font-normal pl-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full font-opensans pr-4 font-light text-[14px] p-3 border rounded-md border-gray/30"
              placeholder="John Snow"
              required
            />
          </div>
          <div>
            <label className="block pb-3 text-[16px] font-normal pl-1">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full font-opensans pr-4 font-light text-[14px] p-3 border border-gray/30 rounded-md"
              placeholder="John Enterprises"
              required
            />
          </div>
          <div>
            <label className="block pb-3 text-[16px] font-normal pl-1">
              Role
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full font-opensans pr-4 font-light text-[14px] p-3 border rounded-md border-gray/30"
              placeholder="Product Manager"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="h-4 w-4"
            />
            <span className="text-sm font-opensans font-normal">
              I agree to the terms & conditions
            </span>
          </div>

          <Link
            to={formData.termsAccepted ? "/selectplan" : "#"}
            onClick={getdata}
            className={`block text-center text-16px font-opensans font-normal text-nowrap p-4 px-[15%] rounded-md ${
              formData.termsAccepted
                ? "bg-primary-dark text-white"
                : "bg-primary/50 text-white cursor-not-allowed"
            }`}
          >
            Continue to plan selection
          </Link>
        </form>

        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <a href="#" className="font-bold">
            Sign in
          </a>
        </p>
      </div>

      {/* Right Section - Info & Graphics */}
      <div className="w-full md:w-[45%] lg:w-[50%] bg-light-primary/30 flex flex-col justify-center">
        <p className="font-roboto font-bold text-[36px] md:text-[50px] px-[5%] md:px-[60px] mt-[40px] md:mt-[106px] mb-3 text-center">
          The Easiest Way To Manage Your Work
        </p>
        <p className="font-opensans font-normal text-[#515151] text-[18px] md:text-[20px] text-center leading-7 px-[5%] md:px-[60px]">
          To begin your seamless search experience, we just need a few details
          from you.
        </p>
        <div className="pt-[80px] md:pt-[116px] pb-16 flex justify-center">
          <img className="w-[80%] md:w-auto" src={img2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Signup;
