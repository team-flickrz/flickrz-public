"use strict";
(() => {
var exports = {};
exports.id = 4037;
exports.ids = [4037];
exports.modules = {

/***/ 89402:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes_LinkTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31624);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53450);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85277);
/* harmony import */ var _icons_CoingeckoIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20569);
/* harmony import */ var _icons_CoinMarketCapIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94501);
/* harmony import */ var _icons_FacebookIconV2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60934);
/* harmony import */ var _icons_InstagramIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76422);
/* harmony import */ var _icons_LinkedinIconV2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64001);
/* harmony import */ var _icons_ShareIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93996);
/* harmony import */ var _icons_SnsDiscordIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70159);
/* harmony import */ var _icons_SnsMailIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72897);
/* harmony import */ var _icons_SnsMediumIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7996);
/* harmony import */ var _icons_SnsTelegramIconV2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(96043);
/* harmony import */ var _icons_TelegramIconV3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(76461);
/* harmony import */ var _icons_WhitePaperIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(56739);
/* harmony import */ var _icons_Youtube__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(35676);
/* harmony import */ var _services_query_endpoints_linkTree__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(53589);
/* harmony import */ var _icons_TwitterIconV2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(81446);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_4__, _icons_ShareIcon__WEBPACK_IMPORTED_MODULE_10__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_4__, _icons_ShareIcon__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const LinkTreeChannelComponent = ({ channel  })=>{
    const { theme  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    const [updateLinkTreeViewCount] = _services_query_endpoints_linkTree__WEBPACK_IMPORTED_MODULE_18__/* ["default"].useLazyUpdateLinkTreeViewCountQuery */ .Z.useLazyUpdateLinkTreeViewCountQuery();
    const renderIconBaseOnChannel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        switch(channel.categories2){
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_2__/* .LINK_TREE_CATEGORY.WHITEPAPER */ .d.WHITEPAPER:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_WhitePaperIcon__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    className: "w-[33px] h-[24px] dark:fill-white"
                });
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_2__/* .LINK_TREE_CATEGORY.COINGECKO */ .d.COINGECKO:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CoingeckoIcon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    className: "w-[28px] h-[28px] dark:fill-white"
                });
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_2__/* .LINK_TREE_CATEGORY.COINMARKETCAP */ .d.COINMARKETCAP:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CoinMarketCapIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    className: "w-[28px] h-[28px] dark:fill-white"
                });
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_2__/* .LINK_TREE_CATEGORY.TELEGRAM_CHANNEL */ .d.TELEGRAM_CHANNEL:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_TelegramIconV3__WEBPACK_IMPORTED_MODULE_15__/* .TelegramIconV3 */ .M, {
                    className: "w-[27px] h-[23px] dark:fill-white"
                });
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_2__/* .LINK_TREE_CATEGORY.TELEGRAM_CHAT */ .d.TELEGRAM_CHAT:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SnsTelegramIconV2__WEBPACK_IMPORTED_MODULE_14__/* .SnsTelegramIconV2 */ .f, {
                    className: "w-[36px] h-[23px] dark:fill-white"
                });
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_2__/* .LINK_TREE_CATEGORY.MEDIUM */ .d.MEDIUM:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SnsMediumIcon__WEBPACK_IMPORTED_MODULE_13__/* .SnsMediumIcon */ .I, {
                    className: "w-[32px] h-[19px] dark:fill-white"
                });
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_2__/* .LINK_TREE_CATEGORY.TWITTER */ .d.TWITTER:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_TwitterIconV2__WEBPACK_IMPORTED_MODULE_19__/* .TwitterIconV2 */ .w, {
                    className: "w-[25px] h-[21px] dark:fill-white"
                });
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_2__/* .LINK_TREE_CATEGORY.DISCORD_SERVER */ .d.DISCORD_SERVER:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SnsDiscordIcon__WEBPACK_IMPORTED_MODULE_11__/* .SnsDiscordIcon */ .I, {
                    className: "w-[25px] h-[19px] dark:fill-white"
                });
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_2__/* .LINK_TREE_CATEGORY.FACEBOOK */ .d.FACEBOOK:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_FacebookIconV2__WEBPACK_IMPORTED_MODULE_7__/* .FacebookIconV2 */ .z, {
                    className: "w-[22px] h-[22px] dark:fill-white"
                });
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_2__/* .LINK_TREE_CATEGORY.YOUTUBE */ .d.YOUTUBE:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Youtube__WEBPACK_IMPORTED_MODULE_17__/* .YoutubeIcon */ .L, {
                    isDarkTheme: theme === "dark",
                    className: "w-[28px] h-[19px]"
                });
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_2__/* .LINK_TREE_CATEGORY.LINKEDIN */ .d.LINKEDIN:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_LinkedinIconV2__WEBPACK_IMPORTED_MODULE_9__/* .LinkedinIconV2 */ .u, {
                    className: "w-[18px] h-[18px] dark:fill-white"
                });
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_2__/* .LINK_TREE_CATEGORY.EMAIL */ .d.EMAIL:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SnsMailIcon__WEBPACK_IMPORTED_MODULE_12__/* .SnsMailIcon */ .f, {
                    className: "w-[28px] h-[18px] dark:fill-white"
                });
            case _classes_LinkTree__WEBPACK_IMPORTED_MODULE_2__/* .LINK_TREE_CATEGORY.INSTAGRAM */ .d.INSTAGRAM:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_InstagramIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    isDarkTheme: theme === "dark",
                    className: "w-[28px] h-[28px] dark:fill-white"
                });
            default:
                break;
        }
    }, [
        channel.categories2,
        theme
    ]);
    const handleClickShare = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        e.stopPropagation();
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_3__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/share-this-link",
            propsState: {
                linkUrl: channel.url
            }
        }));
    }, [
        dispatch,
        channel.url
    ]);
    const handleClickLinkTree = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        e.stopPropagation();
        updateLinkTreeViewCount(Number(channel.id));
        window.open(channel.url, "_blank")?.focus();
    }, [
        channel.url,
        updateLinkTreeViewCount,
        channel.id
    ]);
    const handleRenderCategoriesName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((category)=>{
        if (category === _classes_LinkTree__WEBPACK_IMPORTED_MODULE_2__/* .LINK_TREE_CATEGORY.TWITTER */ .d.TWITTER) {
            return "X (Twitter)";
        }
        return category;
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onClick: (e)=>handleClickLinkTree(e),
        className: "cursor-pointer w-full h-[50px] pl-[10px] justify-between items-center lg:pl-[5px] flex py-[4px] gap-[10px] lg:gap-[10px] lg:py-[20px] border-[#000] dark:border-[#FFFFFFE5] rounded-[10px] group border-[2px] relative dark:hover:border-[#FFFFFFE5]",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[100px] flex items-center justify-center",
                        children: renderIconBaseOnChannel()
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-[16px] leading-[16px] dark:text-white",
                        children: handleRenderCategoriesName(channel.categories2)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-[16px] border-l-[1px] border-[#00000026] dark:border-[#FFFFFF26]",
                onClick: (event)=>handleClickShare(event),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ShareIcon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    className: " w-[18px] h-[18px] fill-icon dark:fill-icon-dark"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkTreeChannelComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7005:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14613);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53450);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_linkTree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53589);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61103);
