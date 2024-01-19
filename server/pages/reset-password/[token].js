"use strict";
(() => {
var exports = {};
exports.id = 3538;
exports.ids = [3538];
exports.modules = {

/***/ 22772:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14613);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5178);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useValidator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53863);
/* harmony import */ var _services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48728);
/* harmony import */ var _utils_rulesValidation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73038);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60088);
/* harmony import */ var _bases_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36332);
/* harmony import */ var _icons_CloseEyeIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16948);
/* harmony import */ var _icons_EyeIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(81455);
/* harmony import */ var _icons_HalfArrowLeftIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(32410);
/* harmony import */ var _icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52577);
/* harmony import */ var _LoginDecorator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(79527);
/* harmony import */ var _ResetPasswordTokenAnnouncement__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(65772);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_6__]);
_hooks_common__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


















const ResetPassword = (props)=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .TL)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const rfForm = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).state;
    const { rules  } = (0,_utils_rulesValidation__WEBPACK_IMPORTED_MODULE_9__/* .useRules */ .s)();
    const validator = (0,_hooks_useValidator__WEBPACK_IMPORTED_MODULE_7__/* .useValidator */ .n)(rules);
    const [resetPassword, { isError , isSuccess  }] = _services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_8__/* ["default"].useResetPasswordMutation */ .Z.useResetPasswordMutation();
    const { bLoadingResetPassword  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .CG)((state)=>state.auth);
    const [handleCheckToken, { error , isSuccess: tokenValid  }] = _services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_8__/* ["default"].useLazyCheckTokenQuery */ .Z.useLazyCheckTokenQuery();
    const { 0: newPassword , 1: setNewPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: confirmPassword , 1: setConfirmPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});
    const { 0: hidePasswordRule , 1: setHidePasswordRule  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const { 0: showPassword , 1: setShowPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: showConfirmPassword , 1: setShowConfirmPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const handleOnResetPasswordBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        const { token  } = props;
        if (!token || typeof token !== "string") return;
        const e = validator.validate({
            newPassword,
            confirmPassword
        });
        setErrors(e);
        if (!validator.valid) return;
        resetPassword({
            token,
            password: newPassword
        });
    }, [
        confirmPassword,
        newPassword,
        props,
        resetPassword,
        validator
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (isSuccess) {
            router.push("/reset-password/success");
            dispatch(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__/* .authActions.logout */ .Y.logout());
        }
    }, [
        dispatch,
        isSuccess,
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        handleCheckToken({
            token: router.query.token
        });
    }, [
        handleCheckToken,
        router.query
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (isError) {
            router.push("/expired-resetpassword");
        }
    }, [
        isError,
        router
    ]);
    const handleOnPasswordErrorBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        const e = {
            ...errors
        };
        delete e["requireNewPassword"];
        delete e["securityNewPassword"];
        delete e["confirmPasswordNotMatch"];
        setErrors(e);
        setNewPassword("");
    }, [
        errors
    ]);
    const handleOnConfirmPasswordErrorBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        const e = {
            ...errors
        };
        delete e["requireConfirmPassword"];
        delete e["confirmPasswordNotMatch"];
        setErrors(e);
        setConfirmPassword("");
    }, [
        errors
    ]);
    const handleOnChangeNewPassword = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((event)=>{
        handleOnPasswordErrorBtnClicked();
        setNewPassword(event.target.value);
    }, [
        handleOnPasswordErrorBtnClicked
    ]);
    const handleOnChangeConfirmPassword = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((event)=>{
        handleOnConfirmPasswordErrorBtnClicked();
        setConfirmPassword(event.target.value);
    }, [
        handleOnConfirmPasswordErrorBtnClicked
    ]);
    const handleTogglePasswordRule = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        setHidePasswordRule(!hidePasswordRule);
    }, [
        hidePasswordRule
    ]);
    const handleOnPasswordTypeBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        setShowPassword(!showPassword);
    }, [
        showPassword
    ]);
    const handleOnConfirmPasswordTypeBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        setShowConfirmPassword(!showConfirmPassword);
    }, [
        showConfirmPassword
    ]);
    const renderNewPasswordInput = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "text-[14px] leading-5 text-black/70 dark:text-white/70",
                            children: [
                                lang["comp/new-password"],
                                " "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-[#DC413A] mb-5",
                            children: "*"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative mt-1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Input__WEBPACK_IMPORTED_MODULE_11__/* .Input */ .I, {
                            type: showPassword ? "text" : "password",
                            placeholder: "Enter new password",
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("input-md w-full mt-1 placeholder:text-[#171717]/30 pr-10", showPassword ? "font-primary" : "!font-sans", errors.requirePassword || errors.securityNewPassword ? "input-error pr-20" : "input-border"),
                            maxLength: 30,
                            value: newPassword,
                            onChange: handleOnChangeNewPassword
                        }),
                        !showPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: handleOnPasswordTypeBtnClicked,
                            className: "absolute top-1/2 right-3 -translate-y-1/2 w-5 h-5 ml-3 opacity-50",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CloseEyeIcon__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: handleOnPasswordTypeBtnClicked,
                            className: "absolute top-1/2 right-3 -translate-y-1/2 w-5 h-3 ml-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_EyeIcon__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
                        })
                    ]
                }),
                errors.requireNewPassword && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "text-h9 leading-[18px] text-[#D72E33] mt-1 h-[18px]",
                    children: errors.requireNewPassword
                }),
                errors.securityNewPassword && !errors.requireNewPassword && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "text-h9 leading-[18px] text-[#D72E33] mt-1 h-[18px]",
                    children: errors.securityNewPassword
                })
            ]
        });
    }, [
        errors.requireNewPassword,
        errors.requirePassword,
        errors.securityNewPassword,
        handleOnChangeNewPassword,
        handleOnPasswordTypeBtnClicked,
        lang,
        newPassword,
        showPassword, 
    ]);
    const renderConfirmationPasswordInput = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col mt-5",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "text-[14px] leading-5 text-black/70 dark:text-white/70",
                            children: [
                                lang["comp/confirm-new-pass"],
                                " "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-[#DC413A] mb-5",
                            children: "*"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative mt-1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Input__WEBPACK_IMPORTED_MODULE_11__/* .Input */ .I, {
                            type: showConfirmPassword ? "text" : "password",
                            placeholder: "Enter new password",
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("input-md w-full mt-1 placeholder:text-[#171717]/30 pr-10", showConfirmPassword ? "font-primary" : "!font-sans", errors.requireConfirmPassword || errors.confirmPasswordNotMatch ? "input-error pr-20" : "input-border"),
                            maxLength: 30,
                            value: confirmPassword,
                            onChange: handleOnChangeConfirmPassword,
                            onEnter: handleOnResetPasswordBtnClicked
                        }),
                        !showConfirmPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: handleOnConfirmPasswordTypeBtnClicked,
                            className: "absolute top-1/2 right-3 -translate-y-1/2 w-5 h-5 ml-3 opacity-50",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CloseEyeIcon__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: handleOnConfirmPasswordTypeBtnClicked,
                            className: "absolute top-1/2 right-3 -translate-y-1/2 w-5 h-3 ml-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_EyeIcon__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
                        })
                    ]
                }),
                errors.requireConfirmPassword && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "text-h9 leading-[18px] text-[#D72E33] mt-1 h-[18px]",
                    children: errors.requireConfirmPassword
                }),
                errors.confirmPasswordNotMatch && !errors.requireConfirmPassword && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "text-h9 leading-[18px] text-[#D72E33] mt-1 h-[18px]",
                    children: errors.confirmPasswordNotMatch
                })
            ]
        });
    }, [
        confirmPassword,
        errors.confirmPasswordNotMatch,
        errors.requireConfirmPassword,
        handleOnChangeConfirmPassword,
        handleOnConfirmPasswordTypeBtnClicked,
        handleOnResetPasswordBtnClicked,
        lang,
        showConfirmPassword, 
    ]);
    const renderPasswordRules = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col mt-5 bg-[#171717]/[0.07] dark:bg-[#272829] rounded-lg p-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-[14px] leading-5 font-semibold w-full flex flex-rows items-center justify-between", "cursor-pointer"),
                    onClick: handleTogglePasswordRule,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "text-[14px] leading-5 text-black/70 dark:text-white/70 cursor-pointer",
                            children: lang["auth/view-password-rule"]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: "w-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_HalfArrowLeftIcon__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("transition-all duration-500 dark:fill-icon/70", hidePasswordRule ? "rotate-180" : "rotate-[270deg]")
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-[14px] leading-5 text-[#171717]/80 transition-all duration-500 overflow-hidden", hidePasswordRule ? "h-0 pt-0" : "h-25 pt-4"),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "ml-5 pl-1 dark:text-white/70",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "list-disc",
                                children: lang["rule/pass-must-be"]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "list-disc",
                                children: lang["rule/underscore-charecter"]
                            })
                        ]
                    })
                })
            ]
        });
    }, [
        handleTogglePasswordRule,
        hidePasswordRule,
        lang
    ]);
    const renderSubmitButton = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_10__/* .Button */ .z, {
                onClick: handleOnResetPasswordBtnClicked,
                type: "button",
                className: "contained-primary btn-lg w-[368px] font-bold leading-5",
                children: [
                    bLoadingResetPassword === "pending" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-icon-sm h-icon-sm grow-0 shrink-0 mr-4 last:mr-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            className: "fill-icon-dark animate-spin"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: lang["comp/change-pass"]
                    })
                ]
            })
        });
    }, [
        bLoadingResetPassword,
        handleOnResetPasswordBtnClicked,
        lang
    ]);
    const renderInputs = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-[368px]",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-h2 text-main leading-10 font-semibold mb-8 text-center",
                    children: lang["comp/reset-password"]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-5 mb-8",
                    children: [
                        renderNewPasswordInput(),
                        renderConfirmationPasswordInput(),
                        renderPasswordRules()
                    ]
                })
            ]
        });
    }, [
        lang,
        renderConfirmationPasswordInput,
        renderNewPasswordInput,
        renderPasswordRules
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        dispatch(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__/* .authActions.resetLoadingResetPassword */ .Y.resetLoadingResetPassword());
        dispatch(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__/* .authActions.resetPasswordTokenExpired */ .Y.resetPasswordTokenExpired());
    }, [
        dispatch,
        props.token
    ]);
    const renderMain = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ResetPasswordTokenAnnouncement__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {});
        if (tokenValid) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-row items-stretch min-h-screen",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoginDecorator__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    className: "w-1/2 hidden lg:block"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-1 flex-col justify-center items-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        ref: rfForm,
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-[368px] lg:w-full max-w-[100%] flex flex-col justify-center items-center grow shrink bg-white dark:bg-[#0f0f0f]"),
                        children: [
                            renderInputs(),
                            renderSubmitButton()
                        ]
                    })
                })
            ]
        });
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex flex-col flex-grow justify-center items-center h-[100vh] dark:bg-[#0f0f0f]",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-icon-2xl h-icon-2xl animate-spin rounded-full border-4 border-white border-t-4 border-t-red-500"
            })
        });
    }, [
        error,
        renderInputs,
        renderSubmitButton,
        tokenValid
    ]);
    return renderMain();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetPassword);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_ArrowBackIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71807);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14613);







