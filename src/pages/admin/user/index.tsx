import { PlusOutlined } from '@ant-design/icons';
import { Space, Modal, Button, message, Drawer } from 'antd';
import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import type { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';
import ProDescriptions from '@ant-design/pro-descriptions';
import type { FormValueType } from './components/UpdateForm';
import UpdateForm from './components/UpdateForm';
//import { rule, addRule, updateRule, removeRule } from '@/services/ant-design-pro/api';
import { listUser, updateUser, deleteUsers } from '@/services/apiserver/user';
import { listQueryWithColumns } from '@/services/util';
import { useAccess } from 'umi';
import moment from 'moment';

/**
 * @en-US Update node
 * @zh-CN 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields: FormValueType) => {
  const { id, ...body } = fields;
  console.log('update user', 'id', id, 'body', body);
  const hide = message.loading('Configuring');
  try {
    await updateUser({ id }, body);
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
const handleRemove = async (selectedRows: API.User[]) => {
  if (!selectedRows) return true;
  const hide = message.loading('正在删除');
  try {
    await deleteUsers({
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
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);

  const [showDetail, setShowDetail] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.User>();
  const [currentAvatar, setCurrentAvatar] = useState<string>('');
  //const [selectedRowsState, setSelectedRows] = useState<API.User[]>([]);
  const access = useAccess();

  const fmtDate = (ts) => {
    return ts ? moment.unix(ts).format('YYYY-MM-DD HH:mm:ss') : '-';
  };

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  // https://procomponents.ant.design/components/schema/#valuetype
  const columns: ProColumns<API.User>[] = [
    {
      width: 60,
      title: 'id',
      dataIndex: 'id',
      valueType: 'textarea',
      //hideInSearch: true,
      //hideInTable: true,
      query: ['id={id}'],
    },
    {
      title: '用户名',
      dataIndex: 'name',
      sorter: true,
      editable: false,
      query: ['name=~{name}'],
      //tip: 'The user name is the unique key',
      render: (dom, entity) => (
        <a
          onClick={() => {
            setCurrentRow(entity);
            setCurrentAvatar(entity.avatar);
            setShowDetail(true);
          }}
        >
          {dom}
        </a>
      ),
    },
    {
      title: '头像',
      width: 60,
      dataIndex: 'avatar',
      valueType: 'avatar',
      hideInSearch: true,
    },
    {
      title: '昵称',
      dataIndex: 'nickname',
      valueType: 'nickname',
      query: ['nickname=~{nickname}'],
    },
    {
      title: '角色',
      hideInSearch: true,
      render: (_, entity) => (
        <div> {(entity.isRoot && '超级管理员') || (entity.isAdmin && '管理员') || '-'}</div>
      ),
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      valueType: 'textarea',
      query: ['phone=~{phone}'],
    },
    {
      title: '地址',
      hideInSearch: true,
      render: (_, entity) => {
        let addr = entity?.province?.label ? entity.province.label : '';
        addr += entity?.city?.label ? ' '+entity.city.label : '';
        addr += entity?.district?.label ? ' '+entity.district.label : '';
        addr += entity?.street?.label ? ' '+entity.street.label : '';
        addr += entity?.community?.label ? ' '+entity.community.label : '';
        addr += entity?.address ? ' '+entity.address : '';
        return addr
      },
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
      render: (_, record) => [
        <a
          key="edit"
          onClick={() => {
            handleUpdateModalVisible(true);
            setCurrentRow(record);
            setCurrentAvatar(record.avatar);
          }}
        >
          修改
        </a>,
        <a
          key="remove"
          onClick={() =>
            Modal.confirm({
              title: `确认要删除用户 ${record.name} (${record.id})吗?`,
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
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.User, API.PageParams>
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
        request={listQueryWithColumns(listUser, columns)}
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
                  title: `确认要删除用户吗 (共 ${selectedRowKeys.length} 项)?`,
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
        avatar={currentAvatar}
        updateAvatar={async (avatar) => {
          const success = await handleUpdate({
            id: currentRow.id,
            avatar: avatar,
          });
          if (success) {
            console.log('set current avatar', avatar);
            setCurrentAvatar(avatar);
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
        {currentRow?.id && (
          <ProDescriptions<API.User>
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.id,
            }}
            columns={columns as ProDescriptionsItemProps<API.User>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default TableList;