/* harmony import */ var _icons_ShareIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93996);
/* harmony import */ var _LinkTreeChannelComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89402);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_4__, _icons_ShareIcon__WEBPACK_IMPORTED_MODULE_7__, _LinkTreeChannelComponent__WEBPACK_IMPORTED_MODULE_8__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_4__, _icons_ShareIcon__WEBPACK_IMPORTED_MODULE_7__, _LinkTreeChannelComponent__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const LinkTreeComponent = ()=>{
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).state;
    const { theme  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const { listGeneral , listSocialMedia  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.linkTree);
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    const [getListLinkTree, { isFetching  }] = _services_query_endpoints_linkTree__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useLazyGetLinkTreeQuery */ .Z.useLazyGetLinkTreeQuery();
    const handleClickShare = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_3__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/share-this-link",
            propsState: {
                linkUrl: window.location.href
            }
        }));
    }, [
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getListLinkTree({});
    }, [
        getListLinkTree
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        className: "!rounded-none lg:!rounded-2xl !p-0 w-full h-full lg:h-fit lg:min-h-[85vh] lg:max-w-[1200px] bg-white lg:jusity-start lg:mb-[20px] lg:mx-[120px] lg:!mt-[20px]",
        children: [
            isFetching ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col flex-grow justify-center items-center h-[80vh] mt-10 lg:mt-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-icon-2xl h-icon-2xl animate-spin rounded-full border-4 border-white border-t-4 border-t-red-500"
                })
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "py-[25px] px-[20px] lg:py-[50px] xl:px-[200px] flex flex-col lg:px-[5vw] gap-[30px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-[20px] leading-[25px] font-semibold dark:text-white",
                                children: lang["common/link-tree"]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: handleClickShare,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ShareIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    className: "w-[24px] h-[24px] fill-icon dark:fill-icon-dark"
                                })
                            })
                        ]
                    }),
                    listGeneral.length !== 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-fit text-[16px] leading-[16px] mb-[15px] dark:text-white",
                                children: lang["link-tree/general-info"]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col gap-[10px]",
                                children: listGeneral.map((ele)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LinkTreeChannelComponent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        channel: ele
                                    }, ele.id))
                            })
                        ]
                    }),
                    listSocialMedia.length !== 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-fit text-[16px] leading-[16px] mb-[15px] dark:text-white",
                                children: lang["link-tree/social-media"]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col lg:flex-row lg:flex-wrap gap-[10px]",
                                children: listSocialMedia.map((ele)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LinkTreeChannelComponent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        channel: ele
                                    }, ele.id))
                            })
                        ]
                    })
                ]
            }),
            !isFetching && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    backgroundImage: `url(${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/link-tree-footer${theme === "dark" ? "-white" : ""}.svg)`
                },
                className: "hidden xl:block w-[1200px] h-[400px]"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkTreeComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CoinMarketCapIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



