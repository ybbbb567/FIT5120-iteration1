import React from "react";

import { Img, Text } from "components";
import Footer from "components/Footer";
import Navigationbar from "components/Navigationbar";

const QuizPage = () => {
  return (
    <>
      <div className="bg-gradient  flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <Navigationbar
          className="flex flex-col items-center justify-start w-auto md:w-full"
          home="Home"
        />
        <div className="font-pacifico md:h-[1125px] h-[1379px] max-w-[1660px] mt-[90px] mx-auto p-[129px] md:px-5 relative w-full">
      
          <div className="absolute bg-gradient1  flex flex-col inset-x-[0] justify-start mx-auto pb-[37px] sm:pr-5 pr-[37px] top-[0] w-[81%]">
            <div className="h-[212px] mr-[933px] relative w-[29%]">
              <Img
                src="images/img_ellipse1.png"
                className="h-[212px] m-auto object-cover w-full"
                alt="ellipseOne"
              />
              <Text
                className="absolute font-normal leading-[54.00px] left-[3%] not-italic text-center text-gray_900 top-[20%]"
                as="h1"
                variant="h1"
              >
                <>
                  Website Security
                  <br />
                  Quiz
                </>
              </Text>
            </div>
            <Text
              className="font-normal md:ml-[0] ml-[35px] mt-12 not-italic text-black_900 text-center w-auto"
              as="h1"
              variant="h1"
            >
              What is the{" "}
            </Text>
            <Text
              className="font-normal leading-[54.00px] md:ml-[0] ml-[183px] mt-[71px] not-italic text-black_900 text-center"
              as="h1"
              variant="h1"
            >
              <>
                A<br />B<br />C<br />D
              </>
            </Text>
            <div className="bg-white_A700 flex h-24 items-center justify-start md:ml-[0] ml-[1193px] mr-[11px] mt-[122px] pl-0.5 rounded-[50%] w-24">
              <Img
                src="images/img_arrowright.svg"
                className="h-24 w-auto"
                alt="arrowright"
              />
            </div>
          </div>
        </div>
        <Footer
          className="flex flex-col font-spacegrotesk items-center justify-start mt-[171px] w-full"
          feedback="Feedback"
        />
      </div>
    </>
  );
};

export default QuizPage;
