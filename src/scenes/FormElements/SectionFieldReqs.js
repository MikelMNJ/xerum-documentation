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
        <h2>Form Elements</h2>
        <h3 id="field-reqs">{`<FieldReqs />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(fieldReqsTable)}
        </Table>
      </div>

      <SampleBox name="FieldReqs" code={fieldReqsCode}>
      <input
        type="password"
        value={inputVal}
        placeholder="Password"
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
          min={8}
          special={"@#$%^&+=!"}
          exclude={["Mikel", "Jagan"]}
        />
      </SampleBox>
    </Fragment>
  );
};

export default SectionFieldReqs;