import React from 'react';

import Header from './Header';
import { ServicesProvider } from './Services';
import styles from './styles/Home.less';

/** @react Home page */
const Home = () => (
  <ServicesProvider>
    <div className={styles.root}>
      <Header />
      <div className={styles.header}>Service Tracker</div>
      TodoList TodoService
    </div>
  </ServicesProvider>
);

export default React.memo(Home);
