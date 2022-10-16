import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';
import ImgCrop from 'antd-img-crop';

export type AvatarViewProps = {
  avatar: string;
  onChange: (avatar: string) => Promise<void>;
};

// 头像组件 方便以后独立，增加裁剪之类的功能
const AvatarView: React.FC<AvatarViewProps> = (props) => {
  const [loading, setLoading] = useState(false);
  //const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      const resp = info.file.response;
      if (resp.success) {
        props.onChange(resp.data.filepaths[0]);
      }
      // Get this url from response in real world.
      setLoading(false);
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <ImgCrop>
      <Upload
        name="file"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="/api/v1/files"
        onChange={handleChange}
      >
        {props.avatar ? (
          <img src={props.avatar} alt="avatar" style={{ width: '100%' }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </ImgCrop>
  );
};

export default AvatarView;
