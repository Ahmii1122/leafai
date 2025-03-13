import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/onboarding/Signup";
import SelectPlan from "./pages/onboarding/SelectPlan";
import Payment from "./pages/onboarding/Payment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/selectplan" element={<SelectPlan />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
