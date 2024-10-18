import { useEffect, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { TypeAnimation } from 'react-type-animation';

import styled from 'styled-components';

import Image1 from '../../assets/image1.jpg';
import Image2 from '../../assets/image2.jpg';
import Image3 from '../../assets/image3.jpg';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Banner = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 3000);
  }, []);

  const images = [Image1, Image2, Image3];
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    prevArrow: <></>, // TODO: 아이콘 커스텀 적용
    nextArrow: <></>,
  };

  return (
    <Wrapper>
      <Left>
        <SliderWrap {...settings}>
          {images.map((image, index) => (
            <div className="container" key={index}>
              <img src={image} alt={`Profile ${index + 1}`} className="profile-image" />
            </div>
          ))}
        </SliderWrap>
      </Left>
      <Right>
        <TypeAnimation sequence={['안녕하세요!', 1000]} wrapper="span" speed={30} cursor={false} />
        <TypeAnimation
          sequence={[1000, '2년차 프론트엔드 개발자', 1000]}
          wrapper="span"
          speed={30}
          cursor={false}
        />
        {visible && <TypeAnimation sequence={['최경주입니다.', 1000]} wrapper="span" speed={30} />}
      </Right>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  padding: 120px 0;
  display: flex;
  flex-direction: row;
  background: beige;
`;

const Left = styled.div`
  width: 50%;
  margin-right: 60px;
  display: flex;
  justify-content: end;

  & .profile-image {
    width: 400px;
    height: 400px;
    margin-bottom: 30px;
    border-radius: 100%;
    object-fit: cover;
  }
`;

const SliderWrap = styled(Slider)`
  width: 450px;

  & .container {
    display: flex !important;
    align-items: center;
    justify-content: center;
  }
`;

const Right = styled.h1`
  width: 50%;
  padding-left: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;
