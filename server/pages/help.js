"use strict";
(() => {
var exports = {};
exports.id = 1233;
exports.ids = [1233];
exports.modules = {

/***/ 72170:
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
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60088);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CustomerServiceQA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80988);
/* harmony import */ var _icons_BackToTop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85298);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CustomerServiceQA__WEBPACK_IMPORTED_MODULE_5__]);
_CustomerServiceQA__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Accordion({ expand =false , title , isButtonUpdate , additionalActionNode , itemDetail , onUpdateBtnClickedHandler , disableSubmit =false , children , isRolling =true , rightNode , isShowDate =true , isShowStatus =true , handleClickRowAccordion  }) {
    const { 0: bIsOpen , 1: setbIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(expand);
    const rfConfigurationSection = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const onExpansionToggleClicked = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        e.stopPropagation();
        setbIsOpen((state)=>!state);
        handleClickRowAccordion && bIsOpen === false && itemDetail && handleClickRowAccordion(itemDetail);
    }, [
        bIsOpen,
        handleClickRowAccordion,
        itemDetail
    ]);
    const handleOnUpdateBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        e.stopPropagation();
        onUpdateBtnClickedHandler && onUpdateBtnClickedHandler(e);
    }, [
        onUpdateBtnClickedHandler
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!bIsOpen || !window || !rfConfigurationSection.current) return;
        const getYpositionFromElementToMarginTop = rfConfigurationSection.current?.getBoundingClientRect().top - 100;
        window.scrollBy({
            top: getYpositionFromElementToMarginTop,
            behavior: "smooth"
        });
    }, [
        bIsOpen
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                ref: rfConfigurationSection,
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("flex flex-col py-[20px] px-[14px] items-stretch w-full border-b dark:border-b-[#393939] border-b-[#e6e6e6] cursor-pointer", {
                    "!border-opacity-0": bIsOpen
                }),
                onClick: onExpansionToggleClicked,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col lg:flex-row lg:justify-between lg:items-center cursor-pointer lg:gap-[30px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("dark:text-[#ffffff] text-[#000000] font-normal text-[16px] leading-[22px] select-none", {
                                        "!font-bold": bIsOpen
                                    }),
                                    children: title
                                }),
                                isShowDate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "font-normal text-[#000000]/[50%] dark:text-[#FFFFFF]/[50%] text-[12px] pt-[4px]",
                                    children: itemDetail?.createdAt && moment__WEBPACK_IMPORTED_MODULE_4___default()(itemDetail.createdAt).format("MMMM DD, YYYY, HH:mm")
                                }),
                                isShowStatus && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("font-semibold text-[16px] leading-[22px] text-[#F93A3F] lg:hidden block text-right pt-[8px]", {
                                        "!text-[#00A0F2]": itemDetail?.status === "pending"
                                    }),
                                    children: itemDetail?.status && (0,_CustomerServiceQA__WEBPACK_IMPORTED_MODULE_5__/* .capitalFirstLetter */ .g)(itemDetail.status)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row justify-end items-center gap-2",
                            children: [
                                bIsOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        additionalActionNode,
                                        isButtonUpdate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                                            onClick: handleOnUpdateBtnClicked,
                                            className: "btn btn-primary btn-md",
                                            disabled: disableSubmit,
                                            children: "Update"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("transition-transform duration-300 rotate-0", {
                                        "rotate-[180deg]": bIsOpen && isRolling
                                    }),
                                    onClick: onExpansionToggleClicked,
                                    children: rightNode
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("transition-all ease-out duration-300 hidden scrollbar-none", {
                    "!block": bIsOpen
                }),
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "lg:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("hidden", {
                        "!block": bIsOpen
                    }),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("flex items-center justify-end py-[17px] px-[12px] border-t border-b dark:border-[#393939] gap-[18px]"),
                        onClick: onExpansionToggleClicked,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "dark:text-[#FFFFFF]",
                                children: "Return to top"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_BackToTop__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    className: "w-[24px] h-[24px] fill-dark dark:fill-white"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59630:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12771);
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72170);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54553);
/* harmony import */ var _features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20843);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Accordion__WEBPACK_IMPORTED_MODULE_3__, _hooks_common__WEBPACK_IMPORTED_MODULE_4__]);
([_Accordion__WEBPACK_IMPORTED_MODULE_3__, _hooks_common__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function CustomerServiceFAQ() {
    const { dataResource , categoryList , tabActiveFAQ  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.customerService);
    const [getResource] = _services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useLazyGetResourceQuery */ .Z.useLazyGetResourceQuery();
    const [getCount] = _services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useLazyGetCountQuery */ .Z.useLazyGetCountQuery();
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    const handleGetCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((item)=>{
        getCount(item.id);
    }, [
        getCount
    ]);
    const handleClickTabs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((tab)=>{
        if (!tab || tab === tabActiveFAQ) return;
        dispatch(_features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_6__/* .customerServiceAction.setActiveTabFAQ */ .RH.setActiveTabFAQ(tab));
        dispatch(_features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_6__/* .customerServiceAction.handleResetState */ .RH.handleResetState({
            ...dataResource,
            data: []
        }));
    }, [
        dispatch,
        dataResource,
        tabActiveFAQ
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!tabActiveFAQ) return;
        getResource({
            type: "faq",
            customerServiceCategoryId: Number(tabActiveFAQ)
        });
    }, [
        getResource,
        categoryList,
        tabActiveFAQ
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!categoryList.length) return;
        dispatch(_features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_6__/* .customerServiceAction.setActiveTabFAQ */ .RH.setActiveTabFAQ(String(categoryList[0].id)));
    }, [
        categoryList,
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "lg:px-[30px] px-[20px] pt-[25px] lg:pb-[44px] pb-[25px] dark:bg-[#232323] bg-[#FFFFFF] rounded-[10px] relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "font-semibold dark:text-white text-[20px] border-b leading-[30px] pb-[10px] dark:border-b-[#393939] border-b-[#E6E6E6]",
                children: "FAQ"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "py-[24px] border-b-[2px] dark:border-b-[#919191] border-b-[#000000] flex flex-wrap gap-[10px] uppercase",
                children: categoryList.map((category)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("px-[18px] py-[10px] dark:bg-[#4E5156] cursor-pointer bg-[#F1F1F1] rounded-[8px] dark:text-[#898989] text-[#787878] font-bold text-[12px] leading-[16px]", {
                            "!bg-[#00A0F2] !text-[#ffffff]": tabActiveFAQ === String(category.id)
                        }),
                        onClick: ()=>handleClickTabs(String(category.id)),
                        children: category.title
                    }, category.title);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "faqs",
                children: dataResource.data.map((faq, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Accordion__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        title: faq.title,
                        isButtonUpdate: false,
                        isShowDate: false,
                        isShowStatus: false,
                        itemDetail: faq,
                        handleClickRowAccordion: handleGetCount,
                        rightNode: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            className: "w-[16px] h-[9px] fill-dark dark:fill-white"
                        }),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "faq-answer py-[20px] px-[16px] dark:bg-[#393939] bg-[#000000]/[5%] font-normal text-[16px] dark:text-[#ffffff] text-[#000000] ck-content ",
                            dangerouslySetInnerHTML: {
                                __html: faq.content
                            }
                        })
                    }, index);
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomerServiceFAQ);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53721:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54553);
/* harmony import */ var _bases_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62558);
/* harmony import */ var _features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20843);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons_BackNotiIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33503);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_2__, _bases_Table__WEBPACK_IMPORTED_MODULE_4__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_2__, _bases_Table__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const CustomerServiceNotifications = ()=>{
    const { notification: { notificationsList , filters , myActivitiesFilter , notificationDetail , idItemDetail ,  } ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .CG)((state)=>state.customerService);
    const [getNotificationList] = _services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useLazyGetNotificationsListQuery */ .Z.useLazyGetNotificationsListQuery();
    const [getDetailNoti] = _services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useLazyGetDetailIdNotiQuery */ .Z.useLazyGetDetailIdNotiQuery();
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .TL)();
    const handleChangePage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((page)=>{
        dispatch(_features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_5__/* .customerServiceAction.handleProfileChangeFilter */ .RH.handleProfileChangeFilter({
            ...filters,
            page
        }));
    }, [
        dispatch,
        filters
    ]);
    const handleChangeItemPerPage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((size, page)=>{
        dispatch(_features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_5__/* .customerServiceAction.handleProfileChangeFilter */ .RH.handleProfileChangeFilter({
            ...filters,
            page,
            take: size
        }));
    }, [
        filters,
        dispatch
    ]);
    const columns = [
        {
            title: "Title" || 0,
            render: (_, item)=>`${item?.title}`,
            width: "60%"
        },
        {
            title: "Publication date" || 0,
            render: (_, item)=>item?.publishDate ? `${moment__WEBPACK_IMPORTED_MODULE_6___default()(item?.publishDate).format("MMM DD, YYYY")}` : "-",
            width: "20%"
        }, 
    ];
    const handleClickRow = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((item)=>{
        dispatch(_features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_5__/* .customerServiceAction.setIdItemDetail */ .RH.setIdItemDetail(item.id));
    }, [
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getNotificationList({
            limit: filters.take,
            page: filters.page,
            fromTime: myActivitiesFilter.from.toString(),
            toTime: myActivitiesFilter.to.toString()
        });
    }, [
        filters.page,
        filters.take,
        getNotificationList,
        myActivitiesFilter.from,
        myActivitiesFilter.to, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!idItemDetail) return;
        getDetailNoti(idItemDetail);
    }, [
        getDetailNoti,
        idItemDetail
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "lg:px-[30px] px-[20px] pt-[25px] lg:pb-[44px] pb-[25px] dark:bg-[#232323] bg-[#FFFFFF] rounded-[10px] ",
        children: [
            !idItemDetail && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "font-semibold dark:text-white text-[20px] border-b leading-[30px] pb-[10px] dark:border-b-[#393939] border-b-[#E6E6E6] mb-6",
                        children: "Notifications"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full lg:overflow-visible overflow-auto relative",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Table__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            columns: columns,
                            data: notificationsList,
                            displayIndexNumber: true,
                            handleChangePage: handleChangePage,
                            filter: {
                                ...filters,
                                size: filters.take,
                                total: filters.total
                            },
                            onClickRow: handleClickRow,
                            handleChangeItemPerPage: handleChangeItemPerPage
                        })
                    })
                ]
            }),
            idItemDetail && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "border-b dark:border-b-[#393939] border-b-[#E6E6E6] flex items-center justify-between pb-[10px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font-semibold dark:text-white text-[20px] leading-[30px]",
                                children: "Notifications"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "py-[13.5px] px-[15.5px] border rounded-[8px] border-[#000000]/[10%] cursor-pointer dark:border-[#4E5156]",
                                onClick: ()=>{
                                    dispatch(_features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_5__/* .customerServiceAction.resetNotificationDetail */ .RH.resetNotificationDetail(null));
                                    dispatch(_features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_5__/* .customerServiceAction.setIdItemDetail */ .RH.setIdItemDetail(null));
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_BackNotiIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    className: "w-[14px] h-[14px] fill-dark dark:fill-white"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-[#000000] dark:text-[#ffffff] font-bold text-[32px] pt-[14px] pb-[20px]",
                        children: notificationDetail.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-[#000000]/[50%] dark:text-[#ffffff]/[40%] font-normal text-[14px] pb-[32px]",
                        children: notificationDetail.createdAt && moment__WEBPACK_IMPORTED_MODULE_6___default()(notificationDetail.createdAt).format("MMM DD, YYYY")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-[#000000] font-normal text-[14px] dark:text-[#ffffff] ck-content",
                        dangerouslySetInnerHTML: {
                            __html: notificationDetail.description
                        }
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomerServiceNotifications);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65693:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54553);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_2__]);
_hooks_common__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const CustomerServicePrivacyPolice = ()=>{
    const { dataResource: { data  } ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .CG)((state)=>state.customerService);
    const [getResource] = _services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useLazyGetResourceQuery */ .Z.useLazyGetResourceQuery();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getResource({
            type: "policy"
        });
    }, [
        getResource,
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "px-[30px] pt-[25px] pb-[44px] dark:bg-[#232323] bg-[#FFFFFF] rounded-[10px] relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "font-semibold dark:text-white text-[20px] border-b leading-[30px] pb-[10px] dark:border-b-[#393939] border-b-[#E6E6E6]",
                children: "Privacy Policy"
            }),
            !!data.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "font-bold font-[16px] leading-[24px] dark:text-white opacity-80 pt-[20px] pb-[24px] lg:pb-[32px]",
                            children: data[0]?.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "ck-content text-[#000000] font-normal text-[14px] dark:text-[#ffffff]",
                            dangerouslySetInnerHTML: {
                                __html: `${data[0]?.content}`
                            }
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomerServicePrivacyPolice);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 80988:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "g": () => (/* binding */ capitalFirstLetter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20843);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54553);
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72170);
/* harmony import */ var _CustomerServiceQAForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56836);
/* harmony import */ var _icons_ReplyQAIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96448);
/* harmony import */ var _icons_NewIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(89457);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_7__, _Accordion__WEBPACK_IMPORTED_MODULE_9__, _CustomerServiceQAForm__WEBPACK_IMPORTED_MODULE_10__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_7__, _Accordion__WEBPACK_IMPORTED_MODULE_9__, _CustomerServiceQAForm__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const capitalFirstLetter = (word)=>{
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalized;
};
function CustomerServiceQA() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { tabActiveQA , dataQA: { data  } ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .CG)((state)=>state.customerService);
    const { myProfile: { userProfile  } ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .CG)((state)=>state.profile);
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .TL)();
    const [getCheckAnswer] = _services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_8__/* ["default"].useLazyGetCheckAnswerQuery */ .Z.useLazyGetCheckAnswerQuery();
    const [getQA] = _services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_8__/* ["default"].useLazyGetQAQuery */ .Z.useLazyGetQAQuery();
    const { qaId  } = router.query;
    const listTabs = [
        {
            id: 1,
            label: "submit a request",
            value: "submit"
        },
        {
            id: 2,
            label: "my previous queries",
            value: "previous"
        }, 
    ];
    const renderStatus = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((status)=>{
        return status === "pending" || status === "processing" || status === "automated_reply" ? "Waiting" : "Completion";
    }, []);
    const handleGetCheckAnswer = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(async (item)=>{
        if (item.res.length !== 0 && (item.responseCheckTime === null || moment__WEBPACK_IMPORTED_MODULE_2___default()(item.responseCheckTime) <= moment__WEBPACK_IMPORTED_MODULE_2___default()(item.res[item.res.length - 1].responseCompletedTime))) {
            await getCheckAnswer(item.id);
            await getQA({
                limit: undefined,
                page: undefined
            });
        }
    }, [
        getCheckAnswer,
        getQA
    ]);
    const isCheckAnswer = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        const qaNotChecked = data.find((item)=>(item.responseCheckTime === null || moment__WEBPACK_IMPORTED_MODULE_2___default()(item.responseCheckTime) <= moment__WEBPACK_IMPORTED_MODULE_2___default()(item.res[item.res.length - 1]?.responseCompletedTime)) && item.res.length);
        if (qaNotChecked) return true;
        else return false;
    }, [
        data
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("lg:px-[30px] px-[20px] pt-[25px] lg:pb-[44px]", "pb-[25px] dark:bg-[#232323] bg-[#FFFFFF] rounded-[10px]", "relative h-auto"),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "font-semibold dark:text-white text-[20px] border-b leading-[30px] pb-[10px] dark:border-b-[#393939] border-b-[#E6E6E6]",
                    children: "1:1 Q&A"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:py-[24px] py-[19px] border-b-[2px] dark:border-b-[#919191] border-b-[#000000] flex gap-[10px] uppercase",
                    children: listTabs.map((tab)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("lg:px-[18px] lg:py-[10px] px-[10px] py-[6px] relative", "dark:bg-[#4E5156] bg-[#F1F1F1] text-center rounded-[8px]", "dark:text-[#898989] text-[#787878] font-bold text-[12px] leading-[16px] cursor-pointer", {
                                "!bg-[#00A0F2] !text-[#FFFFFF]": tabActiveQA === tab.value
                            }),
                            onClick: ()=>dispatch(_features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_6__/* .customerServiceAction.setActiveTabQA */ .RH.setActiveTabQA(tab.value)),
                            children: [
                                tab.label,
                                tab.value === "previous" && isCheckAnswer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute top-0 right-0 -mt-2 -mr-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_NewIcon__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                                })
                            ]
                        }, tab.label);
                    })
                }),
                tabActiveQA === "previous" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "qanda",
                    children: data.map((qa, index)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Accordion__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            idNode: "qanda",
                            title: qa.title,
                            itemDetail: qa,
                            isButtonUpdate: false,
                            isRolling: false,
                            handleClickRowAccordion: handleGetCheckAnswer,
                            rightNode: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("font-semibold text-[16px] leading-[22px] text-[#00A0F2] lg:block", {
                                    "!text-[#D72E33]": qa.res.length && (qa.res[0].status === "complete" || qa.res[0].status === "complete_add")
                                }),
                                children: renderStatus(qa?.res?.length && qa.res[0].status || "processing")
                            }),
                            expand: qaId ? qa.id === Number(qaId) : false,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col lg:grid lg:grid-cols-[1fr_20fr] bg-[#000000]/[5%] dark:bg-[#FFFFFF]/[5%] px-[16px] py-[24px] gap-y-3",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "relative mb-2 lg:mb-0 lg:self-center rounded-[50%] bg-black/60 dark:bg-white/60 text-white dark:text-white/90 font-bold flex items-center justify-center w-[40px] h-[40px]",
                                            children: [
                                                userProfile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: userProfile.email.slice(0, 1).toUpperCase()
                                                }),
                                                qa.res.length !== 0 && (qa.responseCheckTime === null || moment__WEBPACK_IMPORTED_MODULE_2___default()(qa.responseCheckTime) <= moment__WEBPACK_IMPORTED_MODULE_2___default()(qa.res[qa.res.length - 1]?.responseCompletedTime)) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "absolute top-0 right-0 -mt-1 -mr-3",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_NewIcon__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-[#000000] dark:text-[#ffffff] font-bold text-[16px] ck-content flex items-center",
                                                    dangerouslySetInnerHTML: {
                                                        __html: qa.description
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "font-normal text-[#000000]/[50%] dark:text-[#FFFFFF]/[50%] text-[12px] pt-[4px]",
                                                    children: qa.createdAt && moment__WEBPACK_IMPORTED_MODULE_2___default()(qa.createdAt).format("MMMM DD, YYYY, HH:mm")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex gap-2",
                                            children: qa.files?.length > 0 && qa.files.map((image, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    src: image,
                                                    width: 150,
                                                    height: 150,
                                                    alt: "images-question"
                                                }, `imageDemo-${index}`))
                                        })
                                    ]
                                }),
                                qa.res.map((item, index)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex flex-col lg:grid lg:grid-cols-[1fr_20fr] dark:bg-[#393939] bg-[#00A0F2]/[5%] py-[24px] px-[16px]", {
                                            "border-t border-dashed dark:border-white/20": index !== 0
                                        }),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: index === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mb-2 lg:mb-0 lg:self-center rounded-[50%] bg-[#00A0F2] text-white dark:text-white/90 font-bold flex items-center justify-center w-[40px] h-[40px]",
                                                    children: item.admin && item.admin.username.slice(0, 1).toUpperCase()
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "bg-none w-[40px] h-[40px] -ml-1 -mt-2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ReplyQAIcon__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "qa-answer font-normal text-[16px] dark:text-[#ffffff] text-[#000000]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: item.response || ""
                                                        },
                                                        className: "ck-content"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex gap-2",
                                                        children: item.files.length > 0 && item.files.map((image, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                src: image,
                                                                width: 150,
                                                                height: 150,
                                                                alt: "images-answer-question"
                                                            }, `imageRes-${index}`))
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "font-normal text-[#000000]/[50%] dark:text-[#FFFFFF]/[50%] text-[12px] pt-[4px]",
                                                        children: item.updatedAt && moment__WEBPACK_IMPORTED_MODULE_2___default()(item.updatedAt).format("MMMM DD, YYYY, HH:mm")
                                                    })
                                                ]
                                            })
                                        ]
                                    }, `qa-${index}`);
                                })
                            ]
                        }, index);
                    })
                }),
                tabActiveQA === "submit" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomerServiceQAForm__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomerServiceQA);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56836:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85277);
