import{j as e,d as r}from"./index-CpzoM8wi.js";import{M as s,a as n,b as o,c as l,d as c,e as x}from"./index-CVPCdluQ.js";import{F as t,T as d}from"./FadeWrapper-B_xNX9RW.js";const f=()=>{const i=[{icon:e.jsx(s,{}),category:"이름",value:"최경주"},{icon:e.jsx(n,{}),category:"생년월일",value:"99.02.27"},{icon:e.jsx(o,{}),category:"주소",value:"경기도 수원시"},{icon:e.jsx(l,{}),category:"전화번호",value:"010-2954-5142"},{icon:e.jsx(c,{}),category:"이메일",value:"rudwn5142@naver.com"},{icon:e.jsx(x,{}),category:"학교",value:"세종대학교 스마트기기공학과"}];return e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsx(d,{label:"ABOUT"})}),e.jsx(t,{children:e.jsx(p,{children:i.map(a=>e.jsxs(m,{children:[a.icon,e.jsxs("div",{className:"text-area",children:[e.jsx("span",{className:"category",children:a.category}),e.jsx("p",{children:a.value})]})]},a.value))})})]})},p=r.div`
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
`,m=r.div`
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
`;export{f as default};
