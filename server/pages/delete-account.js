"use strict";
(() => {
var exports = {};
exports.id = 5336;
exports.ids = [5336];
exports.modules = {

/***/ 59244:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66790);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14613);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53450);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85277);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60088);
/* harmony import */ var _bases_TextBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3828);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_7__]);
_hooks_common__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const DeleteAccountComponent = ()=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .TL)();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).state;
    const { 0: comment , 1: setComment  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const handleClickOnCancelBtn = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        router.push(_constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.MY_PROFILE */ .Yj.MY_PROFILE);
    }, [
        router
    ]);
    const handleDeleteAccount = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_6__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/confirm-delete-account",
            propsState: {
                comment
            }
        }));
    }, [
        dispatch,
        comment
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        lang["profile/delete-account"],
                        " - Flickrz"
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col w-full px-6 pt-[30px] pb-[60px] lg:py-0 lg:px-0 lg:w-[368px] justify-start items-stretch gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "font-bold text-[45px] leading-[45px] dark:text-[#FFFFFFE5] mb-[4px] w-[50%]",
                        children: lang["profile/delete-account"]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-[14px] leading-[18px] text-[#00000080] dark:text-white/50",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: lang["delete-account/note-3"]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: lang["delete-account/note-4"]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-[29px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-[8px] text-black dark:text-white/90",
                                children: lang["profile/comment"]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_TextBox__WEBPACK_IMPORTED_MODULE_9__/* .TextArea */ .K, {
                                placeholder: "Flickrz would like to hear your thoughts.",
                                className: "h-[240px] w-full !bg-white dark:!bg-[#232323] placeholder:text-[16px] placeholder:leading-[22px]",
                                onChange: (event)=>setComment(event.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                        type: "button",
                        className: "btn-lg contained-default mt-[28px] dark:bg-[#232323] dark:text-[#898989] dark:border-[#FFFFFF33]",
                        onClick: handleClickOnCancelBtn,
                        children: lang["button/cancel"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                        type: "button",
                        className: "btn-lg contained-primary",
                        onClick: handleDeleteAccount,
                        children: lang["profile/delete-account"]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteAccountComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ TextArea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const TextArea = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef(({ className , ...props }, ref)=>{
    const renderContent = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
            ref: ref,
            placeholder: props.placeholder,
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "font-input outline-none appearance-none", "bg-transparent rounded-lg py-2 px-[14px]", "input-normal", "placeholder:text-[16px]", "placeholder:font-normal dark:caret-white", "text-black border-black/10 placeholder:text-black/30 focus:border-black", "disabled:border-black/10 disabled:bg-gray-f1", "dark:text-white dark:border-white/10 dark:focus:border-white/70 dark:placeholder:text-white/30"),
            ...props
        });
    }, [
        className,
        props,
        ref
    ]);
    return renderContent();
});
TextArea.displayName = "TextArea";


/***/ }),

/***/ 88309:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_commons_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44969);
/* harmony import */ var _app_components_commons_MainMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75764);
/* harmony import */ var _app_components_DeleteAccount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59244);
/* harmony import */ var _app_components_LoginDecorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79527);
/* harmony import */ var _app_hooks_authentication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49614);
/* harmony import */ var _app_hooks_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85277);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_components_commons_Header__WEBPACK_IMPORTED_MODULE_2__, _app_components_commons_MainMenu__WEBPACK_IMPORTED_MODULE_3__, _app_components_DeleteAccount__WEBPACK_IMPORTED_MODULE_4__, _app_hooks_authentication__WEBPACK_IMPORTED_MODULE_6__, _app_hooks_common__WEBPACK_IMPORTED_MODULE_7__]);
([_app_components_commons_Header__WEBPACK_IMPORTED_MODULE_2__, _app_components_commons_MainMenu__WEBPACK_IMPORTED_MODULE_3__, _app_components_DeleteAccount__WEBPACK_IMPORTED_MODULE_4__, _app_hooks_authentication__WEBPACK_IMPORTED_MODULE_6__, _app_hooks_common__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const DeleteAccount = ()=>{
    const bAuthenticated = (0,_app_hooks_authentication__WEBPACK_IMPORTED_MODULE_6__/* .useAuthentication */ .J)(false);
    const accessibilityState = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const globalContainer = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useGlobalContainer */ .m7)();
    const renderMainMenu = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!accessibilityState.bMenuOn) return null;
        if (!globalContainer) return null;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_commons_MainMenu__WEBPACK_IMPORTED_MODULE_3__/* .MainMenu */ .l, {
            container: globalContainer
        });
    }, [
        accessibilityState.bMenuOn,
        globalContainer
    ]);
    return bAuthenticated ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col justify-between items-stretch min-h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_commons_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col justify-center items-center grow shrink bg-[#F8F8F8] dark:bg-[#0f0f0f]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_DeleteAccount__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                    })
                ]
            })
        ]
    }) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteAccount);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,5277,8733,4969,5764,9527], () => (__webpack_exec__(88309)));
module.exports = __webpack_exports__;

})();