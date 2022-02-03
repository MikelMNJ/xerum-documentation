import React, { Fragment } from 'react';
import { cardCode } from './codeSamples';
import { cardTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import SampleBox from 'components/SampleBox/SampleBox';
import Card from 'components/Card/Card';
import Table from 'components/Table/Table';

const SectionCard = props => {
  return (
    <Fragment>
      <div>
        <h2>Containers</h2>
        <h3 id="card">{`<Card />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(cardTable)}
        </Table>
      </div>

      <SampleBox name="Card" code={cardCode}>
        <Card />
      </SampleBox>
    </Fragment>
  );
};

export default SectionCard;