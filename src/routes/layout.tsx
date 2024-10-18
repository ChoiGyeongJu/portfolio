import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

import { Header } from '../components/Header';

const Layout: React.FC = () => {
  return (
    <LayoutWrapper>
      <Header />
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
