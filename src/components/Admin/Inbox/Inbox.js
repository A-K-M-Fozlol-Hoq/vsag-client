import React, { useEffect, useState } from 'react';
import InboxTable from './InboxTable';
import InboxDetails from './InboxDetails';
const Inbox = () => {
  const [showTable, setShowTable] = useState(true);
  const [messages, setMessages] = useState([]);
  const [messageDetails, setMessageDetails] = useState('');
  useEffect(() => {
    fetch('http://localhost:4000/contactUs/getAll', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="container">
      {showTable ? (
        <InboxTable
          setShowTable={setShowTable}
          setMessageDetails={setMessageDetails}
          messages={messages}
        ></InboxTable>
      ) : (
        <InboxDetails
          setShowTable={setShowTable}
          messageDetails={messageDetails}
        ></InboxDetails>
      )}
    </div>
  );
};

export default Inbox;
