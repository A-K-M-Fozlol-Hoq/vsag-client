import React, { useState } from 'react';
import InboxTable from './InboxTable';
import InboxDetails from './InboxDetails';
const Inbox = () => {
  const [messages, setMessages] = useState([]);
  const [messageDetails, setMessageDetails] = useState('');
  return (
    <div>
      <InboxTable messages={messages}></InboxTable>
      <InboxDetails messageDetails={messageDetails}></InboxDetails>
    </div>
  );
};

export default Inbox;
