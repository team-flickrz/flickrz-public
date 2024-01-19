"use strict";
exports.id = 2026;
exports.ids = [2026];
exports.modules = {

/***/ 737:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61103);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73732);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14613);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_common__WEBPACK_IMPORTED_MODULE_5__]);
_utils_common__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const EquipmentUpgradeItem = ({ title , image , link , bonusAmount , bonusAttribute , level , className , groupClassName , id ,  })=>{
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).state;
    const renderChildren = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("w-full pb-8 cursor-pointer", {
                "hover:shadow-lg hover:scale-[1.15] transition-all": link
            }, className),
            id: id,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("bg-cover bg-no-repeat bg-center rounded-t-xl h-[246px] w-full relative z-10", groupClassName?.imageClassName),
                    style: {
                        backgroundImage: `url(${image})`
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute top-4 left-5 flex flex-row items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bg-black/30 py-1 px-2 rounded-md text-white text-h10 font-bold",
                            children: `Lvl ${level}`
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "px-5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-h7 mt-5 text-black dark:text-white font-semibold",
                            children: [
                                "#",
                                title
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-3 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-black/30 dark:text-[#595B5F] text-h10",
                                    children: lang["modal/bonus"]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-1 text-h9 font-semibold text-[#27AE60] dark:text-white",
                                    children: `+ ${bonusAmount} ${(0,_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .getBonusAttribute */ .QW)(bonusAttribute)}`
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }, [
        bonusAmount,
        bonusAttribute,
        className,
        groupClassName?.imageClassName,
        id,
        image,
        lang,
        level,
        link,
        title, 
    ]);
    return link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: link,
        children: renderChildren()
    }) : renderChildren();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EquipmentUpgradeItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62026:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66790);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14613);
