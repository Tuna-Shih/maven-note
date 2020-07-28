import { useState, useCallback } from 'react';

export default onChange => {
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback(
    ({ file: { status, originFileObj } }) => {
      if (status === 'uploading') {
        setLoading(true);
      }

      if (status === 'done') {
        const reader = new FileReader();

        reader.addEventListener('load', () => {
          setLoading(false);
          onChange(reader.result);
        });
        reader.readAsDataURL(originFileObj);
      }
    },
    [onChange],
  );

  return { loading, handleChange };
};
