import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/onboarding/Signup";
import SelectPlan from "./pages/onboarding/SelectPlan";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/selectplan" element={<SelectPlan />} />
      </Routes>
    </Router>
  );
}

export default App;
