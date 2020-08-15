import React, { useState, useCallback } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import { v4 as uuidv4 } from 'uuid';

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

        add: useCallback(
          data => setServices([{ ...data, id: uuidv4() }, ...services]),
          [services],
        ),

        remove: useCallback(
          id => {
            setServices(services.filter(service => service.id !== id));
          },
          [services],
        ),

        edit: useCallback(
          (id, data) => {
            setServices(
              services.map(service =>
                service.id === id ? { ...data, id } : service,
              ),
            );
          },
          [services],
        ),
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export const ServicesProvider = React.memo(Provider);

export default ServiceContext;
