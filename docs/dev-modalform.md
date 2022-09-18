# modalForm

#### label field with convert

```typescript
const UpdateForm: React.FC<UpdateFormProps> = (props) => {
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

      <ProFormList name="labels" label="labels">
        <ProFormGroup key="group">
          <ProFormText name="label" label="显示名称" />
          <ProFormText name="value" label="值" />
        </ProFormGroup>
      </ProFormList>
    </ModalForm>
  );
};
```
