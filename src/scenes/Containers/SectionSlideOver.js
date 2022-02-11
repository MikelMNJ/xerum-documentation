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

const SectionSlideOver = props => {
  const [ visible, setVisible ] = useState(false);

  const toggle = () => {
    const args = {
      onClose: () => setVisible(!visible),
      targets: [ document.querySelector(".slideOver") ],
    };

    if (visible) return dismiss(args);
    setVisible(!visible);
  };

  return (
    <Fragment>
      <div>
        <h3 id="slide-over">{`<SlideOver />`}</h3>

        <Table content={slideOverTable} className="xTable" />
      </div>

      <SampleBox name="Slide-Over" code={slideOverCode}>
        <Button
          text={`Slide ${visible ? "in" : "out"}`}
          callback={toggle}
        />

        {visible && (
          <SlideOver title="Slide-Over title..." onClose={() => setVisible(!visible)}>
            <p>Slide-Over content...</p>
          </SlideOver>
        )}
      </SampleBox>
    </Fragment>
  );
};

export default SectionSlideOver;