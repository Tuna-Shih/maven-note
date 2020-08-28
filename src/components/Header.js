import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import styles from './styles/Header.less';

/** @react Header component */
const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.root}>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        <MenuOutlined />
      </Button>
      <Drawer
        className={styles.menu}
        onClose={() => {
          setVisible(false);
        }}
        visible={visible}
        width="100%"
        placement="left"
      >
        <Button type="primary">Log in with Google</Button>
        <Button type="primary">Settings</Button>
        <Button type="primary">Donate</Button>
        <Button type="primary">Feedback</Button>
      </Drawer>
    </div>
  );
};

export default React.memo(Header);
