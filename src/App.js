import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntanRara from "./salespages/IntanRara";
import RoniEraWiguna from "./salespages/RoniEraWiguna";
import CandraAditya from "./salespages/CandraAditya";
import WulanCahyani from "./salespages/WulanCahyani";
import IkasaniBudiarti from "./salespages/IkasaniBudiarti";
import ZainalIlmi from "./salespages/ZainalIlmi";
import TaqwimEka from "./salespages/TaqwimEka";
import DanuSusanto from "./salespages/DanuSusanto";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="/danususanto" element={<DanuSusanto />} />
      <Route path="/ronierawiguna" element={<RoniEraWiguna />} />
      <Route path="/candraaditya" element={<CandraAditya />} />
      <Route path="/wulancahyani" element={<WulanCahyani />} />
      <Route path="/intanrara" element={<IntanRara />} />
      <Route path="/ikasanibudiarti" element={<IkasaniBudiarti />} />
      <Route path="/zainalilmi" element={<ZainalIlmi />} />
      <Route path="/taqwimeka" element={<TaqwimEka />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
