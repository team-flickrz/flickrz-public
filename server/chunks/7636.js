"use strict";
exports.id = 7636;
exports.ids = [7636];
exports.modules = {

/***/ 57636:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DefaultLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66790);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85277);
/* harmony import */ var _commons_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44969);
/* harmony import */ var _commons_MainMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75764);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_7__, _commons_Header__WEBPACK_IMPORTED_MODULE_8__, _commons_MainMenu__WEBPACK_IMPORTED_MODULE_9__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_7__, _commons_Header__WEBPACK_IMPORTED_MODULE_8__, _commons_MainMenu__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const DynamicSidebar = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(3186), __webpack_require__.e(5098), __webpack_require__.e(7124)]).then(__webpack_require__.bind(__webpack_require__, 15098)), {
    loadableGenerated: {
        modules: [
            "..\\app\\components\\layouts\\DefaultLayout.tsx -> " + "../commons/Sidebar"
        ]
    }
});
function DefaultLayout({ title , description , bHeaderAlwaysOnTop , headerNode , children , showSidebar  }) {
    const accessibilityState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const globalContainer = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useGlobalContainer */ .m7)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const renderHeader = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        if (headerNode) return headerNode;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_Header__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            bAlwaysOnTop: bHeaderAlwaysOnTop
        });
    }, [
        bHeaderAlwaysOnTop,
        headerNode
    ]);
    const renderMain = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative w-full", "transition-transform duration-300", "bg-[#eeeeee] dark:bg-[#0f0f0f] transition-colors", (router.pathname === _constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.ENJOY_AND_EARN */ .Yj.ENJOY_AND_EARN || router.pathname === "/[page]/[nftType]/[id]" || router.pathname === "/marketplace/[nftType]/[id]") && "lg:min-w-[1240px] lg:w-full"),
            children: children
        });
    }, [
        children,
        router
    ]);
    const renderMenu = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        if (!accessibilityState.bMenuOn) return null;
        if (!globalContainer) return null;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_MainMenu__WEBPACK_IMPORTED_MODULE_9__/* .MainMenu */ .l, {
            container: globalContainer
        });
    }, [
        accessibilityState.bMenuOn,
        globalContainer
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative mx-auto w-full min-h-screen", "flex flex-col justify-start items-stretch", accessibilityState.theme),
        children: [
            title ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `${title} - Flickrz`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: description
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Flickrz"
                })
            }),
            renderHeader(),
            renderMenu(),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative w-full", "flex justify-start items-stretch", "min-h-contain-header"),
                children: [
                    showSidebar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "block lg:hidden",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSidebar, {
                                type: "mobile"
                            })
                        })
                    }),
                    renderMain()
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;