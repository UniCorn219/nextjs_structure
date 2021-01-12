import React from 'react';
import { Result } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const Home = () => {
  return (
    <Result
      status="info"
      icon={<HomeOutlined style={{ color: '#CCC' }} />}
      style={{ paddingTop: '20%' }}
    />
  );
};

export default Home;
