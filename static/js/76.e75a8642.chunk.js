"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{29:function(e,r,t){t.d(r,{IQ:function(){return f},Ph:function(){return i},XT:function(){return s},YJ:function(){return o},Jh:function(){return p}});var n=t(861),a=t(757),c=t.n(a),u=t(340).Z.create({baseURL:"https://api.themoviedb.org/3/"}),s=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("trending/all/day?api_key=98fbc34178995378151e9b7ad6da8282");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("search/movie?api_key=98fbc34178995378151e9b7ad6da8282",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("movie/".concat(r,"?api_key=98fbc34178995378151e9b7ad6da8282"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("movie/".concat(r,"/reviews?api_key=98fbc34178995378151e9b7ad6da8282"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("movie/".concat(r,"/credits?api_key=98fbc34178995378151e9b7ad6da8282"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},76:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(861),a=t(439),c=t(757),u=t.n(c),s=t(29),i=t(791),o=t(689),p="Cast_personPhoto__ZGEHt",f="Cast_itemPerson__CpJAx",d=t(184),h=function(){var e=(0,i.useState)(!1),r=(0,a.Z)(e,2),t=r[0],c=r[1],h=(0,i.useState)(null),l=(0,a.Z)(h,2),v=l[0],m=l[1],x=(0,i.useState)([]),b=(0,a.Z)(x,2),k=b[0],w=b[1],_=(0,o.UO)().movieId;return(0,s.IQ)(_),(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),m(null),e.next=5,(0,s.IQ)(_);case 5:r=e.sent,t=r.cast,w(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),m(e.t0.message);case 13:return e.prev=13,c(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[_]),(0,d.jsxs)("div",{children:[v&&(0,d.jsx)("h1",{children:v}),t&&(0,d.jsx)("h2",{children:"Loding..."}),k.length>0&&(0,d.jsx)("ul",{children:k.map((function(e){return(0,d.jsxs)("li",{className:f,children:[(0,d.jsx)("img",{className:p,src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path),alt:e.name}),(0,d.jsx)("p",{children:e.name}),(0,d.jsxs)("p",{children:["Character: ",e.character]})]},e.cast_id)}))})]})}}}]);
//# sourceMappingURL=76.e75a8642.chunk.js.map