import React from "react";

import { useEffect, useRef } from "react";

const Chat = () => {
  const socketRef = useRef(null);

  useEffect(() => {
    // Replace 'ws://localhost:3000' with the URL of your websocket server
    socketRef.current = new WebSocket("ws://localhost:3000");

    // Add event listeners to the socket to handle incoming messages and any errors
    socketRef.current.addEventListener("message", (event) => {
      console.log("Received message:", event.data);
    });
    socketRef.current.addEventListener("error", (error) => {
      console.error("Error:", error);
    });
    // Clean up the event listeners when the component unmounts
    return () => {
      socketRef.current.close();
    };
  }, []);

  // ...

  return (
    <div>
      <div>Chat goes here</div>
      <form>
        <input type="text" placeholder="Enter a message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default Chat;
