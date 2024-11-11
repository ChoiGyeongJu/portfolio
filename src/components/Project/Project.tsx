import { useEffect, useState } from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { Title } from '../../common/Title';
import { ProjectDetail } from './ProjectDetail';
import { project_details, projects } from './projects';

const Project = () => {
  const nav = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const projectId = Number(queryParams.get('projectId') ?? null);

  const [projectInfo, setProjectInfo] = useState<any | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClickItem = (id: number) => {
    nav(`?projectId=${id}`);
  };

  const handleClose = () => {
    nav(-1);
  };

  // 쿼리스트링 기준으로 모달 정보 세팅
  useEffect(() => {
    if (!projectId) {
      setProjectInfo(null);
      document.body.style.overflow = 'auto';
    } else {
      const project = project_details.filter(v => v.id === projectId)[0];
      setProjectInfo(project);
      document.body.style.overflow = 'hidden';
    }
  }, [projectId]);

  return (
    <Wrap>
      <Title label="PROJECTS" />
      <ContentWrap>
        {projects.map((v, i) => (
          <Content
            key={i}
            onClick={() => handleClickItem(v.id)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === i && <DimmedOverlay />}
            <span className="title">{v.title}</span>
            <span className="date">{v.date}</span>
            <p className="description">{v.description}</p>
            <ul>
              {v.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className="links">
              {v.links.notion && (
                <a
                  href={v.links.notion}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-box"
                >
                  <SiNotion size={24} style={{ color: 'black' }} />
                  Notion
                </a>
              )}
              {v.links.github && (
                <a
                  href={v.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-box"
                >
                  <FaGithub size={24} style={{ color: 'black' }} />
                  Github
                </a>
              )}
              {v.links.site && (
                <a
                  href={v.links.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-box"
                >
                  <FaGlobe size={24} style={{ color: 'black' }} />
                  Site Url
                </a>
              )}
            </div>
            {hoveredIndex === i && <ReadMore>Read More !</ReadMore>}
          </Content>
        ))}
      </ContentWrap>
      {projectInfo && <ProjectDetail projectInfo={projectInfo} onClose={handleClose} />}
    </Wrap>
  );
};

export default Project;

const Wrap = styled.div`
  padding-bottom: 60px;
  background: #f5f5f5;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 1240px;
  max-width: 80%;
`;

const Content = styled.div`
  cursor: pointer;
  background-color: white;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-width: 90%;
  height: auto;
  min-height: 235px;
  padding: 20px;
  border-radius: 16px;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 6px;
  &:hover {
    transform: scale(1.05);
  }

  & .title {
    font-size: 20px;
    font-weight: 700;
    border-radius: 8px;
    background-color: #fb4516;
    color: white;
    padding: 4px 8px;
  }
  & .date {
    color: #6c757d;
    width: 100%;
    display: flex;
    padding: 4px 0;
    border-bottom: 1px solid #ccc;
  }
  & .description {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 6px;
  }
  & ul {
    margin: 0;
    padding-left: 24px;
    text-align: start;
  }

  & .links {
    display: flex;
    gap: 8px;
    margin-top: 8px;
    flex-wrap: wrap;
    & .icon-box {
      display: flex;
      align-items: center;
      border-radius: 8px;
      padding: 4px 12px;
      border: 1px solid #ccc;
      gap: 8px;
      color: black;
    }
  }
`;

const DimmedOverlay = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  z-index: 1;
`;

const ReadMore = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
