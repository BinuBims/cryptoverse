import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;


const Homepage = () => {
  return (
    <div>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value="6" /> </Col>
        <Col span={12}><Statistic title="Total Exchanges" value="6" /> </Col>
        <Col span={12}><Statistic title="Total Market Cap" value="6" /> </Col>
        <Col span={12}><Statistic title="Total 24h Volume" value="6" /> </Col>
        <Col span={12}><Statistic title="Total Market" value="6" /> </Col>
      </Row>
    </div>
  )
}

export default Homepage