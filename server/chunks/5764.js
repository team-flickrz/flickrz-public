"use strict";
exports.id = 5764;
exports.ids = [5764];
exports.modules = {

/***/ 75764:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ MainMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66790);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14613);
/* harmony import */ var _features_accessibility_accessibilitySlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19010);
/* harmony import */ var _features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99275);
/* harmony import */ var _features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84689);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85277);
/* harmony import */ var _icons_CloseIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22043);
/* harmony import */ var _LoginLogout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20780);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_9__, _hooks_common__WEBPACK_IMPORTED_MODULE_11__, _LoginLogout__WEBPACK_IMPORTED_MODULE_13__]);
([_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_9__, _hooks_common__WEBPACK_IMPORTED_MODULE_11__, _LoginLogout__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const MainMenu = ({ showLoginBtn =true , container  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useAppDispatch */ .TL)();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).state;
    const { linkTreeWhitePaper  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useAppSelector */ .CG)((state)=>state.linkTree);
    const handleOnClicked = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((e)=>{
        e.stopPropagation();
    }, []);
    const handleClickOnTab = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((page, newTab = false)=>{
        if (newTab) {
            window.open(page, "_blank", "noopener,noreferrer");
            return;
        }
        router.push(page);
    }, [
        router
    ]);
    const handleOnReadToEarnRouteClicked = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        const route = "/enjoy-and-earn";
        router.push(route);
    }, [
        router
    ]);
    const handleOnMarketplaceRouteClicked = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        const route = "/marketplace";
        dispatch(_features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_10__/* .sidebarFilterActions.clearAllFilter */ .A.clearAllFilter());
        dispatch(_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_9__/* .marketplaceActions.resetFilter */ .z.resetFilter());
        router.push(route);
    }, [
        dispatch,
        router
    ]);
    const handleOnMyProfileRouteClicked = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        const route = "/my-profile";
        router.push(route);
    }, [
        router
    ]);
    const handleOnCloseBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        dispatch(_features_accessibility_accessibilitySlice__WEBPACK_IMPORTED_MODULE_8__/* .accessibilityActions.toggleMenu */ .dT.toggleMenu());
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_5___default().createPortal(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: window.innerWidth < 960 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("fixed top-0 bottom-0 left-0 overflow-hidden z-[1000] overflow-y-auto overscroll-y-contain", "bg-white dark:bg-[#0f0f0f] p-6 transition-colors", "flex flex-col justify-start items-stretch w-full"),
                    onClick: handleOnClicked,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-[20px] flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[128px] relative h-[35px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/flickrz-logo.png`,
                                        layout: "fill",
                                        alt: "logo"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[18px] h-[18px] grow-0 shrink-0",
                                    onClick: handleOnCloseBtnClicked,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-black/70 dark:text-white/70 text-[18px] leading-[18px] font-[600] flex flex-col gap-[5px] justify-start items-start",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "py-[9px]",
                                    onClick: ()=>handleClickOnTab(_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.ABOUT */ .Yj.ABOUT),
                                    children: lang["common/about"]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "py-[9px]",
                                    onClick: ()=>handleClickOnTab(_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.ENJOY_AND_EARN */ .Yj.ENJOY_AND_EARN),
                                    children: lang["common/rte"]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "py-[9px]",
                                    onClick: handleOnMarketplaceRouteClicked,
                                    children: lang["common/marketplace"]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "py-[9px]",
                                    onClick: handleOnMyProfileRouteClicked,
                                    children: lang["main/my-profile"]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "py-[9px]",
                                    onClick: ()=>handleClickOnTab(_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.HELP */ .Yj.HELP),
                                    children: lang["common/help"]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "py-[9px]",
                                    onClick: ()=>handleClickOnTab(_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.LINK_TREE */ .Yj.LINK_TREE),
                                    children: lang["common/link-tree"]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-row justify-between items-center",
                            children: showLoginBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoginLogout__WEBPACK_IMPORTED_MODULE_13__/* .LoginLogout */ .U, {
                                bOnMainMenu: true
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute top-0 left-0 right-0 h-[200vh] bg-white dark:bg-[#0f0f0f] z-[90]")
                })
            ]
        })
    }), container);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;