function CoinMarketCapIcon({ className , viewBoxHeight =28 , viewBoxWidth =28  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        viewBoxWidth: viewBoxWidth,
        viewBoxHeight: viewBoxHeight,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M24.3539 16.7403C23.8581 17.0388 23.2795 17.093 22.8387 16.8488C22.2877 16.5233 21.9571 15.7907 21.9571 14.7868V11.7209C21.9571 10.2558 21.3786 9.19767 20.3868 8.92635C18.7063 8.43798 17.439 10.4729 16.9706 11.2326L13.9953 15.9264V10.1473C13.9677 8.81783 13.5269 8.03101 12.7004 7.78682C12.1494 7.62403 11.3229 7.70543 10.524 8.89923L3.88451 19.3721C3.00292 17.7171 2.53457 15.8721 2.53457 14C2.53457 7.6783 7.68637 2.55039 13.9953 2.55039C20.3041 2.55039 25.4559 7.6783 25.4559 14V14.0271V14.0543C25.511 15.2752 25.1253 16.2519 24.3539 16.7403ZM27.9905 14V13.9729V13.9457C27.963 6.26744 21.6816 0 13.9953 0C6.28133 0 0 6.26744 0 14C0 21.7054 6.28133 28 13.9953 28C17.5492 28 20.9102 26.6705 23.4999 24.2558C24.0233 23.7674 24.0509 22.9806 23.555 22.4651C23.0867 21.9496 22.2877 21.9225 21.7643 22.3837C21.7643 22.3837 21.7643 22.3837 21.7367 22.4109C19.6429 24.3643 16.8329 25.4767 13.9402 25.4767C10.5515 25.4767 7.52107 24.0116 5.42729 21.6783L11.4056 12.2364V16.6047C11.4056 18.6938 12.2321 19.3721 12.9208 19.562C13.6096 19.7519 14.6564 19.6163 15.786 17.8527L19.0644 12.6163C19.1746 12.4535 19.2572 12.2907 19.3674 12.1822V14.8411C19.3674 16.7946 20.1664 18.3682 21.5439 19.1279C22.7836 19.8333 24.3539 19.7519 25.6488 18.9651C27.2467 17.9341 28.1007 16.1434 27.9905 14Z"
        })
    });
}


/***/ }),

/***/ 20569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CoingeckoIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



