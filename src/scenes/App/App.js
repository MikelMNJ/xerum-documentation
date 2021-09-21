import React, { Fragment } from "react";
import { Switch, Redirect, Route, Link, useHistory } from 'react-router-dom';
import Content from 'scenes/Content/Content';
import navigation from "./navigation";
import FieldReqs from "components/FieldReqs/FieldReqs";
import ProgressBar from "components/ProgressBar/ProgressBar";
import ToTop from "components/ToTop/ToTop";
import Copyright from "components/Copyright/Copyright";
import NotFound from 'scenes/NotFound/NotFound';
import Nav from "components/Nav/Nav";
import Social from 'components/Social/Social';
import colors from 'theme/colors.scss';
import "./App.scss";

const startPage = '/';

const MyApp = props => {
  const history = useHistory();

  const renderApp = () => {
    return (
      <Fragment>
        <header>
          <h1 onClick={() => history.push(startPage)}>
            Xerum
            <Social />
          </h1>

          <div id="headerBar">
            <p className="subTitle">React component library</p>
            <p>For React v16.8+</p>
          </div>
        </header>

        <section id="main">
          <Nav className="parent" links={navigation} />

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