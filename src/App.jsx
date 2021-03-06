import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar";
import Clients from "./pages/Clients";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Team from "./pages/Team";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
