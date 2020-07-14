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
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        <MenuOutlined />
      </Button>
      <Drawer
        className={styles.menu}
        width="100%"
        visible={visible}
        placement="left"
        onClose={() => {
          setVisible(false);
        }}
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
