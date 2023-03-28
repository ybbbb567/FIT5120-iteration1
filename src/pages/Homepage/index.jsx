import React from "react";

import { Text, Button, Img, Line, List } from "components";
import HomepageStackone from "components/HomepageStackone";
import Footer from "components/Footer";
import Navigationbar from "components/Navigationbar";
import { useNavigate } from "react-router-dom";

const HomepagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_400 font-opensans h-[2015px] mx-[auto] relative w-[100%]">
        <div className="absolute bg-gradient2  bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] py-[38px] w-[100%]">
          <div className="flex flex-col justify-start mb-[6px] w-[100%]">
            <div className="flex md:flex-col flex-row gap-[31px] items-start justify-start max-w-[1553px] mx-[auto] md:px-[20px] w-[100%]">
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[122px] md:w-[100%] w-[49%]">
                <Text
                  className="font-bold font-opensans text-gray_903 text-left tracking-[-0.36px] w-[auto]"
                  variant="body1"
                >
                  Let’s check the security of the website you will browse
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
              className="md:ml-[0] ml-[597px] mt-[80px] text-center text-gray_903 w-[auto]"
              as="h3"
              variant="h3"
            >
              What our users say about us
            </Text>
            <Line className="bg-black_900_e5 h-[3px] md:ml-[0] ml-[788px] mr-[812px] mt-[39px] w-[5%]" />
            <List
              className="sm:flex-col flex-row font-spacegrotesk md:gap-[40px] gap-[83px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1555px] mt-[149px] mx-[auto] md:px-[20px] w-[100%]"
              orientation="horizontal"
            >
              <div className="flex flex-1 items-center justify-start pb-[35px] w-[100%]">
                <HomepageStackone
                  className="h-[267px] relative w-[100%]"
                  thiswebsiteis={
                    <>
                      This website is useful and real help me <br />
                      to avoid the scam
                    </>
                  }
                />
              </div>
              <HomepageStackone className="flex flex-1 flex-col items-center justify-start w-[100%]" />
              <HomepageStackone className="flex flex-1 flex-col items-center justify-start w-[100%]" />
            </List>
            <Img
              src="images/img_group9.svg"
              className="h-[56px] md:ml-[0] ml-[717px] mt-[123px] w-[auto]"
              alt="groupNine"
            />
            <Footer className="flex flex-col font-spacegrotesk items-center justify-start mt-[264px] w-[100%]" />
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
