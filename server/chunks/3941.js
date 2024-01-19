"use strict";
exports.id = 3941;
exports.ids = [3941];
exports.modules = {

/***/ 17633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66790);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14613);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60088);
/* harmony import */ var _icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7833);








const MyProfileNoCharacter = ({ title , description  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).state;
    const handleToMarketPlace = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        router.push(`${_constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.MARKETPLACE */ .Yj.MARKETPLACE}`);
    }, [
        router
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-full flex flex-col items-center justify-center self-center flex-1",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/no-data-character.png`,
                alt: "",
                height: "150px",
                width: "150px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-h3 font-semibold mt-5 dark:text-white text-center",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-h7 text-black/50 text-center dark:text-white/50",
                children: description
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                onClick: handleToMarketPlace,
                className: "contained-primary w-[205px] mt-10 stroke-primary-btn",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "ml-2",
                        children: lang["comp/to-marketplace"]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyProfileNoCharacter);


/***/ }),

/***/ 73992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DeleteIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



function DeleteIcon({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H12C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V4H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289ZM5 4V3C5 2.20435 5.31607 1.44129 5.87868 0.87868C6.44129 0.31607 7.20435 0 8 0H12C12.7956 0 13.5587 0.31607 14.1213 0.87868C14.6839 1.44129 15 2.20435 15 3V4H17H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H18V19C18 19.7957 17.6839 20.5587 17.1213 21.1213C16.5587 21.6839 15.7957 22 15 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7957 2 19V6H1C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4H3H5ZM4 6V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H15C15.2652 20 15.5196 19.8946 15.7071 19.7071C15.8946 19.5196 16 19.2652 16 19V6H14H6H4ZM8 9C8.55229 9 9 9.44771 9 10V16C9 16.5523 8.55229 17 8 17C7.44772 17 7 16.5523 7 16V10C7 9.44771 7.44772 9 8 9ZM13 16V10C13 9.44771 12.5523 9 12 9C11.4477 9 11 9.44771 11 10V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16Z",
            fill: "white"
        })
    });
}


/***/ }),

/***/ 76995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EditIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



function EditIcon({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M3 16.9999H7.24C7.37161 17.0007 7.50207 16.9755 7.62391 16.9257C7.74574 16.8759 7.85656 16.8026 7.95 16.7099L14.87 9.77994L17.71 6.99994C17.8037 6.90698 17.8781 6.79637 17.9289 6.67452C17.9797 6.55266 18.0058 6.42195 18.0058 6.28994C18.0058 6.15793 17.9797 6.02722 17.9289 5.90536C17.8781 5.7835 17.8037 5.6729 17.71 5.57994L13.47 1.28994C13.377 1.19621 13.2664 1.12182 13.1446 1.07105C13.0227 1.02028 12.892 0.994141 12.76 0.994141C12.628 0.994141 12.4973 1.02028 12.3754 1.07105C12.2536 1.12182 12.143 1.19621 12.05 1.28994L9.23 4.11994L2.29 11.0499C2.19732 11.1434 2.12399 11.2542 2.07423 11.376C2.02446 11.4979 1.99924 11.6283 2 11.7599V15.9999C2 16.2652 2.10536 16.5195 2.29289 16.707C2.48043 16.8946 2.73478 16.9999 3 16.9999ZM12.76 3.40994L15.59 6.23994L14.17 7.65994L11.34 4.82994L12.76 3.40994ZM4 12.1699L9.93 6.23994L12.76 9.06994L6.83 14.9999H4V12.1699ZM19 18.9999H1C0.734784 18.9999 0.48043 19.1053 0.292893 19.2928C0.105357 19.4804 0 19.7347 0 19.9999C0 20.2652 0.105357 20.5195 0.292893 20.707C0.48043 20.8946 0.734784 20.9999 1 20.9999H19C19.2652 20.9999 19.5196 20.8946 19.7071 20.707C19.8946 20.5195 20 20.2652 20 19.9999C20 19.7347 19.8946 19.4804 19.7071 19.2928C19.5196 19.1053 19.2652 18.9999 19 18.9999Z",
            fill: "white"
        })
    });
}


