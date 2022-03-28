import React, { Fragment } from "react";
import { codeSnippet } from 'helpers/utilityHelpers';
import Banner from 'components/Banner/Banner';
import colors from 'theme/colors.scss';

const GettingStarted = props => {
  return (
    <section id="getting-started">
      <p>
        <Banner center noClose round>
          <i className="fa-solid fa-exclamation-triangle" style={{ color: colors.yellow }} />&nbsp;
          <strong>Package not published yet...</strong><br />
          Undergoing production tests and refinements. Please check back soon.
        </Banner>
      </p>

      <h2>Getting Started</h2>

      <h3>Installation and Use</h3>

      <div>
        {codeSnippet("npm i xerum")} &nbsp;&nbsp;or &nbsp;
        {codeSnippet("yarn add xerum")}
      </div>

      <br />

      <div>
        <p>
          Then destructure the component in the file using <i>import</i> &mdash; example:&nbsp;
        </p>

        {codeSnippet("import { Button } from 'xerum';")}
      </div>

      <p />

      This library has the following peer dependencies:
      <ul style={{ listStyle: "unset", margin: "revert", padding: "revert" }}>
        <li>
          <strong>@fortawesome/fontawesome-free (v6+)</strong>
        </li>
        <li>
          <strong>formik (v2+)</strong>
        </li>
        <li>
          <strong>GSAP (v3+)</strong>
        </li>
        <li>
          <strong>lodash (v4+)</strong>
        </li>
        <li>
          <strong>moment (v2+)</strong>
        </li>
        <li>
          <strong>react-beautiful-dnd (v13+)</strong>
        </li>
      </ul>

      <p>
        <strong>Note</strong>: Unless noted otherwise, you can pass standard attributes as you&nbsp;
        would with any element or React component &mdash; for example: <i>disabled</i>,&nbsp;
        <i>target</i>, <i>style</i>, <i>className</i> etc.
      </p>

      <br />
    </section>
  );
};

export default GettingStarted;