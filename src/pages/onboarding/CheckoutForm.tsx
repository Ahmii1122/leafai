import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate(); // ✅ Initialize navigate function

  const [message, setMessage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/datasource`,
      },
    });

    if (result.error) {
      setMessage(result.error.message ?? "Unknown error occurred");
    } else if (
      "paymentIntent" in result &&
      result.paymentIntent === "succeeded"
    ) {
      // ✅ Safe check for `paymentIntent`
      console.log("✅ Payment successful:", result.paymentIntent);
      navigate("/DataSource"); // 🔥 Redirect to DataSource page
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" className="mb-8" />
      <button disabled={isProcessing || !stripe || !elements} id="submit">
        <span
          id="button-text "
          className="border py-4 px-[125px] bg-primary-dark text-white rounded-md text-nowrap mt-14"
        >
          {isProcessing ? "Processing ... " : "Complete Purchase"}
        </span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
