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

        <Table content={searchTable} className="xTable" />

        <strong>Note</strong>: Passing a standard <i>className</i> prop
        will affect the input field by default.  Use <i>btnClassName</i>&nbsp;
        to style the button element within the {codeSnippet("<Search />")}&nbsp;
        component.

        <p />
      </div>

      <SampleBox name="Search" code={searchCode}>
        <Search
          btnText="Find it"
          placeholder="Find something..."
          callback={val => console.log(val)}
        />
      </SampleBox>
    </Fragment>
  );
};

export default SectionSearch;