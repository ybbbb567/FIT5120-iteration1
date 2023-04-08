import { Button, Form, Input, Modal, Col, Row, Rate } from "antd";
import { useState } from "react";
import { Img } from "components";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { addFeedback } from "api/feedback";

const Footer = () => {
  return (
    <>
      <footer className="bg-black_900 flex flex-row gap-[400px] items-center justify-start pr-[1318px] sm:pr-[20px] md:pr-[40px] w-[100%]">
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
