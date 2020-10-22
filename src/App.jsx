import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./components/Index";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Educations from "./components/Educations";
import Contact from "./components/Contact";
import Instagram from "./components/Instagram";
import Cv from "./components/Cv";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Index}></Route>
        <Route exact path="/cv" component={Cv}></Route>
        <Route exact path="/educations" component={Educations}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/instagram" component={Instagram}></Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
