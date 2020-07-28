import { useCallback } from 'react';
import { message } from 'antd';

export default () =>
  useCallback(({ type, size }) => {
    if (!['image/jpeg', 'image/png', 'image/jpg', 'image/bmp'].includes(type)) {
      message.error('You can only upload JEPG/PNG/JPG/BMP file!');
      return false;
    }

    if (!(size / 1024 / 1024 < 25)) {
      message.error('Image must smaller than 25MB!');
      return false;
    }

    return true;
  }, []);
