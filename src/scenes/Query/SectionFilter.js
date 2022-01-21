import React, { Fragment } from "react";
import { filterCode } from './codeSamples';
import { filterTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Filter from 'components/Filter/Filter';
import colors from 'theme/colors.scss';

const SectionFilter = props => {
  return (
    <Fragment>
      <div>
        <h3 id="filter">{`<Filter />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(filterTable)}
        </Table>

        <strong>Note</strong>: Unlike the {codeSnippet("<Search />")}&nbsp;
        component, the {codeSnippet("<Filter />")} component only filters
        existing DOM elements in real-time &mdash; it does not use any
        external API callbacks.

        <p />
      </div>

      <SampleBox name="Filter" code={filterCode}>
        <Filter />
      </SampleBox>
    </Fragment>
  );
};

export default SectionFilter;