/* harmony import */ var _bases_SelectBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31114);
/* harmony import */ var _features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20843);
/* harmony import */ var _bases_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36332);
/* harmony import */ var _bases_TextBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3828);
/* harmony import */ var _bases_UploadInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73207);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60088);
/* harmony import */ var _SingleUploadImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54625);
/* harmony import */ var _services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54553);
/* harmony import */ var _features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85750);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(53450);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_2__, _bases_SelectBox__WEBPACK_IMPORTED_MODULE_3__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_2__, _bases_SelectBox__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function CustomerServiceQAForm() {
    const { categoryList , dataSubmit  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .CG)((state)=>state.customerService);
    const { 0: filePitch , 1: setFilePitch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .TL)();
    const [uploadQA] = _services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_11__/* ["default"].useLazyUploadQAQuery */ .Z.useLazyUploadQAQuery();
    const { 0: isDirty , 1: setIsDirty  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleChangeValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value, key)=>{
        dispatch(_features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_4__/* .customerServiceAction.setDataSubmit */ .RH.setDataSubmit({
            ...dataSubmit,
            [key]: value
        }));
    }, [
        dataSubmit,
        dispatch
    ]);
    const optionCategoryList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!categoryList.length) return [];
        return categoryList.map((category)=>{
            return {
                label: category.title,
                value: String(category.id)
            };
        });
    }, [
        categoryList
    ]);
    const onUpload = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((listPath)=>{
        setIsLoading(false);
        setFilePitch((curr)=>curr.map((fw)=>{
                const file = listPath.find((file)=>file.file === fw.file);
                return file ? {
                    ...fw,
                    url: file.url
                } : {
                    ...fw
                };
            }));
    }, []);
    const clean = (obj)=>{
        for(const propName in obj){
            if (obj[propName] === null || obj[propName] === undefined) {
                delete obj[propName];
            }
        }
        return obj;
    };
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        const files = filePitch.map((file)=>{
            return `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL?.replace("/public", "")}/${file.url}`;
        });
        const dataQA = {
            ...dataSubmit,
            files: files.length ? files : null
        };
        const dataPost = clean(dataQA);
        try {
            const res = await uploadQA(dataPost);
            if (res.data?.message === "Success") {
                setFilePitch([]);
                dispatch(_features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_4__/* .customerServiceAction.setDataSubmit */ .RH.setDataSubmit({
                    ...dataSubmit,
                    title: "",
                    description: "",
                    files: []
                }));
                dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_12__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                    type: "success",
                    title: "Upload successfully.",
                    description: "Your questions is noted!"
                }));
            }
        } catch (error) {
            dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_12__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                type: "danger",
                title: "Upload unsuccessfully.",
                description: "Oops! Something went wrong!"
            }));
            return null;
        }
    }, [
        dataSubmit,
        dispatch,
        filePitch,
        uploadQA
    ]);
    const onDelete = (url)=>{
        setFilePitch((curr)=>curr.filter((file)=>file.url !== url));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch(_features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_4__/* .customerServiceAction.setDataSubmit */ .RH.setDataSubmit({
            ...dataSubmit,
            customerServiceCategoryId: categoryList.length ? categoryList[0]?.id : null
        }));
    }, [
        dispatch,
        categoryList
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isDirty) return;
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_13__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/warning-upload-image",
            propsState: {
                setIsDirty
            }
        }));
    }, [
        dispatch,
        isDirty
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pb-[24px]",
                children: !!optionCategoryList.length && dataSubmit.customerServiceCategoryId && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-[16px] dark:text-[#FFFFFF] font-normal pt-[16px] pb-[8px]",
                            children: "How can we help?"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_SelectBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            options: optionCategoryList,
                            defaultValue: String(dataSubmit.customerServiceCategoryId),
                            disabled: optionCategoryList.length === 1,
                            customClassName: "w-full",
                            onChange: (value)=>handleChangeValue(value, "customerServiceCategoryId")
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "pb-[24px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-[16px] dark:text-[#FFFFFF] font-normal pb-[8px]",
                        children: [
                            "Subject ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-[#EE312F]",
                                children: "*"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Input__WEBPACK_IMPORTED_MODULE_5__/* .Input */ .I, {
                        className: "w-full border-[2px]",
                        placeholder: "Please enter a title",
                        maxLength: 255,
                        value: dataSubmit.title,
                        onChange: (e)=>handleChangeValue(e.target.value, "title")
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-[16px] dark:text-[#FFFFFF] font-normal pb-[8px]",
                children: [
                    "Description ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-[#EE312F]",
                        children: "*"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_TextBox__WEBPACK_IMPORTED_MODULE_6__/* .TextArea */ .K, {
                className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("w-full h-[300px] pb-[8px]"),
                placeholder: "Please enter your question",
                value: dataSubmit.description,
                onChange: (e)=>handleChangeValue(e.target.value, "description")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-[14px] font-normal dark:text-[#FFFFFF]/[40%] pb-[24px] text-[#000000]/[40%]",
                children: "In order to best help, please enter as many details as you can. This should include troubleshooting steps you've already taken, as well as screenshots of any error messages."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-[16px] dark:text-[#FFFFFF] font-normal pb-[8px]",
                children: "Attachments(optional)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_UploadInput__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                isLoading: isLoading,
                setFiles: setFilePitch,
                files: filePitch,
                setIsDirty: setIsDirty
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SingleUploadImage__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                listFile: filePitch,
                onUpload: onUpload,
                onDelete: onDelete,
                updateLoading: (data)=>setIsLoading(data)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center items-center pt-[24px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z, {
                    className: "px-[44px] py-[9px] h-[40px] rounded-[10px] text-[16px] font-semibold btn-primary leading-[22px]",
                    disabled: !dataSubmit.description.trim() || !dataSubmit.title.trim() || isLoading,
                    onClick: ()=>handleSubmit(),
                    children: "Submit"
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomerServiceQAForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56060:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54553);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85277);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_3__]);
_hooks_common__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const CustomerServiceTermOfService = ()=>{
    const { dataResource: { data  } ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .CG)((state)=>state.customerService);
    const [getResource] = _services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_2__/* ["default"].useLazyGetResourceQuery */ .Z.useLazyGetResourceQuery();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getResource({
            type: "term"
        });
    }, [
        getResource
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "lg:px-[30px] px-[20px] pt-[25px] lg:pb-[44px] pb-[25px] dark:bg-[#232323] bg-[#FFFFFF] rounded-[10px] relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "font-semibold dark:text-white text-[20px] border-b leading-[30px] pb-[10px] dark:border-b-[#393939] border-b-[#E6E6E6]",
                children: "Term of Service"
            }),
            !!data.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "font-bold font-[16px] leading-[24px] dark:text-white opacity-80 pt-[20px] pb-[24px] lg:pb-[32px]",
                            children: data[0]?.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "ck-content text-[#000000] font-normal text-[14px] dark:text-[#ffffff]",
                            dangerouslySetInnerHTML: {
                                __html: `${data[0]?.content}`
                            }
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomerServiceTermOfService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96815:
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
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66790);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14613);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5178);
/* harmony import */ var _features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20843);
/* harmony import */ var _hooks_authentication__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49614);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7334);
/* harmony import */ var _CustomerServiceFAQ__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59630);
/* harmony import */ var _CustomerServiceNotifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(53721);
/* harmony import */ var _CustomerServicePrivacyPolice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(65693);
/* harmony import */ var _CustomerServiceQA__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(80988);
/* harmony import */ var _CustomerServiceTermOfService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56060);
/* harmony import */ var _WrongNetworkNotification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(18465);
/* harmony import */ var _bases_SelectBox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(31114);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_authentication__WEBPACK_IMPORTED_MODULE_8__, _hooks_common__WEBPACK_IMPORTED_MODULE_9__, _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_10__, _CustomerServiceFAQ__WEBPACK_IMPORTED_MODULE_11__, _CustomerServiceNotifications__WEBPACK_IMPORTED_MODULE_12__, _CustomerServicePrivacyPolice__WEBPACK_IMPORTED_MODULE_13__, _CustomerServiceQA__WEBPACK_IMPORTED_MODULE_14__, _CustomerServiceTermOfService__WEBPACK_IMPORTED_MODULE_15__, _WrongNetworkNotification__WEBPACK_IMPORTED_MODULE_16__, _bases_SelectBox__WEBPACK_IMPORTED_MODULE_17__]);
([_hooks_authentication__WEBPACK_IMPORTED_MODULE_8__, _hooks_common__WEBPACK_IMPORTED_MODULE_9__, _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_10__, _CustomerServiceFAQ__WEBPACK_IMPORTED_MODULE_11__, _CustomerServiceNotifications__WEBPACK_IMPORTED_MODULE_12__, _CustomerServicePrivacyPolice__WEBPACK_IMPORTED_MODULE_13__, _CustomerServiceQA__WEBPACK_IMPORTED_MODULE_14__, _CustomerServiceTermOfService__WEBPACK_IMPORTED_MODULE_15__, _WrongNetworkNotification__WEBPACK_IMPORTED_MODULE_16__, _bases_SelectBox__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const MyCostumerService = ({ className  })=>{
    const contextWeb3 = (0,_hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_10__/* .useWeb3Activity */ .E)();
    const { account , isSupportedNetwork , isConnected  } = (0,_hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_10__/* .useConnectWallet */ .O)();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).state;
    const { tabSelected , notification: { myActivitiesFilter , filters , idItemDetail  } , dataResource ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppSelector */ .CG)((state)=>state.customerService);
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppDispatch */ .TL)();
    const bAuthenticated = (0,_hooks_authentication__WEBPACK_IMPORTED_MODULE_8__/* .useAuthentication */ .J)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { tab , qaId  } = router.query;
    const tabOptionsDesktop = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>[
            {
                name: "notifications",
                label: lang["customer-service/notifications"] || "",
                value: _constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.HELP_NOTIFICATIONS */ .Yj.HELP_NOTIFICATIONS
            },
            {
                name: "faq",
                label: lang["customer-service/faq"] || "",
                value: _constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.HELP_TAB */ .Yj.HELP_TAB
            },
            {
                name: "qa",
                label: lang["customer-service/1_1_q_and_a"] || "",
                value: _constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.HELP_QA */ .Yj.HELP_QA
            },
            {
                name: "term_of_service",
                label: lang["customer-service/term_of_service"] || "",
                value: _constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.HELP_TERM_OF_SERVICE */ .Yj.HELP_TERM_OF_SERVICE
            },
            {
                name: "privacy_policy",
                label: lang["customer-service/privacy_policy"] || "",
                value: _constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.HELP_PRIVACY_POLICY */ .Yj.HELP_PRIVACY_POLICY
            }, 
        ], [
        lang
    ]);
    const tabOptionsMobile = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>[
            {
                name: "notifications",
                label: lang["customer-service/notifications-mobile"] || "",
                value: _constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.HELP_NOTIFICATIONS */ .Yj.HELP_NOTIFICATIONS
            },
            {
                name: "faq",
                label: lang["customer-service/faq"] || "",
                value: _constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.HELP_TAB */ .Yj.HELP_TAB
            },
            {
                name: "qa",
                label: lang["customer-service/1_1_q_and_a"] || "",
                value: _constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.HELP_QA */ .Yj.HELP_QA
            },
            {
                name: "term_of_service",
                label: lang["customer-service/term_of_service-mobile"] || "",
                value: _constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.HELP_TERM_OF_SERVICE */ .Yj.HELP_TERM_OF_SERVICE
            },
            {
                name: "privacy_policy",
                label: lang["customer-service/privacy_policy-mobile"] || "",
                value: _constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.HELP_PRIVACY_POLICY */ .Yj.HELP_PRIVACY_POLICY
            }, 
        ], [
        lang
    ]);
    const handleSelectTab = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((tab)=>{
        if (tab === "/help?tab=qa" && !bAuthenticated) {
            dispatch(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_6__/* .authActions.setPreviousRoute */ .Y.setPreviousRoute("/help?tab=qa"));
            router.push("/login");
        } else {
            router.push(tab);
        }
    }, [
        bAuthenticated,
        dispatch,
        router
    ]);
    const renderTabs = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((item, index)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("pb-3 flex flex-row items-center font-bold cursor-pointer whitespace-nowrap text-base", "snap-center", tab === item.name || !tab && item.name === "notifications" ? "text-black dark:text-white border-b-[4px] border-black dark:border-white" : "text-black/50 dark:text-[#595B5F]"),
            onClick: ()=>{
                handleSelectTab(item.value);
                dispatch(_features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_7__/* .customerServiceAction.setIdItemDetail */ .RH.setIdItemDetail(null));
            },
            children: item.label
        }, index);
    }, [
        dispatch,
        handleSelectTab,
        tab
    ]);
    const renderAlerts = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (!isConnected) return;
        if (isSupportedNetwork) return;
        if (!account) return;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WrongNetworkNotification__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            contextWeb3: contextWeb3
        });
    }, [
        account,
        contextWeb3,
        isConnected,
        isSupportedNetwork
    ]);
    const renderDomainByTab = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        switch(tab){
            case "term_of_service":
                {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomerServiceTermOfService__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {});
                }
            case "privacy_policy":
                {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomerServicePrivacyPolice__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {});
                }
            case "faq":
                {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomerServiceFAQ__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {});
                }
            case "qa":
                {
                    return bAuthenticated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomerServiceQA__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
                }
            default:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomerServiceNotifications__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {});
        }
    }, [
        bAuthenticated,
        tab
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        dispatch(_features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_7__/* .customerServiceAction.setActivityFilter */ .RH.setActivityFilter({
            ...myActivitiesFilter,
            to: "",
            from: ""
        }));
        dispatch(_features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_7__/* .customerServiceAction.handleProfileChangeFilter */ .RH.handleProfileChangeFilter({
            ...filters,
            take: 10,
            page: 1
        }));
        dispatch(_features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_7__/* .customerServiceAction.setActiveTabQA */ .RH.setActiveTabQA(!qaId ? "submit" : "previous"));
        dispatch(_features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_7__/* .customerServiceAction.handleResetState */ .RH.handleResetState({
            ...dataResource,
            data: []
        }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        dispatch,
        tab
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (idItemDetail) return;
        dispatch(_features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_7__/* .customerServiceAction.resetNotificationDetail */ .RH.resetNotificationDetail(null));
    }, [
        dispatch,
        idItemDetail
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (tab) {
            const pathRoute = router.asPath.replace("/help/", "/help");
            dispatch(_features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_7__/* .customerServiceAction.handleSelectTab */ .RH.handleSelectTab(pathRoute || ""));
        }
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("lg:h-full flex flex-col", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-black/50 dark:text-white/50 bg-white dark:bg-[#232323] lg:!bg-transparent", "hidden lg:flex flex-row gap-8 items-center border-b-[1px] dark:border-white/10 border-black/6", "w-full lg:w-auto select-none mb-9"),
                children: tabOptionsDesktop.map((item, index)=>renderTabs(item, index))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_SelectBox__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                onChange: (value)=>handleSelectTab(value),
                defaultValue: tabSelected,
                options: tabOptionsMobile,
                customClassName: "mb-5 lg:hidden"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full lg:h-full flex flex-col",
                children: [
                    renderAlerts(),
                    renderDomainByTab()
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyCostumerService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_SingleUploadImage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./app/services/query/endpoints/resource.ts
var resource = __webpack_require__(54553);
// EXTERNAL MODULE: ./app/components/bases/Icon.tsx
var Icon = __webpack_require__(74142);
;// CONCATENATED MODULE: ./app/components/icons/CloseXIcon.tsx



function CloseXIcon({ className  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
        className: className,
        viewBoxWidth: 14,
        viewBoxHeight: 14,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M7.82238 6.99999L11.4974 3.33082C11.6072 3.22098 11.6689 3.072 11.6689 2.91665C11.6689 2.76131 11.6072 2.61233 11.4974 2.50249C11.3875 2.39264 11.2386 2.33093 11.0832 2.33093C10.9279 2.33093 10.7789 2.39264 10.6691 2.50249L6.99988 6.17749L3.33072 2.50249C3.22087 2.39264 3.07189 2.33093 2.91655 2.33093C2.76121 2.33093 2.61223 2.39264 2.50238 2.50249C2.39254 2.61233 2.33083 2.76131 2.33083 2.91665C2.33083 3.072 2.39254 3.22098 2.50238 3.33082L6.17738 6.99999L2.50238 10.6692C2.44771 10.7234 2.40431 10.7879 2.3747 10.859C2.34508 10.9301 2.32983 11.0063 2.32983 11.0833C2.32983 11.1603 2.34508 11.2366 2.3747 11.3077C2.40431 11.3787 2.44771 11.4433 2.50238 11.4975C2.55661 11.5522 2.62113 11.5956 2.69221 11.6252C2.7633 11.6548 2.83954 11.67 2.91655 11.67C2.99356 11.67 3.0698 11.6548 3.14089 11.6252C3.21197 11.5956 3.27649 11.5522 3.33072 11.4975L6.99988 7.82249L10.6691 11.4975C10.7233 11.5522 10.7878 11.5956 10.8589 11.6252C10.93 11.6548 11.0062 11.67 11.0832 11.67C11.1602 11.67 11.2365 11.6548 11.3076 11.6252C11.3786 11.5956 11.4432 11.5522 11.4974 11.4975C11.5521 11.4433 11.5955 11.3787 11.6251 11.3077C11.6547 11.2366 11.6699 11.1603 11.6699 11.0833C11.6699 11.0063 11.6547 10.9301 11.6251 10.859C11.5955 10.7879 11.5521 10.7234 11.4974 10.6692L7.82238 6.99999Z"
        })
    });
}
/* harmony default export */ const icons_CloseXIcon = (CloseXIcon);

;// CONCATENATED MODULE: ./app/components/SingleUploadImage.tsx






function SingleUploadImage({ listFile , onUpload , url , onDelete , updateLoading  }) {
    const [uploadFile] = resource/* default.useUploadImageMutation */.Z.useUploadImageMutation();
    const { 0: currentLengthOfFile , 1: setCurrentLengthOfFile  } = (0,external_react_.useState)(0);
    const handleUploadFile = (0,external_react_.useCallback)(async ()=>{
        if (listFile.length > 0 && listFile.length !== currentLengthOfFile) {
            updateLoading && updateLoading(true);
            setCurrentLengthOfFile(listFile.length);
            const listFileNotUploaded = listFile.filter((ele)=>!ele.url);
            const response = await Promise.all(listFileNotUploaded.map(async (file)=>{
                const formData = new FormData();
                formData.append("image", file.file);
                const params = {
                    folder: "customer",
                    formData: formData
                };
                return await uploadFile(params);
            }));
            if (response && response.length > 0) {
                const cloneArr = response.map((ele, index)=>{
                    return {
                        url: ele.data?.data.path,
                        file: listFileNotUploaded[index].file
                    };
                });
                onUpload && onUpload([
                    ...cloneArr
                ]);
            }
        }
    }, [
        listFile,
        uploadFile,
        currentLengthOfFile,
        onUpload,
        updateLoading
    ]);
    const handleDeleteFile = (0,external_react_.useCallback)((file)=>{
        onDelete && onDelete(file.url);
        setCurrentLengthOfFile(listFile.length - 1);
    }, [
        listFile.length,
        onDelete
    ]);
    (0,external_react_.useEffect)(()=>{
        handleUploadFile();
    }, [
        listFile
    ]);
    // useEffect(() => {
    //     if (file) {
    //         const upload = async () => {
    //             try {
    //                 const formData = new FormData();
    //                 formData.append("image", file);
    //                 const params: TParamsUploadImage = {
    //                     folder: "customer",
    //                     formData: formData,
    //                 };
    //                 const res: any = await uploadFile(params);
    //                 onUpload && res.data?.data.path && onUpload(file, res.data?.data.path);
    //             } catch (error) {
    //                 return null;
    //             }
    //         };
    //         upload();
    //     }
    // }, [file, uploadFile]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-wrap items-center flex-col lg:flex-row gap-[5px] pt-[8px]",
        children: listFile.map((file, index)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: file.url ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "bg-[#000000]/[10%] flex items-center dark:bg-[#ffffff]/[10%] py-[2px] px-[10px] text-[12px] font-normal dark:text-[#ffffff]/[70%] text-[#000000]/[70%] justify-between gap-[20px] rounded-[5px] w-full lg:w-auto ",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: file.file.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: ()=>handleDeleteFile(file),
                            className: "cursor-pointer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icons_CloseXIcon, {
                                className: "w-[14px] h-[14px]"
                            })
                        })
                    ]
                }, index) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-[#000000]/[10%] py-[2px] px-[10px] dark:bg-[#ffffff]/[10%] rounded-[5px] flex flex-col justify-center items-center h-full mt-10 lg:mt-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-[15px] h-[15px] animate-spin rounded-full border-4 border-white border-t-4 border-t-red-500"
                    })
                })
            }))
    });
}
/* harmony default export */ const components_SingleUploadImage = (SingleUploadImage);


