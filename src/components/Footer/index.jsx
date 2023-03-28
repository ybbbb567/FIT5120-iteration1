import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="bg-black_900 flex sm:flex-col flex-row sm:gap-[20px] items-center justify-center pr-[1215px] sm:pr-[20px] md:pr-[40px] w-[100%]">
          <Img
            src="images/img_picwish2_125x227.png"
            className="md:flex-1 h-[170px] sm:h-[auto] object-cover md:w-[100%] w-[60%]"
            alt="picwishTwo"
          />
          <Text
            className="font-spacegrotesk text-left text-white_A700 w-[auto]"
            as="h2"
            variant="h2"
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
