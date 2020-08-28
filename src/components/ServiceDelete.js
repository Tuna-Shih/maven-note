import React, { useState, useContext } from 'react';
import { Button, Drawer } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import ServiceContext from './Services';
import styles from './styles/ServiceDelete.less';

/** @react ServiceDelete component */
const ServiceDelete = ({ id }) => {
  const { remove } = useContext(ServiceContext);
  const [deleteVisible, setDeleteVisible] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setDeleteVisible(true);
        }}
      >
        <DeleteOutlined />
      </Button>

      <Drawer
        className={styles.deleteDrawer}
        footer={
          <>
            <Button
              onClick={() => {
                setDeleteVisible(false);
              }}
            >
              Cancel
            </Button>

            <Button
              onClick={() => {
                setDeleteVisible(false);
                remove(id);
              }}
              type="primary"
            >
              Delete
            </Button>
          </>
        }
        closable={false}
        visible={deleteVisible}
        title="Delete Service"
        placement="bottom"
      >
        Are you sure you want to delete this service?
      </Drawer>
    </>
  );
};

export default React.memo(ServiceDelete);
