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
        type="primary"
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
        <Button>Log in with Google</Button>
        <Button>Settings</Button>
        <Button>Donate</Button>
        <Button>Feedback</Button>
      </Drawer>
    </div>
  );
};

export default React.memo(Header);