/***/ }),

/***/ 68069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HexagonIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



function HexagonIcon({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        viewBoxWidth: 25,
        viewBoxHeight: 23,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M24.474 9.5338C25.1753 10.7528 25.1753 12.2471 24.474 13.4662L20.1878 20.8852C19.4865 22.1043 18.1888 22.8514 16.7797 22.8514H8.21372C6.81118 22.8514 5.5135 22.1043 4.80568 20.8852L0.525954 13.4662C-0.175318 12.2471 -0.175318 10.7528 0.525954 9.5338L4.81223 2.11474C5.5135 0.895709 6.81118 0.14856 8.22028 0.14856H16.7863C18.1888 0.14856 19.4865 0.895709 20.1943 2.11474L24.4806 9.5338H24.474Z"
        })
    });
}


/***/ }),

/***/ 7833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ShoppingCart = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "23",
        height: "22",
        viewBox: "0 0 23 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M17.5 15.8125H6.88627C6.72527 15.8125 6.56937 15.756 6.44576 15.6528C6.32214 15.5497 6.23866 15.4064 6.20986 15.248L3.91514 2.62702C3.88634 2.46861 3.80285 2.32533 3.67924 2.22217C3.55563 2.11901 3.39973 2.0625 3.23873 2.0625H1.6875",
                // stroke="white"
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M7.1875 19.25C8.13674 19.25 8.90625 18.4805 8.90625 17.5312C8.90625 16.582 8.13674 15.8125 7.1875 15.8125C6.23826 15.8125 5.46875 16.582 5.46875 17.5312C5.46875 18.4805 6.23826 19.25 7.1875 19.25Z",
                // stroke="white"
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M17.5 19.25C18.4492 19.25 19.2188 18.4805 19.2188 17.5312C19.2188 16.582 18.4492 15.8125 17.5 15.8125C16.5508 15.8125 15.7812 16.582 15.7812 17.5312C15.7812 18.4805 16.5508 19.25 17.5 19.25Z",
                // stroke="white"
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M4.4375 5.5H19.4262C19.5269 5.5 19.6264 5.52212 19.7176 5.5648C19.8088 5.60748 19.8895 5.66967 19.9541 5.74698C20.0186 5.8243 20.0653 5.91484 20.091 6.01221C20.1167 6.10958 20.1207 6.21141 20.1026 6.31048L18.9776 12.498C18.9488 12.6564 18.8654 12.7997 18.7417 12.9028C18.6181 13.006 18.4622 13.0625 18.3012 13.0625H5.8125",
                // stroke="white"
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShoppingCart);


/***/ }),

/***/ 5115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GK": () => (/* binding */ isSmallerThan0),
/* harmony export */   "lJ": () => (/* binding */ isGreaterThan100)
/* harmony export */ });
/* unused harmony exports roundNumber, separator, convertStringToNumber, deFormatCommaNumber, formatCommaNumber, isEqualZero */
function roundNumber(num, precision = 0) {
    const m = Number((Math.abs(num) * 10 ** precision).toPrecision(15));
    return Math.round(m) / 10 ** precision * Math.sign(num);
}
function separator(number) {
    const str = number.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}
const convertStringToNumber = (value)=>{
    return value.toString().length === 0 ? "" : Number(value);
};
const deFormatCommaNumber = (value)=>{
    return value.toString().replaceAll(",", "");
};
const formatCommaNumber = (value)=>{
    const number = value.toString();
    if (number === ".") return "";
    if (number.split(".").length > 1) {
        return convertStringToNumber(number.split(".")[0]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "." + number.split(".")[1];
    } else {
        return convertStringToNumber(number.split(".")[0]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
};
const isEqualZero = (value)=>value.toString().trim().length === 0 ? false : Number(value) === 0;
const isGreaterThan100 = (number)=>{
    return Number(number) > 100 ? 100 : number;
};
const isSmallerThan0 = (number)=>{
    return Number(number) < 0 ? 0 : number;
};


/***/ })

};
;