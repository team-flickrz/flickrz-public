"use strict";
exports.id = 2558;
exports.ids = [2558];
exports.modules = {

/***/ 35678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57278);
/* harmony import */ var _bases_SelectBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31114);
/* harmony import */ var _bases_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36332);
/* harmony import */ var _icons_NextPageIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12866);
/* harmony import */ var _icons_BackPageIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_bases_SelectBox__WEBPACK_IMPORTED_MODULE_4__]);
_bases_SelectBox__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const BUTTON_CONST = 3;
const SIBLING_COUNT = 1;
const pageSizeOptions = [
    {
        label: "10 / Page",
        value: 10
    },
    {
        label: "20 / Page",
        value: 20
    },
    {
        label: "50 / Page",
        value: 50
    },
    {
        label: "100 / Page",
        value: 100
    }, 
];
const Pagination = ({ currentPage , totalItems , itemPerPage , onChangePage , onChangeItemPerPage ,  })=>{
    const buttonConst = BUTTON_CONST;
    const siblingCount = SIBLING_COUNT;
    const { 0: pageInputted , 1: setPageInputted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentPage.toString());
    const totalPageCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>Math.ceil(totalItems / itemPerPage), [
        totalItems,
        itemPerPage
    ]);
    const paginationRange = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_3__/* .usePagination */ .h)({
        totalPageCount,
        buttonConst,
        siblingCount,
        currentPage
    });
    const handleChangedCurrentPage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        const value = event.target.value;
        if (value === "0") return;
        if (value && /[^0-9]/g.test(value)) return;
        setPageInputted(event.target.value);
    }, []);
    const handleKeyUp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        if (!onChangePage) return;
        if (!paginationRange?.length) return;
        if (event.code === "Enter" || event.keyCode === 13) {
            let pageReturn;
            if (!pageInputted) {
                pageReturn = 1;
            } else if (Number(pageInputted) > Number(paginationRange[paginationRange?.length - 1])) {
                pageReturn = Number(paginationRange[paginationRange?.length - 1]);
            } else {
                pageReturn = Number(pageInputted);
            }
            if (pageReturn === currentPage) return setPageInputted(String(pageReturn));
            return onChangePage(pageReturn);
        }
    }, [
        currentPage,
        onChangePage,
        pageInputted,
        paginationRange
    ]);
    const handleClickPage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((page)=>{
        if (!onChangePage) return;
        if (page === currentPage) return;
        onChangePage(page);
        setPageInputted(page.toString());
    }, [
        currentPage,
        onChangePage
    ]);
    const handleSelectItemPerPage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((limit)=>{
        if (!onChangeItemPerPage) return;
        if (limit === itemPerPage) return;
        onChangeItemPerPage(limit, 1);
        setPageInputted("1");
    }, [
        onChangeItemPerPage,
        itemPerPage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setPageInputted(currentPage.toString());
    }, [
        currentPage
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: "sticky left-0 flex flex-row justify-end items-center gap-x-2 mb-5",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-end items-center gap-x-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("border rounded w-[28px] h-[28px] flex justify-center items-center cursor-pointer dark:border-white/10", {
                            invisible: currentPage === 1
                        }),
                        onClick: ()=>handleClickPage(currentPage - 1),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_BackPageIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            className: "w-4 h-4 fill-black dark:fill-[#B7B9BA]"
                        })
                    }),
                    paginationRange?.map((item, index)=>{
                        if (item === _hooks_usePagination__WEBPACK_IMPORTED_MODULE_3__/* .DOTS */ .A) {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("border rounded w-[28px] h-[28px] justify-center items-center hidden lg:flex", "dark:text-[#B7B9BA]/30 text-[#171717]/30 dark:border-white/10"),
                                children: _hooks_usePagination__WEBPACK_IMPORTED_MODULE_3__/* .DOTS */ .A
                            }, index);
                        }
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("border rounded w-[28px] h-[28px] flex justify-center items-center cursor-pointer text-sm", "dark:border-white/10 dark:text-[#B7B9BA]/30", currentPage === item ? "bg-[#DC413A] font-bold !text-white border-0" : "text-[#171717]/30 hidden lg:flex"),
                            onClick: ()=>handleClickPage(Number(item)),
                            children: item
                        }, index);
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("border rounded w-[28px] h-[28px] flex justify-center items-center cursor-pointer dark:border-white/10", {
                            hidden: currentPage === totalPageCount || !paginationRange?.length
                        }),
                        onClick: ()=>handleClickPage(currentPage + 1),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_NextPageIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            className: "w-4 h-4 fill-black dark:fill-[#B7B9BA]"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_SelectBox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        options: pageSizeOptions,
                        defaultValue: itemPerPage,
                        customClassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()("border-[1px] rounded !py-1 !px-[6px]", "w-fit h-fit min-w-[97px]", "small-select hidden lg:block"),
                        textClassName: "dark:text-[#B7B9BA]/50 text-[#171717]/50",
                        optionsClass: "options",
                        optionClass: "text-[#171717] opacity-50 dark:text-[#B7B9BA]",
                        onChange: handleSelectItemPerPage
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-h9 font-normal text-[#171717]/50 dark:text-[#B7B9BA]",
                children: [
                    "Go to page",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Input__WEBPACK_IMPORTED_MODULE_5__/* .Input */ .I, {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("border rounded w-[50px] h-[28px] px-2 ml-2", "first:odd:text-sm even:text-sm text-center", "text-[#171717]/50"),
                        maxLength: 4,
                        value: pageInputted,
                        onChange: handleChangedCurrentPage,
                        onKeyUp: handleKeyUp
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62558:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14613);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35678);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67517);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Pagination__WEBPACK_IMPORTED_MODULE_4__]);
_Pagination__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Table({ className , columns , data , showPagination =true , filter , handleSort , handleChangePage , handleChangeItemPerPage , maxHeightContent , displayIndexNumber =false , onClickRow , widthFitContent  }) {
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).state;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            widthFitContent ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: `relative border rounded-[9px] dark:border-none mb-5 ${className} lg:min-w-fit w-full border-spacing-0 border-separate`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("bg-secondary-4 rounded-tl-[8px] rounded-tr-[8px] text-black/50 px-5", "dark:bg-[#373737] dark:text-[#898989] border-b dark:border-none"),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-h9"),
                            children: [
                                displayIndexNumber && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    style: {
                                        width: "5%"
                                    },
                                    children: "No"
                                }),
                                columns.map((column, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        style: {
                                            width: column.width || `${100 / columns.length}%`
                                        },
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(widthFitContent && `!w-fit whitespace-nowrap min-w-[10%] max-w-[${100 / columns.length}%] pt-[9px] px-[18px] pb-[11px] font-[400]`, index === 0 && "rounded-tl-[9px]", index === columns.length - 1 && "rounded-tr-[9px]"),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-x-1",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
                                                        "cursor-pointer": column.sortable
                                                    }),
                                                    onClick: ()=>column.sortable && handleSort ? handleSort(String(column.dataIndex)) : {},
                                                    children: column.title
                                                }),
                                                column.sortable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    onClick: ()=>handleSort ? handleSort(String(column.dataIndex)) : {},
                                                    className: "cursor-pointer h-4"
                                                })
                                            ]
                                        })
                                    }, index))
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-h9 text-black min-h-[100px] overflow-x-hidden rounded-b-md px-5", "dark:bg-[#2F2F2F] dark:text-white", {
                            "overflow-y-auto scrollbar-thin": !showPagination
                        }, maxHeightContent),
                        children: data?.length ? data.map((item, rowIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("border-b last:border-b-0 dark:border-[#393939]", {
                                    "cursor-pointer": !!onClickRow
                                }, widthFitContent && "!justify-start"),
                                onClick: ()=>onClickRow && onClickRow(item),
                                children: [
                                    displayIndexNumber && filter?.page && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            width: "5%"
                                        },
                                        children: (filter?.page - 1) * 10 + rowIndex + 1 < 10 ? `0${(filter?.page - 1) * 10 + rowIndex + 1}` : `${(filter?.page - 1) * 10 + rowIndex + 1}`
                                    }),
                                    columns.map((column, colIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(rowIndex === 0 && "border-t-[1px] border-[#e5e7eb]", widthFitContent && `!w-fit min-w-[5%] whitespace-nowrap max-w-[${100 / columns.length}%]`, "px-[18px] py-[21px]", {
                                                "bg-[#F8D9D8]": column.displayError && column.displayError(rowIndex),
                                                "text-ellipsis overflow-hidden whitespace-nowrap": column.textOverflow,
                                                "cursor-pointer": column.renderTooltip && column.renderTooltip(item)
                                            }),
                                            style: {
                                                width: column.width || `${100 / columns.length}%`
                                            },
                                            children: column.render ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: column.renderTooltip && column.renderTooltip(item) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                        positionX: rowIndex === 0 ? "bottom" : "top",
                                                        message: `seller ID: ${column.renderTooltip(item) || ""}`,
                                                        children: column.dataIndex ? column.render(item[column.dataIndex], item, rowIndex) : column.render(undefined, item, rowIndex)
                                                    })
                                                }) : column.dataIndex ? column.render(item[column.dataIndex], item, rowIndex) : column.render(undefined, item, rowIndex)
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: column.dataIndex ? item[column.dataIndex] : ""
                                            })
                                        }, colIndex))
                                ]
                            }, rowIndex)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                colSpan: 5,
                                className: "text-black/50 py-16 text-center dark:text-[#898989]",
                                children: lang["profile/no-data"]
                            })
                        })
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `relative border rounded-[9px] dark:border-none mb-5 ${className} min-w-[700px] lg:min-w-fit`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full text-left",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("bg-secondary-4 rounded-tl-[8px] rounded-tr-[8px] text-black/50 px-5", "dark:bg-[#373737] dark:text-[#898989] border-b dark:border-none"),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex flex-row items-center justify-between text-h9 pt-[9px] px-[18px] pb-[11px]", widthFitContent && "!justify-start"),
                                children: [
                                    displayIndexNumber && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            width: "5%"
                                        },
                                        children: "No"
                                    }),
                                    columns.map((column, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                width: column.width || `${100 / columns.length}%`
                                            },
                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(widthFitContent && `!w-fit min-w-[10%] max-w-[${100 / columns.length}%]`),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center gap-x-1",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
                                                            "cursor-pointer": column.sortable
                                                        }),
                                                        onClick: ()=>column.sortable && handleSort ? handleSort(String(column.dataIndex)) : {},
                                                        children: column.title
                                                    }),
                                                    column.sortable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        onClick: ()=>handleSort ? handleSort(String(column.dataIndex)) : {},
                                                        className: "cursor-pointer h-4"
                                                    })
                                                ]
                                            })
                                        }, index))
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-h9 text-black min-h-[100px] overflow-x-hidden rounded-b-md px-5", "dark:bg-[#2F2F2F] dark:text-white", {
                                "overflow-y-auto scrollbar-thin": !showPagination
                            }, maxHeightContent),
                            children: data?.length ? data.map((item, rowIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("border-b last:border-b-0 dark:border-[#393939]", "flex flex-row items-center justify-between", "px-[18px] py-[21px]", {
                                        "cursor-pointer": !!onClickRow
                                    }, widthFitContent && "!justify-start"),
                                    onClick: ()=>onClickRow && onClickRow(item),
                                    children: [
                                        displayIndexNumber && filter?.page && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                width: "5%"
                                            },
                                            children: (filter?.page - 1) * 10 + rowIndex + 1 < 10 ? `0${(filter?.page - 1) * 10 + rowIndex + 1}` : `${(filter?.page - 1) * 10 + rowIndex + 1}`
                                        }),
                                        columns.map((column, colIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("pr-5 ", widthFitContent && `!w-fit min-w-[10%] max-w-[${100 / columns.length}%]`, {
                                                    "bg-[#F8D9D8]": column.displayError && column.displayError(rowIndex),
                                                    "text-ellipsis overflow-hidden whitespace-nowrap": column.textOverflow,
                                                    "cursor-pointer": column.renderTooltip && column.renderTooltip(item)
                                                }),
                                                style: {
                                                    width: column.width || `${100 / columns.length}%`
                                                },
                                                children: column.render ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: column.renderTooltip && column.renderTooltip(item) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                            positionX: rowIndex === 0 ? "bottom" : "top",
                                                            message: `seller ID: ${column.renderTooltip(item) || ""}`,
                                                            children: column.dataIndex ? column.render(item[column.dataIndex], item, rowIndex) : column.render(undefined, item, rowIndex)
                                                        })
                                                    }) : column.dataIndex ? column.render(item[column.dataIndex], item, rowIndex) : column.render(undefined, item, rowIndex)
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: column.dataIndex ? item[column.dataIndex] : ""
                                                })
                                            }, colIndex))
                                    ]
                                }, rowIndex)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-black/50 py-16 flex flex-col justify-center items-center dark:text-[#898989]",
                                children: lang["profile/no-data"]
                            })
                        })
                    ]
                })
            }),
            data.length > 0 && showPagination && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Pagination__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                currentPage: filter?.page || 1,
                totalItems: filter?.total || 0,
                itemPerPage: filter?.size || 10,
                onChangePage: handleChangePage,
                onChangeItemPerPage: handleChangeItemPerPage
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BackPageIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



