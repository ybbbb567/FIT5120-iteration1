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
        <div
          className="font-pacifico md:h-[1125px] h-[1800px] max-w-[1660px] mx-auto p-[129px] md:px-5 relative w-full">
          <Text
            className="font-semibold md:ml-[0] ml-[312px] text-black_900 text-left tracking-[-0.72px] w-[auto]"
            as="h4"
            variant="h4"
          >
            SMS Fraud Detection
          </Text>
          <br />
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
              <button onClick={handleSubmit} style={{
                backgroundColor: "#0984E3",
                color: "#ffffff",
                padding: "8px 16px",
                fontSize: "16px",
                cursor: "pointer",
              }}>
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
