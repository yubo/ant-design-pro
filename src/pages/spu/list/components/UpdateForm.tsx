import React from 'react';
import {
  ProFormSwitch,
  ProForm,
  ProFormSelect,
  ModalForm,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import UploadImages from '@/components/UploadImages/UploadImages';
import { selectOrgRequest, selectTeacherRequest } from '@/services/util';

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
  values: Partial<API.Spu>;
  images: string[];
  updateImages: (images: string[]) => Promise<void>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  return (
    <ModalForm
      title={`编辑商品信息`}
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
        <ProFormText name="name" label="商品名称" width="md" readonly />
        <ProFormText name="id" label="id" readonly />
      </ProForm.Group>

      <ProFormSelect
        name="orgId"
        label="机构"
        showSearch
        readonly
        debounceTime={300}
        request={selectOrgRequest}
        valueEnum={{ [props.values.orgId]: props.values.org?.name }}
        width="md"
      />

      <ProFormSelect
        name="teacherId"
        label="老师"
        showSearch
        readonly
        debounceTime={300}
        request={selectTeacherRequest}
        valueEnum={{ [props.values.teacherId]: props.values.teacher?.name }}
        width="md"
      />

      <ProFormTextArea name="description" width="md" label="描述" />
      <ProFormSwitch
        checkedChildren="启用"
        unCheckedChildren="禁用"
        name="available"
        width="md"
        label="状态"
      />

      <div>
        <div>图片</div>
        <UploadImages images={props.images || []} onChange={props.updateImages} />
      </div>
    </ModalForm>
  );
};

export default UpdateForm;
