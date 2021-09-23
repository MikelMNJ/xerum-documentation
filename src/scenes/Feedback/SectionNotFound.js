import React, { Fragment } from "react";
import { notFoundCode } from './codeSamples';
import { notFoundTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { myCode } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import NotFound from 'components/NotFound/NotFound';

const SectionNotFound = props => {
  return (
    <Fragment>
      <div>
        <h3 id="not-found">{`<NotFound />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(notFoundTable)}
        </Table>

        <strong>Note</strong>: Pass an <i>id</i> attribute if you need to override
        the width, height, display, flex direction, item alignment etc.
        of the {myCode("<NotFound />")} component.

        <p />
        You can also target the {myCode("<h2>")} title and {myCode("<p>")} message tags,
        specifically, by passing a custom <i>className</i> and using CSS chaining,
        respectively.

        <p />
      </div>

      <SampleBox name="NotFound" code={notFoundCode}>
        <NotFound />

        <NotFound
          className="customNotFound"
          icon="fas fa-frown-open"
          title="Well, shucks!"
          message="Something's missing."
        />
      </SampleBox>
    </Fragment>
  );
};

export default SectionNotFound;