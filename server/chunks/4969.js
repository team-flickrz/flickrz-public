"use strict";
exports.id = 4969;
exports.ids = [4969];
exports.modules = {

/***/ 44969:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37674);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66790);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14613);
/* harmony import */ var _features_accessibility_accessibilitySlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19010);
/* harmony import */ var _features_contract_contractSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63794);
/* harmony import */ var _features_marketplace_badgeSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(41722);
/* harmony import */ var _features_marketplace_characterSlice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17527);
/* harmony import */ var _features_marketplace_equipmentSlice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(67998);
/* harmony import */ var _features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(99275);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(53450);
/* harmony import */ var _features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(44523);
/* harmony import */ var _features_route_routeSlice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(48172);
/* harmony import */ var _features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(84689);
/* harmony import */ var _features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(85750);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useClickOutSide__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(10617);
/* harmony import */ var _hooks_useIsWindowVisible__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(10597);
/* harmony import */ var _services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(86588);
/* harmony import */ var _services_query_endpoints_marketplace__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(1774);
/* harmony import */ var _services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(54553);
/* harmony import */ var _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(93992);
/* harmony import */ var _icons_MenuIcon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(65926);
/* harmony import */ var _LoginLogout__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(20780);
/* harmony import */ var _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(63445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_15__, _hooks_common__WEBPACK_IMPORTED_MODULE_21__, _LoginLogout__WEBPACK_IMPORTED_MODULE_29__, _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_30__]);
([_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_15__, _hooks_common__WEBPACK_IMPORTED_MODULE_21__, _LoginLogout__WEBPACK_IMPORTED_MODULE_29__, _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_30__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);































function Header({ bAlwaysOnTop , className  }) {
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).state;
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_21__/* .useAppDispatch */ .TL)();
    const routeState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_21__/* .useAppSelector */ .CG)((state)=>state.route);
    const authState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_21__/* .useAppSelector */ .CG)((state)=>state.auth);
    const nftState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_21__/* .useAppSelector */ .CG)((state)=>state.nft);
    const profileState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_21__/* .useAppSelector */ .CG)((state)=>state.profile);
    const listAccountOfAllEmail = localStorage.getItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_7__/* .LOCAL_STORAGE_KEYS.listAccountOfAllEmail */ .d.listAccountOfAllEmail);
    const tokenStorage = localStorage.getItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_7__/* .LOCAL_STORAGE_KEYS.token */ .d.token);
    const accessibilityState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_21__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const { linkTreeWhitePaper  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_21__/* .useAppSelector */ .CG)((state)=>state.linkTree);
    const { 1: setIsExpand  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const [getMarketFee] = _services_query_endpoints_marketplace__WEBPACK_IMPORTED_MODULE_25__/* ["default"].useLazyGetFeeQuery */ .Z.useLazyGetFeeQuery();
    const [getUserProfile, { data: userProfileData  }] = _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_27__/* ["default"].useLazyGetProfileQuery */ .Z.useLazyGetProfileQuery();
    const [getCharacterMaxLevel] = _services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_24__/* ["default"].useLazyGetCharacterMaxLevelQuery */ .Z.useLazyGetCharacterMaxLevelQuery();
    const [getNotificationsIndividual, { data  }] = _services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_26__/* ["default"].useGetNotificationsIndividualMutation */ .Z.useGetNotificationsIndividualMutation();
    const [getNotificationsIndividualCount, { data: dataCount  }] = _services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_26__/* ["default"].useLazyGetNotificationsIndividualCountQuery */ .Z.useLazyGetNotificationsIndividualCountQuery();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const isFocusWindow = (0,_hooks_useIsWindowVisible__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)();
    const [setIsReadIndividual] = _services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_26__/* ["default"].useLazySetIsReadIndividualQuery */ .Z.useLazySetIsReadIndividualQuery();
    const options = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>[
            {
                label: lang["common/about"],
                value: _constants_route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTER.ABOUT */ .Yj.ABOUT
            },
            {
                label: lang["common/rte"],
                value: _constants_route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTER.ENJOY_AND_EARN */ .Yj.ENJOY_AND_EARN
            },
            // {
            //     label: lang["common/token"],
            //     value: ROUTER.TOKEN,
            // },
            {
                label: lang["common/marketplace"],
                value: _constants_route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTER.MARKETPLACE */ .Yj.MARKETPLACE
            },
            {
                label: lang["common/myprofile"],
                value: _constants_route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTER.PROFILE */ .Yj.PROFILE
            },
            {
                label: lang["common/help"],
                value: _constants_route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTER.HELP */ .Yj.HELP
            },
            {
                label: lang["common/link-tree"],
                value: _constants_route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTER.LINK_TREE */ .Yj.LINK_TREE
            }, 
        ], [
        lang
    ]);
    const { 0: conditionForHeaderMenu , 1: setConditionForHeaderMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(window.innerWidth >= 960 && window.innerWidth < 1200);
    const titlePage = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>{
        return options.find((option)=>{
            return option.value === routeState.here || option.value === `/${router.query.page}`;
        })?.label;
    }, [
        options,
        routeState.here,
        router.query.page
    ]);
    const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);
    (0,_hooks_useClickOutSide__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)(wrapperRef, ()=>{
        setIsExpand(false);
    });
    const handleOnMenuBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((e)=>{
        e.stopPropagation();
        dispatch(_features_accessibility_accessibilitySlice__WEBPACK_IMPORTED_MODULE_10__/* .accessibilityActions.toggleMenu */ .dT.toggleMenu());
    }, [
        dispatch
    ]);
    const handleClickTab = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((page, route, item)=>{
        if (item.newTab) {
            window.open(page, "_blank", "noopener,noreferrer");
        } else {
            dispatch(_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_18__/* .routeActions.setRoute */ .WU.setRoute(route));
            router.push(item.value === "/my-profile" && !!localStorage.getItem(_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_18__/* .BACK_TO_MY_COLLECTION */ .B1) ? _constants_route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTER.MY_COLLECTION */ .Yj.MY_COLLECTION : page);
        }
        localStorage.removeItem(_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_18__/* .BACK_TO_MY_COLLECTION */ .B1);
        dispatch(_features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_19__/* .sidebarFilterActions.clearAllFilter */ .A.clearAllFilter());
        dispatch(_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_15__/* .marketplaceActions.resetFilter */ .z.resetFilter());
    }, [
        dispatch,
        router
    ]);
    const handleOnLogoBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(()=>{
        const route = "/";
        if (router.pathname === route) {
            window.location.reload();
        }
        router.push(route);
    }, [
        router
    ]);
    const isUserHaveWallet = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(async ()=>{
        if (!tokenStorage) return;
        if (profileState.myProfile.userProfile && profileState.myProfile.userProfile.isUserHaveWallet === false) {
            if (Object.values(_constants_route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTER_REDIRECT_HOME */ .Fe).includes(router.pathname)) {
                dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_20__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                    type: "danger",
                    title: "You need to select the network that you will use first !!!"
                }));
                router.push(_constants_route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTER.HOME */ .Yj.HOME);
            }
            dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_16__/* .modalSliceActions.shiftFromQueue */ .E.shiftFromQueue());
            dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_16__/* .modalSliceActions.addToQueue */ .E.addToQueue({
                type: "popup/require-create-new-wallet",
                propsState: {
                    bCloseBtn: false,
                    bBlockClickBGCloseModal: true
                }
            }));
        }
    }, [
        router,
        dispatch,
        tokenStorage,
        profileState.myProfile.userProfile
    ]);
    const windowResizeListener = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(()=>{
        setConditionForHeaderMenu(window.innerWidth >= 960 && window.innerWidth < 1200);
    }, []);
    const compareCurrentDate = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(()=>{
        const currentDateFromLocal = localStorage.getItem("currentDay");
        const listUserId = JSON.parse(localStorage.getItem("listUserIdSignin") || "[]");
        const currentUser = listUserId.find((ele)=>ele.userId === profileState.myProfile.userProfile?.id);
        return currentDateFromLocal !== moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD") || !currentUser || currentUser && currentUser.notificationId !== data?.data.id;
    }, [
        profileState.myProfile.userProfile?.id,
        data
    ]);
    const handleNotificationIndividualModal = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(()=>{
        if (data && data.data) {
            setIsReadIndividual(undefined);
            dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_16__/* .modalSliceActions.addToQueue */ .E.addToQueue({
                type: "popup/notification-individual",
                propsState: data.data
            }));
            getNotificationsIndividualCount(data.data.id);
        }
    }, [
        data,
        dispatch,
        getNotificationsIndividualCount,
        setIsReadIndividual
    ]);
    const handleGetData = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(async ()=>{
        await getUserProfile(undefined);
    }, [
        getUserProfile
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        window.addEventListener("resize", windowResizeListener);
        return ()=>window.removeEventListener("resize", windowResizeListener);
    }, [
        windowResizeListener
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (!authState.bLoggingOut && authState.token && isFocusWindow) {
            handleGetData();
        }
    }, [
        router.query.tab,
        authState.token,
        authState.bLoggingOut,
        nftState.timeStampAction,
        isFocusWindow, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (data && data.data) {
            handleNotificationIndividualModal();
        }
    }, [
        data
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (profileState.myProfile.userProfile?.id) {
            isUserHaveWallet();
            if (!authState.bLoggingOut && authState.token) {
                getNotificationsIndividual(undefined);
            }
        }
    }, [
        profileState.myProfile.userProfile?.id,
        authState.token,
        authState.bLoggingOut
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (listAccountOfAllEmail && profileState.myProfile.userProfile && JSON.parse(listAccountOfAllEmail)[profileState.myProfile.userProfile.id]) {
            const listAccountStorage = JSON.parse(listAccountOfAllEmail)[profileState.myProfile.userProfile.id];
            localStorage.setItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_7__/* .LOCAL_STORAGE_KEYS.listAccountStorage */ .d.listAccountStorage, JSON.stringify(listAccountStorage));
        }
    }, [
        listAccountOfAllEmail,
        profileState.myProfile.userProfile?.id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (profileState.myProfile.userProfile && listAccountOfAllEmail && JSON.parse(listAccountOfAllEmail)[profileState.myProfile.userProfile.id]) {
            const listAccountStorage = JSON.parse(listAccountOfAllEmail)[profileState.myProfile.userProfile.id];
            localStorage.setItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_7__/* .LOCAL_STORAGE_KEYS.listAccountStorage */ .d.listAccountStorage, JSON.stringify(listAccountStorage));
        }
    }, [
        profileState,
        listAccountOfAllEmail
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (authState.token) {
            getMarketFee(undefined);
            getCharacterMaxLevel(undefined);
        }
    }, [
        getMarketFee,
        getCharacterMaxLevel,
        authState.token
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (routeState.here !== "/marketplace" && `/${router.query.page}` !== _constants_route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTER.MARKETPLACE */ .Yj.MARKETPLACE) {
            dispatch(_features_marketplace_badgeSlice__WEBPACK_IMPORTED_MODULE_12__/* .badgeActions.setDefaultState */ .w.setDefaultState());
            dispatch(_features_marketplace_characterSlice__WEBPACK_IMPORTED_MODULE_13__/* .characterActions.setDefaultState */ .h.setDefaultState());
            dispatch(_features_marketplace_equipmentSlice__WEBPACK_IMPORTED_MODULE_14__/* .equipmentActions.setDefaultState */ .f.setDefaultState());
        }
    }, [
        dispatch,
        routeState.here,
        router.query.page
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        const isConnected = localStorage.getItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_7__/* .LOCAL_STORAGE_KEYS.isConnected */ .d.isConnected);
        dispatch(_features_contract_contractSlice__WEBPACK_IMPORTED_MODULE_11__/* .contractActions.handleActivate */ .fm.handleActivate(!!isConnected));
    }, [
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (router.query.tab !== "my-collection") {
            dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_17__/* .collectionActions.resetFilterCollectionState */ .X5.resetFilterCollectionState());
        }
    }, [
        dispatch,
        router.query.tab
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
            "!z-20": bAlwaysOnTop,
            sticky: bAlwaysOnTop,
            "top-0": bAlwaysOnTop
        }, "h-[75px] flex flex-row items-center justify-between px-8", "bg-header-light dark:bg-header-dark transition-colors select-none", (router.pathname === _constants_route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTER.ENJOY_AND_EARN */ .Yj.ENJOY_AND_EARN || router.pathname === "/[page]/[nftType]/[id]" || router.pathname === "/marketplace/[nftType]/[id]") && "lg:min-w-[1240px] lg:w-full", className),
        children: [
            titlePage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: `${titlePage} - Flickrz`
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: handleOnLogoBtnClicked,
                className: "max-w-[225px] w-[150px] h-[42px] relative",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/flickrz-logo.png`,
                    layout: "fill",
                    alt: "logo"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex gap-[24px]", authState.token && "!gap-0"),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "hidden tablet-sm:flex flex-row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex flex-row items-center gap-[30px] -mx-5 tablet-sm:-mx-2 2xl:-mx-5"),
                                children: options.map((item, index)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("cursor-pointer h-full flex items-center relative", "transition-transform duration-300 ease-in", index <= options.length - 1 && index > 3 && conditionForHeaderMenu && "!hidden"),
                                        onClick: ()=>handleClickTab(item.value, item.value, item),
                                        children: [
                                            (item.value === routeState.here || item.value === `/${router.query.page}` || router.query.page === _constants_route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTER.ENJOY_AND_EARN */ .Yj.ENJOY_AND_EARN && item.value === _constants_route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTER.READ_TO_EARN */ .Yj.READ_TO_EARN || routeState.here === _constants_route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTER.ENJOY_AND_EARN */ .Yj.ENJOY_AND_EARN && item.value === _constants_route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTER.READ_TO_EARN */ .Yj.READ_TO_EARN) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute bottom-[-26px] 3xl:bottom-[-18px]", "h-[3px] rounded-[50px] w-full", "bg-white dark:bg-main")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-base", item.value === routeState.here || item.value === `/${router.query.page}` || router.query.page === _constants_route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTER.ENJOY_AND_EARN */ .Yj.ENJOY_AND_EARN && item.value === _constants_route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTER.READ_TO_EARN */ .Yj.READ_TO_EARN || routeState.here === _constants_route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTER.ENJOY_AND_EARN */ .Yj.ENJOY_AND_EARN && item.value === _constants_route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTER.READ_TO_EARN */ .Yj.READ_TO_EARN ? "text-white dark:text-main" : "text-white/50"),
                                                children: item.label
                                            })
                                        ]
                                    }, index);
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoginLogout__WEBPACK_IMPORTED_MODULE_29__/* .LoginLogout */ .U, {
                                isExpandClick: accessibilityState.bMenuOn,
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(authState.token && "ml-8")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_30__/* .ThemeSwitcher */ .O, {
                                className: "ml-8 hidden 3xl:flex"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "3xl:hidden flex items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: handleOnMenuBtnClicked,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                className: "fill-icon relative w-[24px] h-[19px]"
                            })
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20780:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ LoginLogout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37674);
/* harmony import */ var _config_social__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23349);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66790);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14613);
/* harmony import */ var _features_account_account__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29335);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5178);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6483);
/* harmony import */ var _services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(48728);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(45700);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(60088);
/* harmony import */ var _icons_LogoutIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(60018);
/* harmony import */ var _icons_SGTIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(16779);
/* harmony import */ var _icons_SRTIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(68387);
/* harmony import */ var _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(63445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_10__, _utils_format__WEBPACK_IMPORTED_MODULE_13__, _icons_SGTIcon__WEBPACK_IMPORTED_MODULE_16__, _icons_SRTIcon__WEBPACK_IMPORTED_MODULE_17__, _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_18__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_10__, _utils_format__WEBPACK_IMPORTED_MODULE_13__, _icons_SGTIcon__WEBPACK_IMPORTED_MODULE_16__, _icons_SRTIcon__WEBPACK_IMPORTED_MODULE_17__, _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const LoginLogout = ({ className , bOnMainMenu , isExpandClick  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_10__/* .useAppDispatch */ .TL)();
    const authState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_10__/* .useAppSelector */ .CG)((state)=>state.auth);
    const { 0: isExpand , 1: setIsExpand  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: iconSocial , 1: setIconSocial  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).state;
    const { myProfile: { userProfile  } ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_10__/* .useAppSelector */ .CG)((state)=>state.profile);
    const [logout] = _services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_12__/* ["default"].useLogoutMutation */ .Z.useLogoutMutation();
    const [isMobile] = (0,_hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_11__/* .useWindowResizeMobile */ .c)(1440);
    const { linkTreeWhitePaper  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_10__/* .useAppSelector */ .CG)((state)=>state.linkTree);
    (0,_hooks_common__WEBPACK_IMPORTED_MODULE_10__/* .useMouseClick */ .z)(()=>{
        setIsExpand(false);
    });
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!userProfile?.social) return;
        const icon = _config_social__WEBPACK_IMPORTED_MODULE_5__/* .listLoginSNS.find */ .G.find((item)=>item.type === userProfile?.social.type);
        if (icon) setIconSocial(icon);
        else setIconSocial(null);
    }, [
        userProfile?.social,
        userProfile?.social?.type
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setIsExpand(isExpandClick || false);
    }, [
        isExpandClick
    ]);
    const handleOnBalanceClicked = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((e)=>{
        if (!isMobile && authState.token) {
            e.stopPropagation();
            setIsExpand(!isExpand);
        }
    }, [
        isExpand,
        authState.token,
        isMobile
    ]);
    const handleOnExpandedPanelClicked = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((e)=>{
        e.stopPropagation();
    }, []);
    const handleOnLogoutBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        setIsExpand(false);
        localStorage.removeItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_4__/* .LOCAL_STORAGE_KEYS.ref */ .d.ref);
        logout(undefined);
        dispatch(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_9__/* .authActions.startLogout */ .Y.startLogout());
        dispatch(_features_account_account__WEBPACK_IMPORTED_MODULE_8__/* .accountSliceActions.changeAccount */ .w.changeAccount(undefined));
        router.replace(_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.HOME */ .Yj.HOME);
    }, [
        dispatch,
        logout,
        router
    ]);
    const handleOnLoginBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async (e)=>{
        e.stopPropagation();
        router.push(_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.LOGIN */ .Yj.LOGIN);
    }, [
        router
    ]);
    const renderLoginButton = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mt-[5px] border-t-[1px] pt-[15px] tablet-sm:pt-0 tablet-sm:mt-0 border-black/10",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_14__/* .Button */ .z, {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "px-[14px] py-[9px] dark:border-white/10 w-full tablet-sm:w-fit tablet-sm:ml-[20px] contained-primary"),
                onClick: handleOnLoginBtnClicked,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-base leading-[22px] font-semibold",
                    children: lang["button/log-in"]
                })
            })
        }), [
        className,
        handleOnLoginBtnClicked,
        lang
    ]);
    const handleClickOnTab = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((page, newTab = false)=>{
        if (newTab) {
            window.open(page, "_blank", "noopener,noreferrer");
            return;
        }
        router.push(page);
    }, [
        router
    ]);
    const renderSubMenu = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (isMobile) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("border-b-[1px] border-black/10 dark:border-white/10 mb-[20px] w-full text-black/70 dark:text-white/70 text-[18px] leading-[18px] font-[600] flex flex-col gap-[5px] justify-start items-start pb-[10px]", !authState.token && "w-full tablet-sm:w-[325px] border-b-0 mb-0"),
                children: [
                    window.innerWidth >= 960 && window.innerWidth < 1200 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "py-[9px]",
                                onClick: ()=>handleClickOnTab(_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.HELP */ .Yj.HELP, false),
                                children: lang["common/help"]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "py-[9px]",
                                onClick: ()=>handleClickOnTab(_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.LINK_TREE */ .Yj.LINK_TREE, false),
                                children: lang["common/link-tree"]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "pt-[7px] tablet-sm:pt-0 flex flex-row justify-between items-center w-full",
                        children: [
                            lang["common/mode"],
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_18__/* .ThemeSwitcher */ .O, {})
                        ]
                    })
                ]
            });
        }
    }, [
        isMobile,
        lang,
        handleClickOnTab,
        authState.token
    ]);
    const renderInfoUser = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                isMobile && renderSubMenu(),
                authState.token && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex flex-row gap-[10px] items-center w-full"),
                            children: [
                                !userProfile?.social ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex justify-center items-center bg-black/70 rounded-[50%]", "w-[27px] h-[27px] text-base font-semibold text-white"),
                                    children: userProfile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: userProfile.email.slice(0, 1).toUpperCase()
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: iconSocial && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: iconSocial.class,
                                        children: iconSocial.icon
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-base font-semibold text-center dark:text-white flex items-center", "max-w-[300px] whitespace-nowrap text-ellipsis overflow-hidden"),
                                    children: userProfile?.email || userProfile?.social && userProfile?.social.socialId
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("mt-[10px] border dark:border-white/10 rounded-lg w-[285px] dark:text-white font-semibold", bOnMainMenu && "!w-full"),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between items-center h-10 px-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-4 h-4 min-w-[16px] min-h-[16px] mr-1",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SGTIcon__WEBPACK_IMPORTED_MODULE_16__/* .SGTIcon */ .$, {})
                                                }),
                                                "FLKZ"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "whitespace-nowrap text-ellipsis overflow-hidden max-w-[calc((100%-90px))]",
                                            children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .formatIntBalance */ .qQ)(userProfile?.GTAvailable, 4)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                    className: "dark:border-white/10"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between items-center h-10 px-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-4 h-4 min-w-[16px] min-h-[16px] mr-1",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SRTIcon__WEBPACK_IMPORTED_MODULE_17__/* .SRTIcon */ .s, {})
                                                }),
                                                "EP"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "whitespace-nowrap text-ellipsis overflow-hidden max-w-[calc((100%-90px))]",
                                            children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .formatIntBalance */ .qQ)(userProfile?.RTAvailable, 4)
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_14__/* .Button */ .z, {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("contained-secondary mt-[10px] !w-full"),
                            onClick: handleOnLogoutBtnClicked,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-base leading-[22px] font-semibold pr-2",
                                    children: lang["button/log-out"]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-icon h-[18px] grow-0 shrink-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_LogoutIcon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }, [
        handleOnLogoutBtnClicked,
        iconSocial,
        lang,
        userProfile,
        bOnMainMenu,
        isMobile,
        renderSubMenu,
        authState.token, 
    ]);
    const renderBalanceBar = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            onClick: handleOnBalanceClicked,
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "relative select-none", bOnMainMenu && "w-full"),
            children: [
                authState.token && !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("font-semibold text-base", "flex cursor-pointer items-center", "px-4 h-10 rounded-xl border-[#474747] border-solid border-[2px]", "max-w-[250px] lg:w-auto", bOnMainMenu ? "text-black dark:text-white hidden lg:block" : "text-white hidden 3xl:flex"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-5 h-5 min-w-[20px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SRTIcon__WEBPACK_IMPORTED_MODULE_17__/* .SRTIcon */ .s, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("ml-2 mr-1 text-ellipsis overflow-hidden whitespace-nowrap"),
                                children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .formatIntBalance */ .qQ)(userProfile?.RTAvailable)
                            }),
                            "EP",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "ml-2 w-[2px] h-full py-1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("h-full", bOnMainMenu ? "bg-black dark:bg-white/30" : "bg-white/30")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[27px] h-[27px] min-w-[22px] min-h-[22px] bg-white/20 rounded-[50%] ml-3 text-h10 text-white font-semibold flex justify-center items-center",
                                children: userProfile && !userProfile.social ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: userProfile.email.slice(0, 1).toUpperCase()
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: iconSocial && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: iconSocial.class,
                                        children: iconSocial.icon
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: bOnMainMenu && renderInfoUser()
                }),
                !authState.token && renderLoginButton(),
                isExpand && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute -right-2 lg:right-0 dark:bg-[#272829] pt-[25px] pb-[20px] px-[20px]", bOnMainMenu ? "bottom-12" : "top-header", isMobile && "top-[48px] !right-[-25px] !rounded-[10px]", !authState.token && "top-[50px] !right-[-50px]", "flex flex-col items-center justify-center h-fit", "bg-white rounded-xl shadow-lg border dark:border-transparent"),
                    onClick: handleOnExpandedPanelClicked,
                    children: renderInfoUser()
                })
            ]
        });
    }, [
        bOnMainMenu,
        className,
        handleOnBalanceClicked,
        handleOnExpandedPanelClicked,
        isExpand,
        renderInfoUser,
        userProfile,
        isMobile,
        authState.token,
        renderLoginButton,
        iconSocial, 
    ]);
    const renderContent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        // if (!authState.token) return renderLoginButton();
        return renderBalanceBar();
    }, [
        renderBalanceBar
    ]);
    return renderContent();
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63445:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ ThemeSwitcher)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _features_accessibility_accessibilitySlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19010);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85277);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_5__]);
_hooks_common__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ThemeSwitcher = ({ className  })=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_5__/* .useAppDispatch */ .TL)();
    const { theme  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const handleToggleThemeButton = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((e)=>{
        e.stopPropagation();
        dispatch(_features_accessibility_accessibilitySlice__WEBPACK_IMPORTED_MODULE_4__/* .accessibilityActions.toggleTheme */ .dT.toggleTheme());
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "h-8 w-16 border border-[#343434] rounded-2xl bg-white dark:bg-[#2C2C2C] relative flex p-0.5 justify-between items-center", "after:h-7 after:w-7 after:rounded-full after:bg-[#8E8E8E] after:absolute after:transition-all after:duration-200", "cursor-pointer my-auto", {
            "after:translate-x-full": theme === "dark"
        }),
        onClick: handleToggleThemeButton,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-6 h-6 p-0.5 select-none touch-none",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/dark-theme.png`,
                    alt: "",
                    height: "24px",
                    width: "24px"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-6 h-6 p-0.5 select-none touch-none",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/light-theme.png`,
                    alt: "",
                    height: "24px",
                    width: "24px"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LogoutIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function LogoutIcon() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "17",
        height: "18",
        viewBox: "0 0 17 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.5 0.75C2.77065 0.75 2.07118 1.03973 1.55546 1.55546C1.03973 2.07118 0.75 2.77065 0.75 3.5V14.5C0.75 15.2293 1.03973 15.9288 1.55546 16.4445C2.07118 16.9603 2.77065 17.25 3.5 17.25H13.5833C13.8264 17.25 14.0596 17.1534 14.2315 16.9815C14.4034 16.8096 14.5 16.5764 14.5 16.3333C14.5 16.0902 14.4034 15.8571 14.2315 15.6852C14.0596 15.5132 13.8264 15.4167 13.5833 15.4167H3.5C3.25688 15.4167 3.02373 15.3201 2.85182 15.1482C2.67991 14.9763 2.58333 14.7431 2.58333 14.5V3.5C2.58333 3.25688 2.67991 3.02373 2.85182 2.85182C3.02373 2.67991 3.25688 2.58333 3.5 2.58333H13.5833C13.8264 2.58333 14.0596 2.48676 14.2315 2.31485C14.4034 2.14294 14.5 1.90978 14.5 1.66667C14.5 1.42355 14.4034 1.19039 14.2315 1.01849C14.0596 0.846577 13.8264 0.75 13.5833 0.75H3.5ZM12.3981 4.68525C12.3135 4.5977 12.2124 4.52787 12.1005 4.47982C11.9887 4.43178 11.8684 4.40649 11.7467 4.40544C11.625 4.40438 11.5043 4.42757 11.3916 4.47366C11.279 4.51975 11.1766 4.58782 11.0906 4.67389C11.0045 4.75996 10.9364 4.8623 10.8903 4.97496C10.8442 5.08761 10.821 5.20832 10.8221 5.33003C10.8232 5.45175 10.8484 5.57203 10.8965 5.68387C10.9445 5.79571 11.0144 5.89686 11.1019 5.98142L13.2038 8.08333H5.33333C5.09022 8.08333 4.85706 8.17991 4.68515 8.35182C4.51324 8.52373 4.41667 8.75688 4.41667 9C4.41667 9.24312 4.51324 9.47627 4.68515 9.64818C4.85706 9.82009 5.09022 9.91667 5.33333 9.91667H13.2038L11.1019 12.0186C10.9349 12.1915 10.8425 12.423 10.8446 12.6634C10.8467 12.9037 10.9431 13.1336 11.1131 13.3036C11.283 13.4735 11.513 13.5699 11.7533 13.572C11.9936 13.5741 12.2252 13.4817 12.3981 13.3148L16.0648 9.64808C16.2366 9.47618 16.3331 9.24307 16.3331 9C16.3331 8.75693 16.2366 8.52382 16.0648 8.35192L12.3981 4.68525Z",
            fill: "#D72E33"
        })
    });
}


