"use strict";
(() => {
var exports = {};
exports.id = 6793;
exports.ids = [6793];
exports.modules = {

/***/ 19610:
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
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14613);
/* harmony import */ var _features_route_routeSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48172);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85277);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73732);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60088);
/* harmony import */ var _commons_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4683);
/* harmony import */ var _commons_StayInformed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7043);
/* harmony import */ var _services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(48728);
/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37674);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(53450);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5178);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_7__, _utils_common__WEBPACK_IMPORTED_MODULE_8__, _commons_Footer__WEBPACK_IMPORTED_MODULE_10__, _commons_StayInformed__WEBPACK_IMPORTED_MODULE_11__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_7__, _utils_common__WEBPACK_IMPORTED_MODULE_8__, _commons_Footer__WEBPACK_IMPORTED_MODULE_10__, _commons_StayInformed__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const EnjoyAndEarnComponent = ()=>{
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).state;
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .TL)();
    const { myProfile: { userProfile  } ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .CG)((state)=>state.profile);
    const [authRelationUuid] = _services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_12__/* ["default"].useLazyAuthRealtionUuidQuery */ .Z.useLazyAuthRealtionUuidQuery();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { relation_uuid  } = router.query;
    const listItems = [
        {
            image: "/images/enjoyandearn/Hat.png",
            title: "0235S",
            priceAmount: "80",
            priceToken: "1",
            bonus: "+2 Memory",
            name: "Hat",
            description: "Depending on the type of hat, it increases the Memory stat by the set stat associated with the particular hat."
        },
        {
            image: "/images/enjoyandearn/Glasses.png",
            title: "167S",
            priceAmount: "70",
            priceToken: "1",
            bonus: "+1 Focus",
            name: "Glasses",
            description: "Depending on the type of glasses, it increases the Focus stat by the set stat associated with the particular glasses."
        },
        {
            image: "/images/enjoyandearn/Medicine.png",
            title: "16728",
            priceAmount: "10",
            priceToken: "1",
            bonus: "+2 Endurance",
            name: "Medicine",
            description: "Depending on the type of medicine, it increases the Endurance stat by the set stat associated with the particular medicine."
        },
        {
            image: "/images/enjoyandearn/Ring.png",
            title: "139496S",
            priceAmount: "1000",
            priceToken: "1",
            bonus: "+2 Luck",
            name: "Ring",
            description: "Depending on the type of ring, it increases the Luck stat by the set stat associated with the particular ring."
        }, 
    ];
    const listBadges = [
        {
            image: "/images/enjoyandearn/badges-1.png",
            title: "Badge A",
            priceAmount: "10",
            priceToken: "1",
            benefit: "20% Bonus Daily earning",
            name: "Daily earning",
            description: "A feature that increases the maximum earning amount per day by the amount of the specified badge."
        },
        {
            image: "/images/enjoyandearn/badges-2.png",
            title: "Badge A",
            priceAmount: "10",
            priceToken: "1",
            benefit: "20% Bonus Episodes limit",
            name: "Episodes limit",
            description: "A function that increases the maximum number of episodes that can be received per day by the amount of the specified badge."
        }, 
    ];
    const handleRedirectToEnjoyAndEarn = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        const enjoyPage = "/enjoy-and-earn";
        dispatch(_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_6__/* .routeActions.setRoute */ .WU.setRoute(enjoyPage));
        router.push(enjoyPage);
    }, [
        dispatch,
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        (async ()=>{
            if (relation_uuid) {
                const data = await authRelationUuid(relation_uuid);
                localStorage.setItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.token */ .d.token, data.data?.data.accessToken);
                dispatch(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_15__/* .authActions.setToken */ .Y.setToken(data.data?.data.accessToken));
            }
        })();
    }, [
        relation_uuid,
        authRelationUuid,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (userProfile?.syncStatus === "pending" && userProfile?.userToomics?.directionFrom === "toomics") {
            dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_14__/* .modalSliceActions.addToQueue */ .E.addToQueue({
                type: "popup/sync-sns"
            }));
        }
    }, [
        dispatch,
        userProfile?.syncStatus,
        userProfile?.userToomics?.directionFrom
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-characterMB lg:bg-Character 5xl:bg-Character1 bg-cover bg-no-repeat pb-[100px] 2xl:pb-[160px] px-[20px] lg:px-[5%] pt-[60px] 2xl:pt-[150px] 2xl:px-[150px] max-h-[1263px] 2xl:max-h-[842px]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex 5xl:justify-center 5xl:gap-[210px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full lg:w-[50%] 2xl:w-[36%] 5xl:w-[30%] text-left",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-[#EE312F] text-center lg:text-left",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-[44px] leading-[44px] lg:text-[65px] lg:leading-[65px] font-[900] mb-[40px]",
                                            children: "NFT Character"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-[20px] leading-[26px] lg:text-[28px] lg:leading-[36px] font-[600] mb-[60px] lg:mb-[45px]",
                                            children: "Leveraging popular IPs, Sightn utilizes them to create NFT characters with unique backgrounds."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex lg:hidden flex-wrap gap-[9px] mb-[40px] justify-center",
                                    children: Array(4).fill(0).map((ele, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                backgroundImage: `url(${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/enjoyandearn/card-${index + 1}.png)`
                                            },
                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("bg-cover bg-no-repeat w-[163px] h-[232px]")
                                        }, index))
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "text-[18px] leading-[27px] text-white flex flex-col gap-[20px] list-disc ml-[25px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: "Token rewards are based on the characters’ scarcity, level & abilities"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: "Characters are the essential part of Enjoy and Earn and can be leveled-up, enhanced and minted"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: "Each Character NFT has its own unique background and is interconnected with its webtoon"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z, {
                                    onClick: handleRedirectToEnjoyAndEarn,
                                    className: "uppercase w-full lg:w-[410px] border-[#fff] border-[1px] bg-[#000] text-white !py-[21.5px] mt-[60px] relative text-[18px] leading-[18px]",
                                    children: lang["about/intro-btn"]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hidden 5xl:block w-[380px]"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-EquipmentMobile lg:bg-Equipment bg-cover bg-no-repeat pt-[60px] pb-[100px] lg:pt-[130px] lg:pb-[160px]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-center w-fit mx-auto gap-[43px] lg:gap-[74px] px-[20px] lg:px-[15%] 2xl::px-[26%]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full text-left",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-[#EE312F] text-center lg:text-left",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-[44px] leading-[44px] lg:text-[65px] lg:leading-[65px] font-[900] mb-[40px]",
                                            children: "NFT Items"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-[20px] leading-[26px] lg:text-[28px] lg:leading-[36px] font-[600] mb-[50px] lg:mb-[45px]",
                                            children: "Users can activate specific equipment items to increase their overall attributes."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "text-[18px] leading-[27px] text-white flex flex-col gap-[20px] list-disc ml-[25px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: "There are four item categories: Hat, Glasses, Medicine, and Ring"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: "Wearing items will add raw bonus to the corresponding attributes of Character"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex w-full flex-row justify-center lg:justify-start gap-[9px] lg:gap-[20px] flex-wrap lg:flex-no-wrap",
                            children: listItems.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full lg:w-fit max-w-[163px] lg:max-w-[180px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col border-[1px] border-[#FFF] rounded-[20px] w-full lg:w-fit h-fit",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "relative w-[161px] h-[159px] lg:w-[180px]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        className: "rounded-t-[20px]",
                                                        src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}${item.image}`,
                                                        layout: "fill",
                                                        alt: "avatar"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col gap-[10px] text-[10px] lg:text-[16px] py-[15px] px-[10px] lg:py-[12px] lg:px-[15px] text-white",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "text-left text-[15px] leading-[19px] font-[600]",
                                                            children: [
                                                                "#",
                                                                item.title
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex flex-col gap-[2px]",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "text-[#FFFFFF66] text-[11px] leading-[16px]",
                                                                            children: "Price"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "flex items-center text-[12px] leading-[18px] font-[600]",
                                                                            children: [
                                                                                item.priceAmount,
                                                                                " ",
                                                                                (0,_utils_common__WEBPACK_IMPORTED_MODULE_8__/* .getTokenName */ ._M)(item.priceToken),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "w-4 h-4 ml-1",
                                                                                    children: (0,_utils_common__WEBPACK_IMPORTED_MODULE_8__/* .getTokenIcon */ .YX)(item.priceToken)
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "text-[#FFFFFF66] text-[11px] leading-[16px]",
                                                                            children: "Bonus"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "flex items-center text-[10px] text-[#27AE60] leading-[18px] font-[600]",
                                                                            children: item.bonus
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col gap-[12px] w-full mt-[20px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-white text-[20px] leading-[20px] font-[600]",
                                                    children: item.name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-[#FFFFFF99] text-[12px] leading-[18px]",
                                                    children: item.description
                                                })
                                            ]
                                        })
                                    ]
                                }, item.name))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-start w-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z, {
                                onClick: handleRedirectToEnjoyAndEarn,
                                className: "uppercase w-full lg:w-[410px] border-[#fff] border-[1px] bg-[#000] text-white !py-[21.5px] mt-[17px] lg:mt-[-14px] relative text-[18px] leading-[18px]",
                                children: lang["about/intro-btn"]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-[#000] pt-[60px] pb-[100px] px-[20px] lg:px-[5%] 2xl:pt-[130px] 2xl:px-[160px] 2xl:pb-[160px]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col lg:flex-row justify-between 2xl:justify-center 2xl:gap-[121px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full lg:w-[50%] 2xl:w-[36%] text-left",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-[#EE312F] text-center lg:text-left",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-[44px] leading-[44px] lg:text-[65px] lg:leading-[65px] font-[900] mb-[40px]",
                                            children: "NFT Badge"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-[20px] leading-[26px] lg:text-[28px] lg:leading-[36px] font-[600] mb-[60px] lg:mb-[45px]",
                                            children: "Flickrz users can enhance their potential earnings by applying badges to their accounts that boost different factors in the E&E."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "text-[18px] leading-[27px] text-white flex flex-col gap-[20px] list-disc ml-[25px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: "Along with NFT items that boost primary stats, there are badges that can be earned by completing certain tasks in the Enjoy and Earn mechanism."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: "By earning the badges, you will be able to equip them and boost your earning capabilities."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z, {
                                    onClick: handleRedirectToEnjoyAndEarn,
                                    className: "hidden lg:block uppercase w-full lg:w-[410px] border-[#fff] border-[1px] bg-[#000] text-white !py-[21.5px] mt-[60px] relative text-[18px] leading-[18px]",
                                    children: lang["about/intro-btn"]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-[40px] lg:mt-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex gap-[10px] lg:gap-[20px] justify-center",
                                    children: listBadges.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full max-w-[163px] lg:w-fit lg:max-w-[180px]",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col border-[1px] border-[#FFF] rounded-[20px] w-fit h-fit",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "relative w-[161px] h-[162px] lg:w-[179px]",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                className: "rounded-t-[20px]",
                                                                src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}${item.image}`,
                                                                layout: "fill",
                                                                alt: "avatar"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex flex-col gap-[10px] text-[10px] lg:text-[16px] py-[15px] px-[10px] lg:py-[12px] lg:px-[15px] text-white",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "text-left text-[15px] leading-[19px] font-[600]",
                                                                    children: item.title
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex flex-col gap-[2px]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "flex justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "text-[#FFFFFF66] text-[11px] leading-[16px]",
                                                                                    children: "Price"
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "flex items-center text-[12px] leading-[18px] font-[600]",
                                                                                    children: [
                                                                                        item.priceAmount,
                                                                                        " ",
                                                                                        (0,_utils_common__WEBPACK_IMPORTED_MODULE_8__/* .getTokenName */ ._M)(item.priceToken),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            className: "w-4 h-4 ml-1",
                                                                                            children: (0,_utils_common__WEBPACK_IMPORTED_MODULE_8__/* .getTokenIcon */ .YX)(item.priceToken)
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "flex justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "text-[#FFFFFF66] text-[11px] leading-[16px] flex-1 text-left",
                                                                                    children: "Benefit"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "flex items-center text-[10px] leading-[18px] font-[600] flex-1 text-right",
                                                                                    children: item.benefit
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col gap-[12px] w-full mt-[20px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text-white text-[20px] leading-[20px] font-[600]",
                                                            children: item.name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text-[#FFFFFF99] text-[12px] leading-[18px]",
                                                            children: item.description
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, item.name))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z, {
                                    onClick: handleRedirectToEnjoyAndEarn,
                                    className: "block lg:hidden uppercase w-full lg:w-[410px] border-[#fff] border-[1px] bg-[#000] text-white !py-[21.5px] mt-[60px] relative text-[18px] leading-[18px]",
                                    children: lang["about/intro-btn"]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_StayInformed__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_Footer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnjoyAndEarnComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45943:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_EnjoyAndEarn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19610);
/* harmony import */ var _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57636);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_components_EnjoyAndEarn__WEBPACK_IMPORTED_MODULE_1__, _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__]);
([_app_components_EnjoyAndEarn__WEBPACK_IMPORTED_MODULE_1__, _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const EnjoyAndEarn = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: "Enjoy and Earn",
        description: "Enjoy and Earn",
        bHeaderAlwaysOnTop: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full text-center dark:text-[#d72e33] h-full flex items-center justify-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_EnjoyAndEarn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnjoyAndEarn);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,5152,5277,8733,4969,5764,7636,8049,2248,88], () => (__webpack_exec__(45943)));
module.exports = __webpack_exports__;

})();