import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <div>© 2024 Choi Gyeongju. All Rights Reserved.</div>
        <FooterLinks>
          <a href="https://hits.seeyoufarm.com">
            <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fchoigyeongju.github.io%2Fportfolio%2F&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false" />
          </a>
          <a href="https://github.com/ChoiGyeongJu" target="_blank">
            GitHub
          </a>
          <a href="mailto:rudwn5142@naver.com">Contact</a>
        </FooterLinks>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #02343f;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  bottom: 0;
`;

const FooterContent = styled.div`
  width: 1240px;
  max-width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 16px;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 800px) {
    margin-top: 10px;
  }
`;
