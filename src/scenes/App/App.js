import React, { Fragment, useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { resetPage } from 'helpers/utilityHelpers';
import { useDispatch } from 'helpers/stateHelpers';
import appActions from 'modules/app/appActions';
import Content from 'scenes/Content/Content';
import navigation from "./navigation";
import ToTop from "components/ToTop/ToTop";
import Copyright from "components/Copyright/Copyright";
import NotFound from 'components/NotFound/NotFound';
import Menu from "components/Menu/Menu";
import Social from 'components/Social/Social';
import AuthRoute from 'components/AuthRoute/AuthRoute';
import Filter from 'components/Filter/Filter';
import "./App.scss";

const socialNetworks = [
  { path: "https://npmjs.com/package/xerum", icon: "fa-brands fa-npm" },
  { path: "https://github.com/mikelmnj/xerum", icon: "fa-brands fa-github" },
];
const data = { components: navigation };

const MyApp = props => {
  const [ navOpen, setNavOpen ] = useState(false);
  const dispatch = useDispatch();

  const setFilterResults = payload => dispatch(appActions.setFilterResults(payload));
  const mobileNavClasses = `fa-solid fa-${navOpen ? "times" : "bars"}`;
  const navigate = useNavigate();

  const renderApp = () => {
    return (
      <Fragment>
        <header>
          <h1 onClick={() => resetPage(navigate)}>
            Xerum
            <Social networks={socialNetworks} />
          </h1>

          <div id="headerBar">
            <div className="barText">
              <i className={mobileNavClasses} onClick={() => setNavOpen(!navOpen)} />

              <div>
                <p className="subTitle">React component library</p>
                <p>For React v16.8+</p>
              </div>
            </div>

            <Filter
              className="filterCustom"
              data={data}
              placeholder="Filter components..."
              include={[ "components.name", "components.subMenu.name" ]}
              callback={newData => setFilterResults(newData)}
            />
          </div>
        </header>

        <section id="main" className={navOpen ? "menuIsOpen" : ""}>
          <Menu
            className={`custom scrollbar ${navOpen ? "open" : ""}`}
            links={navigation}
          />

          <div>
            <Routes>
              <Route path="/login" element={<p>Log in</p>} />

              <Route element={<AuthRoute auth={true} />}>
                <Route path={'/'} element={<Content />} />
              </Route>

              {/* 404 -- Unknown Routes */}
              <Route element={<NotFound />} />
            </Routes>
          </div>
        </section>

        <footer>
          <Copyright name="Mikel Jagan" />
          <ToTop />
        </footer>
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