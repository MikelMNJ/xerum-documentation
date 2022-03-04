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

        <Table content={bannerTable} className="xTable" />

        <strong>Note</strong>: The {codeSnippet("<Banner />")} component will take up
        all of the available width in its parent container by default.

        <p />
      </div>

      <SampleBox name="Banner" code={bannerCode}>
        <span>
          <Banner center className="banner" noClose>
            <i className="fa-solid fa-triangle-exclamation" />&nbsp;&nbsp;
            <strong>Reminder</strong>: Servers will be down.
          </Banner>
        </span>
      </SampleBox>
    </Fragment>
  );
};

export default SectionBanner;