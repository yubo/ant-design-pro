import React, { useEffect, useState } from 'react';
import { updateUser } from '@/services/apiserver/user';
import AvatarView from '@/components/AvatarView/AvatarView';
import { message } from 'antd';
import ProForm, {
  ProFormDependency,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { useRequest } from 'umi';
import { authInfo } from '@/services/apiserver/auth';
import { listProvince, listCity } from '@/services/apiserver/geographic';

import styles from './BaseView.less';

const BaseView: React.FC = () => {
  const [currentAvatar, setCurrentAvatar] = useState<string>('');
  const { data: currentUser, loading } = useRequest(() => {
    return authInfo();
  });

  useEffect(() => {
    setCurrentAvatar(currentUser?.avatar || '');
  }, [currentUser]);

  const handleUpdate = async (fields) => {
    try {
      await updateUser({ id: currentUser.id }, fields);
      console.log({ id: currentUser.id }, fields);

      message.success('更新基本信息成功');
      return true;
    } catch (error) {
      console.log(error);
      message.error('更新基本信息失败，请稍后再试');
      return false;
    }
  };
  return (
    <div className={styles.baseView}>
      {loading ? null : (
        <>
          <div className={styles.left}>
            <ProForm
              layout="vertical"
              onFinish={handleUpdate}
              submitter={{
                searchConfig: {
                  submitText: '更新基本信息',
                },
                render: (_, dom) => dom[1],
              }}
              initialValues={currentUser}
              hideRequiredMark
            >
              <ProFormText
                width="md"
                name="email"
                label="邮箱"
                rules={[
                  {
                    required: true,
                    message: '请输入您的邮箱!',
                  },
                ]}
              />
              <ProFormText
                width="md"
                name="name"
                label="昵称"
                rules={[
                  {
                    required: true,
                    message: '请输入您的昵称!',
                  },
                ]}
              />
              <ProFormTextArea
                name="profile"
                label="个人简介"
                rules={[
                  {
                    required: true,
                    message: '请输入个人简介!',
                  },
                ]}
                placeholder="个人简介"
              />
              <ProFormSelect
                width="sm"
                name="country"
                label="国家/地区"
                rules={[
                  {
                    required: true,
                    message: '请输入您的国家或地区!',
                  },
                ]}
                options={[
                  {
                    label: '中国',
                    value: 'China',
                  },
                ]}
              />

              <ProForm.Group title="所在省市" size={8}>
                <ProFormSelect
                  rules={[
                    {
                      required: true,
                      message: '请输入您的所在省!',
                    },
                  ]}
                  width="sm"
                  fieldProps={{
                    labelInValue: true,
                  }}
                  name="province"
                  className={styles.item}
                  request={async () => {
                    return listProvince().then(({ data }) => {
                      return data.map((item) => {
                        return {
                          label: item.name,
                          value: item.id,
                        };
                      });
                    });
                  }}
                />
                <ProFormDependency name={['province']}>
                  {({ province }) => {
                    return (
                      <ProFormSelect
                        params={{
                          key: province?.value,
                        }}
                        name="city"
                        width="sm"
                        fieldProps={{
                          labelInValue: true,
                        }}
                        rules={[
                          {
                            required: true,
                            message: '请输入您的所在城市!',
                          },
                        ]}
                        disabled={!province}
                        className={styles.item}
                        request={async () => {
                          if (!province?.key) {
                            return [];
                          }
                          return listCity({ province: province.key || '' }).then(({ data }) => {
                            return data.map((item) => {
                              return {
                                label: item.name,
                                value: item.id,
                              };
                            });
                          });
                        }}
                      />
                    );
                  }}
                </ProFormDependency>
              </ProForm.Group>
              <ProFormText
                width="md"
                name="address"
                label="街道地址"
                rules={[
                  {
                    required: true,
                    message: '请输入您的街道地址!',
                  },
                ]}
              />
              <ProFormText
                name="phone"
                label="联系电话"
                rules={[
                  {
                    required: true,
                    message: '请输入您的联系电话!',
                  },
                ]}
              />
            </ProForm>
          </div>
          <div className={styles.right}>
            <AvatarView
              avatar={currentAvatar}
              onChange={async (avatar) => {
                const success = await handleUpdate({
                  avatar: avatar,
                });
                if (success) {
                  setCurrentAvatar(avatar);
                }
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BaseView;
