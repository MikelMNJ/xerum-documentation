import React, { Fragment, useState, useEffect } from 'react';
import { tableCode } from './codeSamples';
import { tableTable } from './tables';
import { codeSnippet } from 'helpers/utilityHelpers';
import SampleBox from 'components/SampleBox/SampleBox';
import Table from 'components/Table/Table';
import colors from 'theme/colors.scss';


const customGrid = `.yourClassName li {
  grid-template-columns: 10rem 1fr 7rem !important;
}

/* ========== Media Query ========== */
@media screen and (max-width: 520px) {
  .yourClassName li {
    grid-template-columns: 1fr !important;
  }
}`;

const defaultCallback = "Click a row for callback.";

const SectionTable = props => {
  const [ rowClicked, setRowClicked ] = useState(defaultCallback);

  const content = {
    headers: [ "Header 1", "Header 2", "Header 3" ],
    rows: [
      {
        td1: "Row 1, Col 1",
        td2: "Row 1, Col 2",
        td3: "Row 1, Col 3",
        onClick: () => setRowClicked("Row 1 callback executed.")
      },
      {
        td1: "Row 2, Col 1",
        td2: "Row 2, Col 2",
        td3: "Row 2, Col 3",
        onClick: () => setRowClicked("Row 2 callback executed.")
      },
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setRowClicked(defaultCallback);
    }, 3000);

    return () => clearTimeout(timer);
  }, [rowClicked]);

  return (
    <Fragment>
      <div>
        <h3 id="table">{`<Table />`}</h3>

        <Table content={tableTable} className="xTable" />

        <p>*Required Prop.</p>

        <strong>Note</strong>: Row click behavior can be added directly to your row object
        with {codeSnippet("rows: [{ ...tData, onClick: () => yourCallback() }]")} &mdash; the
        key name must be <strong>onClick</strong>.

        <p />


        <strong>Tip</strong>: The {codeSnippet("<Table />")} component uses CSS grid
        for the layout.  For precise control over cell widths, you can pass your own
        grid parameters &mdash; you will need an {codeSnippet("!important")} flag
        to override the dynamic columns created by the table.  Also remember to
        set this in your media query breakpoint as well with another&nbsp;
        {codeSnippet("!important")} flag.

        <p />

        Also, when you pass a custom <i>className</i>, you can target the <i>header</i>&nbsp;
        and <i>row</i> element styling with {codeSnippet(".yourClassName header {}")}&nbsp;
        and {codeSnippet(".yourClassName li {}")}.

        {codeSnippet(customGrid, true)}

        <p />
      </div>

      <SampleBox name="Table" code={tableCode}>
        <Table content={content} />
        <strong style={{ color: colors.blue }}>
          {rowClicked}
        </strong>
      </SampleBox>
    </Fragment>
  );
};

export default SectionTable;