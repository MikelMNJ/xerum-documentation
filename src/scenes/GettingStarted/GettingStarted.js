import React from "react";
import { myCode } from 'helpers/utilityHelpers';

const GettingStarted = props => {
  return (
    <section id="getting-started">
      <h2>Getting Started</h2>
      <h3>Installation and Use</h3>

      <div>
        {myCode("npm i xerum")} &nbsp;&nbsp;or &nbsp;
        {myCode("yarn add xerum")}
      </div>

      <br />

      <div>
        <p>
          Then destructure the component in the file using <i>import</i> &mdash; example:&nbsp;
        </p>

        {myCode("import { Button } from 'xerum';")}
      </div>

      <br />

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