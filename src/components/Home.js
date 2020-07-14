import React from 'react';

import styles from './styles/Home.less';

/** @react Home page */
const Home = () => (
  <div className={styles.root}>
    TodoMenu
    <div className={styles.header}>Service Tracker</div>
    TodoList TodoService
  </div>
);

export default React.memo(Home);
