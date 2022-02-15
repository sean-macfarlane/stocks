import { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";

import { API_KEY } from "lib/finnhub";

type Props = {
  symbol: string;
};

const Quote = ({ symbol }: Props) => {
  const [data, setData] = useState();
  const [previousMessageTime, setPreviousMessageTime] = useState("");

  // Subscribe to WebSocket and manage messages
  const { sendJsonMessage, lastMessage } = useWebSocket(
    `wss://ws.finnhub.io?token=${API_KEY}`
  );

  const message = lastMessage && JSON.parse(lastMessage.data);

  useEffect(() => {
    sendJsonMessage({ type: "subscribe", symbol: symbol });
  }, [sendJsonMessage, symbol]);

  // Check if we've received a new message based on the previous message's timestamp,
  // and update if needs be
  if (message && previousMessageTime !== message.time) {
    setPreviousMessageTime(message.time);

    setData(message.data);
  }
  console.log(lastMessage);

  return (
    <div className="bg-white p-2 border-b-2 border-gray-300">
      {data ? (
        <div className="text-xl font-medium text-black">{data.p}</div>
      ) : (
        <p>Market Closed</p>
      )}
    </div>
  );
};

export default Quote;
