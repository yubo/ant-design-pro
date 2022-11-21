import React from 'react';
import {
  ProForm,
  ProFormSelect,
  ModalForm,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import UploadImages from '@/components/UploadImages/UploadImages';
import { selectOrgRequest } from '@/services/util';

export type FormValueType = {
  id: number;
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<API.Teacher>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<API.Teacher>;
  images: string[];
  updateImages: (images: string[]) => Promise<void>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  return (
    <ModalForm
      title={`编辑老师信息`}
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
        <ProFormText name="name" label="老师名称" width="md" readonly />
        <ProFormText name="id" label="id" readonly />
      </ProForm.Group>

      <ProFormSelect
        name="orgId"
        label="机构"
        showSearch
        readonly
        debounceTime={300}
        request={selectOrgRequest}
        valueEnum={{ [props.values.orgId]: props.values.orgName }}
        width="md"
      />

      <ProFormTextArea name="description" width="md" label="描述" />

      <div>
        <div>图片</div>
        <UploadImages images={props.images || []} onChange={props.updateImages} />
      </div>
    </ModalForm>
  );
};

export default UpdateForm;
