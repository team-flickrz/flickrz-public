"use strict";
exports.id = 4560;
exports.ids = [4560];
exports.modules = {

/***/ 51095:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14613);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73732);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45700);
/* harmony import */ var _bases_CheckBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67071);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61103);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_common__WEBPACK_IMPORTED_MODULE_5__, _utils_format__WEBPACK_IMPORTED_MODULE_6__]);
([_utils_common__WEBPACK_IMPORTED_MODULE_5__, _utils_format__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const BadgeItem = ({ title , image , link , priceAmount , priceToken , benefitAmount , benefitType , idItem , className , isCheck , handleChecked , groupClassName  })=>{
    const renderChildren = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).state;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-full pb-8 transition-all", {
                "lg:hover:shadow-lg lg:hover:scale-[1.15]": link,
                "cursor-pointer": link
            }, className),
            onClick: handleChecked,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("bg-cover bg-no-repeat bg-center rounded-t-xl h-item-thumbnail-h w-full relative", groupClassName?.imageClassName),
                    style: {
                        backgroundImage: `url(${image})`
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute top-4 left-5 flex gap-2",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " bg-black/30 py-1 px-2 rounded-md text-white text-h10 font-bold",
                                children: [
                                    "#",
                                    idItem
                                ]
                            })
                        }),
                        !link && handleChecked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute top-4 right-5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_CheckBox__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                checked: isCheck,
                                onClick: handleChecked,
                                groupClassName: {
                                    boxClassName: "!border-black/30"
                                }
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "px-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-h7 mt-5 text-black dark:text-white font-semibold",
                            children: title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-3 flex flex-col gap-2",
                            children: [
                                priceAmount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-black/30 dark:text-[#595B5F] text-h10",
                                            children: lang["sb/price"]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-1 flex items-center text-h9 font-semibold whitespace-nowrap dark:text-white",
                                            children: [
                                                `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_6__/* .formatIntBalance */ .qQ)(priceAmount)} ${(0,_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .getTokenName */ ._M)(priceToken)}`,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-4 h-4 ml-1",
                                                    children: (0,_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .getTokenIcon */ .YX)(priceToken)
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-black/30 dark:text-[#595B5F] text-h10",
                                            children: lang["common/benefit"]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-1 text-h9 font-semibold dark:text-white text-right",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-end",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text-secondary-2",
                                                            children: `${benefitAmount}%`
                                                        }),
                                                        "\xa0Bonus",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                    ]
                                                }),
                                                `${(0,_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .getBenefitType */ .wc)(benefitType)}`
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }, [
        link,
        className,
        handleChecked,
        groupClassName?.imageClassName,
        image,
        idItem,
        isCheck,
        title,
        priceAmount,
        priceToken,
        benefitAmount,
        benefitType, 
    ]);
    return link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: link,
        children: renderChildren()
    }) : renderChildren();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BadgeItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69380:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14613);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73732);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45700);
