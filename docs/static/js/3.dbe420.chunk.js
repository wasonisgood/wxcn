(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{56:function(e,t,r){"use strict";var n=r(1),a=r(0),o=r.n(a);const l=n.c.div`
  padding: 0;
  .circular-chart {
    display: block;
    max-width: 2.4rem;
    .circle-bg {
      fill: rgba(255, 255, 255, 0.8);
      stroke: #eee;
      stroke-width: 4.2;
    }
    .circle {
      fill: rgba(255, 255, 255, 0.6);
      stroke-width: 3.2;
      stroke-linecap: round;
      transition: all 1s ease-out;
    }
    .percentage {
      font-family: sans-serif;
      font-size: 0.5em;
      text-anchor: middle;
      font-weight: bold;
    }
  }
  &.percent .circular-chart {
    min-width: unset;
    overflow: unset;
    .circle-bg {
      stroke: none;
    }
    .circle {
      stroke-width: 8;
      stroke-linecap: butt;
    }
  }
`;t.a=({progress:e=10,color:t="#333",type:r=""})=>o.a.createElement(l,{className:""+("percent"==r?"percent":""),color:t},o.a.createElement("svg",{viewBox:"0 0 36 36",className:"circular-chart orange"},o.a.createElement("path",{className:"circle-bg",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),o.a.createElement("path",{className:"circle",style:{stroke:t},strokeDasharray:e+", 100",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),"percent"!==r&&o.a.createElement("text",{x:"18",y:"22",style:{fill:t},className:"percentage"},e)))},70:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(1);function l(e){return null!=e&&"object"==typeof e&&1===e.nodeType}function i(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function c(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return i(r.overflowY,t)||i(r.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function s(e,t,r,n,a,o,l,i){return o<e&&l>t||o>e&&l<t?0:o<=e&&i<=r||l>=t&&i>=r?o-e-n:l>t&&i<r||o<e&&i>r?l-t+a:0}var m=function(e,t){var r=window,n=t.scrollMode,a=t.block,o=t.inline,i=t.boundary,m=t.skipOverflowHiddenElements,d="function"==typeof i?i:function(e){return e!==i};if(!l(e))throw new TypeError("Invalid target");for(var u=document.scrollingElement||document.documentElement,f=[],g=e;l(g)&&d(g);){if((g=g.parentNode)===u){f.push(g);break}g===document.body&&c(g)&&!c(document.documentElement)||c(g,m)&&f.push(g)}for(var p=r.visualViewport?r.visualViewport.width:innerWidth,h=r.visualViewport?r.visualViewport.height:innerHeight,b=window.scrollX||pageXOffset,w=window.scrollY||pageYOffset,v=e.getBoundingClientRect(),y=v.height,E=v.width,x=v.top,k=v.right,N=v.bottom,$=v.left,W="start"===a||"nearest"===a?x:"end"===a?N:x+y/2,j="center"===o?$+E/2:"end"===o?k:$,C=[],M=0;M<f.length;M++){var H=f[M],O=H.getBoundingClientRect(),B=O.height,R=O.width,T=O.top,V=O.right,z=O.bottom,D=O.left;if("if-needed"===n&&x>=0&&$>=0&&N<=h&&k<=p&&x>=T&&N<=z&&$>=D&&k<=V)return C;var I=getComputedStyle(H),Y=parseInt(I.borderLeftWidth,10),q=parseInt(I.borderTopWidth,10),L=parseInt(I.borderRightWidth,10),X=parseInt(I.borderBottomWidth,10),G=0,J=0,S="offsetWidth"in H?H.offsetWidth-H.clientWidth-Y-L:0,K="offsetHeight"in H?H.offsetHeight-H.clientHeight-q-X:0;if(u===H)G="start"===a?W:"end"===a?W-h:"nearest"===a?s(w,w+h,h,q,X,w+W,w+W+y,y):W-h/2,J="start"===o?j:"center"===o?j-p/2:"end"===o?j-p:s(b,b+p,p,Y,L,b+j,b+j+E,E),G=Math.max(0,G+w),J=Math.max(0,J+b);else{G="start"===a?W-T-q:"end"===a?W-z+X+K:"nearest"===a?s(T,z,B,q,X+K,W,W+y,y):W-(T+B/2)+K/2,J="start"===o?j-D-Y:"center"===o?j-(D+R/2)+S/2:"end"===o?j-V+L+S:s(D,V,R,Y,L+S,j,j+E,E);var A=H.scrollLeft,F=H.scrollTop;W+=F-(G=Math.max(0,Math.min(F+G,H.scrollHeight-B+K))),j+=A-(J=Math.max(0,Math.min(A+J,H.scrollWidth-R+S)))}C.push({el:H,top:G,left:J})}return C};function d(e){return e===Object(e)&&0!==Object.keys(e).length}var u=function(e,t){var r=!e.ownerDocument.documentElement.contains(e);if(d(t)&&"function"==typeof t.behavior)return t.behavior(r?[]:m(e,t));if(!r){var n=function(e){return!1===e?{block:"end",inline:"nearest"}:d(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach((function(e){var n=e.el,a=e.top,o=e.left;n.scroll&&r?n.scroll({top:a,left:o,behavior:t}):(n.scrollTop=a,n.scrollLeft=o)}))}(m(e,n),n.behavior)}},f=r(22),g=r(56);const p=o.c.div`
  padding: 0;
  width: 1.6rem;
  height: 1.6rem;
  background: transparent;
`;var h=({progress:e=10,color:t="rgba(102, 87, 87, 0.96)"})=>a.a.createElement(p,null,a.a.createElement(g.a,{progress:e,color:t,type:"percent"}));const b=o.c.li`
  color: ${({color:e})=>e};
  border-top: 0.4rem solid;
  display: flex;
  flex-direction: row;
  writing-mode: vertical-lr;
  padding: 0.5rem 0.2rem 0.4rem 0.2rem;
  margin: 0.4rem;
  cursor: pointer;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  transition: all 0.5s;
  align-self: flex-start;
  opacity: 0.8;
  background-color: ${({rgb:e})=>`rgba(${e.join(",")},.3)`};
  &:hover {
    opacity: 0.9;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  }
  &.curr {
    opacity: 1;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
  }
  .line1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0.6rem;
    min-height: 6.4rem;
    .name {
      color: ${({color:e})=>e};
      writing-mode: vertical-lr;
      align-self: flex-end;
      font-size: 0.8rem;
      margin-left: 0.2rem;
      font-weight: 800;
      display: flex;
      justify-content: space-between;
      height: 100%;
      .seq {
        opacity: 0.5;
      }
    }
    .cmyk {
      display: flex;
      justify-content: space-between;
      .circle:not(:last-child) {
        margin-bottom: 0.2rem;
      }
    }
  }
  .line2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: 0.6rem;
    font-weight: bold;
    color: ${({color:e})=>e};
    .hex {
      font-size: 0.6rem;
    }
    .pinyin {
      text-transform: capitalize;
    }
    .rgb {
      display: flex;
      flex-direction: column;
      .line {
        width: 2px;
        height: 6rem;
        margin: 0 1px;
        &.r {
          background-image: linear-gradient(
            180deg,
            ${({color:e})=>e} 0%,
            ${({color:e})=>e} ${({rgb:e})=>e[0]/255*100}%,
            rgba(255, 255, 255, 0.3) ${({rgb:e})=>e[0]/255*100}%,
            rgba(255, 255, 255, 0.3) 100%
          );
        }
        &.g {
          background-image: linear-gradient(
            180deg,
            ${({color:e})=>e} 0%,
            ${({color:e})=>e} ${({rgb:e})=>e[1]/255*100}%,
            rgba(255, 255, 255, 0.3) ${({rgb:e})=>e[1]/255*100}%,
            rgba(255, 255, 255, 0.3) 100%
          );
        }
        &.b {
          background-image: linear-gradient(
            180deg,
            ${({color:e})=>e} 0%,
            ${({color:e})=>e} ${({rgb:e})=>e[2]/255*100}%,
            rgba(255, 255, 255, 0.3) ${({rgb:e})=>e[2]/255*100}%,
            rgba(255, 255, 255, 0.3) 100%
          );
        }
      }
    }
  }
`;t.default=({setCurrColor:e,seq:t=1,isCurr:r,hex:o,name:l,pinyin:i,CMYK:c,RGB:s,intro:m,currColorRGB:d})=>{const[g,p,w]=s,[v,y,E,x]=c,k=Object(n.useRef)(null),N=Object(f.a)(d);return Object(n.useEffect)(()=>{r&&u(k.current,{behavior:"smooth",block:"center",scrollMode:"if-needed"})},[r]),a.a.createElement(b,{ref:k,rgb:s,className:r&&"curr",onClick:e.bind(null,l),color:N,title:m||null,style:{borderTopColor:o}},a.a.createElement("div",{className:"line1"},a.a.createElement("div",{className:"cmyk"},a.a.createElement("i",{className:"circle c"},a.a.createElement(h,{progress:v})),a.a.createElement("i",{className:"circle m"},a.a.createElement(h,{progress:y})),a.a.createElement("i",{className:"circle y"},a.a.createElement(h,{progress:E})),a.a.createElement("i",{className:"circle k"},a.a.createElement(h,{progress:x}))),a.a.createElement("h2",{className:"name"},a.a.createElement("span",{className:"seq"},t),a.a.createElement("span",{className:"txt"},l))),a.a.createElement("div",{className:"line2"},a.a.createElement("p",{className:"hex"},o),a.a.createElement("div",{className:"rgb"},a.a.createElement("i",{className:"line r",percent:g}),a.a.createElement("i",{className:"line g",percent:p}),a.a.createElement("i",{className:"line b",percent:w})),a.a.createElement("p",{className:"pinyin"},i)))}}}]);