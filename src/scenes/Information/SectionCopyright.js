import React, { Fragment } from "react";
import { copyrightCode } from './codeSamples';
import { copyrightTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Copyright from 'components/Copyright/Copyright';
import colors from 'theme/colors.scss';

const customStyle = {
  marginBottom: "1rem"
};

const SectionCopyright = props => {
  return (
    <Fragment>
      <div>
        <h2 id="copyright">Information</h2>
        <h3>{`<Copyright />`}</h3>

        <Table content={copyrightTable} className="xTable" />

        * Required prop.
      </div>

      <SampleBox name="Copyright" code={copyrightCode}>
        <Copyright style={customStyle} name="Your Name" />
        <Copyright style={customStyle} name="Company, LLC" rights trade />
        <Copyright style={customStyle} name="Organization" rights="made with love." />
      </SampleBox>
    </Fragment>
  );
};

export default SectionCopyright;