import React, { Fragment } from "react";
import { searchCode } from './codeSamples';
import { searchTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Search from 'components/Search/Search';
import colors from 'theme/colors.scss';

const SectionSearch = props => {
  return (
    <Fragment>
      <div>
        <h3 id="search">{`<Search />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(searchTable)}
        </Table>
      </div>

      <SampleBox name="Search" code={searchCode}>
        <Search
          btnText="Go"
          placeholder="Find something..."
          callback={val => console.log(val)} />
      </SampleBox>
    </Fragment>
  );
};

export default SectionSearch;