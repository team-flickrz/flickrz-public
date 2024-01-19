"use strict";
(() => {
var exports = {};
exports.id = 8960;
exports.ids = [8960];
exports.modules = {

/***/ 594:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ CharacterStatisticDetailRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_HexagonIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68069);
/* harmony import */ var _hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6483);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85277);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14613);
/* harmony import */ var _icons_EditIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76995);
/* harmony import */ var _icons_DeleteIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73992);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73732);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(53450);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_5__, _utils_common__WEBPACK_IMPORTED_MODULE_10__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_5__, _utils_common__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const CharacterStatisticDetailRow = ({ item  })=>{
    const [isMobile] = (0,_hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_4__/* .useWindowResizeMobile */ .c)(1024);
    // const { activeCharacterDetail } = useAppSelector((state) => state.readToEarn);
    const { characterDetail , characterSlotStatus  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .CG)((state)=>state.character);
    const { nft , character  } = characterDetail;
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).state;
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_5__/* .useAppDispatch */ .TL)();
    const getEquipment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((itemType)=>{
        return character?.equipments?.find((equipment)=>equipment.itemType === itemType);
    }, [
        character
    ]);
    const handleOpenSelectEquipmentModal = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((itemType)=>{
        if (nft?.status === "level_up" || nft?.status === "claim") return;
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_11__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/select-equipment",
            propsState: {
                itemType,
                nftCharacterId: nft?.id,
                inEnjoyAndEarnPage: true
            }
        }));
    }, [
        dispatch,
        nft?.id,
        nft?.status
    ]);
    const handleOpenRemoveEquipmentModal = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((equipmentId)=>{
        if (nft?.status === "level_up" || nft?.status === "claim") return;
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_11__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/remove-equipment",
            propsState: {
                nftCharacterId: nft?.id,
                nftEquipmentId: equipmentId,
                inEnjoyAndEarnPage: true
            }
        }));
    }, [
        dispatch,
        nft?.id,
        nft?.status
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex justify-between relative items-center border-2 border-[#00000026] dark:border-[#FFFFFF26] rounded-[10px] pl-[20px] lg:pl-[30px] pr-[15px] lg:pr-[20px] py-[10px]",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-col gap-[16px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-[25px] h-[23px] relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_HexagonIcon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        className: item.colorFill
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-white left-[50%] top-[50%] translate-y-[-50%] text-[12px] font-[900] translate-x-[-50%] absolute",
                                        children: item.character
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "px-3 text-[18px] leading-[18px] font-[600] lg:text-h6 lg:font-bold",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(item.textColor),
                                        children: item.value
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "text-black dark:text-white",
                                        children: [
                                            " ",
                                            item.label
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    !isMobile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-black/70 dark:text-white/70 text-[14px] leading-[14px]",
                                    children: item.message
                                }),
                                "\xa0",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-[16px] font-[600] leading-[18px]", item.textColor),
                                    children: item.message2
                                })
                            ]
                        })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex flex-col gap-[5px] mt-[10px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-black/70 dark:text-white/70 text-[14px] leading-[14px]",
                                children: item.message
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-[16px] font-[600] leading-[18px]", item.textColor),
                                children: item.message2
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: characterSlotStatus && characterSlotStatus[item.slotKey] ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-center gap-[5px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-h9 rounded-xl w-[75px] h-[67px]", "flex flex-col items-center justify-between group overflow-hidden", "bg-white dark:bg-[#0F0F0F] border border-black/10 dark:border-white/15", {
                                "cursor-pointer": !getEquipment(item.itemType)
                            }, {
                                "cursor-not-allowed": nft?.status === "level_up" || nft?.status === "claim"
                            }),
                            onClick: ()=>!getEquipment(item.itemType) && handleOpenSelectEquipmentModal(item.itemType),
                            children: [
                                getEquipment(item.itemType) && nft?.status !== "level_up" && nft?.status !== "claim" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute top-0 left-[100%] right-0 bottom-0 w-[116px] h-[105px] translate-x-[-100%] bg-[#D72E33]/80 rounded-tr-xl rounded-br-xl z-10", "transition-all translate-y-[190px] hidden group-hover:flex group-hover:translate-y-0", "flex justify-center items-center gap-x-6"),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-6 h-6",
                                            onClick: ()=>handleOpenSelectEquipmentModal(item.itemType),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_EditIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-6 h-6",
                                            onClick: ()=>handleOpenRemoveEquipmentModal(getEquipment(item.itemType)?.nft.id),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_DeleteIcon__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-[75px] h-[67px] bg-cover bg-center rounded-t-xl flex justify-center items-center", item.color),
                                    style: {
                                        backgroundImage: `url(${getEquipment(item.itemType)?.nft?.imageUrl || ""})`
                                    },
                                    children: !getEquipment(item.itemType)?.nft?.imageUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "block",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/icon-white-plus.png`,
                                                alt: "",
                                                width: 20,
                                                height: 20
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: getEquipment(item.itemType) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-[12px] leading-[12px]", item.textColor),
                                children: [
                                    (0,_utils_common__WEBPACK_IMPORTED_MODULE_10__/* .getBonusAttribute */ .QW)(getEquipment(item.itemType)?.itemType),
                                    " ",
                                    "+",
                                    getEquipment(item.itemType)?.bonus
                                ]
                            }) : // <div className="font-semibold text-[#EE312F] pt-2">
                            //     {lang["comp/chose-an-item"]}
                            // </div>
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-[12px] leading-[12px]", item.textColor),
                                children: item.category
                            })
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-h9 w-[75px] rounded-xl", "flex flex-col items-center justify-between cursor-not-allowed gap-[5px]"),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full max-w-[75px] h-[67px] bg-[#f1f1f1] dark:bg-white/5 bg-center rounded-xl flex justify-center items-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/locking.png`,
                                alt: "",
                                width: 42,
                                height: 40
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-[12px] leading-[12px] font-[400] text-black/40 dark:text-white/40",
                            children: lang["comp/locked"]
                        })
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6483);
/* harmony import */ var _icons_CloseIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22043);





