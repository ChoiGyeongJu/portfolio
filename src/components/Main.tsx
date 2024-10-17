import styled from 'styled-components';

import { Banner } from './Banner';

const Main = () => {
  return (
    <Wrapper>
      <Banner />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 100%;
`;
