import React from 'react';
import { ProForm, ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import UploadImages from '@/components/UploadImages/UploadImages';

export type FormValueType = {
  id: number;
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<API.Course>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<API.Course>;
  images: string[];
  updateImages: (images: string[]) => Promise<void>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  // 强制重新渲染 modalForm
  return (
    <ModalForm
      title={'编辑'}
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
        <ProFormText name="name" label="课程名称" width="md" readonly />
        <ProFormText name="id" label="id" readonly />
      </ProForm.Group>
      <ProFormTextArea name="description" width="md" label="描述" />

      <div>
        <div>图片</div>
        <UploadImages images={props.images || []} onChange={props.updateImages} />
      </div>
    </ModalForm>
  );
};

export default UpdateForm;
