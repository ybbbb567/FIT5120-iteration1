import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="bg-black_900 flex sm:flex-col flex-row gap-[106px] md:gap-[40px] items-center justify-center sm:pr-[20px] pr-[22px] py-[22px] w-[100%]">
          <Img
            src="images/img_picwish2_125x227.png"
            className="sm:flex-1 h-[125px] md:h-[auto] object-cover sm:w-[100%] w-[14%]"
            alt="picwishTwo"
          />
          <Text
            className="font-bold font-spacegrotesk text-left text-white_A700 w-[auto]"
            as="h3"
            variant="h3"
          >
            Feedback
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
