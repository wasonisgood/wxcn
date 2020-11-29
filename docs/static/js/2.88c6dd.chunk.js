(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{57:function(e,t,n){"use strict";t.a=n.p+"static/assets/yinyang.736acd98.svg"},68:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(1),r={};try{!function(e,t){if(new e("q=%2B").get("q")!==t||new e({q:t}).get("q")!==t||new e([["q",t]]).get("q")!==t||"q=%0A"!==new e("q=\n").toString()||"q=+%26"!==new e({q:" &"}).toString()||"q=%25zx"!==new e({q:"%zx"}).toString())throw e;r.URLSearchParams=e}(URLSearchParams,"+")}catch(e){!function(e,t,n){var a=e.create,o=e.defineProperty,i=/[!'\(\)~]|%20|%00/g,c=/%(?![0-9a-fA-F]{2})/g,s=/\+/g,l={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},h={append:function(e,t){p(this._ungap,e,t)},delete:function(e){delete this._ungap[e]},get:function(e){return this.has(e)?this._ungap[e][0]:null},getAll:function(e){return this.has(e)?this._ungap[e].slice(0):[]},has:function(e){return e in this._ungap},set:function(e,n){this._ungap[e]=[t(n)]},forEach:function(e,n){var a=this;for(var o in a._ungap)a._ungap[o].forEach(i,o);function i(i){e.call(n,i,t(o),a)}},toJSON:function(){return{}},toString:function(){var e=[];for(var t in this._ungap)for(var n=d(t),a=0,o=this._ungap[t];a<o.length;a++)e.push(n+"="+d(o[a]));return e.join("&")}};for(var f in h)o(u.prototype,f,{configurable:!0,writable:!0,value:h[f]});function u(e){var t=a(null);switch(o(this,"_ungap",{value:t}),!0){case!e:break;case"string"==typeof e:"?"===e.charAt(0)&&(e=e.slice(1));for(var i=e.split("&"),r=0,c=i.length;r<c;r++){var s=(l=i[r]).indexOf("=");-1<s?p(t,m(l.slice(0,s)),m(l.slice(s+1))):l.length&&p(t,m(l),"")}break;case n(e):for(r=0,c=e.length;r<c;r++){var l;p(t,(l=e[r])[0],l[1])}break;case"forEach"in e:e.forEach(g,t);break;default:for(var h in e)p(t,h,e[h])}}function g(e,t){p(this,t,e)}function p(e,t,a){var o=n(a)?a.join(","):a;t in e?e[t].push(o):e[t]=[o]}function m(e){return decodeURIComponent(e.replace(c,"%25").replace(s," "))}function d(e){return encodeURIComponent(e).replace(i,b)}function b(e){return l[e]}r.URLSearchParams=u}(Object,String,Array.isArray)}!function(e){var t=!1;try{t=!!Symbol.iterator}catch(e){}function n(e,n){var a=[];return e.forEach(n,a),t?a[Symbol.iterator]():{next:function(){var e=a.shift();return{done:void 0===e,value:e}}}}"forEach"in e||(e.forEach=function(e,t){var n=this,a=Object.create(null);this.toString().replace(/=[\s\S]*?(?:&|$)/g,"=").split("=").forEach((function(o){o.length&&!(o in a)&&(a[o]=n.getAll(o)).forEach((function(a){e.call(t,a,o,n)}))}))}),"keys"in e||(e.keys=function(){return n(this,(function(e,t){this.push(t)}))}),"values"in e||(e.values=function(){return n(this,(function(e,t){this.push(e)}))}),"entries"in e||(e.entries=function(){return n(this,(function(e,t){this.push([t,e])}))}),t&&!(Symbol.iterator in e)&&(e[Symbol.iterator]=e.entries),"sort"in e||(e.sort=function(){for(var e,t,n,a=this.entries(),o=a.next(),i=o.done,r=[],c=Object.create(null);!i;)t=(n=o.value)[0],r.push(t),t in c||(c[t]=[]),c[t].push(n[1]),i=(o=a.next()).done;for(r.sort(),e=0;e<r.length;e++)this.delete(r[e]);for(e=0;e<r.length;e++)t=r[e],this.append(t,c[t].shift())}),function(t){var n=t.defineProperty,a=t.getOwnPropertyDescriptor,o=function(t){var n=t.append;t.append=e.append,URLSearchParams.call(t,t._usp.search.slice(1)),t.append=n},i=function(e,t){if(!(e instanceof t))throw new TypeError("'searchParams' accessed on an object that does not implement interface "+t.name)},r=function(r){var c,s,l=r.prototype,h=a(l,"searchParams"),f=a(l,"href"),u=a(l,"search");!h&&u&&u.set&&(s=function(t){function a(n,a){e.append.call(this,n,a),n=this.toString(),t.set.call(this._usp,n?"?"+n:"")}function o(n){e.delete.call(this,n),n=this.toString(),t.set.call(this._usp,n?"?"+n:"")}function i(n,a){e.set.call(this,n,a),n=this.toString(),t.set.call(this._usp,n?"?"+n:"")}return function(e,t){return e.append=a,e.delete=o,e.set=i,n(e,"_usp",{configurable:!0,writable:!0,value:t})}}(u),c=function(e,t){return n(e,"_searchParams",{configurable:!0,writable:!0,value:s(t,e)}),t},t.defineProperties(l,{href:{get:function(){return f.get.call(this)},set:function(e){var t=this._searchParams;f.set.call(this,e),t&&o(t)}},search:{get:function(){return u.get.call(this)},set:function(e){var t=this._searchParams;u.set.call(this,e),t&&o(t)}},searchParams:{get:function(){return i(this,r),this._searchParams||c(this,new URLSearchParams(this.search.slice(1)))},set:function(e){i(this,r),c(this,e)}}}))};try{r(HTMLAnchorElement),/^function|object$/.test(typeof URL)&&URL.prototype&&r(URL)}catch(e){}}(Object)}(r.URLSearchParams.prototype);var c=r.URLSearchParams,s=n(22),l=n(26),h=n(28),f=n(23);var u=({closePreview:e})=>o.a.createElement(f.a,{handleClick:e,icon:o.a.createElement("svg",{t:"1568731675226",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1724",width:"32",height:"32"},o.a.createElement("path",{d:"M511.818326 0.002914A511.454008 511.454008 0 0 0 0.000121 511.821119 512.061003 512.061003 0 0 0 874.072957 874.075749a512.4252 512.4252 0 0 0 0-724.145064A508.419033 508.419033 0 0 0 511.818326 0.002914z m304.590104 816.408308a430.72367 430.72367 0 1 1 0-609.180207 431.087867 431.087867 0 0 1 0 609.180207z",fill:"#ffffff","p-id":"1725"}),o.a.createElement("path",{d:"M735.799491 328.508621a40.30447 40.30447 0 0 0-12.139901-28.771564 40.790066 40.790066 0 0 0-57.421729 0L511.818326 454.399389 357.277393 299.737057a40.668667 40.668667 0 0 0-57.543128 57.543128l154.662332 154.540934L299.734265 666.483451a40.790066 40.790066 0 0 0 0 57.421729 40.790066 40.790066 0 0 0 57.543128 0L511.818326 569.364247 666.480659 723.90518a40.547268 40.547268 0 0 0 57.421729 0 40.547268 40.547268 0 0 0 0-57.421729L569.361455 511.821119l154.540933-154.540934a39.940273 39.940273 0 0 0 11.897103-28.771564z",fill:"#ffffff","p-id":"1726"}))}),g=n(29),p=n(24),m=n(57);const d=i.c.div`
  position: absolute;
  right: 0.8rem;
  top: 3.6rem;
  width: 32px;

  .onoffswitch-checkbox {
    display: none;
  }
  .onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    height: 18px;
    padding: 0;
    line-height: 30px;
    border: 1px solid #e3e3e3;
    border-radius: 10px;
    background-color: #ffffff;
    transition: background-color 0.3s ease-in;
  }
  .onoffswitch-label:before {
    content: '';
    display: block;
    width: 16px;
    margin: 0;
    background-color: #fff;
    background-image: url(${m.a});
    background-size: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 14px;
    border: 1px solid #e3e3e3;
    border-radius: 50%;
    transition: all 0.3s ease-in 0s;
  }
  .onoffswitch-checkbox:checked + .onoffswitch-label {
    background-color: #49e845;
  }
  .onoffswitch-checkbox:checked + .onoffswitch-label,
  .onoffswitch-checkbox:checked + .onoffswitch-label:before {
    border-color: #49e845;
  }
  .onoffswitch-checkbox:checked + .onoffswitch-label:before {
    right: 0;
    transform: rotate(180deg);
  }
`;function b({checkVal:e=!0,togglePoetry:t}){return o.a.createElement(d,{"data-html2canvas-ignore":!0},o.a.createElement("input",{type:"checkbox",name:"onoffswitch",className:"onoffswitch-checkbox",id:"myonoffswitch",checked:e,onChange:({target:e})=>{t(e.checked)}}),o.a.createElement("label",{className:"onoffswitch-label",htmlFor:"myonoffswitch"}))}const w=i.c.article`
  font-family: SimSun, FangSong, STSong, STZhongsong, LiSu, KaiTi, 'Microsoft YaHei';
  position: absolute;
  left: 50%;
  top: 9rem;
  transform: translateX(-50%);
  min-width: 6rem;
  white-space: nowrap;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({bgRgb:e})=>`rgba(${e.join(",")},.5)`};
  padding: 0.8rem 1.2rem;

  .line {
    font-size: 1.6rem;
    font-weight: bold;
    word-break: keep-all;
    color: inherit;
    font-family: inherit;
    letter-spacing: 2px;
  }
  > h2 {
    font-size: 0.8rem;
    word-break: keep-all;
    margin-top: 1rem;
    color: inherit;
    font-family: inherit;
    .dot {
      color: inherit;
      padding: 0 0.4rem;
      font-weight: bold;
    }
  }
`;function v({bgColor:e,bgRgb:t}){const n=JSON.parse(localStorage.getItem("POETRY")),{author:a,title:i,content:r}=n;return o.a.createElement(w,{contentEditable:!0,style:{color:e},bgRgb:t},r.map(e=>o.a.createElement("p",{key:e,className:"line"},e)),o.a.createElement("h2",null,a,o.a.createElement("span",{className:"dot"},"·"),i))}const y=navigator.userAgent,k=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(y),S=y.toLowerCase().indexOf("micromessenger")>-1||k,E=i.c.section`
  font-variant: normal;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 999;
  background-color: ${({bgColor:e})=>e};
  background-image: url(${g.a});
  background-repeat: repeat;
  width: 100%;
  height: 100%;
  animation: ${p.a} 1s;
  animation-fill-mode: both;
  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  &.starting {
    animation: none;
    transform: initial;
  }
  &.img {
    .downloadImg {
      width: 100%;
      height: 100%;
    }
    hgroup,
    .figure {
      display: none;
    }
  }
  .name {
    position: absolute;
    left: 0;
    bottom: 0;
    margin-left: 1rem;
    margin-bottom: 1rem;
    font-family: 'TChinese', 'SimSun', 'FangSong', 'STSong', 'STZhongsong', 'LiSu', 'KaiTi',
      'Microsoft YaHei';
    z-index: 99;
  }

  .figure {
    position: absolute;
    right: 0;
    z-index: -1;
    max-height: 100%;
  }
`;t.default=({name:e,color:t,rgb:n,figure:i="default.png?width=8rem",closePreview:r})=>{const[f,g]=Object(a.useState)(!0),p=Object(s.a)(t),m=new c(i.split("?")[1]||""),d=m.get("width")||"23rem",w=+(m.get("o")||1),y=m.get("position")||"bottom";return o.a.createElement(E,{id:"PREVIEW",bgColor:t,bgRgb:n},o.a.createElement(b,{checkVal:f,togglePoetry:g}),f&&o.a.createElement(v,{bgColor:p,bgRgb:n}),o.a.createElement("div",{className:"close","data-html2canvas-ignore":!0},o.a.createElement(u,{closePreview:r})),o.a.createElement("h1",{className:"name",style:{color:p}},e),i&&o.a.createElement("img",{className:"figure",style:{width:d,opacity:w,[y]:0},src:"figure/"+i,alt:"figure"}),o.a.createElement(l.a,{name:e,isWebview:S,"data-html2canvas-ignore":!0}),S&&o.a.createElement(h.a,null,"APP中開啟，壁纸生成功能可能受限，建議瀏覽器内打開"))}}}]);