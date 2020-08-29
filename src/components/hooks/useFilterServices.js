import { useMemo, useContext, useState } from 'react';

import ServiceContext from '../Services';

export default () => {
  const { services } = useContext(ServiceContext);
  const [selected, setSelected] = useState('All Services');

  const filtered = useMemo(() => {
    const filteredServices =
      selected === 'All Services'
        ? services
        : services.filter(
            ({ serviceCategory }) => serviceCategory === selected,
          );
    const cost = `$ ${filteredServices.reduce(
      (prev, { price }) => prev + price,
      0,
    )} /mo`;

    return { filteredServices, cost };
  }, [selected, services]);

  return { ...filtered, setSelected };
};
