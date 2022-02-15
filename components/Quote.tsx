import { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";

import { API_KEY } from "../lib/finnhub";
import { Quote as QuoteType } from "../interfaces";

type Props = {
  symbol: string;
  quote: QuoteType;
};

const Quote = ({ symbol, quote }: Props) => {
  const [data, setData] = useState();

  /*
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
  */

  const isGreenDay = quote.c > quote.pc;

  return (
    <div className="bg-white p-2 border-b-2 border-gray-300">
      {quote ? (
        <div>
          <div className="text-xl font-medium text-black">{quote.c}</div>
          <div
            className={`text-xl font-medium ${
              isGreenDay ? "text-green-500" : "text-red-500"
            }`}
          >
            {isGreenDay ? "+" : "-"}
            {quote.d} ( {isGreenDay ? "+" : "-"}
            {quote.dp}%)
          </div>
        </div>
      ) : (
        <p>Market Closed</p>
      )}
    </div>
  );
};

export default Quote;