/***/ }),

/***/ 65926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MenuIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



function MenuIcon({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBoxWidth: 24,
        viewBoxHeight: 19,
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.99884 0.750366C1.6673 0.750366 1.34935 0.882069 1.11491 1.1165C0.880482 1.35093 0.748779 1.66889 0.748779 2.00043C0.748779 2.33197 0.880482 2.64992 1.11491 2.88436C1.34935 3.11879 1.6673 3.25049 1.99884 3.25049H21.9998C22.3314 3.25049 22.6493 3.11879 22.8838 2.88436C23.1182 2.64992 23.2499 2.33197 23.2499 2.00043C23.2499 1.66889 23.1182 1.35093 22.8838 1.1165C22.6493 0.882069 22.3314 0.750366 21.9998 0.750366H1.99884ZM0.748779 9.5008C0.748779 9.16926 0.880482 8.85131 1.11491 8.61687C1.34935 8.38244 1.6673 8.25074 1.99884 8.25074H21.9998C22.3314 8.25074 22.6493 8.38244 22.8838 8.61687C23.1182 8.85131 23.2499 9.16926 23.2499 9.5008C23.2499 9.83234 23.1182 10.1503 22.8838 10.3847C22.6493 10.6192 22.3314 10.7509 21.9998 10.7509H1.99884C1.6673 10.7509 1.34935 10.6192 1.11491 10.3847C0.880482 10.1503 0.748779 9.83234 0.748779 9.5008ZM0.748779 17.0012C0.748779 16.6696 0.880482 16.3517 1.11491 16.1172C1.34935 15.8828 1.6673 15.7511 1.99884 15.7511H21.9998C22.3314 15.7511 22.6493 15.8828 22.8838 16.1172C23.1182 16.3517 23.2499 16.6696 23.2499 17.0012C23.2499 17.3327 23.1182 17.6507 22.8838 17.8851C22.6493 18.1195 22.3314 18.2512 21.9998 18.2512H1.99884C1.6673 18.2512 1.34935 18.1195 1.11491 17.8851C0.880482 17.6507 0.748779 17.3327 0.748779 17.0012Z"
        })
    });
}


