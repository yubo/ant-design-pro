import React from 'react';
import { ProFormSelect, ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
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
  const valueEnum = {
    0: '周日',
    1: '周一',
    2: '周二',
    3: '周三',
    4: '周四',
    5: '周五',
    6: '周六',
  };
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
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
    >
      <ProFormText name="name" label="老师名称" width="md" readonly />
      <ProFormText name="id" label="id" readonly />

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

      <ProFormTextArea
        valueType="checkbox"
        valueEnum={valueEnum}
        name="workDays"
        width="md"
        label="每周工作日"
      />
      <ProFormTextArea
        valueType="digit"
        name="courseDuration"
        width="md"
        label="一节课时长(分钟)"
        tooltip="包括课间休息时间"
      />

      <ProFormTextArea valueType="digit" name="amNum" width="md" label="上午课时" />
      <ProFormTextArea valueType="time" name="amStart" width="md" label="上午开课时间" />

      <ProFormTextArea valueType="digit" name="pmNum" width="md" label="下午课时" />
      <ProFormTextArea valueType="time" name="pmStart" width="md" label="下午开课时间" />

      <div>
        <div>图片</div>
        <UploadImages images={props.images || []} onChange={props.updateImages} />
      </div>
    </ModalForm>
  );
};

export default UpdateForm;
