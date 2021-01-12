import React from 'react';
import Link from 'next/link';
import { Menu, Modal } from 'antd';
import { useRouter } from 'next/router';
import { LogoutOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import getMenuItems from './getMenuItems';

interface SideMenuProps {
  handleLogout: () => void;
}

type Item = {
  link: string;
  asLink?: string;
  icon: any;
  name: string;
};

const SideMenu = (props: SideMenuProps) => {
  const {
    handleLogout,
  } = props;
  const { pathname } = useRouter();

  const menuItems = getMenuItems();

  const setIcon = (i: Item) => {
    const Icon = i.icon
    return <Icon />
  }

  const renderMenuItem = (items: Item[]) => {
    return items.map((i) => (
      <Menu.Item key={i.link}>
        <Link href={i.link} as={i.asLink}>
          <div>
            {setIcon(i)}
            <NavText>{i.name}</NavText>
          </div>
        </Link>
      </Menu.Item>
    ));
  };

  const onLogout = () => {
    Modal.confirm({
      title: 'ログアウトしてもよろしいですか？',
      okText: 'ログアウト',
      cancelText: 'キャンセル',
      onOk: () => handleLogout(),
    });
  };

  const getSelectedKeys = (pathname: string) => {
    if (pathname === '/') {
      return ['/'];
    }
    const selectedKey = `/${pathname.split('/')[1]}`;
    return selectedKey ? [selectedKey] : [];
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={getSelectedKeys(pathname)}
    >
      {renderMenuItem(menuItems)}
      <Menu.Item>
        <Button type="button" onClick={() => onLogout()}>
          <div>
            <LogoutOutlined />
            <NavText>ログアウト</NavText>
          </div>
        </Button>
      </Menu.Item>
    </Menu>
  );
};

export default SideMenu;

const NavText = styled.span`
  margin-left: 15px;
`;

const Button = styled.button`
  background-color: transparent;
  border: transparent;
  padding-left: 0;
`;
