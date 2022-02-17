import React, { Fragment } from "react";
import { badgeCode } from './codeSamples';
import { badgeTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Button from 'components/Button/Button';
import Badge from 'components/Badge/Badge';

const cssSnippet = `.pos {
  top: -3.35rem;
  right: -2.35rem;
}`;

const SectionBadge = props => {
  return (
    <Fragment>
      <div>
        <h2 id="badge">Feedback</h2>
        <h3>{`<Badge />`}</h3>

        <Table content={badgeTable} className="xTable" />

        The {codeSnippet("<Badge />")} component works well when placed as a child
        insde the {codeSnippet("<Button />")} component.  You are also free to place
        it on any component you please &mdash; the important thing is that a custom <i>className</i>&nbsp;
        or <i>style</i> prop with position data should be passed to get proper placement.
        The associated examples use the following CSS:

        {codeSnippet(cssSnippet, true)}
      </div>

      <SampleBox name="Badge" code={badgeCode}>
          <Button className="badgeBtn" icon="fa-solid fa-bell">
            <Badge className="pos" count={4} />
          </Button>

          <Button className="badgeBtn" icon="fa-solid fa-envelope">
            <Badge className="pos" count={1296} square />
          </Button>
      </SampleBox>
    </Fragment>
  );
};

export default SectionBadge;