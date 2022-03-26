import React, { Fragment } from "react";
import { socialCode } from './codeSamples';
import { socialTable } from './tables';
import { columnLayout } from 'helpers/tableHelpers';
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

        <Table content={socialTable} className="xTable" columnLayout={columnLayout} />

        <p>
          *Required prop.
        </p>

        <p>
          <strong>Note</strong>: Not including or leaving an empty <i>name</i> key in your
          networks array object will also have the same effect as passing the&nbsp;
          <strong>noText</strong> prop.
        </p>

        <strong>Tip</strong>: You can target the following CSS heirarchy for custom
        styling: <br />
        {codeSnippet(".yourClassName {}", false, "css")}<br />
        {codeSnippet(".yourClassName a {}", false, "css")}<br />
        {codeSnippet(".yourClassName a i {}", false, "css")}<br />
        {codeSnippet(".yourClassName .tooltip {}", false, "css")}<br />

        <p />
          Your custom <i>className</i> will apply to the&nbsp;
          {codeSnippet("<Social />")} container by default.
        <p />
      </div>

      <SampleBox name="Social" code={socialCode}>
        <div className="column center">
          <Social networks={socialNetworks} noText />
          <br />
          <Social networks={socialNetworks} />
          <br />
          <Social networks={socialNetworks} column />
          <br />
          <Social
            asTooltip
            tipPosition="top"
            networks={socialNetworks}
          />
        </div>
      </SampleBox>
    </Fragment>
  );
};

export default SectionSocial;