import { PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { Space, Modal, Button, message, Drawer } from 'antd';
import React, { useState, useRef } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { ModalForm, ProFormText, ProFormSelect, ProFormDigit } from '@ant-design/pro-form';
import type { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';
import ProDescriptions from '@ant-design/pro-descriptions';
import type { FormValueType } from './components/UpdateForm';
import UpdateForm from './components/UpdateForm';
import { listCoupon, createCoupon, updateCoupon, deleteCoupons } from '@/services/apiserver/coupon';
import { listQueryWithColumns, selectUserRequestById, selectSkuRequest } from '@/services/util';
import { useModel, useAccess } from 'umi';
import moment from 'moment';

const handleAdd = async (fields: API.Coupon) => {
  const hide = message.loading('正在添加');
  try {
    await createCoupon({ ...fields });
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
    await updateCoupon({ id }, body);
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
const handleRemove = async (selectedRows: API.Coupon[]) => {
  if (!selectedRows) return true;
  const hide = message.loading('正在删除');
  try {
    await deleteCoupons({
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

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.Coupon>();
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  //const [selectedRowsState, setSelectedRows] = useState<API.Coupon[]>([]);
  const access = useAccess();

  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const ownerId = access.canAdmin ? undefined : currentUser?.id;

  const moneyFmt = (n) => {
    return Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(n / 100);
  };

  const fmtDate = (ts) => {
    return ts ? moment.unix(ts).format('YYYY-MM-DD HH:mm:ss') : '-';
  };

  // https://procomponents.ant.design/components/schema/#valuetype
  const columns: ProColumns<API.Coupon>[] = [
    {
      title: '名称',
      dataIndex: 'name',
      valueType: 'textarea',
    },
    {
      width: 60,
      title: 'id',
      dataIndex: 'id',
      valueType: 'textarea',
      hideInTable: true,
    },
    {
      title: 'userId',
      dataIndex: 'userId',
      valueType: 'textarea',
    },
    {
      title: 'userName',
      dataIndex: 'userName',
      valueType: 'textarea',
    },
    {
      title: 'sku',
      dataIndex: 'skuName',
      valueType: 'textarea',
    },
    {
      title: 'status',
      dataIndex: 'statusName',
      valueType: 'textarea',
    },
    {
      title: '创建者',
      dataIndex: 'creator',
      valueType: 'textarea',
      hideInSearch: true,
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      render: fmtDate,
      hideInSearch: true,
    },
    {
      title: '创建时间',
      key: 'createdAt',
      dataIndex: 'createdAt',
      render: fmtDate,
      sorter: true,
      hideInSearch: true,
    },
    {
      title: '优惠价格',
      render: (dom, entity) => {
        return moneyFmt(entity.deductionPrice);
      },
    },
    {
      title: '操作',
      width: 120,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => {
        return [
          <a
            key="remove"
            onClick={() => {
              Modal.confirm({
                title: `确认要删除优惠券 ${record.name} (${record.id})吗?`,
                onOk: async () => {
                  const success = await handleRemove([record]);
                  if (success) {
                    actionRef.current?.reloadAndRest?.();
                  }
                },
              });
            }}
          >
            删除
          </a>,
        ];
      },
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.Coupon, API.PageParams>
        //headerTitle='Enquiry form'
        actionRef={actionRef}
        rowKey="id"
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
        }}
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
        request={listQueryWithColumns(listCoupon, columns)}
        columns={columns}
        scroll={{ x: 1300 }}
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
                  title: `确认要删除优惠券吗 (共 ${selectedRowKeys.length} 项)?`,
                  onOk: async () => {
                    const success = await handleRemove(selectedRows);
                    if (success) {
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
        title={`新建优惠券`}
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          const success = await handleAdd({
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
        <ProFormText name="name" label="名称" width="md" />

        <ProFormSelect
          name="userId"
          label="用户"
          rules={[{ required: true, message: '用户Id为必选项' }]}
          showSearch
          debounceTime={300}
          request={async (req) => {
            return selectUserRequestById({ ...req });
          }}
          width="md"
        />

        <ProFormSelect
          name="skuId"
          label="课程"
          rules={[{ required: true, message: '课程为必选项' }]}
          showSearch
          debounceTime={300}
          request={async (req) => {
            return selectSkuRequest({ ownerId, ...req });
          }}
          width="md"
        />

        <ProFormDigit
          name="deductionPrice"
          label="优惠价格(分)"
          min={1}
          width="md"
          fieldProps={{ precision: 0 }}
          rules={[{ required: true, message: '优惠价格为必选项' }]}
        />


        <ProFormDigit
          name="expiresTime"
          label="有效期(天)"
          min={1}
          width="md"
          fieldProps={{ precision: 0 }}
          rules={[{ required: true, message: '有效期为必选项' }]}
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
          <ProDescriptions<API.Coupon>
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProDescriptionsItemProps<API.Coupon>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default TableList;
