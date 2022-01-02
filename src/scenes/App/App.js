import React, { Fragment, useState } from "react";
import { Routes, Navigate, Route, Link, useNavigate, useLocation } from 'react-router-dom';
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
  const navigate = useNavigate();
  const { hash } = useLocation();

  const renderApp = () => {
    return (
      <Fragment>
        <header>
          <h1 onClick={() => {
            navigate(startPage);
            if (hash !== '') window.scrollTo(0, 0);
          }}>
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
            <Routes>
              <Route path={startPage} element={<Content />} />

              {/* 404 -- Unknown Routes */}
              <Route element={<NotFound />} />
            </Routes>
          </div>
        </section>

        <footer>
          <Copyright name="Mikel Jagan" />
          <ToTop className="myTop" />
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