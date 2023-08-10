import { Select } from 'antd';
import React, { useState, useEffect } from 'react';
import { getSpu, listSpu } from '@/services/apiserver/spu';
import { useRequest } from 'umi';

const { Option } = Select;

export type SelectSpuProps = {
  spuId: number;
  ownerId?: number;
  onChange: (data: API.Spu) => void;
};

const SelectSpu: React.FC<SelectSpuProps> = (props) => {
  const [data, setData] = useState<API.Spu[]>([]);
  const [currentSpu, setCurrentSpu] = useState<API.Spu>({});

  const { data: spuData } = useRequest(() => {
    return getSpu({ id: props.spuId });
  });

  useEffect(() => {
    setCurrentSpu(spuData || {});
    props.onChange(spuData);
  }, [spuData, props]);

  const handleSearch = (newValue: string) => {
    if (newValue) {
      const query = ['name=~' + newValue];
      if (props.ownerId) {
        query.push('ower_id=' + props.ownerId);
      }
      listSpu({ query: '' + query }).then((r) => {
        console.log('setdata', r.datat?.list);
        setData(r.data?.list || []);
      });
    } else {
      setData([]);
    }
  };

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    const spu = data.find((element) => element.id == value.value);
    if (spu) {
      setCurrentSpu(spu);
      props.onChange(spu);
    }
  };

  const options = data.map((d) => (
    <Option key={d.id}>
      {d.name} ({d.org?.name})
    </Option>
  ));

  return (
    <Select
      showSearch
      // TODO: https://ant.design/components/select-cn/#components-select-demo-select-users
      //debounceTime={300}
      labelInValue
      value={{ value: currentSpu?.id, label: `${currentSpu?.name} (${currentSpu?.org?.name})` }}
      placeholder={'输入商品名称'}
      style={{ width: 200 }}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
    >
      {options}
    </Select>
  );
};

export default SelectSpu;
