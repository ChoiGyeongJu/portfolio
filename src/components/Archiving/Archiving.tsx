import styled from 'styled-components';

import GithubIcon from '../../assets/github.png';
import TistoryIcon from '../../assets/tistory.png';
import { FadeWrapper, Title } from '../../common';

const Archiving = () => {
  const handleClickItem = (target: 'github' | 'tistory') => {
    if (target === 'github') window.open('https://github.com/ChoiGyeongJu', '_blank');
    else if (target === 'tistory') window.open('https://gang-ju.tistory.com', '_blank');
  };

  return (
    <Wrap>
      <FadeWrapper>
        <Title label="ARCHIVING" color="white" />
      </FadeWrapper>
      <FadeWrapper>
        <ContentWrap>
          <Content onClick={() => handleClickItem('github')}>
            <img className="github" src={GithubIcon} alt="github icon" />
            <a href="https://github.com/ChoiGyeongJu" target="_blank">
              https://github.com/ChoiGyeongJu
            </a>
            <span>소스 코드 저장소</span>
          </Content>
          <Content onClick={() => handleClickItem('tistory')}>
            <img className="blog" src={TistoryIcon} alt="tistory icon" />
            <a href="https://gang-ju.tistory.com" target="_blank">
              https://gang-ju.tistory.com/
            </a>
            <span>개인 블로그</span>
          </Content>
        </ContentWrap>
      </FadeWrapper>
    </Wrap>
  );
};

export default Archiving;

const Wrap = styled.div`
  background-color: black;
  padding-bottom: 60px;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const Content = styled.div`
  cursor: pointer;
  background-color: white;
  max-width: 80%;
  width: 400px;
  height: 220px;
  padding: 0 20px;
  border-radius: 16px;

  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 8px;

  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }

  & .github {
    width: min(360px, 90%);
    border-radius: 100%;
  }
  & .blog {
    width: min(360px, 90%);
    margin: 18px 0 20px 0;
  }
`;
