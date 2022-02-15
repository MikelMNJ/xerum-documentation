import React, { createRef, useEffect, useRef } from 'react';
import { dismiss } from 'helpers/animations';
import Notification from './Notification';
import './Notification.scss';


const Messages = props => {
  const { icon, noIcon, noTime, time, messages, setMessages, ...rest } = props;
  const targets = useRef([]);

  useEffect(() => {
    if (!noTime && messages?.length >= 1) {
      const timer = setTimeout(() => {
        dismiss({ targets: [ targets.current[0] ], onClose: removeMessage });
        clearTimeout(timer);
      }, time || 4000);

      return () => clearTimeout(timer);
    }
  }, [messages]);

  function removeMessage(i) {
    const updatedMsgs = [ ...messages ];
    updatedMsgs.splice(i || 0, 1);
    if (setMessages) setMessages(updatedMsgs);
  };

  const buildMessages = () => {
    const refs = messages?.map((msg, i) => targets.current[i] ?? createRef());
    targets.current = [ ...refs ];

    return messages?.map((msg, i) => {
      return (
        <Notification
          key={i}
          ref={targets.current[i]}
          message={msg}
          args={{ targets: [ targets.current[i] ], onClose: () => removeMessage(i) }}
          {...rest}
        />
      );
    });
  };

  return (
    <div className="messages">
      {buildMessages()}
    </div>
  );
};

export default Messages;