/***/ }),

/***/ 3828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ TextArea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const TextArea = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef(({ className , ...props }, ref)=>{
    const renderContent = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
            ref: ref,
            placeholder: props.placeholder,
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "font-input outline-none appearance-none", "bg-transparent rounded-lg py-2 px-[14px]", "input-normal", "placeholder:text-[16px]", "placeholder:font-normal dark:caret-white", "text-black border-black/10 placeholder:text-black/30 focus:border-black", "disabled:border-black/10 disabled:bg-gray-f1", "dark:text-white dark:border-white/10 dark:focus:border-white/70 dark:placeholder:text-white/30"),
            ...props
        });
    }, [
        className,
        props,
        ref
    ]);
    return renderContent();
});
TextArea.displayName = "TextArea";


/***/ }),

/***/ 73207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ bases_UploadInput)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(59003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: external "react-dropzone"
const external_react_dropzone_namespaceObject = require("react-dropzone");
// EXTERNAL MODULE: ./app/contexts/AppContext.ts
var AppContext = __webpack_require__(14613);
;// CONCATENATED MODULE: ./app/components/bases/UploadInput.tsx







const UploadInput = ({ className , setFiles , files , setIsDirty , isLoading  })=>{
    const { 0: error , 1: setError  } = (0,external_react_.useState)();
    const { lang  } = (0,external_react_.useContext)(AppContext/* default */.Z).state;
    const onDrop = (0,external_react_.useCallback)((acceptedFiles)=>{
        const acceptedFilesArr = acceptedFiles.filter((file)=>{
            const size = parseFloat((file.size / (1024 * 1024)).toFixed(2));
            if (size > 10) {
                setIsDirty && setIsDirty(true);
            }
            return size <= 10;
        });
        const acceptedFilesData = acceptedFilesArr.map((file)=>({
                file,
                url: ""
            }));
        const listFilesAfterFilter = [
            ...files,
            ...acceptedFilesData
        ].filter((_, index)=>index < 10);
        setFiles(listFilesAfterFilter);
        setError(files.length >= 10 || acceptedFilesData.length > 10 ? lang["error/maximum-img"] : "");
    }, [
        files,
        setFiles,
        setIsDirty,
        lang
    ]);
    const { getInputProps , getRootProps , fileRejections  } = (0,external_react_dropzone_namespaceObject.useDropzone)({
        onDrop,
        accept: {
            "image/jpeg": [
                ".jpg",
                ".jpeg"
            ],
            "image/png": [
                ".png"
            ]
        }
    });
    (0,external_react_.useEffect)(()=>{
        if (fileRejections.length) {
            setIsDirty && setIsDirty(true);
        }
    }, [
        fileRejections,
        setIsDirty
    ]);
    (0,external_react_.useEffect)(()=>{
        if (!files.length) {
            setError("");
        }
    }, [
        files
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    ...getRootProps({
                        maxfiles: 1
                    }),
                    className: external_classnames_default()(className, "w-full px-[16px] py-[12px] cursor-text", "border-[2px] border-[#000000]/[10%] dark:border-[#FFFFFF]/[20%]  rounded-[8px]", "dark:focus-within:border-white/70"),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            ...getInputProps()
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font-normal text-[16px] dark:text-[#FFFFFF]/[30%] text-[#000000]/[30%]",
                            children: "Add file or drop files here"
                        })
                    ]
                }),
                error && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-[#EE312F]",
                    children: error
                })
            ]
        })
    });
};
/* harmony default export */ const bases_UploadInput = (UploadInput);


