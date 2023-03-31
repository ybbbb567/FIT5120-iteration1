import { Button, Form, Input, Modal, Col, Row, Rate } from 'antd';
import { useState } from 'react';
import { Img } from "components";
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { addFeedback } from 'api/feedback';

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

const CollectionCreateForm = ({ open, onCreate, onCancel, getToday }) => {
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
            const createdTime = getToday()
            const feedback = {
              name: values.name,
              email: values.email,
              rate: values.rate,
              content: values.add_fed,
              createdTime: createdTime
              // createdTime: today.getUTCDate() + '-' + today.getUTCMonth() + '-' + today.getUTCFullYear()
            }
            console.log(getToday())
            addFeedback(feedback).then(res => {
              if (res.result) {
                console.log(res)
              }
            })
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
          rate: 3
        }}
      >
        {/* <Row gutter={[16, 8]}>
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

        </Row> */}

        <Row gutter={[16, 8]}>
          <Col span={1}></Col>
          <Col span={11}>
            <label >Name:</label>
          </Col>
          <Col span={11}>
            <label >Email:</label>
          </Col>
        </Row>
        {/* <div>
            <Text>Your service rating</Text>
          </div> */}

        <Row gutter={[16, 8]}>
          <Col span={1}></Col>
          <Col span={11}>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please enter your full name!',
                },
              ]}
            >
              <Input suffix={<UserOutlined className="site-form-item-icon-0" />} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: 'Please enter correct email address!',
                },
              ]}
            >
              <Input type="email" placeholder="Email address" suffix={<MailOutlined className="site-form-item-icon-1" />} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 8]}>
          <Col span={1}></Col>
          <Col span={23}>
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
          <Col span={23}>
            <label >Additional Feedback:</label>
          </Col>
        </Row>

        <Row gutter={[16, 8]}>
          <Col span={1}></Col>
          <Col span={23}>
            <Form.Item name="add_fed" style={{ width: "560px" }}>
              <Input.TextArea placeholder="If you have any additional feedback, please type it in here..." style={{ height: "250px" }} />
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

  const getToday = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const day = ("0" + currentDate.getDate()).slice(-2);
    const hours = ("0" + currentDate.getHours()).slice(-2);
    const minutes = ("0" + currentDate.getMinutes()).slice(-2);
    const seconds = ("0" + currentDate.getSeconds()).slice(-2);
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDate;
  }

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
          getToday={getToday}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </footer>
    </>
  );
};
export default Footer;
