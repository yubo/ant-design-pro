import React, { useState } from 'react';
import { Upload, Modal } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import ImgCrop from 'antd-img-crop';

export type UploadImagesProps = {
  images: string[];
  onChange: (images: string[]) => Promise<void>;
};

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

// 头像组件 方便以后独立，增加裁剪之类的功能
const UploadImages: React.FC<UploadImagesProps> = (props) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>(
    props.images.reduce((pre, cur) => {
      pre.push({
        status: 'done',
        url: cur,
      });

      return pre;
    }, []),
  );

  const onCancel = () => setPreviewOpen(false);
  const onPreview = async (file: UploadFile) => {
    console.log('onPreview', file);
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    console.log('file', file.url || (file.preview as string));
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const onChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    setFileList(info.fileList);

    if (info.file.status === 'done') {
      props.onChange(
        info.fileList.reduce((pre, cur) => {
          if (cur.url) {
            pre.push(cur.url);
            return pre;
          }
          if (cur.response && cur.response.success) {
            pre.push(cur.response.data.filepaths[0]);
            return pre;
          }
          return pre;
        }, []),
      );
    }
  };

  // https://ant.design/components/upload-cn/
  return (
    <>
      <ImgCrop>
        <Upload
          name="file"
          action="/api/v1/files"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 5 && '+ Upload'}
        </Upload>
      </ImgCrop>
      <Modal
        visible={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={onCancel}
        width={600}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default UploadImages;
