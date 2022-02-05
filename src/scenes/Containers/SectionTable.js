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

const defaultCallback =
  <Fragment>
    <span className="headerInstructions">Use headers or drag rows to sort &mdash;</span>
    <span className="dragInstructions">Drag row to sort or</span> click row for callback.
  </Fragment>;

const SectionTable = props => {
  const [ rowClicked, setRowClicked ] = useState(defaultCallback);
  const [ content, setContent ] = useState({
    headers: [ "Bird Name", "Flight Speed (MPH)" ],
    rows: [
      {
        td1: "Raven",
        td2: "50",
        onClick: () => setRowClicked("Raven row clicked.")
      },
      {
        td1: "Sparrow",
        td2: "28",
        onClick: () => setRowClicked("Sparrow row clicked.")
      },
      {
        td1: "Quail",
        td2: null,
        onClick: () => setRowClicked("Quail row clicked.")
      },
    ]
  });

  const receivedArr = sortedArr => {
    setContent({ ...content, rows: sortedArr });
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
        key name must be <strong>onClick</strong> and value a function.

        <p />


        <strong>Tip</strong>: When you pass a custom <i>className</i>, you can target the <i>header</i>&nbsp;
        and <i>row</i> element styling with {codeSnippet(".yourClassName header {}")}&nbsp;
        and {codeSnippet(".yourClassName li {}")}. The {codeSnippet("<Table />")} component uses CSS grid
        for the layout.  For precise control over cell widths, you can pass your own
        grid parameters &mdash; you will need an {codeSnippet("!important")} flag
        to override the dynamic columns created by the table.  Also remember to
        set this in your media query breakpoint as well with another&nbsp;
        {codeSnippet("!important")} flag.

        <p />

        {codeSnippet(customGrid, true)}

        <p />
      </div>

      <SampleBox name="Table" code={tableCode}>
        <Table
          content={content}
          sortable={receivedArr}
          draggable={receivedArr}
        />

        <strong style={{ color: colors.blue }} className="fullWidth center">
          {rowClicked}
        </strong>
      </SampleBox>
    </Fragment>
  );
};

export default SectionTable;