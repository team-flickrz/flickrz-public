"use strict";
exports.id = 88;
exports.ids = [88];
exports.modules = {

/***/ 35475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


const DefaultLayoutTitleComponent = ({ className , bg , title , colorTitle , description , children , customClass , customTitleClass , customHeightForBg  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className ? className : classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-full pt-[60px] px-[20px] pb-[60px] 3xl:px-[0] 3xl:pt-[110px] 3xl:pb-[160px]", bg ? bg : "bg-[#000]", customClass ? customClass : ""),
        style: {
            height: customHeightForBg ? customHeightForBg : ""
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(`text-[${colorTitle ? colorTitle : "#000"}] text-center`),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-[44px] leading-[44px] 3xl:text-[65px] font-[900] 3xl:leading-[65px] mb-[40px]", customTitleClass ? customTitleClass : ""),
                        children: title
                    }),
                    description
                ]
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultLayoutTitleComponent);


/***/ }),

/***/ 4683:
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
/* harmony import */ var _features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99275);
/* harmony import */ var _features_route_routeSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48172);
/* harmony import */ var _features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84689);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85277);
/* harmony import */ var _icons_FlickrzWhiteLogo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82931);
/* harmony import */ var _SocialNew__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96521);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_6__, _hooks_common__WEBPACK_IMPORTED_MODULE_9__, _SocialNew__WEBPACK_IMPORTED_MODULE_11__]);
([_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_6__, _hooks_common__WEBPACK_IMPORTED_MODULE_9__, _SocialNew__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Footer = ()=>{
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).state;
    const { linkTreeWhitePaper  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppSelector */ .CG)((state)=>state.linkTree);
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppDispatch */ .TL)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const options = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>[
            {
                label: lang["common/about"],
                value: _constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.ABOUT */ .Yj.ABOUT
            },
            {
                label: lang["common/rte"],
                value: _constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.ENJOY_AND_EARN */ .Yj.ENJOY_AND_EARN
            },
            // {
            //     label: lang["common/token"],
            //     value: ROUTER.TOKEN,
            // },
            {
                label: lang["common/docs"],
                value: linkTreeWhitePaper,
                newTab: true
            },
            {
                label: lang["common/marketplace"],
                value: _constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.MARKETPLACE */ .Yj.MARKETPLACE
            },
            {
                label: lang["common/myprofile"],
                value: _constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.PROFILE */ .Yj.PROFILE
            },
            {
                label: lang["common/help"],
                value: _constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.HELP */ .Yj.HELP
            },
            {
                label: lang["common/link-tree"],
                value: _constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.LINK_TREE */ .Yj.LINK_TREE,
                newTab: true
            }, 
        ], [
        lang,
        linkTreeWhitePaper
    ]);
    const handleClickTab = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((page, route, item)=>{
        if (item.newTab) {
            window.open(page, "_blank", "noopener,noreferrer");
        } else {
            dispatch(_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_7__/* .routeActions.setRoute */ .WU.setRoute(route));
            router.push(page);
        }
        dispatch(_features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_8__/* .sidebarFilterActions.clearAllFilter */ .A.clearAllFilter());
        dispatch(_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_6__/* .marketplaceActions.resetFilter */ .z.resetFilter());
    }, [
        dispatch,
        router
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full pt-[60px] pb-[67px] lg:pt-[80px] lg:pb-[110px] bg-[#000] text-white/50",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-[240px] h-[41px] relative mx-auto",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_FlickrzWhiteLogo__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col lg:flex-row justify-center items-center gap-[30px] lg:gap-0 mt-[24px] lg:mt-[34px] mb-[50px]",
                children: options.map((item, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("mx-5 cursor-pointer h-full flex items-center relative", "transition-transform duration-300 ease-in"),
                        onClick: ()=>handleClickTab(item.value, item.value, item),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-base", "leading-16, font-[600]"),
                            children: item.label
                        })
                    }, index);
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center text-[12px] leading-[12px] mb-[50px]",
                children: [
                    "COPYRIGHT ",
                    new Date().getFullYear(),
                    " GWDC Labs Ltd. ALL RIGHTS RESERVED"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialNew__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                customFill: "fill-[#FFFFFF80]"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96521:
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
/* harmony import */ var _classes_LinkTree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31624);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_linkTree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53589);
/* harmony import */ var _icons_FacebookIconV2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60934);
/* harmony import */ var _icons_InstagramAboutIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97798);
/* harmony import */ var _icons_LinkedinIconV2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64001);
/* harmony import */ var _icons_SnsDiscordIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70159);
/* harmony import */ var _icons_SnsMailIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72897);
/* harmony import */ var _icons_SnsMediumIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7996);
/* harmony import */ var _icons_SnsTelegramIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(23412);
/* harmony import */ var _icons_TelegramIconV2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69442);
/* harmony import */ var _icons_TwitterIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(53877);
/* harmony import */ var _hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6483);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_5__]);
_hooks_common__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


















