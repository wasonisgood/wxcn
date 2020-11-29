(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(e,t,r){"use strict";var o=r(1),n=r(0),a=r.n(n);const c=o.c.div`
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
`;t.a=({progress:e=10,color:t="#333",type:r=""})=>a.a.createElement(c,{className:""+("percent"==r?"percent":""),color:t},a.a.createElement("svg",{viewBox:"0 0 36 36",className:"circular-chart orange"},a.a.createElement("path",{className:"circle-bg",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),a.a.createElement("path",{className:"circle",style:{stroke:t},strokeDasharray:e+", 100",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),"percent"!==r&&a.a.createElement("text",{x:"18",y:"22",style:{fill:t},className:"percentage"},e)))},58:function(e,t,r){"use strict";var o=r(59).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},59:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=a(r(0)),n=a(r(60));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?d(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){function t(){var e,r;s(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return y(d(r=u(this,(e=f(t)).call.apply(e,[this].concat(c)))),"onClick",(function(e){var t=r.props,a=t.text,c=t.onCopy,i=t.children,l=t.options,s=o.default.Children.only(i),p=(0,n.default)(a,l);c&&c(a,p),s&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(e)})),r}var r,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),r=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=l(e,["text","onCopy","options","children"]),n=o.default.Children.only(t);return o.default.cloneElement(n,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{onClick:this.onClick}))}}])&&p(r.prototype,a),c&&p(r,c),t}(o.default.PureComponent);t.CopyToClipboard=b,y(b,"defaultProps",{onCopy:void 0,options:void 0})},60:function(e,t,r){"use strict";var o=r(61),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,a,c,i,l,s=!1;t||(t={}),t.debug;try{if(a=o(),c=document.createRange(),i=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){window.clipboardData.clearData();var o=n[t.format]||n.default;window.clipboardData.setData(o,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(l),c.selectNodeContents(l),i.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(o){try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(o){r=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(r,e)}}finally{i&&("function"==typeof i.removeRange?i.removeRange(c):i.removeAllRanges()),l&&document.body.removeChild(l),a()}return s}},61:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],o=0;o<e.rangeCount;o++)r.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},72:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o),a=r(1),c=r(56),i=r(58);const l=a.c.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .icon {
    width: 1.4rem;
  }
  > .hex {
    font-size: 0.6rem;
    padding: 0.3rem;
    background: rgba(51, 51, 51, 0.5);
    border-radius: 0.2rem;
    text-transform: uppercase;
  }
  .copyTip {
    position: absolute;
    left: -3rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.6rem;
    padding: 0.3rem 0.4rem;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 0.2rem;
  }
`;var s=({currColorHex:e})=>{const[t,r]=Object(o.useState)(!1);return n.a.createElement(i.CopyToClipboard,{text:e,onCopy:()=>{r(!0),setTimeout(()=>{r(!1)},1800)}},n.a.createElement(l,{onClick:()=>{}},n.a.createElement("svg",{t:"1568174087144",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7098",width:"36",height:"36"},n.a.createElement("path",{d:"M220.429 838.029c-18.2 0-32.9-14.7-32.9-32.9v-437c0-18.2 14.7-32.9 32.9-32.9h440c18.2 0 32.9 14.7 32.9 32.9v436.9c0 18.2-14.7 32.9-32.9 32.9h-440z m407-65.9v-371.1h-374.1v371.1h374.1z",fill:"#fff","p-id":"7099"}),n.a.createElement("path",{d:"M438.129 254.029c-18.2 0-32.9-14.7-32.9-32.9s14.7-32.9 32.9-32.9h369.6c18.2 0 32.9 14.7 32.9 32.9v363.5c0 18.2-14.7 32.9-32.9 32.9s-32.9-14.7-32.9-32.9v-330.6h-336.7z",fill:"#fff","p-id":"7100"})),n.a.createElement("span",{className:"hex"},e),t?n.a.createElement("span",{className:"copyTip"},"已复制!"):null))};const p=a.c.section`
  color: #333;
  display: flex;
  flex-direction: column;
  margin-right: 0.5rem;
  margin-top: 0.6rem;
  overflow: visible;
  .item {
    border-top: 1px solid rgba(255, 255, 255, 0.6);
    padding: 0.8rem 0 0.4rem 0.2rem;
    position: relative;
    &.cmyk {
      padding-left: 2.4rem;
    }
    &.rgb {
      color: #fff;
      text-align: right;
      &.r {
        color: rgb(255, 0, 0, 0.8);
      }
      &.g {
        color: rgb(0, 255, 0, 0.8);
      }
      &.b {
        color: rgb(0, 0, 255, 0.8);
      }
    }

    &:before {
      content: attr(data-id);
      text-transform: uppercase;
      position: absolute;
      font-size: 0.5rem;
      font-weight: 800;
      color: #fff;
      top: 0.4rem;
      left: 0;
      text-shadow: 0px 0 6px black;
    }
  }
`;t.default=({CMYK:e,RGB:t=[0,0,0],hex:r,...o})=>{const[a,i,l,u]=e,[f,d,m]=t;return n.a.createElement(p,o,n.a.createElement("div",{className:"item cmyk c","data-id":"c"},n.a.createElement(c.a,{progress:a,color:"#0093D3"})),n.a.createElement("div",{className:"item cmyk m","data-id":"m"},n.a.createElement(c.a,{progress:i,color:"#CC006B"})),n.a.createElement("div",{className:"item cmyk y","data-id":"y"},n.a.createElement(c.a,{progress:l,color:"#FFF10C"})),n.a.createElement("div",{className:"item cmyk k","data-id":"k"},n.a.createElement(c.a,{progress:u,color:"#333"})),n.a.createElement("div",{className:"item rgb r","data-id":"r"},f),n.a.createElement("div",{className:"item rgb g","data-id":"g"},d),n.a.createElement("div",{className:"item rgb b","data-id":"b"},m),n.a.createElement("div",{className:"item","data-id":"hex"},n.a.createElement(s,{currColorHex:r})))}}}]);