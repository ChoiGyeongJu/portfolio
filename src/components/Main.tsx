import styled from 'styled-components';

import { About } from './About';
import { Banner } from './Banner';

const Main = () => {
  return (
    <Wrapper>
      <Banner />
      <About />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 100%;
`;
