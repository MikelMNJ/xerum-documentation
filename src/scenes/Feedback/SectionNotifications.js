import React, { Fragment, useState, useEffect } from 'react';
import { notificationsCode } from './codeSamples';
import { notificationsTable } from './tables';
import { codeSnippet } from 'helpers/utilityHelpers';
import { columnLayout } from 'helpers/tableHelpers';
import Table from 'components/Table/Table';
import Button from 'components/Button/Button';
import Notifications from 'components/Notification/Notifications';
import SampleBox from 'components/SampleBox/SampleBox';

const SectionNotifications = props => {
  const [ notifications, setNotifications ] = useState([]);
  const length = notifications.length;
  const again = `again! (${length})`;

  const newNotification = type => ({
    message: `You've been notified${length === 0 ? "!" : ", "}${length > 0 ? again : ""}`,
    type
  });

  const addNotification = notification => {
    setNotifications([ ...notifications, notification ]);
  };

  const removeNotification = index => {
    const updatedArray = notifications.filter((item, i) => index !== i);
    setNotifications(updatedArray);
  };

  return (
    <Fragment>
      <div>
        <h3 id="notifications">{`<Notifications />`}</h3>

        <Table content={notificationsTable} className="xTable" columnLayout={columnLayout} />

        <p>
          *Required prop.
        </p>

        <strong>Note</strong>: You will first need to have an existing&nbsp;
        <strong>notifications</strong> array selector and corresponding <strong>addNotification</strong>&nbsp;
        action set up in app state. Then, at the root of your app, place&nbsp;
        {codeSnippet("<Notifications />")} with that action/selector pair passed in the props.

        <p>
          Now any component event or API callback that triggers your&nbsp;
          <strong>addNotification</strong> action will trigger notifications.
        </p>

      </div>

      <SampleBox name="Notifications" code={notificationsCode}>
        <div className="notificationSamples">
          <Button text="Standard notify"
            callback={() => addNotification(newNotification())}
          />

          <Button text="Success notify"
            callback={() => addNotification(newNotification("success"))}
          />

          <Button text="Warning notify"
            callback={() => addNotification(newNotification("warning"))}
          />

          <Button text="Error notify"
            callback={() => addNotification(newNotification("error"))}
          />
        </div>

        <Notifications
          time={3000}
          notifications={notifications}
          removeNotification={removeNotification}
        />
      </SampleBox>
    </Fragment>
  );
};

export default SectionNotifications;