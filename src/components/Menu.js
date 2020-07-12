// @flow

import React, { useState } from 'react';

import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styles from './styles/Menu.less';

/** @react Menu component */
const Menu = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className={styles.root}>
      <Button type="primary" onClick={showDrawer}>
        <MenuOutlined />
      </Button>
      <Drawer width="100%" closable={false} visible={visible} placement="left">
        <Button onClick={onClose}>X</Button>
        <Button>Log in with Google</Button>
        <Button>Settings</Button>
        <Button>Donate</Button>
        <Button>Feedback</Button>
      </Drawer>
    </div>
  );
};

export default Menu;
