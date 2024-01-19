"use strict";
exports.id = 9527;
exports.ids = [9527];
exports.modules = {

/***/ 79527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14613);






const LoginDecorator = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).state;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.className, "bg-cover bg-no-repeat bg-center h-screen"),
        style: {
            backgroundImage: `url(${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/bg-login-v2.png)`
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full h-full text-center text-white flex justify-center items-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-[13px] leading-[16px] font-bold mb-[60px] xl:mb-[80px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/flickrz-logo-v2.png`,
                        alt: "",
                        width: "232",
                        height: "60",
                        onClick: ()=>router.push("/"),
                        className: "cursor-pointer"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-[18px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: lang["about/intro-1"]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: lang["about/intro-2"]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginDecorator);


/***/ })

};
;