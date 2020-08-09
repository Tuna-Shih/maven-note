import { useContext, useMemo } from 'react';

import ServiceContext from '../Services';

export default value => {
  const { services } = useContext(ServiceContext);

  return useMemo(
    () =>
      services.reduce((prev, { serviceCategory }) => {
        if (
          prev.includes(serviceCategory) ||
          (value && !serviceCategory.includes(value))
        ) {
          return prev;
        }

        const nextIndex = prev.findIndex(element => serviceCategory < element);
        const options = [...prev];

        options.splice(
          nextIndex > -1 ? nextIndex : prev.length,
          0,
          serviceCategory,
        );

        return options;
      }, []),

    [value, services],
  );
};