const SocialNew = ({ customFill  })=>{
    const { listSocialMedia  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .CG)((state)=>state.linkTree);
    const [getLinkTree] = _services_query_endpoints_linkTree__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useLazyGetLinkTreeQuery */ .Z.useLazyGetLinkTreeQuery();
    const [isMobile] = (0,_hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_16__/* .useWindowResizeMobile */ .c)(1024);
    const getIcon = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((category)=>{
        if (!category) return;
        switch(category){
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_4__/* .LINK_TREE_CATEGORY.TELEGRAM_CHANNEL */ .d.TELEGRAM_CHANNEL:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_TelegramIconV2__WEBPACK_IMPORTED_MODULE_14__/* .TelegramIconV2 */ .u, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("fill-icon w-icon", customFill ? customFill : "")
                });
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_4__/* .LINK_TREE_CATEGORY.TELEGRAM_CHAT */ .d.TELEGRAM_CHAT:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SnsTelegramIcon__WEBPACK_IMPORTED_MODULE_13__/* .SnsTelegramIcon */ .Y, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("fill-icon w-[32px] mb-[-3px]", customFill ? customFill : "")
                });
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_4__/* .LINK_TREE_CATEGORY.MEDIUM */ .d.MEDIUM:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SnsMediumIcon__WEBPACK_IMPORTED_MODULE_12__/* .SnsMediumIcon */ .I, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("fill-icon w-[32px]", customFill ? customFill : "")
                });
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_4__/* .LINK_TREE_CATEGORY.DISCORD_SERVER */ .d.DISCORD_SERVER:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SnsDiscordIcon__WEBPACK_IMPORTED_MODULE_10__/* .SnsDiscordIcon */ .I, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("fill-icon w-icon", customFill ? customFill : "")
                });
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_4__/* .LINK_TREE_CATEGORY.TWITTER */ .d.TWITTER:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_TwitterIcon__WEBPACK_IMPORTED_MODULE_15__/* .TwitterIcon */ .Z, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("fill-icon w-icon", customFill ? customFill : "")
                });
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_4__/* .LINK_TREE_CATEGORY.FACEBOOK */ .d.FACEBOOK:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_FacebookIconV2__WEBPACK_IMPORTED_MODULE_7__/* .FacebookIconV2 */ .z, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("fill-icon w-icon", customFill ? customFill : "")
                });
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_4__/* .LINK_TREE_CATEGORY.LINKEDIN */ .d.LINKEDIN:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_LinkedinIconV2__WEBPACK_IMPORTED_MODULE_9__/* .LinkedinIconV2 */ .u, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("fill-icon w-icon", customFill ? customFill : "")
                });
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_4__/* .LINK_TREE_CATEGORY.INSTAGRAM */ .d.INSTAGRAM:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_InstagramAboutIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("fill-icon mt-[1px] w-icon", customFill ? customFill : "")
                });
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_4__/* .LINK_TREE_CATEGORY.EMAIL */ .d.EMAIL:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SnsMailIcon__WEBPACK_IMPORTED_MODULE_11__/* .SnsMailIcon */ .f, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("fill-icon w-icon", customFill ? customFill : "")
                });
            default:
                return;
        }
    }, [
        customFill
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getLinkTree({});
    }, [
        getLinkTree
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !isMobile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex flex-row items-center relative justify-center gap-[15px] 3xl:gap-[30px] max-w-[460px] mx-auto",
            children: listSocialMedia.map((item, index)=>{
                if (item.categories2 === _classes_LinkTree__WEBPACK_IMPORTED_MODULE_4__/* .LINK_TREE_CATEGORY.YOUTUBE */ .d.YOUTUBE) return;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: item.url,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        target: "_blank",
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("block w-icon h-icon lg:h-full select-none cursor-pointer", {
                            "!w-fit": item.categories2 === _classes_LinkTree__WEBPACK_IMPORTED_MODULE_4__/* .LINK_TREE_CATEGORY.MEDIUM */ .d.MEDIUM || item.categories2 === _classes_LinkTree__WEBPACK_IMPORTED_MODULE_4__/* .LINK_TREE_CATEGORY.FACEBOOK */ .d.FACEBOOK
                        }),
                        style: {
                            width: index === 1 ? "32px" : ""
                        },
                        children: getIcon(item.categories2)
                    })
                }, index);
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col gap-4 xs:gap-6",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-row items-center relative justify-center gap-[21px] xs:gap-[35px] max-w-[460px] mx-auto",
                    children: listSocialMedia.map((item, index)=>{
                        if (item.categories2 === _classes_LinkTree__WEBPACK_IMPORTED_MODULE_4__/* .LINK_TREE_CATEGORY.YOUTUBE */ .d.YOUTUBE || index > 4) return;
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: item.url,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                target: "_blank",
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("block w-icon h-icon lg:h-full select-none cursor-pointer", {
                                    "!w-fit": item.categories2 === _classes_LinkTree__WEBPACK_IMPORTED_MODULE_4__/* .LINK_TREE_CATEGORY.MEDIUM */ .d.MEDIUM
                                }),
                                style: {
                                    width: index === 1 ? "32px" : ""
                                },
                                children: getIcon(item.categories2)
                            })
                        }, index);
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-row items-center relative justify-center gap-[21px] xs:gap-[35px] max-w-[460px] mx-auto",
                    children: listSocialMedia.map((item, index)=>{
                        if (item.categories2 === _classes_LinkTree__WEBPACK_IMPORTED_MODULE_4__/* .LINK_TREE_CATEGORY.YOUTUBE */ .d.YOUTUBE || index <= 4) return;
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: item.url,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                target: "_blank",
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("block w-icon h-icon lg:h-full select-none cursor-pointer", {
                                    "!w-fit": item.categories2 === _classes_LinkTree__WEBPACK_IMPORTED_MODULE_4__/* .LINK_TREE_CATEGORY.MEDIUM */ .d.MEDIUM
                                }),
                                style: {
                                    width: index === 1 ? "32px" : ""
                                },
                                children: getIcon(item.categories2)
                            })
                        }, index);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialNew);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7043:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85750);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6483);
