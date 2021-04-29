import { Switch, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import StaticNavbar from "./Components/StaticNavbar";
import Navbar from "./Components/Navbar";
import ProductDetails from "./Pages/ProductDetails";
import EmptyStateDesktop from "./Pages/EmptyStateDesktop";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <StaticNavbar />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={ProductDetails} />
        <Route exact path="/empty" component={EmptyStateDesktop} />
        <Route exact path="/user:username" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
