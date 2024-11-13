import styled from 'styled-components';

interface Props {
  color?: string;
  label: string;
}

const Title = ({ color, label }: Props) => {
  return (
    <TitleWrap id={label}>
      <Label color={color}>{label}</Label>
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
  color: ${props => props.color && props.color};
  border-bottom: 4px solid ${props => (props.color ? props.color : 'black')};
`;
