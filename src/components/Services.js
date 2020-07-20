import React, { useState } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';

const ServiceContext = React.createContext({
  services: [],
  add: emptyFunction,
  remove: emptyFunction,
  edit: emptyFunction,
});

const Provider = ({ children }) => {
  const [services, setServices] = useState([]);

  return (
    <ServiceContext.Provider
      value={{
        services,
        add: inputData => {
          setServices([inputData, ...services]);
        },
        remove: emptyFunction,
        edit: emptyFunction,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export const ServicesProvider = React.memo(Provider);

export default ServiceContext;
