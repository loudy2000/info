import React from 'react';
import { Row, Col } from 'antd';
import { createSideCard, createMainCard } from '../common';
import { exchanges, dxchanges, links, infos, candies, tools } from '../../data/home';

const HomePage = () => (
  <Row gutter={24}>
    <Col xl={15} lg={24} md={24} sm={24} xs={24}>
      {
        createMainCard('交易所公告', exchanges, 
          <span>
            <a href="https://www.feixiaohao.com/exchange/notice" target="_blank" rel="noopener noreferrer">非小号&nbsp;|&nbsp;</a>
            <a href="https://www.mytoken.io/media/notice" target="_blank" rel="noopener noreferrer">MyToken</a>
          </span>)
      }
      {createMainCard('去中心化交易所', dxchanges)}
    </Col>

    <Col xl={9} lg={24} md={24} sm={24} xs={24}>
      {createSideCard('行情资讯', links)}
      {createSideCard('项目测评 & 资讯', infos)}
      {createSideCard('空投', candies)}
      {createSideCard('工具', tools)}
    </Col>
  </Row>
)

export default HomePage;