import React from "react";

import { Text, Img } from "components";
import Navigationbar from "components/Navigationbar";
import Footer from "components/Footer";

const SearchPagePage = () => {
  return (
    <>
      <div className="bg-gradient  flex flex-col font-opensans sm:gap-[40px] md:gap-[40px] gap-[441px] items-center justify-start mx-[auto] w-[100%]">
        <div className="md:h-[1071px] sm:h-[1107px] h-[1320px] md:px-[20px] relative w-[100%]">
          <div className="absolute bg-white_A700 bottom-[0] flex flex-col md:gap-[40px] gap-[76px] inset-x-[0] justify-start mx-[auto] pr-[122px] sm:pr-[20px] md:pr-[40px] py-[122px] w-[99%]">
            <Text
              className="font-semibold md:ml-[0] ml-[292px] text-black_900 text-left tracking-[-0.72px] w-[auto]"
              as="h1"
              variant="h1"
            >
              Type the link of the website you want access below
            </Text>
            <div className="font-dmsans h-[500px] md:h-[721px] mb-[221px] mr-[294px] relative md:w-[100%] w-[81%]">
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
                  as="h5"
                  variant="h5"
                >
                  Check
                </Text>
              </div>
            </div>
          </div>
          <Navigationbar
            className="absolute h-[278px] inset-x-[0] mx-[auto] top-[0] w-[100%]"
            home="Home"
            picwishone="images/img_picwish1.png"
          />
        </div>
        <Footer className="flex font-spacegrotesk items-center justify-center md:px-[20px] w-[100%]" />
      </div>
    </>
  );
};

export default SearchPagePage;
