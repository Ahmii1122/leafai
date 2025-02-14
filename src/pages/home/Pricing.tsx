import { useState } from "react";
import { FiCheck } from "react-icons/fi";

const pricingOptions = {
  monthly: [
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
  ],
  yearly: [
    {
      id: 1,
      title: "Starter",
      price: "$490",
      features: [
        "Basic search functionality",
        "Up to 10,000 documents indexed",
        "5 user accounts",
      ],
    },
    {
      id: 2,
      title: "Professional",
      price: "$1990",
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
  ],
};

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="max-w-contained mx-auto mt-14 md:mt-[214px]">
      <div className="text-center p">
        <h2 className="text-[48px] font-outfit font-bold">Pricing Plans</h2>
        <p className="text-gray font-opensans font-normal text-[20px] max-w-[450px] mx-auto mt-2">
          Discover the power of intelligent search across your entire digital
          workspace.
        </p>
        <div className="mt-9 flex justify-center">
          <div className="bg-gray-200 p-1 border border-gray/30 bg-gray/10 rounded-full flex">
            <button
              className={`px-6 py-2 rounded-full font-semibold transition font-roboto ${
                billingCycle === "monthly"
                  ? "bg-white shadow   text-black"
                  : "text-gray "
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly billing
            </button>
            <button
              className={`px-6 py-2 rounded-full  font-semibold transition font-roboto ${
                billingCycle === "yearly"
                  ? "bg-white shadow   text-black"
                  : " text-gray/70"
              }`}
              onClick={() => setBillingCycle("yearly")}
            >
              Annual billing
            </button>
          </div>
        </div>
        <div className="mt-[70px] grid md:grid-cols-3 gap-6">
          {pricingOptions[billingCycle as keyof typeof pricingOptions].map(
            (plan) => (
              <div
                key={plan.id}
                className="p-6 rounded-lg shadow-[10px_20px_20px_#e8e9e8] bg-white flex flex-col h-full"
              >
                <p className="bg-primary/20 font-normal font-opensans text-primary mx-28  my-2 tex rounded-full ">
                  {plan.title}
                </p>
                <h3
                  className={`mt-4 font-bold ${
                    plan.price === "Custom pricing" ? "text-[32px]" : "text-4xl"
                  }`}
                >
                  {plan.price}
                  {plan.price !== "Custom pricing" && (
                    <span className="text-lg text-gray-500">
                      {billingCycle === "yearly" ? "/y" : "/m"}
                    </span>
                  )}
                </h3>
                <p className="text-gray-500 text-[17px] font-normal mt-2">
                  Up to 2 models free forever
                </p>
                <ul className="mt-7 mb-[15px] text-left text-gray-600 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FiCheck /> {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-4 rounded-lg ${
                    plan.title === "Professional"
                      ? "bg-primary-dark text-white"
                      : "border border-gray-400 text-black"
                  }`}
                >
                  Get started for free
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
