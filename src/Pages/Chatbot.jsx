import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import ChatbotInterface from "./ChatbotInterface";

const ChatbotContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  // Function to handle sending messages
  const sendMessage = (userMessage) => {
    // Add user's message to the messages array
    setMessages((prevMessages) => [...prevMessages, { text: userMessage, sender: "user" }]);

    // Add chatbot's response
    const chatbotResponse = "Hello! How can I help you?";
    setMessages((prevMessages) => [...prevMessages, { text: chatbotResponse, sender: "chatbot" }]);
  };

  return (
    <div>
      <ChatbotInterface isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <ChatWindow messages={messages} />}
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide Chatbot" : "Show Chatbot"}
      </button>
    </div>
  );
};

export default ChatbotContainer;