/***/ }),

/***/ 12771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



function ArrowUpIcon({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        viewBoxHeight: 9,
        viewBoxWidth: 16,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.99992 0C8.26511 5.66374e-05 8.51943 0.105451 8.70692 0.293L15.7069 7.293C15.8891 7.4816 15.9899 7.7342 15.9876 7.9964C15.9853 8.2586 15.8801 8.50941 15.6947 8.69482C15.5093 8.88023 15.2585 8.9854 14.9963 8.98767C14.7341 8.98995 14.4815 8.88916 14.2929 8.707L7.99992 2.414L1.70692 8.707C1.51832 8.88916 1.26571 8.98995 1.00352 8.98767C0.741321 8.9854 0.490509 8.88023 0.305101 8.69482C0.119692 8.50941 0.0145233 8.2586 0.0122448 7.9964C0.00996641 7.7342 0.110761 7.4816 0.292919 7.293L7.29292 0.293C7.48041 0.105451 7.73472 5.66374e-05 7.99992 0Z"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowUpIcon);


/***/ }),

/***/ 33503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



function BackNotiIcon({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        viewBoxWidth: 14,
        viewBoxHeight: 14,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M12.4166 5.91671H4.19414L7.76914 2.35254C7.97313 2.14854 8.08774 1.87187 8.08774 1.58337C8.08774 1.29488 7.97313 1.0182 7.76914 0.814205C7.56514 0.610209 7.28846 0.495605 6.99997 0.495605C6.71148 0.495605 6.4348 0.610209 6.2308 0.814205L0.814136 6.23087C0.715508 6.3339 0.638196 6.45539 0.586636 6.58837C0.478283 6.85212 0.478283 7.14796 0.586636 7.41171C0.638196 7.54469 0.715508 7.66618 0.814136 7.76921L6.2308 13.1859C6.33151 13.2874 6.45133 13.368 6.58334 13.423C6.71536 13.478 6.85696 13.5063 6.99997 13.5063C7.14298 13.5063 7.28458 13.478 7.41659 13.423C7.54861 13.368 7.66843 13.2874 7.76914 13.1859C7.87068 13.0852 7.95127 12.9653 8.00627 12.8333C8.06127 12.7013 8.08958 12.5597 8.08958 12.4167C8.08958 12.2737 8.06127 12.1321 8.00627 12.0001C7.95127 11.8681 7.87068 11.7482 7.76914 11.6475L4.19414 8.08337H12.4166C12.704 8.08337 12.9795 7.96923 13.1827 7.76607C13.3858 7.56291 13.5 7.28736 13.5 7.00004C13.5 6.71272 13.3858 6.43717 13.1827 6.23401C12.9795 6.03084 12.704 5.91671 12.4166 5.91671Z"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackNotiIcon);


/***/ }),

