import { useState, useEffect } from "react";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

interface Plan {
  id: number;
  title: string;
  price: string;
  features: string[];
}

const PricingPlans: Plan[] = [
  {
    id: 1,
    title: "Starter",
    price: "$49",
    features: [
      "Basic search functionality",
      "Up to 10,000 documents indexed",
      "5 user accounts",
    ],
  },
  {
    id: 2,
    title: "Professional",
    price: "$199",
    features: [
      "Advanced search algorithms",
      "Up to 100,000 documents indexed",
      "50 user accounts",
      "Custom data connectors",
    ],
  },
  {
    id: 3,
    title: "Enterprise",
    price: "Custom pricing",
    features: [
      "AI-powered predictive search",
      "Unlimited document indexing",
      "Unlimited user accounts",
      "Dedicated support team",
      "Custom integration solutions",
    ],
  },
];

const SelectPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  // Load selected plan from localStorage on page load
  useEffect(() => {
    const storedPlan = localStorage.getItem("selectedPlan");
    if (storedPlan) {
      setSelectedPlan(JSON.parse(storedPlan));
    }
  }, []);

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
    localStorage.setItem("selectedPlan", JSON.stringify(plan));
  };

  return (
    <section className="max-w-contained mx-auto bg-light-primary/30 pt-4">
      <p className="font-roboto font-bold text-[40px] text-center mb-[17px] px-8">
        Select Your Ideal Plan
      </p>
      <p className="font-opensans font-normal text-[18px] text-center text-gray/50 px-8">
        Choose the offering that best fits your organization's needs
      </p>
      <div className="mt-[70px] grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {PricingPlans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => handlePlanSelect(plan)}
            className={`p-6 rounded-lg shadow-[10px_20px_20px_#e8e9e8] bg-white flex flex-col cursor-pointer border ${
              selectedPlan?.id === plan.id
                ? "border-green-500"
                : "border-transparent"
            }`}
          >
            <p className="bg-primary/20 text-primary font-normal font-opensans text-center rounded-full inline-block px-4 py-1">
              {plan.title}
            </p>
            <h3
              className={`mt-4 font-bold text-center ${
                plan.price === "Custom pricing" ? "text-[32px]" : "text-4xl"
              }`}
            >
              {plan.price}
              {plan.price !== "Custom pricing" && (
                <span className="text-lg text-gray-500">/m</span>
              )}
            </h3>
            <ul className="mt-7 mb-[15px] text-left text-gray-600 flex-grow">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FiCheck /> {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-8 w-full py-4 rounded-lg flex justify-center items-center gap-2 ${
                selectedPlan?.id === plan.id
                  ? "bg-green-500 text-white"
                  : "border border-gray-400 text-black"
              }`}
            >
              {selectedPlan?.id === plan.id && <FiCheck />} Get started for free
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-end p-6">
        {selectedPlan ? (
          <Link to="/payment">
            <button className="font-opensans bg-primary-dark rounded-md mb-36 mt-16 text-white font-semibold text-[16px] px-12 py-4">
              Proceed to payment
            </button>
          </Link>
        ) : (
          <button
            onClick={() => alert("Please select a plan to continue")}
            className="font-opensans bg-primary-dark rounded-md mb-36 mt-16 text-white font-semibold text-[16px] px-12 py-4"
          >
            Proceed to payment
          </button>
        )}
      </div>
    </section>
  );
};

export default SelectPlan;
