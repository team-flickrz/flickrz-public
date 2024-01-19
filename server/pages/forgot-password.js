"use strict";
(() => {
var exports = {};
exports.id = 9742;
exports.ids = [9742];
exports.modules = {

/***/ 1377:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components_bases_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60088);
/* harmony import */ var _app_components_bases_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36332);
/* harmony import */ var _app_hooks_useValidator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53863);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85277);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48728);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5178);
/* harmony import */ var _icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(52577);
/* harmony import */ var _icons_ArrowBackIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71807);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14613);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_9__]);
_hooks_common__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















const validEmail = (value)=>{
    if (value !== "") return validator__WEBPACK_IMPORTED_MODULE_2___default().isEmail(value, {
        ignore_max_length: true
    });
    return true;
};
const rules = [
    {
        field: "email",
        type: "requireEmail",
        method: (validator__WEBPACK_IMPORTED_MODULE_2___default().isEmpty),
        when: false,
        message: "This field is required"
    },
    {
        field: "email",
        type: "validEmail",
        method: validEmail,
        when: true,
        message: "Please enter a valid email address"
    }, 
];
const ForgotPassword = ()=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppDispatch */ .TL)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const validator = (0,_app_hooks_useValidator__WEBPACK_IMPORTED_MODULE_6__/* .useValidator */ .n)(rules);
    const [forgotPassword, forgetPasswordResult] = _services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"].useForgotPasswordMutation */ .Z.useForgotPasswordMutation();
    const authState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppSelector */ .CG)((state)=>state.auth);
    const { bLoadingForgotPassword , forgotPasswordErrors  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppSelector */ .CG)((state)=>state.auth);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z).state;
    // const [email, setEmail] = useState<string>("");
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});
    const { 1: setSentRequest  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const handleOnRetrievePasswordBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        validator.validate({
            email: authState.email?.trim() || ""
        });
        if (!validator.valid) {
            setErrors(validator.errors);
            return;
        }
        forgotPassword({
            email: authState.email?.trim() || ""
        });
    }, [
        authState.email,
        forgotPassword,
        validator
    ]);
    const handleOnEmailErrorBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        const e = {
            ...errors
        };
        delete e["requireEmail"];
        delete e["validEmail"];
        delete e["notRegisteredEmail"];
        setErrors(e);
        // setEmail("");
        dispatch(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_12__/* .authActions.setEmail */ .Y.setEmail(undefined));
    }, [
        dispatch,
        errors
    ]);
    const handleOnChangeEmail = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((event)=>{
        handleOnEmailErrorBtnClicked();
        // setEmail(event.target.value);
        dispatch(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_12__/* .authActions.setEmail */ .Y.setEmail(event.target.value));
        forgetPasswordResult.reset();
    }, [
        dispatch,
        forgetPasswordResult,
        handleOnEmailErrorBtnClicked
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (forgotPasswordErrors && forgotPasswordErrors.message) {
            setErrors({
                notRegisteredEmail: forgotPasswordErrors.message
            });
        }
        if (forgotPasswordErrors && forgotPasswordErrors.conflict || bLoadingForgotPassword === "fulfilled") {
            setSentRequest(true);
        }
        return ()=>{
            setErrors({});
        };
    }, [
        forgotPasswordErrors,
        bLoadingForgotPassword,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (forgetPasswordResult.isSuccess) {
            router.push("/resend-password");
        }
    }, [
        authState.email,
        dispatch,
        forgetPasswordResult.isSuccess,
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        dispatch(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_12__/* .authActions.resetForgotPasswordErrors */ .Y.resetForgotPasswordErrors());
    }, [
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        return ()=>{
            dispatch(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_12__/* .authActions.setDefaultValue */ .Y.setDefaultValue());
        };
    }, [
        dispatch
    ]);
    const getErrorMessage = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (!forgetPasswordResult.isError) return "";
        const error = forgetPasswordResult.error;
        return error.data.message;
    }, [
        forgetPasswordResult.error,
        forgetPasswordResult.isError
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Forgot password"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("w-full px-6 lg:w-[550px] max-w-[100%] h-[480px] rounded-3xl bg-white dark:bg-[#0f0f0f]", "lg:drop-shadow-[0_4px_40px_rgba(0,0,0,0.1)] py-[50px] lg:px-[60px] mb-[2%]"),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "font-bold text-h2 text-main text-left mb-9",
                        children: lang["auth/password-help"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-base leading-5 mb-4 text-left dark:text-gray-6",
                        children: lang["auth/password-help-details"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-5 mb-8",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative mt-1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_bases_Input__WEBPACK_IMPORTED_MODULE_5__/* .Input */ .I, {
                                        placeholder: "Enter email address",
                                        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("input-md mt-1 placeholder:text-[#171717]/30 w-full", errors.requireEmail || errors.validEmail || errors.notRegisteredEmail ? "input-error" : "input-border"),
                                        maxLength: 100,
                                        value: authState.email || "",
                                        onChange: handleOnChangeEmail,
                                        onEnter: handleOnRetrievePasswordBtnClicked
                                    })
                                }),
                                forgetPasswordResult.isError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "text-h9 leading-[18px] text-[#D72E33] pt-1",
                                    children: getErrorMessage()
                                }),
                                errors.requireEmail && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "text-h9 leading-[18px] text-[#D72E33] pt-1",
                                    children: errors.requireEmail
                                }),
                                errors.validEmail && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "text-h9 leading-[18px] text-[#D72E33] pt-1",
                                    children: errors.validEmail
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_bases_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                            onClick: handleOnRetrievePasswordBtnClicked,
                            className: "contained-primary btn-lg w-full font-bold text-white mb-8",
                            children: [
                                bLoadingForgotPassword === "pending" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-icon-sm h-icon-sm grow-0 shrink-0 mr-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        className: "fill-icon animate-spin"
                                    })
                                }),
                                lang["button/submit"]
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                        href: "/login",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "flex flex-row text-h9 leading-5 text-[#00A0F2] cursor-pointer",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex items-center mr-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ArrowBackIcon__WEBPACK_IMPORTED_MODULE_14__/* .ArrowBackIcon */ .R, {})
                                }),
                                lang["button/back-to-login"]
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgotPassword);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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

