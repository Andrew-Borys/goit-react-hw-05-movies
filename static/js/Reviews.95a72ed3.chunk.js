"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[753],{9122:function(n,t,e){e.r(t),e.d(t,{default:function(){return i}});var r=e(885),a=e(6611),c=e(2791),u=e(6871),o=e(3742),s=e(184),i=function(){var n=(0,c.useState)(null),t=(0,r.Z)(n,2),e=t[0],i=t[1],p=(0,c.useState)(!1),f=(0,r.Z)(p,2),d=f[0],h=f[1],v=(0,u.UO)().movieId,l=(0,u.TH)().pathname,g=(0,u.s0)();return console.log("Revievs:",(0,u.TH)()),(0,c.useEffect)((function(){h(!0),(0,a.Jh)(v).then((function(n){i(n),h(!1)})).catch((function(n){h(!1),g("/")}))}),[l,v,g]),(0,s.jsxs)("div",{children:[d&&o.Loading.dots("Loading..."),!d&&o.Loading.remove(),e&&0!==e.results.length?(0,s.jsx)("ul",{children:e.results.map((function(n){return(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:n.author}),(0,s.jsx)("p",{children:n.content})]},n.id)}))}):(0,s.jsx)("h3",{children:"Oops... There are no reviews yet... \xaf_(\u30c4) _/\xaf"})]})}},6611:function(n,t,e){e.d(t,{Hg:function(){return p},Jh:function(){return v},s_:function(){return d},uP:function(){return f},yO:function(){return h}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),o=e.n(u);o().defaults.baseURL="https://api.themoviedb.org/3/";var s="87ba1964cd0d4ac84a7dd149ae2711fb",i="movie",p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("trending/".concat(i,"/day?api_key=").concat(s,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("search/".concat(i,"?api_key=").concat(s,"&query=").concat(t,"&page=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(i,"/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(i,"/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(i,"/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=Reviews.95a72ed3.chunk.js.map