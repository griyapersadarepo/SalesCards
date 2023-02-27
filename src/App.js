import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntanRara from "./salespages/IntanRara";
import RoniEraWiguna from "./salespages/RoniEraWiguna";
import CandraAditya from "./salespages/CandraAditya";
import WulanCahyani from "./salespages/WulanCahyani";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="/ronierawiguna" element={<RoniEraWiguna />} />
      <Route path="/candraaditya" element={<CandraAditya />} />
      <Route path="/wulancahyani" element={<WulanCahyani />} />
      <Route path="/intanrara" element={<IntanRara />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
