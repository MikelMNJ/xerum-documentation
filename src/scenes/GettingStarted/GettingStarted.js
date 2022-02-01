import React from "react";
import { codeSnippet } from 'helpers/utilityHelpers';

const GettingStarted = props => {
  return (
    <section id="getting-started">
      <h2>Getting Started</h2>

      <p>
        <i className="fa-solid fa-exclamation-triangle" />&nbsp;
        Package is still a work in progress and has not yet been published.
      </p>

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

      <p>
        This library has the following peer dependencies:
        <ul style={{ listStyle: "unset", margin: "revert", padding: "revert" }}>
          <li>
            <strong>@fortawesome/fontawesome-free (v6+)</strong>
          </li>
          <li>
            <strong>formik (v2+)</strong>
          </li>
          <li>
            <strong>lodash (v4+)</strong>
          </li>
          <li>
            <strong>moment (v2+)</strong>
          </li>
          <li>
            <strong>axios</strong>
          </li>
        </ul>
      </p>

      <p>
        <strong>Note</strong>: Unless noted otherwise, you can pass standard attributes as you&nbsp;
        would with any element or React component &mdash; for example: <i>disabled</i>, <i>target</i>,
        <i>style</i>, <i>className</i> etc.
      </p>

      <br />
    </section>
  );
};

export default GettingStarted;