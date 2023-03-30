import { Button, Form, Input, Modal, Col, Row, Rate } from 'antd';
import { useState } from 'react';
import { Img } from "components";
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import colors from 'tailwindcss/colors';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

//const updateSize = document.querySelector('body').offsetWidth;

const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Hello, we would love to hear your feedback!"
      okText="Submit Feedback"
      cancelText="Cancel"
      okButtonProps={{ style: { backgroundColor: '#4A3AFF' } }}
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        name="form_in_modal"
        {...formItemLayout}
        initialValues={{
          rate: 3.5
        }}
      >

        <Row gutter={[16, 8]}>
          <Col span={11}>
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: 'Please enter your full name!',
                },
              ]}
            >
              <Input suffix={<UserOutlined className="site-form-item-icon-0" />} />
              {/* // style={{border: "solid lavender"}}
                        // padding: 5 + "px",
                        // borderRadius: 25 + "px"} */}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: 'Please enter correct email address!',
                },
              ]}
            >
              <Input type="email" placeholder="Email address" suffix={<MailOutlined className="site-form-item-icon-1" />} />
            </Form.Item>
          </Col>
        </Row>
        {/* <div>
            <Text>Your service rating</Text>
          </div> */}

        <Row gutter={[16, 8]}>
          <Col span={1}></Col>
          <Col span={22.5}>
            <label >Your service rating:</label>
          </Col>
        </Row>
        <Row gutter={[16, 8]}>
          <Col span={1}></Col>
          <Col span={23}>
            <Form.Item name="rate"  >
              <Rate />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 8]}>
          <Col span={1}></Col>
          <Col span={22.5}>
            <label >Additional Feedback:</label>
          </Col>
        </Row>

        <Row gutter={[16, 8]}>
          <Col span={1}></Col>
          <Col span={23}>
            <Form.Item name="add_fed">
              <Input.TextArea placeholder="If you have any additional feedback, please type it in here..." />
            </Form.Item>
          </Col>

        </Row>


      </Form>
    </Modal>

  );
};

const Footer = () => {
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };

  return (
    <>
      <footer className="bg-black_900 flex sm:flex-col flex-row sm:gap-[20px] items-center justify-center pr-[1215px] sm:pr-[20px] md:pr-[40px] w-[100%]">
        <Img
          src="images/img_picwish2_125x227.png"
          className="md:flex-1 h-[170px] sm:h-[auto] object-cover md:w-[100%] w-[60%]"
          alt="picwishTwo"
        />
        <Button type="text"
          className="font-spacegrotesk text-left text-white_A700 w-[auto]"
          style={{ fontSize: '40px' }}
          as="h2"
          variant="h2"
          onClick={() => {
            setOpen(true);
          }}
        >
          Feedback
        </Button>
        <CollectionCreateForm
          open={open}
          onCreate={onCreate}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </footer>
    </>
  );
};
export default Footer;
