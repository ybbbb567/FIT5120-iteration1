import React, { useEffect } from "react";
import { useState } from 'react';
import { getFeedback } from 'api/feedback'
import { Text, Button, Img, Line } from "components";
import HomepageStackone from "components/HomepageStackone";
import Footer from "components/Footer";
import Navigationbar from "components/Navigationbar";
import { useNavigate } from "react-router-dom";
import { Carousel } from 'antd';

const HomepagePage = () => {
  const navigate = useNavigate();

  const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const [feedbackList, setFeedbackList] = useState([]);

  //initial
  useEffect(() => {
    const fetchData = async () => {
      const resultList = await getFeedback().then(res => res.result)
      if (resultList) {
        setFeedbackList(resultList);
        console.log(resultList);
      }
    };
    fetchData();
  }, [])

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <div className="bg-gray_400 font-opensans h-[1483px] mx-[auto] relative w-[100%]">
        <div className="absolute bg-gradient2  bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
          <div className="flex flex-col justify-start w-[100%]">
            <div className="flex md:flex-col flex-row gap-[31px] items-start justify-start max-w-[1553px] mx-[auto] md:px-[20px] w-[100%]">
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[122px] md:w-[100%] w-[49%]">
                <Text
                  className="font-bold font-opensans text-gray_903 text-left tracking-[-0.36px] w-[auto]"
                  variant="body1"
                >
                  Let's check the security of the website you will browse
                </Text>
                <Text
                  className="font-normal font-opensans leading-[72.00px] mt-[83px] not-italic text-gray_903 text-left tracking-[-0.36px] w-[100%]"
                  variant="body1"
                >
                  The internet makes it easy for scammers to trick people into
                  giving away their money and personal information
                </Text>
                <Button
                  className="common-pointer bg-bluegray_700 border-[1px] border-blue_500 border-solid cursor-pointer font-bold font-montserrat leading-[normal] sm:min-w-[100%] min-w-[548px] md:ml-[0] ml-[32px] mt-[80px] py-[28px] rounded-[6px] text-[20px] text-center text-white_A700 tracking-[-0.30px] w-[auto]"
                  onClick={() => navigate("/searchpage")}
                >
                  Start Check Website
                </Button>
              </div>
              <Img
                src="images/img_asdadwadzscmod.png"
                className="md:flex-1 h-[600px] sm:h-[auto] object-cover md:w-[100%] w-[50%]"
                alt="asdadwadzscmod"
              />
            </div>
            <div className="h-[1px] md:h-[25px] md:ml-[0] ml-[38px] mt-[24px] md:px-[20px] relative md:w-[100%] w-[91%]">
              <Line className="bg-black_900_7f h-[1px] m-[auto] w-[100%]" />
              <div className="absolute h-[1px] inset-[0] justify-center m-[auto] w-[100%]">
                <Line className="bg-black_900_7f h-[1px] m-[auto] w-[100%]" />
                <Line className="absolute bg-black_900_7f h-[1px] inset-[0] justify-center m-[auto] w-[100%]" />
              </div>
            </div>
            <Text
              className="md:ml-[0]  mt-[80px] text-center text-gray_903 w-[auto]"
              as="h3"
              variant="h3"
            >
              What our users say about us
            </Text>
            <Line className="h-[3px] md:ml-[0] ml-[788px] mr-[812px] mt-[39px] w-[5%]" />

            <Carousel
              dots={true}
              dotPosition="bottom"
              slidesToShow={3}
              slidesToScroll={3}
              style={{ height: "400px", padding: "50px" }}
            >
              {feedbackList.map((item, index) => (
                <div key={index} className="padding-[20px]">
                  <HomepageStackone
                    className="h-[250px] relative w-[100%]"
                    thiswebsiteis={item.content}
                    rates={item.rate}
                  />
                </div>
              ))}
            </Carousel>
            <Footer className="flex flex-col font-spacegrotesk items-center justify-start w-[100%]" />
          </div>
        </div>
        <Navigationbar
          className="absolute flex inset-x-[0] items-center justify-center mx-[auto] md:px-[20px] top-[0] w-[100%]"
          home="Home"
          language="Chinese"
          picwishone="images/img_picwish2_125x227.png"
        />
      </div >
    </>
  );
};

export default HomepagePage;
