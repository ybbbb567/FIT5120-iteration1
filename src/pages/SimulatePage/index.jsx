import React from "react";
import { useState, useRef, useEffect } from "react";
import Navigationbar from "components/Navigationbar";
import Footer from "components/Footer";


// // Example: receive a message after 3 seconds
// setTimeout(() => {
//   const receivedMessageElement = document.createElement("div");
//   receivedMessageElement.classList.add("message", "received");
//   receivedMessageElement.textContent = "Hi there!";
//   chatMessages.appendChild(receivedMessageElement);
// }, 3000);

const SimulatePage = () => {

  useEffect(() => {
    document.title = "Simulation - Daliy Fraud Fight"
  }, []);


  useEffect(() => {
    const chatMessages = document.getElementById("chat-messages");
    const sendButton = document.getElementById("send-button");
    const messageInput = document.getElementById("message-input");

    sendButton.addEventListener("click", () => {
      const messageText = messageInput.value;
      const messageElement = document.createElement("div");
      messageElement.classList.add("message", "sent");
      messageElement.textContent = messageText;

      // Add style to the new message element
      messageElement.style.marginTop = "10px";
      messageElement.style.padding = "10px";
      messageElement.style.backgroundColor = "white";
      messageElement.style.borderRadius = "5px";
      messageElement.style.boxShadow = "2px 2px 5px grey";

      chatMessages.appendChild(messageElement);
      messageInput.value = "";
    });

    // fetch("https://example.com/api/messages")
    //   .then(response => response.json())
    //   .then(data => {
    //     const receivedMessageElement = document.createElement("div");
    //     receivedMessageElement.classList.add("message", "received");
    //     receivedMessageElement.textContent = data.message;

    //     // Add style to the new message element
    //     messageElement.style.marginTop = "10px";
    //     messageElement.style.padding = "10px";
    //     messageElement.style.backgroundColor = "white";
    //     messageElement.style.borderRadius = "5px";
    //     messageElement.style.boxShadow = "2px 2px 5px grey";

    //     chatMessages.appendChild(receivedMessageElement);
    //   });

    return () => {
      sendButton.removeEventListener("click");
    }
  }, []);



  return (
    <>
      <div className="navbar_color mx-[auto] w-[100%]">
        <Navigationbar
        />

        <div className="font-pacifico h-full  mx-auto p-[129px] md:px-5 relative w-full">
          <div style={{
            backgroundColor: "#ffffff",
            padding: "16px",
            width: "50%",
            height: "600px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "10px",
            border: "3px solid black",
          }}>
            <div id="chat-messages" className="shadow"></div>
          </div>
          <div style={{
            backgroundColor: "#ffffff",
            padding: "16px",
            width: "50%",
            height: "200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "10px",
            border: "3px solid black",
          }}>
            <div style={{ display: "flex", flex: "1" }}>
              <textarea
                type="text"
                id="message-input"
                placeholder="Please type or paste the text here"
                style={{
                  border: "none",
                  outline: "none",
                  padding: "8px",
                  fontSize: "16px",
                  width: "100%",
                  height: "100%",
                  resize: "none",
                  flex: "1",
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="btn cta bg" id="send-button">
                Send
              </button>
            </div>
          </div>

        </div>
      </div>
      <Footer
        className="flex flex-col font-spacegrotesk items-center justify-start mt-[171px] w-full"
        feedback="Feedback"
      />
    </>
  );
};

export default SimulatePage;
