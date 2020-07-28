import React, { useState, forwardRef } from 'react';
import { Drawer, Button, Upload } from 'antd';
import {
  PlaySquareOutlined,
  PlusOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

import useBeforeUpload from './hooks/useBeforeUpload';
import useHandleChange from './hooks/useHandleChange';
import styles from './styles/UploadIcon.less';

/** @react UploadIcon component */
const UploadIcon = forwardRef(({ value, onChange }, ref) => {
  const [uploadVisible, setUploadVisible] = useState(false);
  const beforeUpload = useBeforeUpload();
  const { loading, handleChange } = useHandleChange(onChange);

  return (
    <div className={styles.uploadIcon} ref={ref}>
      {value ? <img src={value} alt="icon" /> : <PlaySquareOutlined />}

      <Button
        onClick={() => {
          setUploadVisible(true);
        }}
      >
        Upload
      </Button>

      <Drawer
        className={styles.upload}
        footer={
          <>
            <Button
              onClick={() => {
                setUploadVisible(false);
                onChange(null);
              }}
            >
              Cancel
            </Button>

            <Button onClick={() => setUploadVisible(false)} type="primary">
              Submit
            </Button>
          </>
        }
        visible={uploadVisible}
        closable={false}
        placement="bottom"
      >
        <h3>Upload Logo/Icon</h3>
        <p>File size limit: 25MB</p>
        <Upload
          beforeUpload={beforeUpload}
          onChange={handleChange}
          showUploadList={false}
          action="http://localhost:3000/api/upload"
          name="icon"
          listType="picture-card"
        >
          {value ? (
            <img src={value} alt="icon" />
          ) : (
            <>
              {loading ? <LoadingOutlined /> : <PlusOutlined />}

              <div>
                Drop files here or click to upload (.jpg, .jpeg, .png, .bmp)
              </div>
            </>
          )}
        </Upload>
      </Drawer>
    </div>
  );
});

export default React.memo(UploadIcon);
