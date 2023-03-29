import { Button, Form, Input, Modal, Col, Row, Rate} from 'antd';
import { useState } from 'react';
import { Img} from "components";

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

const updateSize = document.querySelector('body').offsetWidth;

const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
      <Modal
        open={open}
        title="Hello, we would love to hear your feedback!"
        okText="Submit Feedback"
        cancelText="Cancel"
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
        //width={updateSize==720?'70%':'50%'}
        //centered
        //style={{ background: 'white', marginTop: '50px', marginLeft: '100px', marginRight: '100px' }}
      >
        <Form
          form={form}
          name="form_in_modal"
          {...formItemLayout}
          initialValues={{
            rate: 3.5
          }}
        >
          
          <Row gutter={[16,8]}>
            <Col span={12}>
              <Form.Item
                name="visitor"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your full name!',
                  },
                ]}
              >
                <Input />
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
                <Input type="email" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="rate" label="Rate">
            <Rate />
          </Form.Item>

          <Form.Item name="add_com" label="Additional Comment">
            <Input.TextArea />
          </Form.Item> 
          
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
            style={{fontSize: '40px'}}
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