/***/ }),

/***/ 23349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* binding */ listLoginSNS)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./app/classes/Social.ts
var EUserLoginWithSocial;
(function(EUserLoginWithSocial) {
    EUserLoginWithSocial["GOOGLE"] = "google";
    EUserLoginWithSocial["FACEBOOK"] = "facebook";
    EUserLoginWithSocial["TWITTER"] = "twitter";
    EUserLoginWithSocial["LINE"] = "line";
    EUserLoginWithSocial["YAHOO"] = "yahoo";
    EUserLoginWithSocial["APPLE"] = "apple";
})(EUserLoginWithSocial || (EUserLoginWithSocial = {}));

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./app/components/bases/Icon.tsx
var Icon = __webpack_require__(74142);
;// CONCATENATED MODULE: ./app/components/icons/AppleLoginIcon.tsx



function AppleLoginIcon({ className , viewBoxHeight =21 , viewBoxWidth =16  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
        className: className,
        viewBoxWidth: viewBoxWidth,
        viewBoxHeight: viewBoxHeight,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M13.3627 10.9394C13.3903 13.9131 15.9714 14.9027 16 14.9153C15.9782 14.9851 15.5876 16.3255 14.6402 17.7101C13.8212 18.9071 12.9711 20.0998 11.6321 20.1245C10.3164 20.1487 9.8933 19.3442 8.38904 19.3442C6.88524 19.3442 6.41518 20.0998 5.16969 20.1487C3.87719 20.1976 2.89296 18.8543 2.06715 17.6616C0.379706 15.222 -0.909851 10.7679 0.821698 7.76128C1.68189 6.26818 3.21913 5.32269 4.88766 5.29844C6.15687 5.27423 7.35485 6.15232 8.13073 6.15232C8.90612 6.15232 10.3619 5.09634 11.8924 5.25143C12.533 5.27809 14.3315 5.51023 15.4863 7.20059C15.3932 7.25827 13.3404 8.45334 13.3627 10.9394V10.9394ZM10.8899 3.63742C11.5761 2.8068 12.038 1.65051 11.912 0.5C10.9229 0.539753 9.72684 1.15911 9.01738 1.98927C8.38157 2.72442 7.82474 3.90106 7.97498 5.0288C9.07745 5.1141 10.2037 4.46856 10.8899 3.63742"
        })
    });
}

