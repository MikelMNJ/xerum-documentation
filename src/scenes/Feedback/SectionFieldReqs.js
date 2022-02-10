import React, { useState, Fragment } from "react";
import { fieldReqsCode } from './codeSamples';
import { fieldReqsTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import FieldReqs from 'components/FieldReqs/FieldReqs';
import colors from 'theme/colors.scss';

const SectionFieldReqs = props => {
  const [ inputVal, setInputVal ] = useState("");

  return (
    <Fragment>
      <div>
        <h3 id="field-reqs">{`<FieldReqs />`}</h3>

        <Table content={fieldReqsTable} className="xTable" />

        <p>*Required Prop.</p>

        <strong>Note</strong>: The {codeSnippet("<FieldReqs />")} component is not
        responsible for field validation on submit &mdash; it is simply visual
        feedback so the user can correct any validation issues prior to submitting.

        <p />
      </div>

      <SampleBox name="FieldReqs" code={fieldReqsCode}>
        <input
          type="password"
          value={inputVal}
          placeholder="Type password to test..."
          onChange={e => {
            const newVal = e.currentTarget.value;
            setInputVal(newVal);
          }}
        />

        <FieldReqs
          value={inputVal}
          upper
          lower
          number
          min
          special
          exclude={[
            { display: "First name", value: "Bob" },
            { display: "Last name", value: "Belcher" },
          ]}
        />
      </SampleBox>
    </Fragment>
  );
};

export default SectionFieldReqs;