/* harmony import */ var _services_query_endpoints_subscribe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81315);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60088);
/* harmony import */ var _bases_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36332);
/* harmony import */ var _DefaultLayoutTitleComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35475);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_3__]);
_hooks_common__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const StayInformed = ()=>{
    const [isMobile] = (0,_hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_4__/* .useWindowResizeMobile */ .c)(576);
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [subscribe, subscribeResult] = _services_query_endpoints_subscribe__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useSubscribeMutation */ .Z.useSubscribeMutation();
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .TL)();
    const renderDescription = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "text-[20px] leading-[26px] 3xl:text-[28px] 3xl:leading-[36.4px] font-[600]",
            children: isMobile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: "Subscribe to Flickrz and get updates straight to your Inbox"
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "Subscribe to Flickrz and get updates"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "straight to your Inbox"
                    })
                ]
            })
        });
    }, [
        isMobile
    ]);
    const handleChangeInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        const value = e.target.value;
        setEmail(value);
    }, []);
    const validateEmail = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((email)=>{
        return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }, []);
    const handleSubscribe = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const validate = validateEmail(email);
        setError(validate ? "" : "Invalid email");
        if (validate) {
            subscribe({
                email
            });
        }
    }, [
        email,
        validateEmail,
        subscribe
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const { isSuccess , isError , error  } = subscribeResult;
        if (isSuccess) {
            dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_2__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                type: "success",
                title: "Subscribed successfully"
            }));
            setEmail("");
            return;
        }
        if (isError && error) {
            if ("status" in error) {
                const errMsgRaw = "error" in error ? error.error : JSON.stringify(error.data);
                const title = JSON.parse(errMsgRaw).message[0];
                dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_2__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                    type: "danger",
                    title
                }));
            }
            return;
        }
    }, [
        subscribeResult,
        dispatch
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DefaultLayoutTitleComponent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        title: "Stay Informed",
        bg: "bg-[#95FF7B]",
        description: renderDescription(),
        customTitleClass: "!mb-[20px]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "gap-[10px] flex flex-col",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col lg:flex-row justify-center mt-[40px] lg:mt-[60px] gap-[16px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Input__WEBPACK_IMPORTED_MODULE_7__/* .Input */ .I, {
                            className: "border-[2px] border-[#000] pl-[30px] pr-[20px] py-[16.3px] w-full lg:max-w-[400px] dark:text-[#000] dark:border-black dark:focus:border-black/70 dark:placeholder:text-black text-[20px] leading-[20px] placeholder:text-black",
                            placeholder: "Enter your e-mail address",
                            value: email,
                            onChange: handleChangeInput
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                            onClick: handleSubscribe,
                            className: "w-full lg:w-[205px] about-btn text-white !py-[20px] relative text-[20px] leading-[20px] font-[400]",
                            children: "Subscribe"
                        })
                    ]
                }),
                error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-[#EE312F] text-[14px] text-center",
                    children: error
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StayInformed);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FlickrzWhiteLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74142);


