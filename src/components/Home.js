import React from 'react';

import Header from './Header';
import styles from './styles/Home.less';

/** @react Home page */
const Home = () => (
  <div className={styles.root}>
    <Header />
    <div className={styles.header}>Service Tracker</div>
    TodoList TodoService
  </div>
);

export default React.memo(Home);
