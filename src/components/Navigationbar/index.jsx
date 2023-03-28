import React from "react";

import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const Navigationbar = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="flex items-center justify-start mx-[auto] w-[100%]">
          <div className="bg-black_900_e5 flex flex-row gap-[14px] items-center justify-start pr-[1318px] sm:pr-[20px] md:pr-[40px] w-[100%]">
            <Img
              src={props?.picwishone}
              className="h-[121px] md:h-[auto] object-cover w-[64%]"
              alt="picwishOne"
            />
            <div className="flex items-center justify-start w-[auto]">
              <Text
                className="common-pointer font-opensans text-center text-white_A700 tracking-[-0.60px] w-[auto]"
                as="h2"
                variant="h2"
                onClick={() => navigate("/")}
              >
                {props?.home}
              </Text>
            </div>
          </div>
        </div>
        <div className="md:h-[-60px] h-[257px] mb-[auto] ml-[auto] mr-[27px] mt-[-121px] py-[24px] w-[14%] z-[1]">
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
                  variant="body3"
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
  language: "Chinese",
  picwishone: "images/img_picwish2_125x227.png",
};

export default Navigationbar;
