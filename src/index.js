/*

=========================================================
* Now UI Kit React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
import LandingPage from "views/LandingPage.js";
import About from "components/About.js";
import Contact from "components/Contact.js";
import Predict from "components/Predict.js";
import Data from "components/Data.js";
import NoMatch from "components/NoMatch.js";
import Model from "components/Model.js";

ReactDOM.render(
  <React.Fragment>
      <BrowserRouter>
        <Switch>
						<Route exact path="/" component={LandingPage} />
						<Route path="/about" component={About} />
						<Route path="/data" component={Data} />
						<Route path="/contact" component={Contact} />
						<Route path="/model" component={Model} />
						<Route path="/evaluate" component={Predict} />
						<Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
  </React.Fragment>,
  // <BrowserRouter>
  //   <Switch>
  //     <Switch>
  //       <Route
  //         path="/home"
  //         render={(props) => <LandingPage {...props} />}
  //       />
  //       <Route
  //         path="/evaluate"
  //         render={(props) => <Predict {...props} />}
  //       />
  //       <Route
  //         path="/data"
  //         render={(props) => <Data {...props} />}
  //       />
  //       <Route
  //         path="/about"
  //         render={(props) => <About {...props} />}
  //       />
  //       <Route
  //         path="/contact"
  //         render={(props) => <Contact {...props} />}
  //       />
  //       {/* <Redirect to="/index" /> */}
  //       <Redirect from="/" to="/home" />
  //     </Switch>
  //   </Switch>
  // </BrowserRouter>,
  document.getElementById("root")
);