/***/ 85298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



function BackToTop({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        viewBoxWidth: 24,
        viewBoxHeight: 24,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M12.71 8.29C12.6149 8.19896 12.5028 8.12759 12.38 8.08C12.1365 7.97998 11.8635 7.97998 11.62 8.08C11.4973 8.12759 11.3851 8.19896 11.29 8.29L8.29 11.29C8.1017 11.4783 7.99591 11.7337 7.99591 12C7.99591 12.2663 8.1017 12.5217 8.29 12.71C8.47831 12.8983 8.7337 13.0041 9 13.0041C9.26631 13.0041 9.5217 12.8983 9.71 12.71L11 11.41V15C11 15.2652 11.1054 15.5196 11.2929 15.7071C11.4804 15.8946 11.7348 16 12 16C12.2652 16 12.5196 15.8946 12.7071 15.7071C12.8946 15.5196 13 15.2652 13 15V11.41L14.29 12.71C14.383 12.8037 14.4936 12.8781 14.6154 12.9289C14.7373 12.9797 14.868 13.0058 15 13.0058C15.132 13.0058 15.2627 12.9797 15.3846 12.9289C15.5064 12.8781 15.617 12.8037 15.71 12.71C15.8037 12.617 15.8781 12.5064 15.9289 12.3846C15.9797 12.2627 16.0058 12.132 16.0058 12C16.0058 11.868 15.9797 11.7373 15.9289 11.6154C15.8781 11.4936 15.8037 11.383 15.71 11.29L12.71 8.29ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackToTop);


/***/ }),

