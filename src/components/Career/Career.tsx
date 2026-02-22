import { ReactNode } from 'react';
import { Fade, FadeProps } from 'react-awesome-reveal';

import styled from 'styled-components';

import { CAREER_DATA } from './constants';

interface Props extends FadeProps {
  children: ReactNode;
}

const Career = () => {
  const FadeWrapper = Fade as React.FC<Props>;

  return (
    <Wrap>
      {CAREER_DATA.map(career => (
        <FadeWrapper key={career.company}>
          <Row>
            <LeftArea style={{ backgroundImage: career.logo ? `url(${career.logo})` : 'none' }} />
            <RightArea>
              <h2 className="company">{career.company}</h2>
              <span className="date">{career.date}</span>
              <p className="description">{career.description}</p>
              <div className="skill-list">
                {career.skills.map(v => (
                  <div key={v} className="skill">
                    {v}
                  </div>
                ))}
              </div>
              {career.tasks.map(task => (
                <TaskWrapper key={task.title}>
                  <div className="task-title">{task.title}</div>
                  <span>{task.date}</span>
                  <ul>
                    {task.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </TaskWrapper>
              ))}
            </RightArea>
          </Row>
        </FadeWrapper>
      ))}
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
  padding-top: 120px;
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
  /* background-image 는 인라인 스타일로 제어 */
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
