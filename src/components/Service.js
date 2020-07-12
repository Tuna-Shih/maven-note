// @flow
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Drawer, Form, Button, Col, Row, Input, Select } from 'antd';

const { Option } = Select;

/** @react Service component */
const Service = ({ addService }): Nodetype => {
  const [visible, setVisible] = useState(false);
  // const [childrenDrawer, setChildrenDrawer] = useState(false);

  const onFinish = (inputData) => {
    inputData.id = uuidv4();

    addService(inputData);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        New Service
      </Button>
      <Drawer
        style={{ transform: null }}
        title="Add Service"
        width="100%"
        onClose={() => {
          setVisible(false);
        }}
        visible={visible}
      >
        <Form layout="vertical" hideRequiredMark onFinish={onFinish}>
          {/* <Row>
            <Col span={24}>
              <Form.Item
                name="url"
                label="Url"
                rules={[{ required: true, message: 'Please enter url' }]}
              >
                <Input
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="logo / icon"
                label="LOGO / ICON"
                rules={[{ required: true, message: 'Please select an owner' }]}
              >
                <Button
                  type="primary"
                  onClick={() => {
                    setChildrenDrawer(true);
                  }}
                >
                  Upload
                </Button>
                <Drawer
                  title="Upload Logo/Icon"
                  placement="bottom"
                  closable={true}
                  onClose={() => {
                    setChildrenDrawer(false);
                  }}
                  visible={childrenDrawer}
                >
                  Upload
                </Drawer>
              </Form.Item>
            </Col>
          </Row>*/}
          <Row>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
          </Row>
          {/* <Row>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
          </Row> */}
          <Row>
            <Col span={24}>
              <Button
                onClick={() => {
                  setVisible(false);
                }}
                type="primary"
                htmlType="submit"
              >
                Add Service
              </Button>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default Service;
