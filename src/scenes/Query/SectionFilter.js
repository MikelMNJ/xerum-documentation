import React, { Fragment, useState, useEffect } from "react";
import { filterCode } from './codeSamples';
import { filterTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import { isEmpty } from 'lodash';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Filter from 'components/Filter/Filter';
import colors from 'theme/colors.scss';

const data = {
  default: "BTC-USD",
  currencies: {
    pairs: [ "USD", "GBP", "EUR" ],
    crypto: [
      { rawData: { symbol: "BTC" } },
      { rawData: { symbol: "ETH" } },
      { rawData: { symbol: "XRP" } },
      { rawData: { symbol: "ADA" } },
      { rawData: { symbol: "DOT" } },
    ],
  },
};

const itemStyle = {
  textAlign: "center",
  minWidth: "3.5rem",
  fontSize: "0.9rem",
  borderBottom: `0.25rem solid ${colors.blue}`,
  height: "fit-content",
  margin: "0.25rem",
};

const boxStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  borderRadius: "0.35rem",
  width: "100%",
  minHeight: "6.5rem",
  border: `0.125rem solid ${colors.lighterGrey}`
};

const SectionFilter = props => {
  const [ filteredData, setFilteredData ] = useState([]);

  const buildData = () => {
    if (!isEmpty(filteredData)) {
      return filteredData.map((item, index) => (
        <div key={index} style={itemStyle}>
          <strong>{item}</strong>
        </div>
      ));
    }

    return <p>No results...</p>;
  };

  return (
    <Fragment>
      <div>
        <h3 id="filter">{`<Filter />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(filterTable)}
        </Table>

        <strong>Note</strong>: Unlike the {codeSnippet("<Search />")}&nbsp;
        component, the {codeSnippet("<Filter />")} component filters
        existing DOM elements in real-time &mdash; it does not use any
        external API callbacks.

        <p />

        <strong>Tip</strong>: The {codeSnippet("<Filter />")} component allows
        for powerful filtering.  You can type in partial words, numbers,
        a single letter or multiple words in the same field to see all
        query results at once.

        <p />
      </div>

      <SampleBox name="Filter" code={filterCode}>
        <Filter
          data={data}
          placeholder="Partial or multiple words..."
          include={[
            "default",
            "currencies.pairs",
            "currencies.crypto>rawData.symbol",
          ]}
          callback={newData => setFilteredData(newData)}
        />

        <p className="fullWidth">Results ({filteredData.length}):</p>
        <div style={boxStyle}>
          {buildData()}
        </div>
      </SampleBox>
    </Fragment>
  );
};

export default SectionFilter;