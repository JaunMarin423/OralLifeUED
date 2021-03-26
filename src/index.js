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
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.jsx";
import LandingPage from "views/examples/LandingPage.jsx";
import ProfilePage from "views/examples/ProfilePage.jsx";
import EsteticaDental from "views/examples/EsteticaDental.jsx";
import Ortodoncia from "views/examples/Ortodoncia.jsx";
import CirugiaOral from "views/examples/CirugiaOral.jsx";
import ImplantesDental from "views/examples/ImplantesDental.jsx";
import MoreTreatments from "views/examples/MoreTreatments.jsx";



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/more-treatments"
          render={(props) => <MoreTreatments {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/ortodoncia"
          render={(props) => <Ortodoncia {...props} />}
        />
        <Route
          path="/cirugia-oral"
          render={(props) => <CirugiaOral {...props} />}
        />
        <Route
          path="/implantes-dental"
          render={(props) => <ImplantesDental {...props} />}
        />
        <Route
          path="/estetica-dental"
          render={(props) => <EsteticaDental {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/login-page"
          render={(props) => <LoginPage {...props} />}
        />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
