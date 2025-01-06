import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

import { Header } from '../components/Header';

const Layout: React.FC = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Today>
        <a href="https://hits.seeyoufarm.com">
          <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fchoigyeongju.github.io%2Fportfolio&count_bg=%23929292&title_bg=%23929292&icon=&icon_color=%23000000&title=Today&edge_flat=false" />
        </a>
      </Today>
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
`;

const Today = styled.div`
  position: absolute;
  right: 12px;
  top: 96px;
`;
