import React, { Fragment } from "react";
import { labelCode } from './codeSamples';
import { labelTable } from './tables';
import { columnLayout } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Label from 'components/Label/Label';
import colors from 'theme/colors.scss';

const Sectionlabel = props => {
  return (
    <Fragment>
      <div>
        <h2 id="label">Data</h2>
        <h3>{`<Label />`}</h3>

        <Table content={labelTable} className="xTable" columnLayout={columnLayout} />

        <p />
        Use the following CSS heirarchy for custom styling: <br />
        {codeSnippet(".yourClassName {}", false, "css")}<br />
        {codeSnippet(".yourClassName i.labelClose {}", false, "css")}<br />

        <p />
          Your custom <i>className</i> will apply to the&nbsp;
          {codeSnippet("<Label />")} container by default.
        <p />
      </div>

      <SampleBox name="Label" code={labelCode}>
        <div className="labelSamples">
          <Label>
            <i className="fa-solid fa-child" />&nbsp;
            child...
          </Label>

          <Label text="Removable"
            useClose
            callback={() => console.log("Closed")}
          />

          <Label text="Custom"
            useClose
            closeIcon="fa-solid fa-xmark"
            color={colors.white}
            bgColor={colors.blue}
          />
        </div>
      </SampleBox>
    </Fragment>
  );
};

export default Sectionlabel;