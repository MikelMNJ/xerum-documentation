import React, { Fragment } from "react";
import { authRouteCode } from './codeSamples';
import { authRouteTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import AuthRoute from 'components/AuthRoute/AuthRoute';

const SectionAuthRoute = props => {
  return (
    <Fragment>
      <div>
        <h3 id="auth-route">{`<AuthRoute />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(authRouteTable)}
        </Table>
      </div>

      <SampleBox name="Auth. Route" code={authRouteCode}>
        <AuthRoute />
      </SampleBox>
    </Fragment>
  );
};

export default SectionAuthRoute;