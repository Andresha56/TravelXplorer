
import "./style.scss"
import Home from "./components/Routes/Home/Home";
import {Route,Routes} from "react-router-dom";
import DiverseDestination from "./components/WhyUs/DiverseDestination";
import Service from "./components/WhyUs/Service";
import Guide from "./components/WhyUs/Guide";




function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={   <Home/>}></Route>
    <Route path="/" element={<DiverseDestination/>}></Route>
    <Route path="guide" element={<Guide/>}></Route>
    <Route path="service" element={<Service/>}></Route>
    
      
     </Routes>
    </>
  );
}

export default App;


