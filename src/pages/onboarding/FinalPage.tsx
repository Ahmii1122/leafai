import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/Group 1000001772.png";

// Define TypeScript interfaces for expected data
interface UserData {
  email: string;
}

interface PaymentData {
  planTitle?: string;
}

interface DataSource {
  dataSource?: string;
}

const FinalPage = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [paymentData, setPaymentData] = useState<PaymentData>({});
  const [dataSource, setDataSource] = useState<DataSource>({});
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId"); // Get saved userId

    if (!userId) {
      navigate("/"); // Redirect if no user ID found
      return;
    }

    const fetchUserData = async () => {
      try {
        const res = await fetch(
          `https://leafai-e8118-default-rtdb.firebaseio.com/userData/${userId}.json`
        );

        if (res.ok) {
          const data: {
            email?: string;
            paymentData?: Record<string, PaymentData> | undefined;
            selectedDataSource?: Record<string, DataSource> | undefined;
          } = await res.json();

          setUserData({ email: data.email || "N/A" }); // Ensure email exists

          // ✅ Check if paymentData exists before accessing keys
          let selectedPayment: PaymentData = {};
          if (data.paymentData && Object.keys(data.paymentData).length > 0) {
            const paymentKey = Object.keys(data.paymentData)[0];
            selectedPayment = data.paymentData[paymentKey];
          }

          // ✅ Check if selectedDataSource exists before accessing keys
          let selectedSource: DataSource = {};
          if (
            data.selectedDataSource &&
            Object.keys(data.selectedDataSource).length > 0
          ) {
            const dataSourceKey = Object.keys(data.selectedDataSource)[0];
            selectedSource = data.selectedDataSource[dataSourceKey];
          }

          setPaymentData(selectedPayment);
          setDataSource(selectedSource);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <section>
      <div className="bg-primary/20">
        <div className="flex flex-col items-center justify-center pt-[74px]">
          <img src={img} alt="" className="w-28 h-28" />
          <p className="font-roboto font-semibold text-[40px]">
            You’re all set!
          </p>
          <p className="font-opensans font-normal text-xl max-w-[500px] text-gray/50 text-center mb-[55px]">
            Your Enterprise Search Bot is ready to revolutionize how you find
            information.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-[68px]">
        <p className="font-opensans font-semibold text-[30px] max-w-[700px] text-center">
          Congratulations! We've successfully set up your Account and indexed
          your data.
        </p>

        {/* Display user, payment, and data source details */}
        <div className="mt-5 bg-gray/20 py-5 shadow-md px-12 w-[500px] text-start">
          {userData ? (
            <>
              <p className="text-lg font-semibold font-opensans">
                Account Email:{" "}
                <span className="font-normal"> {userData.email}</span>
              </p>
              <p className="text-lg font-semibold font-opensans">
                Selected Plan:{" "}
                <span className="font-normal">
                  {paymentData.planTitle || "N/A"}
                </span>
              </p>
              <p className="text-lg font-semibold font-opensans">
                Data Source:{" "}
                <span className="font-normal">
                  {dataSource.dataSource || "N/A"}
                </span>
              </p>
            </>
          ) : (
            <p className="text-lg text-gray-500">Loading user data...</p>
          )}
        </div>

        <p className="font-opensans font-semibold text-xl mt-[35px]">
          What’s next:
        </p>
        <p className="max-w-[500px] text-center text-gray/50 font-opensans font-normal text-[14px] leading-6 mt-2">
          Explore your new search capabilities, Invite team members to
          collaborate, Customize your search preferences, Schedule a free
          onboarding call with our support team
        </p>
        <button className="font-opensans font-semibold text-base text-white mt-9 bg-primary py-4 px-14 rounded-lg mb-10">
          Go to dashboard
        </button>
      </div>
    </section>
  );
};

export default FinalPage;