const CoachMarkComponent = ({ handleCloseCoachMark  })=>{
    const [isMobile] = (0,_hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_3__/* .useWindowResizeMobile */ .c)(1024);
    const { 0: rightImg , 1: setRightImg  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: bottom , 1: setBottom  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: marginBottomMb , 1: setMarginBottomMb  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("unset");
    const listenToScrollEvent = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((_)=>{
        const { scrollX , scrollY  } = window;
        setRightImg(scrollX);
        setBottom(scrollY);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        window.addEventListener("scroll", listenToScrollEvent, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", listenToScrollEvent);
        };
    }, []);
    const windowResizeListener = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (isMobile) {
            setMarginBottomMb(`${window.innerHeight - 630}px`);
        }
    }, [
        isMobile
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        windowResizeListener();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        window.addEventListener("resize", windowResizeListener);
        return ()=>window.removeEventListener("resize", windowResizeListener);
    }, [
        windowResizeListener
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed top-0 left-0 bottom-0 right-0 z-50 flex justify-center items-center lg:min-w-[1240px] lg:w-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "absolute top-0 left-0 bottom-0 right-0 bg-modal-backdrop/70",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("mt-0 h-full lg:h-auto items-end lg:mt-[86px] flex justify-center"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-contain h-[265px] relative bg-no-repeat bg-center w-[335px] lg:w-full max-w-[1120px] min-h-[265px] max-h-[500px] lg:max-h-[unset] lg:h-[748px] mx-[20px] mb-[12px] lg:mb-0 lg:mx-0",
                    style: {
                        backgroundImage: `url(${isMobile ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/Coachmarking-mb.png` : `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/Coachmarking.png`}`,
                        right: rightImg,
                        bottom: bottom,
                        marginBottom: isMobile ? marginBottomMb : "unset"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: handleCloseCoachMark,
                        className: "p-[8px] absolute right-0 top-[-40px] lg:right-[-40px] lg:top-[-10px] bg-white w-[34px] h-[34px] rounded-[48px] flex items-center justify-center border-[2px] border-[#EE312F] cursor-pointer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            className: "w-[10px] h-[10px] fill-[#EE312F]"
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoachMarkComponent);


/***/ }),

/***/ 78646:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66790);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14613);
/* harmony import */ var _features_marketplace_nftSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52114);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53450);
/* harmony import */ var _features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44523);
/* harmony import */ var _features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85750);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useIsWindowVisible__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10597);
/* harmony import */ var _hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6483);
/* harmony import */ var _services_query_endpoints_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51897);
/* harmony import */ var _services_query_endpoints_giftBox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(89148);
/* harmony import */ var _services_query_endpoints_r2e__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(59106);
/* harmony import */ var _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(93992);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(73732);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(45700);
/* harmony import */ var _MyActivitiesPanel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3523);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(60088);
/* harmony import */ var _bases_ClickTooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(95334);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(61103);
/* harmony import */ var _icons_ArrowSliderIcon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(41081);
/* harmony import */ var _icons_DeleteIcon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(73992);
/* harmony import */ var _icons_EditIcon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(76995);
/* harmony import */ var _icons_InfoIcon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(35770);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_11__, _utils_common__WEBPACK_IMPORTED_MODULE_18__, _utils_format__WEBPACK_IMPORTED_MODULE_19__, _MyActivitiesPanel__WEBPACK_IMPORTED_MODULE_20__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_11__, _utils_common__WEBPACK_IMPORTED_MODULE_18__, _utils_format__WEBPACK_IMPORTED_MODULE_19__, _MyActivitiesPanel__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




























const EarningProfile = ({ className  })=>{
    const { earningProfile , giftBoxList , userStamina  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useAppSelector */ .CG)((state)=>state.readToEarn);
    const { activeCharacterDetail  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useAppSelector */ .CG)((state)=>state.readToEarn);
    const [getStaminaUser] = _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_17__/* ["default"].useLazyGetUserStaminaQuery */ .Z.useLazyGetUserStaminaQuery();
    const isWindowVisible = (0,_hooks_useIsWindowVisible__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useAppDispatch */ .TL)();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).state;
    const [getGiftBoxList] = _services_query_endpoints_giftBox__WEBPACK_IMPORTED_MODULE_15__/* ["default"].useLazyGetGiftBoxListReadToEarnQuery */ .Z.useLazyGetGiftBoxListReadToEarnQuery();
    const [handleDisuseBadge, responseDisUseBadge] = _services_query_endpoints_badge__WEBPACK_IMPORTED_MODULE_14__/* ["default"].useDisuseBadgeMutation */ .Z.useDisuseBadgeMutation();
    const [getProfile] = _services_query_endpoints_r2e__WEBPACK_IMPORTED_MODULE_16__/* ["default"].useLazyGetEarningProfileQuery */ .Z.useLazyGetEarningProfileQuery();
    const [isMobile] = (0,_hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_13__/* .useWindowResizeMobile */ .c)(1024);
    const { timeStampAction  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useAppSelector */ .CG)((state)=>state.nft);
    const { 0: openTradingHistoryPanel , 1: setOpenTradingHistoryPanel  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const onClickedViewBoxButtonHandler = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((e)=>{
        e.stopPropagation();
        dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_9__/* .collectionActions.setCollectionFilters */ .X5.setCollectionFilters({
            type: "gift-box"
        }));
        router.push(_constants_route__WEBPACK_IMPORTED_MODULE_5__/* .ROUTER.MY_COLLECTION */ .Yj.MY_COLLECTION);
    }, [
        dispatch,
        router
    ]);
    const handleClickBadges = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_9__/* .collectionActions.resetCollectionState */ .X5.resetCollectionState());
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_8__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/my-badges"
        }));
    }, [
        dispatch
    ]);
    const handleClickGiftBox = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        if (giftBoxList.length > 0) {
            dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_9__/* .collectionActions.resetCollectionState */ .X5.resetCollectionState());
            dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_8__/* .modalSliceActions.addToQueue */ .E.addToQueue({
                type: "popup/gift-box"
            }));
        }
    }, [
        giftBoxList,
        dispatch
    ]);
    const handleDisuseBadgeItem = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(async (event)=>{
        if (!earningProfile?.badgeUsing) return;
        const { id  } = earningProfile.badgeUsing;
        if (!id) return;
        event.preventDefault();
        const data = await handleDisuseBadge(id);
        dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_9__/* .collectionActions.resetCollectionState */ .X5.resetCollectionState());
        dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_9__/* .collectionActions.setCollectionFilters */ .X5.setCollectionFilters({
            page: 1
        }));
        dispatch(_features_marketplace_nftSlice__WEBPACK_IMPORTED_MODULE_7__/* .nftActions.setTimeStamp */ .k.setTimeStamp());
        if (data?.error?.data?.message) {
            dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_10__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                type: "danger",
                title: "Something went wrong"
            }));
        }
    }, [
        dispatch,
        earningProfile,
        handleDisuseBadge
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (responseDisUseBadge.isSuccess && earningProfile && earningProfile.badgeUsing) {
            dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_10__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                type: "success",
                title: "Update successfully.",
                description: `${earningProfile?.badgeUsing?.nft?.badges?.name} is not being used`
            }));
            getProfile(undefined);
        }
    }, [
        responseDisUseBadge.isSuccess,
        dispatch,
        earningProfile,
        getProfile
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        getGiftBoxList(undefined);
    }, [
        getGiftBoxList,
        timeStampAction
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        isWindowVisible && getStaminaUser(undefined);
    }, [
        getStaminaUser,
        isWindowVisible
    ]);
    const renderBadgeInformation = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        // if (!earningProfile?.badgeUsing) return;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex justify-center desktop:justify-start",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative w-full h-[112px] lg:h-[139px]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-white dark:bg-transparent dark:border-[#FFFFFF26] border-[1px] border-[#00000026] rounded-[15px] flex flex-row items-center justify-between absolute top-0 left-0 right-0 bottom-0 py-[15px] lg:py-[16px] pl-[20px] lg:pl-[30px] pr-[15px] lg:pr-[20px]",
                    children: [
                        earningProfile && earningProfile.badgeUsing ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "lg:font-[600] text-[14px] leading-[14px] lg:text-[16px] lg:leading-[16px] capitalize text-black dark:text-white",
                                    children: "badge used"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-[20px] lg:mt-[15px] flex text-black dark:text-white whitespace-nowrap text-normal lg:text-[16px] xl:text-xl font-semibold ",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-[#46B4F2]",
                                            children: [
                                                "+",
                                                earningProfile.badgeUsing.nft.badges.benefitAmount,
                                                "%\xa0",
                                                " "
                                            ]
                                        }),
                                        (0,_utils_common__WEBPACK_IMPORTED_MODULE_18__/* .getBenefitType */ .wc)(earningProfile.badgeUsing.nft.badges.benefitType)
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-[5px] lg:mt-[15px] flex gap-[5px] items-center lg:text-[14px] text-black/50 dark:text-white",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-black/50 dark:text-white/50 text-[14px] leading-[14px]",
                                            children: earningProfile.badgeUsing.nft.badges.name
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "bg-[#0000000F] dark:bg-white/10 px-[10px] py-[4.5px] rounded-[999px] text-[11px] font-[600] text-black dark:text-white leading-[11px]",
                                            children: [
                                                "#",
                                                earningProfile.badgeUsing.nft.id
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "lg:font-[600] capitalize dark:text-white/90",
                                    children: lang["comp/badge"]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "leading-[24px] font-[600] text-black/50 mt-[3px] lg:mt-[10px] dark:text-white/90",
                                    children: lang["earning-profile-badge/title"]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-[12px] lg:text-[14px] leading-[16px] lg:leading-[21px] text-black/50 dark:text-white/50",
                                    children: lang["earning-profile-badge/description"]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("bg-[#DBEBF4] rounded-[10px] cursor-pointer", earningProfile && earningProfile.badgeUsing && "group"),
                            children: [
                                earningProfile?.badgeUsing?.nft.imageUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[90px] h-[81px] lg:w-[116px] lg:h-[106px] rounded-[10px] bg-cover bg-center bg-no-repeat",
                                    style: {
                                        backgroundImage: `url(${earningProfile.badgeUsing.nft.imageUrl})`
                                    }
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-center items-center w-[90px] h-[81px] lg:w-[116px] lg:h-[106px]",
                                    onClick: handleClickBadges,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/icon-white-plus.png`,
                                        alt: "",
                                        width: 32,
                                        height: 32
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute top-0 left-[100%] right-0 bottom-0 w-[120px] h-[111px] lg:w-[156px] lg:h-[138px] translate-x-[-100%] bg-[#EE312F]/80 rounded-tr-xl rounded-br-xl z-10", "transition-all hidden group-hover:flex group-hover:translate-y-0", "flex justify-center items-center gap-x-6"),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-6 h-6",
                                            onClick: handleClickBadges,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_EditIcon__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-6 h-6",
                                            onClick: handleDisuseBadgeItem,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_DeleteIcon__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {})
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        });
    }, [
        earningProfile,
        handleClickBadges,
        handleDisuseBadgeItem,
        lang
    ]);
    const renderBadgeAndGiftBox = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col gap-[20px] flex-1",
            children: [
                renderBadgeInformation(),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center desktop:justify-start ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative w-full h-[112px] lg:h-[139px]",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bg-transparent dark:border-[#FFFFFF26] border-[1px] border-[#00000026] rounded-[15px] flex flex-row items-center justify-between absolute top-0 left-0 right-0 bottom-0 py-[15px] lg:py-[16px] pl-[20px] lg:pl-[30px] pr-[15px] lg:pr-[20px]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "lg:font-[600] capitalize text-black dark:text-white/90",
                                                children: "You have Received"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mt-[20px] lg:mt-[15px] flex text-black dark:text-white/90 whitespace-nowrap text-normal lg:text-[16px] xl:text-xl font-semibold ",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "text-[#9F72FF]",
                                                        children: [
                                                            giftBoxList.length,
                                                            "\xa0",
                                                            " "
                                                        ]
                                                    }),
                                                    "Gift Boxes"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: onClickedViewBoxButtonHandler,
                                                className: "mt-[5px] lg:mt-[15px] text-[14px] leading-[14px] text-black/50 dark:text-white/50 cursor-pointer",
                                                children: "view inventory >"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: handleClickGiftBox,
                                        className: "bg-[#F9EBFF] w-[90px] h-[81px] lg:w-[116px] lg:h-[106px] flex justify-center items-center rounded-[10px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            alt: "",
                                            src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/gift-box.png`,
                                            height: isMobile ? "57px" : "75px",
                                            width: isMobile ? "57px" : "75px",
                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(!giftBoxList.length && "opacity-[.15] cursor-default", "cursor-pointer")
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        });
    }, [
        giftBoxList,
        onClickedViewBoxButtonHandler,
        renderBadgeInformation,
        isMobile,
        handleClickGiftBox, 
    ]);
    const renderEarningToday = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-row justify-between text-h9",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-black/50 dark:text-[#898989] capitalize",
                    children: lang["rte/earning-today"]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-black font-semibold justify-end flex dark:text-white", "max-w-[50%]"),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-end",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "whitespace-nowrap overflow-hidden text-ellipsis mr-1",
                                    children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_19__/* .formatIntBalance */ .qQ)(earningProfile?.earningToday.RTEarning, 4)
                                }),
                                "EP"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-end",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "whitespace-nowrap overflow-hidden text-ellipsis mr-1",
                                    children: `& ${(0,_utils_format__WEBPACK_IMPORTED_MODULE_19__/* .formatIntBalance */ .qQ)(earningProfile?.earningToday.GTEarning, 4)}`
                                }),
                                "FLKZ"
                            ]
                        })
                    ]
                })
            ]
        });
    }, [
        earningProfile?.earningToday.GTEarning,
        earningProfile?.earningToday.RTEarning,
        lang
    ]);
    const renderTotalEarning = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-row justify-between text-h9",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-black/50 dark:text-[#898989]",
                    children: lang["rte/total-earning"]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-black flex justify-end font-semibold dark:text-white", "max-w-[50%] "),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-end",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "whitespace-nowrap overflow-hidden text-ellipsis mr-1",
                                    children: `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_19__/* .formatIntBalance */ .qQ)(earningProfile?.earningTotal.RTEarning, 4)}`
                                }),
                                "EP"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-end",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "whitespace-nowrap overflow-hidden text-ellipsis mr-1",
                                    children: `& ${(0,_utils_format__WEBPACK_IMPORTED_MODULE_19__/* .formatIntBalance */ .qQ)(earningProfile?.earningTotal.GTEarning, 4)}`
                                }),
                                "FLKZ"
                            ]
                        })
                    ]
                })
            ]
        });
    }, [
        earningProfile?.earningTotal.GTEarning,
        earningProfile?.earningTotal.RTEarning,
        lang
    ]);
    const handleClickRefillHp = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((e)=>{
        e.stopPropagation();
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_8__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/confirm-refill-hp",
            propsState: {
                currentHP: earningProfile?.hp
            }
        }));
    }, [
        dispatch,
        earningProfile
    ]);
    const onClickedRefillButtonHandler = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((e)=>{
        e.stopPropagation();
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_8__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/confirm-refill-stamina",
            propsState: {
                curStamina: userStamina
            }
        }));
    }, [
        dispatch,
        userStamina
    ]);
    const handleRenderMessageTooltip = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((type)=>{
        switch(type){
            case "leftEarning":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-[20px] text-[15px] leading-[19.5px] p-[20px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[700]",
                                    children: "Episodes:\xa0"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[400]",
                                    children: "The maximum number of epsiodes the user can view per day."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[700]",
                                    children: "HP:\xa0"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[400]",
                                    children: "Decreases with each view, and if it is depleted, ENE participation is not possible. Refilling is only possible with FLKZ tokens."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[700]",
                                    children: "Stamina:\xa0"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[400]",
                                    children: "Endurance depletes with views, disabling ENE participation when empty. Refill with EP tokens or auto-refills at 1 Stamina per hour."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-[#EE312F] cursor-pointer font-bold text-right got-it",
                            children: "GOT IT"
                        })
                    ]
                });
            case "rightEarning":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-[20px] text-[15px] leading-[19.5px] p-[20px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[700]",
                                    children: "Badge:\xa0"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[400]",
                                    children: "An item to boost daily earnings or episode limits for your account."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[700]",
                                    children: "Daily Earning Badge:\xa0"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[400]",
                                    children: "A badge that allows you to increase your daily earning limit."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[700]",
                                    children: "Episodes Limit Badge:\xa0"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[400]",
                                    children: "A badge that allows you to increase your daily episodes limit."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-[#EE312F] cursor-pointer font-bold text-right got-it",
                            children: "GOT IT"
                        })
                    ]
                });
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-stretch space-y-5",
        children: [
            isMobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-[20px] bg-white select-none dark:bg-[#232323] p-5",
                children: [
                    renderEarningToday(),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row justify-between text-h9",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-black/50 capitalize dark:text-[#898989]",
                                children: lang["rte/episodes-read-today"]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-black font-semibold dark:text-white",
                                children: earningProfile?.earningToday.episode
                            })
                        ]
                    }),
                    renderTotalEarning(),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row justify-between text-h9",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-black/50 capitalize dark:text-[#898989]",
                                children: lang["rte/total-number-of-episodes-read"]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-black font-semibold dark:text-white",
                                children: earningProfile?.earningTotal.episode
                            })
                        ]
                    })
                ]
            }),
            !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_Panel__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex px-[40px] py-[30px] gap-[40px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col flex-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "font-[600] dark:text-white",
                                    children: lang["eae/today"]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between items-center py-[15.5px] border-b-[1px] border-black/10 dark:border-white/10",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-[14px] leading-[14px] text-black/50 dark:text-white/50",
                                            children: lang["rte/earning"]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-black font-semibold text-[14px] leading-[14px] justify-end flex dark:text-white", "max-w-[50%]"),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-end",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "whitespace-nowrap overflow-hidden text-ellipsis mr-1",
                                                            children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_19__/* .formatIntBalance */ .qQ)(earningProfile?.earningToday.RTEarning, 4)
                                                        }),
                                                        "EP"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-end",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "whitespace-nowrap overflow-hidden text-ellipsis mr-1",
                                                            children: `& ${(0,_utils_format__WEBPACK_IMPORTED_MODULE_19__/* .formatIntBalance */ .qQ)(earningProfile?.earningToday.GTEarning, 4)}`
                                                        }),
                                                        "FLKZ"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between items-center py-[15.5px] border-b-[1px] border-black/10 dark:border-white/10",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-[14px] leading-[14px] text-black/50 dark:text-white/50",
                                            children: lang["rte/number-episodes-read"]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-black font-semibold dark:text-white",
                                            children: earningProfile?.earningToday.episode
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col flex-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "font-[600] dark:text-white",
                                    children: lang["eae/total"]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between items-center py-[15.5px] border-b-[1px] border-black/10 dark:border-white/10",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-[14px] leading-[14px] text-black/50 dark:text-white/50",
                                            children: lang["rte/total-earning"]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-black text-[14px] leading-[14px] flex justify-end font-semibold dark:text-white", "max-w-[50%] "),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-end",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "whitespace-nowrap overflow-hidden text-ellipsis mr-1",
                                                            children: `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_19__/* .formatIntBalance */ .qQ)(earningProfile?.earningTotal.RTEarning, 4)}`
                                                        }),
                                                        "EP"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-end",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "whitespace-nowrap overflow-hidden text-ellipsis mr-1",
                                                            children: `& ${(0,_utils_format__WEBPACK_IMPORTED_MODULE_19__/* .formatIntBalance */ .qQ)(earningProfile?.earningTotal.GTEarning, 4)}`
                                                        }),
                                                        "FLKZ"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between items-center py-[15.5px] border-b-[1px] border-black/10 dark:border-white/10",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-[14px] leading-[14px] text-black/50 dark:text-white/50",
                                            children: lang["rte/total-number-episodes-read"]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-black font-semibold dark:text-white",
                                            children: earningProfile?.earningTotal.episode
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                isShadow: false,
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("py-6 px-5 lg:px-[40px] lg:py-[30px] shrink-1 lg:w-auto !rounded-none lg:!rounded-2xl", className),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col lg:flex-row w-full gap-[40px] mb-[10px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex-1 justify-end flex",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_ClickTooltip__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                    className: "text-[12px] w-[335px] tooltip-box overflow-y-auto text-start",
                                    message: handleRenderMessageTooltip("leftEarning"),
                                    positionY: "right",
                                    positionX: "bottom",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-center items-center gap-[5px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bg-[#00000080] dark:bg-white/50 w-[17px] h-[17px] cursor-pointer rounded-[999px] flex justify-center items-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                                                    className: "fill-white w-[5px] h-[11px]"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-[14px] text-black/50 dark:text-[#FFFFFF80] font-[500] leading-[14px]",
                                                children: lang["enjoy-and-earn/tip"]
                                            })
                                        ]
                                    })
                                })
                            }),
                            !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex-1 justify-end flex",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_ClickTooltip__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                    className: "text-[12px] w-[335px] tooltip-box overflow-y-auto text-start",
                                    message: handleRenderMessageTooltip("rightEarning"),
                                    positionY: "right",
                                    positionX: "bottom",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-center items-center gap-[5px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bg-[#00000080] dark:bg-white/50 w-[17px] h-[17px] cursor-pointer rounded-[999px] flex justify-center items-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                                                    className: "fill-white w-[5px] h-[11px]"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-[14px] text-black/50 font-[500] dark:text-[#FFFFFF80] leading-[14px]",
                                                children: lang["enjoy-and-earn/tip"]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col lg:flex-row w-full gap-[40px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-1 flex-col gap-[20px]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-[#0000000D] dark:bg-[#FFFFFF0D] px-[30px] py-[25px] rounded-[15px]",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-row justify-between text-h9",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-black dark:text-white text-[16px] leading-[16px] font-[600]",
                                                        children: lang["rte/episodes"]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "text-black/40 dark:text-white text-[16px] font-semibold leading-[16px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-black dark:text-white",
                                                                children: earningProfile?.userReadEpisodes
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "dark:text-white/40",
                                                                children: `/${earningProfile?.totalEpisodes}`
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bg-[#0000000F] dark:bg-[#FFFFFF1A] h-[10px] rounded-3xl relative mt-[10px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute h-[10px] rounded-3xl", "bg-gradient-to-l from-[#33DB62] to-[#00A646] w-0 transition-[width] duration-500"),
                                                    style: {
                                                        width: `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_19__/* .formatWidth */ .Rt)(earningProfile?.userReadEpisodes, earningProfile?.totalEpisodes)}%`
                                                    }
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-[#0000000D] dark:bg-[#FFFFFF0D] px-[30px] py-[20px] rounded-[15px]",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-row justify-between items-center text-[16px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-black dark:text-white leading-[16px] font-[600]",
                                                        children: lang["rte/hp"]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-row items-center text-black/30 font-semibold dark:text-white gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-black dark:text-white",
                                                                        children: Number(earningProfile?.hp)
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "dark:text-white/40",
                                                                        children: "/100"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_21__/* .Button */ .z, {
                                                                disabled: Number(earningProfile?.hp) === 100,
                                                                onClick: handleClickRefillHp,
                                                                className: "outlined-primary text-[#E42D25] !py-[3px] !px-[12px] text-[12px] !leading-[16px] !rounded-[6px] dark:outlined-white",
                                                                children: lang["rte/refill"]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bg-[#0000000F] dark:bg-[#FFFFFF1A] h-[10px] rounded-3xl relative mt-[10px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "absolute h-[10px] rounded-3xl bg-gradient-to-l from-[#00A9FF] to-[#0048D4] w-0 transition-[width] duration-500",
                                                    style: {
                                                        width: `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_19__/* .formatWidth */ .Rt)(Number(earningProfile?.hp), 100)}%`
                                                    }
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-[#0000000D] dark:bg-[#FFFFFF0D] px-[30px] py-[20px] rounded-[15px]",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-row justify-between items-center text-[16px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-black dark:text-white leading-[16px] font-[600]",
                                                        children: lang["rte/stamina"]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-row items-center font-semibold text-black/30 dark:text-white gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-black dark:text-white",
                                                                        children: Number(parseFloat(userStamina.toString()) || 0)
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "dark:text-white/40",
                                                                        children: "/100"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_21__/* .Button */ .z, {
                                                                disabled: Number(userStamina) === 100,
                                                                onClick: onClickedRefillButtonHandler,
                                                                className: "outlined-primary text-[#E42D25] !py-[3px] !px-[12px] text-[12px] !leading-[16px] !rounded-[6px] dark:outlined-white",
                                                                children: lang["rte/refill"]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bg-[#0000000F] dark:bg-[#FFFFFF1A] h-[10px] rounded-3xl relative mt-[10px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "absolute h-[10px] rounded-3xl bg-gradient-to-l from-[#E42D25] to-[#A52222] w-0 transition-[width] duration-500",
                                                    style: {
                                                        width: `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_19__/* .formatWidth */ .Rt)(parseFloat(userStamina.toString()), 100)}%`
                                                    }
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            !isMobile && renderBadgeAndGiftBox()
                        ]
                    })
                ]
            }),
            isMobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                className: "py-[25px] px-[20px] !rounded-none lg:!rounded-2xl",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-1 justify-end flex mb-[10px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_ClickTooltip__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                            className: "text-[12px] w-[335px] tooltip-box overflow-y-auto text-start",
                            message: handleRenderMessageTooltip("rightEarning"),
                            positionY: "right",
                            positionX: "bottom",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex justify-center items-center gap-[5px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-[#00000080] dark:bg-white/50 w-[17px] h-[17px] cursor-pointer rounded-[999px] flex justify-center items-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                                            className: "fill-white w-[5px] h-[11px]"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-[14px] text-black/50 font-[500] dark:text-[#FFFFFF80] leading-[14px]",
                                        children: lang["enjoy-and-earn/tip"]
                                    })
                                ]
                            })
                        })
                    }),
                    renderBadgeAndGiftBox()
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("!rounded-none lg:!rounded-2xl py-6 px-5 lg:px-[40px] lg:py-[30px] shrink-1 lg:w-auto", className),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between text-[18px] dark:text-white leading-[18px] font-[600] cursor-pointer",
                        onClick: ()=>setOpenTradingHistoryPanel(!openTradingHistoryPanel),
                        children: [
                            lang["profile/my-activities"],
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ArrowSliderIcon__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("h-[16px] w-[16px] fill-black dark:fill-white rotate-90", openTradingHistoryPanel && "!rotate-[270deg]")
                            })
                        ]
                    }),
                    openTradingHistoryPanel && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MyActivitiesPanel__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("mt-3 lg:mt-6", {
                                "!rounded-none": isMobile
                            }),
                            nftId: String(activeCharacterDetail?.nft?.id)
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EarningProfile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59718:
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
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53450);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93992);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45700);
/* harmony import */ var _CharacterStatisticDetailRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(594);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60088);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61103);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _classes_Marketplace__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69907);
/* harmony import */ var _classes_User__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22314);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(66790);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14613);
/* harmony import */ var _features_readToEarn_readToEarnSlice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(45151);
/* harmony import */ var _features_route_routeSlice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(48172);
/* harmony import */ var _features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(85750);
/* harmony import */ var _hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6483);
/* harmony import */ var _services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(86588);
/* harmony import */ var _services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(17827);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(73732);
/* harmony import */ var _utils_number__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(5115);
/* harmony import */ var _ReadToEarnSlider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(67949);
/* harmony import */ var _commons_Rarity__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(17439);
/* harmony import */ var _icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(52577);
/* harmony import */ var _CoachMarkComponent__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(70602);
/* harmony import */ var _icons_InfoIcon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(35770);
/* harmony import */ var _bases_ClickTooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(95334);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_4__, _utils_format__WEBPACK_IMPORTED_MODULE_6__, _CharacterStatisticDetailRow__WEBPACK_IMPORTED_MODULE_7__, _utils_common__WEBPACK_IMPORTED_MODULE_21__, _ReadToEarnSlider__WEBPACK_IMPORTED_MODULE_22__, _commons_Rarity__WEBPACK_IMPORTED_MODULE_23__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_4__, _utils_format__WEBPACK_IMPORTED_MODULE_6__, _CharacterStatisticDetailRow__WEBPACK_IMPORTED_MODULE_7__, _utils_common__WEBPACK_IMPORTED_MODULE_21__, _ReadToEarnSlider__WEBPACK_IMPORTED_MODULE_22__, _commons_Rarity__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





























const ReadToEarnCharacter = ({ className , onClickedToToomicButton  })=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    const { characterDetail , levelInformation , bLevelUp , bGetCharacter  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.character);
    const mintState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.mint);
    const { myProfile: { userProfile  } ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.profile);
    const { indexImg , activeCharacterDetail , query , characterList , totalPages , earningProcess , listNftIdLevelUp ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.readToEarn);
    const [getCharacterList, { isFetching , isSuccess  }] = _services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_19__/* ["default"].useLazyGetCharacterListReadToEarnQuery */ .Z.useLazyGetCharacterListReadToEarnQuery();
    const [getEarningProcess] = _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useLazyGetUserEarningProcessQuery */ .Z.useLazyGetUserEarningProcessQuery();
    const [isMobile] = (0,_hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_18__/* .useWindowResizeMobile */ .c)(1024);
    const [getCharacter] = _services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_20__/* ["default"].useLazyGetOneCharacterQuery */ .Z.useLazyGetOneCharacterQuery();
    const [getSlotStatus] = _services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_19__/* ["default"].useLazyGetCharacterSlotStatusQuery */ .Z.useLazyGetCharacterSlotStatusQuery();
    const [getPermission] = _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useLazyGetUserPermissionQuery */ .Z.useLazyGetUserPermissionQuery();
    const [getMintable] = _services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_19__/* ["default"].useLazyGetCharacterMintableQuery */ .Z.useLazyGetCharacterMintableQuery();
    const { 0: isProcessing , 1: setIsProcessing  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: finishLevelUpTime , 1: setFinishLevelUpTime  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const permissionState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.auth);
    const { 0: isFirstLogin , 1: setIsFirstLogin  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { character , nft , user , config  } = characterDetail;
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z).state;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const [getCoachMarkDone] = _services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_19__/* ["default"].useLazyGetCoachmarkDoneQuery */ .Z.useLazyGetCoachmarkDoneQuery();
    const nftIdLevelUpEqualActiveId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return listNftIdLevelUp.findIndex((ele)=>ele === activeCharacterDetail?.nft?.id) !== -1;
    }, [
        activeCharacterDetail,
        listNftIdLevelUp
    ]);
    const nftIdLevelUpEqualNftId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return listNftIdLevelUp.findIndex((ele)=>ele === nft?.id) !== -1;
    }, [
        nft,
        listNftIdLevelUp
    ]);
    const listStats = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return [
            {
                label: lang["rte/memory"],
                value: character?.memory,
                message: `${lang["rte/average-earning-rate"]}`,
                message2: `${(0,_utils_number__WEBPACK_IMPORTED_MODULE_28__/* .isSmallerThan0 */ .GK)(config?.averageEarning) || ""} ${(0,_utils_common__WEBPACK_IMPORTED_MODULE_21__/* .getTokenName */ ._M)(config?.tokenTypeEarning) || ""}`,
                character: "M",
                color: "bg-[#F6EAEB] dark:bg-[#D29D9E]",
                textColor: "text-[#FF383E]",
                colorFill: "fill-[#FF383E]",
                slotKey: "unlock_hat_slot",
                itemType: "0",
                category: lang["sb/hat"] || ""
            },
            {
                label: lang["rte/focus"],
                value: character?.focus,
                message: `${lang["rte/reading-time-required"]}`,
                message2: `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_6__/* .formatReadingTimeRequired */ .E1)((0,_utils_number__WEBPACK_IMPORTED_MODULE_28__/* .isSmallerThan0 */ .GK)(config?.readingTimeRequired) || 0)}`,
                character: "F",
                color: "bg-[#EEEBF4] dark:bg-[#BAAADC]",
                textColor: "text-[#9F72FF]",
                colorFill: "fill-[#9F72FF]",
                slotKey: "unlock_glass_slot",
                itemType: "1",
                category: lang["sb/glasses"] || ""
            },
            {
                label: lang["rte/endurance"],
                value: character?.endurance,
                message: `${lang["rte/stamina-decay-rate"]}`,
                message2: `${(0,_utils_number__WEBPACK_IMPORTED_MODULE_28__/* .isGreaterThan100 */ .lJ)((0,_utils_number__WEBPACK_IMPORTED_MODULE_28__/* .isSmallerThan0 */ .GK)(config?.staminaDecayRate)) || 0}%`,
                character: "E",
                color: "bg-[#F5F0E2] dark:bg-[#EADFC3]",
                textColor: "text-[#FFB800]",
                colorFill: "fill-[#FFB800]",
                slotKey: "unlock_medicine_slot",
                itemType: "2",
                category: lang["sb/medicine"] || ""
            },
            {
                label: lang["rte/luck"],
                value: character?.luck,
                message: `${lang["rte/gift-box-drop-chance"]}`,
                message2: `${(0,_utils_number__WEBPACK_IMPORTED_MODULE_28__/* .isGreaterThan100 */ .lJ)((0,_utils_number__WEBPACK_IMPORTED_MODULE_28__/* .isSmallerThan0 */ .GK)(config?.giftBoxDropChance)) || 0}%`,
                character: "L",
                color: "bg-[#E9F3F0] dark:bg-[#ADD7C8]",
                textColor: "text-[#25D395]",
                colorFill: "fill-[#25D395]",
                slotKey: "unlock_ring_slot",
                itemType: "3",
                category: lang["sb/ring"] || ""
            }, 
        ];
    }, [
        character,
        config,
        lang
    ]);
    const nextLevel = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (character && character?.level < levelInformation.maxLevel) {
            return levelInformation.levels.find((item)=>item.level === character.level + 1);
        } else return null;
    }, [
        character,
        levelInformation
    ]);
    const onClickedRightIconHandler = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (!totalPages || !query.page) return;
        if (!(indexImg === characterList.length - 1)) {
            dispatch(_features_readToEarn_readToEarnSlice__WEBPACK_IMPORTED_MODULE_15__/* .readToEarnActions.increaseIndexImg */ .b.increaseIndexImg());
        }
    }, [
        characterList.length,
        dispatch,
        indexImg,
        query.page,
        totalPages
    ]);
    const onClickedLeftIconHandler = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (indexImg === 0) return;
        dispatch(_features_readToEarn_readToEarnSlice__WEBPACK_IMPORTED_MODULE_15__/* .readToEarnActions.decreaseIndexImg */ .b.decreaseIndexImg());
    }, [
        dispatch,
        indexImg
    ]);
    const onClickedCharacterListButtonHandler = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e)=>{
        e.stopPropagation();
        dispatch(_features_readToEarn_readToEarnSlice__WEBPACK_IMPORTED_MODULE_15__/* .readToEarnActions.setCharacterID */ .b.setCharacterID(activeCharacterDetail?.id));
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_3__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/character-list-readToEarn"
        }));
    }, [
        activeCharacterDetail?.id,
        dispatch
    ]);
    const handleOpenLevelUpCharacterModal = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_3__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/levelup-character",
            propsState: nextLevel
        }));
    }, [
        dispatch,
        nextLevel
    ]);
    const handleGetDataCharacter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        getCharacter({
            nftId: activeCharacterDetail?.nft?.id,
            type: "collection"
        });
        const args = {
            page: query.page,
            limit: query.limit
        };
        getCharacterList({
            ...args
        });
    }, [
        activeCharacterDetail,
        getCharacter,
        getCharacterList,
        query
    ]);
    const handleBtnLevelUp = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (!character?.finishLevelUpAt) return;
        const expired = Number(character?.finishLevelUpAt) - Date.now();
        if (expired < 0 && nft?.status === "none" && nftIdLevelUpEqualActiveId) {
            setFinishLevelUpTime(0);
            const arrId = [
                ...listNftIdLevelUp
            ];
            const index = listNftIdLevelUp.findIndex((ele)=>ele === activeCharacterDetail?.nft?.id);
            arrId.splice(index, 1);
            dispatch(_features_readToEarn_readToEarnSlice__WEBPACK_IMPORTED_MODULE_15__/* .readToEarnActions.setListNftIdLevelUp */ .b.setListNftIdLevelUp([
                ...arrId
            ]));
            handleGetDataCharacter();
            return;
        }
    }, [
        character,
        handleGetDataCharacter,
        nft,
        nftIdLevelUpEqualActiveId,
        activeCharacterDetail,
        dispatch,
        listNftIdLevelUp, 
    ]);
    const handleRedirect = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((url, isMintOrEnhance = false)=>{
        localStorage.setItem(_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_16__/* .PREVIOUS_PAGE_KEY */ .m8, _constants_route__WEBPACK_IMPORTED_MODULE_13__/* .ROUTER.ENJOY_AND_EARN */ .Yj.ENJOY_AND_EARN);
        if (isMintOrEnhance) {
            localStorage.setItem(_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_16__/* .MINTORENHANCE */ .et, "true");
        }
        router.push(url);
    }, [
        router
    ]);
    const handleCloseCoachMark = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        setIsFirstLogin(false);
    }, []);
    const handleRenderMessageTooltip = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((type)=>{
        switch(type){
            case "earning":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-[20px] text-[15px] leading-[19.5px] p-[20px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "font-[700]",
                                    children: "Earning"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "font-[400]",
                                    children: "Daily Earning Limit by Character"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "font-[700]",
                                    children: "Level Up"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "font-[400]",
                                    children: "The feature to increase a Character’s Stats Leveling up increases the daily earning cap. When leveling up, character’s equipment slots unlock."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "font-[700]",
                                    children: "To Toomics:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "font-[400]",
                                    children: "Connect with affiliated partners for ENE Missions through this button."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "font-[700]",
                                    children: "Minting:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "font-[400]",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "list-disc list-inside ml-[10px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "A feature that allows you to merge two characters to create a new one"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "Minting becomes available starting from Level 10"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[700]",
                                    children: "Enhance: \xa0"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[400]",
                                    children: "A feature that merges five characters with the same rarity into one higher rarity character by burning the originals."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-[#EE312F] cursor-pointer font-bold text-right got-it",
                            children: "GOT IT"
                        })
                    ]
                });
            case "stats":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-[20px] text-[15px] leading-[19.5px] p-[20px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[700]",
                                    children: "Memory:\xa0"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[400]",
                                    children: "When the stat is increased, the amount of EP increases."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[700]",
                                    children: "Focus:\xa0"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[400]",
                                    children: "When the stat is increased, mission time for ENE is reduced."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[700]",
                                    children: "Endurance:\xa0"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[400]",
                                    children: "When the stat is increased, the rate of stamina decreasing is lowered."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[700]",
                                    children: "Luck:\xa0"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-[400]",
                                    children: "When the stat is increased, it increases the probability of receiving a gift box."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "Each equipment slot will be unlocked one by one as you level up your NFT Character."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-[#EE312F] cursor-pointer font-bold text-right got-it",
                            children: "GOT IT"
                        })
                    ]
                });
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const args = {
            page: query.page,
            limit: query.limit
        };
        getCharacterList({
            ...args
        });
    }, [
        getCharacterList,
        query.limit,
        query.page
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (characterList.length === 0 || !activeCharacterDetail) return;
        getEarningProcess(activeCharacterDetail.id);
    }, [
        activeCharacterDetail,
        characterList,
        getEarningProcess
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        dispatch(_features_readToEarn_readToEarnSlice__WEBPACK_IMPORTED_MODULE_15__/* .readToEarnActions.setFetchingStatusCharacterList */ .b.setFetchingStatusCharacterList(isFetching));
    }, [
        dispatch,
        isFetching
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!totalPages || !query.page) return;
        if (query.page < totalPages && indexImg === characterList.length - 1) {
            dispatch(_features_readToEarn_readToEarnSlice__WEBPACK_IMPORTED_MODULE_15__/* .readToEarnActions.increasePage */ .b.increasePage());
        }
    }, [
        dispatch,
        indexImg,
        query.page,
        totalPages,
        characterList.length
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (isSuccess) {
            dispatch(_features_readToEarn_readToEarnSlice__WEBPACK_IMPORTED_MODULE_15__/* .readToEarnActions.setActiveCharacterDetail */ .b.setActiveCharacterDetail());
        }
    }, [
        dispatch,
        isSuccess
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        dispatch(_features_readToEarn_readToEarnSlice__WEBPACK_IMPORTED_MODULE_15__/* .readToEarnActions.setActiveCharacterDetail */ .b.setActiveCharacterDetail());
    }, [
        characterList,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getCharacter({
            nftId: activeCharacterDetail?.nft?.id,
            type: "collection"
        });
    }, [
        getCharacter,
        activeCharacterDetail
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!nft?.id) return;
        getSlotStatus(nft?.id);
    }, [
        getSlotStatus,
        nft?.id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!character?.finishLevelUpAt) return;
        const intervalTime = setInterval(()=>{
            const expired = Number(character?.finishLevelUpAt) - Date.now();
            if (expired < 0 && expired > -1000 || expired < 0 && nft?.status === "level_up") {
                setIsProcessing(true);
                setFinishLevelUpTime(0);
                clearInterval(intervalTime);
                return;
            } else if (expired > 0) {
                setFinishLevelUpTime(expired / 1000);
            } else if (listNftIdLevelUp.length > 0 && expired < 0 && nft?.status === "none" && nftIdLevelUpEqualActiveId && bLevelUp === "fulfilled" && bGetCharacter === "fulfilled") {
                handleBtnLevelUp();
            } else return;
        }, 1000);
        return ()=>{
            clearInterval(intervalTime);
        };
    }, [
        character?.finishLevelUpAt,
        dispatch,
        nextLevel?.level,
        nft?.status,
        character,
        nft,
        handleBtnLevelUp,
        listNftIdLevelUp.length,
        nftIdLevelUpEqualActiveId,
        bLevelUp,
        bGetCharacter, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!isProcessing) return;
        const interval = setInterval(()=>{
            handleGetDataCharacter();
        }, 10000);
        if (isProcessing && nft?.status !== "level_up" && nftIdLevelUpEqualNftId && nftIdLevelUpEqualActiveId) {
            setIsProcessing(false);
            clearInterval(interval);
            dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_17__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                title: "Level up Successful.",
                description: `Your character ${activeCharacterDetail?.nft?.id} has been upgraded to level ${character?.level}`,
                type: "success"
            }));
            handleGetDataCharacter();
        }
        return ()=>{
            clearInterval(interval);
        };
    }, [
        dispatch,
        getCharacter,
        isProcessing,
        character?.level,
        nft?.id,
        nft?.status,
        getCharacterList,
        query,
        activeCharacterDetail,
        listNftIdLevelUp,
        nftIdLevelUpEqualActiveId,
        nftIdLevelUpEqualNftId,
        handleGetDataCharacter, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getPermission({});
    }, [
        getPermission
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (userProfile?.email && Number(character?.id)) {
            getMintable(Number(character?.id));
        }
    }, [
        character?.id,
        getMintable,
        mintState.mintable,
        userProfile?.email
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (nft && nft.status === "level_up") {
            dispatch(_features_readToEarn_readToEarnSlice__WEBPACK_IMPORTED_MODULE_15__/* .readToEarnActions.setListNftIdLevelUp */ .b.setListNftIdLevelUp([
                ...listNftIdLevelUp,
                nft?.id || -1
            ]));
        }
    }, [
        nft,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (userProfile && !userProfile.isCoachMaks) {
            setIsFirstLogin(true);
            getCoachMarkDone(undefined);
        }
    }, [
        userProfile
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        isShadow: false,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-full shrink-1 overflow-hidden lg:w-[1200px]", className),
        children: [
            isFirstLogin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CoachMarkComponent__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                handleCloseCoachMark: handleCloseCoachMark
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col lg:flex-row gap-0 lg:gap-[40px] px-0 lg:px-[40px] lg:py-[30px]",
                children: [
                    isMobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between px-[20px] py-[15px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-[18px] dark:text-white font-[600] leading-[25px]",
                                children: lang["rte/read-to-earn-character"]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-[5px]",
                                children: [
                                    characterList.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex gap-[5px] cursor-pointer items-center",
                                        onClick: onClickedCharacterListButtonHandler,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                            className: "border-[1px] w-full border-black/20 dark:border-[#4E5156] dark:text-[#898989] text-[#555555] !py-[8px] !px-[14px] text-[14px] !leading-[18px] font-[600] !rounded-[8px]",
                                            children: lang["rte/character-list"]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                        onClick: ()=>handleRedirect(`/my-profile/character/${activeCharacterDetail?.nft?.id}?tab=my-collection`),
                                        className: "bg-transparent border-[1px] w-full border-black/20 text-[#555555] dark:border-[#4E5156] dark:text-[#898989] !py-[8px] !px-[14px] text-[14px] !leading-[18px] !rounded-[8px]",
                                        children: lang["enjoy-and-earn/view-details"]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-1 flex flex-col items-center lg:w-[50%]",
                        children: [
                            !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                alt: "",
                                src: characterList[indexImg].nft?.imageUrl || `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/character.png`,
                                // layout="fill"
                                className: "w-full h-[90vw] max-h-[494px] max-w-[540px] lg:max-h-[494px] rounded-[15px]"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "lg:mt-[10px] mb-[25px] lg:mb-[40px] flex justify-center",
                                children: characterList.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReadToEarnSlider__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                    characterList: characterList,
                                    indexImg: indexImg,
                                    onClickedLeftIconHandler: onClickedLeftIconHandler,
                                    onClickedRightIconHandler: onClickedRightIconHandler,
                                    activeCharacterDetail: activeCharacterDetail
                                })
                            }),
                            !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                onClick: (e)=>{
                                    onClickedToToomicButton && onClickedToToomicButton(e, "desktop");
                                },
                                disabled: nftIdLevelUpEqualActiveId && (isProcessing || !!finishLevelUpTime),
                                className: "btn-primary w-full text-[16px] !leading-[22px] font-[600] py-[11px] rounded-[10px] dark:disabled:bg-[#E6E6E6] dark:disabled:text-[#555555] dark:disabled:opacity-[0.5]",
                                children: lang[userProfile?.syncStatus === _classes_User__WEBPACK_IMPORTED_MODULE_12__/* .EUserSyncStatus.NONE */ .wE.NONE || userProfile?.syncStatus == _classes_User__WEBPACK_IMPORTED_MODULE_12__/* .EUserSyncStatus.PENDING */ .wE.PENDING && userProfile.userToomics?.directionFrom === "sightn" && !userProfile.userToomics.userToomicsId ? "button/connect-to-toomics" : "button/to-toomics"]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex lg:justify-between px-[20px] lg:px-0",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex w-full lg:w-fit gap-[20px] items-center justify-between lg:justify-around",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-[20px] leading-[20px] lg:text-[30px] lg:leading-[30px] font-semibold text-black lg:text-black dark:text-[#FFFFFFE5]",
                                                children: `#${activeCharacterDetail?.nft?.id}`
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex gap-[5px]",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("rounded-[999px] py-[9.5px] px-[20px] text-[14px] leading-[14px] w-fit dark:bg-[#FFFFFF1A] dark:text-white", "bg-[#0000000F] lg:bg-[#0000000F] text-black font-bold flex items-center"),
                                                        children: [
                                                            "Lvl ",
                                                            character?.level
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_Rarity__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                        customTextInside: "!text-[14px] !leading-[14px]",
                                                        customClass: "!px-[15px] !py-[5px] flex items-center",
                                                        type: character?.rarity || "",
                                                        bigIcon: true
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex gap-[5px]",
                                        children: [
                                            characterList.length > 1 && !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex gap-[5px] cursor-pointer items-center",
                                                onClick: onClickedCharacterListButtonHandler,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                                    className: "border-[1px] w-full border-black/20 dark:border-[#4E5156] dark:text-[#898989] text-[#555555] !py-[8px] !px-[14px] text-[14px] !leading-[18px] font-[600] rounded-[8px] !p-0",
                                                    children: lang["rte/character-list"]
                                                })
                                            }),
                                            !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                                onClick: ()=>handleRedirect(`/my-profile/character/${activeCharacterDetail?.nft?.id}?tab=my-collection`),
                                                className: "bg-transparent border-[1px] w-full border-black/20 dark:border-[#4E5156] dark:text-[#898989] text-[#555555] !py-[8px] !px-[14px] text-[14px] !leading-[18px] !rounded-[8px]",
                                                children: lang["enjoy-and-earn/view-details"]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "px-[21px] mt-[30px] lg:px-0 flex flex-col gap-[15px] lg:gap-[30px]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-row gap-3 justify-between rounded-[15px]",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "w-4/5 lg:w-full",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-row justify-between items-center text-h9",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "text-black dark:text-white text-[12px] leading-[12px] lg:text-[14px] lg:leading-[14px] font-[600]",
                                                                children: [
                                                                    lang["rte/earning"],
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_ClickTooltip__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                                                                        className: "text-[12px] w-[335px] tooltip-box overflow-y-auto text-start right-[50px]",
                                                                        message: handleRenderMessageTooltip("earning"),
                                                                        positionY: "left",
                                                                        positionX: "bottom",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "bg-[#00000080] dark:bg-white/50 w-[17px] h-[17px] cursor-pointer rounded-[999px] flex justify-center items-center",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                                                                                className: "fill-white w-[5px] h-[11px]"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "flex flex-row items-center text-[12px] leading-[12px] lg:text-[14px] lg:leading-[14px] text-black/30 dark:text-white gap-3",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-black font-semibold dark:text-white",
                                                                            children: parseFloat(earningProcess.totalEarning.toString())
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "dark:text-white/40 font-semibold",
                                                                            children: [
                                                                                "/",
                                                                                parseFloat(earningProcess.maxEarningPerDay.toString()),
                                                                                "\xa0",
                                                                                (0,_utils_common__WEBPACK_IMPORTED_MODULE_21__/* .getTokenName */ ._M)(earningProcess.tokenType)
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "bg-[#0000000F] dark:bg-[#FFFFFF1A] h-[5px] lg:h-[10px] rounded-3xl relative mt-[10px]",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute h-[5px] lg:h-[10px] rounded-3xl bg-gradient-to-l from-[#E42D25] to-[#A52222] w-0 max-w-full transition-[width] duration-500",
                                                            style: {
                                                                width: `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_6__/* .formatWidth */ .Rt)(parseFloat(earningProcess.totalEarning.toString()), parseFloat(earningProcess.maxEarningPerDay.toString()))}%`
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: finishLevelUpTime && nftIdLevelUpEqualActiveId ? // <Tooltip
                                                //     message={
                                                //         finishLevelUpTime
                                                //             ? formatTimeCount(finishLevelUpTime)
                                                //             : "00:00:00"
                                                //     }
                                                // >
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                                    disabled: true,
                                                    className: "w-1/5 btn-primary bg-transparent border-[2px] min-w-[90px] gap-[5px] lg:max-w-[90px] !h-[34px] border-[#f00e0e] lg:border-0 text-[#f00e0e] !py-[5px] !px-[14px] text-[12px] !leading-[12px] !rounded-[6px] lg:btn-primary lg:text-white lg:!py-[5px] lg:!px-[14px] lg:text-[12px] lg:!leading-[16px] lg:h-full lg:!rounded-[6px] disabled:!bg-[#F9E0E1] disabled:border-0 disabled:!opacity-1",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                                            className: "fill-[#E42D25] w-[12px] h-[12px] animate-spin"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text-[12px] leading-[12px] text-[#E42D25]",
                                                            children: finishLevelUpTime ? (0,_utils_format__WEBPACK_IMPORTED_MODULE_6__/* .formatTimeCount */ .J_)(finishLevelUpTime, true) : "00:00"
                                                        })
                                                    ]
                                                }) : // </Tooltip>
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                                    onClick: handleOpenLevelUpCharacterModal,
                                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-1/5 btn-primary bg-transparent border-[2px] border-[#f00e0e] lg:border-0 text-[#f00e0e] !py-[5px] !px-[14px] text-[12px] !leading-[12px] !rounded-[6px] lg:btn-primary lg:text-white lg:!py-[5px] lg:h-[34px] lg:!px-[14px] lg:text-[12px] lg:!leading-[16px] lg:!rounded-[6px] disabled:border-0 dark:disabled:bg-[#E6E6E6] dark:disabled:text-[#555555] disabled:text-white", nextLevel ? "disabled:!bg-[#F9E0E1] disabled:!opacity-1 dark:disabled:!opacity-1 disabled:!text-[#E42D25]" : "dark:disabled:opacity-[0.5]"),
                                                    disabled: nft?.status === "claim" || config?.tokenTypeEarning === "1" || !nextLevel || nft?.status === "withdraw" || permissionState.authPermission?.levelUpCharacter === false || isProcessing && nftIdLevelUpEqualActiveId,
                                                    children: isProcessing && nftIdLevelUpEqualActiveId ? lang["comp/processing"] : lang["rte/level-up"]
                                                })
                                            })
                                        ]
                                    }),
                                    isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                        onClick: (e)=>{
                                            if (!isFirstLogin) {
                                                onClickedToToomicButton && onClickedToToomicButton(e, "desktop");
                                            }
                                        },
                                        disabled: nftIdLevelUpEqualActiveId && (isProcessing || !!finishLevelUpTime),
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("btn-primary w-full text-[16px] !leading-[22px] font-[600] py-[11px] rounded-[10px] mt-[15px] dark:disabled:bg-[#E6E6E6] dark:disabled:text-[#555555] dark:disabled:opacity-[0.5]", isFirstLogin && "z-[60] hover:bg-[#E42D25]"),
                                        children: lang[userProfile?.syncStatus === _classes_User__WEBPACK_IMPORTED_MODULE_12__/* .EUserSyncStatus.NONE */ .wE.NONE || userProfile?.syncStatus == _classes_User__WEBPACK_IMPORTED_MODULE_12__/* .EUserSyncStatus.PENDING */ .wE.PENDING && userProfile.userToomics?.directionFrom === "sightn" && !userProfile.userToomics.userToomicsId ? "button/connect-to-toomics" : "button/to-toomics"]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row gap-[15px] lg:gap-[10px] w-full",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                                disabled: nft?.status === "claim" || nft?.status === "level_up" || character?.mintCount === character?.totalCount || nft?.status === "withdraw" || !permissionState.authPermission?.minting || !mintState.mintable || nftIdLevelUpEqualActiveId && (isProcessing || !!finishLevelUpTime),
                                                onClick: ()=>handleRedirect(`/my-profile/character/${activeCharacterDetail?.nft?.id}/mint`, true),
                                                className: "btn contained-secondary flex w-full h-[40px] lg:h-fit justify-center py-[10px] rounded-[6px] text-[16px] leading-[22px] lg:text-[14px] lg:leading-[14px] text-[#E42D25] font-[500] capitalize",
                                                children: isMobile ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        lang["button/mint"],
                                                        "\xa0",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: `(${activeCharacterDetail?.mintCount} / ${activeCharacterDetail?.totalCount})`
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        lang["modal/mint-count"],
                                                        "\xa0:\xa0",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: `${activeCharacterDetail?.mintCount} / ${activeCharacterDetail?.totalCount}`
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                                disabled: nftIdLevelUpEqualActiveId && (isProcessing || !!finishLevelUpTime) || nft?.status === "claim" || nft?.status === "level_up" || character?.rarity === _classes_Marketplace__WEBPACK_IMPORTED_MODULE_11__/* .EnumRarity.legendary */ .p.legendary || nft?.status === "withdraw",
                                                onClick: ()=>handleRedirect(`/my-profile/character/${activeCharacterDetail?.nft?.id}/enhance`, true),
                                                className: "btn contained-secondary h-[40px] lg:h-fit flex w-full justify-center py-[10px] rounded-[6px] text-[16px] leading-[22px] lg:text-[14px] lg:leading-[14px] text-[#E42D25] font-[500] mb-[10px] lg:mb-0",
                                                children: lang["button/enhance"]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mb-[25px] lg:mb-0",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-h7 font-semibold mb-3 dark:text-white",
                                                        children: lang["rte/stats"]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_ClickTooltip__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                                                        className: "text-[12px] w-[335px] tooltip-box overflow-y-auto text-start",
                                                        message: handleRenderMessageTooltip("stats"),
                                                        positionY: "right",
                                                        positionX: "bottom",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex justify-center items-center gap-[5px]",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "bg-[#00000080] dark:bg-white/50 w-[17px] h-[17px] cursor-pointer rounded-[999px] flex justify-center items-center",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                                                                        className: "fill-white w-[5px] h-[11px]"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "text-[14px] text-black/50 dark:text-[#FFFFFF80] font-[500] leading-[14px]",
                                                                    children: lang["enjoy-and-earn/tip"]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "grid grid-cols-1 gap-[10px]",
                                                children: listStats.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CharacterStatisticDetailRow__WEBPACK_IMPORTED_MODULE_7__/* .CharacterStatisticDetailRow */ .j, {
                                                        item: item
                                                    }, item.label))
                                            })
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
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReadToEarnCharacter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67949:
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
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53015);
/* harmony import */ var _hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6483);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85277);
/* harmony import */ var _features_readToEarn_readToEarnSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45151);
/* harmony import */ var _icons_ArrowSliderIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41081);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__, _hooks_common__WEBPACK_IMPORTED_MODULE_6__]);
([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__, _hooks_common__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function ReadToEarnSlider({ characterList , onClickedLeftIconHandler , onClickedRightIconHandler , indexImg =0 , activeCharacterDetail  }) {
    const { 0: indexSlideSelected , 1: setIndexSlide  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [isMobile] = (0,_hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_5__/* .useWindowResizeMobile */ .c)(1024);
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .TL)();
    const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const handleSlideChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((swiper)=>{
        if (swiper && onClickedRightIconHandler && onClickedLeftIconHandler && isMobile) {
            const { activeIndex  } = swiper;
            dispatch(_features_readToEarn_readToEarnSlice__WEBPACK_IMPORTED_MODULE_7__/* .readToEarnActions.setCurrentIndexImg */ .b.setCurrentIndexImg(activeIndex));
        }
    }, [
        onClickedLeftIconHandler,
        onClickedRightIconHandler,
        dispatch,
        isMobile
    ]);
    const handleSlidesChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((isNext = false)=>{
        if (indexImg <= characterList.length - 1 && indexImg >= 0) {
            if (!isNext && !indexImg || isNext && indexImg === characterList.length - 1) {
                return;
            }
            dispatch(_features_readToEarn_readToEarnSlice__WEBPACK_IMPORTED_MODULE_7__/* .readToEarnActions.setCurrentIndexImg */ .b.setCurrentIndexImg(isNext ? indexImg + 1 : indexImg - 1));
        }
    }, [
        dispatch,
        indexImg,
        characterList
    ]);
    const handleClickImg = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((index)=>{
        dispatch(_features_readToEarn_readToEarnSlice__WEBPACK_IMPORTED_MODULE_7__/* .readToEarnActions.setCurrentIndexImg */ .b.setCurrentIndexImg(index));
        const { swiper  } = swiperRef.current;
        if (swiper) {
            swiper.slideTo(index);
        }
    }, [
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const { swiper  } = swiperRef.current;
        if (swiper && swiper.activeIndex !== indexImg) {
            swiper.slideTo(indexImg);
        }
    }, [
        isMobile,
        indexImg
    ]);
    const renderSwiper = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: false,
            slidesPerView: isMobile ? 1 : 5,
            spaceBetween: !isMobile ? 10 : 0,
            navigation: {
                prevEl: ".swiper-btn-prev",
                nextEl: ".swiper-btn-next"
            },
            pagination: isMobile && {
                el: ".swiper-pagination",
                clickable: true
            },
            modules: [
                swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,
                swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation
            ],
            className: isMobile ? "swiper_container" : "swiper_container_pc",
            onSlideChange: (swiper)=>handleSlideChange(swiper),
            ref: swiperRef,
            children: [
                characterList.map((character, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(isMobile ? "!w-[380px] !h-[378px]" : "!w-[55px] !h-[55px]"),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: ()=>handleClickImg(index),
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-full relative h-full", index === indexImg && !isMobile && "border-[2px] border-[#ee312f] rounded-[6px]"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                alt: "",
                                src: character.nft?.thumbnailUrl || `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/character.png`,
                                // layout="fill"
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("max-h-[337px] lg:max-h-none w-full h-full", !isMobile && "rounded-[6px]")
                            })
                        })
                    }, character.id)),
                isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "swiper-pagination dark:swiper-dark-pagination"
                })
            ]
        });
    }, [
        characterList,
        handleClickImg,
        handleSlideChange,
        indexImg,
        isMobile
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center gap-[15px] w-full max-w-[380px]",
        children: [
            !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>handleSlidesChange(),
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("swiper-btn-prev rotate-180"),
                children: characterList.length > 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ArrowSliderIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("h-[16px] w-[16px] fill-black dark:fill-white", indexImg === 0 && "fill-black/20 dark:fill-[#FFFFFF1A]")
                })
            }),
            renderSwiper(),
            !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: ()=>handleSlidesChange(true),
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("swiper-btn-next right-0"),
                    children: characterList.length > 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ArrowSliderIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("h-[16px] w-[16px] fill-black dark:fill-white", indexImg === characterList.length - 1 && "fill-black/20 dark:fill-[#FFFFFF1A]")
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReadToEarnSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const ClickTooltip = ({ message , children , positionY ="center" , positionX ="top" , className , classNameChildren , suffixClassName , contentClassName ,  })=>{
    const { 0: generatedId , 1: setGeneratedId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: contentPosition , 1: setContentPosition  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        left: "",
        right: ""
    });
    const { 0: suffixPosition , 1: setSuffixPosition  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        left: "",
        right: ""
    });
    const { 0: isShow , 1: setIsShow  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const tooltipRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const loadPosition = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        const container = document.getElementById(`tooltip-container-${generatedId}`)?.getBoundingClientRect();
        const content = document.getElementById(`tooltip-content-${generatedId}`)?.getBoundingClientRect();
        const children = document.getElementById(`tooltip-position-${generatedId}`)?.getBoundingClientRect();
        if (!container || !children || !content) return;
        console.log("test", document.getElementById(`tooltip-container-${generatedId}`), document.getElementById(`tooltip-content-${generatedId}`), document.getElementById(`tooltip-position-${generatedId}`));
        const contentPosition = {
            left: "",
            right: ""
        };
        const suffixPosition = {
            left: "",
            right: ""
        };
        switch(positionY){
            case "center":
                contentPosition.left = `${(container.width - content.width) / 2}px`;
                suffixPosition.left = `${(content.width - children.width) / 2}px`;
                break;
            case "left":
                contentPosition.left = "0";
                suffixPosition.left = `${container.width / 2}px`;
                break;
            case "right":
                contentPosition.right = "0";
                suffixPosition.right = `${container.width / 2}px`;
                break;
            default:
                break;
        }
        setContentPosition(contentPosition);
        setSuffixPosition(suffixPosition);
    }, [
        generatedId,
        positionY
    ]);
    const handleClickTooltip = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        setTimeout(()=>{
            loadPosition();
        }, 0.1);
        setIsShow(true);
    }, [
        loadPosition
    ]);
    const handleClickOutside = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event)=>{
        if (tooltipRef.current && !tooltipRef.current?.contains(event.target) || Array.from(event.target?.classList).findIndex((ele)=>ele === "got-it") !== -1) {
            setIsShow(false);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        document.addEventListener("click", handleClickOutside, true);
        return ()=>{
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const random = `${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 10000)}`;
        setGeneratedId(random);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        document.getElementById(`tooltip-container-${generatedId}`)?.addEventListener("mouseenter", loadPosition);
        return ()=>{
            document.getElementById(`tooltip-container-${generatedId}`)?.removeEventListener("mouseenter", loadPosition);
        };
    }, [
        generatedId,
        loadPosition
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        loadPosition();
    }, [
        loadPosition,
        message
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative inline-block group", classNameChildren),
        id: `tooltip-container-${generatedId}`,
        onClick: handleClickTooltip,
        children: [
            children,
            isShow && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed top-0 left-0 bottom-0 right-0 z-50 flex justify-center items-center lg:min-w-[1240px] lg:w-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute top-0 left-0 bottom-0 right-0 bg-modal-backdrop/70"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("break-words absolute z-[999]", positionX === "top" ? "mb-9" : "-mb-11", contentClassName),
                        id: `tooltip-content-${generatedId}`,
                        style: {
                            ...contentPosition
                        },
                        ref: tooltipRef,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative z-10 text-[14px] text-center bg-white text-black dark:text-[#FFFFFFE5] dark:bg-[#333333] shadow-lg rounded-[20px]", className),
                                children: message
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-3 h-3 -mt-[6px] rotate-45 bg-white dark:bg-[#333333]", "absolute", {
                                    "top-0": positionX === "bottom"
                                }, suffixClassName),
                                id: `tooltip-position-${generatedId}`,
                                style: {
                                    ...suffixPosition
                                }
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClickTooltip);


/***/ }),

/***/ 35770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InfoIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



function InfoIcon({ className  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        viewBoxWidth: 5,
        viewBoxHeight: 14,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M1 6C1 5.44772 1.44772 5 2 5H2.5C3.32843 5 4 5.67157 4 6.5V12C4 12.5523 3.55228 13 3 13C2.44772 13 2 12.5523 2 12V7C1.44772 7 1 6.55228 1 6Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M4.25 2.25C4.25 2.94036 3.69036 3.5 3 3.5C2.30964 3.5 1.75 2.94036 1.75 2.25C1.75 1.55964 2.30964 1 3 1C3.69036 1 4.25 1.55964 4.25 2.25Z"
            })
        ]
    });
}


