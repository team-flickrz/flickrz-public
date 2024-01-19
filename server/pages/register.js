"use strict";
(() => {
var exports = {};
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 86216:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ RegisterForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14613);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5178);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useValidator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53863);
/* harmony import */ var _services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48728);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60088);
/* harmony import */ var _bases_Input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36332);
/* harmony import */ var _commons_SocialLogin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85670);
/* harmony import */ var _icons_CloseEyeIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16948);
/* harmony import */ var _icons_EyeIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(81455);
/* harmony import */ var _icons_HalfArrowLeftIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(32410);
/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(37674);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_9__, _commons_SocialLogin__WEBPACK_IMPORTED_MODULE_14__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_9__, _commons_SocialLogin__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const validEmail = (value)=>{
    if (value !== "") return validator__WEBPACK_IMPORTED_MODULE_6___default().isEmail(value, {
        ignore_max_length: true
    });
    return true;
};
// const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#!@$%^&*()]).{8,}$/;
const PASSWORD_REGEX = /^[a-zA-Z0-9_]{6,20}$/;
const matchPassword = (value, field, state)=>state[field] === value;
const securityPassword = (password)=>{
    return password.match(PASSWORD_REGEX) === null;
};
const rules = [
    {
        field: "email",
        type: "requireEmail",
        method: (validator__WEBPACK_IMPORTED_MODULE_6___default().isEmpty),
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
    {
        field: "password",
        type: "requirePassword",
        method: (validator__WEBPACK_IMPORTED_MODULE_6___default().isEmpty),
        when: false,
        message: "This field is required"
    },
    {
        field: "password",
        type: "securityPassword",
        method: securityPassword,
        when: false,
        message: "The password does not meet the requirements"
    },
    {
        field: "confirmPassword",
        type: "requireConfirmPassword",
        method: (validator__WEBPACK_IMPORTED_MODULE_6___default().isEmpty),
        when: false,
        message: "This field is required"
    },
    {
        field: "confirmPassword",
        type: "confirmPasswordNotMatch",
        method: matchPassword,
        when: true,
        args: [
            "password"
        ],
        message: "Passwords do not match"
    }, 
];
const RegisterForm = ()=>{
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).state;
    const validator = (0,_hooks_useValidator__WEBPACK_IMPORTED_MODULE_10__/* .useValidator */ .n)(rules);
    const [register, registerResult] = _services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"].useRegisterMutation */ .Z.useRegisterMutation();
    // const [checkRegisteredToomic] = authToomicApi.useLazyCheckToomicEmailRegisteredQuery();
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppDispatch */ .TL)();
    const authState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppSelector */ .CG)((state)=>state.auth);
    const { bRegistering  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppSelector */ .CG)((state)=>state.register);
    const refStorage = localStorage.getItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_18__/* .LOCAL_STORAGE_KEYS.ref */ .d.ref);
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const { 0: confirmPassword , 1: setConfirmPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const { 0: checked , 1: setChecked  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
        value: false,
        error: false
    });
    const { 0: showPassword , 1: setShowPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: showConfirmPassword , 1: setShowConfirmPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: hidePasswordRule , 1: setHidePasswordRule  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const handleOnEmailErrorBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        const e = {
            ...errors
        };
        delete e["requireEmail"];
        delete e["validEmail"];
        delete e["emailNotMatch"];
        delete e["notRegisteredEmail"];
        setErrors(e);
        dispatch(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .authActions.setEmail */ .Y.setEmail(undefined));
    }, [
        dispatch,
        errors
    ]);
    const handleOnPasswordErrorBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        const e = {
            ...errors
        };
        delete e["requirePassword"];
        delete e["securityPassword"];
        delete e["confirmPasswordNotMatch"];
        setErrors(e);
        setPassword("");
    }, [
        errors
    ]);
    const handleOnConfirmPasswordErrorBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
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
    const handleOnTestCheckBoxClicked = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        setChecked((pre)=>({
                value: !pre.value,
                error: !!pre.value
            }));
    }, []);
    const handleOnChangeEmail = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((event)=>{
        const value = event.target.value;
        if (value.length > 100) return;
        handleOnEmailErrorBtnClicked();
        registerResult.error = undefined;
        dispatch(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .authActions.setEmail */ .Y.setEmail(value));
    }, [
        dispatch,
        handleOnEmailErrorBtnClicked,
        registerResult
    ]);
    const handleOnChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((event)=>{
        handleOnPasswordErrorBtnClicked();
        setPassword(event.target.value);
    }, [
        handleOnPasswordErrorBtnClicked
    ]);
    const handleOnChangeConfirmPassword = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((event)=>{
        handleOnConfirmPasswordErrorBtnClicked();
        setConfirmPassword(event.target.value);
    }, [
        handleOnConfirmPasswordErrorBtnClicked
    ]);
    const handleOnTermsBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        return;
    }, []);
    const handleOnSignUpBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(async ()=>{
        validator.validate({
            email: authState.email?.trim() || "",
            password,
            confirmPassword
        });
        // if (!checked.value) {
        //     setChecked((pre) => {
        //         return {
        //             ...pre,
        //             error: true,
        //         };
        //     });
        // }
        if (!validator.valid) {
            setErrors(validator.errors);
            return;
        }
        // const res = await checkRegisteredToomic({
        //     user_email: authState.email?.trim() || "",
        // });
        // if (res?.data?.result === "OK") {
        // checked.value &&
        register({
            email: authState.email?.trim() || "",
            password: password,
            ref: refStorage ? refStorage : "",
            passwordConfirmation: confirmPassword
        });
    // } else {
    //     dispatch(modalSliceActions.addToQueue({ type: "popup/unregistered-email" }));
    // }
    }, [
        authState.email,
        // checkRegisteredToomic,
        // checked.value,
        confirmPassword,
        // dispatch,
        password,
        register,
        validator,
        refStorage, 
    ]);
    const handleOnPasswordTypeBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        setShowPassword(!showPassword);
    }, [
        showPassword
    ]);
    const handleOnConfirmPasswordTypeBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        setShowConfirmPassword(!showConfirmPassword);
    }, [
        showConfirmPassword
    ]);
    const handleTogglePasswordRule = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        setHidePasswordRule(!hidePasswordRule);
    }, [
        hidePasswordRule
    ]);
    const getMsgFromError = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((error)=>{
        if (!error) return undefined;
        const errorMsg = error;
        return errorMsg.data.message[0];
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (registerResult.isSuccess) {
            next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/");
        }
    }, [
        bRegistering,
        dispatch,
        authState.email,
        registerResult.isSuccess
    ]);
    const renderEmailInput = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-2 last:mb-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "leading-5 text-black/70 dark:text-white/70",
                            children: lang["auth/email-address"]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-red-500 mb-5",
                            children: "*"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
                            name: "email",
                            placeholder: "Enter email address",
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("input-md placeholder:text-black/30 w-full", "w-full pr-10", errors.requireEmail || errors.validEmail ? "input-error" : "input-border"),
                            maxLength: 100,
                            autoComplete: "off",
                            value: authState.email || "",
                            onChange: handleOnChangeEmail
                        }),
                        registerResult.error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "text-h9 leading-[18px] text-[#D72E33] pt-1",
                            children: getMsgFromError(registerResult.error)
                        }),
                        errors.emailNotMatch && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute top-1/2 right-3 -translate-y-1/2 w-5 h-5",
                            onClick: handleOnEmailErrorBtnClicked
                        }),
                        errors.validEmail && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "text-[14px] leading-[18px] text-[#D72E33] pt-1",
                            children: errors.validEmail
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "text-[#D72E33] text-h9",
                    children: errors.requireEmail || errors.emailNotMatch
                })
            ]
        });
    }, [
        authState.email,
        errors.emailNotMatch,
        errors.requireEmail,
        errors.validEmail,
        handleOnChangeEmail,
        handleOnEmailErrorBtnClicked,
        lang,
        registerResult.error, 
    ]);
    const renderPasswordInput = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-2 last:mb-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "leading-5 text-black/70 dark:text-white/70",
                            children: lang["auth/password"]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-red-500 mb-5",
                            children: "*"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
                            name: "password",
                            type: showPassword ? "text" : "password",
                            placeholder: "Enter password",
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("input-md placeholder:text-black/30 w-full", "w-full pr-10", showPassword ? "font-primary" : "font-primary", errors.requirePassword || errors.securityPassword ? "input-error pr-20" : "input-border"),
                            maxLength: 30,
                            autoComplete: "off",
                            value: password,
                            onChange: handleOnChangePassword
                        }),
                        !showPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: handleOnPasswordTypeBtnClicked,
                            className: "absolute top-1/2 right-3 -translate-y-1/2 w-5 h-5 ml-3 opacity-50",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CloseEyeIcon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: handleOnPasswordTypeBtnClicked,
                            className: "absolute top-1/2 right-3 -translate-y-1/2 w-5 h-3 ml-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_EyeIcon__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
                        })
                    ]
                }),
                errors.requirePassword && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "text-h9 leading-[18px] text-[#D72E33] h-[18px] mt-1",
                    children: errors.requirePassword
                }),
                errors.securityPassword && !errors.requirePassword && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "text-h9 leading-[18px] text-[#D72E33] mb-2 h-[18px] mt-1",
                    children: errors.securityPassword
                })
            ]
        });
    }, [
        errors.requirePassword,
        errors.securityPassword,
        handleOnChangePassword,
        handleOnPasswordTypeBtnClicked,
        lang,
        password,
        showPassword, 
    ]);
    const renderConfirmPasswordInput = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-2 last:mb-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "leading-5 text-black/70 dark:text-white/70",
                            children: lang["auth/confirm-password"]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-red-500 mb-5",
                            children: "*"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
                            name: "password",
                            type: showConfirmPassword ? "text" : "password",
                            placeholder: "Enter password",
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("input-md w-full mt-1 placeholder:text-[#171717]/30 pr-10", "w-full pr-10", showConfirmPassword ? "font-primary" : "font-primary", errors.requireConfirmPassword || errors.confirmPasswordNotMatch ? "input-error pr-20" : "input-border"),
                            maxLength: 30,
                            autoComplete: "off",
                            value: confirmPassword,
                            onChange: handleOnChangeConfirmPassword,
                            onEnter: handleOnSignUpBtnClicked
                        }),
                        !showConfirmPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: handleOnConfirmPasswordTypeBtnClicked,
                            className: "absolute top-1/2 right-3 -translate-y-1/2 w-5 h-5 ml-3 opacity-50",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CloseEyeIcon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: handleOnConfirmPasswordTypeBtnClicked,
                            className: "absolute top-1/2 right-3 -translate-y-1/2 w-5 h-3 ml-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_EyeIcon__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
                        })
                    ]
                }),
                errors.requireConfirmPassword && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "text-[14px] leading-[18px] text-[#D72E33] mt-1 h-[18px]",
                    children: errors.requireConfirmPassword
                }),
                errors.confirmPasswordNotMatch && !errors.requireConfirmPassword && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "text-h9 leading-[18px] text-[#D72E33] h-[18px] mt-1",
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
        handleOnSignUpBtnClicked,
        lang,
        showConfirmPassword, 
    ]);
    const renderPasswordRules = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col mt-5 bg-[#171717]/[0.07] dark:bg-[#272829] rounded-lg p-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-[14px] leading-5 font-semibold w-full flex flex-rows items-center justify-start gap-4", "cursor-pointer"),
                    onClick: handleTogglePasswordRule,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "text-[14px] leading-5 text-black/70 dark:text-white/70 cursor-pointer",
                            children: lang["auth/view-password-rule"]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: "w-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_HalfArrowLeftIcon__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        lang["auth/register"],
                        " - FLICKRZ"
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col w-full px-6 lg:px-0 lg:w-[368px] justify-start items-stretch gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "font-bold text-h2 text-main",
                        children: lang["auth/sign-up-for-flickrz"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-black/50 dark:text-white/50",
                        children: lang["auth/please-enter-details"]
                    }),
                    renderEmailInput(),
                    renderPasswordInput(),
                    renderConfirmPasswordInput(),
                    renderPasswordRules(),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "text-[#D72E33] h-[18px] mt-1",
                        children: checked.error && "Please check this box to continue"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_12__/* .Button */ .z, {
                        type: "button",
                        className: "btn-lg contained-primary",
                        onClick: handleOnSignUpBtnClicked,
                        disabled: registerResult.isLoading,
                        children: lang["button/sign-up"]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-black/50 dark:text-[#898989]",
                        children: [
                            lang["auth/already-have-an-account"],
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/login",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "inline-block cursor-pointer select-none text-secondary-3",
                                    children: lang["button/log-in"]
                                })
                            }),
                            " "
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_SocialLogin__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        title: lang["register/title"]
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 96455:
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
/* harmony import */ var _app_components_commons_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44969);
/* harmony import */ var _app_components_commons_MainMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75764);
/* harmony import */ var _app_components_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52577);
/* harmony import */ var _app_components_LoginDecorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79527);
/* harmony import */ var _app_components_RegisterForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86216);
/* harmony import */ var _app_hooks_authentication__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49614);
/* harmony import */ var _app_hooks_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85277);
/* harmony import */ var _app_services_query_endpoints_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11303);
/* harmony import */ var _app_constants_key__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(63454);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_components_commons_Header__WEBPACK_IMPORTED_MODULE_5__, _app_components_commons_MainMenu__WEBPACK_IMPORTED_MODULE_6__, _app_components_RegisterForm__WEBPACK_IMPORTED_MODULE_9__, _app_hooks_authentication__WEBPACK_IMPORTED_MODULE_10__, _app_hooks_common__WEBPACK_IMPORTED_MODULE_11__]);
([_app_components_commons_Header__WEBPACK_IMPORTED_MODULE_5__, _app_components_commons_MainMenu__WEBPACK_IMPORTED_MODULE_6__, _app_components_RegisterForm__WEBPACK_IMPORTED_MODULE_9__, _app_hooks_authentication__WEBPACK_IMPORTED_MODULE_10__, _app_hooks_common__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const RegisterPage = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const bAuthenticated = (0,_app_hooks_authentication__WEBPACK_IMPORTED_MODULE_10__/* .useAuthentication */ .J)(false);
    const globalContainer = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useGlobalContainer */ .m7)();
    const accessibilityState = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const [getSettingAccessPage] = _app_services_query_endpoints_system__WEBPACK_IMPORTED_MODULE_12__/* ["default"].useLazyGetSettingAccessPageQuery */ .Z.useLazyGetSettingAccessPageQuery();
    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const { 0: accessPage , 1: setAccessPage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        accessPage: 1,
        imageAccessPageOff: null
    });
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (bAuthenticated) {
            if (window.history.length <= 2) {
                router.push("/");
            } else {
                router.back();
            }
        }
    }, [
        bAuthenticated,
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        (async ()=>{
            const keyAllowAccessLogin = localStorage.getItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_4__/* .LOCAL_STORAGE_KEYS.keyAllowAccessLogin */ .d.keyAllowAccessLogin);
            if (!keyAllowAccessLogin || JSON.parse(keyAllowAccessLogin) !== _app_constants_key__WEBPACK_IMPORTED_MODULE_13__/* .accessLogin */ .zH) {
                const res = await getSettingAccessPage(undefined);
                if (!res.data) return;
                setAccessPage(res.data.data);
            }
            setLoading(false);
        })();
    }, [
        getSettingAccessPage
    ]);
    const renderMainMenu = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
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
    return !bAuthenticated ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col justify-between items-stretch min-h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_commons_Header__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: "lg:hidden",
                bAlwaysOnTop: true
            }),
            renderMainMenu(),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row justify-between items-stretch grow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_LoginDecorator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        className: "hidden lg:block w-1/2"
                    }),
                    isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-1 items-center justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-icon-sm h-icon-sm grow-0 shrink-0 mr-4 last:mr-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                className: "fill-icon-dark animate-spin"
                            })
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col justify-center items-center grow shrink bg-white dark:bg-[#0f0f0f]",
                        children: Number(accessPage.accessPage) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_RegisterForm__WEBPACK_IMPORTED_MODULE_9__/* .RegisterForm */ .B, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,5277,8733,4969,5764,9527,3863,8594], () => (__webpack_exec__(96455)));
module.exports = __webpack_exports__;

})();