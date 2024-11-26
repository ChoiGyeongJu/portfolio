import{j as o,d as i}from"./index-CpzoM8wi.js";import{S as t,F as d,a as x,b as e,c as p,d as g,e as m,f as b,g as j}from"./index-CBmIfpy9.js";import{f,g as h}from"./index-CVPCdluQ.js";import{F as r,T as u}from"./FadeWrapper-B_xNX9RW.js";const n={languages:[{name:"TypeScript",icon:o.jsx(t,{}),bgColor:"#2f74c0",color:"white"},{name:"JavaScript",icon:o.jsx(d,{}),bgColor:"#efd81d"},{name:"Python",icon:o.jsx(x,{}),bgColor:"#3d75a4",color:"white"}],frontend:[{name:"React",icon:o.jsx(e,{}),bgColor:"#61DBFB",color:"black"},{name:"Styled-components",icon:o.jsx(p,{}),bgColor:"#db7093",color:"white"},{name:"Webpack",icon:o.jsx(g,{}),bgColor:"#8dd6f9",color:"black"},{name:"Vite",icon:o.jsx(m,{}),bgColor:"#646cff",color:"white"},{name:"Mobx",icon:o.jsx(b,{}),bgColor:"#dc3a0c",color:"white"},{name:"Tanstack Query",icon:o.jsx(j,{}),bgColor:"#ff4154",color:"white"},{name:"React Hook Form",icon:o.jsx(e,{}),bgColor:"#ec5990",color:"white"}]},v=()=>o.jsxs(y,{children:[o.jsx(r,{children:o.jsx(u,{label:"SKILLS"})}),o.jsx(r,{children:o.jsxs(C,{children:[o.jsxs(c,{children:[o.jsxs("span",{className:"category",children:[o.jsx(f,{})," Language"]}),o.jsx("div",{className:"stack-list",children:n.languages.map((a,s)=>o.jsxs(l,{bgColor:a.bgColor,color:a.color,children:[a.icon,o.jsx("span",{children:a.name})]},s))})]}),o.jsxs(c,{children:[o.jsxs("span",{className:"category",children:[o.jsx(h,{})," Frontend"]}),o.jsx("div",{className:"stack-list",children:n.frontend.map((a,s)=>o.jsxs(l,{bgColor:a.bgColor,color:a.color,children:[a.icon,o.jsx("span",{children:a.name})]},s))})]})]})})]}),y=i.div`
  background: beige;
  margin: 0 auto;
  padding-bottom: 60px;
`,C=i.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 40px auto;
  width: 1240px;
  max-width: 75%;
  padding: 42px;
  border-radius: 24px;
  background: white;
`,c=i.div`
  display: flex;
  flex-direction: row;
  align-items: start;

  & .category {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 24px;
    font-weight: 700;
    margin-right: 36px;
  }
  & .stack-list {
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    & .category {
      margin-right: 0;
      margin-bottom: 16px;
    }
    & .stack-list {
      justify-content: start;
    }
  }
`,l=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  margin: 0 24px 12px 0;
  background-color: ${a=>a.bgColor};
  color: ${a=>a.color&&a.color};
  padding: 6px 18px;
  border-radius: 8px;
`;export{v as default};