/***/ }),

/***/ 10061:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_EarningProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78646);
/* harmony import */ var _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57636);
/* harmony import */ var _app_components_layouts_Protector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80152);
/* harmony import */ var _app_components_MyProfileNoCharacter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17633);
/* harmony import */ var _app_components_ReadToEarnCharacter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59718);
/* harmony import */ var _app_contexts_AppContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14613);
/* harmony import */ var _app_features_readToEarn_readToEarnSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45151);
/* harmony import */ var _app_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85750);
/* harmony import */ var _app_hooks_authentication__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(49614);
/* harmony import */ var _app_hooks_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85277);
/* harmony import */ var _app_services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86588);
/* harmony import */ var _app_services_query_endpoints_r2e__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59106);
/* harmony import */ var _app_hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6483);
/* harmony import */ var _app_classes_User__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(22314);
/* harmony import */ var _app_constants_key__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(63454);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_components_EarningProfile__WEBPACK_IMPORTED_MODULE_3__, _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_4__, _app_components_layouts_Protector__WEBPACK_IMPORTED_MODULE_5__, _app_components_ReadToEarnCharacter__WEBPACK_IMPORTED_MODULE_7__, _app_hooks_authentication__WEBPACK_IMPORTED_MODULE_11__, _app_hooks_common__WEBPACK_IMPORTED_MODULE_12__]);
([_app_components_EarningProfile__WEBPACK_IMPORTED_MODULE_3__, _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_4__, _app_components_layouts_Protector__WEBPACK_IMPORTED_MODULE_5__, _app_components_ReadToEarnCharacter__WEBPACK_IMPORTED_MODULE_7__, _app_hooks_authentication__WEBPACK_IMPORTED_MODULE_11__, _app_hooks_common__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const ReadToEarn = ()=>{
    const { activeCharacterDetail , earningProfile , characterList , indexImg , isFetchingCharacterList , isFetching: { isBeingActive , isGettingActive  } ,  } = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_12__/* .useAppSelector */ .CG)((state)=>state.readToEarn);
    const { myProfile  } = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_12__/* .useAppSelector */ .CG)((state)=>state.profile);
    const { userProfile  } = myProfile;
    const bAuthenticated = (0,_app_hooks_authentication__WEBPACK_IMPORTED_MODULE_11__/* .useAuthentication */ .J)(false);
    const dispatch = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_12__/* .useAppDispatch */ .TL)();
    const [getProfile, getProfileResult] = _app_services_query_endpoints_r2e__WEBPACK_IMPORTED_MODULE_14__/* ["default"].useLazyGetEarningProfileQuery */ .Z.useLazyGetEarningProfileQuery();
    const [getActiveCharacter] = _app_services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_13__/* ["default"].useLazyGetActiveCharacterDetailQuery */ .Z.useLazyGetActiveCharacterDetailQuery({});
    const [activeCharacter] = _app_services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_13__/* ["default"].useActiveCharacterMutation */ .Z.useActiveCharacterMutation();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_app_contexts_AppContext__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).state;
    const [isMobile] = (0,_app_hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_15__/* .useWindowResizeMobile */ .c)(1024);
    const isFetchingData = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return isBeingActive;
    }, [
        isBeingActive
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (bAuthenticated) {
            bAuthenticated && getProfile(undefined);
            bAuthenticated && getActiveCharacter(undefined);
        } else {
            dispatch(_app_features_readToEarn_readToEarnSlice__WEBPACK_IMPORTED_MODULE_9__/* .readToEarnActions.resetCharacterList */ .b.resetCharacterList());
        }
    }, [
        bAuthenticated,
        dispatch,
        getActiveCharacter,
        getProfile
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        return ()=>{
            dispatch(_app_features_readToEarn_readToEarnSlice__WEBPACK_IMPORTED_MODULE_9__/* .readToEarnActions.resetCharacterList */ .b.resetCharacterList());
        };
    }, [
        dispatch
    ]);
    const onClickedToToomicButton = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (e, type)=>{
        e.stopPropagation();
        if (!characterList[indexImg].id) return;
        const data = await activeCharacter(characterList[indexImg].id);
        if (data?.data?.message) {
            if (userProfile?.syncStatus == _app_classes_User__WEBPACK_IMPORTED_MODULE_16__/* .EUserSyncStatus.PENDING */ .wE.PENDING && userProfile.userToomics?.directionFrom === "sightn" && !userProfile.userToomics.userToomicsId) {
                type === "mobile" && window.open(`${_app_constants_key__WEBPACK_IMPORTED_MODULE_17__/* .linkConnectToToomics */ .hB}?pid=Sightn&relationUuid=${userProfile?.userToomics?.relationUuid || ""}&userSightnId=${userProfile?.id}`, "_blank");
                type === "desktop" && window.open(`${_app_constants_key__WEBPACK_IMPORTED_MODULE_17__/* .linkConnectToToomics */ .hB}?pid=Sightn&relationUuid=${userProfile?.userToomics?.relationUuid || ""}&userSightnId=${userProfile?.id}`, "_blank");
            } else {
                type === "mobile" && window.open(`${_app_constants_key__WEBPACK_IMPORTED_MODULE_17__/* .linkToToomics */ .Rm}?pid=Sightn&relationUuid=${userProfile?.userToomics?.relationUuid || ""}`, "_blank");
                type === "desktop" && window.open(`${_app_constants_key__WEBPACK_IMPORTED_MODULE_17__/* .linkToToomics */ .Rm}?pid=Sightn&relationUuid=${userProfile?.userToomics?.relationUuid || ""}`, "_blank");
            }
        } else {
            dispatch(_app_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_10__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                title: "Something went wrong",
                type: "danger"
            }));
        }
        dispatch(_app_features_readToEarn_readToEarnSlice__WEBPACK_IMPORTED_MODULE_9__/* .readToEarnActions.resetCharacterList */ .b.resetCharacterList());
        await getActiveCharacter({});
    }, [
        activeCharacter,
        characterList,
        dispatch,
        getActiveCharacter,
        indexImg,
        userProfile
    ]);
    const renderContent = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (getProfileResult.isFetching || !earningProfile || isFetchingData) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col flex-grow justify-center items-center h-full mt-10 lg:mt-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-icon-2xl h-icon-2xl animate-spin rounded-full border-4 border-white border-t-4 border-t-red-500"
                })
            });
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: !isMobile ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex flex-col items-stretch py-10 px-5 2xl:px-36 space-y-12 min-h-full", "lg:items-stretch lg:flex-col lg:space-x-6 lg:space-y-0 xl:items-center"),
                children: [
                    characterList.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_ReadToEarnCharacter__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        onClickedToToomicButton: (e, type)=>onClickedToToomicButton(e, type)
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: !characterList.length && !activeCharacterDetail && !isFetchingCharacterList && !isGettingActive ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_MyProfileNoCharacter__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            title: "There is no Character in Your collection.",
                            description: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "hidden lg:block",
                                        children: [
                                            lang["rte/buy-your-1"],
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            " ",
                                            lang["rte/buy-your-2"]
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "lg:hidden",
                                        children: lang["rte/buy-your-own-char"]
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col flex-grow justify-center items-center h-full mt-10 lg:mt-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-icon-2xl h-icon-2xl animate-spin rounded-full border-4 border-white border-t-4 border-t-red-500"
                            })
                        })
                    }),
                    characterList.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "!mt-[20px] !mx-0 lg:w-[1200px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_EarningProfile__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex flex-col items-stretch space-y-5 min-h-full"),
                children: [
                    characterList.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_ReadToEarnCharacter__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        onClickedToToomicButton: (e, type)=>onClickedToToomicButton(e, type),
                        className: "!rounded-none"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: !characterList.length && !activeCharacterDetail && !isFetchingCharacterList && !isGettingActive ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_MyProfileNoCharacter__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            title: "You have no available characters.",
                            description: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "hidden lg:block",
                                        children: [
                                            lang["rte/buy-your-1"],
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            " ",
                                            lang["rte/buy-your-2"]
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "lg:hidden",
                                        children: lang["rte/buy-your-own-char"]
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col flex-grow justify-center items-center h-full mt-10 lg:mt-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-icon-2xl h-icon-2xl animate-spin rounded-full border-4 border-white border-t-4 border-t-red-500"
                            })
                        })
                    }),
                    characterList.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_EarningProfile__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                ]
            })
        });
    }, [
        isMobile,
        getProfileResult.isFetching,
        earningProfile,
        isFetchingData,
        lang,
        onClickedToToomicButton,
        characterList.length,
        activeCharacterDetail,
        isFetchingCharacterList,
        isGettingActive, 
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_layouts_Protector__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            title: "Enjoy and Earn",
            description: "Enjoy and Earn",
            bHeaderAlwaysOnTop: true,
            children: renderContent()
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReadToEarn);

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

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 53015:
/***/ ((module) => {

module.exports = import("swiper/react");;

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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,5152,5277,8733,4969,5764,7636,2558,2314,3523,3941], () => (__webpack_exec__(10061)));
module.exports = __webpack_exports__;

})();