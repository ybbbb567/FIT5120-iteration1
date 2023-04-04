import React from "react";
import { Text, Img } from "components";
import Navigationbar from "components/Navigationbar";
import Footer from "components/Footer";

const ResultPagePage = () => {
  return (
    <>
      <div className="bg-gradient  flex flex-col font-opensans gap-[171px] sm:gap-[40px] md:gap-[40px] items-center justify-start mx-[auto] w-[100%]">
        <div className="md:h-[1368px] h-[1590px] md:px-[20px] relative w-[100%]">
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-start mx-[auto] pr-[122px] sm:pr-[20px] md:pr-[40px] py-[122px] w-[100%]">
            <Text
              className="font-semibold md:ml-[0] ml-[292px] text-black_900 text-left tracking-[-0.72px] w-[auto]"
              as="h1"
              variant="h1"
            >
              Type the link of the website you want access below
            </Text>
            <div className="font-dmsans h-[500px] md:h-[576px] mr-[294px] mt-[76px] relative md:w-[100%] w-[81%]">
              <Img
                src="images/img_searchbar.svg"
                className="absolute h-[36px] right-[9%] top-[25%] w-[930px]"
                alt="searchbar"
              />
              <Img
                src="images/img_websitebackgro.png"
                className="absolute h-[500px] inset-y-[0] left-[0] my-[auto] object-cover w-[39%]"
                alt="websitebackgro"
              />
              <div className="absolute bg-gradient1  bottom-[36%] flex md:flex-col flex-row gap-[48px] items-center justify-center p-[23px] sm:px-[20px] right-[0] rounded-[15px] w-[58%]">
                <div className="h-[47px] md:ml-[0] ml-[5px] md:mt-[0] mt-[7px] relative w-[47px]">
                  <Img
                    src="images/img_car.svg"
                    className="h-[16px] ml-[5px] mt-[5px] w-[auto]"
                    alt="car"
                  />
                  <Img
                    src="images/img_search.svg"
                    className="absolute h-[47px] inset-[0] justify-center m-[auto] w-[47px]"
                    alt="search"
                  />
                </div>
                <Text
                  className="mr-[492px] not-italic text-left text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Check
                </Text>
              </div>
            </div>
            <div className="bg-white_A700 border-[2px] border-deep_purple_900 border-solid flex flex-col font-sourcesanspro gap-[48px] items-center justify-start mb-[42px] md:ml-[0] ml-[664px] mr-[549px] mt-[153px] pb-[148px] rounded-[24px] shadow-bs1 md:w-[100%] w-[22%]">
              <div className="md:h-[64px] h-[73px] relative w-[100%]">
                <div className="absolute bg-green_A700 flex inset-x-[0] items-start justify-end mx-[auto] p-[9px] top-[0] w-[100%]">
                  <Text
                    className="md:ml-[0] ml-[22px] text-indigo_50 text-left tracking-[-0.26px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Safe
                  </Text>
                </div>
                <div className="absolute bg-green_A700 border-[6px] border-green_300 border-solid bottom-[0] flex h-[64px] items-center justify-start p-[8px] right-[10%] rounded-[50%] w-[64px]">
                  <div className="bg-green_A700 flex h-[48px] items-center justify-start p-[9px] rounded-[50%] w-[48px]">
                    <div className="flex items-center justify-start w-[100%]">
                      <Img
                        src="images/img_checkcircle1.png"
                        className="h-[28px] md:h-[auto] object-cover w-[100%]"
                        alt="checkcircleOne"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex font-hind items-start justify-start w-[260px]">
                <Text
                  className="not-italic text-deep_purple_900 text-left w-[auto]"
                  variant="body2"
                >
                  The link you enter is safety.
                </Text>
              </div>
            </div>
          </div>
          <Navigationbar
            className="absolute h-[257px] inset-x-[0] mx-[auto] top-[0] w-[100%]"
            home="Home"
            language="Chinese"
            picwishone="images/img_picwish2_125x227.png"
          />
        </div>
        <Footer className="flex font-spacegrotesk items-center justify-center md:px-[20px] w-[100%]" />
      </div>
    </>
  );
};

export default ResultPagePage;
