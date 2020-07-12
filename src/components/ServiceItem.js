// @flow

import React, { useState } from 'react';

import { Drawer, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import styles from './styles/ServiceItem.less';

/** @react ServiceItem component */
const ServiceItem = ({ service, deleteService }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <div>
      <span>{service.name}</span>{' '}
      <Button>
        <EditOutlined />
      </Button>
      <Button type="primary" onClick={showDrawer}>
        <DeleteOutlined />
      </Button>
      <Drawer
        title="Delete Service"
        placement="bottom"
        closable={false}
        visible={visible}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button
              onClick={() => {
                setVisible(false);
              }}
              style={{ marginRight: 8 }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                setVisible(false);
                deleteService(service.id);
              }}
              type="primary"
            >
              Delete
            </Button>
          </div>
        }
      >
        Are you sure you want to delete this service?
      </Drawer>
    </div>
  );
};

export default ServiceItem;
