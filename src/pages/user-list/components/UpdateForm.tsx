import React from 'react';
import { ProFormSwitch, ProForm, ModalForm, ProFormText } from '@ant-design/pro-form';
import AvatarView from '@/components/AvatarView/AvatarView';
import { useAccess } from 'umi';

export type FormValueType = {
  id: number;
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
  avatar: string;
  updateAvatar: (avatar: string) => Promise<void>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const access = useAccess();

  return (
    <ModalForm
      title={'修改用户'}
      autoFocusFirstInput
      modalProps={{
        onCancel: props.onCancel,
        destroyOnClose: true,
      }}
      visible={props.updateModalVisible}
      onFinish={props.onSubmit}
      initialValues={props.values}
      layout={'horizontal'}
      preserve={false}
    >
      <ProForm.Group>
        <ProFormText name="name" label="用户名称" width="md" readonly />
        <ProFormText name="id" label="id" readonly />
      </ProForm.Group>
      <ProFormText name="nickname" width="md" label="昵称" readonly={!access.canRoot} />
      <ProFormSwitch name="isRoot" label="超级管理员" readonly={!access.canRoot} />
      <ProFormSwitch name="isAdmin" label="管理员" readonly={!access.canRoot} />
      <ProFormText name="address" width="md" label="地址" />
      <ProFormText name="phone" width="md" label="phone" />

      <div>
        <div>头像</div>
        <AvatarView avatar={props.avatar || ''} onChange={props.updateAvatar} />
      </div>
    </ModalForm>
  );
};

export default UpdateForm;