/* harmony import */ var _features_equipmentUpgrade_equipmentUpgradeSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13644);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53450);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_equipment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2073);
/* harmony import */ var _services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17827);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73732);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(60088);
/* harmony import */ var _commons_NoItemsComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(50072);
/* harmony import */ var _EquipmentUpgradeItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(737);
/* harmony import */ var _icons_ArrowBackWhiteIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(86492);
/* harmony import */ var _icons_DisableUpgradeIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(81709);
/* harmony import */ var _icons_UpgradeIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(94386);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_10__, _utils_common__WEBPACK_IMPORTED_MODULE_13__, _EquipmentUpgradeItem__WEBPACK_IMPORTED_MODULE_16__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_10__, _utils_common__WEBPACK_IMPORTED_MODULE_13__, _EquipmentUpgradeItem__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const UpgradeEquipmentPage = ({ className  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_10__/* .useAppDispatch */ .TL)();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).state;
    const nftState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_10__/* .useAppSelector */ .CG)((state)=>state.nft);
    const { firstEquipmentID , firstEquipmentItem , equipments , filtersEquipmentList: filters , equipmentList , newEquipment , upgradeFee ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_10__/* .useAppSelector */ .CG)((state)=>state.equipmentUpgrade);
    const { id  } = router.query;
    const [getEquipmentList, { isFetching: isFetchingEquipment  }] = _services_query_endpoints_equipment__WEBPACK_IMPORTED_MODULE_11__/* ["default"].useLazyGetEquipmentUpgradeQuery */ .Z.useLazyGetEquipmentUpgradeQuery();
    const [getEquipment, getEquipmentResult] = _services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_12__/* ["default"].useLazyGetOneEquipmentQuery */ .Z.useLazyGetOneEquipmentQuery();
    const [getUpgradeFee] = _services_query_endpoints_equipment__WEBPACK_IMPORTED_MODULE_11__/* ["default"].useLazyGetEquipmentUpgradeFeeQuery */ .Z.useLazyGetEquipmentUpgradeFeeQuery();
    const listRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const { equipmentDetail  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_10__/* .useAppSelector */ .CG)((state)=>state.equipment);
    const { nft  } = equipmentDetail;
    const { 0: isUpgrading , 1: setIsUpgrading  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const handleAddEquipmentItem = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((item)=>{
        if (!firstEquipmentID) {
            router.push(`${_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.MY_EQUIPMENT */ .Yj.MY_EQUIPMENT}/${item.id}/upgrade`);
            return;
        }
        if (equipments.length === 2) return;
        dispatch(_features_equipmentUpgrade_equipmentUpgradeSlice__WEBPACK_IMPORTED_MODULE_8__/* .equipmentUpgradeActions.setEquipmentsSlot */ .j.setEquipmentsSlot(item));
    }, [
        dispatch,
        equipments.length,
        router,
        firstEquipmentID
    ]);
    const handleOnBackBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        if (!firstEquipmentID) {
            router.push(`${_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.MY_COLLECTION */ .Yj.MY_COLLECTION}`);
            dispatch(_features_equipmentUpgrade_equipmentUpgradeSlice__WEBPACK_IMPORTED_MODULE_8__/* .equipmentUpgradeActions.setClearNewEquipment */ .j.setClearNewEquipment());
            return;
        }
        if (newEquipment) {
            router.push(`${_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.MY_COLLECTION */ .Yj.MY_COLLECTION}`);
            dispatch(_features_equipmentUpgrade_equipmentUpgradeSlice__WEBPACK_IMPORTED_MODULE_8__/* .equipmentUpgradeActions.setClearNewEquipment */ .j.setClearNewEquipment());
            return;
        } else {
            router.push(`${_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.MY_EQUIPMENT */ .Yj.MY_EQUIPMENT}/${nft?.id}`);
            return;
        }
    }, [
        dispatch,
        nft?.id,
        router,
        newEquipment,
        firstEquipmentID
    ]);
    const hanldeDeleteFirstEquipment = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        if (firstEquipmentItem) {
            router.push(`${_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.EMPTY_UPGRADE_EQUIPMENT */ .Yj.EMPTY_UPGRADE_EQUIPMENT}`);
        }
    }, [
        firstEquipmentItem,
        router
    ]);
    const handleUnSelectEquipmentSlot = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((items)=>{
        if (items) {
            dispatch(_features_equipmentUpgrade_equipmentUpgradeSlice__WEBPACK_IMPORTED_MODULE_8__/* .equipmentUpgradeActions.setUnSelectEquipmentSlot */ .j.setUnSelectEquipmentSlot(items.id));
        } else return;
    }, [
        dispatch
    ]);
    const handleOpenUpgradeModal = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_9__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/upgrade-equipment",
            propsState: {
                onConfirmHandler: ()=>setIsUpgrading(true),
                onCloseHandler: ()=>{
                    setIsUpgrading(false);
                    router.push(`${_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.EMPTY_UPGRADE_EQUIPMENT */ .Yj.EMPTY_UPGRADE_EQUIPMENT}`);
                }
            }
        }));
    }, [
        dispatch,
        router
    ]);
    const renderNftItem = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((item, index)=>{
        if (!item.equipment) return;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EquipmentUpgradeItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            image: item.imageUrl,
            title: item.id.toString(),
            bonusAmount: item.equipment.bonus,
            level: item.equipment.level,
            bonusAttribute: item.equipment.itemType,
            className: "mt-10 max-w-[335px] sm:max-w-[265px]",
            id: `equipment-item-${index}`,
            groupClassName: {
                imageClassName: "!h-[297px] sm:!h-[246px]"
            }
        });
    }, []);
    const equipmentListFiltered = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        return equipmentList.filter((item)=>{
            if (item.id === Number(id)) return false;
            if (firstEquipmentItem.equipment?.itemType && item.equipment?.level !== firstEquipmentItem.equipment?.level) return false;
            if (firstEquipmentItem.equipment?.itemType && item.equipment?.itemType !== firstEquipmentItem.equipment?.itemType) return false;
            if (equipments.filter((equip)=>equip.id === item.id).length > 0) return false;
            if (item.equipment?.level === nftState.equipmentMaxLevel) return false;
            return true;
        });
    }, [
        equipmentList,
        equipments,
        firstEquipmentItem.equipment?.itemType,
        firstEquipmentItem.equipment?.level,
        id,
        nftState.equipmentMaxLevel, 
    ]);
    const isBottom = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((ref)=>{
        if (!ref.current) {
            return false;
        }
        return ref.current.getBoundingClientRect().bottom <= window.innerHeight - 30;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const onScroll = ()=>{
            if (!filters.page) return;
            if (!filters.totalPages) return;
            if (!(filters.page < filters.totalPages)) return;
            if (isFetchingEquipment) return;
            if (isBottom(listRef)) {
                dispatch(_features_equipmentUpgrade_equipmentUpgradeSlice__WEBPACK_IMPORTED_MODULE_8__/* .equipmentUpgradeActions.handleFilterEquipmentList */ .j.handleFilterEquipmentList({
                    page: filters.page + 1
                }));
            }
        };
        document.addEventListener("scroll", onScroll);
        return ()=>document.removeEventListener("scroll", onScroll);
    }, [
        dispatch,
        filters.page,
        filters.totalPages,
        isBottom,
        isFetchingEquipment
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (!id) return;
        if (equipmentListFiltered.length) return;
        dispatch(_features_equipmentUpgrade_equipmentUpgradeSlice__WEBPACK_IMPORTED_MODULE_8__/* .equipmentUpgradeActions.handlePlusPageFilter */ .j.handlePlusPageFilter());
    }, [
        dispatch,
        equipmentListFiltered.length,
        id,
        equipmentList.length
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const args = (0,_utils_common__WEBPACK_IMPORTED_MODULE_13__/* .removeEmptyProperties */ .Nq)({
            page: filters.page,
            limit: filters.limit
        });
        getEquipmentList(args);
    }, [
        filters.page,
        filters.limit,
        getEquipmentList
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        dispatch(_features_equipmentUpgrade_equipmentUpgradeSlice__WEBPACK_IMPORTED_MODULE_8__/* .equipmentUpgradeActions.setFirstEquipmentId */ .j.setFirstEquipmentId(id));
    }, [
        dispatch,
        id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (!firstEquipmentID || isUpgrading) return;
        getEquipment(firstEquipmentID);
    }, [
        firstEquipmentID,
        getEquipment,
        nftState.timeStampAction,
        isUpgrading
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (!firstEquipmentItem.equipment?.itemType) return;
        if (!firstEquipmentItem.equipment?.level) return;
        getUpgradeFee({
            itemType: String(firstEquipmentItem.equipment?.itemType),
            level: Number(firstEquipmentItem.equipment?.level)
        });
    }, [
        firstEquipmentItem.equipment?.itemType,
        firstEquipmentItem.equipment?.level,
        getUpgradeFee,
        equipments, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        return ()=>{
            dispatch(_features_equipmentUpgrade_equipmentUpgradeSlice__WEBPACK_IMPORTED_MODULE_8__/* .equipmentUpgradeActions.setDefaultUpgradeEquipment */ .j.setDefaultUpgradeEquipment());
            dispatch(_features_equipmentUpgrade_equipmentUpgradeSlice__WEBPACK_IMPORTED_MODULE_8__/* .equipmentUpgradeActions.setClearEquipmentList */ .j.setClearEquipmentList());
        };
    }, [
        dispatch
    ]);
    const renderBackButton = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex 3xl:pl-[150px] mb-7 cursor-pointer select-none",
            onClick: handleOnBackBtnClicked,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ArrowBackWhiteIcon__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    className: "w-[26px] h-[26px] mt-9"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-h7 font-semibold text-white mt-8",
                    children: lang["modal/upgrade-equipment"]
                })
            ]
        });
    }, [
        handleOnBackBtnClicked,
        lang
    ]);
    const renderUpgradeEquipmentArea = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-start 3xl:justify-center gap-8 mb-10 w-full overflow-x-auto overflow-y-hidden px-6 3xl:px-0 scrollbar-thin",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative flex justify-center shrink-0 grow-0", "bg-[rgba(170,153,125,0.2)] shadow-character-slot rounded-[14px] bg-cover bg-center", "w-character-container-w lg:h-[358px]"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute w-equipment-card-w ",
                                children: firstEquipmentItem.equipment?.id ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full h-full",
                                    onClick: hanldeDeleteFirstEquipment,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EquipmentUpgradeItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                        className: "h-[345px] mt-[6px]",
                                        image: firstEquipmentItem.nft?.imageUrl,
                                        level: firstEquipmentItem.equipment.level,
                                        title: String(firstEquipmentItem.nft?.id),
                                        bonusAmount: firstEquipmentItem.equipment?.bonus,
                                        bonusAttribute: firstEquipmentItem.equipment?.itemType
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute w-[263px] mt-[6px] h-[345px] bg-[#988E7E] rounded-xl flex justify-center items-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/svg/add-card.svg`,
                                        alt: "",
                                        width: "65px",
                                        height: "65px"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[35px] grow-0 shrink-0 flex items-center justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/svg/graft-character.svg`,
                                alt: "",
                                width: "35px",
                                height: "35px"
                            })
                        }),
                        [
                            ...equipments,
                            ...Array(2)
                        ].slice(0, 2).map((equipmentItem, equipmentIndex)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    equipmentIndex !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-[35px] grow-0 shrink-0 flex items-center justify-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/svg/graft-character.svg`,
                                            alt: "",
                                            width: "35px",
                                            height: "35px"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: ()=>handleUnSelectEquipmentSlot(equipmentItem),
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative flex justify-center items-center shrink-0 grow-0", "bg-[rgba(170,153,125,0.2)] shadow-character-slot rounded-[14px]", "w-[275px] lg:h-[358px]"),
                                        children: equipmentItem ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EquipmentUpgradeItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                            image: equipmentItem.imageUrl,
                                            level: equipmentItem.equipment.level,
                                            title: equipmentItem.id,
                                            bonusAmount: equipmentItem.equipment?.bonus,
                                            bonusAttribute: equipmentItem.equipment?.itemType,
                                            className: "w-[263px]"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute w-[263px] h-[345px] bg-[#988E7E] rounded-xl flex justify-center items-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/svg/add-card.svg`,
                                                alt: "",
                                                width: "65px",
                                                height: "65px"
                                            })
                                        })
                                    }, equipmentIndex)
                                ]
                            });
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex justify-center items-center w-[40px] grow-0 shrink-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/right-arrow.png`,
                                alt: "",
                                width: "40px",
                                height: "40px"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("grow-0 shrink-0 relative flex justify-center items-center", "bg-[rgba(170,153,125,0.2)] shadow-character-slot rounded-[14px] overflow-visible", "w-[275px] h-[358px]"),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute w-equipment-card-w h-[345px] bg-[#988E7E] rounded-xl flex justify-center items-center z-10",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/svg/question-card.svg`,
                                            alt: "",
                                            width: "65px",
                                            height: "65px"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute top-0 left-0 bottom-0 right-0 bg-contain bg-no-repeat bg-center scale-[1.4] animate-pulse",
                                    style: {
                                        backgroundImage: `url('${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/svg/light-effect.svg')`
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute top-0 left-0 bottom-0 right-0 bg-contain bg-no-repeat bg-center scale-[1.4] animate-pulse",
                                    style: {
                                        backgroundImage: `url('${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/svg/spark-effect.svg')`
                                    }
                                })
                            ]
                        })
                    ]
                }),
                firstEquipmentID && equipments.length === 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-center mb-9 items-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_14__/* .Button */ .z, {
                        onClick: handleOpenUpgradeModal,
                        className: "contained-primary w-full lg:w-equipment-card-w",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_UpgradeIcon__WEBPACK_IMPORTED_MODULE_19__/* .UpgradeIcon */ .R, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "ml-2 text-white text-h8",
                                children: [
                                    lang["button/upgrade"],
                                    " (",
                                    `${upgradeFee.upgradeCost} ${(0,_utils_common__WEBPACK_IMPORTED_MODULE_13__/* .getTokenName */ ._M)(upgradeFee.costToken)}`,
                                    ")"
                                ]
                            })
                        ]
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-center mb-9 items-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_14__/* .Button */ .z, {
                        className: "bg-[#E6E6E6] w-full lg:w-equipment-card-w cursor-not-allowed",
                        disabled: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_DisableUpgradeIcon__WEBPACK_IMPORTED_MODULE_18__/* .DisableUpgradeIcon */ .e, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "ml-2 text-[#555555]/50 text-h8",
                                children: lang["button/upgrade"]
                            })
                        ]
                    })
                })
            ]
        });
    }, [
        equipments,
        firstEquipmentID,
        firstEquipmentItem.equipment?.bonus,
        firstEquipmentItem.equipment?.id,
        firstEquipmentItem.equipment?.itemType,
        firstEquipmentItem.equipment?.level,
        firstEquipmentItem.nft?.id,
        firstEquipmentItem.nft?.imageUrl,
        handleOpenUpgradeModal,
        handleUnSelectEquipmentSlot,
        hanldeDeleteFirstEquipment,
        lang,
        upgradeFee.costToken,
        upgradeFee.upgradeCost, 
    ]);
    const renderYourCharacterPanel = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("py-12 px-6 lg:px-36 bg-[#F8F8F8] dark:bg-[#0f0f0f]", className),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-h6 font-semibold dark:text-white",
                    children: lang["comp/your-equipment"]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("h-full"),
                    children: [
                        equipmentListFiltered.length > 0 && !isUpgrading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(303px,5fr))] lg:mx-5",
                            ref: listRef,
                            children: equipmentListFiltered.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>handleAddEquipmentItem(item),
                                    className: "flex justify-center lg:px-5",
                                    children: renderNftItem(item, index)
                                }, index))
                        }),
                        !getEquipmentResult.isFetching && equipmentListFiltered.length === 0 && !isUpgrading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_NoItemsComponent__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            classNameImage: "w-[100px] lg:w-[150px] mt-[30px]",
                            description: filters.keyword ? `${lang["profile/no-items-found"]}` : `${lang["comp/no-equip-same-lv"]}`
                        }),
                        (isFetchingEquipment || isUpgrading) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col flex-grow justify-center items-center lg:h-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-icon-2xl h-icon-2xl animate-spin rounded-full border-4 border-white border-t-4 border-t-red-500"
                            })
                        })
                    ]
                })
            ]
        });
    }, [
        className,
        equipmentListFiltered,
        filters.keyword,
        getEquipmentResult.isFetching,
        handleAddEquipmentItem,
        isFetchingEquipment,
        lang,
        renderNftItem,
        isUpgrading, 
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        lang["comp/upgrade-equip"],
                        " - Flickrz"
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col bg-[#59544D] dark:bg-dark-01 3xl:height-[520px] px-6 3xl:px-0",
                children: [
                    renderBackButton(),
                    renderUpgradeEquipmentArea()
                ]
            }),
            renderYourCharacterPanel()
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpgradeEquipmentPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ DisableUpgradeIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const DisableUpgradeIcon = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "20",
        height: "12",
        viewBox: "0 0 20 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M19.0934 1.06833C19.0004 0.844346 18.8224 0.666352 18.5984 0.573333C18.4882 0.526362 18.3699 0.501448 18.2501 0.5H13.6668C13.4237 0.5 13.1905 0.596577 13.0186 0.768486C12.8467 0.940394 12.7501 1.17355 12.7501 1.41667C12.7501 1.65978 12.8467 1.89294 13.0186 2.06485C13.1905 2.23676 13.4237 2.33333 13.6668 2.33333H16.0409L10.9168 7.4575L7.90094 4.4325C7.81572 4.34658 7.71434 4.27839 7.60264 4.23185C7.49093 4.18531 7.37112 4.16135 7.25011 4.16135C7.1291 4.16135 7.00928 4.18531 6.89758 4.23185C6.78587 4.27839 6.68449 4.34658 6.59927 4.4325L1.09927 9.9325C1.01336 10.0177 0.945161 10.1191 0.898623 10.2308C0.852085 10.3425 0.828125 10.4623 0.828125 10.5833C0.828125 10.7043 0.852085 10.8242 0.898623 10.9359C0.945161 11.0476 1.01336 11.149 1.09927 11.2342C1.18449 11.3201 1.28587 11.3883 1.39758 11.4348C1.50928 11.4814 1.6291 11.5053 1.75011 11.5053C1.87112 11.5053 1.99093 11.4814 2.10264 11.4348C2.21434 11.3883 2.31572 11.3201 2.40094 11.2342L7.25011 6.37583L10.2659 9.40083C10.3512 9.48675 10.4525 9.55495 10.5642 9.60148C10.6759 9.64802 10.7958 9.67198 10.9168 9.67198C11.0378 9.67198 11.1576 9.64802 11.2693 9.60148C11.381 9.55495 11.4824 9.48675 11.5676 9.40083L17.3334 3.62583V6C17.3334 6.24312 17.43 6.47627 17.6019 6.64818C17.7738 6.82009 18.007 6.91667 18.2501 6.91667C18.4932 6.91667 18.7264 6.82009 18.8983 6.64818C19.0702 6.47627 19.1668 6.24312 19.1668 6V1.41667C19.1653 1.29688 19.1404 1.17854 19.0934 1.06833Z",
            fill: "#555555",
            opacity: "50%"
        })
    });
};


