import React, { Fragment } from "react";
import { bannerCode } from './codeSamples';
import { bannerTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Banner from 'components/Banner/Banner';

const SectionBanner = props => {
  return (
    <Fragment>
      <div>
        <h3 id="banner">{`<Banner />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(bannerTable)}
        </Table>

        <strong>Note</strong>: The {codeSnippet("<Banner />")} component will take up
        all of the available width in its parent container by default.
      </div>

      <SampleBox name="Banner" code={bannerCode}>
        <span>
          <Banner text="The floggings will continue until morale improves..." />
        </span>

        <span>
          <Banner noIcon center className="customBanner">
            <i className="fas fa-exclamation" />&nbsp;&nbsp;
            <strong>Reminder</strong>: Servers will be down for a bit.
          </Banner>
        </span>
      </SampleBox>
    </Fragment>
  );
};

export default SectionBanner;