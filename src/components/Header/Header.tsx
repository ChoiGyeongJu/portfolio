import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import ThemeSwitch from './ThemeSwitch';

const MenuItems = ['Home', 'Resume', 'Work Experience', 'Career', 'Github'];

const Header = () => {
  const nav = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickItem = (target: string) => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0 });

    switch (target) {
      case 'Home':
        nav('/portfolio/home');
        break;
      case 'Resume':
        nav('/portfolio/resume');
        break;
      case 'Work Experience':
        nav('/portfolio/experience');
        break;
      case 'Github':
        window.open('https://github.com/ChoiGyeongJu', '_blank');
        break;
      case 'Career':
        nav('/portfolio/career');
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      <Container>
        <MenuIcon onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </MenuIcon>
        <Menu isOpen={isMenuOpen}>
          {MenuItems.map(v => (
            <div key={v} onClick={() => handleClickItem(v)}>
              {v}
            </div>
          ))}
        </Menu>
        <SwitchWrapper>
          <ThemeSwitch />
        </SwitchWrapper>
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
  max-width: 90%;
  height: 100%;
  font-weight: 700;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  @media (min-width: 960px) {
    padding: 0 12%;
  }
`;

const MenuIcon = styled.div`
  font-size: 28px;
  display: none;

  @media (max-width: 960px) {
    display: block;
    margin-left: auto;
  }
`;

const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  transition: all 0.2s ease-in-out;
  & div {
    cursor: pointer;
  }

  @media (max-width: 960px) {
    width: 100%;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    overflow: hidden;
    padding-bottom: ${props => props.isOpen && '16px'};
    gap: ${({ isOpen }) => (isOpen ? '20px' : '0')};
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.2s ease-in-out, gap 0.2s ease-in-out;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const SwitchWrapper = styled.div`
  width: fit-content;
  position: absolute;
  right: 0;

  @media (max-width: 960px) {
    left: 5%;
  }
`;
