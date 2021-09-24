import React, { Fragment, useState } from "react";
import { loadingCode } from './codeSamples';
import { loadingTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Loading from 'components/Loading/Loading';
import Button from 'components/Button/Button';
import colors from 'theme/colors.scss';

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontWeight: "bold",
};

const SectionLoading = props => {
  const [ successLoading, setSuccessLoading ] = useState(false);
  const [ failLoading, setFailLoading ] = useState(false);
  const [ data, setData ] = useState(null);
  const [ failData, setFailData ] = useState(null);

  const sim = async type => {
    try {
      const res = await new Promise((resolve, reject) => {
        if (type === "load" && !successLoading) {
          setSuccessLoading(true);
          if (data) setData(null);
        }

        if (type === "fail" && !failLoading) setFailLoading(true);

        setTimeout(() => type === "load"
          ? resolve({ data: "Test" })
          : reject("Promise rejected")
        , 1000);
      });

      setData(res);
      setSuccessLoading(false);
    } catch (e) {
      setFailLoading(false);
      setFailData(false);
    }
  };


  return (
    <Fragment>
      <div>
        <h3 id="loading">{`<Loading />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(loadingTable)}
        </Table>

        <p>
          *Required prop.
        </p>

        <strong>Tip</strong>: You can get creative by disabling the icon and passing your own
        component as the text &mdash; such as the {codeSnippet("<Progress />")} component &mdash;
        or try passing a <i>style</i> attribute and change the color of the loader based on&nbsp;
        <strong>isLoading</strong> and <strong>hasData</strong>.

        <p />
      </div>

      <SampleBox name="Loading" code={loadingCode}>
        <div style={styles}>
          {!data && !successLoading
            ? <div className="loader">
                <p>Load ready</p>
              </div>
            : <Loading isLoading={successLoading} hasData={data}>
                <i className="fas fa-thumbs-up successIcon" />&nbsp;
                All good.
              </Loading>
          }

          <Button
            disabled={successLoading}
            text="Simulate Load"
            callback={() => sim("load")}
          />
        </div>

        <div style={styles}>
          {failData === null && !failLoading
            ? <div className="loader">
                <p>Fail ready</p>
              </div>
            : <Loading isLoading={failLoading} hasData={failData} />
          }

          <Button
            disabled={failLoading}
            text="Simulate Fail"
            callback={() => sim("fail")}
          />
        </div>
      </SampleBox>
    </Fragment>
  );
};

export default SectionLoading;