function CoingeckoIcon({ className , viewBoxHeight =28 , viewBoxWidth =28  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        viewBoxWidth: viewBoxWidth,
        viewBoxHeight: viewBoxHeight,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M13.9279 3.73972e-05C8.27788 0.0353277 3.17522 3.45848 1.03881 8.69909C-1.09759 13.9397 0.120688 19.9567 4.14632 23.9445C8.17194 27.9323 14.1927 29.0969 19.419 26.9089C24.6452 24.7209 28.0176 19.6038 27.9999 13.9397C27.9646 6.21113 21.679 -0.0176077 13.9279 3.73972e-05ZM13.1157 13.128C12.1799 13.5162 11.1029 13.3045 10.379 12.581C9.65507 11.8576 9.4432 10.7812 9.83163 9.84602C10.2201 8.91083 11.1382 8.29325 12.1446 8.29325C12.8155 8.29325 13.4512 8.55793 13.9102 9.0167C14.4046 9.51077 14.6695 10.146 14.6695 10.8165C14.6695 11.8223 14.0515 12.7398 13.1157 13.128ZM14.2104 16.0042C14.9166 16.463 15.7465 16.6218 16.5587 16.657C17.3885 16.6747 18.2184 16.6218 19.0305 16.463C19.8427 16.2865 20.6549 16.0395 21.4318 15.7219C22.1592 15.4237 22.8726 15.0778 23.5117 14.5996C23.5488 14.5679 23.5859 14.5361 23.6212 14.5043H23.6388C23.5965 14.5379 23.5541 14.5679 23.5117 14.5996C22.9008 15.1325 22.2016 15.5313 21.4848 15.8807C20.7079 16.2512 19.9134 16.5335 19.0835 16.7629C18.2537 16.9747 17.3885 17.1335 16.5234 17.0629C15.6405 16.9923 14.7577 16.6923 14.1751 16.0395L14.2104 16.0042ZM21.1316 12.7575C21.4318 12.7751 21.679 13.0045 21.679 13.3045C21.679 13.7809 21.0963 14.0279 20.7609 13.6927C20.4254 13.3574 20.6549 12.7751 21.1316 12.7575ZM19.0129 25.9384C18.1248 26.3107 17.2137 26.5771 16.2921 26.743C16.2921 26.7395 16.2921 26.736 16.2921 26.7342C16.2921 26.7342 16.2921 26.7342 16.2938 26.7342C16.2938 26.7342 16.2938 26.7307 16.2903 26.7271C15.7606 22.9422 19.0694 19.2491 20.9198 17.3646C21.3523 16.9217 22.0109 16.3271 22.6218 15.6989C25.0443 13.4333 25.521 10.723 20.5666 9.37137C19.6309 9.10669 18.6598 8.7185 17.671 8.33031C17.618 8.08328 17.3885 7.78331 16.9471 7.39512C16.3115 6.83047 15.0932 6.84812 14.0515 7.09515C12.9038 6.83047 11.7562 6.7246 10.6615 6.98928C5.72302 8.35148 5.05208 10.7883 4.88965 13.7156C4.64599 16.6412 4.48355 18.8521 3.35178 21.3701C3.36238 21.3877 3.37474 21.4054 3.3871 21.423C0.894032 17.8604 0.330798 13.2304 2.00991 9.12257C3.98741 4.27016 8.70163 1.11168 13.9279 1.07639C21.0963 1.0411 26.9229 6.79342 26.9582 13.9397C26.9759 19.1803 23.8507 23.9092 19.0129 25.9384Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.1447 9.05225C11.4384 9.05225 10.7851 9.49337 10.5203 10.1462C10.2554 10.8168 10.3967 11.5579 10.9087 12.0696C11.4207 12.5813 12.18 12.7224 12.8332 12.4578C13.5042 12.1931 13.9279 11.5402 13.9279 10.8344C13.9279 9.86392 13.1334 9.06989 12.1447 9.05225Z"
            })
        ]
    });
}


/***/ }),

/***/ 76422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InstagramIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



