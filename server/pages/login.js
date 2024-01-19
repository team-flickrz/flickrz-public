"use strict";
(() => {
var exports = {};
exports.id = 3459;
exports.ids = [3459];
exports.modules = {

/***/ 11303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21082);

const systemApi = _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].injectEndpoints */ .Z.injectEndpoints({
    endpoints: (builder)=>({
            getMainPageAccess: builder.query({
                query: (ref)=>({
                        url: `/system-stats/main-page-access${ref ? `?ref=${ref}` : ""}`
                    })
            }),
            getSettingAccessPage: builder.query({
                query: ()=>({
                        url: "/system-config/access-page"
                    })
            })
        })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (systemApi);


/***/ }),

/***/ 69729:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_classes_Storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37674);
/* harmony import */ var _app_components_LoginDecorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79527);
/* harmony import */ var _app_components_LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83053);
/* harmony import */ var _app_components_commons_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44969);
/* harmony import */ var _app_components_commons_MainMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75764);
/* harmony import */ var _app_components_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52577);
/* harmony import */ var _app_constants_key__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63454);
/* harmony import */ var _app_constants_route__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66790);
/* harmony import */ var _app_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85750);
/* harmony import */ var _app_hooks_authentication__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(49614);
/* harmony import */ var _app_hooks_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85277);
/* harmony import */ var _app_services_query_endpoints_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(11303);
/* harmony import */ var _app_features_modal_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(53450);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_components_LoginForm__WEBPACK_IMPORTED_MODULE_6__, _app_components_commons_Header__WEBPACK_IMPORTED_MODULE_7__, _app_components_commons_MainMenu__WEBPACK_IMPORTED_MODULE_8__, _app_hooks_authentication__WEBPACK_IMPORTED_MODULE_13__, _app_hooks_common__WEBPACK_IMPORTED_MODULE_14__]);
([_app_components_LoginForm__WEBPACK_IMPORTED_MODULE_6__, _app_components_commons_Header__WEBPACK_IMPORTED_MODULE_7__, _app_components_commons_MainMenu__WEBPACK_IMPORTED_MODULE_8__, _app_hooks_authentication__WEBPACK_IMPORTED_MODULE_13__, _app_hooks_common__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const Login = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const authState = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_14__/* .useAppSelector */ .CG)((state)=>state.auth);
    const accessibilityState = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_14__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const { sanction  } = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_14__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const dispatch = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_14__/* .useAppDispatch */ .TL)();
    const [getSettingAccessPage] = _app_services_query_endpoints_system__WEBPACK_IMPORTED_MODULE_15__/* ["default"].useLazyGetSettingAccessPageQuery */ .Z.useLazyGetSettingAccessPageQuery();
    const globalContainer = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_14__/* .useGlobalContainer */ .m7)();
    const bAuthenticated = (0,_app_hooks_authentication__WEBPACK_IMPORTED_MODULE_13__/* .useAuthentication */ .J)(false);
    const { 0: accessPage , 1: setAccessPage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        accessPage: 1,
        imageAccessPageOff: null
    });
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (bAuthenticated) {
            if (authState.previousRoute) {
                if (authState.previousRoute.includes("/login")) {
                    router.back();
                } else if (authState.previousRoute.includes("/register") || authState.previousRoute.includes(_app_constants_route__WEBPACK_IMPORTED_MODULE_11__/* .ROUTER.CHANGE_PASSWORD */ .Yj.CHANGE_PASSWORD) || authState.previousRoute === _app_constants_route__WEBPACK_IMPORTED_MODULE_11__/* .ROUTER.DELETE_ACCOUNT */ .Yj.DELETE_ACCOUNT) {
                    router.replace("/");
                } else {
                    router.replace(authState.previousRoute);
                }
            } else {
                if (!window.history.state.url.includes("/login") && !window.history.state.url.includes("/register")) {
                    router.back();
                } else {
                    router.replace("/");
                }
            }
            dispatch(_app_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_12__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                title: "Login Successful!",
                type: "success",
                id: 200
            }));
            const { success , error  } = router.query;
            if (success) {
                localStorage.setItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_4__/* .LOCAL_STORAGE_KEYS.syncSuccess */ .d.syncSuccess, "successfully");
                setTimeout(()=>{
                    window.close();
                });
            } else if (error) {
                localStorage.setItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_4__/* .LOCAL_STORAGE_KEYS.syncError */ .d.syncError, String(error));
                setTimeout(()=>{
                    window.close();
                });
            }
        }
    }, [
        bAuthenticated,
        dispatch,
        authState.previousRoute,
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        (async ()=>{
            const keyAllowAccessLogin = localStorage.getItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_4__/* .LOCAL_STORAGE_KEYS.keyAllowAccessLogin */ .d.keyAllowAccessLogin);
            if (!keyAllowAccessLogin || JSON.parse(keyAllowAccessLogin) !== _app_constants_key__WEBPACK_IMPORTED_MODULE_10__/* .accessLogin */ .zH) {
                const res = await getSettingAccessPage(undefined);
                if (!res.data) return;
                setAccessPage(res.data.data);
            } else {
                setAccessPage({
                    accessPage: 1,
                    imageAccessPageOff: null
                });
            }
            setLoading(false);
        })();
    }, [
        getSettingAccessPage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (sanction) {
            const message = localStorage.getItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_4__/* .LOCAL_STORAGE_KEYS.message */ .d.message);
            dispatch(_app_features_modal_modal__WEBPACK_IMPORTED_MODULE_16__/* .modalSliceActions.addToQueueAtBegin */ .E.addToQueueAtBegin({
                type: "popup/reasons-ban",
                propsState: {
                    reasons: message
                }
            }));
        }
    }, [
        sanction,
        dispatch
    ]);
    const renderMainMenu = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (!accessibilityState.bMenuOn) return null;
        if (!globalContainer) return null;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_commons_MainMenu__WEBPACK_IMPORTED_MODULE_8__/* .MainMenu */ .l, {
            container: globalContainer,
            showLoginBtn: false
        });
    }, [
        accessibilityState.bMenuOn,
        globalContainer
    ]);
    return !bAuthenticated ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col justify-between items-stretch min-h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_commons_Header__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                className: "lg:hidden",
                bAlwaysOnTop: true
            }),
            renderMainMenu(),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row justify-between items-stretch grow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_LoginDecorator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: "hidden lg:block w-1/2 h-full"
                    }),
                    isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-1 items-center justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-icon-sm h-icon-sm grow-0 shrink-0 mr-4 last:mr-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                className: "fill-icon-dark animate-spin"
                            })
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col justify-center items-center grow shrink bg-[#F8F8F8] dark:bg-[#0f0f0f]",
                        children: Number(accessPage.accessPage) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_LoginForm__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            width: "540px",
                            height: "600px",
                            src: String(accessPage.imageAccessPageOff),
                            alt: ""
                        })
                    })
                ]
            })
        ]
    }) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51541:
