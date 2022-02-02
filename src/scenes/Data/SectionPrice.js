import React, { Fragment } from "react";
import { priceCode } from './codeSamples';
import { priceTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Price from 'components/Price/Price';
import colors from 'theme/colors.scss';

const SectionPrice = props => {
  return (
    <Fragment>
      <div>
        <h3 id="price">{`<Price />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(priceTable)}
        </Table>

        <p />
      </div>

      <SampleBox name="Price" code={priceCode}>
        <strong style={{ color: colors.blue }}>
          <Price
            value={1024.76623496782}
            symbol={
              <Fragment>
                <i className="fa-brands fa-ethereum" />
              </Fragment>
            }
            currency="ETH"
            limit={8}
          />
        </strong>
      </SampleBox>
    </Fragment>
  );
};

export default SectionPrice;