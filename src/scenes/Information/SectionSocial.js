import React, { Fragment } from "react";
import { socialCode } from './codeSamples';
import { socialTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Social from 'components/Social/Social';
import colors from 'theme/colors.scss';

const socialNetworks = [
  { name: "Twitter", path: "https://twitter.com", icon: "fa-brands fa-twitter" },
  { name: "Facebook", path: "https://facebook.com", icon: "fa-brands fa-facebook" },
  { name: "Instagram", path: "https://instagram.com", icon: "fa-brands fa-instagram" },
];

const SectionSocial = props => {
  return (
    <Fragment>
      <div>
        <h3 id="social">{`<Social />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(socialTable)}
        </Table>

        <p>
          *Required prop.
        </p>

        <p>
          <strong>Note</strong>: Not including or leaving an empty <i>name</i> key in your
          networks array object will also have the same effect as passing the&nbsp;
          <strong>noText</strong> prop.
        </p>

        Additionally, when passing a custom <i>className</i> to the {codeSnippet("<Social />")}&nbsp;
        component, you are directly targeting it's {codeSnippet("<a />")} tags &mdash; you can use
        CSS chaining and psuedo-selectors if you need finer control over {codeSnippet(":hover")} style
        or targetting the child {codeSnippet("<i />")} tags &mdash; otherwise generic changes from the parent
        {codeSnippet("<a />")} level, like <i>color</i> and <i>font-size</i>, will affect both icons
        and text.

        <p>
          Finally, icon colors and hover states will be your default link styling.
        </p>
      </div>

      <SampleBox name="Social" code={socialCode}>
        <div className="column center">
          <Social networks={socialNetworks} noText />
          <br />
          <Social networks={socialNetworks} />
        </div>
      </SampleBox>
    </Fragment>
  );
};

export default SectionSocial;