function InstagramIcon({ className , isDarkTheme  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        viewBoxWidth: 28,
        viewBoxHeight: 28,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                width: "28",
                height: "28",
                rx: "5",
                fill: isDarkTheme ? "white" : "black"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M19.3 7.69971C18.7 7.69971 18.1 8.19971 18.1 8.89971C18.1 9.59971 18.6 10.0997 19.3 10.0997C20 10.0997 20.5 9.59971 20.5 8.89971C20.4 8.19971 19.9 7.69971 19.3 7.69971Z",
                fill: isDarkTheme ? "black" : "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M14 9.2002C11.3 9.2002 9.09998 11.4002 9.09998 14.1002C9.09998 16.8002 11.3 19.0002 14 19.0002C16.7 19.0002 18.9 16.8002 18.9 14.1002C19 11.4002 16.8 9.2002 14 9.2002ZM14 17.3002C12.3 17.3002 10.8 15.9002 10.8 14.1002C10.8 12.4002 12.2 10.9002 14 10.9002C15.7 10.9002 17.2 12.3002 17.2 14.1002C17.2 15.9002 15.8 17.3002 14 17.3002Z",
                fill: isDarkTheme ? "black" : "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M18 4H10C6.7 4 4 6.7 4 10V18C4 21.3 6.7 24 10 24H18C21.3 24 24 21.3 24 18V10C24 6.7 21.3 4 18 4ZM22.1 18C22.1 20.3 20.2 22.1 18 22.1H10C7.7 22.1 5.9 20.2 5.9 18V10C5.9 7.7 7.8 5.9 10 5.9H18C20.3 5.9 22.1 7.8 22.1 10V18Z",
                fill: isDarkTheme ? "black" : "white"
            })
        ]
    });
}


/***/ }),

