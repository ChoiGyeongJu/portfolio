import styled from 'styled-components';

interface Props {
  color?: string;
  label: string;
}

const Title = ({ color, label }: Props) => {
  return (
    <TitleWrap>
      <Label>{label}</Label>
    </TitleWrap>
  );
};

export default Title;

const TitleWrap = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.h1`
  padding: 12px;
  border-bottom: 4px solid ${props => (props.color ? props.color : 'black')};
`;
