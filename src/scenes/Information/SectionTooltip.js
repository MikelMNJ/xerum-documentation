import React, { Fragment } from "react";
import { tooltipCode } from './codeSamples';
import { tooltipTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Tooltip from 'components/Tooltip/Tooltip';
import colors from 'theme/colors.scss';

const css = `.customTooltip .tip {
  font-weight: bold;
  text-align: center;
  color: white;
  background-color: #0d97ff;
}

.customTooltip i {
  color: #0d97ff;
}`;

const SectionTooltip = props => {
  return (
    <Fragment>
      <div>
        <h3 id="tooltip">{`<Tooltip />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(tooltipTable)}
        </Table>

        <strong>Note</strong>: When passing a custom <i>className</i> to the&nbsp;
        {codeSnippet("<Tooltip />")} component, you will need to target the&nbsp;
        {codeSnippet(".tip")} and {codeSnippet("i")} selectors with CSS chaining:

        {codeSnippet(css, true)}
      </div>

      <SampleBox name="Tooltip" code={tooltipCode}>
        <div className="column">
          <div className="inline">
            Standard&nbsp;
            <Tooltip text="Standard tool tip." />
          </div>

          <div className="inline">
            Child&nbsp;
            <Tooltip position="top">
              <i className="fa-solid fa-smile" />&nbsp;
              Tool tip rendering children.
            </Tooltip>
          </div>

          <div className="inline">
            Custom&nbsp;
            <Tooltip
              icon="fa-solid fa-question-circle"
              text="Customized tool tip."
              position="top"
              className="customTooltip"
            />
          </div>
        </div>
      </SampleBox>
    </Fragment>
  );
};

export default SectionTooltip;