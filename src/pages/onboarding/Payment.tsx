import { useNavigate } from "react-router-dom";
import img from "../../assets/image 63.png";
import { useEffect, useState } from "react";
import { FaUniversity } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";

interface Plan {
  id: number;
  title: string;
  price: string;
  features: string[];
}
const Payment = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedPlan = localStorage.getItem("selectedPlan");
    if (storedPlan) {
      setSelectedPlan(JSON.parse(storedPlan));
    } else {
      alert("No plan selected. Redirecting...");
      navigate("/select-plan"); // Redirect if no plan is selected
    }
  }, [navigate]);
  const [selectedOption, setSelectedOption] = useState<"card" | "bank" | null>(
    null
  );
  return (
    <section className="max-w-contained mx-auto ">
      <div className="flex  ">
        <div className="w-[50%] px-[5%]">
          <img src={img} alt="logo" />
          <p className="font-opensans font-semibold text-[24px]">
            Secure Checkout
          </p>
          <p className="font-opensans text-gray/50 font-normal text-[16px]">
            Complete your purchase safely with Stripe
          </p>
          <p className="font-opensans font-semibold text-[16px] mt-6 ">
            Your subscription
          </p>
          <div className="flex flex-col border border-gray/50 rounded-md ">
            <div className="flex justify-between pt-7 px-4 text-center ">
              <p className="font-opensans font-semibold text-[16px]  text-gray/35">
                {selectedPlan?.title}
              </p>
              <p className="font-opensans font-normal text-[16px] text-gray/50 pb-3">
                {selectedPlan?.price}/month
              </p>
            </div>
          </div>
          <div className="flex justify-between border-b border-x-[1px] border-gray/50 pt-3 px-4 pb-7 rounded-r-md">
            <p className="font-opensans font-semibold text-[16px]">Total</p>
            <p className="">{selectedPlan?.price}</p>
          </div>
          <div className="flex gap-4 mt-4">
            {/* Card Payment */}
            <button
              onClick={() => setSelectedOption("card")}
              className={`flex items-center gap-4 px-10 rounded-lg border py-3  ${
                selectedOption === "card"
                  ? "bg-primary/5 border-none"
                  : "border-gray/50"
              }`}
            >
              <FaCreditCard className="text-green-700" size={32} />
              Card Payment
            </button>

            {/* Bank Transfer */}
            <button
              onClick={() => setSelectedOption("bank")}
              className={`flex items-center gap-4 px-10 py-3 rounded-lg border ${
                selectedOption === "bank"
                  ? "bg-primary/5 border-none"
                  : "border-gray/50"
              }`}
            >
              <FaUniversity className="text-green-700" size={32} />
              Bank Transfer
            </button>
          </div>
          <form action="">
            <label className="block font-medium text-gray-700 pt-4">
              Card Number
            </label>
            <input
              type="text"
              className="w-full px-2 border  font-opensans font-light rounded mt-1 py-6"
              placeholder="1234 5678 9012 3456"
            />
          </form>
        </div>
        <div className="w-[50%] bg-primary/30">hello</div>
      </div>
    </section>
  );
};

export default Payment;
