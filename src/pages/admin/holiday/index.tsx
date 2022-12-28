import { PlusOutlined } from '@ant-design/icons';
import { Space, List, Image, Modal, Button, message, Drawer } from 'antd';
import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import type { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';
import ProDescriptions from '@ant-design/pro-descriptions';
import { listHoliday, createHoliday, updateHoliday, deleteHolidays } from '@/services/apiserver/holiday';
import { listQueryWithColumns } from '@/services/util';
import { useModel, useAccess } from 'umi';
import moment from 'moment';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.Holiday) => {
  const hide = message.loading('正在添加');
  try {
    await createHoliday({ ...fields });
    hide();
    message.success('Added successfully');
    return true;
  } catch (error) {
    hide();
    message.error('Adding failed, please try again!');
    return false;
  }
};


/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows: API.Holiday[]) => {
  if (!selectedRows) return true;
  const hide = message.loading('正在删除');
  try {
    await deleteHolidays({
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

  const [showDetail, setShowDetail] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.Holiday>();
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  //const [selectedRowsState, setSelectedRows] = useState<API.Holiday[]>([]);
  const access = useAccess();

  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const ownerId = access.canAdmin ? undefined : currentUser.id;

  const fmtDate = (ts) => {
    return ts ? moment.unix(ts).format('YYYY-MM-DD HH:mm:ss') : '-';
  };

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  // https://procomponents.ant.design/components/schema/#valuetype
  const columns: ProColumns<API.Holiday>[] = [
    {
      width: 60,
      title: 'id',
      dataIndex: 'id',
      valueType: 'textarea',
      hideInSearch: true,
      hideInTable: true,
    },
    {
      title: '节日名称',
      dataIndex: 'name',
      sorter: true,
      query: ['name=~{name}'],
    },
    {
      title: '日期',
      dataIndex: 'date',
      sorter: true,
      query: ['date=~{date}'],
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
      title: '操作',
      width: 120,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => {
        const disabled = access.canAdmin ? false : currentUser.id != record.ownerId;
        return [
          <a
            key="remove"
            disabled={!access.canAdmin}
            onClick={() => {
              if (!access.canAdmin) return;
              Modal.confirm({
                title: `确认要删除节假日 ${record.name} (${record.date})吗?`,
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
      <ProTable<API.Holiday, API.PageParams>
        //headerTitle='Enquiry form'
        actionRef={actionRef}
        rowKey="id"
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
        }}
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            disabled={!access.canAdmin}
            onClick={() => {
              if (!access.canAdmin) return;
              handleModalVisible(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={listQueryWithColumns(listHoliday, columns)}
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
                  title: `确认要删除机构吗 (共 ${selectedRowKeys.length} 项)?`,
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
        title="添加节假日"
        width="400px"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          const success = await handleAdd(value as API.Holiday);
          if (success) {
            handleModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <ProFormText
          rules={[ { required: true, message: '节假日名称为必填项' } ]}
          width="md" name="name" label="假日名称"/>
        <ProFormText
          rules={[ { required: true, message: '节假日日期为必填项' } ]}
          width="md" valueType="dateRange" name="dateRange" label="日期范围" />
      </ModalForm>

      <Drawer
        width={600}
        visible={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions<API.Holiday>
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProDescriptionsItemProps<API.Holiday>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default TableList;
