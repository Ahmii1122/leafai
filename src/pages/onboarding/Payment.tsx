import { useEffect, useState } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import img2 from "../../assets/Group 1000001747.png";
import img from "../../assets/image 63.png";
import { useNavigate } from "react-router-dom";

interface Plan {
  id: number;
  planTitle: string;
  planPrice: string; // Plan price comes as a string (e.g., "$49")
}

const Payment = () => {
  const navigate = useNavigate();
  const [stripepromise, setStripePromise] =
    useState<Promise<Stripe | null> | null>(null);
  const [clientSecret, setClientSecret] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  useEffect(() => {
    fetch("http://localhost:5252/config")
      .then(async (r) => {
        if (!r.ok) throw new Error(`Failed to fetch config: ${r.status}`);
        const data = await r.json();
        console.log("🛠 Received publishableKey:", data); // ✅ Debugging log
        setStripePromise(loadStripe(data.publishableKey));
      })
      .catch((error) =>
        console.error("❌ Error fetching publishableKey:", error)
      );
  }, []);

  useEffect(() => {
    const fetchPlan = async () => {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        console.warn("⚠️ No userId found, redirecting...");
        return navigate("/select-plan");
      }

      try {
        const url = `https://leafai-e8118-default-rtdb.firebaseio.com/userData/${userId}/paymentData.json`;
        console.log("🛠 Fetching from:", url); // ✅ Log URL

        const res = await fetch(url);
        if (!res.ok)
          throw new Error(`Failed to fetch payment plan: ${res.status}`);

        const data = await res.json();
        if (!data || Object.keys(data).length === 0) {
          console.warn("⚠️ No payment data found, redirecting...");
          return navigate("/select-plan");
        }

        const lastPlan = Object.values(data).pop() as Plan;
        console.log("🛠 Extracted plan:", lastPlan); // ✅ Log extracted plan
        setSelectedPlan(lastPlan);
      } catch (error) {
        console.error("❌ Error fetching payment plan:", error);
        navigate("/select-plan");
      }
    };

    fetchPlan();
  }, [navigate]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!selectedPlan) return;

    // 🔹 Convert price to cents
    const priceInCents =
      parseInt(selectedPlan.planPrice.replace(/[^0-9]/g, "")) * 100;

    console.log("🛠 Sending payment intent request with:", {
      userId,
      amount: priceInCents,
    });

    fetch("http://localhost:5252/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, amount: priceInCents }), // ✅ Send userId & amount
    })
      .then(async (r) => {
        if (!r.ok) {
          const errorData = await r.json();
          throw new Error(
            errorData.error?.message || "Failed to fetch payment intent"
          );
        }
        return r.json();
      })
      .then(({ clientSecret }) => {
        setClientSecret(clientSecret);
      })
      .catch((error) =>
        console.error("❌ Error creating payment intent:", error)
      );
  }, [selectedPlan]);

  return (
    <section className="max-w-contained mx-auto flex flex-col md:flex-row">
      <div className="w-full md:w-[50%] pb-4 p-2 md:px-4 lg:px-28">
        <img className="pt-24" src={img} alt="Checkout" />
        <p className="font-opensans font-semibold text-[24px] pt-8">
          Secure Checkout
        </p>
        <p className="font-opensans font-normal text-[16px] text-gray/50 pt-1">
          Complete your purchase safely with Stripe
        </p>
        <p className="font-opensans font-semibold text-[16px] pt-6 pb-2">
          Your subscription
        </p>
        <div className="border border-gray/50 rounded-md w-full max-w-sm p-4 mb-4 ">
          <div className="text-gray/50 flex border-b pb-2 items-center border-gray/50 justify-between pt-3">
            <p className="font-opensans font-semibold text-[16px]">
              {selectedPlan?.planTitle}{" "}
            </p>
            <p>{selectedPlan?.planPrice}</p>
          </div>
          <div className="flex justify-between pt-2">
            <p>Total</p>
            <p>{selectedPlan?.planPrice}</p>
          </div>
        </div>
        <div className="lg:w-full md:w-[80%]">
          {stripepromise && clientSecret ? (
            <Elements
              stripe={stripepromise}
              options={{
                clientSecret,
                appearance: { theme: "stripe" },
              }}
            >
              <CheckoutForm />
            </Elements>
          ) : (
            <p>⚠️ Waiting for Stripe setup...</p>
          )}
        </div>
      </div>
      <div className="w-full md:w-[45%] lg:w-[50%] bg-light-primary/30 flex flex-col justify-center">
        <p className="font-roboto font-bold text-[36px] md:text-[50px] px-[5%] md:px-[60px] mt-[40px] md:mt-[106px] mb-3 text-center">
          The Easiest Way To Manage Your Work
        </p>
        <p className="font-opensans font-normal text-[#515151] text-[18px] md:text-[20px] text-center leading-7 px-[5%] md:px-[60px]">
          To begin your seamless search experience, we just need a few details
          from you.
        </p>
        <div className="pt-[80px] md:pt-[116px] pb-16 flex justify-center">
          <img className="w-screen md:w-auto" src={img2} alt="Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Payment;
