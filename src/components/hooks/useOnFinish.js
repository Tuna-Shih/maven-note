import { useCallback, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ServiceContext from '../Services';

export default (form, setVisible) => {
  const { add } = useContext(ServiceContext);

  return useCallback(
    data => {
      add({ ...data, id: uuidv4() });
      form.resetFields();
      setVisible(false);
    },
    [add, form, setVisible],
  );
};
