import React, { Fragment } from "react";
import { fieldSliderCode } from './codeSamples';
import { fieldSliderTable } from './tables';
import { columnLayout } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import FieldSlider from 'components/FieldSlider/FieldSlider';
import colors from 'theme/colors.scss';

const SectionFieldSlider = props => {
  return (
    <Fragment>
      <div>
        <h3 id="field-slider">{`<FieldSlider />`}</h3>

        <Table content={fieldSliderTable} className="xTable" columnLayout={columnLayout} />

        <p />
      </div>

      <SampleBox name="FieldSlider" code={fieldSliderCode}>
        <strong>
          <FieldSlider />
        </strong>
      </SampleBox>
    </Fragment>
  );
};

export default SectionFieldSlider;