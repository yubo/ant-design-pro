import React from 'react';
import {
  ProFormSwitch,
  ProForm,
  ModalForm,
  ProFormText,
  ProFormSelect,
  ProFormTextArea,
} from '@ant-design/pro-form';
import UploadImages from '@/components/UploadImages/UploadImages';
import { selectUserRequest } from '@/services/util';
import { useAccess } from 'umi';

export type FormValueType = {
  id: number;
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<API.Org>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<API.Org>;
  images: string[];
  updateImages: (images: string[]) => Promise<void>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const access = useAccess();

  // 强制重新渲染 modalForm
  return (
    <ModalForm
      title={'编辑'}
      autoFocusFirstInput
      modalProps={{
        onCancel: props.onCancel,
      }}
      visible={props.updateModalVisible}
      onFinish={props.onSubmit}
      initialValues={props.values}
      layout={'horizontal'}
    >
      <ProForm.Group>
        <ProFormText name="name" label="机构名称" width="md" readonly />
        <ProFormText name="id" label="id" readonly />
      </ProForm.Group>
      <ProFormSwitch name="native" label="直营" readonly={!access.canAdmin} />

      <ProFormSelect
        name="ownerId"
        label="管理员"
        showSearch
        readonly={!access.canAdmin}
        debounceTime={300}
        request={selectUserRequest}
        valueEnum={{ [props.values.ownerId]: props.values.owner }}
        width="md"
      />

      <ProFormText name="address" width="md" label="地址" />
      <ProFormTextArea name="description" width="md" label="描述" />

      <div>
        <div>图片</div>
        <UploadImages images={props.images || []} onChange={props.updateImages} />
      </div>
    </ModalForm>
  );
};

export default UpdateForm;
