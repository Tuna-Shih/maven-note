import React from 'react';
import { Select, List, Avatar } from 'antd';
import { FormOutlined } from '@ant-design/icons';

import Service from './Service';
import ServiceDelete from './ServiceDelete';
import useFilterServices from './hooks/useFilterServices';
import useOptions from './hooks/useOptions';
import styles from './styles/ServiceList.less';

const { Item: ListItem } = List;
const { Option } = Select;

/** @react ServiceList component */
const ServiceList = () => {
  const options = useOptions();
  const { filteredServices, cost, setSelected } = useFilterServices();

  return (
    <>
      <div className={styles.selectCost}>
        <Select
          className={styles.filter}
          onSelect={setSelected}
          defaultValue="All Services"
          defaultActiveFirstOption
        >
          {['All Services', ...options].map(option => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>

        <div className={styles.cost}>{cost}</div>
      </div>

      {filteredServices.length ? null : (
        <p className={styles.messege}>Add new service to start tracking.</p>
      )}

      <List
        className={styles.list}
        renderItem={service => (
          <ListItem
            actions={[
              <div className={styles.actions}>
                <div className={styles.tools}>
                  <a key={service.serviceUrl} href={service.serviceUrl}>
                    <FormOutlined />
                  </a>
                  <Service
                    key={service.serviceName}
                    initialValues={service}
                    isEdit
                  />
                  <ServiceDelete key={service.id} id={service.id} />
                </div>

                <div className={styles.price}>
                  <span>${service.price}</span>
                  <span> /mo</span>
                </div>
              </div>,
            ]}
          >
            <ListItem.Meta
              avatar={
                <Avatar src={service.iconURL} shape="square" size="large" />
              }
              title={service.serviceName}
              description={service.serviceCategory}
            />
          </ListItem>
        )}
        dataSource={filteredServices}
        itemLayout="horizontal"
      />
    </>
  );
};

export default React.memo(ServiceList);