;// CONCATENATED MODULE: ./app/components/icons/FacebookLoginIcon.tsx



function FacebookLoginIcon({ className , viewBoxHeight =21 , viewBoxWidth =11  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
        className: className,
        viewBoxWidth: viewBoxWidth,
        viewBoxHeight: viewBoxHeight,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M7.1484 20.5V11.3771H10.2107L10.6691 7.82175H7.1484V5.55172C7.1484 4.52234 7.43432 3.82085 8.91047 3.82085L10.7932 3.82002V0.640152C10.4674 0.596809 9.34988 0.5 8.04977 0.5C5.33527 0.5 3.47695 2.15688 3.47695 5.19973V7.82175H0.40686V11.3771H3.47695V20.5H7.1484Z"
        })
    });
}

// EXTERNAL MODULE: ./app/components/icons/GoogleIcon.tsx
var GoogleIcon = __webpack_require__(37309);
// EXTERNAL MODULE: ./app/components/icons/LineIcon.tsx
var LineIcon = __webpack_require__(58032);
;// CONCATENATED MODULE: ./app/components/icons/TwitterLoginIcon.tsx



function TwitterLoginIcon({ className , viewBoxHeight =28 , viewBoxWidth =30  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
        className: className,
        viewBoxWidth: viewBoxWidth,
        viewBoxHeight: viewBoxHeight,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M0.572999 0L12.1556 15.4868L0.5 28.0784H3.12343L13.3282 17.054L21.573 28.0784H30.5L18.2654 11.7206L29.1145 0H26.4911L17.0934 10.1529L9.5 0H0.572999ZM4.43086 1.9322H8.53188L26.6416 26.1462H22.5406L4.43086 1.9322Z"
        })
    });
}

