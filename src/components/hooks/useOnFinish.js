import { useCallback, useContext } from 'react';

import ServiceContext from '../Services';

export default (form, setVisible) => {
  const { add } = useContext(ServiceContext);

  return useCallback(
    data => {
      add(data);
      form.resetFields();
      setVisible(false);
    },
    [add, form, setVisible],
  );
};
