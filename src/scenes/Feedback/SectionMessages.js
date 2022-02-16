import React, { Fragment, useState } from 'react';
import { messagesCode } from './codeSamples';
import { messagesTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import Table from 'components/Table/Table';
import Button from 'components/Button/Button';
import Messages from 'components/Notification/Messages';
import SampleBox from 'components/SampleBox/SampleBox';
import { codeSnippet } from 'helpers/utilityHelpers';


const SectionMessages = props => {
  const [ messages, setMessages ] = useState([]);
  const length = messages.length;
  const newMessage = `You've been notified${length === 0 ? "!" : ", "}`;
  const again = `again! (${length})`;

  return (
    <Fragment>
      <div>
        <h3 id="messages">{`<Messages />`}</h3>

        <Table content={messagesTable} className="xTable" />

        <p>
          *Required prop.
        </p>

        <strong>Note</strong>: You will first need to have an existing&nbsp;
        <strong>messages</strong> array selector and corresponding <strong>setMessages</strong>&nbsp;
        action set up in app state. Then, at the root of your app, place&nbsp;
        {codeSnippet("<Messages />")} with that action/selector pair passed in the props.

        <p>
          Now any component event or API callback that triggers your&nbsp;
          <strong>setMessages</strong> action will trigger notifications.
        </p>

      </div>

      <SampleBox name="Messages" code={messagesCode}>
        <Button text="Click to Notify"
          callback={() => setMessages([
            ...messages,
            `${newMessage}${length > 0 ? again : ""}`
          ])}
        />

        <Messages time={3000} messages={messages} setMessages={setMessages} />
      </SampleBox>
    </Fragment>
  );
};

export default SectionMessages;