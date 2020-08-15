import React, { useContext } from 'react';
import { List, Avatar } from 'antd';
import { FormOutlined } from '@ant-design/icons';

import ServiceContext from './Services';
import Service from './Service';
import ServiceDelete from './ServiceDelete';
import styles from './styles/ServiceList.less';

const { Item: ListItem } = List;

/** @react ServiceList component */
const ServiceList = () => {
  const { services } = useContext(ServiceContext);

  return (
    <>
      filterSelect and cost
      <p className={styles.messege}>
        {services.length ? null : `Add new service to start tracking.`}
      </p>
      <List
        className={styles.list}
        renderItem={service => (
          <ListItem
            actions={[
              <a href={service.serviceUrl}>
                <FormOutlined />
              </a>,

              <Service initialValues={service} isEdit />,

              <ServiceDelete id={service.id} />,
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
        dataSource={services}
        itemLayout="horizontal"
      />
    </>
  );
};

export default React.memo(ServiceList);