function FlickrzWhiteLogo({ className  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        className: className,
        viewBoxWidth: 533,
        viewBoxHeight: 140,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M121.644 29.5419L152.56 28.2792L137.605 137.652H106.854L121.633 29.5419H121.644Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M164.763 54.7638H195.514L184.184 137.652H153.434L164.763 54.7638ZM171.683 40.3528C169.119 37.5947 168.102 34.2938 168.632 30.4391C169.163 26.5954 171.075 23.2945 174.391 20.5253C177.707 17.7672 181.399 16.3826 185.478 16.3826C189.556 16.3826 192.839 17.7672 195.337 20.5253C197.836 23.2945 198.819 26.5954 198.3 30.4391C197.769 34.2827 195.879 37.5836 192.629 40.3528C189.38 43.122 185.71 44.4955 181.631 44.4955C177.552 44.4955 174.236 43.1109 171.683 40.3528Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M267.594 135.137C257.447 138.383 246.372 140 234.39 140C220.96 140 211.387 136.611 205.661 129.82C199.936 123.03 198.057 112.43 200.035 98.0189C201.008 90.9297 202.92 83.9402 205.783 77.0283C208.646 70.1163 211.321 65.4641 213.808 63.0604C216.704 60.3023 221.965 57.954 229.603 56.0377C237.241 54.1214 245.012 53.1577 252.926 53.1577C260.841 53.1577 269.429 53.8777 277.62 55.3177C276.968 58.3195 276.094 61.8309 275.011 65.8628C273.917 69.8837 272.867 73.4615 271.839 76.5852C264.466 76.1089 257.491 75.8652 250.903 75.8652C244.316 75.8652 240.248 76.2307 238.347 76.9507C237.341 77.3163 236.136 79.7753 234.732 84.339C233.328 88.9026 232.356 93.1672 231.814 97.1327C231.096 102.416 231.283 106.47 232.4 109.295C233.516 112.12 235.616 114.069 238.7 115.155C241.784 116.24 246.084 116.772 251.6 116.772C253.998 116.772 259.304 116.528 267.517 116.052L267.605 135.148L267.594 135.137Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M361.825 137.652H328.377L315.898 103.956C314.693 100.478 312.781 98.2515 310.161 97.2878L304.645 137.652H273.895L288.673 29.5419L319.59 28.2792L311.189 89.7223C314.229 88.526 317.025 86.0559 319.568 82.3341L338.624 54.7639L372.271 54.5866L350.982 82.6996C347.61 87.1414 344.14 90.686 340.536 93.3334C342.88 96.3352 345.378 100.899 348.019 107.024L361.814 137.652H361.825Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M435.994 53.501C437.686 53.8666 438.912 54.2875 439.686 54.7638C439.321 57.4112 438.426 61.7644 437 67.8234C435.574 73.8935 434.447 78.1802 433.618 80.7057C432.435 80.5839 430.224 80.5285 426.986 80.5285C419.436 80.5285 412.66 80.9494 406.669 81.7913L399.031 137.652H368.281L379.61 54.7638H405.321L407.089 68.1003H407.266C411.367 63.5367 415.579 59.8702 419.923 57.1121C424.256 54.354 427.981 52.9694 431.098 52.9694C432.656 52.9694 434.281 53.1466 435.972 53.5121L435.994 53.501Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M107.96 57.2893L111.021 34.9474H55.5106L34.94 53.4568L23.4333 137.652H55.798L61.3137 97.2878H95.3032L97.9892 77.6486H63.9997L66.7852 57.2893H107.96Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M42.3128 24.5241C31.823 27.681 27.6227 31.8902 24.4725 42.4021C23.754 44.7947 20.3495 44.7947 19.631 42.4021C16.4808 31.8902 12.2804 27.681 1.79067 24.5241C-0.596889 23.8041 -0.596889 20.3924 1.79067 19.6724C12.2804 16.5155 16.4808 12.3064 19.631 1.79445C20.3495 -0.598149 23.754 -0.598149 24.4725 1.79445C27.6227 12.3064 31.823 16.5155 42.3128 19.6724C44.7004 20.3924 44.7004 23.8041 42.3128 24.5241Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M458.278 84.2393L475.411 84.2946L425.383 138.338H513.546L521.526 105.684C516.342 109.937 510.926 111.023 507.942 111.289L502.327 111.422L482.972 111.3L533 57.2561H448.916L437.531 90.0767C444.561 85.5131 451.414 84.494 455.073 84.3168L458.278 84.2614V84.2393Z",
                fill: "white"
            })
        ]
    });
}


