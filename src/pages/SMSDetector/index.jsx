import React from "react";
import { useState, useEffect } from "react";
import Navigationbar from "components/Navigationbar";
import Footer from "components/Footer";
import { checkSMS } from "api/check";
import { Card, message } from 'antd';
import Highlighter from 'react-highlight-words';


const SMSDetectorPage = () => {

  const [loading, setLoading] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const [result, setResult] = useState(null);

  const wordsToHighlight = ['act', 'apply', 'buy', 'call', 'cancel', 'cash', 'cheap', 'click', 'collect', 'compare', 'credit', 'deal', 'discount', 'double', 'earn', 'extra', 'for only', 'free', 'get started now', 'guarantee', 'increase', 'insurance', 'limited time', 'lose', 'make money', 'marketing solutions', 'money back', 'new customers only', 'offer', 'one time', 'opportunity', 'order now', 'performance', 'promise', 'pure profit', 'refinance', 'remove', 'reverses aging', 'risk-free', 'sales', 'save big', 'save up to', 'special promotion', 'stop', 'trial', 'unsubscribe', 'urgent', 'viagra', 'win', 'winner'];

  // const regex = new RegExp(`\\b(${wordsToHighlight.join('|')})\\b`, 'ig');

  useEffect(() => {
    document.title = "Email Detector - Daliy Fraud Fight"
  }, []);



  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === '') {
      message.error("Please enter email content!");
      return;
    }

    setLoading(true)
    checkSMS(inputValue).then(res => {
      if (res.result) {
        setResult(res.result);
        setLoading(false)
      }
    })
  };

  return (
    <>
      <div className="navbar_color  mx-[auto] w-[100%]">
        <Navigationbar

        />

        <div className="font-pacifico h-full  mx-auto p-[129px] md:px-5 relative w-full">


          <nav class="flex pt-10 py-10" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
              <li class="inline-flex items-center">
                <a href="#" class="inline-flex text-xl items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  <svg aria-hidden="true" class="w- 4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                  Home
                </a>
              </li>
              <li aria-current="page">
                <div class="flex items-center">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  <span class="text-xl	 ml-1 text-sm font-medium text-purple md:ml-2 dark:text-purple">Email Detector</span>
                </div>
              </li>
            </ol>
          </nav>


          <h3 className="text-3xl text-center font-bold text-blueGray" >Email Detector</h3>
          <h3 className="text-xl font-bold py-12" >Email Detector identifies scam texts by analyzing their content. It detects suspicious links, requests for personal info, and common scam phrases.
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
            <div style={{ display: "flex", flex: "1" }}>
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
                  flex: "1",
                }}
              />

              <div style={{ borderLeft: "1px solid #ccc", overflowY: 'scroll', padding: "8px", flex: "1" }}>
                <Highlighter
                  highlightStyle={{ backgroundColor: "#b095da" }}
                  searchWords={wordsToHighlight}
                  autoEscape={true}
                  textToHighlight={inputValue}
                  style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
                />
              </div>
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
                loading={loading}
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
