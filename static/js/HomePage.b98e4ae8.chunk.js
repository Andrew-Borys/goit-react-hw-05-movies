"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[460],{3741:function(n,e,t){t.d(e,{Z:function(){return v}});var o,i,r,a,c,l=t(501),s=t(6871),p=t(168),d=t(6031),x=d.ZP.ul(o||(o=(0,p.Z)(["\n  display: grid;\n  max-width: calc(100vw - 30px);\n  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n  gap: 30px;\n  margin: 0px auto;\n  padding: 15px 0px 0px;\n  list-style: none;\n  margin-bottom: 20px;\n"]))),u=d.ZP.li(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n  background-color: #bdb9a6;\n  box-shadow: -2px -2px 7px rgb(109, 109, 109);\n  transition: transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1);\n  :hover {\n    transform: scale(1.03);\n  }\n"]))),h=d.ZP.img(r||(r=(0,p.Z)(["\n  display: block;\n  width: 100%;\n  height: 85%;\n  object-fit: cover;\n"]))),f=d.ZP.div(a||(a=(0,p.Z)(["\n  margin-left: auto;\n  margin-left: auto;\n  display: flex;\n  justify-content: center;\n"]))),g=d.ZP.button(c||(c=(0,p.Z)(["\n  margin: auto;\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n\n  &:active {\n    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.62);\n  }\n"]))),m=t(184),b=function(n){var e=n.title,t=n.onClick;return(0,m.jsx)(g,{type:"button",onClick:t,children:e})},v=function(n){var e=n.films,t=n.page,o=n.handleIncrement,i=n.handleDecrement,r=(0,s.TH)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x,{children:e.map((function(n){return(0,m.jsx)(u,{id:n.id,children:(0,m.jsxs)(l.rU,{to:"/"===r.pathname?"movies/".concat(n.id):"".concat(n.id),state:{from:r},children:[(0,m.jsx)(h,{src:n.poster_path?"https://image.tmdb.org/t/p/w500/".concat(n.poster_path):"https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?b=1&k=20&m=1216251206&s=170667a&w=0&h=z0hxu_BaI_tuMjMneE_APbnx_-R2KGPXgDjdwLw5W7o=",alt:n.title||n.name}),(0,m.jsx)("h3",{style:{marginLeft:"15px"},children:n.title||n.name})]})},n.id)}))}),(0,m.jsxs)(f,{children:[t>=2&&(0,m.jsx)(b,{onClick:i,title:"Previous page"}),e.length>=20&&(0,m.jsx)(b,{onClick:o,title:"Next page"})]})]})}},4213:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var o=t(885),i=t(2791),r=t(501),a=t(8870),c=t(3742),l=t(3741),s=t(5667),p=t(184),d=function(){var n,e=(0,i.useState)([]),t=(0,o.Z)(e,2),d=t[0],x=t[1],u=(0,i.useState)(!1),h=(0,o.Z)(u,2),f=h[0],g=h[1],m=(0,r.lr)(""),b=(0,o.Z)(m,2),v=b[0],w=b[1],j=null!==(n=v.get("page"))&&void 0!==n?n:1;return(0,i.useEffect)((function(){g(!0),(0,a.Hg)(j).then((function(n){x(n.results),g(!1)})).catch((function(n){console.log(n),g(!1)}))}),[j]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Trending today"}),f&&c.Loading.dots("Loading..."),!f&&c.Loading.remove(),d&&(0,p.jsx)(l.Z,{films:d,page:Number(j),handleDecrement:function(n){w({page:Number(j)-1}),s.NY.scrollToTop()},handleIncrement:function(n){w({page:Number(j)+1}),s.NY.scrollToTop()}})]})}}}]);
//# sourceMappingURL=HomePage.b98e4ae8.chunk.js.map