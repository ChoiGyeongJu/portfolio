import styled from 'styled-components';

import { About } from './About';
import { Archiving } from './Archiving';
import { Banner } from './Banner';
import { Career } from './Career';
import { Project } from './Project';
import { Skills } from './Skills';

const Main = () => {
  return (
    <Wrapper>
      <Banner />
      <About />
      <Skills />
      <Archiving />
      <Project />
      <Career />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 100%;
`;
