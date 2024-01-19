"use strict";
(() => {
var exports = {};
exports.id = 2465;
exports.ids = [2465];
exports.modules = {

/***/ 401:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_marketplace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1774);
/* harmony import */ var _features_marketplace_badgeSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41722);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73732);
/* harmony import */ var _features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99275);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66790);
/* harmony import */ var _BadgeItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51095);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14613);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_4__, _utils_common__WEBPACK_IMPORTED_MODULE_7__, _features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_8__, _BadgeItem__WEBPACK_IMPORTED_MODULE_10__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_4__, _utils_common__WEBPACK_IMPORTED_MODULE_7__, _features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_8__, _BadgeItem__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const BadgeList = ()=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    const { rows , page , limit , totalPages , totalItems  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.badge);
    const { filter  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.marketplace);
    const { badgeFilter  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.sidebar);
    const [getBadge, getBadgeResult] = _services_query_endpoints_marketplace__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useLazyGetBadgeQuery */ .Z.useLazyGetBadgeQuery();
    const listRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z).state;
    const isBottom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((ref)=>{
        if (!ref.current) {
            return false;
        }
        return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const onScroll = ()=>{
            if (isBottom(listRef) && page < totalPages && !getBadgeResult.isFetching) {
                dispatch(_features_marketplace_badgeSlice__WEBPACK_IMPORTED_MODULE_6__/* .badgeActions.handleIncrementPage */ .w.handleIncrementPage());
            }
        };
        document.addEventListener("scroll", onScroll);
        return ()=>document.removeEventListener("scroll", onScroll);
    }, [
        page,
        totalPages,
        isBottom,
        dispatch,
        getBadgeResult.isFetching
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getBadge((0,_utils_common__WEBPACK_IMPORTED_MODULE_7__/* .removeEmptyProperties */ .Nq)({
            limit,
            page,
            keyword: filter.keyword,
            direction: filter.direction,
            ...badgeFilter
        }));
    }, [
        getBadge,
        page,
        limit,
        filter.keyword,
        filter.direction,
        badgeFilter
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch(_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_8__/* .marketplaceActions.setTotalItems */ .z.setTotalItems(totalItems));
    }, [
        dispatch,
        totalItems
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            rows.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("grid grid-cols-[repeat(auto-fill,minmax(265px,5fr))] gap-4 lg:gap-y-12"),
                ref: listRef,
                children: rows.map((badge, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BadgeItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            image: badge.nft.thumbnailUrl,
                            title: badge.name,
                            link: `${_constants_route__WEBPACK_IMPORTED_MODULE_9__/* .ROUTER.MARKET_BADGE */ .Yj.MARKET_BADGE}/${badge.nft.id}`,
                            priceAmount: badge.nft.price,
                            priceToken: badge.nft.token,
                            benefitAmount: badge.benefitAmount,
                            benefitType: badge.benefitType,
                            idItem: badge.nft.id,
                            className: "max-w-[335px] sm:max-w-[265px]",
                            groupClassName: {
                                imageClassName: "!h-[297px] sm:!h-[246px]"
                            }
                        })
                    }, index))
            }),
            !getBadgeResult.isFetching && rows.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col flex-grow justify-center items-center mt-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/no-item-marketplace.png`,
                        alt: "",
                        height: "150px",
                        width: "150px"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-h6 dark:text-white/30 text-black/30 mt-2",
                        children: lang["common/no-items"]
                    })
                ]
            }),
            getBadgeResult.isFetching && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col flex-grow justify-center items-center mt-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-icon-2xl h-icon-2xl animate-spin rounded-full border-4 border-white border-t-4 border-t-red-500"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BadgeList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21946:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85277);
/* harmony import */ var _CharacterItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69380);
/* harmony import */ var _services_query_endpoints_marketplace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1774);
/* harmony import */ var _features_marketplace_characterSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17527);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73732);
/* harmony import */ var _features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99275);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66790);
/* harmony import */ var _features_route_routeSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48172);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_4__, _CharacterItem__WEBPACK_IMPORTED_MODULE_5__, _utils_common__WEBPACK_IMPORTED_MODULE_8__, _features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_9__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_4__, _CharacterItem__WEBPACK_IMPORTED_MODULE_5__, _utils_common__WEBPACK_IMPORTED_MODULE_8__, _features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const CharacterList = ()=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    const { rows , page , limit , totalPages , totalItems  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.character);
    const { filter  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.marketplace);
    const { characterFilter  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.sidebar);
    const [getCharacter, { isFetching  }] = _services_query_endpoints_marketplace__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useLazyGetCharacterQuery */ .Z.useLazyGetCharacterQuery();
    const listRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const isBottom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((ref)=>{
        if (!ref.current) {
            return false;
        }
        return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const onScroll = ()=>{
            if (isBottom(listRef) && page < totalPages && !isFetching) {
                dispatch(_features_marketplace_characterSlice__WEBPACK_IMPORTED_MODULE_7__/* .characterActions.handleIncrementPage */ .h.handleIncrementPage());
            }
        };
        document.addEventListener("scroll", onScroll);
        return ()=>document.removeEventListener("scroll", onScroll);
    }, [
        page,
        totalPages,
        isBottom,
        dispatch,
        isFetching
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getCharacter((0,_utils_common__WEBPACK_IMPORTED_MODULE_8__/* .removeEmptyProperties */ .Nq)({
            limit,
            page,
            keyword: filter.keyword,
            direction: filter.direction,
            ...characterFilter,
            rarity: characterFilter.rarity.toString()
        }));
    }, [
        getCharacter,
        page,
        limit,
        filter.keyword,
        filter.direction,
        characterFilter
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch(_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_9__/* .marketplaceActions.setTotalItems */ .z.setTotalItems(totalItems));
    }, [
        dispatch,
        totalItems
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            rows.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("grid grid-cols-[repeat(auto-fill,minmax(265px,5fr))] gap-4 lg:gap-y-12"),
                ref: listRef,
                children: rows.map((character, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center",
                        onClick: ()=>localStorage.removeItem(_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_11__/* .PREVIOUS_PAGE_KEY */ .m8),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CharacterItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            image: character.nft.thumbnailUrl,
                            title: character.nft.id.toString(),
                            link: `${_constants_route__WEBPACK_IMPORTED_MODULE_10__/* .ROUTER.MARKET_CHARACTER */ .Yj.MARKET_CHARACTER}/${character.nft.id}`,
                            priceAmount: character.nft.price,
                            priceToken: character.nft.token,
                            earningAmount: character.averageEarning,
                            earningToken: character.typeTokenEarning,
                            level: character.level,
                            className: "max-w-[335px] sm:max-w-[265px]",
                            rarity: character.rarity,
                            groupClassName: {
                                imageClassName: "!h-[297px] sm:!h-[246px]"
                            }
                        })
                    }, index))
            }),
            !isFetching && rows.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col flex-grow justify-center items-center mt-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/no-item-marketplace.png`,
                        alt: "",
                        height: "150px",
                        width: "150px"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-h6 dark:text-white/30 text-black/30 mt-2",
                        children: "No items"
                    })
                ]
            }),
            isFetching && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col flex-grow justify-center items-center mt-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-icon-2xl h-icon-2xl animate-spin rounded-full border-4 border-white border-t-4 border-t-red-500"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharacterList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14230:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85277);
