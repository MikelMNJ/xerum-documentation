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
        will affect the input field by default.

        <strong>Tip</strong>: You can target the following CSS heirarchy for custom
        styling: <br />
        {codeSnippet(".yourClassName {}")}<br />
        {codeSnippet(".yourClassName form {}")}<br />
        {codeSnippet(".yourClassName form label {}")}<br />
        {codeSnippet(".yourClassName form label i {}")}<br />
        {codeSnippet(".yourClassName form label input {}")}<br />
        {codeSnippet(".yourClassName form button {}")}<br />

        <p/>
          Your custom <i>className</i> will apply to the&nbsp;
          {codeSnippet("<Search />")} container by default.
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