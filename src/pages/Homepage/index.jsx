import React, { useEffect } from "react";
import { useState } from "react";
import { getFeedback } from "api/feedback";
import { Text, Button, Img, Line } from "components";
import HomepageStackone from "components/HomepageStackone";
import Footer from "components/Footer";
import Navigationbar from "components/Navigationbar";
import { useNavigate } from "react-router-dom";
import { Carousel } from "antd";


<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
/>;

const HomepagePage = () => {
  const navigate = useNavigate();

  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",

    
  };

  const [feedbackList, setFeedbackList] = useState([]);

  //initial
  useEffect(() => {
    const fetchData = async () => {
      const resultList = await getFeedback().then((res) => res.result);
      if (resultList) {
        setFeedbackList(resultList);
        console.log(resultList);
      }
    };
    fetchData();
  }, []);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (

    
    <>
      <div className="bg-gray_400 font-opensans h-[2000px] mx-[auto] relative w-[100%]">
      <div className="absolute bg-gradient2  bottom-[0] flex inset-x-[0] items-center justify-end mx-auto pt-[92px] w-full">
          <div className="flex flex-col md:gap-10 gap-[61px] items-center justify-start w-full">
            <div className="flex flex-col md:gap-10 gap-[81px] justify-start w-full">
              <div className="h-[750px] md:px-5 relative w-full">
                <Img
                  src="images/img_asdadwadzscmod.png"
                  className="h-[750px] m-auto object-cover w-full"
                  alt="asdadwadzscmod"
                />
             
             <div className="absolute flex flex-col items-start justify-start left-[5%] top-[9%] w-[45%]">
                  <Text
                    className="font-bold font-opensans text-left text-white_A700 tracking-[-0.36px] w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Let’s check the security of the website you will browse
                  </Text>
                  <Text
                    className="font-normal font-opensans leading-[72.00px] mt-[83px] not-italic text-left text-white_A700 tracking-[-0.36px] w-full"
                    as="h3"
                    variant="h3"
                  >
                    The internet makes it easy for scammers to trick people into
                    giving away their money and personal information
                  </Text>
                <Button
                  className="common-pointer bg-bluegray_700 border-[1px] bg-gradient1 border-solid cursor-pointer font-bold font-montserrat leading-[normal] sm:min-w-[100%] min-w-[548px] md:ml-[0] ml-[32px] mt-[80px] py-[28px] rounded-[6px] text-[20px] text-center text-white_A700 tracking-[-0.30px] w-[auto]"
                  onClick={() => navigate("/searchpage")}
                >
                  Start Check Website
                </Button>
              </div>
             
         
            </div>
            </div>

            
            <div className="h-[1px] md:h-[25px] md:ml-[0] ml-[38px] mt-[24px] md:px-[20px] relative md:w-[100%] w-[91%]">
              <div className="absolute h-[1px] inset-[0] justify-center m-[auto] w-[100%]">
                
              </div>
            </div>
          

            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1538px] mx-auto md:px-5 w-full">
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[150px] justify-start md:mt-0 mt-1.5 w-auto md:w-full">
                  <Text
                    className="text-center text-gray_900 w-[87%] sm:w-full"
                    as="h2"
                    variant="h2"
                  >
                    Some Questions to challenge your knowledge
                  </Text>
                  <div className="flex flex-col md:gap-10 gap-[93px] items-start justify-start md:ml-[0] ml-[59px] w-[92%] md:w-full">
                    <Text
                      className="font-normal font-opensans not-italic text-black_900 text-left w-full"
                      as="h3"
                      variant="h3"
                    >
                      <>
                        Here&#39;s a simple test of your knowledge of phishing
                        scams, and online shopping fraud. Take this quiz to find
                        out how to protect yourself from internet fraud.
                      </>
                    </Text>
                    <Button className="bg-gradient1 border border-blue_500 border-solid cursor-pointer font-bold font-montserrat leading-[normal] min-w-[548px] sm:min-w-full py-7 rounded-md text-center text-white_A700 text-xl tracking-[-0.30px] w-auto">
                      Start the Quiz
                    </Button>
                  </div>
                </div>
                <Img
                  src="images/img_quiz.png"
                  className="md:flex-1 h-[663px] sm:h-auto object-cover w-auto md:w-full"
                  alt="quiz"
                />
              </div>
              
            <Footer className="flex flex-col font-spacegrotesk items-center justify-start w-[100%]" />
          </div>
        </div>



        
        <Navigationbar
          className="absolute flex inset-x-[0] items-center justify-center mx-[auto] md:px-[20px] top-[0] w-[100%]"
          home="Home"
          language="Chinese"
          picwishone="images/img_picwish2_125x227.png"
        />
      </div>
    </>
  );
};

export default HomepagePage;
