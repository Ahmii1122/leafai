import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/onboarding/Signup";
import SelectPlan from "./pages/onboarding/SelectPlan";
import Payment from "./pages/onboarding/Payment";
import DataSource from "./pages/onboarding/DataSource";
import Connecting from "./pages/onboarding/Connecting";
import DocsScan from "./pages/onboarding/DocsScan";
import BuildingSearch from "./pages/onboarding/BuildingSearch";
import OptimizingAi from "./pages/onboarding/OptimizingAi";
import Finalizing from "./pages/onboarding/Finalizing";
import FinalPage from "./pages/onboarding/FinalPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/selectplan" element={<SelectPlan />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/datasource" element={<DataSource />} />
        <Route path="/connecting" element={<Connecting />} />
        <Route path="/docsscan" element={<DocsScan />} />
        <Route path="/buildingsearch" element={<BuildingSearch />} />
        <Route path="/optimizingai" element={<OptimizingAi />} />
        <Route path="/finalizing" element={<Finalizing />} />
        <Route path="/finalpage" element={<FinalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
