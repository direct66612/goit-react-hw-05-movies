"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{687:function(t,e,r){r.d(e,{Cm:function(){return h},LP:function(){return i},TW:function(){return f},sQ:function(){return p},z1:function(){return o}});var n=r(861),a=r(757),c=r.n(a),u=r(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="7b8246269bf45559415a2e61915a6972",i=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/all/day?api_key=".concat(s));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?query=".concat(e,"&api_key=").concat(s));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"?api_key=").concat(s));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},186:function(t,e,r){r.r(e);var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(687),i=r(791),o=r(689),p=r(184);e.default=function(){var t=(0,o.UO)().movieId,e=(0,i.useState)([]),r=(0,a.Z)(e,2),c=r[0],f=r[1],h=(0,i.useState)(!1),v=(0,a.Z)(h,2),l=v[0],d=v[1];return(0,i.useEffect)((function(){function e(){return(e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,(0,s.Cm)(t);case 4:r=e.sent,f(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("oops something wrong please try again or refresh page");case 11:return e.prev=11,d(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}t&&function(){e.apply(this,arguments)}()}),[t]),(0,p.jsxs)("div",{children:[l&&(0,p.jsx)("p",{children:"loading..."}),c.length>0?c.map((function(t){var e=t.author,r=t.content,n=t.id;return(0,p.jsx)("ul",{children:(0,p.jsxs)("li",{children:[(0,p.jsxs)("h2",{children:["Author: ",e]}),(0,p.jsx)("p",{children:r})]},n)})})):(0,p.jsx)("p",{children:"We don't have any reviews for this movie."})]})}}}]);
//# sourceMappingURL=186.3e35a49e.chunk.js.map