/* harmony import */ var _bases_CheckBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67071);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61103);
/* harmony import */ var _commons_Rarity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17439);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_common__WEBPACK_IMPORTED_MODULE_5__, _utils_format__WEBPACK_IMPORTED_MODULE_6__, _commons_Rarity__WEBPACK_IMPORTED_MODULE_9__]);
([_utils_common__WEBPACK_IMPORTED_MODULE_5__, _utils_format__WEBPACK_IMPORTED_MODULE_6__, _commons_Rarity__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const CharacterItem = ({ title , image , link , priceAmount , priceToken , earningAmount , earningToken , level , className , onSale , isCheck , handleChecked , groupClassName , inClaimRequest , rarity ,  })=>{
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).state;
    const renderChildren = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-full pb-8 cursor-pointer", {
                "lg:hover:shadow-lg lg:hover:scale-[1.15] transition-all": link
            }, className),
            onClick: handleChecked,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            alt: "",
                            src: image,
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("rounded-t-xl h-item-thumbnail-h w-full", groupClassName?.imageClassName)
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "absolute top-4 left-5 flex flex-row items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "bg-black/30 py-1 px-2 rounded-md text-white text-h10 font-bold",
                                    children: `Lvl ${level}`
                                }),
                                onSale && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-caption-3 py-1 px-2 bg-main rounded-md ml-1 text-white",
                                    children: lang["card/on-sale"]
                                }),
                                inClaimRequest && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-caption-3 py-1 px-2 bg-secondary-2 rounded-md ml-1 text-white",
                                    children: lang["card/in-claim-request"]
                                })
                            ]
                        }),
                        !link && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute top-4 right-5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_CheckBox__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                checked: isCheck,
                                onClick: handleChecked,
                                groupClassName: {
                                    boxClassName: "!border-black/30"
                                }
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "px-5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                justifyContent: "space-between"
                            },
                            className: "flex text-h7 mt-5 text-black dark:text-white font-semibold",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    style: {
                                        width: "50%"
                                    },
                                    children: [
                                        " #",
                                        title
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_Rarity__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    type: rarity
                                })
                            ]
                        }),
                        priceAmount ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-3 flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-black/30 dark:text-[#595B5F] text-h10",
                                            children: lang["card/price"]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-1 flex items-center text-h9 font-semibold whitespace-nowrap dark:text-white",
                                            children: [
                                                `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_6__/* .formatIntBalance */ .qQ)(priceAmount)} ${(0,_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .getTokenName */ ._M)(priceToken)}`,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-4 h-4 ml-1",
                                                    children: (0,_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .getTokenIcon */ .YX)(priceToken)
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-black/30 dark:text-[#595B5F] text-h10",
                                            children: lang["card/average-earning"]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-1 flex items-center text-h9 font-semibold dark:text-white",
                                            children: [
                                                (0,_utils_format__WEBPACK_IMPORTED_MODULE_6__/* .formatIntBalance */ .qQ)(earningAmount),
                                                " ",
                                                (0,_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .getTokenName */ ._M)(earningToken),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-4 h-4",
                                                    children: (0,_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .getTokenIcon */ .YX)(earningToken)
                                                }),
                                                "/",
                                                lang["card/episode"]
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-3 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-black/30 dark:text-[#595B5F] text-h10",
                                    children: lang["card/average-earning"]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-h9 flex items-center font-semibold dark:text-white",
                                    children: [
                                        (0,_utils_format__WEBPACK_IMPORTED_MODULE_6__/* .formatIntBalance */ .qQ)(earningAmount),
                                        " ",
                                        (0,_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .getTokenName */ ._M)(earningToken),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-4 h-4",
                                            children: (0,_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .getTokenIcon */ .YX)(earningToken)
                                        }),
                                        "/",
                                        lang["card/episode"]
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }, [
        className,
        earningAmount,
        earningToken,
        groupClassName?.imageClassName,
        handleChecked,
        image,
        inClaimRequest,
        isCheck,
        lang,
        level,
        link,
        onSale,
        priceAmount,
        priceToken,
        title,
        rarity, 
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: link,
            children: renderChildren()
        }) : renderChildren()
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharacterItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



function SearchIcon({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            xmlns: "http://www.w3.org/2000/svg",
            d: "M20.7099 19.29L16.9999 15.61C18.44 13.8144 19.1374 11.5353 18.9487 9.24133C18.76 6.94733 17.6996 4.81281 15.9854 3.27667C14.2713 1.74053 12.0337 0.919537 9.73283 0.982497C7.43194 1.04546 5.24263 1.98759 3.61505 3.61517C1.98747 5.24275 1.04534 7.43207 0.982375 9.73295C0.919414 12.0338 1.74041 14.2714 3.27655 15.9855C4.81269 17.6997 6.94721 18.7601 9.2412 18.9488C11.5352 19.1375 13.8143 18.4401 15.6099 17L19.2899 20.68C19.3829 20.7738 19.4935 20.8482 19.6153 20.8989C19.7372 20.9497 19.8679 20.9758 19.9999 20.9758C20.1319 20.9758 20.2626 20.9497 20.3845 20.8989C20.5063 20.8482 20.6169 20.7738 20.7099 20.68C20.8901 20.4936 20.9909 20.2444 20.9909 19.985C20.9909 19.7257 20.8901 19.4765 20.7099 19.29ZM9.9999 17C8.61544 17 7.26206 16.5895 6.11091 15.8203C4.95977 15.0511 4.06256 13.9579 3.53275 12.6788C3.00293 11.3997 2.86431 9.99226 3.13441 8.63439C3.4045 7.27653 4.07119 6.02925 5.05016 5.05028C6.02912 4.07131 7.27641 3.40463 8.63427 3.13453C9.99214 2.86443 11.3996 3.00306 12.6787 3.53287C13.9578 4.06268 15.051 4.95989 15.8202 6.11103C16.5894 7.26218 16.9999 8.61556 16.9999 10C16.9999 11.8565 16.2624 13.637 14.9497 14.9498C13.6369 16.2625 11.8564 17 9.9999 17Z"
        })
    });
}


/***/ })

};
;