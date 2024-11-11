import Modal from 'react-modal';
import Slider, { Settings } from 'react-slick';

import styled from 'styled-components';

interface Props {
  projectInfo: any;
  onClose: () => void;
}

const ProjectDetail = ({ projectInfo, onClose }: Props) => {
  const customStyles: { overlay: React.CSSProperties; content: React.CSSProperties } = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '1000px',
      maxWidth: '100%',
      maxHeight: 'calc(100% - 80px)',
      padding: '0',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
    },
  };

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    prevArrow: <></>,
    nextArrow: <></>,
  };

  return (
    <Modal isOpen={true} onRequestClose={onClose} style={customStyles}>
      <Header>
        <Title>{projectInfo.title}</Title>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Header>
      <Content>
        <ImageContainer>
          <SliderWrap {...settings}>
            {projectInfo.images.map((image: string, index: number) => (
              <div className="container" key={index}>
                <img src={image} loading="lazy" className="profile-image" />
              </div>
            ))}
          </SliderWrap>
        </ImageContainer>
        <Description>
          <h3>프로젝트 소개:</h3>
          <p>{projectInfo.description}</p>
        </Description>
        <InfoWrap>
          <h3>Tech Stacks:</h3>
          <ul>
            {projectInfo.techStacks?.map((stack: string, index: number) => (
              <li key={index}>{stack}</li>
            ))}
          </ul>
        </InfoWrap>
        {projectInfo.works && (
          <InfoWrap>
            <h3>Works:</h3>
            <ul>
              {projectInfo.works.map((work: string, index: number) => (
                <li key={index}>{work}</li>
              ))}
            </ul>
          </InfoWrap>
        )}
      </Content>
    </Modal>
  );
};

export default ProjectDetail;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background-color: #0bb;
  color: white;
  font-size: 24px;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h4`
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 120px 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden auto;
  max-height: calc(100% - 80px);
  &::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border: 2px solid transparent;
    border-radius: 4px;
    opacity: 1;
    background-color: #bdbdbd;
  }

  h3 {
    margin: 0 0 8px;
  }
`;

const Description = styled.div`
  margin-top: 56px;
  font-size: 16px;
  line-height: 1.6;
  text-align: left;
  padding: 0 16px;
  width: 100%;
  max-width: 800px;
  overflow-wrap: break-word;
`;

const InfoWrap = styled.div`
  margin-top: 16px;
  width: 100%;
  max-width: 800px;
  text-align: left;
  padding: 0 16px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  & img {
    width: auto;
    max-width: min(100vw, 900px);
    height: 50vh;
    object-fit: contain;
  }
`;

const SliderWrap = styled(Slider)`
  width: 100%;
  height: 50vh;

  & .container {
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  & .slick-dots {
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex !important;
    align-items: center;
    justify-content: center;
  }
`;