/***/ 93996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85277);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_1__]);
_hooks_common__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ShareIcon = ({ className  })=>{
    const { theme  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    if (theme === "dark") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            className: className,
            viewBoxWidth: 24,
            viewBoxHeight: 25,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M18 8.5C19.6569 8.5 21 7.15685 21 5.5C21 3.84315 19.6569 2.5 18 2.5C16.3431 2.5 15 3.84315 15 5.5C15 7.15685 16.3431 8.5 18 8.5Z",
                    stroke: "white",
                    strokeOpacity: "0.9",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M6 15.5C7.65685 15.5 9 14.1569 9 12.5C9 10.8431 7.65685 9.5 6 9.5C4.34315 9.5 3 10.8431 3 12.5C3 14.1569 4.34315 15.5 6 15.5Z",
                    stroke: "white",
                    strokeOpacity: "0.9",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M18 22.5C19.6569 22.5 21 21.1569 21 19.5C21 17.8431 19.6569 16.5 18 16.5C16.3431 16.5 15 17.8431 15 19.5C15 21.1569 16.3431 22.5 18 22.5Z",
                    stroke: "white",
                    strokeOpacity: "0.9",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M8.59009 14.0098L15.4201 17.9898",
                    stroke: "white",
                    strokeOpacity: "0.9",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M15.4101 7.00977L8.59009 10.9898",
                    stroke: "white",
                    strokeOpacity: "0.9",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        viewBoxWidth: 24,
        viewBoxHeight: 25,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M18 8.5C19.6569 8.5 21 7.15685 21 5.5C21 3.84315 19.6569 2.5 18 2.5C16.3431 2.5 15 3.84315 15 5.5C15 7.15685 16.3431 8.5 18 8.5Z",
                stroke: "black",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M6 15.5C7.65685 15.5 9 14.1569 9 12.5C9 10.8431 7.65685 9.5 6 9.5C4.34315 9.5 3 10.8431 3 12.5C3 14.1569 4.34315 15.5 6 15.5Z",
                stroke: "black",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M18 22.5C19.6569 22.5 21 21.1569 21 19.5C21 17.8431 19.6569 16.5 18 16.5C16.3431 16.5 15 17.8431 15 19.5C15 21.1569 16.3431 22.5 18 22.5Z",
                stroke: "black",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8.59009 14.0098L15.4201 17.9898",
                stroke: "black",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M15.4101 7.00977L8.59009 10.9898",
                stroke: "black",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareIcon);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ SnsTelegramIconV2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



const SnsTelegramIconV2 = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBoxHeight: 23,
        viewBoxWidth: 37,
        className: className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M2.61526 21.5213C2.24659 21.5213 1.90359 21.4583 1.58626 21.3323C1.27359 21.2017 0.998258 21.0197 0.760258 20.7863C0.526925 20.553 0.344925 20.2823 0.214258 19.9743C0.0835915 19.6617 0.0182581 19.3257 0.0182581 18.9663C0.0182581 18.607 0.0835915 18.2733 0.214258 17.9653C0.344925 17.6527 0.526925 17.382 0.760258 17.1533C0.993592 16.9247 1.26659 16.7473 1.57926 16.6213C1.89659 16.4907 2.23959 16.4253 2.60826 16.4253C3.00026 16.4253 3.34792 16.4883 3.65126 16.6143C3.95926 16.7403 4.22759 16.913 4.45626 17.1323L3.72126 17.8743C3.59059 17.7343 3.43193 17.6247 3.24526 17.5453C3.06326 17.466 2.85092 17.4263 2.60826 17.4263C2.39359 17.4263 2.19526 17.4637 2.01326 17.5383C1.83592 17.6083 1.68192 17.711 1.55126 17.8463C1.42526 17.9817 1.32492 18.145 1.25026 18.3363C1.18026 18.5277 1.14526 18.7377 1.14526 18.9663C1.14526 19.1997 1.18026 19.412 1.25026 19.6033C1.32492 19.7947 1.42526 19.958 1.55126 20.0933C1.68192 20.2287 1.83592 20.3337 2.01326 20.4083C2.19526 20.483 2.39359 20.5203 2.60826 20.5203C2.86026 20.5203 3.07959 20.4807 3.26626 20.4013C3.45292 20.322 3.61392 20.2123 3.74926 20.0723L4.49126 20.8143C4.25326 21.0337 3.98026 21.2063 3.67226 21.3323C3.36892 21.4583 3.01659 21.5213 2.61526 21.5213ZM7.24543 21.4443V19.5053C7.24543 19.328 7.18943 19.1857 7.07743 19.0783C6.9701 18.9663 6.83243 18.9103 6.66443 18.9103C6.54776 18.9103 6.4451 18.936 6.35643 18.9873C6.26776 19.034 6.19776 19.104 6.14643 19.1973C6.0951 19.286 6.06943 19.3887 6.06943 19.5053L5.65643 19.3023C5.65643 19.0363 5.71243 18.803 5.82443 18.6023C5.93643 18.4017 6.09276 18.2477 6.29343 18.1403C6.4941 18.0283 6.7251 17.9723 6.98643 17.9723C7.25243 17.9723 7.48576 18.0283 7.68643 18.1403C7.8871 18.2477 8.0411 18.3993 8.14843 18.5953C8.26043 18.7867 8.31643 19.0107 8.31643 19.2673V21.4443H7.24543ZM4.99843 21.4443V16.3623H6.06943V21.4443H4.99843ZM10.4253 21.5143C10.1126 21.5143 9.83262 21.4373 9.58529 21.2833C9.34262 21.1293 9.14896 20.9193 9.00429 20.6533C8.86429 20.3873 8.79429 20.084 8.79429 19.7433C8.79429 19.4027 8.86429 19.0993 9.00429 18.8333C9.14896 18.5673 9.34262 18.3573 9.58529 18.2033C9.83262 18.0493 10.1126 17.9723 10.4253 17.9723C10.654 17.9723 10.8593 18.0167 11.0413 18.1053C11.228 18.194 11.3796 18.3177 11.4963 18.4763C11.613 18.6303 11.6783 18.8077 11.6923 19.0083V20.4783C11.6783 20.679 11.613 20.8587 11.4963 21.0173C11.3843 21.1713 11.235 21.2927 11.0483 21.3813C10.8616 21.47 10.654 21.5143 10.4253 21.5143ZM10.6423 20.5483C10.871 20.5483 11.0553 20.4737 11.1953 20.3243C11.3353 20.1703 11.4053 19.9767 11.4053 19.7433C11.4053 19.5847 11.3726 19.4447 11.3073 19.3233C11.2466 19.202 11.158 19.1087 11.0413 19.0433C10.9293 18.9733 10.7986 18.9383 10.6493 18.9383C10.5 18.9383 10.367 18.9733 10.2503 19.0433C10.1383 19.1087 10.0473 19.202 9.97729 19.3233C9.91196 19.4447 9.87929 19.5847 9.87929 19.7433C9.87929 19.8973 9.91196 20.035 9.97729 20.1563C10.0426 20.2777 10.1336 20.3733 10.2503 20.4433C10.367 20.5133 10.4976 20.5483 10.6423 20.5483ZM11.3633 21.4443V20.5273L11.5243 19.7013L11.3633 18.8753V18.0423H12.4133V21.4443H11.3633ZM13.6504 21.4443V16.6353H14.7214V21.4443H13.6504ZM12.8804 18.9523V18.0423H15.4914V18.9523H12.8804Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M13.0265 9.96935L27.7176 3.4398C29.1679 2.75991 34.0858 0.582782 34.0858 0.582782C34.0858 0.582782 36.3553 -0.369251 36.1663 1.94349C36.1031 2.89552 35.5985 6.22856 35.0949 9.83374L33.5188 20.5127C33.5188 20.5127 33.3931 22.0773 32.3208 22.3495C31.2493 22.6216 29.4835 21.3974 29.1679 21.1253C28.9157 20.9214 24.4391 17.8605 22.7998 16.3642C22.3585 15.9565 21.854 15.14 22.863 14.188C25.1326 11.9435 27.8442 9.15477 29.4835 7.38631C30.2403 6.56989 30.9971 4.66582 27.8442 6.97856L18.9542 13.4408C18.9542 13.4408 17.9452 14.1207 16.0536 13.509C14.1621 12.8974 11.955 12.081 11.955 12.081C11.955 12.081 10.4414 11.0607 13.0265 9.97212V9.96935Z"
            })
        ]
    });
};


