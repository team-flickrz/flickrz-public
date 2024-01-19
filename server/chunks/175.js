"use strict";
exports.id = 175;
exports.ids = [175];
exports.modules = {

/***/ 50175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useBgImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98976);




const ItemWithBgImageComponent = ({ className , bg , percent , customClass , children  })=>{
    const refElement = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [customHeight] = (0,_hooks_useBgImage__WEBPACK_IMPORTED_MODULE_3__/* .useHeightBaseOnWidth */ .s)(+percent, refElement);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: refElement,
        className: className ? className : classnames__WEBPACK_IMPORTED_MODULE_2___default()("bg-cover bg-no-repeat w-full", customClass ? customClass : ""),
        style: {
            height: customHeight ? customHeight : "",
            backgroundImage: bg ? bg : ""
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemWithBgImageComponent);


/***/ }),

/***/ 98976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ useHeightBaseOnWidth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useHeightBaseOnWidth = (percent, refElement)=>{
    const { 0: result , 1: setResult  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const calculateHeight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        const { innerWidth  } = window;
        const widthElement = refElement && refElement.current ? refElement.current.offsetWidth : "";
        const result = ((widthElement ? +widthElement : innerWidth) / percent).toFixed(0);
        setResult(+result);
    }, [
        percent,
        refElement
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{
        window.addEventListener("resize", calculateHeight);
        calculateHeight();
        return ()=>{
            window.removeEventListener("resize", calculateHeight);
        };
    }, [
        calculateHeight
    ]);
    return [
        result
    ];
};


/***/ })

};
;