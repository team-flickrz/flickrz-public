(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4820],{39013:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[page]/[nftType]/[id]",function(){return t(64021)}])},63186:function(e,l,t){"use strict";t.d(l,{Y:function(){return a}});var i=t(85893),a=(t(67294),function(e){var l=e.className;return(0,i.jsx)("svg",{width:"11",height:"12",viewBox:"0 0 11 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:l,children:(0,i.jsx)("path",{d:"M10.0788 4.58709H3.12126L6.14626 1.57125C6.31887 1.39864 6.41584 1.16453 6.41584 0.920416C6.41584 0.676306 6.31887 0.442196 6.14626 0.269584C5.97365 0.096972 5.73954 0 5.49543 0C5.25132 0 5.0172 0.096972 4.84459 0.269584L0.261263 4.85292C0.177809 4.9401 0.112391 5.0429 0.068763 5.15542C-0.022921 5.37859 -0.022921 5.62892 0.068763 5.85209C0.112391 5.96461 0.177809 6.06741 0.261263 6.15459L4.84459 10.7379C4.92981 10.8238 5.03119 10.892 5.1429 10.9386C5.2546 10.9851 5.37441 11.0091 5.49543 11.0091C5.61644 11.0091 5.73625 10.9851 5.84795 10.9386C5.95966 10.892 6.06104 10.8238 6.14626 10.7379C6.23218 10.6527 6.30037 10.5513 6.34691 10.4396C6.39345 10.3279 6.41741 10.2081 6.41741 10.0871C6.41741 9.96611 6.39345 9.84631 6.34691 9.73451C6.30037 9.62281 6.23218 9.52151 6.14626 9.43626L3.12126 6.42042H10.0788C10.3219 6.42042 10.555 6.32384 10.7269 6.15194C10.8989 5.98003 10.9954 5.74687 10.9954 5.50375C10.9954 5.26064 10.8989 5.02748 10.7269 4.85557C10.555 4.68367 10.3219 4.58709 10.0788 4.58709Z"})})})},64021:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return ee}});var i=t(828),a=t(85893),s=t(94184),n=t.n(s),d=t(11163),r=t(67294),o=t(52835),c=t(39068),u=t(2606),x=t(26042),v=t(69396),m=t(41664),f=t.n(m),p=t(69907),h=t(14613),b=t(53450),j=t(48172),g=t(85750),w=t(18612),N=t(86588),k=t(17827),y=t(93992),C=t(30667),E=t(45700),F=t(60088),Z=t(61103),_=t(17439),T=t(25015),L=t(7833),D=t(71942),G=t(63662),z=function(e){var l,t,s,d,o,c=e.className,u=(0,w.TL)(),m=(0,w.CG)((function(e){return e.character})),z=m.characterDetail,A=m.levelInformation,P=(0,w.CG)((function(e){return e.profile})).myProfile.userProfile,M=(0,w.CG)((function(e){return e.auth})),S=(0,w.CG)((function(e){return e.mint})),B=(0,w.CG)((function(e){return e.history})).offerList,I=z.character,Q=z.nft,q=z.user,O=z.config,K=(0,r.useState)(),Y=K[0],U=K[1],R=(0,r.useState)(0),X=R[0],H=R[1],J=(0,r.useState)(!1),V=J[0],W=J[1],$=(0,i.Z)(k.Z.useLazyGetOneCharacterQuery(),1)[0],ee=(0,i.Z)(N.Z.useLazyGetCharacterSlotStatusQuery(),1)[0],le=(0,i.Z)(y.Z.useLazyGetUserPermissionQuery(),1)[0],te=(0,i.Z)(N.Z.useLazyGetCharacterMintableQuery(),1)[0],ie=(0,r.useContext)(h.Z).state.lang,ae=(0,r.useMemo)((function(){return I&&(null===I||void 0===I?void 0:I.level)<A.maxLevel?A.levels.find((function(e){return e.level===I.level+1})):null}),[I,A]),se=(0,r.useCallback)((function(){u(b.E.addToQueue({type:"popup/confirm-character-purchase",propsState:z}))}),[u,z]),ne=(0,r.useCallback)((function(){u(b.E.addToQueue({type:"popup/make-character-offer",propsState:z}))}),[u,z]),de=(0,r.useCallback)((function(){u(b.E.addToQueue({type:"popup/selling-character",propsState:z}))}),[u,z]),re=(0,r.useCallback)((function(){u(b.E.addToQueue({type:"popup/abort-selling",propsState:{id:null===Q||void 0===Q?void 0:Q.id,nftType:"Character"}}))}),[u,null===Q||void 0===Q?void 0:Q.id]),oe=(0,r.useCallback)((function(){u(b.E.addToQueue({type:"popup/cancel-offer",propsState:(0,v.Z)((0,x.Z)({},Y),{nftId:null===Q||void 0===Q?void 0:Q.id,type:"Character"})}))}),[u,null===Q||void 0===Q?void 0:Q.id,Y]),ce=(0,r.useCallback)((function(){u(b.E.addToQueue({type:"popup/levelup-character",propsState:ae}))}),[u,ae]);(0,r.useEffect)((function(){if(null===P||void 0===P?void 0:P.id){var e=null===B||void 0===B?void 0:B.find((function(e){var l;return(null===(l=e.user)||void 0===l?void 0:l.id)===(null===P||void 0===P?void 0:P.id)}));U(e)}}),[B,null===P||void 0===P?void 0:P.id]),(0,r.useEffect)((function(){if(null===I||void 0===I?void 0:I.finishLevelUpAt){var e=setInterval((function(){var l=Number(null===I||void 0===I?void 0:I.finishLevelUpAt)-Date.now();if(l<0&&l>-1e3||l<0&&"level_up"===(null===Q||void 0===Q?void 0:Q.status))return W(!0),H(0),void clearInterval(e);l>0&&H(l/1e3)}),1e3);return function(){clearInterval(e)}}}),[null===I||void 0===I?void 0:I.finishLevelUpAt,$,null===Q||void 0===Q?void 0:Q.id,u,null===ae||void 0===ae?void 0:ae.level,null===Q||void 0===Q?void 0:Q.status]),(0,r.useEffect)((function(){if(V){var e=setInterval((function(){$({nftId:null===Q||void 0===Q?void 0:Q.id,type:"collection"})}),1e4);return V&&"level_up"!==(null===Q||void 0===Q?void 0:Q.status)&&(W(!1),clearInterval(e),u(g._.addToastMessage({title:"Level up Successful.",description:"Your character ".concat(null===Q||void 0===Q?void 0:Q.id," has been upgraded to level ").concat(null===I||void 0===I?void 0:I.level),type:"success"})),ee(null===Q||void 0===Q?void 0:Q.id)),function(){clearInterval(e)}}}),[u,$,V,null===I||void 0===I?void 0:I.level,null===Q||void 0===Q?void 0:Q.id,null===Q||void 0===Q?void 0:Q.status,ee]),(0,r.useEffect)((function(){le(void 0)}),[le]),(0,r.useEffect)((function(){(null===P||void 0===P?void 0:P.id)&&Number(null===I||void 0===I?void 0:I.id)&&te(Number(null===I||void 0===I?void 0:I.id))}),[null===I||void 0===I?void 0:I.id,te,S.mintable,null===P||void 0===P?void 0:P.id]);var ue=(0,r.useCallback)((function(){var e;return"on_sale"===(null===Q||void 0===Q?void 0:Q.status)?(0,a.jsx)(F.z,{className:"contained-primary w-full mt-8",onClick:re,children:(0,a.jsx)("div",{children:ie["common/abort-selling-on-market"]})}):(0,a.jsxs)(F.z,{className:"contained-primary w-full mt-8 stroke-primary-btn",onClick:de,disabled:"level_up"===(null===Q||void 0===Q?void 0:Q.status)||"claim"===(null===Q||void 0===Q?void 0:Q.status)||"withdraw"===(null===Q||void 0===Q?void 0:Q.status)||!1===(null===(e=M.authPermission)||void 0===e?void 0:e.listCharacter),children:[(0,a.jsx)(L.Z,{}),(0,a.jsx)("div",{className:"ml-2",children:ie["comp/selling-on-market"]})]})}),[re,de,ie,null===Q||void 0===Q?void 0:Q.status,null===(l=M.authPermission)||void 0===l?void 0:l.listCharacter]),xe=(0,r.useCallback)((function(){var e;if("on_sale"!==(null===Q||void 0===Q?void 0:Q.status))return"level_up"===(null===Q||void 0===Q?void 0:Q.status)?(0,a.jsx)(F.z,{className:"contained-primary w-full mt-4 fill-primary-btn cursor-default",children:V?"".concat(ie["comp/processing"]):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(T.Z,{}),(0,a.jsxs)("div",{className:"ml-2",children:[ie["comp/leveling-up"]," -"," ",X?(0,E.J_)(X):"00:00:00"]})]})}):(0,a.jsxs)(F.z,{className:"contained-primary w-full mt-4 fill-primary-btn",onClick:ce,disabled:"claim"===(null===Q||void 0===Q?void 0:Q.status)||"1"===(null===O||void 0===O?void 0:O.tokenTypeEarning)||!ae||"withdraw"===(null===Q||void 0===Q?void 0:Q.status)||!1===(null===(e=M.authPermission)||void 0===e?void 0:e.levelUpCharacter),children:[(0,a.jsx)(T.Z,{}),(0,a.jsx)("div",{className:"ml-2",children:ae?"".concat(ie["rte/level-up"]," - ").concat(Number((null===ae||void 0===ae?void 0:ae.rtCost)||0)," EP & \n            ").concat(Number((null===ae||void 0===ae?void 0:ae.gtCost)||0)," FLKZ"):"".concat(ie["rte/level-up"])})]})}),[null===O||void 0===O?void 0:O.tokenTypeEarning,X,ce,V,ie,ae,null===Q||void 0===Q?void 0:Q.status,null===(t=M.authPermission)||void 0===t?void 0:t.levelUpCharacter]),ve=(0,r.useCallback)((function(){localStorage.removeItem(j.et)}),[]),me=(0,r.useCallback)((function(){var e;if("on_sale"!==(null===Q||void 0===Q?void 0:Q.status))return(0,a.jsx)(f(),{href:"/my-profile/character/".concat(null===Q||void 0===Q?void 0:Q.id,"/mint"),children:(0,a.jsxs)(F.z,{className:"contained-secondary w-full mt-4 fill-secondary-btn",disabled:"claim"===(null===Q||void 0===Q?void 0:Q.status)||"level_up"===(null===Q||void 0===Q?void 0:Q.status)||(null===I||void 0===I?void 0:I.mintCount)===(null===I||void 0===I?void 0:I.totalCount)||"withdraw"===(null===Q||void 0===Q?void 0:Q.status)||!(null===(e=M.authPermission)||void 0===e?void 0:e.minting)||!S.mintable,onClick:ve,children:[(0,a.jsx)(G.Z,{}),(0,a.jsx)("div",{className:"ml-2",children:"".concat(ie["button/mint"]," (").concat(null===I||void 0===I?void 0:I.mintCount,"/").concat(null===I||void 0===I?void 0:I.totalCount,")")})]})})}),[null===I||void 0===I?void 0:I.mintCount,null===I||void 0===I?void 0:I.totalCount,ie,S.mintable,null===Q||void 0===Q?void 0:Q.id,null===Q||void 0===Q?void 0:Q.status,null===(s=M.authPermission)||void 0===s?void 0:s.minting,ve]),fe=(0,r.useCallback)((function(){if("on_sale"!==(null===Q||void 0===Q?void 0:Q.status))return(0,a.jsx)(f(),{href:"/my-profile/character/".concat(null===Q||void 0===Q?void 0:Q.id,"/enhance"),children:(0,a.jsxs)(F.z,{className:"contained-secondary w-full mt-4 fill-secondary-btn",disabled:"claim"===(null===Q||void 0===Q?void 0:Q.status)||"level_up"===(null===Q||void 0===Q?void 0:Q.status)||(null===I||void 0===I?void 0:I.rarity)===p.p.legendary||"withdraw"===(null===Q||void 0===Q?void 0:Q.status),onClick:ve,children:[(0,a.jsx)(D.Z,{}),(0,a.jsx)("div",{className:"ml-2",children:ie["button/enhance"]})]})})}),[null===I||void 0===I?void 0:I.rarity,ie,null===Q||void 0===Q?void 0:Q.id,null===Q||void 0===Q?void 0:Q.status,ve]),pe=(0,r.useCallback)((function(){var e;if("on_sale"===(null===Q||void 0===Q?void 0:Q.status))return(0,a.jsxs)(F.z,{className:"contained-primary w-full mt-8 stroke-primary-btn",onClick:se,disabled:!1===(null===(e=M.authPermission)||void 0===e?void 0:e.purchaseCharacter),children:[(0,a.jsx)(L.Z,{}),(0,a.jsxs)("div",{className:"ml-2",children:[ie["button/buy-with"]," ",(0,E.qQ)(null===Q||void 0===Q?void 0:Q.price)," ",(0,C._M)((null===Q||void 0===Q?void 0:Q.token)||"")]})]})}),[se,ie,null===Q||void 0===Q?void 0:Q.price,null===Q||void 0===Q?void 0:Q.status,null===Q||void 0===Q?void 0:Q.token,null===(d=M.authPermission)||void 0===d?void 0:d.purchaseCharacter]),he=(0,r.useCallback)((function(){var e;if("on_sale"===(null===Q||void 0===Q?void 0:Q.status)&&(null===Q||void 0===Q?void 0:Q.availableOffer))return Y?(0,a.jsxs)(F.z,{className:"contained-secondary w-full mt-4 fill-secondary-btn",onClick:oe,disabled:!(null===Q||void 0===Q?void 0:Q.availableOffer),children:[(0,a.jsx)(G.Z,{}),(0,a.jsx)("div",{className:"ml-2",children:ie["button/cancel-offer"]})]}):(0,a.jsxs)(F.z,{className:"contained-secondary w-full mt-4 fill-secondary-btn",onClick:ne,disabled:!1===(null===(e=M.authPermission)||void 0===e?void 0:e.makeCharacterOffer),children:[(0,a.jsx)(G.Z,{}),(0,a.jsx)("div",{className:"ml-2",children:ie["button/make-an-offer"]})]})}),[oe,ne,ie,null===Q||void 0===Q?void 0:Q.availableOffer,null===Q||void 0===Q?void 0:Q.status,null===(o=M.authPermission)||void 0===o?void 0:o.makeCharacterOffer,Y]),be=(0,r.useCallback)((function(){return(null===P||void 0===P?void 0:P.id)&&(null===q||void 0===q?void 0:q.id)===(null===P||void 0===P?void 0:P.id)?(0,a.jsxs)(r.Fragment,{children:[ue(),xe(),me(),fe()]}):(0,a.jsxs)(r.Fragment,{children:[pe(),he()]})}),[ue,pe,fe,xe,me,he,null===q||void 0===q?void 0:q.id,null===P||void 0===P?void 0:P.id]);return(0,a.jsxs)(Z.Z,{className:"!rounded-none md:!rounded-[10px] relative md:px-4 pb-10 h-fit ".concat(c),children:[(0,a.jsx)("div",{className:n()("md:rounded-[10px] w-full h-[337px] lg:h-[522px]","-mt-28 shadow-xl border-slate-300 dark:border-slate-900 lg:mt-0","bg-cover bg-no-repeat bg-center md:rounded-b-none"),style:{backgroundImage:"url(".concat(null===Q||void 0===Q?void 0:Q.imageUrl,")")}}),(0,a.jsxs)("div",{className:"px-[20px] lg:px-[30px] mt-5",children:[(0,a.jsxs)("div",{className:"flex flex-row items-start justify-between mb-5",children:[(0,a.jsxs)("div",{className:"text-h3 leading-[30px] font-semibold dark:text-white",children:["#",null===Q||void 0===Q?void 0:Q.id]}),(0,a.jsxs)("div",{className:"flex flex-row right-0 gap-3 flex-wrap justify-end",children:[(0,a.jsxs)("div",{className:"ml-3 bg-[#EEEEEE] dark:bg-white/10 rounded-full py-1 px-3 font-bold text-black dark:text-white text-h9 h-fit",children:["Lvl ",null===I||void 0===I?void 0:I.level]}),(0,a.jsx)(_.Z,{type:(null===I||void 0===I?void 0:I.rarity)||"",customTextInside:"!text-h9",customClass:"!pl-[15px] !pr-[10px]"}),(null===P||void 0===P?void 0:P.id)&&(null===q||void 0===q?void 0:q.id)===(null===P||void 0===P?void 0:P.id)&&(0,a.jsxs)(a.Fragment,{children:["on_sale"===(null===Q||void 0===Q?void 0:Q.status)&&(0,a.jsxs)("div",{className:"py-1 px-2 flex flex-row items-center rounded-md bg-secondary-1 gap-1",children:[(0,a.jsx)("div",{className:"text-white text-h9 font-semibold",children:"".concat((0,E.qQ)(null===Q||void 0===Q?void 0:Q.price)," ").concat((0,C._M)(null===Q||void 0===Q?void 0:Q.token))}),(0,a.jsx)("div",{className:"w-4 h-4",children:(0,C.YX)(null===Q||void 0===Q?void 0:Q.token)})]}),"claim"===(null===Q||void 0===Q?void 0:Q.status)&&(0,a.jsx)("div",{className:"text-caption-3 py-1 px-2 bg-secondary-2 rounded-md ml-1 text-white",children:ie["comp/in-claim-request"]})]})]})]}),be()]})]})},A=t(5115),P=t(43202),M=t(68069),S=t(68387),B=function(e){var l=e.className,t=(0,w.CG)((function(e){return e.character})).characterDetail,i=t.character,s=t.config,n=(0,r.useContext)(h.Z).state.lang,d=[{category:n["sb/hat"]||"",itemType:"0",slotKey:"unlock_hat_slot",backgroundColor:"bg-[#F6EAEB] dark:bg-[#F6EAEB]",textColor:"#FF383E"},{category:n["sb/glasses"]||"",itemType:"1",slotKey:"unlock_glass_slot",backgroundColor:"bg-[#EEEBF4] dark:bg-[#BAAADC]",textColor:"#9F72FF"},{category:n["sb/medicine"]||"",itemType:"2",slotKey:"unlock_medicine_slot",backgroundColor:"bg-[#F5F0E2] dark:bg-[#EADFC3]",textColor:"#FFB800"},{category:n["sb/ring"]||"",itemType:"3",slotKey:"unlock_ring_slot",backgroundColor:"bg-[#E9F3F0] dark:bg-[#ADD7C8]",textColor:"#25D395"}];return(0,a.jsx)(Z.Z,{className:"pt-5 pb-10 px-6 h-fit !rounded-none md:!rounded-2xl ".concat(l),children:(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsx)("div",{className:"text-[18px] font-semibold text-black dark:text-white/90",children:n["rte/stats"]}),(0,a.jsxs)("div",{className:"w-full flex flex-col items-center gap-3",children:[(0,a.jsxs)("div",{className:"w-full flex flex-row justify-between border dark:border-white/30 rounded-[10px] py-3 pl-5 pr-2",children:[(0,a.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsxs)("div",{className:"w-[35px] h-[32px] relative",children:[(0,a.jsx)(M.Z,{className:"fill-[#FF383E]"}),(0,a.jsx)("div",{className:"text-white font-black left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] absolute",children:"M"})]}),(0,a.jsxs)("div",{className:"px-3 text-h7 md:text-[20px] font-bold",children:[(0,a.jsx)("span",{className:"text-[#FF383E]",children:null===i||void 0===i?void 0:i.memory}),(0,a.jsx)("span",{className:"text-black dark:text-white/90",children:" Memory"})]})]}),(0,a.jsxs)("div",{className:"pt-2 flex flex-col md:flex-row text-black/70 dark:text-white/70 text-h10 md:text-h9",children:[(0,a.jsxs)("div",{children:[n["rte/average-earning-rate"],"\xa0 \xa0"]}),(0,a.jsxs)("span",{className:"font-bold text-[#FF383E] text-[16px] mt-1 md:mt-0",children:[(0,A.GK)(null===s||void 0===s?void 0:s.averageEarning)," ",(0,C._M)(null===s||void 0===s?void 0:s.tokenTypeEarning)]})]})]}),(0,a.jsx)(P.Z,{item:d[0]})]}),(0,a.jsxs)("div",{className:"w-full flex flex-row justify-between border dark:border-white/30 rounded-[10px] py-3 pl-5 pr-2",children:[(0,a.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsxs)("div",{className:"w-[35px] h-[32px] relative",children:[(0,a.jsx)(M.Z,{className:"fill-[#9F72FF]"}),(0,a.jsx)("div",{className:"text-white font-black left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] absolute",children:"F"})]}),(0,a.jsxs)("div",{className:"px-3 text-h7 md:text-[20px] font-bold",children:[(0,a.jsx)("span",{className:"text-[#9F72FF]",children:null===i||void 0===i?void 0:i.focus}),(0,a.jsx)("span",{className:"text-black dark:text-white/90",children:" Focus"})]})]}),(0,a.jsxs)("div",{className:"pt-2 flex flex-col md:flex-row text-black/70 dark:text-white/70 text-h10 md:text-h9",children:[n["rte/reading-time-required"],"\xa0 \xa0",(0,a.jsx)("span",{className:"font-bold text-[#9F72FF] text-[16px]",children:(0,E.E1)((0,A.GK)(null===s||void 0===s?void 0:s.readingTimeRequired))})]})]}),(0,a.jsx)(P.Z,{item:d[1]})]}),(0,a.jsxs)("div",{className:"w-full flex flex-row justify-between border dark:border-white/30 rounded-[10px] py-3 pl-5 pr-2",children:[(0,a.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsxs)("div",{className:"w-[35px] h-[32px] relative",children:[(0,a.jsx)(M.Z,{className:"fill-[#FFB800]"}),(0,a.jsx)("div",{className:"text-white font-black left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] absolute",children:"E"})]}),(0,a.jsxs)("div",{className:"px-3 text-h7 md:text-[20px] font-bold",children:[(0,a.jsx)("span",{className:"text-[#FFB800]",children:null===i||void 0===i?void 0:i.endurance}),(0,a.jsxs)("span",{className:"text-black dark:text-white/90",children:[" ","Endurance"]})]})]}),(0,a.jsxs)("div",{className:"pt-2 flex flex-col md:flex-row text-black/70 dark:text-white/70 text-h10 md:text-h9",children:[n["rte/stamina-decay-rate"],"\xa0 \xa0",(0,a.jsxs)("span",{className:"font-bold text-[#FFB800] text-[16px]",children:[(0,A.lJ)((0,A.GK)(null===s||void 0===s?void 0:s.staminaDecayRate)),"%"]})]})]}),(0,a.jsx)(P.Z,{item:d[2]})]}),(0,a.jsxs)("div",{className:"w-full flex flex-row justify-between border dark:border-white/30 rounded-[10px] py-3 pl-5 pr-2",children:[(0,a.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsxs)("div",{className:"w-[35px] h-[32px] relative",children:[(0,a.jsx)(M.Z,{className:"fill-[#25D395]"}),(0,a.jsx)("div",{className:"text-white font-black left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] absolute",children:"L"})]}),(0,a.jsxs)("div",{className:"px-3 text-h7 md:text-[20px] font-bold",children:[(0,a.jsx)("span",{className:"text-[#25D395]",children:null===i||void 0===i?void 0:i.luck}),(0,a.jsx)("span",{className:"text-black dark:text-white/90",children:" Luck"})]})]}),(0,a.jsxs)("div",{className:"pt-2 flex flex-col md:flex-row text-black/70 dark:text-white/70 text-h10 md:text-h9",children:[n["rte/gift-box-drop-chance"],"\xa0 \xa0",(0,a.jsxs)("span",{className:"font-bold text-[#25D395] text-[16px]",children:[(0,A.lJ)((0,A.GK)(null===s||void 0===s?void 0:s.giftBoxDropChance)),"%"]})]})]}),(0,a.jsx)(P.Z,{item:d[3]})]})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center justify-between w-full px-4 py-5 text-h9 text-black font-bold bg-[#000000]/10 dark:bg-[#ffffff]/5 rounded-[10px]",children:[(0,a.jsx)("div",{className:"dark:text-white/90",children:n["rte/total-earning"]}),(0,a.jsxs)("div",{className:"flex flex-row items-center gap-2 text-[20px] dark:text-[#E9FF1A]",children:["".concat(null===i||void 0===i?void 0:i.totalRTEarning),(0,a.jsx)("div",{className:"w-5 h-5",children:(0,a.jsx)(S.s,{})})]})]})]})})},I=t(18864),Q=t(44181),q=t(44600),O=t(9561),K=t(83076),Y=t(63186),U=t(57636),R=t(66790),X=t(41722),H=t(17527),J=t(67998),V=t(6483),W=t(61821),$=t(44523),ee=function(){var e=(0,w.TL)(),l=(0,d.useRouter)(),t=l.query,s=t.id,x=t.nftType,v=t.page,m=(0,i.Z)(k.Z.useLazyGetOneCharacterQuery(),2),f=m[0],p=m[1],b=(0,i.Z)(k.Z.useLazyGetOneEquipmentQuery(),2),g=b[0],N=b[1],y=(0,i.Z)(k.Z.useLazyGetOneBadgeQuery(),2),C=y[0],E=y[1],Z=(0,w.CG)((function(e){return e.nft})).timeStampAction,_=(0,w.CG)((function(e){return e.character})).characterDetail,T=(0,w.CG)((function(e){return e.equipment})).equipmentDetail,L=(0,w.CG)((function(e){return e.badge})).badgeDetail,D=(0,r.useContext)(h.Z).state.lang,G=(0,i.Z)((0,V.c)(1024),1)[0],A=(0,r.useMemo)((function(){return!!p.isError||(!!N.isError||!!E.isError)}),[E.isError,p.isError,N.isError]),P=(0,r.useMemo)((function(){return!!p.isFetching||(!!N.isFetching||!!E.isFetching)}),[E.isFetching,p.isFetching,N.isFetching]),M=(0,r.useCallback)((function(){switch(x){case"character":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(z,{className:"mt-[130px] lg:mt-0 w-full lg:w-[55%] lg:max-w-[560px] md:!px-0"}),(0,a.jsxs)("div",{className:"w-full mt-[5px] lg:mt-0 lg:w-[65%] lg:max-w-[560px] lg:ml-[30px]",children:[(0,a.jsx)(B,{className:"mt-3 lg:mt-0"}),(0,a.jsx)(I.Z,{className:"mt-3",nft:_.nft,user:_.user})]})]});case"badge":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{className:"mt-[130px] lg:mt-0 w-full lg:w-[55%] lg:max-w-[560px] md:!px-0"}),(0,a.jsxs)("div",{className:"w-full mt-[5px] lg:mt-0 lg:w-[65%] lg:max-w-[560px] lg:ml-[30px]",children:[(0,a.jsx)(c.Z,{className:"mt-3 lg:mt-0"}),(0,a.jsx)(I.Z,{className:"mt-3",nft:L.nft,user:L.user}),"marketplace"===v&&(0,a.jsx)(u.Z,{className:"mt-2"})]})]});case"equipment":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Q.Z,{className:"mt-[130px] lg:mt-0 w-full lg:w-[55%] lg:max-w-[560px] md:!px-0"}),(0,a.jsxs)("div",{className:"w-full mt-[5px] lg:mt-0 lg:w-[65%] lg:max-w-[560px] lg:ml-[30px]",children:[(0,a.jsx)(q.Z,{className:"mt-3 lg:mt-0"}),(0,a.jsx)(I.Z,{className:"mt-3",nft:T.nft,user:T.user}),"marketplace"===v&&(0,a.jsx)(O.Z,{className:"mt-2"})]})]});default:return null}}),[x,_,T,L,v]),S=(0,r.useCallback)((function(){var t=localStorage.getItem(j.m8);t?l.push(t):"/".concat(l.query.page)===R.Yj.MARKETPLACE?l.push(R.Yj.MARKETPLACE):(e($.X5.resetCollectionState()),l.push(R.Yj.MY_COLLECTION))}),[l,e]);(0,r.useEffect)((function(){if(s)switch(x){case"character":f({nftId:s,type:"marketplace"===v?"market_place":"collection"});break;case"badge":C(s);break;case"equipment":g(s)}}),[f,g,C,s,x,Z,v]),(0,r.useEffect)((function(){return function(){switch(x){case"character":e(H.h.setDefaultCharacterDetail());break;case"badge":e(X.w.setDefaultBadgeDetail());break;case"equipment":e(J.f.setDefaultEquipmentDetail())}}}),[e,x]);var ee=(0,r.useCallback)((function(){return P?(0,a.jsx)("div",{className:"flex flex-col flex-grow justify-center items-center mt-6",children:(0,a.jsx)("div",{className:"w-icon-2xl h-icon-2xl animate-spin rounded-full border-4 border-white border-t-4 border-t-red-500"})}):A?(0,a.jsx)(K.Z,{title:"The NFT does not exist"}):(0,a.jsxs)(a.Fragment,{children:[G?(0,a.jsxs)("div",{className:"flex justify-between px-[20px]",children:[(0,a.jsx)("div",{className:"text-[18px] dark:text-white font-[600] leading-[25px] capitalize",children:"My ".concat(x)}),(0,a.jsxs)("div",{className:"flex gap-[5px] cursor-pointer items-center",onClick:S,children:[(0,a.jsx)(W.Z,{className:"h-6 w-6 dark:fill-white"}),(0,a.jsx)(F.z,{className:"text-[14px] dark:text-white !leading-[25px] font-[600] !p-0",children:D["rte/character-list"]})]})]}):(0,a.jsx)("div",{className:n()("rounded-lg border-black/10 border dark:border-[#4E5156] mx-4 xl:mx-0 lg:!mr-[12px]","w-10 h-10 flex items-center justify-center","cursor-pointer","xl:left-[100px]"),onClick:S,children:(0,a.jsx)(Y.Y,{className:"w-4 h-4 fill-black dark:fill-[#B7B9BA]"})}),M()]})}),[S,P,A,M,G,x,D]);return(0,a.jsx)(U.Z,{description:"Market place",bHeaderAlwaysOnTop:!0,children:(0,a.jsx)("div",{className:n()("flex flex-col relative py-5 min-h-[calc(100vh_-_60px)]","lg:flex-row xl:py-[50px] xl:px-[170px] justify-center"),children:(0,a.jsx)("div",{className:"lg:w-[1200px] lg:min-w-[1200px] flex flex-col lg:flex-row",children:ee()})})})}}},function(e){e.O(0,[2647,6725,9275,9774,2888,179],(function(){return l=39013,e(e.s=l);var l}));var l=e.O();_N_E=l}]);