/***/ }),

/***/ 97798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74142);


const InstagramAboutIcon = ({ className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            width: "22",
            height: "21",
            viewBox: "0 0 22 21",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                id: "Group",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        id: "Vector",
                        d: "M16.4643 3.88489C15.8343 3.88489 15.2043 4.40989 15.2043 5.14489C15.2043 5.87989 15.7293 6.40489 16.4643 6.40489C17.1993 6.40489 17.7243 5.87989 17.7243 5.14489C17.6193 4.40989 17.0943 3.88489 16.4643 3.88489Z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        id: "Vector_2",
                        d: "M10.8992 5.46045C8.06424 5.46045 5.75424 7.77045 5.75424 10.6054C5.75424 13.4404 8.06424 15.7504 10.8992 15.7504C13.7342 15.7504 16.0442 13.4404 16.0442 10.6054C16.1492 7.77045 13.8392 5.46045 10.8992 5.46045ZM10.8992 13.9654C9.11424 13.9654 7.53924 12.4954 7.53924 10.6054C7.53924 8.82045 9.00924 7.24545 10.8992 7.24545C12.6842 7.24545 14.2592 8.71545 14.2592 10.6054C14.2592 12.4954 12.7892 13.9654 10.8992 13.9654Z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        id: "Vector_3",
                        d: "M15.0992 0H6.6992C3.2342 0 0.3992 2.835 0.3992 6.3V14.7C0.3992 18.165 3.2342 21 6.6992 21H15.0992C18.5642 21 21.3992 18.165 21.3992 14.7V6.3C21.3992 2.835 18.5642 0 15.0992 0ZM19.4042 14.7C19.4042 17.115 17.4092 19.005 15.0992 19.005H6.6992C4.2842 19.005 2.3942 17.01 2.3942 14.7V6.3C2.3942 3.885 4.3892 1.995 6.6992 1.995H15.0992C17.5142 1.995 19.4042 3.99 19.4042 6.3V14.7Z"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstagramAboutIcon);


/***/ }),

