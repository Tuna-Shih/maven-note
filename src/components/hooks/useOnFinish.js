import { useCallback, useContext } from 'react';

import ServiceContext from '../Services';

export default (form, setVisible) => {
  const { add, edit } = useContext(ServiceContext);

  return useCallback(
    ({ id, ...data }) => {
      if (!id) {
        add(data);
      } else {
        edit(id, data);
      }

      form.resetFields();
      setVisible(false);
    },
    [add, edit, form, setVisible],
  );
};