/***/ 9421:
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
/* harmony import */ var _app_components_ForgotPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var _app_components_LoginDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79527);
/* harmony import */ var _app_components_commons_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44969);
/* harmony import */ var _app_hooks_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85277);
/* harmony import */ var _app_components_commons_MainMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75764);
/* harmony import */ var _app_hooks_authentication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49614);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_services_query_endpoints_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11303);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_components_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52577);
/* harmony import */ var _app_classes_Storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37674);
/* harmony import */ var _app_constants_key__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(63454);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_components_ForgotPassword__WEBPACK_IMPORTED_MODULE_2__, _app_components_commons_Header__WEBPACK_IMPORTED_MODULE_4__, _app_hooks_common__WEBPACK_IMPORTED_MODULE_5__, _app_components_commons_MainMenu__WEBPACK_IMPORTED_MODULE_6__, _app_hooks_authentication__WEBPACK_IMPORTED_MODULE_7__]);
([_app_components_ForgotPassword__WEBPACK_IMPORTED_MODULE_2__, _app_components_commons_Header__WEBPACK_IMPORTED_MODULE_4__, _app_hooks_common__WEBPACK_IMPORTED_MODULE_5__, _app_components_commons_MainMenu__WEBPACK_IMPORTED_MODULE_6__, _app_hooks_authentication__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const ForgotPassword = ()=>{
    const accessibilityState = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const bAuthenticated = (0,_app_hooks_authentication__WEBPACK_IMPORTED_MODULE_7__/* .useAuthentication */ .J)(false);
    const globalContainer = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_5__/* .useGlobalContainer */ .m7)();
    const [getSettingAccessPage] = _app_services_query_endpoints_system__WEBPACK_IMPORTED_MODULE_9__/* ["default"].useLazyGetSettingAccessPageQuery */ .Z.useLazyGetSettingAccessPageQuery();
    const { 0: accessPage , 1: setAccessPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        accessPage: 1,
        imageAccessPageOff: null
    });
    const renderMainMenu = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!accessibilityState.bMenuOn) return null;
        if (!globalContainer) return null;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_commons_MainMenu__WEBPACK_IMPORTED_MODULE_6__/* .MainMenu */ .l, {
            container: globalContainer,
            showLoginBtn: false
        });
    }, [
        accessibilityState.bMenuOn,
        globalContainer
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (bAuthenticated) {
            router.push("/");
        }
    }, [
        bAuthenticated,
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            const keyAllowAccessLogin = localStorage.getItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_12__/* .LOCAL_STORAGE_KEYS.keyAllowAccessLogin */ .d.keyAllowAccessLogin);
            if (!keyAllowAccessLogin || JSON.parse(keyAllowAccessLogin) !== _app_constants_key__WEBPACK_IMPORTED_MODULE_13__/* .accessLogin */ .zH) {
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col justify-between items-stretch min-h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_commons_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "lg:hidden",
                bAlwaysOnTop: true
            }),
            renderMainMenu(),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row justify-between items-stretch grow ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_LoginDecorator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        className: "hidden lg:block w-1/2"
                    }),
                    isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-1 items-center justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-icon-sm h-icon-sm grow-0 shrink-0 mr-4 last:mr-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                className: "fill-icon-dark animate-spin"
                            })
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col justify-center items-center grow shrink bg-white dark:bg-[#0f0f0f]",
                        children: Number(accessPage.accessPage) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_ForgotPassword__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                            width: "540px",
                            height: "600px",
                            src: String(accessPage.imageAccessPageOff),
                            alt: ""
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgotPassword);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,5277,8733,4969,5764,9527,3863,1807], () => (__webpack_exec__(9421)));
module.exports = __webpack_exports__;

})();