/* harmony import */ var _EquipmentItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8239);
/* harmony import */ var _services_query_endpoints_marketplace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1774);
/* harmony import */ var _features_marketplace_equipmentSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67998);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73732);
/* harmony import */ var _features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99275);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66790);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14613);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_4__, _EquipmentItem__WEBPACK_IMPORTED_MODULE_5__, _utils_common__WEBPACK_IMPORTED_MODULE_8__, _features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_9__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_4__, _EquipmentItem__WEBPACK_IMPORTED_MODULE_5__, _utils_common__WEBPACK_IMPORTED_MODULE_8__, _features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const EquipmentList = ()=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    const { rows , page , limit , totalPages , totalItems  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.equipment);
    const { filter  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.marketplace);
    const { equipmentFilter  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.sidebar);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z).state;
    const [getEquipment, { isFetching  }] = _services_query_endpoints_marketplace__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useLazyGetEquipmentQuery */ .Z.useLazyGetEquipmentQuery();
    const listRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const isBottom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((ref)=>{
        if (!ref.current) {
            return false;
        }
        return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const onScroll = ()=>{
            if (isBottom(listRef) && page < totalPages && !isFetching) {
                dispatch(_features_marketplace_equipmentSlice__WEBPACK_IMPORTED_MODULE_7__/* .equipmentActions.handleIncrementPage */ .f.handleIncrementPage());
            }
        };
        document.addEventListener("scroll", onScroll);
        return ()=>document.removeEventListener("scroll", onScroll);
    }, [
        page,
        totalPages,
        isBottom,
        dispatch,
        isFetching
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getEquipment((0,_utils_common__WEBPACK_IMPORTED_MODULE_8__/* .removeEmptyProperties */ .Nq)({
            limit,
            page,
            keyword: filter.keyword,
            direction: filter.direction,
            ...equipmentFilter,
            slot: equipmentFilter.slot.toString()
        }));
    }, [
        equipmentFilter,
        filter.direction,
        filter.keyword,
        getEquipment,
        limit,
        page
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch(_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_9__/* .marketplaceActions.setTotalItems */ .z.setTotalItems(totalItems));
    }, [
        dispatch,
        totalItems
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            rows.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("grid grid-cols-[repeat(auto-fill,minmax(265px,5fr))] gap-4 lg:gap-y-12"),
                ref: listRef,
                children: rows.map((equipment, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EquipmentItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            image: equipment.nft.thumbnailUrl,
                            title: equipment.nft.id.toString(),
                            link: `${_constants_route__WEBPACK_IMPORTED_MODULE_10__/* .ROUTER.MARKET_EQUIPMENT */ .Yj.MARKET_EQUIPMENT}/${equipment.nft.id}`,
                            priceAmount: equipment.nft.price,
                            priceToken: equipment.nft.token,
                            bonusAmount: equipment.bonus,
                            bonusAttribute: equipment.itemType,
                            level: equipment.level,
                            className: "max-w-[335px] sm:max-w-[265px]",
                            groupClassName: {
                                imageClassName: "!h-[297px] sm:!h-[246px]"
                            }
                        })
                    }, index))
            }),
            !isFetching && rows.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col flex-grow justify-center items-center mt-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/no-item-marketplace.png`,
                        alt: "",
                        height: "150px",
                        width: "150px"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-h6 dark:text-white/30 text-black/30 mt-2",
                        children: lang["common/no-items"]
                    })
                ]
            }),
            isFetching && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col flex-grow justify-center items-center mt-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-icon-2xl h-icon-2xl animate-spin rounded-full border-4 border-white border-t-4 border-t-red-500"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EquipmentList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92154:
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
/* harmony import */ var _features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99275);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85277);
/* harmony import */ var _bases_SelectBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31114);
/* harmony import */ var _commons_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13843);
/* harmony import */ var _features_marketplace_badgeSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41722);
/* harmony import */ var _features_marketplace_characterSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17527);
/* harmony import */ var _features_marketplace_equipmentSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67998);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60088);
/* harmony import */ var _icons_SortDescIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(67124);
/* harmony import */ var _features_accessibility_accessibilitySlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19010);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14613);
/* harmony import */ var _icons_ArrowSliderIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(41081);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_3__, _hooks_common__WEBPACK_IMPORTED_MODULE_4__, _bases_SelectBox__WEBPACK_IMPORTED_MODULE_5__, _commons_SearchBar__WEBPACK_IMPORTED_MODULE_6__]);
([_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_3__, _hooks_common__WEBPACK_IMPORTED_MODULE_4__, _bases_SelectBox__WEBPACK_IMPORTED_MODULE_5__, _commons_SearchBar__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const FilterMarket = ()=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    const marketplaceState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.marketplace);
    const accessibilityState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z).state;
    const itemOptions = [
        {
            label: lang["nft/characters"] || "",
            value: "character"
        },
        {
            label: lang["nft/equipment"] || "",
            value: "equipment"
        },
        {
            label: lang["nft/badges"] || "",
            value: "badge"
        }, 
    ];
    const directionOptions = [
        {
            label: lang["mp/lowest-to-highest"] || "",
            value: "ASC"
        },
        {
            label: lang["mp/highest-to-lowest"] || "",
            value: "DESC"
        }, 
    ];
    const directionOptionsMobile = [
        {
            label: lang["mp/lowest"] || "",
            value: "ASC"
        },
        {
            label: lang["mp/highest"] || "",
            value: "DESC"
        }, 
    ];
    const handleClickSelectItem = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value)=>{
        dispatch(_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_3__/* .marketplaceActions.handleOnChangeFilter */ .z.handleOnChangeFilter({
            fieldName: "item",
            value: value
        }));
    }, [
        dispatch
    ]);
    const handleClickSelectDirection = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value)=>{
        dispatch(_features_marketplace_badgeSlice__WEBPACK_IMPORTED_MODULE_7__/* .badgeActions.setDefaultState */ .w.setDefaultState());
        dispatch(_features_marketplace_characterSlice__WEBPACK_IMPORTED_MODULE_8__/* .characterActions.setDefaultState */ .h.setDefaultState());
        dispatch(_features_marketplace_equipmentSlice__WEBPACK_IMPORTED_MODULE_9__/* .equipmentActions.setDefaultState */ .f.setDefaultState());
        dispatch(_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_3__/* .marketplaceActions.handleOnChangeFilter */ .z.handleOnChangeFilter({
            fieldName: "direction",
            value: value
        }));
    }, [
        dispatch
    ]);
    const handleOnFilterBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        dispatch(_features_accessibility_accessibilitySlice__WEBPACK_IMPORTED_MODULE_12__/* .accessibilityActions.toggleMobileSidebar */ .dT.toggleMobileSidebar());
    }, [
        dispatch
    ]);
    const handleOnCloseBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        dispatch(_features_accessibility_accessibilitySlice__WEBPACK_IMPORTED_MODULE_12__/* .accessibilityActions.toggleSidebar */ .dT.toggleSidebar(!accessibilityState.bSidebarOn));
    }, [
        accessibilityState.bSidebarOn,
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("xl:pr-[137px] xl:pl-[127px] lg:px-[32px] xl:px-[90px]", "sticky top-header left-0 z-10 dark:bg-[#0f0f0f] lg:flex lg:pt-[30px] lg:pb-[35px] bg-[#eeeeee] lg:gap-[15px] xl:gap-[30px]"),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "hidden lg:flex lg:gap-[5px] items-center bg-black/5 text-black dark:text-white dark:bg-white/10 rounded-[10px] p-[12px] h-[40px] text-[16px] leading-[16px] cursor-pointer",
                onClick: handleOnCloseBtnClicked,
                children: [
                    accessibilityState.bSidebarOn ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ArrowSliderIcon__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        className: "fill-black dark:fill-white rotate-180 w-[16px] h-[16px]"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SortDescIcon__WEBPACK_IMPORTED_MODULE_11__/* .SortDescIcon */ .k, {
                        className: "w-[20px] h-[16px] fill-black dark:fill-white"
                    }),
                    lang["sb/filter"]
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "py-[25px] px-[20px] lg:p-0 bg-white lg:bg-transparent dark:bg-[#0F0F0F]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex w-full gap-[10px] justify-center lg:justify-normal text-[14px] leading-[14px] lg:text-[16px] lg:leading-[16px] mb-[25px] lg:mb-0",
                        children: itemOptions.map((tab)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("py-[13px] px-[18.5px] bg-[#0000000D] min-w-[105px] text-black dark:text-white dark:bg-white/10 rounded-[10px] text-center cursor-pointer", marketplaceState.filter.item === tab.value && "!bg-[#E42D25] !text-white"),
                                onClick: ()=>handleClickSelectItem(tab.value),
                                children: tab.label
                            }, tab.value))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center mb-[10px] lg:hidden justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_SearchBar__WEBPACK_IMPORTED_MODULE_6__/* .SearchBar */ .E, {
                                className: "w-[87%] sm:w-[90%]",
                                searchBy: marketplaceState.filter.item,
                                showSuggestion: true,
                                customClassForInput: "leading-[16px]"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_10__/* .Button */ .z, {
                                className: "bg-black/5 dark:bg-white/10 rounded-lg ml-[10px] w-[40px] h-[40px] !p-0",
                                onClick: handleOnFilterBtnClicked,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SortDescIcon__WEBPACK_IMPORTED_MODULE_11__/* .SortDescIcon */ .k, {
                                    className: "fill-black dark:fill-white w-6 h-6"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row items-center justify-between lg:flex-row-reverse lg:h-fit bg-[#EEEEEE] dark:bg-[#0F0F0F] p-[20px] pb-[10px] lg:p-0 lg:w-full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-[16px] leading-[16px] text-black/70 dark:text-white/70",
                        children: [
                            marketplaceState.totalItems,
                            " \xa0",
                            Number(marketplaceState.totalItems) === 1 ? `${lang["wallet/result"]}` : `${lang["wallet/results"]}`
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex flex-row items-center gap-2"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_SearchBar__WEBPACK_IMPORTED_MODULE_6__/* .SearchBar */ .E, {
                                className: "w-[225px] xl:max-w-[403px] xl:w-full hidden lg:block",
                                searchBy: marketplaceState.filter.item,
                                showSuggestion: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_SelectBox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    options: directionOptions,
                                    defaultValue: marketplaceState.filter.direction,
                                    onChange: handleClickSelectDirection,
                                    textClassName: "leading-[22px] whitespace-nowrap",
                                    customClassName: "bg-white dark:bg-[#232323] w-[177px]"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterMarket);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23318:
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
/* harmony import */ var _FilterMarket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92154);
/* harmony import */ var _BadgeList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(401);
/* harmony import */ var _CharacterList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21946);
/* harmony import */ var _EquipmentList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14230);
/* harmony import */ var _features_marketplace_badgeSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41722);
/* harmony import */ var _features_marketplace_characterSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17527);
/* harmony import */ var _features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84689);
/* harmony import */ var _features_marketplace_equipmentSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67998);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6483);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _features_route_routeSlice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(48172);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_2__, _FilterMarket__WEBPACK_IMPORTED_MODULE_3__, _BadgeList__WEBPACK_IMPORTED_MODULE_4__, _CharacterList__WEBPACK_IMPORTED_MODULE_5__, _EquipmentList__WEBPACK_IMPORTED_MODULE_6__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_2__, _FilterMarket__WEBPACK_IMPORTED_MODULE_3__, _BadgeList__WEBPACK_IMPORTED_MODULE_4__, _CharacterList__WEBPACK_IMPORTED_MODULE_5__, _EquipmentList__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const DynamicSidebar = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(()=>Promise.all(/* import() */[__webpack_require__.e(3186), __webpack_require__.e(5098)]).then(__webpack_require__.bind(__webpack_require__, 15098)), {
    loadableGenerated: {
        modules: [
            "..\\app\\components\\MarketPlaceComponent.tsx -> " + "../components/commons/Sidebar"
        ]
    }
});
const MarketPlace = ()=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .TL)();
    const { filter  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .CG)((state)=>state.marketplace);
    const accessibilityState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const [isMobile] = (0,_hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_12__/* .useWindowResizeMobile */ .c)(1024);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (filter.item !== "badge") {
            dispatch(_features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_9__/* .sidebarFilterActions.handleClearFilterBadge */ .A.handleClearFilterBadge());
            dispatch(_features_marketplace_badgeSlice__WEBPACK_IMPORTED_MODULE_7__/* .badgeActions.setDefaultState */ .w.setDefaultState());
        }
        if (filter.item !== "character") {
            dispatch(_features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_9__/* .sidebarFilterActions.handleClearFilter */ .A.handleClearFilter());
            dispatch(_features_marketplace_characterSlice__WEBPACK_IMPORTED_MODULE_8__/* .characterActions.setDefaultState */ .h.setDefaultState());
        }
        if (filter.item !== "equipment") {
            dispatch(_features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_9__/* .sidebarFilterActions.handleClearFilterEquipment */ .A.handleClearFilterEquipment());
            dispatch(_features_marketplace_equipmentSlice__WEBPACK_IMPORTED_MODULE_10__/* .equipmentActions.setDefaultState */ .f.setDefaultState());
        }
    }, [
        filter.item,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        localStorage.removeItem(_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_14__/* .PREVIOUS_PAGE_KEY */ .m8);
        return ()=>{
            dispatch(_features_marketplace_badgeSlice__WEBPACK_IMPORTED_MODULE_7__/* .badgeActions.setDefaultState */ .w.setDefaultState());
            dispatch(_features_marketplace_characterSlice__WEBPACK_IMPORTED_MODULE_8__/* .characterActions.setDefaultState */ .h.setDefaultState());
            dispatch(_features_marketplace_equipmentSlice__WEBPACK_IMPORTED_MODULE_10__/* .equipmentActions.setDefaultState */ .f.setDefaultState());
        };
    }, [
        dispatch
    ]);
    const renderFilterItem = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (filter.item === "character") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CharacterList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {});
        if (filter.item === "equipment") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EquipmentList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {});
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BadgeList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {});
    }, [
        filter.item
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FilterMarket__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_13___default()("flex pb-[30px] px-5 xl:pr-[137px] xl:pl-[127px] lg:px-[32px] xl:mt-[30px] xl:px-[90px] sm:px-[20px] ", accessibilityState.bSidebarOn && "lg:gap-[35px]"),
                children: [
                    !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSidebar, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col min-h-[calc(100vh_-_160px)] flex-1",
                        children: renderFilterItem()
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarketPlace);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13843:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ SearchBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43489);
/* harmony import */ var _bases_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36332);
/* harmony import */ var _icons_SearchIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49491);
/* harmony import */ var _icons_CloseIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22043);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85277);
/* harmony import */ var _features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99275);
/* harmony import */ var _services_query_endpoints_marketplace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1774);
/* harmony import */ var _features_marketplace_characterSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17527);
/* harmony import */ var _features_marketplace_equipmentSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(67998);
/* harmony import */ var _features_marketplace_badgeSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(41722);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14613);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_7__, _features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_8__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_7__, _features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const SearchBar = ({ className , searchBy , customClassForInput , showSuggestion =false  })=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .TL)();
    const { searchKey , suggestList , filter  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .CG)((state)=>state.marketplace);
    const { 0: isVisible , 1: setIsVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const searchRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [getSuggestKey] = _services_query_endpoints_marketplace__WEBPACK_IMPORTED_MODULE_9__/* ["default"].useLazyGetSuggestSearchKeyQuery */ .Z.useLazyGetSuggestSearchKeyQuery();
    const debouncedSearchKey = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(searchKey, 200);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z).state;
    const textNoResult = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        switch(searchBy){
            case "character":
                return `${lang["common/no-character-found"]}`;
            case "equipment":
                return `${lang["common/no-equipment-found"]}`;
            case "badge":
                return `${lang["common/no-badges-found"]}`;
            default:
                return `${lang["profile/no-data"]}`;
        }
    }, [
        lang,
        searchBy
    ]);
    const handleChangeSearchKey = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e)=>{
        const value = e.target.value.trimStart() || "";
        dispatch(_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_8__/* .marketplaceActions.setSearchKey */ .z.setSearchKey(value));
    }, [
        dispatch
    ]);
    const handleSetDefaultState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (filter.item === "badge") {
            dispatch(_features_marketplace_badgeSlice__WEBPACK_IMPORTED_MODULE_12__/* .badgeActions.setDefaultState */ .w.setDefaultState());
        }
        if (filter.item === "character") {
            dispatch(_features_marketplace_characterSlice__WEBPACK_IMPORTED_MODULE_10__/* .characterActions.setDefaultState */ .h.setDefaultState());
        }
        if (filter.item === "equipment") {
            dispatch(_features_marketplace_equipmentSlice__WEBPACK_IMPORTED_MODULE_11__/* .equipmentActions.setDefaultState */ .f.setDefaultState());
        }
    }, [
        dispatch,
        filter.item
    ]);
    const handleClearSearchKey = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (filter.keyword) {
            handleSetDefaultState();
        }
        dispatch(_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_8__/* .marketplaceActions.setSearchKey */ .z.setSearchKey(""));
        dispatch(_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_8__/* .marketplaceActions.handleOnChangeFilter */ .z.handleOnChangeFilter({
            fieldName: "keyword",
            value: ""
        }));
    }, [
        filter.keyword,
        dispatch,
        handleSetDefaultState
    ]);
    const handleOnKeyUpChanged = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event)=>{
        if (event.code === "Enter" || event.keyCode === 13) {
            if (filter.keyword) {
                handleSetDefaultState();
            }
            dispatch(_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_8__/* .marketplaceActions.handleOnChangeFilter */ .z.handleOnChangeFilter({
                fieldName: "keyword",
                value: searchKey
            }));
            setIsVisible(false);
            inputRef.current?.blur();
        }
    }, [
        dispatch,
        filter.keyword,
        handleSetDefaultState,
        searchKey
    ]);
    const handleFocusSearchKey = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        setIsVisible(true);
    }, []);
    const handleSelectSearchKey = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value)=>{
        if (filter.keyword !== value) {
            handleSetDefaultState();
        }
        dispatch(_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_8__/* .marketplaceActions.setSearchKey */ .z.setSearchKey(value));
        dispatch(_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_8__/* .marketplaceActions.handleOnChangeFilter */ .z.handleOnChangeFilter({
            fieldName: "keyword",
            value
        }));
        setIsVisible(false);
    }, [
        dispatch,
        handleSetDefaultState,
        filter.keyword
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            if (searchRef.current && !searchRef.current?.contains(event.target)) {
                setIsVisible(false);
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return ()=>{
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (debouncedSearchKey) {
            getSuggestKey({
                keyword: debouncedSearchKey,
                type: searchBy === "character" ? "characters" : searchBy
            });
        }
    }, [
        debouncedSearchKey,
        getSuggestKey,
        searchBy
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("block justify-self-end self-center relative", className),
        ref: searchRef,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative justify-self-end self-center"),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Input__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .I, {
                        type: "text",
                        ref: inputRef,
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("pl-[50px] pr-7 w-full", customClassForInput),
                        placeholder: searchBy === "badge" ? `${lang["comp/search-by-name"]}` : `${lang["comp/search-by-id"]}`,
                        value: searchKey,
                        onChange: handleChangeSearchKey,
                        onKeyUp: handleOnKeyUpChanged,
                        onFocus: handleFocusSearchKey,
                        maxLength: 100
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("btn rounded-none border-0 flex justify-center items-center absolute left-0 top-0", "h-full ml-[14px]"),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[24px] h-[24px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                className: "dark:fill-gray-3/[.83] fill-black/20 !cursor-auto"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("btn rounded-none border-0 flex justify-center items-center absolute right-0 top-0", "h-full mr-[12px]"),
                        onClick: handleClearSearchKey,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-3 h-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("fill-icon-dark", {
                                    hidden: !searchKey
                                })
                            })
                        })
                    })
                ]
            }),
            showSuggestion && isVisible && searchKey && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "shadow-[0px_5px_20px_rgba(0,0,0,0.1)] bg-white dark:bg-[#2F2F2F] absolute rounded-lg w-full z-10 mt-1 py-3",
                children: suggestList.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: suggestList.slice(0, 8).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("py-3 px-4 text-h8 text-black/70", "hover:bg-secondary-4 hover:text-secondary-3 cursor-pointer", "dark:hover:bg-[rgba(0,0,0,0.2)]"),
                            onClick: ()=>handleSelectSearchKey(item.toString()),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                                className: "font-primary dark:text-gray-dm",
                                children: item
                            })
                        }, index))
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "my-7 flex flex-col items-center justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-2 text-black/70 dark:text-gray-dm opacity-30 text-h8 py-3 px-4",
                        children: textNoResult
                    })
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15353:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57636);
/* harmony import */ var _app_components_MarketPlaceComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23318);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__, _app_components_MarketPlaceComponent__WEBPACK_IMPORTED_MODULE_2__]);
([_app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__, _app_components_MarketPlaceComponent__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const Marketplace = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: "Marketplace",
        description: "Market place",
        bHeaderAlwaysOnTop: true,
        showSidebar: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_MarketPlaceComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Marketplace);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,5152,5277,8733,4969,5764,7636,4560,7124], () => (__webpack_exec__(15353)));
module.exports = __webpack_exports__;

})();