/***/ ((module) => {

module.exports = require("@ethersproject/address");

/***/ }),

/***/ 26644:
/***/ ((module) => {

module.exports = require("@ethersproject/constants");

/***/ }),

/***/ 12792:
/***/ ((module) => {

module.exports = require("@ethersproject/contracts");

/***/ }),

/***/ 75184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 34335:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 18054:
/***/ ((module) => {

module.exports = require("@web3-react/core");

/***/ }),

/***/ 76590:
/***/ ((module) => {

module.exports = require("@web3-react/injected-connector");

/***/ }),

/***/ 59003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 68887:
/***/ ((module) => {

module.exports = require("copy-to-clipboard");

/***/ }),

/***/ 71982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 12522:
/***/ ((module) => {

module.exports = require("ethers/lib/utils");

/***/ }),

/***/ 32245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 93431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 93554:
/***/ ((module) => {

module.exports = require("react-number-format");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8780:
/***/ ((module) => {

module.exports = require("tiny-invariant");

/***/ }),

/***/ 71564:
/***/ ((module) => {

module.exports = require("validator");

/***/ }),

/***/ 78519:
/***/ ((module) => {

module.exports = require("web3");

/***/ }),

/***/ 3799:
/***/ ((module) => {

module.exports = require("web3-react-abstract-connector");

/***/ }),

/***/ 22585:
/***/ ((module) => {

module.exports = import("@wagmi/core");;

/***/ }),

/***/ 49766:
/***/ ((module) => {

module.exports = import("bignumber.js");;

/***/ }),

/***/ 48998:
/***/ ((module) => {

module.exports = import("wagmi");;

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,5277,8733,4969,5764,9527,3863,8594,3053], () => (__webpack_exec__(69729)));
module.exports = __webpack_exports__;

})();