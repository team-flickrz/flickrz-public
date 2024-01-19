"use strict";
exports.id = 5098;
exports.ids = [5098];
exports.modules = {

/***/ 5449:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FilterBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84689);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85277);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60088);
/* harmony import */ var _InputRange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65866);
/* harmony import */ var _features_marketplace_badgeSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41722);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14613);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_3__, _InputRange__WEBPACK_IMPORTED_MODULE_5__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_3__, _InputRange__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function FilterBadge({ onClickedFindButton  }) {
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .TL)();
    const { badgeFilter  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .CG)((state)=>state.sidebar);
    const { 0: filter , 1: setFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(badgeFilter);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).state;
    const handleOnchangeValueMinPriceBadge = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        setFilter({
            ...filter,
            minPrice: value
        });
    }, [
        filter
    ]);
    const handleOnchangeValueMaxPriceBadge = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        setFilter({
            ...filter,
            maxPrice: value
        });
    }, [
        filter
    ]);
    const handleClickClearFilter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        dispatch(_features_marketplace_badgeSlice__WEBPACK_IMPORTED_MODULE_6__/* .badgeActions.setDefaultState */ .w.setDefaultState());
        dispatch(_features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_2__/* .sidebarFilterActions.handleClearFilterBadge */ .A.handleClearFilterBadge());
        setFilter({
            minPrice: "",
            maxPrice: ""
        });
    }, [
        dispatch
    ]);
    const handleClickConfirmFilter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        onClickedFindButton();
        dispatch(_features_marketplace_badgeSlice__WEBPACK_IMPORTED_MODULE_6__/* .badgeActions.setDefaultState */ .w.setDefaultState());
        dispatch(_features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_2__/* .sidebarFilterActions.handleChangeValueFieldBadge */ .A.handleChangeValueFieldBadge({
            ...filter
        }));
    }, [
        dispatch,
        filter,
        onClickedFindButton
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setFilter(badgeFilter);
    }, [
        badgeFilter
    ]);
    const renderContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col gap-[28px]",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputRange__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            label: "Price",
                            className: "!mt-0",
                            min: filter.minPrice,
                            max: filter.maxPrice,
                            handleChangeMin: handleOnchangeValueMinPriceBadge,
                            handleChangeMax: handleOnchangeValueMaxPriceBadge,
                            maxLength: 20
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-t border-[#2C313D]/10 dark:border-white/10 mt-[1px]"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-row -mx-[9px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mx-[9px] w-[50%]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                                size: "sm",
                                fullWidth: true,
                                className: "contained-gray dark:bg-white/[.08] dark:text-white/60 rounded-[8px]",
                                onClick: handleClickClearFilter,
                                disabled: filter.minPrice === "" && filter.maxPrice === "",
                                children: lang["button/clear"]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mx-[9px] w-[50%]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                                size: "sm",
                                fullWidth: true,
                                className: "btn-primary dark:btn-primary rounded-[8px]",
                                onClick: handleClickConfirmFilter,
                                children: lang["button/find"]
                            })
                        })
                    ]
                })
            ]
        });
    }, [
        filter.minPrice,
        filter.maxPrice,
        handleOnchangeValueMinPriceBadge,
        handleOnchangeValueMaxPriceBadge,
        handleClickClearFilter,
        lang,
        handleClickConfirmFilter, 
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: renderContent()
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FilterEquipment)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84689);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85277);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60088);
/* harmony import */ var _bases_CheckBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67071);
/* harmony import */ var _InputRange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65866);
/* harmony import */ var _features_marketplace_equipmentSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67998);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73732);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14613);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_4__, _InputRange__WEBPACK_IMPORTED_MODULE_7__, _utils_common__WEBPACK_IMPORTED_MODULE_9__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_4__, _InputRange__WEBPACK_IMPORTED_MODULE_7__, _utils_common__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function FilterEquipment({ onClickedFindButton  }) {
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    const { equipmentFilter  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.sidebar);
    const { 0: filter , 1: setFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(equipmentFilter);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).state;
    const slotOption = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>[
            {
                label: lang["sb/hat"],
                value: "0"
            },
            {
                label: lang["sb/ring"],
                value: "3"
            },
            {
                label: lang["sb/medicine"],
                value: "2"
            },
            {
                label: lang["sb/glasses"],
                value: "1"
            }, 
        ], [
        lang
    ]);
    const handleOnchangeValueMinPrice = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value)=>{
        setFilter({
            ...filter,
            minPrice: value
        });
    }, [
        filter
    ]);
    const handleOnchangeValueMaxPrice = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value)=>{
        setFilter({
            ...filter,
            maxPrice: value
        });
    }, [
        filter
    ]);
    const handleOnchangeValueMinLevel = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value)=>{
        setFilter({
            ...filter,
            minLevel: value
        });
    }, [
        filter
    ]);
    const handleOnchangeValueMaxLevel = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value)=>{
        setFilter({
            ...filter,
            maxLevel: value
        });
    }, [
        filter
    ]);
    const handleClickSlotOption = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value)=>{
        const arr = filter.slot;
        if (arr.includes(value)) {
            setFilter({
                ...filter,
                slot: arr.filter((item)=>item !== value)
            });
        } else {
            setFilter({
                ...filter,
                slot: [
                    ...arr,
                    value
                ]
            });
        }
    }, [
        filter
    ]);
    const handleClickClearFilter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        dispatch(_features_marketplace_equipmentSlice__WEBPACK_IMPORTED_MODULE_8__/* .equipmentActions.setDefaultState */ .f.setDefaultState());
        dispatch(_features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_3__/* .sidebarFilterActions.handleClearFilterEquipment */ .A.handleClearFilterEquipment());
        setFilter({
            minPrice: "",
            maxPrice: "",
            minLevel: "",
            maxLevel: "",
            slot: []
        });
    }, [
        dispatch
    ]);
    const handleClickConfirmFilterEquipment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        onClickedFindButton();
        dispatch(_features_marketplace_equipmentSlice__WEBPACK_IMPORTED_MODULE_8__/* .equipmentActions.setDefaultState */ .f.setDefaultState());
        dispatch(_features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_3__/* .sidebarFilterActions.handleChangeValueFieldEquipment */ .A.handleChangeValueFieldEquipment({
            ...filter
        }));
    }, [
        dispatch,
        filter,
        onClickedFindButton
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setFilter(equipmentFilter);
    }, [
        equipmentFilter
    ]);
    const renderContent = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col gap-[28px]",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputRange__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            label: lang["sb/price"],
                            className: "!mt-0",
                            min: filter.minPrice,
                            max: filter.maxPrice,
                            handleChangeMin: handleOnchangeValueMinPrice,
                            handleChangeMax: handleOnchangeValueMaxPrice,
                            maxLength: 20
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-t border-[#2C313D]/10 dark:border-white/10 mt-[1px]"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputRange__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            label: lang["sb/level"],
                            className: "mt-4",
                            min: filter.minLevel,
                            max: filter.maxLevel,
                            handleChangeMin: handleOnchangeValueMinLevel,
                            handleChangeMax: handleOnchangeValueMaxLevel,
                            maxLength: 4,
                            integerOnly: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-t border-[#2C313D]/10 dark:border-white/10 mt-[1px]"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-caption-2", "dark:text-white/[87] text-black/70", "flex items-center"),
                            children: lang["sb/slot"]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-2",
                            children: slotOption.map((item, index)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_CheckBox__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        onClick: ()=>handleClickSlotOption(item.value),
                                        checked: filter.slot.includes(item.value),
                                        groupClassName: {
                                            checkClassName: "bg-[#E42D25]"
                                        },
                                        children: item.label
                                    })
                                }, index);
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-t border-[#2C313D]/10 dark:border-white/10 mt-[22px]"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-row -mx-[9px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mx-[9px] w-[50%]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                size: "sm",
                                fullWidth: true,
                                className: "contained-gray dark:bg-white/[.08] dark:text-white/60 rounded-[8px]",
                                onClick: handleClickClearFilter,
                                disabled: Object.keys((0,_utils_common__WEBPACK_IMPORTED_MODULE_9__/* .removeEmptyProperties */ .Nq)({
                                    ...filter,
                                    slot: filter.slot.toString()
                                })).length === 0,
                                children: lang["button/clear"]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mx-[9px] w-[50%]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                size: "sm",
                                fullWidth: true,
                                className: "btn-primary dark:btn-primary rounded-[8px]",
                                onClick: handleClickConfirmFilterEquipment,
                                children: lang["button/find"]
                            })
                        })
                    ]
                })
            ]
        });
    }, [
        lang,
        filter,
        handleOnchangeValueMinPrice,
        handleOnchangeValueMaxPrice,
        handleOnchangeValueMinLevel,
        handleOnchangeValueMaxLevel,
        slotOption,
        handleClickClearFilter,
        handleClickConfirmFilterEquipment,
        handleClickSlotOption, 
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: renderContent()
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65866:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49766);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14613);
/* harmony import */ var _bases_InputAmount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49508);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([bignumber_js__WEBPACK_IMPORTED_MODULE_1__]);
bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const InputRange = ({ label , min , max , handleChangeMax , handleChangeMin , className , maxLength , integerOnly , additionalFilter  })=>{
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).state;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("mt-2", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("text-caption-2", "dark:text-[#FFFFFFE5] text-black", "flex items-center"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "whitespace-nowrap mr-3",
                    children: label
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-[15px] lg:mt-[10px]",
                children: additionalFilter
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row items-center justify-between mt-[15px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_InputAmount__WEBPACK_IMPORTED_MODULE_5__/* .InputAmount */ .Z, {
                        className: "w-[45%]",
                        value: min,
                        placeholder: lang["sb/min"],
                        onValueChange: ({ value  })=>handleChangeMin && handleChangeMin(value),
                        isAllowed: ({ value  })=>{
                            if (!maxLength) return true;
                            return value.length <= maxLength;
                        },
                        thousandSeparator: ",",
                        thousandsGroupStyle: "thousand",
                        decimalScale: integerOnly ? 0 : undefined
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "px-3 text-h9 text-black/70 dark:text-white/70",
                        children: lang["sb/to"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_InputAmount__WEBPACK_IMPORTED_MODULE_5__/* .InputAmount */ .Z, {
                        className: "w-[45%]",
                        value: max,
                        placeholder: lang["sb/max"],
                        onValueChange: ({ value  })=>handleChangeMax && handleChangeMax(value),
                        isAllowed: ({ value  })=>{
                            if (!maxLength) return true;
                            return value.length <= maxLength;
                        },
                        thousandSeparator: ",",
                        thousandsGroupStyle: "thousand",
                        decimalScale: integerOnly ? 0 : undefined
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-4 text-xs mt-1 text-main",
                children: min && max && new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](min).gt(max) && `${lang["validate/minimum-must"]}`
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputRange);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15098:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _features_accessibility_accessibilitySlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19010);
/* harmony import */ var _features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84689);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85277);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60088);
/* harmony import */ var _bases_CheckBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67071);
/* harmony import */ var _icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63186);
/* harmony import */ var _icons_SortDescIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67124);
/* harmony import */ var _FilterBadge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5449);
/* harmony import */ var _FilterEquipment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44075);
/* harmony import */ var _InputRange__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(65866);
/* harmony import */ var _features_marketplace_characterSlice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17527);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(73732);
/* harmony import */ var _bases_Input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(36332);
/* harmony import */ var _bases_SelectBox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(31114);
/* harmony import */ var _icons_CloseIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(22043);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14613);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_5__, _FilterBadge__WEBPACK_IMPORTED_MODULE_10__, _FilterEquipment__WEBPACK_IMPORTED_MODULE_11__, _InputRange__WEBPACK_IMPORTED_MODULE_12__, _utils_common__WEBPACK_IMPORTED_MODULE_14__, _bases_SelectBox__WEBPACK_IMPORTED_MODULE_16__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_5__, _FilterBadge__WEBPACK_IMPORTED_MODULE_10__, _FilterEquipment__WEBPACK_IMPORTED_MODULE_11__, _InputRange__WEBPACK_IMPORTED_MODULE_12__, _utils_common__WEBPACK_IMPORTED_MODULE_14__, _bases_SelectBox__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const tokenEarningOptions = [
    {
        label: "Select Token",
        value: ""
    },
    {
        label: "EP",
        value: "0"
    },
    {
        label: "FLKZ",
        value: "1"
    }, 
];
const INTEGER_REGEX = /^\d{0,4}$/;
function Sidebar({ type ="desktop"  }) {
    const marketplaceState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .CG)((state)=>state.marketplace);
    const accessibilityState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const { characterFilter  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .CG)((state)=>state.sidebar);
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_5__/* .useAppDispatch */ .TL)();
    const { 0: filter , 1: setFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(characterFilter);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z).state;
    const rarityOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>[
            {
                label: lang["sb/common"] || "",
                value: "0"
            },
            {
                label: lang["sb/rare"] || "",
                value: "1"
            },
            {
                label: lang["sb/epic"] || "",
                value: "2"
            },
            {
                label: lang["sb/heroic"] || "",
                value: "3"
            },
            {
                label: lang["sb/legendary"] || "",
                value: "4"
            }, 
        ], [
        lang
    ]);
    const handleOnClicked = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e)=>{
        e.stopPropagation();
    }, []);
    const handleOnCloseBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (type === "mobile") {
            return dispatch(_features_accessibility_accessibilitySlice__WEBPACK_IMPORTED_MODULE_3__/* .accessibilityActions.toggleMobileSidebar */ .dT.toggleMobileSidebar(!accessibilityState.bMobileSidebarOn));
        }
        dispatch(_features_accessibility_accessibilitySlice__WEBPACK_IMPORTED_MODULE_3__/* .accessibilityActions.toggleSidebar */ .dT.toggleSidebar(!accessibilityState.bSidebarOn));
    }, [
        accessibilityState.bMobileSidebarOn,
        accessibilityState.bSidebarOn,
        dispatch,
        type
    ]);
    const handleOnchangeValueMinPrice = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value)=>{
        setFilter({
            ...filter,
            minPrice: value
        });
    }, [
        filter
    ]);
    const handleOnchangeValueMaxPrice = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value)=>{
        setFilter({
            ...filter,
            maxPrice: value
        });
    }, [
        filter
    ]);
    const handleOnchangeValueMinAvgEarning = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value)=>{
        setFilter({
            ...filter,
            minAverageEarning: value
        });
    }, [
        filter
    ]);
    const handleOnchangeValueMaxAvgEarning = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value)=>{
        setFilter({
            ...filter,
            maxAverageEarning: value
        });
    }, [
        filter
    ]);
    const handleOnchangeValueMintCount = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event)=>{
        const value = event.target.value;
        if (INTEGER_REGEX.test(value)) {
            setFilter({
                ...filter,
                mintCount: value
            });
        }
    }, [
        filter
    ]);
    const handleClickRarityOption = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value)=>{
        const arr = filter.rarity;
        if (arr.includes(value)) {
            setFilter({
                ...filter,
                rarity: arr.filter((item)=>item !== value)
            });
        } else {
            setFilter({
                ...filter,
                rarity: [
                    ...arr,
                    value
                ]
            });
        }
    }, [
        filter
    ]);
    const handleChangeTokenEarning = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value)=>{
        setFilter({
            ...filter,
            tokenEarning: value
        });
    }, [
        filter
    ]);
    const handleClickClearFilter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        dispatch(_features_marketplace_characterSlice__WEBPACK_IMPORTED_MODULE_13__/* .characterActions.setDefaultState */ .h.setDefaultState());
        dispatch(_features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_4__/* .sidebarFilterActions.handleClearFilter */ .A.handleClearFilter());
        setFilter({
            minPrice: "",
            maxPrice: "",
            minAverageEarning: "",
            maxAverageEarning: "",
            rarity: [],
            mintCount: "",
            tokenEarning: ""
        });
    }, [
        dispatch
    ]);
    const handleClickFindButton = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (type === "mobile") {
            dispatch(_features_accessibility_accessibilitySlice__WEBPACK_IMPORTED_MODULE_3__/* .accessibilityActions.toggleMobileSidebar */ .dT.toggleMobileSidebar(!accessibilityState.bMobileSidebarOn));
        }
    }, [
        accessibilityState.bMobileSidebarOn,
        dispatch,
        type
    ]);
    const handleClickConfirmFilter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        handleClickFindButton();
        dispatch(_features_marketplace_characterSlice__WEBPACK_IMPORTED_MODULE_13__/* .characterActions.setDefaultState */ .h.setDefaultState());
        dispatch(_features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_4__/* .sidebarFilterActions.handleChangeValueField */ .A.handleChangeValueField({
            ...filter
        }));
    }, [
        dispatch,
        filter,
        handleClickFindButton
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setFilter(characterFilter);
    }, [
        characterFilter
    ]);
    const renderHeader = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex flex-row items-center mb-[28px] lg:mb-0"),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[26px] h-[20px] lg:hidden",
                        onClick: handleOnCloseBtnClicked,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SortDescIcon__WEBPACK_IMPORTED_MODULE_9__/* .SortDescIcon */ .k, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("ml-[10px] text-[25px] leading-[25px] font-semibold", "text-[#010101] dark:text-white/[87] lg:hidden", {
                            hidden: !accessibilityState.bSidebarOn
                        }),
                        children: lang["sb/filter"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute right-8 lg:hidden"),
                        onClick: handleOnCloseBtnClicked,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[18px] h-[18px] grow-0 shrink-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("hidden", "bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-[50%] w-7 h-7 flex items-center justify-center", "absolute right-[-14px]", "transition-transform duration-200 cursor-pointer", {
                            "rotate-180": !accessibilityState.bSidebarOn
                        }),
                        onClick: handleOnCloseBtnClicked,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_8__/* .ArrowLeftIcon */ .Y, {
                            className: "fill-[#D72E33]"
                        })
                    })
                ]
            })
        });
    }, [
        accessibilityState.bSidebarOn,
        handleOnCloseBtnClicked,
        lang
    ]);
    const renderCharacterItemFilter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col gap-[28px]",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputRange__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            label: lang["sb/price"],
                            min: filter.minPrice,
                            max: filter.maxPrice,
                            className: "!mt-0",
                            handleChangeMin: handleOnchangeValueMinPrice,
                            handleChangeMax: handleOnchangeValueMaxPrice,
                            maxLength: 20
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-t border-[#2C313D]/10 dark:border-white/10 mt-[2px]"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputRange__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            label: lang["sb/average-earning"],
                            className: "!mt-0",
                            min: filter.minAverageEarning,
                            max: filter.maxAverageEarning,
                            handleChangeMin: handleOnchangeValueMinAvgEarning,
                            handleChangeMax: handleOnchangeValueMaxAvgEarning,
                            maxLength: 20,
                            additionalFilter: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_SelectBox__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                options: tokenEarningOptions,
                                defaultValue: filter.tokenEarning,
                                customClassName: "py-[12px]",
                                onChange: (value)=>handleChangeTokenEarning(value),
                                textClassName: "text-[16px] leading-[16px] text-black font-normal",
                                optionsClass: "text-[14px] text-black font-normal"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-t border-[#2C313D]/10 dark:border-white/10 mt-[2px]"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-caption-2", "dark:text-white/[87] text-black/70", "flex items-center"),
                            children: lang["sb/rarity"]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-2",
                            children: rarityOptions.map((item, index)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_CheckBox__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        onClick: ()=>handleClickRarityOption(item.value),
                                        checked: filter.rarity.includes(item.value),
                                        groupClassName: {
                                            checkClassName: "bg-[#E42D25]"
                                        },
                                        children: item.label
                                    })
                                }, index);
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-t border-[#2C313D]/10 dark:border-white/10 mt-[22px]"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-caption-2", "dark:text-white/[87] text-black/70", "flex items-center"),
                            children: lang["sb/mint-count"]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                            placeholder: lang["sb/enter-a-number"],
                            className: "mt-[15px] w-full",
                            value: filter.mintCount,
                            onChange: handleOnchangeValueMintCount
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-t border-[#2C313D]/10 dark:border-white/10 mt-[22px]"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-row -mx-[9px] pb-[11px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mx-[9px] w-[50%]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                                size: "sm",
                                fullWidth: true,
                                className: "contained-gray dark:bg-white/[.08] dark:text-white/60 dark:border-[#4E5156] dark:border-[2px] rounded-[8px]",
                                onClick: handleClickClearFilter,
                                disabled: Object.keys((0,_utils_common__WEBPACK_IMPORTED_MODULE_14__/* .removeEmptyProperties */ .Nq)({
                                    ...filter,
                                    rarity: filter.rarity.toString()
                                })).length === 0,
                                children: lang["button/clear"]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mx-[9px] w-[50%]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                                size: "sm",
                                fullWidth: true,
                                className: "btn-primary dark:btn-primary rounded-[8px]",
                                onClick: handleClickConfirmFilter,
                                children: lang["button/find"]
                            })
                        })
                    ]
                })
            ]
        });
    }, [
        filter,
        handleChangeTokenEarning,
        handleClickClearFilter,
        handleClickConfirmFilter,
        handleClickRarityOption,
        handleOnchangeValueMaxAvgEarning,
        handleOnchangeValueMaxPrice,
        handleOnchangeValueMinAvgEarning,
        handleOnchangeValueMinPrice,
        handleOnchangeValueMintCount,
        lang,
        rarityOptions, 
    ]);
    const renderItemFilter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        switch(marketplaceState.filter.item){
            case "character":
                {
                    return renderCharacterItemFilter();
                }
            case "badge":
                {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FilterBadge__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        onClickedFindButton: handleClickFindButton
                    });
                }
            case "equipment":
                {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FilterEquipment__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        onClickedFindButton: handleClickFindButton
                    });
                }
        }
    }, [
        handleClickFindButton,
        marketplaceState.filter.item,
        renderCharacterItemFilter
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("fixed lg:static lg:rounded-[15px] top-0 lg:top-[165px] left-0 pt-[35px] pb-[30px] px-[35px] xl:px-[30px] h-screen lg:h-fit z-50 lg:z-[1] overscroll-contain", "transition-colors", type === "desktop" && (accessibilityState.bSidebarOn ? "lg:w-[325px] w-full" : "lg:block lg:w-fit hidden lg:!p-0"), type === "mobile" && (accessibilityState.bMobileSidebarOn ? "w-full" : "hidden "), "bg-sidebar-light text-black/70", "dark:bg-header-dark dark:text-white"),
        onClick: handleOnClicked,
        children: [
            renderHeader(),
            type === "desktop" && accessibilityState.bSidebarOn && renderItemFilter(),
            type === "mobile" && accessibilityState.bMobileSidebarOn && renderItemFilter()
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;