/***/ }),

/***/ 76461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ TelegramIconV3)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



const TelegramIconV3 = ({ className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        viewBoxHeight: 23,
        viewBoxWidth: 27,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M2.2442 10.192L17.1743 3.66246C18.6481 2.98257 23.646 0.805439 23.646 0.805439C23.646 0.805439 25.9524 -0.146595 25.7603 2.16614C25.696 3.11818 25.1833 6.45122 24.6714 10.0564L23.0698 20.7354C23.0698 20.7354 22.9421 22.3 21.8523 22.5721C20.7634 22.8443 18.9688 21.6201 18.6481 21.3479C18.3918 21.1441 13.8424 18.0832 12.1764 16.5869C11.728 16.1791 11.2153 15.3627 12.2407 14.4107C14.5472 12.1662 17.3029 9.37743 18.9688 7.60897C19.7379 6.79255 20.507 4.88848 17.3029 7.20122L8.26836 13.6634C8.26836 13.6634 7.2429 14.3433 5.32059 13.7317C3.39828 13.1201 1.15529 12.3036 1.15529 12.3036C1.15529 12.3036 -0.382904 11.2833 2.2442 10.1948V10.192Z"
        })
    });
};


/***/ }),

/***/ 56739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WhitePaperIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



function WhitePaperIcon({ className , viewBoxHeight =24 , viewBoxWidth =33  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        viewBoxWidth: viewBoxWidth,
        viewBoxHeight: viewBoxHeight,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M14.8525 19.5476C14.9794 19.5477 15.1051 19.5726 15.2223 19.6206C15.3395 19.6687 15.4459 19.7391 15.5356 19.8277C15.6252 19.9164 15.6963 20.0216 15.7447 20.1373C15.7931 20.253 15.8179 20.377 15.8177 20.5022C15.8175 20.6274 15.7924 20.7513 15.7436 20.8669C15.6949 20.9825 15.6235 21.0874 15.5336 21.1758C15.4437 21.2642 15.3371 21.3343 15.2197 21.382C15.1024 21.4298 14.9767 21.4543 14.8497 21.4541C14.5933 21.4537 14.3476 21.3529 14.1666 21.1739C13.9856 20.9949 13.8841 20.7523 13.8844 20.4995C13.8848 20.2466 13.987 20.0043 14.1685 19.8258C14.3501 19.6473 14.5961 19.5472 14.8525 19.5476ZM30.0107 13.6531C29.8838 13.653 29.7581 13.6283 29.6408 13.5803C29.5236 13.5323 29.4171 13.462 29.3274 13.3734C29.2377 13.2849 29.1666 13.1797 29.1181 13.064C29.0696 12.9483 29.0447 12.8244 29.0448 12.6992C29.0448 12.574 29.0699 12.4501 29.1186 12.3344C29.1673 12.2188 29.2385 12.1138 29.3284 12.0253C29.4182 11.9369 29.5248 11.8667 29.6421 11.8189C29.7594 11.7711 29.8851 11.7465 30.0121 11.7466C30.2684 11.7468 30.5142 11.8474 30.6954 12.0263C30.8765 12.2052 30.9782 12.4477 30.978 12.7005C30.9778 12.9534 30.8758 13.1958 30.6944 13.3744C30.513 13.553 30.2671 13.6533 30.0107 13.6531ZM30.0107 9.75332C29.2181 9.75404 28.4582 10.0648 27.8978 10.6175C27.3373 11.1702 27.0221 11.9196 27.0214 12.7012C27.0214 13.0172 27.075 13.3318 27.1795 13.6382L17.3055 18.8221C17.0317 18.4301 16.6654 18.1096 16.238 17.8882C15.8107 17.6669 15.3352 17.5514 14.8525 17.5516C13.7126 17.5516 12.6744 18.1957 12.1712 19.2004L3.3009 14.5874C2.36313 14.102 1.66187 12.5805 1.73612 11.1947C1.77462 10.472 2.02763 9.91061 2.41401 9.69366C2.65876 9.55806 2.95302 9.56891 3.26652 9.73027L3.32427 9.76146C5.67556 10.9818 13.3674 14.9779 13.6919 15.1257C14.1911 15.3549 14.4688 15.4471 15.3213 15.0484L31.2221 6.89356C31.4559 6.80677 31.7281 6.58575 31.7281 6.25082C31.7281 5.78708 31.2413 5.60402 31.24 5.60402C30.3352 5.17689 28.9451 4.53551 27.5893 3.90904C24.6907 2.57069 21.4058 1.0547 19.9634 0.308915C18.7176 -0.33382 17.7153 0.208572 17.5365 0.317051L17.19 0.486548C10.6971 3.65276 2.007 7.89698 1.512 8.19394C0.627856 8.72549 0.0792225 9.78451 0.00772131 11.0985C-0.10228 13.1826 0.974362 15.3562 2.51576 16.1522L11.8962 20.9225C11.9995 21.6233 12.355 22.2639 12.8978 22.7275C13.4406 23.1911 14.1344 23.4466 14.8525 23.4474C15.6367 23.4461 16.3891 23.1413 16.9478 22.5987C17.5066 22.056 17.8271 21.3188 17.8404 20.5456L28.1723 15.0227C28.6948 15.4267 29.3452 15.6478 30.0107 15.6478C30.8033 15.647 31.5632 15.3362 32.1236 14.7836C32.6841 14.2309 32.9993 13.4815 33 12.6999C32.9993 11.9183 32.6841 11.1689 32.1236 10.6162C31.5632 10.0635 30.8033 9.75268 30.0107 9.75196"
        })
    });
}


