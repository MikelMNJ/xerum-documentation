import React, { Fragment, useState } from 'react';
import { slideOverCode } from './codeSamples';
import { slideOverTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import { dismiss } from 'helpers/animations';
import Button from 'components/Button/Button';
import SampleBox from 'components/SampleBox/SampleBox';
import SlideOver from 'components/SlideOver/SlideOver';
import Table from 'components/Table/Table';
import colors from 'theme/colors.scss';

const title = (
  <Fragment>
    <i className="fa-solid fa-sliders" /> Settings
  </Fragment>
);

const SectionSlideOver = props => {
  const [ visible, setVisible ] = useState(false);

  return (
    <Fragment>
      <div>
        <h3 id="slide-over">{`<SlideOver />`}</h3>

        <Table content={slideOverTable} className="xTable" />
      </div>

      <SampleBox name="Slide-Over" code={slideOverCode}>
        <Button
          icon={`fa-solid fa-arrow-${visible ? "right" : "left"}-long`}
          text={`${visible ? "Hide" : "Show"}`}
          callback={() => {
            const args = {
              target: document.querySelector(".slideOver"),
              classIn: "slideIn",
              classOut: "slideOut",
              onClose: () => setVisible(!visible)
            };

            if (visible) return dismiss(args);
            setVisible(!visible);
          }}
        />

        {visible && (
          <SlideOver title={title} onClose={() => setVisible(!visible)}>
            <p>Panel content...</p>
          </SlideOver>
        )}
      </SampleBox>
    </Fragment>
  );
};

export default SectionSlideOver;