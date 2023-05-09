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


      sendPostRequest(messageText)
        .then(res => {
          console.log(res);
          const receivedMessageElement = document.createElement("div");
          receivedMessageElement.classList.add("message", "received");
          receivedMessageElement.textContent = res.choices[0].message.content;

          // Add style to the new message element
          receivedMessageElement.style.marginTop = "10px";
          receivedMessageElement.style.padding = "10px";
          receivedMessageElement.style.backgroundColor = "lightblue";
          receivedMessageElement.style.borderRadius = "5px";
          receivedMessageElement.style.boxShadow = "2px 2px 5px grey";

          chatMessages.appendChild(receivedMessageElement);
        })
        .catch(error => {
          console.error("Error while sending POST request:", error); // 处理请求失败的情况
        });
    });

    return () => {
      sendButton.removeEventListener("click");
    }
  }, []);

  async function sendPostRequest (data) {
    try {
      const requestData = {
        model: "gpt-3.5-turbo-0301",
        messages: [{ role: "user", content: data }]
      };
      const requestBody = JSON.stringify(requestData);
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST", // 指定请求的方法为 POST
        headers: {
          "Content-Type": "application/json", // 指定请求头中的 Content-Type 为 application/json
          "Authorization": "Bearer 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"
        },
        body: JSON.stringify(requestData), // 将数据转换为 JSON 格式，并作为请求体发送
      });
      if (!response.ok) {
        throw new Error("Network response was not ok"); // 如果请求失败，抛出一个错误
      }
      const responseData = await response.json(); // 将响应的 JSON 数据解析为 JavaScript 对象
      return responseData;
    } catch (error) {
      console.error("Error while sending POST request:", error); // 处理请求失败的情况
    }
  }

  return (
    <>
      <div className="navbar_color  flex flex-col font-opensans items-center justify-start mx-[auto] w-[100%]">
        <Navigationbar
          className="flex items-center justify-center md:px-[20px] w-[100%]"
          home="Home"
          picwishone="images/img_picwish2_125x227.png"
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
