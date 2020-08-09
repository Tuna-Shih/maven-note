import React, { forwardRef } from 'react';
import { AutoComplete } from 'antd';

import useOptions from './hooks/useOptions';
import './styles/ServiceCategory.less';

const { Option } = AutoComplete;

/** @react ServiceCategory component */
const ServiceCategory = forwardRef(({ value, ...props }, ref) => {
  const options = useOptions(value);

  return (
    <AutoComplete
      {...props}
      ref={ref}
      notFoundContent={
        <div>
          <span>{'Create'}</span>
          <span>{value}</span>
        </div>
      }
      placeholder="Select or create a category"
    >
      {options.map(option => (
        <Option value={option} key={option}>
          {option}
        </Option>
      ))}
    </AutoComplete>
  );
});

export default React.memo(ServiceCategory);
