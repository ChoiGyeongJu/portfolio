import styled from 'styled-components';

import GithubIcon from '../../assets/github.png';
import TistoryIcon from '../../assets/tistory.png';
import { Title } from '../../common/Title';

const Archiving = () => {
  const handleClickItem = (target: 'github' | 'tistory') => {
    if (target === 'github') window.open('https://github.com/ChoiGyeongJu', '_blank');
    else if (target === 'tistory') window.open('https://gang-ju.tistory.com', '_blank');
  };

  return (
    <Wrap>
      <Title label="ARCHIVING" color="white" />
      <ContentWrap>
        <Content onClick={() => handleClickItem('github')}>
          <img className="github" src={GithubIcon} />
          <a href="https://github.com/ChoiGyeongJu" target="_blank">
            https://github.com/ChoiGyeongJu
          </a>
          <span>소스 코드 저장소</span>
        </Content>
        <Content onClick={() => handleClickItem('tistory')}>
          <img className="blog" src={TistoryIcon} />
          <a href="https://gang-ju.tistory.com" target="_blank">
            https://gang-ju.tistory.com/
          </a>
          <span>개인 블로그</span>
        </Content>
      </ContentWrap>
    </Wrap>
  );
};

export default Archiving;

const Wrap = styled.div`
  background-color: black;
  padding-bottom: 40px;
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
    width: 360px;
    border-radius: 100%;
  }
  & .blog {
    width: 360px;
    margin: 18px 0 20px 0;
  }
`;
