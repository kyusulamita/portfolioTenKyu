import { Route } from "react-router";
import React from "react";

import App from "./containers/App";

//Redux Smart
import AboutPage from "./containers/AboutPage";
import HomePage from "./containers/HomePage";

//Redux Dumb
import PortfolioPage from "./components/Portfolio";
import ProjectPortfolioPage from "./components/projectPortfolio";

import error404 from "./components/404";

export default (
  <Route name="app" path="/" component={App}>
      <Route path="home" component={HomePage} />
      <Route path="experience" component={PortfolioPage} />
      <Route path="projects" component={ProjectPortfolioPage} />
      <Route path="about" component={AboutPage} />
      <Route path="*" component={error404}/>
  </Route>
);
