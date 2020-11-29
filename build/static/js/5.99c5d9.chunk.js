(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{69:function(e,t,r){"use strict";r.r(t);var i=r(0),o=r.n(i),n=r(1);const a=n.c.div`
  position: absolute;
  top: 4px;
  left: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    width: 1.4rem;
    height: 1.4rem;
    path {
      transition: all 0.5s ease-in;
    }
  }
`,l="FAV_COLORS";var s=({currColor:e})=>{const[t,r]=Object(i.useState)(!1);Object(i.useEffect)(()=>{JSON.parse(localStorage.getItem(l)||"[]").some(t=>t.name==e.name)?r(!0):r(!1)},[e]);return o.a.createElement(a,{onClick:()=>{let i=JSON.parse(localStorage.getItem(l)||"[]");t?i=i.filter(t=>t.name!=e.name):i.push(e),r(e=>!e),localStorage.setItem(l,JSON.stringify(i))}},o.a.createElement("svg",{t:"1568172188297",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2640",width:"32",height:"32"},o.a.createElement("path",{d:"M512 910.933333l-61.866667-56.106667c-219.733333-199.466667-364.8-331.093333-364.8-492.16 0-131.626667 103.04-234.666667 234.666667-234.666667 74.24 0 145.493333 34.56 192 88.96 46.506667-54.4 117.76-88.96 192-88.96 131.626667 0 234.666667 103.04 234.666667 234.666667 0 161.066667-145.066667 292.693333-364.8 492.16l-61.866667 56.106667z","p-id":"2641",fill:t?"#ef7a82":"#fff"})))},c=r(8),m=r(22);const f=n.c.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  font-size: 0.6rem;
  line-height: 1.2;
  padding: 0.6rem 0.4rem;
  margin: 1rem 0;
  margin-bottom: 2rem;
  cursor: pointer;
  font-family: SimSun, FangSong, STSong, STZhongsong, LiSu, KaiTi, 'Microsoft YaHei';
  &.mobile {
    font-size: 0.8rem;
  }
  > h2 {
    color: inherit;
    font-size: 0.4rem;
    width: 0.5rem;
    align-self: flex-end;
    margin-right: 0.3rem;
  }
  .line {
    color: inherit;
    text-align: right;
    width: 1rem;
    letter-spacing: 0.14rem;
    font-weight: bold;
  }
`;var g=({bgColor:e,fontColor:t="#fff",content:r="",author:i="",title:n="",refetch:a})=>{const{isMobile:l}=Object(c.b)();return o.a.createElement(f,{onClick:()=>{a()},style:{background:e,color:t},className:l?"mobile":""},r.map(e=>o.a.createElement("p",{key:e,className:"line"},e)),o.a.createElement("h2",null,i," · ",n))};var h=n.d`
from {
    opacity: 0;
  }

  to {
    opacity: .8;
  }
`;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}const u=n.c.hgroup`
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  padding: 1rem 0.8rem;
  position: relative;
  width: 4.6rem;
  cursor: default;
  margin-top: 1rem;
  margin-right: 0.5rem;
  min-height: 18rem;
  &.mobile {
    width: 5.8rem;
    margin-top: 8rem;
    > h1 {
      font-size: 3.6rem;
    }
  }
  &:hover > h1 {
    transform: scale(1.1);
  }

  > h1 {
    color: inherit;
    font-size: 3.2rem;
    letter-spacing: -0.5rem;
    writing-mode: vertical-lr;
    transition: transform 0.4s ease-in;

    font-family: 'TChinese', 'SimSun', 'FangSong', 'STSong', 'STZhongsong', 'LiSu', 'KaiTi',
      'Microsoft YaHei';
  }
  > h2 {
    text-transform: capitalize;
    font-size: 0.6rem;
    writing-mode: vertical-lr;
    position: absolute;
    right: 0.2rem;
    top: 0.4rem;
    color: inherit;
  }
  > h3 {
    width: 100%;
    position: absolute;
    left: -0.4rem;
    top: -2rem;
    display: flex;
  }
  .figure {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: -1;
    opacity: 0;
    animation: ${h} 1s forwards;
    animation-delay: 1s;
  }
`;t.default=({name:e,pinyin:t,hex:r,RGB:i,CMYK:n,figure:a})=>{const{isMobile:l}=Object(c.b)(),{poetry:f,fetchPoetry:h}=Object(c.d)(e),d=Object(m.a)(i);return o.a.createElement(u,{className:l?"mobile":"",style:{color:d}},o.a.createElement("h1",null,e),o.a.createElement(s,{currColor:{hex:r,name:e,pinyin:t,RGB:i,CMYK:n}}),o.a.createElement("h2",null,t),f&&o.a.createElement(g,p({refetch:h,bgColor:`rgba(${i.join(",")},.5)`,fontColor:d},f)),a&&o.a.createElement("img",{className:"figure",src:"figure/"+a,alt:"figure"}))}}}]);