function ResetPasswordTokenAnnouncement() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).state;
    const handleOnLogInBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        router.push("/");
    }, [
        router
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col items-center justify-center w-screen h-screen p-5 dark:bg-[#0f0f0f]",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: lang["comp/verification-failed"]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col justify-center items-center w-[435px] h-[400px] max-w-[100%] rounded-3xl bg-white drop-shadow-[0_4px_40px_rgba(0,0,0,0.1)] py-[42px] px-[20px] sm:px-[60px] mb-[2%] dark:bg-[#272829]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-center mb-6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/svg/tick-failed.svg`,
                                alt: "",
                                width: "120px",
                                height: "120px"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-h4 leading-10 font-semibold text-black dark:text-white text-center mb-2",
                            children: lang["comp/the-pass-reset-longer"]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-base text-black/50 dark:text-white/50 text-center mb-7",
                            children: lang["comp/pls-go-back-retry"]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: handleOnLogInBtnClicked,
                            className: "flex text-secondary-3 font-semibold cursor-pointer",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex mr-[10px] items-center ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ArrowBackIcon__WEBPACK_IMPORTED_MODULE_5__/* .ArrowBackIcon */ .R, {})
                                }),
                                lang["comp/back-toon-page"]
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetPasswordTokenAnnouncement);


