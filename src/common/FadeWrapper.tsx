import React, { ReactNode } from 'react';
import { Fade, FadeProps } from 'react-awesome-reveal';

interface Props extends FadeProps {
  children: ReactNode;
}

const FadeWrapper: React.FC<Props> = ({ children }) => {
  const Wrapper = Fade as React.FC<Props>;

  return (
    <Wrapper triggerOnce duration={1000}>
      {children}
    </Wrapper>
  );
};

export default FadeWrapper;
