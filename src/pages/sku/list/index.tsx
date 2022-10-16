import { PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { Space, Modal, Button, message, Drawer } from 'antd';
import React, { useState, useRef } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { ModalForm, ProFormText, ProFormSelect } from '@ant-design/pro-form';
import type { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';
import ProDescriptions from '@ant-design/pro-descriptions';
import type { FormValueType } from './components/UpdateForm';
import UpdateForm from './components/UpdateForm';
import SelectSpu from './components/SelectSpu';
import { listSku, createSku, updateSku, deleteSkus } from '@/services/apiserver/sku';
import { listQueryWithColumns, selectCourseRequest } from '@/services/util';
import { useAccess, history } from 'umi';

const handleAdd = async (fields: API.Sku) => {
  const hide = message.loading('正在添加');
  try {
    await createSku({ ...fields });
    hide();
    message.success('Added successfully');
    return true;
  } catch (error) {
    hide();
    message.error('Adding failed, please try again!');
    return false;
  }
};

const handleUpdate = async (fields: FormValueType) => {
  const { id, ...body } = fields;
  const hide = message.loading('Configuring');
  try {
    await updateSku({ id }, body);
    hide();

    message.success('Configuration is successful');
    return true;
  } catch (error) {
    hide();
    message.error('Configuration failed, please try again!');
    return false;
  }
};

/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows: API.Sku[]) => {
  if (!selectedRows) return true;
  const hide = message.loading('正在删除');
  try {
    await deleteSkus({
      id: selectedRows.map((row) => row.id),
    });
    hide();
    message.success('Deleted successfully and will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};

const TableList: React.FC = () => {
  const spuId = history.location?.query?.spuId || 0;
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);

  // 课程
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const [currentSpu, setCurrentSpu] = useState<API.Spu>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.Sku>();
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  //const [selectedRowsState, setSelectedRows] = useState<API.Sku[]>([]);
  const access = useAccess();

  const action = (
    <SelectSpu
      onChange={(spu) => {
        setCurrentSpu(spu);
        if (actionRef.current) {
          actionRef.current.reload();
        }
      }}
      spuId={spuId}
    />
  );

  const moneyFmt = (n) => {
    return Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(n / 100);
  };

  // https://procomponents.ant.design/components/schema/#valuetype
  const columns: ProColumns<API.Sku>[] = [
    {
      title: '名称',
      dataIndex: 'name',
      sorter: true,
      query: ['name=~{name}'],
      //tip: 'The sku name is the unique key',
      render: (dom, entity) => (
        <a
          onClick={() => {
            setCurrentRow(entity);
            setCurrentImages(entity.images || []);
            setShowDetail(true);
          }}
        >
          {dom}
        </a>
      ),
    },
    {
      width: 60,
      title: 'id',
      dataIndex: 'id',
      valueType: 'textarea',
      hideInTable: true,
    },
    {
      title: '单节课价格',
      render: (dom, entity) => {
        return moneyFmt(entity.price);
      },
    },
    {
      title: '单节课折扣后价格',
      render: (dom, entity) => {
        return moneyFmt(entity.salePrice);
      },
    },
    {
      title: '数量',
      dataIndex: 'count',
      valueType: 'digit',
    },
    {
      title: '总价',
      render: (_, entity) => {
        return moneyFmt(entity.price * entity.count);
      },
    },
    {
      title: '折扣总价',
      render: (_, entity) => {
        return moneyFmt(entity.salePrice * entity.count);
      },
    },
    {
      title: '操作',
      width: 120,
      dataIndex: 'option',
      valueType: 'option',
      hideInTable: !access.canAdmin,
      render: (_, record) => [
        <a
          key="edit"
          onClick={() => {
            setCurrentRow(record);
            setCurrentImages(record.images);
            handleUpdateModalVisible(true);
          }}
        >
          {' '}
          修改{' '}
        </a>,
        <a
          key="remove"
          onClick={() =>
            Modal.confirm({
              title: `确认要删除老师 ${record.name} (${record.id})吗?`,
              onOk: async () => {
                const success = await handleRemove([record]);
                if (success) {
                  actionRef.current?.reloadAndRest?.();
                }
              },
            })
          }
        >
          {' '}
          删除{' '}
        </a>,
      ],
    },
  ];

  return (
    <PageContainer extra={action}>
      <ProTable<API.Sku, API.PageParams>
        //headerTitle='Enquiry form'
        actionRef={actionRef}
        rowKey="id"
        search={false}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalVisible(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={listQueryWithColumns(listSku, columns, [`spu_id=${currentSpu?.id}`])}
        columns={columns}
        scroll={{ x: 1300 }}
        rowSelection={
          {
            //onChange: (_, selectedRows) => {
            //  //setSelectedRows(selectedRows);
            //},
          }
        }
        tableAlertRender={({ selectedRowKeys, onCleanSelected }) => (
          <Space size={24}>
            <span>
              已选 {selectedRowKeys.length} 项
              <a style={{ marginLeft: 8 }} onClick={onCleanSelected}>
                取消选择
              </a>
            </span>
          </Space>
        )}
        tableAlertOptionRender={({ selectedRowKeys, selectedRows }) => (
          <Space size={16}>
            <a
              onClick={() =>
                Modal.confirm({
                  title: `确认要删除课程吗 (共 ${selectedRowKeys.length} 项)?`,
                  onOk: async () => {
                    const success = await handleRemove(selectedRows);
                    if (success) {
                      //setSelectedRows([]);
                      actionRef.current?.reloadAndRest?.();
                    }
                  },
                })
              }
            >
              批量删除
            </a>
          </Space>
        )}
      />

      <ModalForm
        title={`新建课程 (产品: ${currentSpu?.name} - ${currentSpu?.org?.name})`}
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          const success = await handleAdd({
            spuId: currentSpu.id,
            ...value,
          });
          if (success) {
            handleModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <ProFormText
          name="name"
          label="课程名称"
          rules={[{ required: true, message: '课程名称为必填项' }]}
          width="md"
        />

        <ProFormSelect
          name="courseId"
          label="课程"
          rules={[{ required: true, message: '课程为必选项' }]}
          debounceTime={300}
          request={selectCourseRequest}
          width="md"
        />
      </ModalForm>

      <UpdateForm
        onSubmit={async (value) => {
          const success = await handleUpdate({
            id: currentRow.id,
            ...value,
          });
          if (success) {
            handleUpdateModalVisible(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalVisible(false);
          if (!showDetail) {
            setCurrentRow(undefined);
          }
        }}
        updateModalVisible={updateModalVisible}
        values={currentRow || {}}
        images={currentImages}
        updateImages={async (images) => {
          const success = await handleUpdate({
            id: currentRow.id,
            images: images,
          });
          if (success) {
            setCurrentImages(images);
          }
        }}
      />

      <Drawer
        width={600}
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions<API.Sku>
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProDescriptionsItemProps<API.Sku>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default TableList;
