import React from "react";

import Navigationbar from "components/Navigationbar";
import { Text, Img } from "components";
import Footer from "components/Footer";

const SearchPagePage = () => {
  return (
    <>
      <div className="bg-gradient  flex flex-col font-opensans items-center justify-start mx-[auto] w-[100%]">
        <Navigationbar
          className="flex items-center justify-center md:px-[20px] w-[100%]"
          home="Home"
          language="Chinese"
          picwishone="images/img_picwish2_125x227.png"
        />
        <div className="flex flex-col md:gap-[40px] gap-[76px] justify-start mt-[21px] pr-[122px] sm:pr-[20px] md:pr-[40px] py-[122px] w-[100%]">
          <Text
            className="font-semibold md:ml-[0] ml-[312px] text-black_900 text-left tracking-[-0.72px] w-[auto]"
            as="h1"
            variant="h1"
          >
            Type the link of the website you want access below
          </Text>
          <div className="font-dmsans h-[500px] md:h-[721px] mb-[221px] mr-[314px] relative md:w-[100%] w-[80%]">
            <Img
              src="images/img_searchbar.svg"
              className="absolute h-[36px] right-[8%] top-[25%] w-[930px]"
              alt="searchbar"
            />
            <Img
              src="images/img_websitebackgro_500x500.png"
              className="absolute h-[500px] inset-y-[0] left-[0] my-[auto] object-cover w-[500px]"
              alt="websitebackgro"
            />
            <div className="absolute h-[102px] right-[0] top-[31%] md:w-[100%] w-[58%]">
              <Text
                className="ml-[124px] my-[auto] not-italic text-left text-white_A700 w-[auto]"
                as="h6"
                variant="h6"
              >
                Check
              </Text>
              <Img
                src="images/img_component4.png"
                className="absolute h-[102px] inset-[0] justify-center m-[auto] object-cover w-[auto]"
                alt="componentFour"
              />
            </div>
          </div>
        </div>
        <Footer className="flex font-spacegrotesk items-center justify-center mt-[374px] md:px-[20px] w-[100%]" />
      </div>
    </>
  );
};

export default SearchPagePage;
