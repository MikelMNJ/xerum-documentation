import React, { Fragment, useState } from 'react';
import { notificationsCode } from './codeSamples';
import { notificationsTable } from './tables';
import Table from 'components/Table/Table';
import Button from 'components/Button/Button';
import Notifications from 'components/Notification/Notifications';
import SampleBox from 'components/SampleBox/SampleBox';
import { codeSnippet } from 'helpers/utilityHelpers';


const SectionNotifications = props => {
  const [ notifications, setNotifications ] = useState([]);
  const length = notifications.length;
  const newNotification = `You've been notified${length === 0 ? "!" : ", "}`;
  const again = `again! (${length})`;

  return (
    <Fragment>
      <div>
        <h3 id="notifications">{`<Notifications />`}</h3>

        <Table content={notificationsTable} className="xTable" />

        <p>
          *Required prop.
        </p>

        <strong>Note</strong>: You will first need to have an existing&nbsp;
        <strong>notifications</strong> array selector and corresponding <strong>setNotifications</strong>&nbsp;
        action set up in app state. Then, at the root of your app, place&nbsp;
        {codeSnippet("<Notifications />")} with that action/selector pair passed in the props.

        <p>
          Now any component event or API callback that triggers your&nbsp;
          <strong>setNotifications</strong> action will trigger notifications.
        </p>

      </div>

      <SampleBox name="Notifications" code={notificationsCode}>
        <Button text="Click to Notify"
          callback={() => setNotifications([
            ...notifications,
            `${newNotification}${length > 0 ? again : ""}`
          ])}
        />

        <Notifications
          time={3000}
          notifications={notifications}
          setNotifications={setNotifications}
        />
      </SampleBox>
    </Fragment>
  );
};

export default SectionNotifications;