function BackPageIcon({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        viewBoxWidth: 16,
        viewBoxHeight: 16,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
            opacity: "0.3",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M7.39598 7.81284L10.4184 4.79039C10.5774 4.63042 10.6667 4.41403 10.6667 4.18846C10.6667 3.9629 10.5774 3.74651 10.4184 3.58654C10.3391 3.50651 10.2446 3.44299 10.1406 3.39965C10.0365 3.3563 9.92494 3.33398 9.81223 3.33398C9.69952 3.33398 9.58792 3.3563 9.48388 3.39965C9.37984 3.44299 9.28541 3.50651 9.20603 3.58654L5.58593 7.20664C5.5059 7.28602 5.44238 7.38045 5.39904 7.48449C5.35569 7.58853 5.33337 7.70013 5.33337 7.81284C5.33337 7.92555 5.35569 8.03715 5.39904 8.14119C5.44238 8.24524 5.5059 8.33967 5.58593 8.41904L9.20603 12.0818C9.28581 12.161 9.38043 12.2236 9.48445 12.2661C9.58848 12.3086 9.69987 12.3301 9.81223 12.3294C9.9246 12.3301 10.036 12.3086 10.14 12.2661C10.244 12.2236 10.3386 12.161 10.4184 12.0818C10.5774 11.9219 10.6667 11.7055 10.6667 11.4799C10.6667 11.2543 10.5774 11.038 10.4184 10.878L7.39598 7.81284Z"
            })
        })
    });
}


