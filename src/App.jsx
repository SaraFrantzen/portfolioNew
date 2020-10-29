import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./components/Index";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Educations from "./components/Educations";
import Contact from "./components/Contact";
import Instagram from "./components/Instagram";
import Cv from "./components/Cv";
import SingleInstagram from './components/SingleInstagram';

const App = () => {
  return (
    <>
   {/*  can import another component for loading instead of div */}
      <Suspense fallback={<div>Loading ...</div>}>
        <Header />
        <Switch>
          <Route exact path="/" component={Index}></Route>
          <Route exact path="/cv" component={Cv}></Route>
          <Route exact path="/educations" component={Educations}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/instagram" component={Instagram}></Route>
          <Route exact path="/instagram/:id" component={SingleInstagram}></Route>
        </Switch>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
