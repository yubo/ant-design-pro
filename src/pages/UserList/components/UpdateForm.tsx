import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import styles from './UpdateForm.less';
import { ModalForm, ProFormText, ProFormGroup, ProFormList } from '@ant-design/pro-form';
export type FormValueType = {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<API.User>;
export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<API.User>;
};

// 头像组件 方便以后独立，增加裁剪之类的功能
const AvatarView = ({ avatar }: { avatar: string }) => (
  <>
    <div className={styles.avatar_title}>头像</div>
    <div className={styles.avatar}>
      <img src={avatar} alt="avatar" />
    </div>
    <Upload showUploadList={false}>
      <div className={styles.button_view}>
        <Button>
          <UploadOutlined />
          更换头像
        </Button>
      </div>
    </Upload>
  </>
);

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const getAvatarURL = () => {
    if (props.values.avatar) {
      return props.values.avatar;
    }
    return 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
  };

  const convertValues = (values) => {
    const { labels = {}, ...rest } = values;
    return {
      labels: Object.keys(labels).map((k) => ({ label: k, value: labels[k] })),
      ...rest,
    };
  };

  const transform = (values: Partial<API.User>) => {
    const { labels: _labels = [], ...rest } = values;

    const labels = {};
    _labels.forEach((v) => {
      _labels[v.label] = v.value;
    });

    return {
      labels,
      ...rest,
    };
  };

  return (
    <ModalForm
      title={'修改用户'}
      autoFocusFirstInput
      modalProps={{
        onCancel: props.onCancel,
      }}
      visible={props.updateModalVisible}
      onFinish={(v) => {
        props.onSubmit(transform(v));
      }}
      initialValues={convertValues(props.values)}
    >
      <ProFormText name="name" label="用户名称" width="md" readonly />
      <ProFormText name="address" width="md" label="地址" />
      <ProFormText name="email" width="md" label="email" />
      <ProFormText name="group" width="md" label="group" />
      <ProFormText name="phone" width="md" label="phone" />

      <ProFormList name="labels" label="labels">
        <ProFormGroup key="group">
          <ProFormText name="label" label="显示名称" />
          <ProFormText name="value" label="值" />
        </ProFormGroup>
      </ProFormList>

      <ProFormText name="title" width="md" label="title" />

      <div className={styles.right}>
        <AvatarView avatar={getAvatarURL()} />
      </div>
    </ModalForm>
  );
};

export default UpdateForm;
