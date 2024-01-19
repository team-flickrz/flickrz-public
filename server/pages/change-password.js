"use strict";
(() => {
var exports = {};
exports.id = 5125;
exports.ids = [5125];
exports.modules = {

/***/ 40737:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ ChangePasswordForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _classes_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22314);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66790);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14613);
/* harmony import */ var _features_account_account__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29335);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5178);
/* harmony import */ var _features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85750);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useValidator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(53863);
/* harmony import */ var _services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(48728);
/* harmony import */ var _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(93992);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(60088);
/* harmony import */ var _bases_Input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(36332);
/* harmony import */ var _icons_CloseEyeIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(16948);
/* harmony import */ var _icons_EyeIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(81455);
/* harmony import */ var _icons_HalfArrowLeftIcon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(32410);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_12__]);
_hooks_common__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





















const validEmail = (value)=>{
    if (value !== "") return methods.isEmail(value, {
        ignore_max_length: true
    });
    return true;
};
const PASSWORD_REGEX = /^[a-zA-Z0-9_]{6,20}$/;
const matchPassword = (value, field, state)=>state[field] === value;
const securityPassword = (password)=>{
    return password.match(PASSWORD_REGEX) === null;
};
const rules = [
    {
        field: "currentPassword",
        type: "requireCurrentPassword",
        method: (validator__WEBPACK_IMPORTED_MODULE_5___default().isEmpty),
        when: false,
        message: "This field is required"
    },
    {
        field: "newPassword",
        type: "requireNewPassword",
        method: (validator__WEBPACK_IMPORTED_MODULE_5___default().isEmpty),
        when: false,
        message: "This field is required"
    },
    {
        field: "newPassword",
        type: "securityNewPassword",
        method: securityPassword,
        when: false,
        message: "The password does not meet the requirements"
    },
    {
        field: "confirmPassword",
        type: "requireConfirmPassword",
        method: (validator__WEBPACK_IMPORTED_MODULE_5___default().isEmpty),
        when: false,
        message: "This field is required"
    },
    {
        field: "confirmPassword",
        type: "confirmPasswordNotMatch",
        method: matchPassword,
        when: true,
        args: [
            "newPassword"
        ],
        message: "Passwords do not match"
    }, 
];
const ChangePasswordForm = ()=>{
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).state;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const validator = (0,_hooks_useValidator__WEBPACK_IMPORTED_MODULE_13__/* .useValidator */ .n)(rules);
    const [changePassword, changePasswordResult] = _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_15__/* ["default"].useLazyChangePasswordQuery */ .Z.useLazyChangePasswordQuery();
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_12__/* .useAppDispatch */ .TL)();
    const authState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_12__/* .useAppSelector */ .CG)((state)=>state.auth);
    const { 0: currentPassword , 1: setCurrentPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: newPassword , 1: setNewPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: confirmPassword , 1: setConfirmPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: showPassword , 1: setShowPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: showNewPassword , 1: setShowNewPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: showConfirmPassword , 1: setShowConfirmPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: hidePasswordRule , 1: setHidePasswordRule  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    const [logout] = _services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_14__/* ["default"].useLogoutMutation */ .Z.useLogoutMutation();
    const handleOnCurrentPasswordErrorBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        const e = {
            ...errors
        };
        delete e["requireCurrentPassword"];
        delete e["notMatchWithCurrentPassword"];
        setErrors(e);
        setCurrentPassword("");
    }, [
        errors
    ]);
    const handleOnNewPasswordErrorBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        const e = {
            ...errors
        };
        delete e["requireNewPassword"];
        delete e["securityNewPassword"];
        delete e["sameWithOldPassword"];
        setErrors(e);
        setNewPassword("");
    }, [
        errors
    ]);
    const handleOnConfirmPasswordErrorBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
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
    const handleOnChangeCurrentPassword = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((event)=>{
        handleOnCurrentPasswordErrorBtnClicked();
        setCurrentPassword(event.target.value);
    }, [
        handleOnCurrentPasswordErrorBtnClicked
    ]);
    const handleOnChangeNewPassword = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((event)=>{
        handleOnNewPasswordErrorBtnClicked();
        setNewPassword(event.target.value);
    }, [
        handleOnNewPasswordErrorBtnClicked
    ]);
    const handleOnChangeConfirmPassword = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((event)=>{
        handleOnConfirmPasswordErrorBtnClicked();
        setConfirmPassword(event.target.value);
    }, [
        handleOnConfirmPasswordErrorBtnClicked
    ]);
    const handleChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        validator.validate({
            currentPassword,
            newPassword,
            confirmPassword
        });
        if (!validator.valid) {
            setErrors(validator.errors);
            return;
        }
        changePassword({
            currentPassword,
            newPassword
        });
    }, [
        confirmPassword,
        newPassword,
        validator,
        changePassword,
        currentPassword
    ]);
    const handleOnPasswordTypeBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        setShowPassword(!showPassword);
    }, [
        showPassword
    ]);
    const handleOnNewPasswordTypeBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        setShowNewPassword(!showNewPassword);
    }, [
        showNewPassword
    ]);
    const handleOnConfirmPasswordTypeBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        setShowConfirmPassword(!showConfirmPassword);
    }, [
        showConfirmPassword
    ]);
    const handleTogglePasswordRule = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        setHidePasswordRule(!hidePasswordRule);
    }, [
        hidePasswordRule
    ]);
    const handleUpdateError = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((error)=>{
        const cloneErr = {
            ...errors
        };
        switch(error.data.type){
            case _classes_User__WEBPACK_IMPORTED_MODULE_6__/* .PASSWORD_ERROR.PASSWORD_WRONG */ .Gx.PASSWORD_WRONG:
                cloneErr.notMatchWithCurrentPassword = error.data.message;
                break;
            case _classes_User__WEBPACK_IMPORTED_MODULE_6__/* .PASSWORD_ERROR.SAME_PASSWORD */ .Gx.SAME_PASSWORD:
                cloneErr.sameWithOldPassword = error.data.message;
                break;
            default:
                break;
        }
        setErrors({
            ...cloneErr
        });
    }, [
        errors
    ]);
    const handleLogout = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(async ()=>{
        await logout(undefined);
        dispatch(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_10__/* .authActions.startLogout */ .Y.startLogout());
        dispatch(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_10__/* .authActions.logout */ .Y.logout());
        dispatch(_features_account_account__WEBPACK_IMPORTED_MODULE_9__/* .accountSliceActions.changeAccount */ .w.changeAccount(undefined));
        router.replace(_constants_route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTER.LOGIN */ .Yj.LOGIN);
    }, [
        dispatch,
        logout,
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (changePasswordResult.isSuccess) {
            handleLogout();
            dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_11__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                type: "success",
                title: "Change password successfully."
            }));
        }
    }, [
        dispatch,
        changePasswordResult.isSuccess,
        handleLogout
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (changePasswordResult.isError) {
            const error = changePasswordResult.error;
            handleUpdateError(error);
        }
    }, [
        changePasswordResult.isError
    ]);
    const renderCurrentPasswordInput = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-2 last:mb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "text-[#000000B2] text-[14px] leading-[14px] dark:text-white/70",
                        children: lang["auth/current-password"]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Input__WEBPACK_IMPORTED_MODULE_17__/* .Input */ .I, {
                            name: "currentPassword",
                            type: showPassword ? "text" : "password",
                            placeholder: "Enter password",
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("input-md placeholder:text-black/30 w-full", "w-full pr-10", showPassword ? "font-primary" : "font-primary", errors.requireCurrentPassword || errors.notMatchWithCurrentPassword ? "input-error pr-20" : "input-border"),
                            maxLength: 30,
                            autoComplete: "off",
                            value: currentPassword,
                            onChange: handleOnChangeCurrentPassword,
                            onEnter: handleChangePassword
                        }),
                        !showPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: handleOnPasswordTypeBtnClicked,
                            className: "absolute top-1/2 right-3 -translate-y-1/2 w-5 h-5 ml-3 opacity-50",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CloseEyeIcon__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: handleOnPasswordTypeBtnClicked,
                            className: "absolute top-1/2 right-3 -translate-y-1/2 w-5 h-3 ml-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_EyeIcon__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {})
                        })
                    ]
                }),
                errors.requireCurrentPassword && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "text-h9 leading-[18px] text-[#D72E33] h-[18px] mt-1",
                    children: errors.requireCurrentPassword
                }),
                errors.notMatchWithCurrentPassword && !errors.requireCurrentPassword && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "text-h9 leading-[18px] text-[#D72E33] mb-2 h-[18px] mt-1",
                    children: errors.notMatchWithCurrentPassword
                })
            ]
        });
    }, [
        errors.notMatchWithCurrentPassword,
        errors.requireCurrentPassword,
        handleOnPasswordTypeBtnClicked,
        lang,
        currentPassword,
        showPassword,
        handleChangePassword,
        handleOnChangeCurrentPassword, 
    ]);
    const renderNewPasswordInput = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-2 last:mb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "text-[#000000B2] text-[14px] leading-[14px] dark:text-white/70",
                        children: lang["auth/new-password"]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Input__WEBPACK_IMPORTED_MODULE_17__/* .Input */ .I, {
                            name: "newPassword",
                            type: showNewPassword ? "text" : "password",
                            placeholder: "Enter password",
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("input-md w-full mt-1 placeholder:text-[#171717]/30 pr-10", "w-full pr-10", showNewPassword ? "font-primary" : "font-primary", errors.requireNewPassword || errors.sameWithOldPassword ? "input-error pr-20" : "input-border"),
                            maxLength: 30,
                            autoComplete: "off",
                            value: newPassword,
                            onChange: handleOnChangeNewPassword,
                            onEnter: handleChangePassword
                        }),
                        !showNewPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: handleOnNewPasswordTypeBtnClicked,
                            className: "absolute top-1/2 right-3 -translate-y-1/2 w-5 h-5 ml-3 opacity-50",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CloseEyeIcon__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: handleOnNewPasswordTypeBtnClicked,
                            className: "absolute top-1/2 right-3 -translate-y-1/2 w-5 h-3 ml-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_EyeIcon__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {})
                        })
                    ]
                }),
                errors.requireNewPassword && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "text-[14px] leading-[18px] text-[#D72E33] mt-1 h-[18px]",
                    children: errors.requireNewPassword
                }),
                errors.securityNewPassword && !errors.requireNewPassword && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "text-h9 leading-[18px] text-[#D72E33] mb-2 h-[18px] mt-1",
                    children: errors.securityNewPassword
                }),
                errors.sameWithOldPassword && !errors.requireNewPassword && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "text-h9 leading-[18px] text-[#D72E33] mb-2 h-[18px] mt-1",
                    children: errors.sameWithOldPassword
                })
            ]
        });
    }, [
        handleChangePassword,
        newPassword,
        lang,
        showNewPassword,
        handleOnNewPasswordTypeBtnClicked,
        handleOnChangeNewPassword,
        errors.requireNewPassword,
        errors.securityNewPassword,
        errors.sameWithOldPassword, 
    ]);
    const renderReRenderNewPasswordInput = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-2 last:mb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "text-[#000000B2] text-[14px] leading-[14px] dark:text-white/70",
                        children: lang["auth/re-enter-password"]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Input__WEBPACK_IMPORTED_MODULE_17__/* .Input */ .I, {
                            name: "password",
                            type: showConfirmPassword ? "text" : "password",
                            placeholder: "Enter password",
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("input-md w-full mt-1 placeholder:text-[#171717]/30 pr-10", "w-full pr-10", showConfirmPassword ? "font-primary" : "font-primary", errors.requireConfirmPassword || errors.confirmPasswordNotMatch ? "input-error pr-20" : "input-border"),
                            maxLength: 30,
                            autoComplete: "off",
                            value: confirmPassword,
                            onChange: handleOnChangeConfirmPassword,
                            onEnter: handleChangePassword
                        }),
                        !showConfirmPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: handleOnConfirmPasswordTypeBtnClicked,
                            className: "absolute top-1/2 right-3 -translate-y-1/2 w-5 h-5 ml-3 opacity-50",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CloseEyeIcon__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: handleOnConfirmPasswordTypeBtnClicked,
                            className: "absolute top-1/2 right-3 -translate-y-1/2 w-5 h-3 ml-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_EyeIcon__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {})
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
        handleChangePassword,
        lang,
        showConfirmPassword, 
    ]);
    const renderPasswordRules = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
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
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_HalfArrowLeftIcon__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
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
    const handleClickOnCancelBtn = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        router.push(_constants_route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTER.MY_PROFILE */ .Yj.MY_PROFILE);
    }, [
        router
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        lang["profile/change-password"],
                        " - Flickrz"
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col w-full px-6 pt-[30px] pb-[60px] lg:py-0 lg:px-0 lg:w-[368px] justify-start items-stretch gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "font-bold text-[45px] leading-[45px] dark:text-[#FFFFFFE5] mb-[28px]",
                        children: lang["profile/change-password"]
                    }),
                    renderCurrentPasswordInput(),
                    renderNewPasswordInput(),
                    renderReRenderNewPasswordInput(),
                    renderPasswordRules(),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_16__/* .Button */ .z, {
                        type: "button",
                        className: "btn-lg contained-default mt-[28px] dark:bg-[#232323] dark:text-[#898989] dark:border-[#FFFFFF33]",
                        onClick: handleClickOnCancelBtn,
                        disabled: changePasswordResult.isLoading,
                        children: lang["button/cancel"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_16__/* .Button */ .z, {
                        type: "button",
                        className: "btn-lg contained-primary",
                        onClick: handleChangePassword,
                        disabled: changePasswordResult.isLoading,
                        children: lang["profile/change-password"]
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

/***/ 63280:
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
/* harmony import */ var _app_components_ChangePasswordForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40737);
/* harmony import */ var _app_components_commons_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44969);
/* harmony import */ var _app_components_commons_MainMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75764);
/* harmony import */ var _app_components_LoginDecorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79527);
/* harmony import */ var _app_hooks_authentication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49614);
/* harmony import */ var _app_hooks_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85277);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_components_ChangePasswordForm__WEBPACK_IMPORTED_MODULE_2__, _app_components_commons_Header__WEBPACK_IMPORTED_MODULE_3__, _app_components_commons_MainMenu__WEBPACK_IMPORTED_MODULE_4__, _app_hooks_authentication__WEBPACK_IMPORTED_MODULE_6__, _app_hooks_common__WEBPACK_IMPORTED_MODULE_7__]);
([_app_components_ChangePasswordForm__WEBPACK_IMPORTED_MODULE_2__, _app_components_commons_Header__WEBPACK_IMPORTED_MODULE_3__, _app_components_commons_MainMenu__WEBPACK_IMPORTED_MODULE_4__, _app_hooks_authentication__WEBPACK_IMPORTED_MODULE_6__, _app_hooks_common__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const ChangePassword = ()=>{
    const bAuthenticated = (0,_app_hooks_authentication__WEBPACK_IMPORTED_MODULE_6__/* .useAuthentication */ .J)(false);
    const accessibilityState = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const globalContainer = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useGlobalContainer */ .m7)();
    const renderMainMenu = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!accessibilityState.bMenuOn) return null;
        if (!globalContainer) return null;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_commons_MainMenu__WEBPACK_IMPORTED_MODULE_4__/* .MainMenu */ .l, {
            container: globalContainer
        });
    }, [
        accessibilityState.bMenuOn,
        globalContainer
    ]);
    return bAuthenticated ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col justify-between items-stretch min-h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_commons_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
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
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_ChangePasswordForm__WEBPACK_IMPORTED_MODULE_2__/* .ChangePasswordForm */ .p, {})
                    })
                ]
            })
        ]
    }) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangePassword);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,5277,8733,4969,5764,9527,3863,8594,2314], () => (__webpack_exec__(63280)));
module.exports = __webpack_exports__;

})();