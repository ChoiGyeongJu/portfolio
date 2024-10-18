import { FaJs, FaPython, FaReact } from 'react-icons/fa';
import { MdComputer, MdLanguage } from 'react-icons/md';
import {
  SiTypescript,
  SiMobx,
  SiWebpack,
  SiVite,
  SiStyledcomponents,
  SiReactquery,
} from 'react-icons/si';

import styled from 'styled-components';

import { Title } from '../../common/Title';

const techStack = {
  languages: [
    { name: 'TypeScript', icon: <SiTypescript />, bgColor: '#2f74c0', color: 'white' },
    { name: 'JavaScript', icon: <FaJs />, bgColor: '#efd81d' },
    { name: 'Python', icon: <FaPython />, bgColor: '#3d75a4', color: 'white' },
  ],
  frontend: [
    { name: 'React', icon: <FaReact />, bgColor: '#61DBFB', color: 'black' },
    { name: 'Styled-components', icon: <SiStyledcomponents />, bgColor: '#db7093', color: 'white' },
    { name: 'Webpack', icon: <SiWebpack />, bgColor: '#8dd6f9', color: 'black' },
    { name: 'Vite', icon: <SiVite />, bgColor: '#646cff', color: 'white' },
    { name: 'Mobx', icon: <SiMobx />, bgColor: '#dc3a0c', color: 'white' },
    { name: 'Tanstack Query', icon: <SiReactquery />, bgColor: '#ff4154', color: 'white' },
    { name: 'React Hook Form', icon: <FaReact />, bgColor: '#ec5990', color: 'white' },
  ],
};

const Skills = () => {
  return (
    <Wrap>
      <Title label="SKILLS" />
      <Col>
        <Row>
          <span className="category">
            <MdLanguage /> Language
          </span>
          {techStack.languages.map((tech, index) => (
            <ListItem key={index} bgColor={tech.bgColor} color={tech.color}>
              {tech.icon}
              <span>{tech.name}</span>
            </ListItem>
          ))}
        </Row>
        <Row>
          <span className="category">
            <MdComputer /> Frontend
          </span>
          <div className="stack-list">
            {techStack.frontend.map((tech, index) => (
              <ListItem key={index} bgColor={tech.bgColor} color={tech.color}>
                {tech.icon}
                <span>{tech.name}</span>
              </ListItem>
            ))}
          </div>
        </Row>
      </Col>
    </Wrap>
  );
};

export default Skills;

const Wrap = styled.div`
  background: beige;
  margin: 0 auto;
  padding-bottom: 40px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 40px auto;
  width: 1240px;
  max-width: 80%;
  padding: 50px;
  border-radius: 24px;
  background: white;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;

  & .category {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 24px;
    font-weight: 700;
    margin-right: 36px;
  }
  & .stack-list {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ListItem = styled.div<{ bgColor: string; color?: string }>`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  margin: 0 24px 12px 0;
  background-color: ${props => props.bgColor};
  color: ${props => props.color && props.color};
  padding: 6px 18px;
  border-radius: 8px;
`;
