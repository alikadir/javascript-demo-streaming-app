import React from 'react';
import Content from './Content';
import { Divider, Row, Col, Space } from 'antd';
import {
  FacebookFilled,
  TwitterCircleFilled,
  InstagramFilled,
} from '@ant-design/icons';
import appleStore from '../../assets/store/app-store.svg';
import playStore from '../../assets/store/play-store.svg';
import windowsStore from '../../assets/store/windows-store.svg';
import { Link } from 'react-router-dom';

export default function Footer(props) {
  const menuList = [
    'Home',
    'Terms and Conditions',
    'Privacy Policy',
    'Collection Statement',
    'Help',
    'Manage Account',
  ];

  return (
    <footer>
      <Content isPage={false}>
        <Row>
          {menuList
            .map(m => (
              <Col key={m}>
                <Link to="/" alt={m} className="footer-text-link">
                  {m}
                </Link>
              </Col>
            ))
            .reduce((previous, current) => [
              previous,
              <Divider
                type="vertical"
                key={current}
                className="footer-link-separator"
              />,
              current,
            ])}
        </Row>
        <Row>
          <Col>
            <span className="footer-description-text">
              The project developed by Ali Kadir Bagcioglu, 2020
            </span>
          </Col>
        </Row>
        <Row
          justify="space-between"
          align="middle"
          className="footer-social-store-wrapper">
          <Col>
            <Space size={20}>
              <FacebookFilled className="footer-social-button" />
              <TwitterCircleFilled className="footer-social-button" />
              <InstagramFilled className="footer-social-button" />
            </Space>
          </Col>
          <Col>
            <Space size={20}>
              <a href="https://www.apple.com/app-store" alt="apple">
                <img src={appleStore} alt="apple logo" />
              </a>
              <a href="https://play.google.com/store/apps" alt="google">
                <img src={playStore} alt="google logo" />
              </a>
              <a href="https://www.microsoft.com/en-us/store" alt="microsoft">
                <img
                  src={windowsStore}
                  style={{ width: 110 }}
                  alt="microsoft logo"
                />
              </a>
            </Space>
          </Col>
        </Row>
      </Content>
    </footer>
  );
}
