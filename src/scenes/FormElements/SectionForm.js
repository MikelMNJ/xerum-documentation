import React, { Fragment } from "react";
import { formCode } from './codeSamples';
import { formTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Form from 'components/Form/Form';
import Button from 'components/Button/Button';
import colors from 'theme/colors.scss';

const SectionForm = props => {
  return (
    <Fragment>
      <div>
        <h2>Form Elements</h2>
        <h3 id="form">{`<Form />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(formTable)}
        </Table>
      </div>

      <SampleBox name="Form" code={formCode}>
        <Form>
          <div>
            <input type="text" placeholder="First name" name="fname" />
            <input type="text" placeholder="Last name" name="lname" />
          </div>

          <div>
            <input type="email" placeholder="Email" name="email" />
            <input type="tel" placeholder="Phone" name="phone" />
            <input type="date" placeholder="D.O.B." name="dob" />
          </div>

          <fieldset>
            <p>Age Group:</p>

            <label>
              <input type="radio" name="ageGroup" value="18-24" />
              18-24
            </label>

            <label>
              <input type="radio" name="ageGroup" value="25-34" />
              25-34
            </label>

            <label>
              <input type="radio" name="ageGroup" value="35-44" />
              35-44
            </label>

            <label>
              <input type="radio" name="ageGroup" value="45-54" />
              45-54
            </label>

            <label>
              <input type="radio" name="ageGroup" value="55+" />
              55+
            </label>
          </fieldset>

          <div>
            <input type="text" placeholder="Address" name="address" />
            <input type="text" placeholder="Address 2" name="address2" />
            <input type="text" placeholder="City" name="city" />

            <select name="state" defaultValue={"Connecticut"}>
              <option value={"Connecticut"}>Connecticut</option>
              <option value={"Delaware"}>Delaware</option>
              <option value={"Maryland"}>Maryland</option>
              <option value={"Massachusettes"}>Massachusettes</option>
              <option value={"Texas"}>Texas</option>
            </select>

            <input type="number" placeholder="Zip code" name="zip" />
          </div>

          <textarea placeholder="Additional comments..." />

          <fieldset>
            <label>
              <input type="checkbox" name="tos" />
              I agree to the Terms of Service.
            </label>
          </fieldset>

          <Button type="submit" />
        </Form>
      </SampleBox>
    </Fragment>
  );
};

export default SectionForm;