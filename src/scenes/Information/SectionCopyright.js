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
  color: colors.blue,
  marginBottom: "1rem"
};

const SectionCopyright = props => {
  return (
    <Fragment>
      <div>
        <h2>Information</h2>
        <h3 id="copyright">{`<Copyright />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(copyrightTable)}
        </Table>

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