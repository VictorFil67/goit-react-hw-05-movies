"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{29:function(r,e,n){n.d(e,{IQ:function(){return f},Ph:function(){return i},XT:function(){return s},YJ:function(){return o},Jh:function(){return p}});var t=n(861),a=n(757),u=n.n(a),c=n(340).Z.create({baseURL:"https://api.themoviedb.org/3/"}),s=function(){var r=(0,t.Z)(u().mark((function r(){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c("trending/all/day?api_key=98fbc34178995378151e9b7ad6da8282");case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,t.Z)(u().mark((function r(e){var n,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c("search/movie?api_key=98fbc34178995378151e9b7ad6da8282",{params:{query:e}});case 2:return n=r.sent,t=n.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),o=function(){var r=(0,t.Z)(u().mark((function r(e){var n,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c("movie/".concat(e,"?api_key=98fbc34178995378151e9b7ad6da8282"));case 2:return n=r.sent,t=n.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(u().mark((function r(e){var n,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c("movie/".concat(e,"/reviews?api_key=98fbc34178995378151e9b7ad6da8282"));case 2:return n=r.sent,t=n.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(u().mark((function r(e){var n,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c("movie/".concat(e,"/credits?api_key=98fbc34178995378151e9b7ad6da8282"));case 2:return n=r.sent,t=n.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},186:function(r,e,n){n.r(e);var t=n(861),a=n(439),u=n(757),c=n.n(u),s=n(29),i=n(791),o=n(689),p=n(184);e.default=function(){var r=(0,i.useState)(!1),e=(0,a.Z)(r,2),n=e[0],u=e[1],f=(0,i.useState)(null),h=(0,a.Z)(f,2),d=h[0],v=h[1],l=(0,i.useState)([]),x=(0,a.Z)(l,2),b=x[0],m=x[1],k=(0,o.UO)().movieId;return(0,s.Jh)(k),(0,i.useEffect)((function(){var r=function(){var r=(0,t.Z)(c().mark((function r(){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,u(!0),v(null),r.next=5,(0,s.Jh)(k);case 5:e=r.sent,n=e.results,m(n),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),v(r.t0.message);case 13:return r.prev=13,u(!1),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[0,10,13,16]])})));return function(){return r.apply(this,arguments)}}();r()}),[k]),(0,p.jsxs)("div",{children:[d&&(0,p.jsx)("h1",{children:d}),n&&(0,p.jsx)("h2",{children:"Loding..."}),b.length>0?(0,p.jsx)("ul",{children:b.map((function(r){return(0,p.jsxs)("li",{children:[(0,p.jsx)("h2",{children:r.author}),(0,p.jsx)("p",{children:r.content})]},r.id)}))}):(0,p.jsx)("h1",{children:" Sorry"})]})}}}]);
//# sourceMappingURL=186.f993540c.chunk.js.map