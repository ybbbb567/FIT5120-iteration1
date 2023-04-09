import { Button, Form, Input, Modal, Col, Row, Rate } from "antd";
import { useState } from "react";
import { Img } from "components";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { addFeedback } from "api/feedback";

const Footer = () => {
  return (
    <>
      <footer className="bg-black_900 flex flex-row gap-40 items-center justify-start pr-10 sm:pr-20 md:pr-40 w-full max-w-screen-xl">
        <Img
          src="images/img_picwish2_125x227.png"
          className="md:flex-1 h-[145px] sm:h-[auto] object-cover md:w-[100%] "
          alt="picwishTwo"
        />
      </footer>
    </>
  );
};
export default Footer;
