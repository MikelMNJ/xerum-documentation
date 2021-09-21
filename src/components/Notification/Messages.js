import React, { useEffect } from 'react';
import Notification from './Notification';
import './Notification.scss';

const Messages = props => {
  const { icon, noIcon, noTime, time, messages, setMessages, ...rest } = props;

  useEffect(() => {
    if (!noTime && messages?.length >= 1) {
      const timer = setTimeout(() => {
        handleClose();
        clearTimeout(timer);
      }, time || 4000);

      return () => clearTimeout(timer);
    }
  }, [messages]);

  const handleClose = i => {
    const updatedMsgs = [ ...messages ];
    updatedMsgs.splice(i, 1);
    if (setMessages) setMessages(updatedMsgs);
  };

  const buildMessages = () => {
    return messages?.map((msg, i) => {
      return (
        <Notification
          key={i}
          message={msg}
          index={i}
          close={handleClose}
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