(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3491],{37439:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login2",function(){return n(74140)}])},74140:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return w}});var t=n(85893),i=n(11163),r=n(67294),c=n(37674),u=n(79527),o=n(83053),l=n(22647),a=n(75764),f=function(){return(0,t.jsxs)("div",{className:"w-full h-[100vh] flex justify-center items-center font-sans",children:[(0,t.jsx)("h1",{className:"inline-block mr-[20px] pr-[23px] text-[24px] font-[500] leading-[49px] border-r-[1px] border-[#0000004d]",children:"404"}),(0,t.jsx)("h2",{className:"text-[14px] font-[400] leading-[49px] m-0 p-0",children:"This page could not be found."})]})},d=n(66790),p=n(53450),h=n(85750),x=n(49614),g=n(18612),m=n(34155),w=function(){var e=(0,i.useRouter)(),s=(0,g.CG)((function(e){return e.auth})),n=(0,g.CG)((function(e){return e.accessibility})),w=(0,g.CG)((function(e){return e.accessibility})).sanction,b=(0,g.TL)(),v=(0,g.m7)(),_=(0,x.J)(!1);(0,r.useEffect)((function(){if(_){s.previousRoute?s.previousRoute.includes("/login2")?e.back():s.previousRoute.includes("/register")||s.previousRoute.includes(d.Yj.CHANGE_PASSWORD)?e.replace("/"):e.replace(s.previousRoute):window.history.state.url.includes("/login2")||window.history.state.url.includes("/register")?e.replace("/"):e.back(),b(h._.addToastMessage({title:"Login Successful!",type:"success",id:200}));var n=e.query,t=n.success,i=n.error;t?(localStorage.setItem(c.d.syncSuccess,"successfully"),setTimeout((function(){window.close()}))):i&&(localStorage.setItem(c.d.syncError,String(i)),setTimeout((function(){window.close()})))}}),[_,b,s.previousRoute,e]),(0,r.useEffect)((function(){if(w){var e=localStorage.getItem(c.d.message);b(p.E.addToQueueAtBegin({type:"popup/reasons-ban",propsState:{reasons:e}}))}}),[w,b]);var N=(0,r.useCallback)((function(){return n.bMenuOn&&v?(0,t.jsx)(a.l,{container:v,showLoginBtn:!1}):null}),[n.bMenuOn,v]);return!_&&Number(m.env.NEXT_PUBLIC_ALLOW_PRIVATE_LOGIN)?(0,t.jsxs)("div",{className:"flex flex-col justify-between items-stretch min-h-screen",children:[(0,t.jsx)(l.Z,{className:"lg:hidden",bAlwaysOnTop:!0}),N(),(0,t.jsxs)("div",{className:"flex flex-row justify-between items-stretch grow",children:[(0,t.jsx)(u.Z,{className:"hidden lg:block w-1/2 h-full"}),(0,t.jsx)("div",{className:"flex flex-col justify-center items-center grow shrink bg-[#F8F8F8] dark:bg-[#0f0f0f]",children:(0,t.jsx)(o.Z,{hiddenSocial:!0})})]})]}):(0,t.jsx)(f,{})}}},function(e){e.O(0,[8966,2647,9364,9774,2888,179],(function(){return s=37439,e(e.s=s);var s}));var s=e.O();_N_E=s}]);