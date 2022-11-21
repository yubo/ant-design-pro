import React, { useState, useEffect } from 'react';
import { ProForm, ProFormSelect, ModalForm, ProFormText, ProFormDigit } from '@ant-design/pro-form';
import { selectCourseRequest } from '@/services/util';

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
  values: Partial<API.Sku>;
  images: string[];
  updateImages: (images: string[]) => Promise<void>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const [price, setPrice] = useState<number>(0);
  const [salePrice, setSalePrice] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setPrice(props.values.price);
    setSalePrice(props.values.salePrice);
    setCount(props.values.count);
  }, [props]);

  const moneyFmt = (n) => {
    return Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(n / 100);
  };

  const priceExtra = '单价:' + moneyFmt(price) + ' 合计:' + moneyFmt(price * count);
  const salePriceExtra = '单价:' + moneyFmt(salePrice) + ' 合计:' + moneyFmt(salePrice * count);

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
        <ProFormText name="name" label="课程名称" width="md" readonly />
        <ProFormText name="id" label="id" readonly />
      </ProForm.Group>

      <ProFormSelect
        name="courseId"
        label="课程"
        showSearch
        readonly
        debounceTime={300}
        request={selectCourseRequest}
        valueEnum={{ [props.values.courseId]: props.values.courseName }}
        width="md"
      />

      <ProFormDigit
        name="price"
        width="md"
        label="单节课价格(单位: 分)"
        fieldProps={{ precision: 0 }}
        onChange={(n) => {
          setPrice(n);
        }}
        extra={priceExtra}
      />
      <ProFormDigit
        name="salePrice"
        width="md"
        label="单节课折扣后价格(单位: 分)"
        fieldProps={{ precision: 0 }}
        onChange={(n) => {
          setSalePrice(n);
        }}
        extra={salePriceExtra}
      />
      <ProFormDigit
        name="count"
        width="md"
        label="数量"
        fieldProps={{ precision: 0 }}
        onChange={(n) => {
          setCount(n);
        }}
      />
    </ModalForm>
  );
};

export default UpdateForm;
