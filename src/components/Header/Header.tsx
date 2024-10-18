import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import styled from 'styled-components';

const MenuItems = ['ABOUT', 'SKILLS', 'ARCHIVING', 'PROJECTS', 'CAREER'];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickItem = (target: string) => {
    setIsMenuOpen(false);
    const elem = document.getElementById(target);
    console.log(target, elem);

    if (elem) {
      // requestAnimationFrame을 사용하여 스크롤 이동
      requestAnimationFrame(() => {
        const elemRect = elem.getBoundingClientRect();
        const offset = elemRect.top + window.scrollY - 75; // 헤더 높이를 고려하여 조정
        window.scrollTo({ top: offset, behavior: 'smooth' });
      });
    }
  };

  return (
    <Wrapper>
      <Container>
        <LeftArea>최경주 Portfolio</LeftArea>
        <RightArea>
          <MenuIcon onClick={toggleMenu}>
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </MenuIcon>
          <Menu isOpen={isMenuOpen}>
            {MenuItems.map(v => (
              <div onClick={() => handleClickItem(v)}>{v}</div>
            ))}
          </Menu>
        </RightArea>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: #02343f;
`;

const Container = styled.div`
  width: 1200px;
  max-width: 90%;
  height: 100%;
  color: white;
  font-weight: 700;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
`;

const LeftArea = styled.div``;

const RightArea = styled.div`
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MenuIcon = styled.div`
  font-size: 28px;
  display: none;

  @media (max-width: 800px) {
    display: block;
  }
`;

const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 16px;

  @media (max-width: 800px) {
    flex-direction: column;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 80px;
    left: 0;
    background-color: #02343f;
    width: 100%;
    padding: 16px 0;
  }
`;