/***/ 89457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const NewIcon = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "28",
        height: "28",
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                filter: "url(#filter0_d_2926_18281)",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        x: "4",
                        y: "2",
                        width: "20",
                        height: "20",
                        rx: "10",
                        fill: "#EE312F",
                        shapeRendering: "crispEdges"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M10.63 16V8.91H11.88L12.42 10.36V16H10.63ZM15.52 16L11.38 10.74L11.88 8.91L16.03 14.17L15.52 16ZM15.52 16L15.06 14.51V8.91H16.85V16H15.52Z",
                        fill: "white"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter0_d_2926_18281",
                    x: "0",
                    y: "0",
                    width: "28",
                    height: "28",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feColorMatrix", {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feOffset", {
                            dy: "2"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feGaussianBlur", {
                            stdDeviation: "2"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feComposite", {
                            in2: "hardAlpha",
                            operator: "out"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feColorMatrix", {
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feBlend", {
                            mode: "normal",
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow_2926_18281"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_dropShadow_2926_18281",
                            result: "shape"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewIcon);


/***/ }),

/***/ 96448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74142);


const ReplyQAIcon = ({ className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        className: className,
        viewBoxWidth: 42,
        viewBoxHeight: 42,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M12 28.5H11V29.5H12V28.5ZM32 28.5L22 22.7265V34.2735L32 28.5ZM11 14.5V28.5H13V14.5H11ZM12 29.5H23V27.5H12V29.5Z",
            fill: "#00A0F2"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReplyQAIcon);


/***/ }),

