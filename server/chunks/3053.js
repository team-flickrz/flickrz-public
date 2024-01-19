"use strict";
exports.id = 3053;
exports.ids = [3053];
exports.modules = {

/***/ 83053:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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
/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37674);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14613);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5178);
/* harmony import */ var _features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85750);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useValidator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(53863);
/* harmony import */ var _services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(48728);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(60088);
/* harmony import */ var _bases_Input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(36332);
/* harmony import */ var _commons_SocialLogin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(85670);
/* harmony import */ var _icons_CloseEyeIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(16948);
/* harmony import */ var _icons_EyeIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(81455);
/* harmony import */ var _icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(52577);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_11__, _commons_SocialLogin__WEBPACK_IMPORTED_MODULE_16__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_11__, _commons_SocialLogin__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const validEmail = (value)=>{
    if (value !== "") return validator__WEBPACK_IMPORTED_MODULE_6___default().isEmail(value, {
        ignore_max_length: true
    });
    return true;
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
];
const LoginForm = (props)=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useAppDispatch */ .TL)();
    const { bLogging , loginError  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useAppSelector */ .CG)((state)=>state.auth);
    const [login, { isError , error  }] = _services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_13__/* ["default"].useLoginMutation */ .Z.useLoginMutation();
    const authState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useAppSelector */ .CG)((state)=>state.auth);
    // const [email, setEmail] = useState<string>("");
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({});
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const refStorage = localStorage.getItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_7__/* .LOCAL_STORAGE_KEYS.ref */ .d.ref);
    const { 0: showPassword , 1: setShowPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).state;
    const validator = (0,_hooks_useValidator__WEBPACK_IMPORTED_MODULE_12__/* .useValidator */ .n)(rules);
    const handleOnLogInBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        validator.validate({
            email: authState.email?.trim() || "",
            password
        });
        if (!validator.valid) {
            setErrors(validator.errors);
            return;
        }
        login({
            email: authState.email?.trim() || "",
            password: password,
            ref: refStorage ? refStorage : ""
        });
    }, [
        authState.email,
        login,
        password,
        validator,
        refStorage
    ]);
    const handleOnEmailErrorBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        const e = {
            ...errors
        };
        delete e["requireEmail"];
        delete e["validEmail"];
        delete e["emailNotMatch"];
        delete e["notRegisteredEmail"];
        setErrors(e);
        dispatch(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_9__/* .authActions.setEmail */ .Y.setEmail(undefined));
    }, [
        dispatch,
        errors
    ]);
    const handleOnPasswordErrorBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        const e = {
            ...errors
        };
        delete e["requirePassword"];
        delete e["passwordNotMatch"];
        setErrors(e);
        setPassword("");
    }, [
        errors
    ]);
    const handleOnChangeEmail = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((event)=>{
        handleOnEmailErrorBtnClicked();
        dispatch(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_9__/* .authActions.setEmail */ .Y.setEmail(event.target.value));
    }, [
        dispatch,
        handleOnEmailErrorBtnClicked
    ]);
    const handleOnChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((event)=>{
        handleOnPasswordErrorBtnClicked();
        setPassword(event.target.value);
    }, [
        handleOnPasswordErrorBtnClicked
    ]);
    const handleOnPasswordTypeBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        setShowPassword(!showPassword);
    }, [
        showPassword
    ]);
    const getStatusFromError = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((error)=>{
        if (!error) return undefined;
        if ("status" in error && typeof error.status === "number") return error.status;
        return undefined;
    }, []);
    const getMsgFromError = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((error)=>{
        if (!error) return undefined;
        const errorMsg = error;
        return errorMsg.data.message[0];
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const status = getStatusFromError(error);
        const errorMsg = getMsgFromError(error);
        if (isError && status && status === 400) {
            dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_10__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                title: errorMsg === "Password wrong!" ? "Incorrect email or password!" : errorMsg || "",
                type: "danger"
            }));
        }
    }, [
        isError,
        dispatch,
        error
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (bLogging == "rejected" && loginError) {
            setErrors({
                usernameNotMatch: loginError.email || "",
                passwordNotMatch: loginError.password || ""
            });
        }
        return ()=>{
            setErrors({});
        };
    }, [
        bLogging,
        loginError
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        return ()=>{
            dispatch(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_9__/* .authActions.setDefaultValue */ .Y.setDefaultValue());
        };
    }, [
        dispatch
    ]);
    const handleSetLocal = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((key, value)=>{
        localStorage.setItem(key, value);
        setTimeout(()=>{
            window.close();
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const { token , error , message  } = router.query;
        if (error && message) {
            localStorage.setItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_7__/* .LOCAL_STORAGE_KEYS.error */ .d.error, JSON.stringify(error));
            localStorage.setItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_7__/* .LOCAL_STORAGE_KEYS.message */ .d.message, JSON.stringify(message));
            setTimeout(()=>{
                window.close();
            });
            return;
        }
        if (token) {
            handleSetLocal(_classes_Storage__WEBPACK_IMPORTED_MODULE_7__/* .LOCAL_STORAGE_KEYS.token */ .d.token, token);
            return;
        }
    }, [
        router.query
    ]);
    const renderEmailInput = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col mb-1 last:mb-0",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-2 last:mb-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "text-h9 leading-5 text-black/70 dark:text-white/70",
                            children: lang["auth/email-address"]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-red-500 mb-5",
                            children: "*"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                        name: "email",
                        placeholder: "Enter email address",
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("input-md placeholder:text-black/30 w-full", "w-full pr-10", errors.requireEmail || errors.validEmail ? "input-error" : "input-border"),
                        value: authState.email || "",
                        maxLength: 100,
                        onChange: handleOnChangeEmail,
                        autoComplete: "off"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "text-[#D72E33] text-h9 h-[18px] mt-1",
                    children: errors.requireEmail || errors.validEmail
                })
            ]
        });
    }, [
        lang,
        errors.requireEmail,
        errors.validEmail,
        authState.email,
        handleOnChangeEmail
    ]);
    const renderPasswordInput = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col mb-4 last:mb-0",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-2 last:mb-0",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "text-h9 leading-5 text-black/70 dark:text-white/70",
                            children: [
                                lang["auth/password"],
                                " "
                            ]
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
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                            name: "password",
                            type: showPassword ? "text" : "password",
                            placeholder: "Enter password",
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("input-md placeholder:text-black/30", "w-full pr-10", showPassword ? "font-primary" : "font-primary", errors.requirePassword || errors.passwordNotMatch ? "input-error pr-20" : "input-border"),
                            value: password,
                            maxLength: 30,
                            onChange: handleOnChangePassword,
                            onEnter: handleOnLogInBtnClicked,
                            autoComplete: "off"
                        }),
                        !showPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: handleOnPasswordTypeBtnClicked,
                            className: "absolute top-1/2 right-3 -translate-y-1/2 w-5 h-5 ml-3 opacity-50",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CloseEyeIcon__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: handleOnPasswordTypeBtnClicked,
                            className: "absolute top-1/2 right-3 -translate-y-1/2 w-5 h-3 ml-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_EyeIcon__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "text-h9 text-[#D72E33] h-[18px] mt-1",
                    children: errors.requirePassword || errors.passwordNotMatch
                })
            ]
        });
    }, [
        errors.passwordNotMatch,
        errors.requirePassword,
        handleOnChangePassword,
        handleOnLogInBtnClicked,
        handleOnPasswordTypeBtnClicked,
        lang,
        password,
        showPassword, 
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        lang["auth/login"],
                        " - FLICKRZ"
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-full px-6 lg:w-login-form lg:px-0", props.className),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: "mb-4 last:mb-0 flex flex-col justify-start items-stretch",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "font-bold text-h2 text-main",
                                children: [
                                    "Flickrz ",
                                    lang["auth/login"]
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-black dark:text-white opacity-60 mb-4",
                                children: lang["auth/please-enter-details"]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    renderEmailInput(),
                                    renderPasswordInput()
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_14__/* .Button */ .z, {
                                    onClick: handleOnLogInBtnClicked,
                                    type: "button",
                                    className: "contained-primary btn-lg w-full font-bold text-white mt-4",
                                    children: [
                                        bLogging === "pending" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-icon-sm h-icon-sm grow-0 shrink-0 mr-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                className: "fill-icon animate-spin"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: lang["button/log-in"]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-black/50 dark:text-white/50 text-h9 lg:text-h8",
                                children: [
                                    lang["auth/dont-have-an-acc"],
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/register",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "ml-2 inline-block cursor-pointer select-none text-secondary-3 text-h9 lg:text-h8",
                                            children: lang["button/sign-up"]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/forgot-password",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "self-start cursor-pointer text-secondary-3 text-h9 lg:text-h8",
                                    children: [
                                        lang["auth/forgot-password"],
                                        " "
                                    ]
                                })
                            })
                        ]
                    }),
                    !props.hiddenSocial && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_SocialLogin__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        title: lang["login/title"]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;