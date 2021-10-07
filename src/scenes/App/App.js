import React, { Fragment, useState } from "react";
import { Switch, Redirect, Route, Link, useHistory } from 'react-router-dom';
import Content from 'scenes/Content/Content';
import navigation from "./navigation";
import FieldReqs from "components/FieldReqs/FieldReqs";
import ProgressBar from "components/ProgressBar/ProgressBar";
import ToTop from "components/ToTop/ToTop";
import Copyright from "components/Copyright/Copyright";
import NotFound from 'components/NotFound/NotFound';
import Nav from "components/Nav/Nav";
import Social from 'components/Social/Social';
import colors from 'theme/colors.scss';
import "./App.scss";

const startPage = '/';
const socialNetworks = [
  { path: "https://npmjs.org", icon: "fab fa-npm" },
  { path: "https://github.com/mikelmnj/xerum", icon: "fab fa-github" },
];

const MyApp = props => {
  const [ navOpen, setNavOpen ] = useState(false);
  const history = useHistory();

  const renderApp = () => {
    return (
      <Fragment>
        <header>
          <h1 onClick={() => history.push(startPage)}>
            Xerum
            <Social networks={socialNetworks} />
          </h1>

          <div id="headerBar">
            <div className="barText">
              <i
                className={`fas fa-${navOpen ? "times" : "bars"}`}
                onClick={() => setNavOpen(!navOpen)}
              />

              <div>
                <p className="subTitle">React component library</p>
                <p>For React v16.8+</p>
              </div>
            </div>

            <input type="text" placeholder="Filter components..." />
          </div>
        </header>

        <section id="main" className={navOpen ? "menuIsOpen" : ""}>
          <Nav className={`customNav ${navOpen ? "open" : ""}`} links={navigation} />

          <div>
            <Switch>
              <Route exact path={startPage} component={Content} />

              {/* Redirect */}
              {/* <Redirect exact path='/' to={startPage} /> */}

              {/* 404 -- Unknown Routes */}
              <Route component={NotFound} />
            </Switch>
          </div>
        </section>

        <footer>
          <Copyright name="Mikel Jagan" />
          <ToTop />
        </footer>
        {/* <h1>Components</h1>

        <h3>Field Requirements</h3>
        <FieldReqs value="bench32Knife" />

        <h3>Progress Bar</h3>
        <ProgressBar progress={33} styles={{ width: "20rem" }} />
        */}
      </Fragment>
    );
  };

  return (
    <div id="app">
      {renderApp()}
    </div>
  );
};

export default MyApp;