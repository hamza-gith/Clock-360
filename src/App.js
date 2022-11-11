import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routeone from "./components/routes/Route";
// import LandingPage from "./landingpage/LandingPage";
// import MainStake from "./components/mainstake/MainStake"

function App() {
  return (
    <BrowserRouter>
      <Routeone />
    </BrowserRouter>
  );
}

export default App; 
 