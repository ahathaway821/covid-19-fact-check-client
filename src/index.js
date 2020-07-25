import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";

// Import as a module in your JS
import 'react-bootstrap-typeahead/css/Typeahead.css';

// pages for this kit
import LandingPage from "components/LandingPage.js";
import About from "components/About.js";
import Contact from "components/Contact.js";
import Predict from "components/Predict.js";
import NoMatch from "components/NoMatch.js";
import Model from "components/Model.js";

ReactDOM.render(
  <React.Fragment>
      <BrowserRouter>
        <Switch>
						<Route exact path="/" component={LandingPage} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
						<Route path="/model" component={Model} />
						<Route path="/evaluate" component={Predict} />
						<Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
