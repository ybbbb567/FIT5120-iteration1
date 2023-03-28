import React from "react";

import { Text, Img } from "components";

const Navigationbar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
          <div className="bg-black_900_e5 flex items-start justify-start p-[26px] sm:px-[20px] w-[100%]">
            <div className="flex items-center justify-start mb-[31px] md:ml-[0] ml-[342px] md:w-[100%] w-[auto]">
              <Text
                className="font-bold font-opensans text-center text-white_A700 tracking-[-0.39px] w-[auto]"
                as="h4"
                variant="h4"
              >
                {props?.home}
              </Text>
            </div>
          </div>
        </div>
        <Img
          src={props?.picwishone}
          className="absolute h-[125px] left-[0] object-cover top-[0] w-[13%]"
          alt="picwishOne"
        />
        <div className="absolute h-[257px] md:h-[61px] inset-y-[0] my-[auto] py-[24px] right-[5%] w-[14%]">
          <div className="absolute bg-white_A700 flex inset-x-[0] items-end justify-start mx-[auto] p-[15px] rounded-[8px] shadow-bs top-[0] w-[91%]">
            <Img
              src="images/img_arrowdown.svg"
              className="h-[4px] my-[8px] w-[auto]"
              alt="arrowdown"
            />
          </div>
          <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] px-[10px] top-[0] w-[100%]">
            <div className="flex items-center justify-center rounded-[8px] w-[201px]">
              <div className="flex items-start justify-end p-[11px] w-[100%]">
                <Text
                  className="font-montserrat md:ml-[0] ml-[4px] not-italic text-bluegray_900 text-left w-[auto]"
                  variant="body2"
                >
                  {props?.language}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Navigationbar.defaultProps = {
  home: "Home",
  picwishone: "images/img_picwish1_125x203.png",
  language: "Chinese",
};

export default Navigationbar;
