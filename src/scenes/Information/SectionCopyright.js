import React, { Fragment } from "react";
import { copyrightCode } from './codeSamples';
import { copyrightTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Copyright from 'components/Copyright/Copyright';
import colors from 'theme/colors.scss';

const customStyle = { color: colors.blue };

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
        <p>
          <Copyright style={customStyle} name="Your Name" />
        </p>

        <p>
          <Copyright style={customStyle} name="Company, LLC" rights trade />
        </p>

        <p>
          <Copyright style={customStyle} name="Organization" rights="made with love." />
        </p>
      </SampleBox>
    </Fragment>
  );
};

export default SectionCopyright;