/***/ 54712:
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
/* harmony import */ var _app_components_MyCostumerService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96815);
/* harmony import */ var _app_services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54553);
/* harmony import */ var _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57636);
/* harmony import */ var _app_hooks_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85277);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_components_MyCostumerService__WEBPACK_IMPORTED_MODULE_2__, _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_4__, _app_hooks_common__WEBPACK_IMPORTED_MODULE_5__]);
([_app_components_MyCostumerService__WEBPACK_IMPORTED_MODULE_2__, _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_4__, _app_hooks_common__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function Help() {
    const [getCategoryList] = _app_services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useLazyGetCustomerServiceCategoriesIdQuery */ .Z.useLazyGetCustomerServiceCategoriesIdQuery();
    const [getQA] = _app_services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useLazyGetQAQuery */ .Z.useLazyGetQAQuery();
    const { tabActiveQA  } = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .CG)((state)=>state.customerService);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getCategoryList(undefined);
        getQA({
            limit: undefined,
            page: undefined
        });
    }, [
        getCategoryList,
        getQA
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        tabActiveQA === "previous" && getQA({
            limit: undefined,
            page: undefined
        });
    }, [
        getQA,
        tabActiveQA
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        title: "Help",
        description: "Help",
        bHeaderAlwaysOnTop: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "p-0 lg:py-6 px-0 lg:px-12 h-full box-border",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "px-6 pb-6 lg:px-12 lg:h-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_MyCostumerService__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    className: "pt-4 lg:pt-6 lg:px-12"
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Help);

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

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,5152,5277,8733,4969,5764,7636,2558,843], () => (__webpack_exec__(54712)));
module.exports = __webpack_exports__;

})();