/***/ }),

/***/ 12866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NextPageIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



function NextPageIcon({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        viewBoxWidth: 16,
        viewBoxHeight: 16,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
            opacity: "0.3",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8.60408 7.81284L5.58163 4.79039C5.42261 4.63042 5.33335 4.41403 5.33335 4.18846C5.33335 3.9629 5.42261 3.74651 5.58163 3.58654C5.661 3.50651 5.75543 3.44299 5.85948 3.39965C5.96352 3.3563 6.07512 3.33398 6.18783 3.33398C6.30054 3.33398 6.41214 3.3563 6.51618 3.39965C6.62022 3.44299 6.71466 3.50651 6.79403 3.58654L10.4141 7.20664C10.4942 7.28602 10.5577 7.38045 10.601 7.48449C10.6444 7.58853 10.6667 7.70013 10.6667 7.81284C10.6667 7.92555 10.6444 8.03715 10.601 8.14119C10.5577 8.24524 10.4942 8.33967 10.4141 8.41904L6.79403 12.0818C6.71425 12.161 6.61963 12.2236 6.51561 12.2661C6.41158 12.3086 6.3002 12.3301 6.18783 12.3294C6.07546 12.3301 5.96408 12.3086 5.86005 12.2661C5.75603 12.2236 5.66141 12.161 5.58163 12.0818C5.42261 11.9219 5.33335 11.7055 5.33335 11.4799C5.33335 11.2543 5.42261 11.038 5.58163 10.878L8.60408 7.81284Z"
            })
        })
    });
}


/***/ }),

/***/ 57278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ DOTS),
/* harmony export */   "h": () => (/* binding */ usePagination)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DOTS = "...";
const range = (start, end)=>{
    const length = end - start + 1;
    return Array.from({
        length
    }, (_, index)=>index + start);
};
const usePagination = ({ totalPageCount , buttonConst , siblingCount , currentPage  })=>{
    const paginationRange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const totalPageNumbers = buttonConst + 2 + siblingCount;
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex <= totalPageCount - 2;
        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;
        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount;
            const leftRange = range(1, leftItemCount);
            return [
                ...leftRange,
                DOTS,
                totalPageCount
            ];
        }
        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingCount;
            const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
            return [
                firstPageIndex,
                DOTS,
                ...rightRange
            ];
        }
        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [
                firstPageIndex,
                DOTS,
                ...middleRange,
                DOTS,
                lastPageIndex
            ];
        }
    }, [
        totalPageCount,
        siblingCount,
        currentPage,
        buttonConst
    ]);
    return paginationRange;
};


/***/ })

};
;