import React, { useState } from 'react';
import { Layout as AntdLayout, Drawer } from 'antd';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import theme from 'src/style/theme';
import breakpoints from 'src/constants/breakpoints';
import { HEADER_HEIGHT } from 'src/constants/app';
import SideMenu from './SideMenu';

const { Header, Content } = AntdLayout;

interface LayoutProps {
  children: React.ReactNode;
  handleLogout: () => void;
}

const Layout = (props: LayoutProps) => {
  const {
    children,
    handleLogout,
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <AntdLayout>
      <AntdLayout.Sider breakpoint="lg" collapsedWidth="0" className="side-nav">
        <SideLogo style={{ height: `${HEADER_HEIGHT}px` }}>accounting</SideLogo>
        <SideMenu
          handleLogout={handleLogout}
        />
      </AntdLayout.Sider>
      <AntdLayout id="inner-layout">
        <StyledHeader style={{ background: '#FFFFFF', padding: 0 }}>
          <NavBarBlock>
            <NavBar onClick={() => openDrawer()}>
              <FontAwesomeIcon icon={['fas', 'bars']} size="lg" />
            </NavBar>
          </NavBarBlock>
          <LogoBlock>accounting</LogoBlock>
        </StyledHeader>
        <Drawer
          placement="left"
          onClose={closeDrawer}
          visible={isOpen}
          bodyStyle={{
            backgroundColor: theme.color.darkBlue,
            height: '100vh',
            padding: 0,
          }}
          className="sidemenu-drawer"
        >
          <div style={{ height: `${HEADER_HEIGHT}px` }} />
          <SideMenu
            handleLogout={handleLogout}
          />
        </Drawer>
        <Content style={{ paddingTop: `${HEADER_HEIGHT}px` }}>
          {children}
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;

const SideLogo = styled.div`
  color: #cccccc;
  text-align: center;
  line-height: ${HEADER_HEIGHT}px;
`;

const StyledHeader = styled(Header)`
  position: fixed;
  width: 100%;
  z-index: 100;
  border-bottom: 1px solid #eee;
`;

const NavBar = styled.div`
  display: none;
  @media screen and (max-width: ${breakpoints.lg}) {
    display: block;
    padding: 0 1rem;
    color: ${theme.color.darkBlue};
  }
`;

const NavBarBlock = styled.div`
  position: fixed;
`;

const LogoBlock = styled.div`
  display: none;
  @media screen and (max-width: ${breakpoints.lg}) {
    display: block;
    color: ${theme.color.darkBlue};
    text-align: center;
    margin-left: 0;
  }
`;
