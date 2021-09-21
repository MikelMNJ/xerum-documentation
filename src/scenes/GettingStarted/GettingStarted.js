import React from "react";

const GettingStarted = props => {
  return (
    <section id="getting-started">
      <h2>Getting Started</h2>
      <h3>Installation and Use</h3>

      <div className="inline">
        <pre>
          <code lang="javascript">npm i xerum</code>
        </pre> &nbsp;&nbsp;or &nbsp;

        <pre>
          <code lang="javacript">yarn add xerum</code>
        </pre>
      </div>

      <br />

      <div>
        Then destructure the component in the file using <i>import</i> &mdash; example:<br />
        <pre>
          <code lang="javascript">{`import { Button } from 'xerum';`}</code>
        </pre>
      </div>

      <p>
        <strong>Note</strong>: Unless noted otherwise, you can pass standard attributes as you&nbsp;
        would with any element or React component &mdash; for example: <i>disabled</i>, <i>target</i>,
        <i>style</i>, <i>className</i> etc.
      </p>

      <p />
    </section>
  );
};

export default GettingStarted;