// EXTERNAL MODULE: ./app/components/icons/YahooIcon.tsx
var YahooIcon = __webpack_require__(88691);
;// CONCATENATED MODULE: ./app/config/social.tsx








const listLoginSNS = [
    {
        type: EUserLoginWithSocial.GOOGLE,
        icon: /*#__PURE__*/ jsx_runtime_.jsx(GoogleIcon/* default */.Z, {
            className: "w-[18px] h-[15px]"
        }),
        class: "bg-white border-[1px] border-[#0000001A] w-[27px] h-[27px] flex justify-center items-center rounded-[50%]"
    },
    {
        type: EUserLoginWithSocial.FACEBOOK,
        icon: /*#__PURE__*/ jsx_runtime_.jsx(FacebookLoginIcon, {
            className: "fill-white w-[18px] h-[15px]"
        }),
        class: "bg-[#1877F2] border-[1px] border-[#0000001A] w-[27px] h-[27px] flex justify-center items-center rounded-[50%]"
    },
    {
        type: EUserLoginWithSocial.TWITTER,
        icon: /*#__PURE__*/ jsx_runtime_.jsx(TwitterLoginIcon, {
            className: "fill-white w-[14px] h-[10px]"
        }),
        class: "bg-black border-[1px] border-[#0000001A] w-[27px] h-[27px] flex justify-center items-center rounded-[50%]"
    },
    {
        type: EUserLoginWithSocial.LINE,
        icon: /*#__PURE__*/ jsx_runtime_.jsx(LineIcon/* default */.Z, {
            className: "w-[18px] h-[15px]"
        }),
        class: "bg-[#06C755] border-[1px] border-[#0000001A] w-[27px] h-[27px] flex justify-center items-center rounded-[50%]"
    },
    {
        type: EUserLoginWithSocial.YAHOO,
        icon: /*#__PURE__*/ jsx_runtime_.jsx(YahooIcon/* default */.Z, {
            className: "fill-white w-[15px] h-[12px]"
        }),
        class: "bg-[#5F01D1] border-[1px] border-[#0000001A] w-[27px] h-[27px] flex justify-center items-center rounded-[50%]"
    },
    {
        type: EUserLoginWithSocial.APPLE,
        icon: /*#__PURE__*/ jsx_runtime_.jsx(AppleLoginIcon, {
            className: "fill-white w-[18px] h-[14px]"
        }),
        class: "bg-black border-[1px] border-[#FFFFFF26] w-[27px] h-[27px] flex justify-center items-center rounded-[50%]"
    }, 
];


/***/ }),

/***/ 10617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useDidClickOutside)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDidClickOutside(ref, onClick) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        /**
         * Alert if clicked on outside of element
         */ function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClick();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
    });
}


/***/ })

};
;