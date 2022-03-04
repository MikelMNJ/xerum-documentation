import React, { Fragment } from "react";
import { menuCode } from './codeSamples';
import { menuTable } from './tables';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Menu from 'components/Menu/Menu';
import colors from 'theme/colors.scss';

const objectTemplate = `{
  name, // Friendly name to display on menu.
  path, // i.e. "/link-path" or "#link-path".
  icon, // Font Awesome string.
  subMenu: [] // Optional array of objects.
}`;

const links = [
  {
    name: "Home",
    path: "#home",
    icon: "fa-solid fa-home"
  },
  {
    name: "Settings",
    path: "#settings",
    icon: "fa-solid fa-gears"
  },
  {
    name: "My account",
    path: "#account",
    icon: "fa-solid fa-user",
    subMenu: [
      { name: "Info", path: "#Info" },
      { name: "Billing", path: "#billing" },
    ],
  },
];

const SectionMenu = props => {
  return (
    <Fragment>
      <div>
        <h2 id="menu">Navigation</h2>
        <h3>{`<Menu />`}</h3>

        <Table content={menuTable} className="xTable" />

        <strong>Note</strong>: Your <strong>links</strong> array must contain objects with the
        following keys: {codeSnippet(objectTemplate, true)}

        <p>
          Any <i>subMenu</i> array objects should follow the same object key format above.  You can
          nest more sub-menus this way, if needed.
        </p>

        <strong>Tip</strong>: You can target the following CSS heirarchy for custom
        styling: <br />
        {codeSnippet(".yourClassName {}")}<br />
        {codeSnippet(".yourClassName .topLevel {}")}<br />
        {codeSnippet(".yourClassName .topLevel .icon {}")}<br />
        {codeSnippet(".yourClassName .topLevel .subMenuIcon {}")}<br />

        <p />
          Your custom <i>className</i> will apply to the&nbsp;
          {codeSnippet("<Menu />")} container by default.
        <p />
      </div>

      <SampleBox name="Menu" code={menuCode}>
        <div className="menu">
          <Menu
            links={links}
            openIcon
            closeIcon
          />
        </div>
      </SampleBox>
    </Fragment>
  );
};

export default SectionMenu;