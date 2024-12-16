import styled from 'styled-components';

import TmaxLogo from '../../assets/tmax.png';
import { FadeWrapper, Title } from '../../common';

const SKILL_LIST = [
  'React',
  'styled-component',
  'Webpack',
  'Vite',
  'react-hook-form',
  'Mobx',
  'Tanstack Query',
];

const Career = () => {
  return (
    <Wrap>
      <FadeWrapper>
        <Title label="CAREER" color="white" />
      </FadeWrapper>
      <FadeWrapper>
        <Row>
          <LeftArea />
          <RightArea>
            <h2 className="company">주식회사 티맥스와플</h2>
            <span className="date">2023.05 - 2024.10 (1년 6개월)</span>
            <p className="description">프론트엔드 개발 담당, 게시판 모듈 담당</p>
            <div className="skill-list">
              {SKILL_LIST.map(v => (
                <div key={v} className="skill">
                  {v}
                </div>
              ))}
            </div>
            <TaskWrapper>
              <div className="task-title">서울시 교육청 사업건</div>
              <span className="date">2024.08 - 퇴사</span>
              <ul>
                <li>React 기반의 게시판 서비스 개발</li>
                <li>TanStack Query를 활용한 상태 관리 및 데이터 캐싱 최적화</li>
                <li>Modal과 사용자 정보를 Context API와 Provider 패턴을 활용해 전역으로 관리</li>
                <li>사내 npm 레지스트리 모듈 배포</li>
              </ul>
            </TaskWrapper>
            <TaskWrapper>
              <div className="task-title">(주)푸디스트 사업건</div>
              <span className="date">2023.06 - 2024.08</span>
              <ul>
                <li>React 기반의 게시판 & 차트 서비스 개발</li>
                <li>Mobx를 활용한 전역 상태 관리</li>
                <li>사내 npm 레지스트리 모듈 배포</li>
                <li>react-helmet을 사용한 SEO 관련 메타 태그 관리</li>
                <li>VOC 이슈 대응 및 고도화 작업</li>
              </ul>
            </TaskWrapper>
          </RightArea>
        </Row>
      </FadeWrapper>
    </Wrap>
  );
};

export default Career;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1240px;
  max-width: 80%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  margin: 60px 0;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${TmaxLogo});
  background-size: contain;
  background-position: center;
  min-width: 320px;
  width: 320px;
  height: 320px;
  border-radius: 100%;
  border: 1px solid #ccc;
`;

const RightArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-left: 3px solid #ccc;
  padding-left: 100px;

  @media (max-width: 900px) {
    border-left: none;
    padding-left: 0;
  }

  & .company {
    margin: 0;
  }
  & .date {
    color: #6c757d;
  }
  & .description {
    font-weight: 700;
  }
  & .skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    & .skill {
      border-radius: 12px;
      padding: 4px 12px;
      background-color: black;
      color: white;
      font-weight: 700;
    }
  }

  & .task-title {
    font-weight: 700;
    padding-left: 12px;
    border-left: 4px solid #222;
    margin: 36px 0 12px 0;
  }
`;

const TaskWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-bottom: 3px solid #ccc;

  & ul {
    padding-left: 24px;
  }
  & li {
    text-align: left;
  }
`;
