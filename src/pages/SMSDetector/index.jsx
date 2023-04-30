import React from "react";
import { useState } from "react";
import Navigationbar from "components/Navigationbar";
import Footer from "components/Footer";
import { Text } from "components";
import { checkSMS } from "api/check";
import { Card } from 'antd';


const SMSDetectorPage = () => {

  const [inputValue, setInputValue] = useState("");

  const [result, setResult] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    checkSMS(inputValue).then(res => {
      if (res.result) {
        console.log(res.result);
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
<h3 className="text-xl text-center font-bold py-12" >SMS Detector identifies scam texts by analyzing their content. It detects suspicious links, requests for personal info, and common scam phrases. 
This helps users stay safe from fraud.It will give three different result.</h3>

      <ul className="text-xl text-center font-bold text-blueGray italic">
        <li>Ham: </li>
        <li>Spam:</li>
        <li>Milk</li>
      </ul>
  

          <div style={{
            backgroundColor: "#ffffff",
            padding: "16px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
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
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button class="btn cta bg "onClick={handleSubmit} 
              >
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
