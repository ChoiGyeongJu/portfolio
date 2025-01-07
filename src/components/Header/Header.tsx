import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { Drawer } from '@mui/material';

import { useDarkmode } from 'hooks';
import styled from 'styled-components';

import ThemeSwitch from './ThemeSwitch';

const MenuItems = ['Home', 'Resume', 'Work Experience', 'Career', 'Github'];

const Header = () => {
  const { isDarkMode } = useDarkmode();
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
          <AiOutlineMenu />
        </MenuIcon>
        <Menu isOpen={isMenuOpen}>
          {MenuItems.map(v => (
            <div key={v} onClick={() => handleClickItem(v)}>
              {v}
            </div>
          ))}
        </Menu>
        <StyledDrawer
          isDarkMode={isDarkMode}
          anchor="right"
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        >
          <DrawerContent>
            {MenuItems.map(v => (
              <div key={v} onClick={() => handleClickItem(v)}>
                {v}
                <BsArrowRight />
              </div>
            ))}
          </DrawerContent>
        </StyledDrawer>
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
    display: none;
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

const StyledDrawer = styled(Drawer)<{ isDarkMode: boolean }>`
  .MuiDrawer-paper {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#2f3437' : '#ffffff')};
    color: ${({ isDarkMode }) => (isDarkMode ? '#ebebeb' : '#000000')};
    width: min(70%, 360px);
    font-weight: 700;
  }
`;

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 18px;
  & div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;