/***/ }),

/***/ 94386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ UpgradeIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const UpgradeIcon = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "20",
        height: "12",
        viewBox: "0 0 20 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M19.0933 1.06833C19.0003 0.844346 18.8223 0.666352 18.5983 0.573333C18.4881 0.526362 18.3698 0.501448 18.25 0.5H13.6667C13.4235 0.5 13.1904 0.596577 13.0185 0.768486C12.8466 0.940394 12.75 1.17355 12.75 1.41667C12.75 1.65978 12.8466 1.89294 13.0185 2.06485C13.1904 2.23676 13.4235 2.33333 13.6667 2.33333H16.0408L10.9167 7.4575L7.90082 4.4325C7.8156 4.34658 7.71422 4.27839 7.60251 4.23185C7.49081 4.18531 7.371 4.16135 7.24998 4.16135C7.12897 4.16135 7.00916 4.18531 6.89746 4.23185C6.78575 4.27839 6.68437 4.34658 6.59915 4.4325L1.09915 9.9325C1.01323 10.0177 0.945039 10.1191 0.898501 10.2308C0.851963 10.3425 0.828003 10.4623 0.828003 10.5833C0.828003 10.7043 0.851963 10.8242 0.898501 10.9359C0.945039 11.0476 1.01323 11.149 1.09915 11.2342C1.18437 11.3201 1.28575 11.3883 1.39746 11.4348C1.50916 11.4814 1.62897 11.5053 1.74998 11.5053C1.871 11.5053 1.99081 11.4814 2.10251 11.4348C2.21422 11.3883 2.3156 11.3201 2.40082 11.2342L7.24998 6.37583L10.2658 9.40083C10.351 9.48675 10.4524 9.55495 10.5641 9.60148C10.6758 9.64802 10.7956 9.67198 10.9167 9.67198C11.0377 9.67198 11.1575 9.64802 11.2692 9.60148C11.3809 9.55495 11.4823 9.48675 11.5675 9.40083L17.3333 3.62583V6C17.3333 6.24312 17.4299 6.47627 17.6018 6.64818C17.7737 6.82009 18.0069 6.91667 18.25 6.91667C18.4931 6.91667 18.7263 6.82009 18.8982 6.64818C19.0701 6.47627 19.1667 6.24312 19.1667 6V1.41667C19.1652 1.29688 19.1403 1.17854 19.0933 1.06833Z",
            fill: "white"
        })
    });
};


/***/ })

};
;