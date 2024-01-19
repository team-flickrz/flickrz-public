"use strict";
exports.id = 6545;
exports.ids = [6545];
exports.modules = {

/***/ 10296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ TRADING_EVENT)
/* harmony export */ });
const TRADING_EVENT = {
    listing: "Listing",
    cancel_listing: "Cancel Listing",
    sold: "Sold",
    make_offer: "Make Offer",
    cancel_offer: "Cancel Offer",
    accept_offer: "Accept Offer"
};


/***/ }),

/***/ 52835:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14613);
/* harmony import */ var _features_marketplace_nftSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52114);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53450);
/* harmony import */ var _features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44523);
/* harmony import */ var _features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85750);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51897);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73732);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45700);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60088);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(61103);
/* harmony import */ var _icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7833);
/* harmony import */ var _icons_VariantIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(63662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_8__, _utils_common__WEBPACK_IMPORTED_MODULE_10__, _utils_format__WEBPACK_IMPORTED_MODULE_11__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_8__, _utils_common__WEBPACK_IMPORTED_MODULE_10__, _utils_format__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const BadgeCardPanel = ({ className  })=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_8__/* .useAppDispatch */ .TL)();
    const [handleUseBadge, responseUseBadge] = _services_query_endpoints_badge__WEBPACK_IMPORTED_MODULE_9__/* ["default"].useUseBadgeMutation */ .Z.useUseBadgeMutation();
    const [handleDisuseBadge, responseDisUseBadge] = _services_query_endpoints_badge__WEBPACK_IMPORTED_MODULE_9__/* ["default"].useDisuseBadgeMutation */ .Z.useDisuseBadgeMutation();
    const { badgeDetail  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_8__/* .useAppSelector */ .CG)((state)=>state.badge);
    const { badge , nft , user , userBadge  } = badgeDetail;
    const { myProfile: { userProfile  } ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_8__/* .useAppSelector */ .CG)((state)=>state.profile);
    const { offerList  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_8__/* .useAppSelector */ .CG)((state)=>state.history);
    const { 0: userOffer , 1: setUserOffer  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).state;
    const handleClickUseButton = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (event)=>{
        if (!userBadge?.id) return;
        event.preventDefault();
        const data = await handleUseBadge(userBadge?.id);
        dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_6__/* .collectionActions.resetCollectionState */ .X5.resetCollectionState());
        dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_6__/* .collectionActions.setCollectionFilters */ .X5.setCollectionFilters({
            page: 1
        }));
        dispatch(_features_marketplace_nftSlice__WEBPACK_IMPORTED_MODULE_4__/* .nftActions.setTimeStamp */ .k.setTimeStamp());
        if (data?.error?.data?.message) {
            dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_7__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                type: "danger",
                title: data?.error?.data?.message[0]
            }));
        }
    }, [
        userBadge?.id,
        handleUseBadge,
        dispatch
    ]);
    const handleClickDisUseButton = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (event)=>{
        if (!userBadge?.id) return;
        event.preventDefault();
        const data = await handleDisuseBadge(userBadge?.id);
        dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_6__/* .collectionActions.resetCollectionState */ .X5.resetCollectionState());
        dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_6__/* .collectionActions.setCollectionFilters */ .X5.setCollectionFilters({
            page: 1
        }));
        dispatch(_features_marketplace_nftSlice__WEBPACK_IMPORTED_MODULE_4__/* .nftActions.setTimeStamp */ .k.setTimeStamp());
        if (data?.error?.data?.message) {
            dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_7__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                type: "danger",
                title: data?.error?.data?.message[0]
            }));
        }
    }, [
        dispatch,
        handleDisuseBadge,
        userBadge?.id
    ]);
    const handleOpenConfirmPurchaseModal = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_5__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/confirm-badge-purchase",
            propsState: badgeDetail
        }));
    }, [
        dispatch,
        badgeDetail
    ]);
    const handleOpenMakeOfferModal = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_5__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/make-badge-offer",
            propsState: badgeDetail
        }));
    }, [
        badgeDetail,
        dispatch
    ]);
    const handleOpenConfirmSellingModal = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_5__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/selling-badge",
            propsState: badgeDetail
        }));
    }, [
        dispatch,
        badgeDetail
    ]);
    const handleOpenAbortSellingModal = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_5__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/abort-selling",
            propsState: {
                id: nft?.id,
                nftType: "Badge"
            }
        }));
    }, [
        dispatch,
        nft?.id
    ]);
    const handleOpenCancelOfferModal = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_5__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/cancel-offer",
            propsState: {
                ...userOffer,
                nftId: nft?.id,
                type: "Badge"
            }
        }));
    }, [
        dispatch,
        nft?.id,
        userOffer
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!userProfile?.id) return;
        const offerOfUser = offerList?.find((item)=>item.user.id === userProfile?.id);
        setUserOffer(offerOfUser);
    }, [
        offerList,
        userProfile?.id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (responseUseBadge.isSuccess) {
            dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_7__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                type: "success",
                title: "Update successfully.",
                description: `${badge?.name} is being used`
            }));
        }
    }, [
        responseUseBadge.isSuccess,
        dispatch,
        badge?.name
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (responseDisUseBadge.isSuccess) {
            dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_7__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                type: "success",
                title: "Update successfully.",
                description: `${badge?.name} is not being used`
            }));
        }
    }, [
        responseDisUseBadge.isSuccess,
        dispatch,
        badge?.name
    ]);
    const renderButtonComponent = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (userProfile?.id && user?.id === userProfile?.id) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: nft?.status === "on_sale" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_12__/* .Button */ .z, {
                    className: "contained-primary w-full mt-8",
                    onClick: handleOpenAbortSellingModal,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: lang["comp/abort-selling-on-market"]
                    })
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        userBadge?.status === "disuse" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_12__/* .Button */ .z, {
                                    className: "contained-primary w-full mt-8 stroke-primary-btn flex gap-2 justify-center",
                                    onClick: handleOpenConfirmSellingModal,
                                    disabled: nft?.status === "claim",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: lang["button/selling-on-market"]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_12__/* .Button */ .z, {
                                    className: "contained-secondary w-full mt-4",
                                    onClick: handleClickUseButton,
                                    disabled: nft?.status === "claim",
                                    children: lang["button/use"]
                                })
                            ]
                        }),
                        userBadge?.status === "use" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_12__/* .Button */ .z, {
                                    disabled: true,
                                    className: "contained-primary w-full mt-8",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: lang["comp/abort-selling-on-market"]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_12__/* .Button */ .z, {
                                    className: "contained-secondary w-full mt-4",
                                    onClick: handleClickDisUseButton,
                                    children: lang["button/disuse"]
                                })
                            ]
                        })
                    ]
                })
            });
        } else {
            if (!(nft?.status === "on_sale")) return;
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_12__/* .Button */ .z, {
                        className: "contained-primary w-full mt-8 stroke-primary-btn",
                        onClick: handleOpenConfirmPurchaseModal,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "ml-2",
                                children: [
                                    lang["comp/buy-with"],
                                    " ",
                                    (0,_utils_format__WEBPACK_IMPORTED_MODULE_11__/* .formatIntBalance */ .qQ)(nft?.price),
                                    " ",
                                    (0,_utils_common__WEBPACK_IMPORTED_MODULE_10__/* .getTokenName */ ._M)(nft?.token || "")
                                ]
                            })
                        ]
                    }),
                    nft?.availableOffer ? userOffer ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_12__/* .Button */ .z, {
                        className: "contained-secondary w-full mt-4 fill-secondary-btn",
                        onClick: handleOpenCancelOfferModal,
                        disabled: !nft?.availableOffer,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_VariantIcon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "ml-2",
                                children: lang["button/cancel-offer"]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_12__/* .Button */ .z, {
                        className: "contained-secondary w-full mt-4 fill-secondary-btn",
                        onClick: handleOpenMakeOfferModal,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_VariantIcon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "ml-2",
                                children: lang["button/make-an-offer"]
                            })
                        ]
                    }) : null
                ]
            });
        }
    }, [
        handleClickDisUseButton,
        handleClickUseButton,
        handleOpenAbortSellingModal,
        handleOpenCancelOfferModal,
        handleOpenConfirmPurchaseModal,
        handleOpenConfirmSellingModal,
        handleOpenMakeOfferModal,
        lang,
        nft?.availableOffer,
        nft?.price,
        nft?.status,
        nft?.token,
        user?.id,
        userBadge?.status,
        userOffer,
        userProfile?.id, 
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        className: `!rounded-none md:!rounded-[10px] relative px-2 pb-10 h-fit ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("rounded-xl md:rounded-[10px] h-[337px] lg:h-[522px] w-full", "-mt-28 lg:mt-0", "bg-cover bg-no-repeat bg-center md:rounded-b-none"),
                style: {
                    backgroundImage: `url(${nft?.imageUrl})`
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "px-[20px] lg:px-[30px] mt-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row items-start justify-between mb-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-h3 leading-[30px] font-semibold dark:text-white",
                                children: badge?.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row items-center right-0 gap-3 flex-wrap justify-end",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-[#EEEEEE] dark:bg-white/10 rounded-full py-1 px-3 font-bold text-black dark:text-white text-h9 h-fit",
                                        children: [
                                            "#",
                                            nft?.id
                                        ]
                                    }),
                                    userProfile?.id && user?.id === userProfile?.id && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            nft?.status === "on_sale" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "py-1 px-2 flex flex-row items-center rounded-md bg-secondary-1 gap-1",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-white text-h9 font-semibold",
                                                        children: `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_11__/* .formatIntBalance */ .qQ)(nft?.price)} ${(0,_utils_common__WEBPACK_IMPORTED_MODULE_10__/* .getTokenName */ ._M)(nft?.token)}`
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-4 h-4",
                                                        children: (0,_utils_common__WEBPACK_IMPORTED_MODULE_10__/* .getTokenIcon */ .YX)(nft?.token)
                                                    })
                                                ]
                                            }),
                                            nft?.status === "claim" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-caption-3 py-1 px-2 bg-secondary-2 rounded-md ml-1 text-white",
                                                children: lang["comp/in-claim-request"]
                                            }),
                                            nft?.status !== "on_sale" && userBadge?.status === "use" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "py-1 px-3 flex flex-row items-center rounded-full bg-[#EE312F] gap-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-white text-h9 font-semibold",
                                                    children: lang["status/in-use"]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    renderButtonComponent()
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BadgeCardPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39068:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14613);
/* harmony import */ var _icons_HexagonIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68069);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85277);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73732);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_5__, _utils_common__WEBPACK_IMPORTED_MODULE_6__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_5__, _utils_common__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const BadgeDetailPanel = ({ className  })=>{
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).state;
    const { badgeDetail  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .CG)((state)=>state.badge);
    const { badge  } = badgeDetail;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex flex-col gap-4 bg-[#ffffff] dark:bg-[#232323] !rounded-none md:!rounded-2xl px-5 py-3", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-h6 font-semibold text-black dark:text-white",
                children: lang["rte/stats"]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex flex-row justify-between border dark:border-white/30 rounded-[10px] p-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-[35px] h-[32px] relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_HexagonIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        className: "fill-[#46B4F2]"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-white font-black left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] absolute",
                                        children: "B"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "px-3 font-semibold text-[14px] md:text-[16px] text-black/70 dark:text-white/70 self-center",
                                children: lang["stats/benefit"]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-h7 font-semibold text-black dark:text-white/90 flex items-center text-[18px] md:text-[20px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-[#46B4F2]",
                                children: `${Number(badge?.benefitAmount)}%`
                            }),
                            " ",
                            "\xa0",
                            `Bonus ${(0,_utils_common__WEBPACK_IMPORTED_MODULE_6__/* .getBenefitType */ .wc)(badge?.benefitType)}`
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BadgeDetailPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2606:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14613);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17827);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73732);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45700);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61103);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_6__, _utils_common__WEBPACK_IMPORTED_MODULE_8__, _utils_format__WEBPACK_IMPORTED_MODULE_9__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_6__, _utils_common__WEBPACK_IMPORTED_MODULE_8__, _utils_format__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const BadgeSimilarPanel = ({ className  })=>{
    const { badgeDetail , similarBadges  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .CG)((state)=>state.badge);
    const { badge  } = badgeDetail;
    const [getSimilarBadge] = _services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useLazyGetSimilarBadgeQuery */ .Z.useLazyGetSimilarBadgeQuery();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).state;
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!badge?.id) return;
        getSimilarBadge(badge.id);
    }, [
        getSimilarBadge,
        badge
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("pt-5 px-[20px] sm:px-6 pb-9 !rounded-none md:!rounded-md", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-h6 font-semibold mb-2 dark:text-white",
                children: lang["comp/similar-items"]
            }),
            similarBadges.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("mt-5 pb-2 flex flex-wrap justify-center sm:justify-start items-center gap-1 sm:gap-0", "lg:grid lg:grid-cols-4 lg:justify-start"),
                children: similarBadges.slice(0, 4).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "max-w-[158px] w-[50%] sm:w-[25%] min-w-[124px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: `/marketplace/badge/${item.nft.id}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative text-h9 w-[158px] sm:w-sub-card-w h-sub-card-h rounded-xl min-w-[120px] min-h-[162px]", "flex flex-col items-center justify-between grow-0 shrink-0", "cursor-pointer pb-4 bg-white dark:bg-[#0F0F0F] border border-black/10 dark:border-white/15"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full h-full bg-[#FFCACA] bg-cover bg-center rounded-t-xl flex justify-center items-center",
                                        style: {
                                            backgroundImage: `url(${item.nft?.imageUrl})`
                                        }
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "pt-2 mt-1 text-black/70 dark:text-white/70 flex flex-row justify-center w-full",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "whitespace-nowrap overflow-hidden text-ellipsis max-w-[50%]",
                                                children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_9__/* .formatIntBalance */ .qQ)(item.nft.price)
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "ml-1",
                                                children: (0,_utils_common__WEBPACK_IMPORTED_MODULE_8__/* .getTokenName */ ._M)(item.nft.token)
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }, index))
            }),
            similarBadges.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col flex-grow justify-center items-center mt-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/no-item-marketplace.png`,
                        alt: "",
                        height: "70px",
                        width: "70px"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-base text-black/30 dark:text-white/30 mt-2",
                        children: lang["common/no-items"]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BadgeSimilarPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43202:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_icons_DeleteIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73992);
/* harmony import */ var _components_icons_EditIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76995);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14613);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53450);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86588);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73732);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_8__, _utils_common__WEBPACK_IMPORTED_MODULE_10__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_8__, _utils_common__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const CharacterEquipmentPanel = ({ className , item  })=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_8__/* .useAppDispatch */ .TL)();
    const { characterDetail , characterSlotStatus  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_8__/* .useAppSelector */ .CG)((state)=>state.character);
    const { nft , character  } = characterDetail;
    const [getSlotStatus] = _services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_9__/* ["default"].useLazyGetCharacterSlotStatusQuery */ .Z.useLazyGetCharacterSlotStatusQuery();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).state;
    const handleOpenSelectEquipmentModal = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((itemType)=>{
        if (nft?.status === "level_up" || nft?.status === "claim") return;
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_7__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/select-equipment",
            propsState: {
                itemType,
                nftCharacterId: nft?.id
            }
        }));
    }, [
        dispatch,
        nft?.id,
        nft?.status
    ]);
    const handleOpenRemoveEquipmentModal = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((equipmentId)=>{
        if (nft?.status === "level_up" || nft?.status === "claim") return;
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_7__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/remove-equipment",
            propsState: {
                nftCharacterId: nft?.id,
                nftEquipmentId: equipmentId
            }
        }));
    }, [
        dispatch,
        nft?.id,
        nft?.status
    ]);
    const getEquipment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((itemType)=>{
        return character?.equipments.find((equipment)=>equipment.itemType === itemType);
    }, [
        character?.equipments
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!nft?.id) return;
        getSlotStatus(nft?.id);
    }, [
        getSlotStatus,
        nft?.id
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: nft?.status !== "on_sale" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: characterSlotStatus[item.slotKey] ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-h10 w-[95px] h-[85px] rounded-t-xl", "flex flex-col items-center justify-between relative group overflow-hidden", {
                    "cursor-pointer": !getEquipment(item.itemType)
                }, {
                    "cursor-not-allowed": nft?.status === "level_up" || nft?.status === "claim"
                }),
                onClick: ()=>!getEquipment(item.itemType) && handleOpenSelectEquipmentModal(item.itemType),
                children: [
                    getEquipment(item.itemType) && nft?.status !== "level_up" && nft?.status !== "claim" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute top-0 left-0 right-0 bottom-0 bg-[#D72E33]/80 rounded-xl z-10", "transition-all translate-y-[85px] group-hover:translate-y-0", "flex justify-center items-center gap-x-6"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-5 h-5",
                                onClick: ()=>handleOpenSelectEquipmentModal(item.itemType),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_EditIcon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-5 h-5",
                                onClick: ()=>handleOpenRemoveEquipmentModal(getEquipment(item.itemType)?.nft.id),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_DeleteIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-[75px] h-[75px] bg-cover bg-center rounded-xl flex justify-center items-center", item.backgroundColor),
                        style: {
                            backgroundImage: `url(${getEquipment(item.itemType)?.nft?.imageUrl || ""})`
                        },
                        children: !getEquipment(item.itemType)?.nft?.imageUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/icon-white-plus.png`,
                                alt: "",
                                width: 20,
                                height: 20
                            })
                        })
                    }),
                    getEquipment(item.itemType) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("mt-1 flex flex-row", `text-[${item.textColor}] text-[12px]`),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: (0,_utils_common__WEBPACK_IMPORTED_MODULE_10__/* .getBonusAttribute */ .QW)(getEquipment(item.itemType)?.itemType)
                            }),
                            "\xa0",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    "+",
                                    getEquipment(item.itemType)?.bonus
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                    !getEquipment(item.itemType) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("mt-1", `text-[${item.textColor}]`),
                        children: item.category
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-h10 w-[95px] h-[85px] rounded-xl px-[10px]", "flex flex-col items-center justify-between cursor-not-allowed"),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full h-full bg-[#f1f1f1] dark:bg-white/5 rounded-lg flex justify-center items-center py-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/locking.png`,
                            alt: "",
                            width: 40,
                            height: 35
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-1 font-semibold text-black/40 dark:text-white/40",
                        children: lang["comp/locked"]
                    })
                ]
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharacterEquipmentPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49103:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _classes_History__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10296);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14613);
/* harmony import */ var _features_marketplace_historySlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91813);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53450);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_offers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(804);
/* harmony import */ var _services_query_endpoints_trading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92460);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73732);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(45700);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(60088);
/* harmony import */ var _bases_Table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(62558);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61103);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_9__, _utils_common__WEBPACK_IMPORTED_MODULE_12__, _utils_format__WEBPACK_IMPORTED_MODULE_13__, _bases_Table__WEBPACK_IMPORTED_MODULE_15__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_9__, _utils_common__WEBPACK_IMPORTED_MODULE_12__, _utils_format__WEBPACK_IMPORTED_MODULE_13__, _bases_Table__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const CharacterHistoryPanel = ({ className , nft , user , showOnlyHistory  })=>{
    const [getOfferList] = _services_query_endpoints_offers__WEBPACK_IMPORTED_MODULE_10__/* ["default"].useLazyGetOffersQuery */ .Z.useLazyGetOffersQuery();
    const [getTradingList] = _services_query_endpoints_trading__WEBPACK_IMPORTED_MODULE_11__/* ["default"].useLazyGetTradingListQuery */ .Z.useLazyGetTradingListQuery();
    const { myProfile: { userProfile  } ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppSelector */ .CG)((state)=>state.profile);
    const { offerList , tradingList  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppSelector */ .CG)((state)=>state.history);
    const { timeStampAction  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppSelector */ .CG)((state)=>state.nft);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).state;
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppDispatch */ .TL)();
    const columns = [
        {
            title: lang["comp/event"] || "",
            dataIndex: "event",
            render: (text)=>_classes_History__WEBPACK_IMPORTED_MODULE_5__/* .TRADING_EVENT */ .M[text]
        },
        {
            title: lang["card/price"] || "",
            dataIndex: "priceSGT",
            render: (text)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full flex",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mr-1",
                            children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .formatIntBalance */ .qQ)(text, 18)
                        }),
                        (0,_utils_common__WEBPACK_IMPORTED_MODULE_12__/* .getTokenName */ ._M)("1")
                    ]
                });
            }
        },
        {
            title: lang["wallet/from"] || "",
            dataIndex: "fromUser",
            render: (_, item)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full",
                    children: item?.fromUser?.email ? `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenString */ .Sy)({
                        str: item?.fromUser?.email.split("@")[0],
                        maxLength: 2,
                        character: "***"
                    })}@${item?.fromUser?.email.split("@")[1]}` : item?.fromUser?.social ? (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenAddress */ .Xn)({
                        str: item?.fromUser?.social.socialId,
                        character: "***",
                        start: 2
                    }) : item?.from && !item.fromUser ? `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenString */ .Sy)({
                        str: item?.from.split("@")[0],
                        maxLength: 2,
                        character: "***"
                    })}@${item?.from.split("@")[1]}` : "-"
                });
            }
        },
        {
            title: lang["wallet/to"] || "",
            dataIndex: "toUser",
            render: (_, item)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full",
                    children: item?.toUser?.email ? `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenString */ .Sy)({
                        str: item?.toUser?.email.split("@")[0],
                        maxLength: 2,
                        character: "***"
                    })}@${item?.toUser?.email.split("@")[1]}` : item?.toUser?.social ? (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenAddress */ .Xn)({
                        str: item?.toUser?.social.socialId,
                        character: "***",
                        start: 2
                    }) : "-"
                });
            }
        },
        {
            title: lang["cd/date"] || "",
            dataIndex: "createdAt",
            render: (text)=>moment__WEBPACK_IMPORTED_MODULE_2___default()(text).format("MM/DD/YYYY")
        }, 
    ];
    const columnsOfferList = userProfile?.id === user?.id ? [
        {
            title: lang["comp/bid-amount"] || "",
            dataIndex: "price",
            render: (_, item)=>`${(0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .formatIntBalance */ .qQ)(item?.price)} ${(0,_utils_common__WEBPACK_IMPORTED_MODULE_12__/* .getTokenName */ ._M)(item?.token)}`
        },
        {
            title: lang["wallet/from"] || "",
            dataIndex: "from",
            render: (_, item)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full",
                    children: item?.user?.email ? `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenString */ .Sy)({
                        str: item.user.email.split("@")[0],
                        maxLength: 2,
                        character: "***"
                    })}@${item.user.email.split("@")[1]}` : item?.user?.social ? (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenAddress */ .Xn)({
                        str: item.user.social.socialId,
                        character: "***",
                        start: 2
                    }) : item?.from && !item.user ? `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenString */ .Sy)({
                        str: item.from.split("@")[0],
                        maxLength: 2,
                        character: "***"
                    })}@${item.from.split("@")[1]}` : "-"
                });
            }
        },
        {
            title: lang["cd/date"] || "",
            dataIndex: "createdAt",
            render: (text)=>moment__WEBPACK_IMPORTED_MODULE_2___default()(text).format("MM/DD/YYYY")
        },
        {
            title: "",
            render: (_, item)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_14__/* .Button */ .z, {
                    className: "contained-secondary mr-0 my-auto ml-auto",
                    onClick: ()=>handleClickAcceptBtn(item),
                    children: "Accept"
                });
            }
        }, 
    ] : [
        {
            title: lang["comp/bid-amount"] || "",
            dataIndex: "price",
            render: (_, item)=>`${(0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .formatIntBalance */ .qQ)(item?.price)} ${(0,_utils_common__WEBPACK_IMPORTED_MODULE_12__/* .getTokenName */ ._M)(item?.token)}`
        },
        {
            title: lang["wallet/from"] || "",
            dataIndex: "from",
            render: (_, item)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full",
                    children: item?.user?.email ? `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenString */ .Sy)({
                        str: item.user.email.split("@")[0],
                        maxLength: 2,
                        character: "***"
                    })}@${item.user.email.split("@")[1]}` : item?.user?.social ? (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenAddress */ .Xn)({
                        str: item.user.social.socialId,
                        character: "***",
                        start: 2
                    }) : item?.from && !item.user ? `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenString */ .Sy)({
                        str: item.from.split("@")[0],
                        maxLength: 2,
                        character: "***"
                    })}@${item.from.split("@")[1]}` : "-"
                });
            }
        },
        {
            title: lang["cd/date"] || "",
            dataIndex: "createdAt",
            render: (text)=>moment__WEBPACK_IMPORTED_MODULE_2___default()(text).format("MM/DD/YYYY")
        }, 
    ];
    const handleClickAcceptBtn = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((item)=>{
        if (!item) return;
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_8__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/accept-offer",
            propsState: {
                ...item,
                nftId: nft?.id,
                nftType: (0,_utils_common__WEBPACK_IMPORTED_MODULE_12__/* .getNftType */ .Mp)(router.query.nftType || "")
            }
        }));
    }, [
        dispatch,
        nft?.id,
        router.query.nftType
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!nft?.id) return;
        getOfferList({
            nftId: nft.id
        });
        getTradingList(nft.id);
    }, [
        nft?.id,
        getOfferList,
        getTradingList,
        timeStampAction
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        return ()=>{
            dispatch(_features_marketplace_historySlice__WEBPACK_IMPORTED_MODULE_7__/* .historyActions.setDefaultTableData */ .E.setDefaultTableData());
        };
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: showOnlyHistory ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full overflow-y-auto",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Table__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                className: "mt-[18px] !min-w-[960px]",
                data: tradingList,
                columns: columns,
                showPagination: false,
                maxHeightContent: "max-h-[330px]"
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    className: `pt-5 px-6 pb-[24px] !rounded-none md:!rounded-2xl ${className}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-[18px] font-semibold text-black dark:text-white/90"),
                            children: lang["comp/trading-history"]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full overflow-y-auto scrollbar-thin-rounded",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Table__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                className: "mt-[12px]",
                                data: tradingList,
                                columns: columns,
                                showPagination: false,
                                maxHeightContent: "max-h-[330px]",
                                widthFitContent: true
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    className: `pt-5 px-6 pb-[24px] !rounded-none md:!rounded-2xl ${className}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-[18px] font-semibold text-black dark:text-white/90"),
                            children: lang["comp/offer-list"]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full overflow-y-auto scrollbar-thin-rounded",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Table__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                className: "mt-[25px]",
                                data: offerList,
                                columns: columnsOfferList,
                                showPagination: false,
                                maxHeightContent: "max-h-[330px]",
                                widthFitContent: true
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharacterHistoryPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44181:
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
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53450);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_equipment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2073);
/* harmony import */ var _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93992);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73732);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45700);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60088);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61103);
/* harmony import */ var _icons_ArrowGrowthIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51131);
/* harmony import */ var _icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7833);
/* harmony import */ var _icons_VariantIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(63662);
/* harmony import */ var _features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(85750);
/* harmony import */ var _features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(44523);
/* harmony import */ var _features_marketplace_nftSlice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(52114);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(66790);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_6__, _utils_common__WEBPACK_IMPORTED_MODULE_9__, _utils_format__WEBPACK_IMPORTED_MODULE_10__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_6__, _utils_common__WEBPACK_IMPORTED_MODULE_9__, _utils_format__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const EquipmentCardPanel = ({ className  })=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .TL)();
    const { equipmentDetail  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .CG)((state)=>state.equipment);
    const { myProfile: { userProfile  } ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .CG)((state)=>state.profile);
    const permissionState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .CG)((state)=>state.auth);
    const { equipment , nft , user , itemConfig  } = equipmentDetail;
    const { offerList  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .CG)((state)=>state.history);
    const { 0: userOffer , 1: setUserOffer  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const nftState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .CG)((state)=>state.nft);
    const [getEquipmentMaxLevel] = _services_query_endpoints_equipment__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useLazyGetEquipmentMaxLevelQuery */ .Z.useLazyGetEquipmentMaxLevelQuery();
    const [getPermission] = _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_8__/* ["default"].useLazyGetUserPermissionQuery */ .Z.useLazyGetUserPermissionQuery();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).state;
    const [setRemoveEquipment, { isSuccess  }] = _services_query_endpoints_equipment__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useSetUnEquipEquipmentMutation */ .Z.useSetUnEquipEquipmentMutation();
    const handleClickDisUseButton = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async (nftEquipmentId)=>{
        if (!nftEquipmentId) return;
        await setRemoveEquipment(nftEquipmentId);
        dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_17__/* .collectionActions.resetCollectionState */ .X5.resetCollectionState());
        dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_17__/* .collectionActions.setCollectionFilters */ .X5.setCollectionFilters({
            page: 1
        }));
        dispatch(_features_marketplace_nftSlice__WEBPACK_IMPORTED_MODULE_18__/* .nftActions.setTimeStamp */ .k.setTimeStamp());
    }, [
        setRemoveEquipment,
        dispatch
    ]);
    const handleOpenConfirmPurchaseModal = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_5__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/confirm-equipment-purchase",
            propsState: equipmentDetail
        }));
    }, [
        dispatch,
        equipmentDetail
    ]);
    const handleOpenMakeOfferModal = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_5__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/make-equipment-offer",
            propsState: equipmentDetail
        }));
    }, [
        dispatch,
        equipmentDetail
    ]);
    const handleOpenConfirmSellingModal = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_5__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/selling-equipment",
            propsState: equipmentDetail
        }));
    }, [
        dispatch,
        equipmentDetail
    ]);
    const handleOpenAbortSellingModal = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_5__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/abort-selling",
            propsState: {
                id: nft?.id,
                nftType: "Equipment"
            }
        }));
    }, [
        dispatch,
        nft?.id
    ]);
    const handleOpenCancelOfferModal = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_5__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/cancel-offer",
            propsState: {
                ...userOffer,
                nftId: nft?.id,
                type: "Equipment"
            }
        }));
    }, [
        dispatch,
        nft?.id,
        userOffer
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!userProfile?.id) return;
        const offerOfUser = offerList?.find((item)=>item.user.id === userProfile?.id);
        setUserOffer(offerOfUser);
    }, [
        offerList,
        userProfile?.id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getEquipmentMaxLevel({
            type: equipment?.itemType
        });
    }, [
        equipment?.itemType,
        getEquipmentMaxLevel
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getPermission(undefined);
    }, [
        getPermission
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (isSuccess) {
            dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_16__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                type: "success",
                title: "Update successfully.",
                description: `Equipment #${nft?.id} is not being used`
            }));
        }
    }, [
        dispatch,
        isSuccess,
        nft?.id
    ]);
    const renderButtonComponent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((upgradeCost, token)=>{
        if (userProfile?.id && user?.id === userProfile?.id) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: nft?.status === "on_sale" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .z, {
                    className: "contained-primary w-full mt-8",
                    onClick: handleOpenAbortSellingModal,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: lang["common/abort-selling-on-market"]
                    })
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .z, {
                            className: "contained-primary w-full mt-8 stroke-primary-btn",
                            onClick: handleOpenConfirmSellingModal,
                            disabled: permissionState.authPermission?.listEquipment === false || nft?.status === "claim" || nft?.status === "be_used",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "ml-2",
                                    children: lang["comp/selling-on-market"]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: `${_constants_route__WEBPACK_IMPORTED_MODULE_19__/* .ROUTER.MY_EQUIPMENT */ .Yj.MY_EQUIPMENT}/${nft?.id}/upgrade`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .z, {
                                className: "contained-secondary w-full mt-4 fill-secondary-btn",
                                disabled: permissionState.authPermission.upgradeEquipment === false || nft?.status === "claim" || Number(equipment?.level) >= Number(nftState.equipmentMaxLevel) || nft?.status === "be_used",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ArrowGrowthIcon__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "ml-2",
                                        children: [
                                            lang["button/upgrade"],
                                            " ",
                                            `(${upgradeCost} ${token})`
                                        ]
                                    })
                                ]
                            })
                        }),
                        nft?.status === "be_used" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .z, {
                            className: "contained-secondary w-full mt-4",
                            onClick: ()=>handleClickDisUseButton(nft.id),
                            children: lang["button/disuse"]
                        })
                    ]
                })
            });
        } else {
            if (!(nft?.status === "on_sale")) return;
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .z, {
                        className: "contained-primary w-full mt-8 stroke-primary-btn",
                        onClick: handleOpenConfirmPurchaseModal,
                        disabled: permissionState.authPermission?.purchaseEquipment === false,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "ml-2",
                                children: [
                                    lang["comp/buy-with"],
                                    " ",
                                    (0,_utils_format__WEBPACK_IMPORTED_MODULE_10__/* .formatIntBalance */ .qQ)(nft?.price),
                                    " ",
                                    (0,_utils_common__WEBPACK_IMPORTED_MODULE_9__/* .getTokenName */ ._M)(nft?.token || "")
                                ]
                            })
                        ]
                    }),
                    nft?.availableOffer ? userOffer ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .z, {
                        className: "contained-secondary w-full mt-4 fill-secondary-btn",
                        onClick: handleOpenCancelOfferModal,
                        disabled: !nft?.availableOffer,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_VariantIcon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "ml-2",
                                children: lang["button/cancel-offer"]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .z, {
                        className: "contained-secondary w-full mt-4 fill-secondary-btn",
                        onClick: handleOpenMakeOfferModal,
                        disabled: permissionState.authPermission?.makeEquipmentOffer === false,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_VariantIcon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "ml-2",
                                children: lang["button/make-an-offer"]
                            })
                        ]
                    }) : null
                ]
            });
        }
    }, [
        equipment?.level,
        handleClickDisUseButton,
        handleOpenAbortSellingModal,
        handleOpenCancelOfferModal,
        handleOpenConfirmPurchaseModal,
        handleOpenConfirmSellingModal,
        handleOpenMakeOfferModal,
        lang,
        nft?.availableOffer,
        nft?.id,
        nft?.price,
        nft?.status,
        nft?.token,
        nftState.equipmentMaxLevel,
        permissionState.authPermission?.listEquipment,
        permissionState.authPermission?.makeEquipmentOffer,
        permissionState.authPermission?.purchaseEquipment,
        permissionState.authPermission.upgradeEquipment,
        user?.id,
        userOffer,
        userProfile?.id, 
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        className: `!rounded-none md:!rounded-[10px] relative md:px-2 pb-10 h-fit ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("md:rounded-[10px] h-[337px] lg:h-[522px] w-full", "-mt-28 lg:mt-0", "bg-cover bg-no-repeat bg-center md:rounded-b-none"),
                style: {
                    backgroundImage: `url(${nft?.imageUrl})`
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "px-[20px] lg:px-[30px] mt-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row items-center justify-between mb-5",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-h3 font-semibold dark:text-white",
                                children: [
                                    "#",
                                    nft?.id
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row right-0 gap-3",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "ml-3 bg-[#EEEEEE] dark:bg-white/10 rounded-full py-1 px-3 font-bold text-black dark:text-white text-h9 h-fit",
                                        children: [
                                            "Lvl ",
                                            equipment?.level
                                        ]
                                    }),
                                    userProfile?.id && user?.id === userProfile?.id && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            nft?.status === "on_sale" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "py-1 px-3 flex flex-row items-center rounded-xl bg-[#EE312F] gap-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-white text-h9 font-semibold",
                                                    children: `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_10__/* .formatIntBalance */ .qQ)(nft?.price)} ${(0,_utils_common__WEBPACK_IMPORTED_MODULE_9__/* .getTokenName */ ._M)(nft?.token)} ${lang["status/on-sale"]}`
                                                })
                                            }),
                                            nft?.status === "claim" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-caption-3 py-1 px-2 bg-secondary-2 rounded-md ml-1 text-white",
                                                children: lang["comp/in-claim-request"]
                                            }),
                                            nft?.status === "be_used" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "py-1 px-3 text-black text-h9 font-semibold flex flex-row items-center rounded-full bg-[#E4F4B5] gap-1",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: `${_constants_route__WEBPACK_IMPORTED_MODULE_19__/* .ROUTER.MY_CHARACTER */ .Yj.MY_CHARACTER}/${equipment?.character.nft.id}`,
                                                        children: `${lang["status/in-use-with"]} #${equipment?.character.nft.id}`
                                                    }),
                                                    " "
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    renderButtonComponent(Number(itemConfig?.upgradeCost), (0,_utils_common__WEBPACK_IMPORTED_MODULE_9__/* .getTokenName */ ._M)(itemConfig?.costToken || ""))
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EquipmentCardPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44600:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14613);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85277);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73732);
/* harmony import */ var _icons_HexagonIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68069);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_4__, _utils_common__WEBPACK_IMPORTED_MODULE_5__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_4__, _utils_common__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const EquipmentDetailPanel = ({ className  })=>{
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).state;
    const { equipmentDetail  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.equipment);
    const { equipment  } = equipmentDetail;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex flex-col gap-4 bg-[#ffffff] dark:bg-[#232323] !rounded-none md:!rounded-2xl px-5 py-3", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-h6 font-semibold text-black dark:text-white",
                children: lang["rte/stats"]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex flex-row justify-between border dark:border-white/30 rounded-[10px] p-5",
                children: [
                    (0,_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .getBonusAttribute */ .QW)(equipment?.itemType || "") === "Memory" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-[35px] h-[32px] relative",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_HexagonIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                className: "fill-[#FF383E]"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-white font-black left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] absolute",
                                                children: "M"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "px-3 font-semibold text-[14px] md:text-[16px] text-black/70 dark:text-white/70 self-center",
                                        children: lang["stats/memory-bonus"]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "font-semibold text-black dark:text-white/90 flex items-center text-[18px] md:text-[20px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-[#FF383E]",
                                        children: `+${Number(equipment?.bonus)}`
                                    }),
                                    " ",
                                    "\xa0",
                                    (0,_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .getBonusAttribute */ .QW)(equipment?.itemType || "")
                                ]
                            })
                        ]
                    }),
                    (0,_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .getBonusAttribute */ .QW)(equipment?.itemType || "") === "Focus" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-[35px] h-[32px] relative",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_HexagonIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                className: "fill-[#9F72FF]"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-white font-black left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] absolute",
                                                children: "F"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "px-3 font-semibold text-[14px] md:text-[16px] text-black/70 dark:text-white/70 self-center",
                                        children: lang["stats/focus-bonus"]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "font-semibold text-black dark:text-white/90 flex items-center text-[18px] md:text-[20px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-[#9F72FF]",
                                        children: `+${Number(equipment?.bonus)}`
                                    }),
                                    " ",
                                    "\xa0",
                                    (0,_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .getBonusAttribute */ .QW)(equipment?.itemType || "")
                                ]
                            })
                        ]
                    }),
                    (0,_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .getBonusAttribute */ .QW)(equipment?.itemType || "") === "Endurance" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-[35px] h-[32px] relative",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_HexagonIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                className: "fill-[#FFC839]"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-white font-black left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] absolute",
                                                children: "E"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "px-3 font-semibold text-[14px] md:text-[16px] text-black/70 dark:text-white/70 self-center",
                                        children: lang["stats/endurance-bonus"]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "font-semibold text-black dark:text-white/90 flex items-center text-[18px] md:text-[20px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-[#FFC839]",
                                        children: `+${Number(equipment?.bonus)}`
                                    }),
                                    " ",
                                    "\xa0",
                                    (0,_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .getBonusAttribute */ .QW)(equipment?.itemType || "")
                                ]
                            })
                        ]
                    }),
                    (0,_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .getBonusAttribute */ .QW)(equipment?.itemType || "") === "Luck" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-[35px] h-[32px] relative",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_HexagonIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                className: "fill-[#25D395]"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-white font-black left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] absolute",
                                                children: "L"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "px-3 font-semibold text-[14px] md:text-[16px] text-black/70 dark:text-white/70 self-center",
                                        children: lang["stats/luck-bonus"]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "font-semibold text-black dark:text-white/90 flex items-center text-[18px] md:text-[20px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-[#25D395]",
                                        children: `+${Number(equipment?.bonus)}`
                                    }),
                                    " ",
                                    "\xa0",
                                    (0,_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .getBonusAttribute */ .QW)(equipment?.itemType || "")
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EquipmentDetailPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9561:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14613);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17827);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73732);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45700);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61103);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_6__, _utils_common__WEBPACK_IMPORTED_MODULE_8__, _utils_format__WEBPACK_IMPORTED_MODULE_9__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_6__, _utils_common__WEBPACK_IMPORTED_MODULE_8__, _utils_format__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const EquipmentSimilarPanel = ({ className  })=>{
    const { equipmentDetail , similarEquipments  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .CG)((state)=>state.equipment);
    const { equipment  } = equipmentDetail;
    const [getSimilarEquipment] = _services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useLazyGetSimilarEquipmentQuery */ .Z.useLazyGetSimilarEquipmentQuery();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).state;
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!equipment?.id) return;
        getSimilarEquipment(equipment.id);
    }, [
        getSimilarEquipment,
        equipment
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        className: `!rounded-none md:!rounded-md pt-5 px-[20px] sm:px-6 pb-9 ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-h6 font-semibold mb-2 dark:text-white",
                children: lang["comp/similar-items"]
            }),
            similarEquipments.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("mt-5 pb-2 flex flex-wrap justify-center sm:justify-start items-center gap-[19px] sm:gap-0", "lg:grid lg:grid-cols-4 lg:justify-start"),
                children: similarEquipments.slice(0, 4).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "max-w-[158px] w-[50%] sm:w-[25%] sm:min-w-[124px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: `/marketplace/equipment/${item.nft.id}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative text-h9 w-[158px] sm:w-sub-card-w h-sub-card-h min-w-[120px] min-h-[162px] rounded-xl", "flex flex-col items-center justify-between grow-0 shrink-0", "cursor-pointer pb-4 bg-white dark:bg-[#0F0F0F] border border-black/15 dark:border-white/10"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full h-full bg-[#FFCACA] bg-cover bg-center rounded-t-xl flex justify-center items-center",
                                        style: {
                                            backgroundImage: `url(${item.nft?.imageUrl})`
                                        }
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "font-semibold text-[#EE312F] pt-2",
                                        children: [
                                            (0,_utils_common__WEBPACK_IMPORTED_MODULE_8__/* .getBonusAttribute */ .QW)(item.itemType),
                                            " + ",
                                            item.bonus
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-1 text-black/70 dark:text-white/70 flex flex-row justify-center w-full",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "whitespace-nowrap overflow-hidden text-ellipsis max-w-[50%]",
                                                children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_9__/* .formatIntBalance */ .qQ)(item.nft.price)
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "ml-1",
                                                children: (0,_utils_common__WEBPACK_IMPORTED_MODULE_8__/* .getTokenName */ ._M)(item.nft.token)
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }, index))
            }),
            similarEquipments.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col flex-grow justify-center items-center mt-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/no-item-marketplace.png`,
                        alt: "",
                        height: "70px",
                        width: "70px"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-base text-black/30 mt-2 dark:text-[#595B5F]",
                        children: lang["common/no-items"]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EquipmentSimilarPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BulletListIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



function BulletListIcon({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6.25 7.50049C6.25 7.83201 6.1183 8.14995 5.88388 8.38437C5.64946 8.61879 5.33152 8.75049 5 8.75049C4.66848 8.75049 4.35054 8.61879 4.11612 8.38437C3.8817 8.14995 3.75 7.83201 3.75 7.50049C3.75 7.16897 3.8817 6.85103 4.11612 6.6166C4.35054 6.38218 4.66848 6.25049 5 6.25049C5.33152 6.25049 5.64946 6.38218 5.88388 6.6166C6.1183 6.85103 6.25 7.16897 6.25 7.50049ZM9 6.50049C8.73478 6.50049 8.48043 6.60585 8.29289 6.79338C8.10536 6.98092 8 7.23527 8 7.50049C8 7.7657 8.10536 8.02006 8.29289 8.20759C8.48043 8.39513 8.73478 8.50049 9 8.50049H19C19.2652 8.50049 19.5196 8.39513 19.7071 8.20759C19.8946 8.02006 20 7.7657 20 7.50049C20 7.23527 19.8946 6.98092 19.7071 6.79338C19.5196 6.60585 19.2652 6.50049 19 6.50049H9ZM9 11.5005C8.73478 11.5005 8.48043 11.6058 8.29289 11.7934C8.10536 11.9809 8 12.2353 8 12.5005C8 12.7657 8.10536 13.0201 8.29289 13.2076C8.48043 13.3951 8.73478 13.5005 9 13.5005H19C19.2652 13.5005 19.5196 13.3951 19.7071 13.2076C19.8946 13.0201 20 12.7657 20 12.5005C20 12.2353 19.8946 11.9809 19.7071 11.7934C19.5196 11.6058 19.2652 11.5005 19 11.5005H9ZM9 16.5005C8.73478 16.5005 8.48043 16.6058 8.29289 16.7934C8.10536 16.9809 8 17.2353 8 17.5005C8 17.7657 8.10536 18.0201 8.29289 18.2076C8.48043 18.3951 8.73478 18.5005 9 18.5005H19C19.2652 18.5005 19.5196 18.3951 19.7071 18.2076C19.8946 18.0201 20 17.7657 20 17.5005C20 17.2353 19.8946 16.9809 19.7071 16.7934C19.5196 16.6058 19.2652 16.5005 19 16.5005H9ZM5 13.7505C5.33152 13.7505 5.64946 13.6188 5.88388 13.3844C6.1183 13.15 6.25 12.832 6.25 12.5005C6.25 12.169 6.1183 11.851 5.88388 11.6166C5.64946 11.3822 5.33152 11.2505 5 11.2505C4.66848 11.2505 4.35054 11.3822 4.11612 11.6166C3.8817 11.851 3.75 12.169 3.75 12.5005C3.75 12.832 3.8817 13.15 4.11612 13.3844C4.35054 13.6188 4.66848 13.7505 5 13.7505ZM5 18.7505C5.33152 18.7505 5.64946 18.6188 5.88388 18.3844C6.1183 18.15 6.25 17.832 6.25 17.5005C6.25 17.169 6.1183 16.851 5.88388 16.6166C5.64946 16.3822 5.33152 16.2505 5 16.2505C4.66848 16.2505 4.35054 16.3822 4.11612 16.6166C3.8817 16.851 3.75 17.169 3.75 17.5005C3.75 17.832 3.8817 18.15 4.11612 18.3844C4.35054 18.6188 4.66848 18.7505 5 18.7505Z"
        })
    });
}


/***/ }),

/***/ 25015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Energy = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "16",
        height: "21",
        viewBox: "0 0 16 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M15.89 8.54931C15.8069 8.3844 15.6797 8.24571 15.5226 8.14863C15.3656 8.05155 15.1847 7.99987 15 7.99931H9.99998V1.99931C10.0107 1.77999 9.94896 1.56324 9.82426 1.38251C9.69955 1.20178 9.51883 1.06712 9.30998 0.999311C9.10921 0.933254 8.89267 0.932512 8.69145 0.99719C8.49022 1.06187 8.31467 1.18864 8.18998 1.35931L0.189984 12.3593C0.0897493 12.5042 0.0295623 12.673 0.0155141 12.8486C0.00146601 13.0242 0.0340555 13.2004 0.109984 13.3593C0.179906 13.5411 0.301372 13.6984 0.459473 13.8121C0.617575 13.9258 0.805431 13.9909 0.999984 13.9993H5.99998V19.9993C6.00014 20.2102 6.06695 20.4156 6.19088 20.5862C6.3148 20.7569 6.48949 20.8839 6.68998 20.9493C6.79046 20.9805 6.89481 20.9973 6.99998 20.9993C7.15777 20.9997 7.31341 20.9628 7.45419 20.8915C7.59497 20.8203 7.71689 20.7167 7.80998 20.5893L15.81 9.58931C15.9177 9.44011 15.9822 9.26406 15.9963 9.08057C16.0104 8.89707 15.9736 8.71324 15.89 8.54931V8.54931ZM7.99998 16.9193V12.9993C7.99998 12.7341 7.89463 12.4797 7.70709 12.2922C7.51955 12.1047 7.2652 11.9993 6.99998 11.9993H2.99998L7.99998 5.07931V8.99931C7.99998 9.26453 8.10534 9.51888 8.29288 9.70642C8.48041 9.89395 8.73477 9.99931 8.99998 9.99931H13L7.99998 16.9193Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Energy);


/***/ }),

/***/ 71942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const StarEmpty = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "20",
        height: "18",
        viewBox: "0 0 20 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M19.1667 6.86369C19.1088 6.69602 19.0035 6.54875 18.8636 6.43973C18.7237 6.33072 18.5551 6.26464 18.3784 6.24952L13.1626 5.48869L10.8251 0.749523C10.75 0.594541 10.6328 0.463836 10.4869 0.372382C10.341 0.280927 10.1723 0.232422 10.0001 0.232422C9.82786 0.232422 9.65914 0.280927 9.51323 0.372382C9.36732 0.463836 9.25012 0.594541 9.17506 0.749523L6.83756 5.47952L1.62173 6.24952C1.45207 6.27364 1.29257 6.34482 1.16133 6.455C1.03009 6.56518 0.932357 6.70994 0.879227 6.87286C0.830594 7.03206 0.826229 7.2015 0.866603 7.36299C0.906976 7.52449 0.990564 7.67194 1.10839 7.78952L4.89423 11.4562L3.97756 16.6629C3.94484 16.8347 3.96197 17.0123 4.02694 17.1748C4.09191 17.3372 4.20201 17.4776 4.34423 17.5795C4.48284 17.6786 4.64634 17.7371 4.81635 17.7485C4.98637 17.7598 5.15618 17.7235 5.30673 17.6437L10.0001 15.1962L14.6751 17.6529C14.8037 17.7254 14.949 17.7633 15.0967 17.7629C15.2909 17.7635 15.4803 17.7026 15.6376 17.5887C15.7798 17.4868 15.8899 17.3464 15.9548 17.1839C16.0198 17.0215 16.037 16.8439 16.0042 16.672L15.0876 11.4654L18.8734 7.79869C19.0057 7.68656 19.1036 7.53918 19.1555 7.37368C19.2074 7.20817 19.2113 7.03132 19.1667 6.86369ZM13.5292 10.5304C13.4217 10.6343 13.3413 10.763 13.295 10.9052C13.2486 11.0475 13.2378 11.1988 13.2634 11.3462L13.9234 15.187L10.4767 13.3537C10.3441 13.2831 10.1961 13.2461 10.0459 13.2461C9.89564 13.2461 9.74769 13.2831 9.61506 13.3537L6.16839 15.187L6.82839 11.3462C6.854 11.1988 6.84316 11.0475 6.79683 10.9052C6.75049 10.763 6.67006 10.6343 6.56256 10.5304L3.81256 7.78036L7.67173 7.22119C7.82023 7.20053 7.96139 7.14377 8.08285 7.05587C8.20431 6.96797 8.30236 6.85162 8.36839 6.71702L10.0001 3.22452L11.7234 6.72619C11.7894 6.86079 11.8875 6.97714 12.0089 7.06504C12.1304 7.15294 12.2716 7.2097 12.4201 7.23036L16.2792 7.78952L13.5292 10.5304Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarEmpty);


/***/ }),

/***/ 63662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const VariantIcon = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "22",
        height: "22",
        viewBox: "0 0 22 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M19.4058 1.88828C18.7488 1.7751 18.0834 1.71685 17.4167 1.71412C15.1418 1.71225 12.9144 2.36456 11 3.59328C9.08063 2.38069 6.85359 1.74439 4.58333 1.75995C3.91659 1.76268 3.25123 1.82094 2.59416 1.93412C2.37894 1.97122 2.18403 2.08395 2.04454 2.25201C1.90505 2.42007 1.83015 2.6324 1.83333 2.85078V13.8508C1.83137 13.9855 1.85911 14.1189 1.91459 14.2417C1.97007 14.3644 2.05192 14.4734 2.15432 14.561C2.25672 14.6485 2.37715 14.7124 2.50704 14.7481C2.63693 14.7837 2.77309 14.7904 2.90583 14.7674C4.21943 14.54 5.56526 14.5777 6.86406 14.8784C8.16285 15.1791 9.38833 15.7367 10.4683 16.5183L10.5783 16.5824H10.6792C10.7808 16.6248 10.8899 16.6466 11 16.6466C11.1101 16.6466 11.2192 16.6248 11.3208 16.5824H11.4217L11.5317 16.5183C12.6041 15.7192 13.8261 15.1436 15.1251 14.8255C16.4242 14.5075 17.7738 14.4534 19.0942 14.6666C19.2269 14.6895 19.3631 14.6829 19.493 14.6472C19.6228 14.6115 19.7433 14.5477 19.8457 14.4601C19.9481 14.3726 20.0299 14.2636 20.0854 14.1409C20.1409 14.0181 20.1686 13.8846 20.1667 13.7499V2.74995C20.1571 2.54109 20.0765 2.34177 19.9381 2.18504C19.7997 2.02832 19.6119 1.92361 19.4058 1.88828ZM10.0833 14.0708C8.38739 13.1786 6.49964 12.7129 4.58333 12.7141C4.28083 12.7141 3.97833 12.7141 3.66666 12.7141V3.54745C3.97197 3.52985 4.27803 3.52985 4.58333 3.54745C6.53893 3.54529 8.45186 4.11917 10.0833 5.19745V14.0708ZM18.3333 12.7508C18.0217 12.7508 17.7192 12.7508 17.4167 12.7508C15.5004 12.7496 13.6126 13.2152 11.9167 14.1074V5.19745C13.5481 4.11917 15.4611 3.54529 17.4167 3.54745C17.722 3.52985 18.028 3.52985 18.3333 3.54745V12.7508ZM19.4058 16.5549C18.7488 16.4418 18.0834 16.3835 17.4167 16.3808C15.1418 16.3789 12.9144 17.0312 11 18.2599C9.08555 17.0312 6.85816 16.3789 4.58333 16.3808C3.91659 16.3835 3.25123 16.4418 2.59416 16.5549C2.47484 16.5739 2.36043 16.6162 2.25753 16.6795C2.15462 16.7428 2.06525 16.8259 1.99454 16.9238C1.92383 17.0218 1.87319 17.1328 1.84552 17.2504C1.81786 17.368 1.81371 17.4899 1.83333 17.6091C1.87991 17.8472 2.01895 18.057 2.21997 18.1928C2.421 18.3285 2.66762 18.379 2.90583 18.3333C4.21943 18.1058 5.56526 18.1436 6.86406 18.4443C8.16285 18.745 9.38833 19.3025 10.4683 20.0841C10.6236 20.1947 10.8094 20.254 11 20.254C11.1906 20.254 11.3764 20.1947 11.5317 20.0841C12.6117 19.3025 13.8371 18.745 15.1359 18.4443C16.4347 18.1436 17.7806 18.1058 19.0942 18.3333C19.3324 18.379 19.579 18.3285 19.78 18.1928C19.981 18.057 20.1201 17.8472 20.1667 17.6091C20.1863 17.4899 20.1821 17.368 20.1545 17.2504C20.1268 17.1328 20.0762 17.0218 20.0054 16.9238C19.9347 16.8259 19.8454 16.7428 19.7425 16.6795C19.6396 16.6162 19.5252 16.5739 19.4058 16.5549V16.5549Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VariantIcon);


/***/ })

};
;