import React, { useState } from 'react';
import { Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import ImgCrop from 'antd-img-crop';

export type UploadImagesProps = {
  images: string[];
  onChange: (images: string[]) => Promise<void>;
};

// 头像组件 方便以后独立，增加裁剪之类的功能
const UploadImages: React.FC<UploadImagesProps> = (props) => {
  const [fileList, setFileList] = useState<UploadFile[]>(
    props.images.reduce((pre, cur) => {
      pre.push({
        status: 'done',
        url: cur,
      });

      return pre;
    }, []),
  );

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

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const onRemove = (file: UploadFile<T>) => {
    console.log('onRemove', 'file', file);
    return true;
  };

  // https://ant.design/components/upload-cn/
  return (
    <ImgCrop>
      <Upload
        name="file"
        action="/api/v1/files"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        onRemove={onRemove}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
};

export default UploadImages;
