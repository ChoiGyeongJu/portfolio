import {
  MdPermIdentity,
  MdPhone,
  MdEmail,
  MdHome,
  MdCalendarMonth,
  MdSchool,
} from 'react-icons/md';

import styled from 'styled-components';

import { Title } from '../../common/Title';

const About = () => {
  const items = [
    { icon: <MdPermIdentity />, category: '이름', value: '최경주' },
    { icon: <MdCalendarMonth />, category: '생년월일', value: '99.02.27' },
    { icon: <MdHome />, category: '주소', value: '경기도 수원시' },
    { icon: <MdPhone />, category: '전화번호', value: '010-2954-5142' },
    { icon: <MdEmail />, category: '이메일', value: 'rudwn5142@naver.com' },
    { icon: <MdSchool />, category: '학교', value: '세종대학교 스마트기기공학과' },
  ];

  return (
    <>
      <Title label="ABOUT" />
      <InfoWrap>
        {items.map(v => (
          <Item>
            {v.icon}
            <div className="text-area">
              <span className="category">{v.category}</span>
              <p>{v.value}</p>
            </div>
          </Item>
        ))}
      </InfoWrap>
    </>
  );
};

export default About;

const InfoWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
  margin: 60px auto;

  & svg {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }
`;

const Item = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  padding-left: 120px;

  & .text-area {
    display: flex;
    flex-direction: column;
    text-align: left;
    & .category {
      font-weight: 700;
      font-size: 20px;
    }
    & p {
      line-break: anywhere;
    }
  }
`;
