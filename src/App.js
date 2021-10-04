import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import NotFound from "./Components/NotFound/NotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Category from "./Components/Category/Category";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/category">
            <Category></Category>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