/***/ }),

/***/ 32410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HalfArrowLeftIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



function HalfArrowLeftIcon({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
        })
    });
}


/***/ }),

/***/ 73038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ useRules)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14613);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_2__);



const PASSWORD_REGEX = /^[a-zA-Z0-9_]{6,20}$/;
const matchPassword = (value, field, state)=>state[field] === value;
const securityPassword = (password)=>{
    return password.match(PASSWORD_REGEX) === null;
};
const useRules = ()=>{
    const { state: { lang  } ,  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    const rules = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return [
            {
                field: "newPassword",
                type: "requireNewPassword",
                method: (validator__WEBPACK_IMPORTED_MODULE_2___default().isEmpty),
                when: false,
                message: lang["comp/this-field-is-required"] || ""
            },
            {
                field: "newPassword",
                type: "securityNewPassword",
                method: securityPassword,
                when: false,
                message: lang["comp/the-password-does-not-meet"] || ""
            },
            {
                field: "confirmPassword",
                type: "requireConfirmPassword",
                method: (validator__WEBPACK_IMPORTED_MODULE_2___default().isEmpty),
                when: false,
                message: lang["comp/this-field-is-required"] || ""
            },
            {
                field: "confirmPassword",
                type: "confirmPasswordNotMatch",
                method: matchPassword,
                when: true,
                args: [
                    "newPassword"
                ],
                message: lang["comp/password-do-not-match"] || ""
            }, 
        ];
    }, [
        lang
    ]);
    return {
        rules
    };
};


/***/ }),

/***/ 61504:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components_ResetPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22772);
/* harmony import */ var _app_contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14613);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_components_ResetPassword__WEBPACK_IMPORTED_MODULE_4__]);
_app_components_ResetPassword__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ResetPassword = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { token  } = router.query;
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_app_contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).state;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: lang["comp/reset-password"]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_ResetPassword__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    token: token
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetPassword);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,5277,9527,3863,8594,1807], () => (__webpack_exec__(61504)));
module.exports = __webpack_exports__;

})();