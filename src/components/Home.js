// @flow
import React, { useState } from 'react';
import { List, Select } from 'antd';

import Menu from './Menu';
import Service from './Service';
import ServiceItem from './ServiceItem';

import styles from './styles/Home.less';

const { Option } = Select;

/** @react Home page */
const Home = (): Nodetype => {
  const [services, setServices] = useState([]);

  const addService = (inputData) => {
    const newServices = [inputData, ...services];
    setServices(newServices);
  };

  return (
    <div className={styles.root}>
      <Menu />
      <div className={styles.header}>Service Tracker</div>
      <div>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder=""
          optionFilterProp="children"
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
        $0/mo
        <div>Add new service to start tracking.</div>
      </div>

      <List
        size="small"
        bordered
        dataSource={services}
        renderItem={(service) => (
          <List.Item>
            <ServiceItem
              key={service.id}
              service={service}
              deleteService={(id) => {
                const newServices = services.filter(
                  (service) => service.id !== id,
                );
                setServices(newServices);
              }}
            />
          </List.Item>
        )}
      />
      <Service addService={addService} />
    </div>
  );
};

export default Home;
