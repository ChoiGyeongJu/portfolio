import { useEffect, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { TypeAnimation } from 'react-type-animation';

import styled from 'styled-components';

import Image1JPG from '$assets/profile/image1.jpg';
import Image1WebP from '$assets/profile/image1.webp';
import Image2JPG from '$assets/profile/image2.jpg';
import Image2WebP from '$assets/profile/image2.webp';
import Image3JPG from '$assets/profile/image3.jpg';
import Image3WebP from '$assets/profile/image3.webp';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Banner = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 3000);
  }, []);

  const images = [
    { webp: Image1WebP, jpg: Image1JPG },
    { webp: Image2WebP, jpg: Image2JPG },
    { webp: Image3WebP, jpg: Image3JPG },
  ];

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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
              <picture>
                <source srcSet={image.webp} type="image/webp" />
                <img
                  src={image.jpg}
                  alt="profile image"
                  className="profile-image"
                  loading="eager"
                />
              </picture>
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
  height: fit-content;
  margin-top: 80px;
  padding: 120px 0;
  display: flex;
  flex-direction: row;
  .slick-dots {
    bottom: -120px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    .slick-dots {
      bottom: -25px;
    }
  }
`;

const Left = styled.div`
  width: 50%;
  margin-right: 60px;
  display: flex;
  justify-content: end;
  align-items: start;
  @media (max-width: 1024px) {
    width: 100%;
    margin-right: 0px;
    justify-content: center;
  }

  & .profile-image {
    width: min(450px, 70vw);
    height: min(450px, 70vw);
    object-fit: cover;
    border-radius: 50%;
  }
`;

const SliderWrap = styled(Slider)`
  width: min(450px, 80%);
  height: min(450px, 80%);

  & .container {
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
  }
`;

const Right = styled.h1`
  width: 50%;
  padding-left: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  & span {
    font-size: 36px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding-left: 0;
    align-items: center;
    margin-top: 42px;
    & span {
      font-size: 24px;
    }
  }
`;
