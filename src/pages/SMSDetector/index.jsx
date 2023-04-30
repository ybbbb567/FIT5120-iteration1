import React from "react";
import { useState } from "react";
import Navigationbar from "components/Navigationbar";
import Footer from "components/Footer";
import { checkSMS } from "api/check";
import { Card, message } from 'antd';
import Highlighter from 'react-highlight-words';


const SMSDetectorPage = () => {

  const [inputValue, setInputValue] = useState("");

  const [result, setResult] = useState(null);

  const wordsToHighlight = ['act', 'apply', 'buy', 'call', 'cancel', 'cash', 'cheap', 'click', 'collect', 'compare', 'credit', 'deal', 'discount', 'double', 'earn', 'extra', 'for only', 'free', 'get started now', 'guarantee', 'increase', 'insurance', 'limited time', 'lose', 'make money', 'marketing solutions', 'money back', 'new customers only', 'offer', 'one time', 'opportunity', 'order now', 'performance', 'promise', 'pure profit', 'refinance', 'remove', 'reverses aging', 'risk-free', 'sales', 'save big', 'save up to', 'special promotion', 'stop', 'trial', 'unsubscribe', 'urgent', 'viagra', 'win', 'winner'];

  // const regex = new RegExp(`\\b(${wordsToHighlight.join('|')})\\b`, 'ig');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === '') {
      message.error("Please enter email content!");
      return;
    }

    checkSMS(inputValue).then(res => {
      if (res.result) {
        setResult(res.result);
      }
    })
  };

  return (
    <>
      <div className="navbar_color  flex flex-col font-opensans items-center justify-start mx-[auto] w-[100%]">
        <Navigationbar
          className="flex items-center justify-center md:px-[20px] w-[100%]"
          home="Home"
          picwishone="images/img_picwish2_125x227.png"
        />

        <div className="font-pacifico h-full  mx-auto p-[129px] md:px-5 relative w-full">
          <h3 className="text-3xl text-center font-bold text-blueGray" >SMS Detecotr</h3>
          <h3 className="text-xl font-bold py-12" >SMS Detector identifies scam texts by analyzing their content. It detects suspicious links, requests for personal info, and common scam phrases.
          </h3>

          <ul className="text-xl font-bold text-blueGray italic pb-7">
            <li className="text-black not-italic ">It will give two different results and they are: </li>
            <br></br>
            <li>Ham: "Ham" usually indicates normal emails where the content is legitimate and the purpose is to convey useful information. These emails may be from friends, family, colleagues, or other official sources such as subscription mailing lists, job offers, etc.</li>
            <br></br>

            <li>Spam: "Spam" usually indicates junk email or text intended to deceive or defraud the recipient. These emails may contain undesirable content such as spam, phishing scams, pornographic content, viruses or malware.</li>
            <br></br>

          </ul>


          <div style={{
            backgroundColor: "#ffffff",
            padding: "16px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "10px",
            border: "3px solid black",
          }}>
            <textarea
              type="text"
              placeholder="Please type or paste the text here"
              value={inputValue}
              onChange={handleInputChange}
              style={{
                border: "none",
                outline: "none",
                padding: "8px",
                fontSize: "16px",
                width: "100%",
                height: "100%",
                resize: "none",
              }}
            />
            <div style={{ overflowY: 'scroll', padding: "8px", }}>
              <Highlighter
                highlightClassName="highlighted-text"
                searchWords={wordsToHighlight}
                autoEscape={true}
                textToHighlight={inputValue}
                style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="btn cta bg" onClick={handleSubmit}>
                Start Check
              </button>
            </div>
          </div>
          <div style={{ height: 30 }}></div>
          {result ? (
            <div style={{
              display: 'block', width: 700
            }}>
              <Card
                centered="true"
                title="Classification Result"
                headStyle={{ backgroundColor: " #C84E89", fontSize: "24px" }}
                bodyStyle={{ padding: 0, fontSize: "20px" }}
                style={{ width: 599, backgroundColor: "transparent" }}>

                <div style={{ height: 30 }}></div>
                <div style={{ marginLeft: 30, fontWeight: 'bold', fontStyle: 'italic' }}>Based on system analysis, This message is mostely likely to  {result ? result.category : ''}</div>
                <div style={{ height: 30 }}></div>
              </Card>
            </div>
          ) : null}
        </div>
      </div>
      <Footer
        className="flex flex-col font-spacegrotesk items-center justify-start mt-[171px] w-full"
        feedback="Feedback"
      />
    </>
  );
};

export default SMSDetectorPage;
