import styled from 'styled-components';

import { About } from './About';
import { Banner } from './Banner';
import { Skills } from './Skills';

const Main = () => {
  return (
    <Wrapper>
      <Banner />
      <About />
      <Skills />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 100%;
`;
