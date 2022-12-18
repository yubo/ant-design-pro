import { PlusOutlined } from '@ant-design/icons';
import { Space, List, Image, Modal, Button, message, Drawer } from 'antd';
import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { ModalForm, ProFormText, ProFormSelect } from '@ant-design/pro-form';
import type { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';
import ProDescriptions from '@ant-design/pro-descriptions';
import type { FormValueType } from './components/UpdateForm';
import UpdateForm from './components/UpdateForm';
import {
  listTeacher,
  createTeacher,
  updateTeacher,
  deleteTeachers,
} from '@/services/apiserver/teacher';
import { listQueryWithColumns, selectUserRequest, selectOrgRequest } from '@/services/util';
import { useModel, useAccess } from 'umi';
import moment from 'moment';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.Teacher) => {
  const hide = message.loading('正在添加');
  try {
    await createTeacher({ ...fields });
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
 * @en-US Update node
 * @zh-CN 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields: FormValueType) => {
  const { id, ...body } = fields;
  const hide = message.loading('Configuring');
  try {
    await updateTeacher({ id }, body);
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
const handleRemove = async (selectedRows: API.Teacher[]) => {
  if (!selectedRows) return true;
  const hide = message.loading('正在删除');
  try {
    await deleteTeachers({
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
  const [currentRow, setCurrentRow] = useState<API.Teacher>();
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  //const [selectedRowsState, setSelectedRows] = useState<API.Teacher[]>([]);
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
  const columns: ProColumns<API.Teacher>[] = [
    {
      width: 60,
      title: 'id',
      dataIndex: 'id',
      valueType: 'textarea',
      hideInSearch: true,
      hideInTable: true,
      query: ['id={id}'],
    },
    {
      title: '老师名',
      dataIndex: 'name',
      sorter: true,
      query: ['name=~{name}'],
      //tip: 'The teacher name is the unique key',
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
      title: '所属机构',
      dataIndex: 'orgName',
      valueType: 'textarea',
    },
    {
      title: '用户名',
      dataIndex: 'userName',
      valueType: 'textarea',
    },
    {
      title: '描述',
      dataIndex: 'description',
      valueType: 'textarea',
      query: ['description=~{description}'],
    },
    {
      title: '图片',
      render: (_, entity) => (
        <List
          dataSource={entity.images || []}
          renderItem={(item) => (
            <List.Item>
              <Image width={104} src={item} />
            </List.Item>
          )}
        />
      ),
      hideInSearch: true,
      hideInTable: true,
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
      title: '创建时间',
      dataIndex: 'createdAt',
      valueType: 'dateRange',
      hideInTable: true,
      hideInDescriptions: true,
      query: ['created_at>{startTime}', 'created_at<{endTime}'],
      search: {
        transform: (value) => {
          return {
            startTime: moment(value[0]).format('X'),
            endTime: moment(value[1]).add(1, 'd').format('X'),
          };
        },
      },
    },
    {
      title: '操作',
      width: 120,
      dataIndex: 'option',
      valueType: 'option',
      hideInTable: !access.canAdmin,
      render: (_, record) => {
        return [
          <a
            key="edit"
            onClick={() => {
              setCurrentRow(record);
              setCurrentImages(record.images);
              handleUpdateModalVisible(true);
            }}
          >
            修改
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
            删除
          </a>,
        ];
      },
    },
  ];

  const requestFilter = ownerId ? ['owner_id=' + ownerId] : [];

  return (
    <PageContainer>
      <ProTable<API.Teacher, API.PageParams>
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
            onClick={() => {
              handleModalVisible(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={listQueryWithColumns(listTeacher, columns, requestFilter)}
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
                  title: `确认要删除老师吗 (共 ${selectedRowKeys.length} 项)?`,
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
        title="新建老师"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          const success = await handleAdd(value as API.Teacher);
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
          label="老师名称"
          rules={[{ required: true, message: '老师名称为必填项' }]}
          width="md"
        />

        <ProFormSelect
          name="userId"
          label="用户"
          rules={[{ required: true, message: '用户为必选项' }]}
          showSearch
          debounceTime={300}
          request={selectUserRequest}
          width="md"
        />

        <ProFormSelect
          name="orgId"
          label="机构"
          rules={[{ required: true, message: '用户为必选项' }]}
          showSearch
          debounceTime={300}
          request={selectOrgRequest}
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
        visible={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions<API.Teacher>
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProDescriptionsItemProps<API.Teacher>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default TableList;