/***/ 23412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ SnsTelegramIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



const SnsTelegramIcon = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBoxHeight: 19,
        viewBoxWidth: 32,
        className: className,
        fillRule: "evenodd",
        clipRule: "evenodd",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M2.99825 17.577C2.62958 17.577 2.28658 17.514 1.96925 17.388C1.65658 17.2573 1.38125 17.0753 1.14325 16.842C0.909913 16.6087 0.727913 16.338 0.597246 16.03C0.466579 15.7173 0.401246 15.3813 0.401246 15.022C0.401246 14.6627 0.466579 14.329 0.597246 14.021C0.727913 13.7083 0.909913 13.4377 1.14325 13.209C1.37658 12.9803 1.64958 12.803 1.96225 12.677C2.27958 12.5463 2.62258 12.481 2.99125 12.481C3.38325 12.481 3.73091 12.544 4.03425 12.67C4.34225 12.796 4.61058 12.9687 4.83925 13.188L4.10425 13.93C3.97358 13.79 3.81491 13.6803 3.62825 13.601C3.44625 13.5217 3.23391 13.482 2.99125 13.482C2.77658 13.482 2.57825 13.5193 2.39625 13.594C2.21891 13.664 2.06491 13.7667 1.93425 13.902C1.80825 14.0373 1.70791 14.2007 1.63325 14.392C1.56325 14.5833 1.52825 14.7933 1.52825 15.022C1.52825 15.2553 1.56325 15.4677 1.63325 15.659C1.70791 15.8503 1.80825 16.0137 1.93425 16.149C2.06491 16.2843 2.21891 16.3893 2.39625 16.464C2.57825 16.5387 2.77658 16.576 2.99125 16.576C3.24325 16.576 3.46258 16.5363 3.64925 16.457C3.83591 16.3777 3.99691 16.268 4.13225 16.128L4.87425 16.87C4.63625 17.0893 4.36325 17.262 4.05525 17.388C3.75191 17.514 3.39958 17.577 2.99825 17.577ZM7.62842 17.5V15.561C7.62842 15.3837 7.57242 15.2413 7.46042 15.134C7.35308 15.022 7.21542 14.966 7.04742 14.966C6.93075 14.966 6.82808 14.9917 6.73942 15.043C6.65075 15.0897 6.58075 15.1597 6.52942 15.253C6.47808 15.3417 6.45242 15.4443 6.45242 15.561L6.03942 15.358C6.03942 15.092 6.09542 14.8587 6.20742 14.658C6.31942 14.4573 6.47575 14.3033 6.67642 14.196C6.87708 14.084 7.10808 14.028 7.36942 14.028C7.63542 14.028 7.86875 14.084 8.06942 14.196C8.27008 14.3033 8.42408 14.455 8.53142 14.651C8.64342 14.8423 8.69942 15.0663 8.69942 15.323V17.5H7.62842ZM5.38142 17.5V12.418H6.45242V17.5H5.38142ZM10.8083 17.57C10.4956 17.57 10.2156 17.493 9.96828 17.339C9.72561 17.185 9.53194 16.975 9.38728 16.709C9.24728 16.443 9.17728 16.1397 9.17728 15.799C9.17728 15.4583 9.24728 15.155 9.38728 14.889C9.53194 14.623 9.72561 14.413 9.96828 14.259C10.2156 14.105 10.4956 14.028 10.8083 14.028C11.0369 14.028 11.2423 14.0723 11.4243 14.161C11.6109 14.2497 11.7626 14.3733 11.8793 14.532C11.9959 14.686 12.0613 14.8633 12.0753 15.064V16.534C12.0613 16.7347 11.9959 16.9143 11.8793 17.073C11.7673 17.227 11.6179 17.3483 11.4313 17.437C11.2446 17.5257 11.0369 17.57 10.8083 17.57ZM11.0253 16.604C11.2539 16.604 11.4383 16.5293 11.5783 16.38C11.7183 16.226 11.7883 16.0323 11.7883 15.799C11.7883 15.6403 11.7556 15.5003 11.6903 15.379C11.6296 15.2577 11.5409 15.1643 11.4243 15.099C11.3123 15.029 11.1816 14.994 11.0323 14.994C10.8829 14.994 10.7499 15.029 10.6333 15.099C10.5213 15.1643 10.4303 15.2577 10.3603 15.379C10.2949 15.5003 10.2623 15.6403 10.2623 15.799C10.2623 15.953 10.2949 16.0907 10.3603 16.212C10.4256 16.3333 10.5166 16.429 10.6333 16.499C10.7499 16.569 10.8806 16.604 11.0253 16.604ZM11.7463 17.5V16.583L11.9073 15.757L11.7463 14.931V14.098H12.7963V17.5H11.7463ZM14.0334 17.5V12.691H15.1044V17.5H14.0334ZM13.2634 15.008V14.098H15.8744V15.008H13.2634Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M17.7402 12.3791L17.3982 17.4097C17.9007 17.4097 18.1227 17.184 18.4032 16.9163L20.8174 14.6113L25.8401 18.2548C26.7644 18.7556 27.4315 18.4963 27.6618 17.4122L30.9589 2.15647C31.2965 0.827611 30.443 0.2249 29.5588 0.619076L10.1978 7.94919C8.87621 8.46965 8.88391 9.19359 9.95688 9.51616L14.9253 11.0388L26.4279 3.91357C26.9709 3.59026 27.4692 3.76408 27.0602 4.12053L17.7399 12.3789L17.7402 12.3791Z"
            })
        ]
    });
};


