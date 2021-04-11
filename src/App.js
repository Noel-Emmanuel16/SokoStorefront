import { Switch, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import StaticNavbar from "./Components/StaticNavbar";
import Navbar from "./Components/Navbar";
import ProductDetails from "./Pages/ProductDetails"

function App() {
  return (
    <div className="App">
      <StaticNavbar />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product?query=woodbench" component={ProductDetails} />
      </Switch>
    </div>
  );
}

export default App;