/***/ }),

/***/ 35676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ YoutubeIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



const YoutubeIcon = ({ className , isDarkTheme  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBoxHeight: 19,
        viewBoxWidth: 28,
        className: className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M26.5776 2.97294C26.2647 1.81059 25.3482 0.894118 24.1859 0.581176C22.0624 0 13.5682 0 13.5682 0C13.5682 0 5.07412 0 2.95059 0.558824C1.81059 0.871765 0.871765 1.81059 0.558824 2.97294C0 5.09647 0 9.5 0 9.5C0 9.5 0 13.9259 0.558824 16.0271C0.871765 17.1894 1.78824 18.1059 2.95059 18.4188C5.09647 19 13.5682 19 13.5682 19C13.5682 19 22.0624 19 24.1859 18.4412C25.3482 18.1282 26.2647 17.2118 26.5776 16.0494C27.1365 13.9259 27.1365 9.52235 27.1365 9.52235C27.1365 9.52235 27.1588 5.09647 26.5776 2.97294Z",
                fill: isDarkTheme ? "white" : "black"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M10.8635 5.43164V13.5681L17.9271 9.49988L10.8635 5.43164Z",
                fill: isDarkTheme ? "black" : "white"
            })
        ]
    });
};


/***/ }),

/***/ 36414:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57636);
/* harmony import */ var _app_components_LinkTreeComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7005);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__, _app_components_LinkTreeComponent__WEBPACK_IMPORTED_MODULE_2__]);
([_app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__, _app_components_LinkTreeComponent__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const LinkTree = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: "Link Tree",
        description: "Link Tree",
        bHeaderAlwaysOnTop: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full text-center dark:text-[#d72e33] h-full flex items-center justify-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_LinkTreeComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkTree);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,5152,5277,8733,4969,5764,7636,8049,2248], () => (__webpack_exec__(36414)));
module.exports = __webpack_exports__;

})();