/***/ }),

/***/ 69442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ TelegramIconV2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



const TelegramIconV2 = ({ className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        fillRule: "evenodd",
        clipRule: "evenodd",
        viewBoxHeight: 19,
        viewBoxWidth: 23,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M8.88325 12.3791L8.54127 17.4097C9.04376 17.4097 9.26578 17.184 9.54626 16.9163L11.9605 14.6113L16.9831 18.2548C17.9075 18.7556 18.5746 18.4963 18.8048 17.4122L22.102 2.15647C22.4396 0.827611 21.5861 0.2249 20.7018 0.619076L1.34084 7.94919C0.0192757 8.46965 0.0269805 9.19359 1.09995 9.51616L6.06841 11.0388L17.5709 3.91357C18.1139 3.59026 18.6123 3.76408 18.2033 4.12053L8.88297 12.3789L8.88325 12.3791Z"
        })
    });
};


/***/ }),

/***/ 53877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TwitterIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



const TwitterIcon = ({ className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
        })
    });
};


/***/ }),

/***/ 81315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21082);

const subscribeApi = _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].injectEndpoints */ .Z.injectEndpoints({
    endpoints: (builder)=>({
            subscribe: builder.mutation({
                query: (args)=>({
                        url: "/user-subscribe",
                        body: args,
                        method: "POST"
                    })
            })
        })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subscribeApi);


/***/ })

};
;