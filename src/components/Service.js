import React, { useState } from 'react';
import { Drawer, Form, Button, Input, Select, InputNumber } from 'antd';
import isURL from 'validator/lib/isURL';
import { EditOutlined } from '@ant-design/icons';

import UploadIcon from './UploadIcon';
import ServiceCategory from './ServiceCategory';
import styles from './styles/Service.less';
import useOnFinish from './hooks/useOnFinish';

const { Option } = Select;
const { Item: FormItem } = Form;

/** @react Service component */
const Service = ({ isEdit, ...props }) => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const onFinish = useOnFinish(form, setVisible);

  return (
    <>
      <Button
        className={isEdit ? '' : styles.newService}
        onClick={() => {
          setVisible(true);
        }}
      >
        {isEdit ? <EditOutlined /> : 'New Service'}
      </Button>

      <Drawer
        className={styles.service}
        onClose={() => {
          setVisible(false);
          form.resetFields();
        }}
        visible={visible}
        title={isEdit ? 'Edit Service' : 'Add Service'}
        width="100%"
      >
        <Form
          {...props}
          onFinish={onFinish}
          form={form}
          layout="vertical"
          validateTrigger="onBlur"
          hideRequiredMark
        >
          <FormItem
            rules={[
              { required: true },
              {
                validator: (rule, value) =>
                  isURL(value)
                    ? Promise.resolve()
                    : Promise.reject(new Error('error')),
              },
            ]}
            name="serviceUrl"
            label="SERVICE URL"
          >
            <Input placeholder="Please enter url" />
          </FormItem>

          <FormItem name="iconURL" label="LOGO / ICON">
            <UploadIcon />
          </FormItem>

          <FormItem
            rules={[{ required: true }]}
            name="serviceName"
            label="SERVICE NAME"
          >
            <Input placeholder="Please enter service name" />
          </FormItem>

          <FormItem
            rules={[{ required: true }]}
            name="serviceCategory"
            label="Service Category"
          >
            <ServiceCategory />
          </FormItem>

          <FormItem rules={[{ required: true }]} name="price" label="PRICE">
            <InputNumber
              formatter={value => `$ ${value}`}
              min={0}
              max={1000000}
              placeholder="$0 - $1,000,000"
            />
          </FormItem>

          <FormItem
            rules={[{ required: true }]}
            name="recurrence"
            label="RECURRENCE"
          >
            <Select placeholder="Please Select">
              <Option value="daily">Daily</Option>
              <Option value="monthly">Monthly</Option>
              <Option value="yearly">Yearly</Option>
            </Select>
          </FormItem>

          <FormItem name="id" hidden>
            <Input />
          </FormItem>

          <Button
            className={styles.addService}
            htmlType="submit"
            type="primary"
          >
            {isEdit ? 'Save' : 'Add Service'}
          </Button>
        </Form>
      </Drawer>
    </>
  );
};

export default React.memo(Service);
