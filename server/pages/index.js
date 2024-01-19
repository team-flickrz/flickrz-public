"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 57182:
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
/* harmony import */ var _features_route_routeSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48172);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useBgImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98976);
/* harmony import */ var _hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6483);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60088);
/* harmony import */ var _commons_DefaultLayoutTitleComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(35475);
/* harmony import */ var _commons_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4683);
/* harmony import */ var _commons_ItemWithBgImageComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(50175);
/* harmony import */ var _commons_SocialNew__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(96521);
/* harmony import */ var _commons_StayInformed__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7043);
/* harmony import */ var _icons_FlickrzWhiteLogo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(82931);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(73732);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_8__, _commons_Footer__WEBPACK_IMPORTED_MODULE_13__, _commons_SocialNew__WEBPACK_IMPORTED_MODULE_15__, _commons_StayInformed__WEBPACK_IMPORTED_MODULE_16__, _utils_common__WEBPACK_IMPORTED_MODULE_18__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_8__, _commons_Footer__WEBPACK_IMPORTED_MODULE_13__, _commons_SocialNew__WEBPACK_IMPORTED_MODULE_15__, _commons_StayInformed__WEBPACK_IMPORTED_MODULE_16__, _utils_common__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const About = ()=>{
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).state;
    const listEntertainment = [
        "Webtoons",
        "Musics",
        "Web novels",
        "Animations"
    ];
    const listEducation = [
        "E-book",
        " Audio books",
        "Interactive contents",
        "Educational video"
    ];
    const listDigital = [
        "Digital streaming contents",
        "Self creation contents"
    ];
    const listEnjoyAndEarnStep = [
        "Mint & TradeNFTs",
        "Enjoy Digital Content",
        "Earn Tokens"
    ];
    const listRoadMap = [
        {
            year: "2023",
            data: [
                {
                    title: "1Q",
                    value: [
                        {
                            key: "BIZ",
                            name: "NFT Genesis Minting"
                        },
                        {
                            key: "DEV",
                            name: "Swap Development"
                        }, 
                    ]
                },
                {
                    title: "2Q",
                    value: [
                        {
                            key: "BIZ",
                            name: "Whitepaper 1.0 Release"
                        },
                        {
                            key: "BIZ",
                            name: "Beta service Launching"
                        },
                        {
                            key: "DEV",
                            name: "Wallet Development"
                        }, 
                    ]
                },
                {
                    title: "3Q",
                    value: [
                        {
                            key: "BIZ",
                            name: "Global Partnership"
                        },
                        {
                            key: "DEV",
                            name: "Treasury Pool Development"
                        }, 
                    ]
                },
                {
                    title: "4Q",
                    value: [
                        {
                            key: "BIZ",
                            name: "Market Adoption"
                        },
                        {
                            key: "DEV",
                            name: "Staking Development"
                        }, 
                    ]
                }, 
            ]
        },
        {
            year: "2024",
            data: [
                {
                    title: "1H",
                    value: [
                        {
                            key: "BIZ",
                            name: "Multichain Expansion"
                        },
                        {
                            key: "DEV",
                            name: "Bridge Development"
                        }, 
                    ]
                },
                {
                    title: "2H",
                    value: [
                        {
                            key: "BIZ",
                            name: "Service Provider Onboarding"
                        },
                        {
                            key: "DEV",
                            name: "System Upgrade(UI, UX, etc)"
                        }, 
                    ]
                }, 
            ]
        },
        {
            year: "2025",
            data: [
                {
                    title: "1H",
                    value: [
                        {
                            key: "BIZ",
                            name: "NFT Edition Launching"
                        },
                        {
                            key: "DEV",
                            name: "DAO Development"
                        }, 
                    ]
                },
                {
                    title: "2H",
                    value: [
                        {
                            key: "BIZ",
                            name: "Global Promotion"
                        },
                        {
                            key: "DEV",
                            name: "App(Android, IOS) Developement"
                        }, 
                    ]
                }, 
            ]
        }, 
    ];
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
    const refEntertainment = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const [isMobile] = (0,_hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_10__/* .useWindowResizeMobile */ .c)(1024);
    const [heightRoadmap] = (0,_hooks_useBgImage__WEBPACK_IMPORTED_MODULE_9__/* .useHeightBaseOnWidth */ .s)(1440 / 1074);
    const [heightEntertainment] = (0,_hooks_useBgImage__WEBPACK_IMPORTED_MODULE_9__/* .useHeightBaseOnWidth */ .s)(1, refEntertainment);
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_8__/* .useAppDispatch */ .TL)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const cloudfront = process.env.NEXT_PUBLIC_CLOUDFRONT_URL;
    const renderDescription = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((title)=>{
        switch(title){
            case "EnjoyAndEarn":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-[20px] leading-[26px] lg:text-[28px] lg:leading-[36.4px] font-[600]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "The Enjoy-and-Earn concept allows users to earn rewards"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "while consuming digital content on various platforms. "
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "Flickrz plans to introduce this mechanism across its different models."
                        })
                    ]
                });
        }
    }, []);
    const handleRedirectToEnjoyAndEarn = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        const enjoyPage = _constants_route__WEBPACK_IMPORTED_MODULE_5__/* .ROUTER.ENJOY_AND_EARN */ .Yj.ENJOY_AND_EARN;
        dispatch(_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_7__/* .routeActions.setRoute */ .WU.setRoute(enjoyPage));
        router.push(enjoyPage);
    }, [
        dispatch,
        router
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    backgroundImage: `url(${cloudfront}/images/about/main-theme-about-2.png)`
                },
                className: "w-full bg-cover bg-no-repeat bg-center relative pt-[75px] xl:pt-[175px] pb-[65px] xl:h-[949px] lg:pb-[105px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-center relative w-full xl:w-[1200px] mx-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative w-[80%] xl:w-[1200px] mx-auto min-h-[96px] max-h-[330px] h-[19vw] xl:h-[330px] max-w-[1200px] px-[24px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: `${cloudfront}/images/flickrz-logo.png`,
                                    // width={isMobile ? "333" : "1200"}
                                    // height={isMobile ? "96" : "330"}
                                    layout: "fill",
                                    alt: "eyes"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute right-[23px] top-[-15px] xl:right-0 xl:top-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: `${cloudfront}/images/about/star-icon.png`,
                                    width: isMobile ? 82 : 218,
                                    height: isMobile ? 27 : 71,
                                    alt: "star"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "px-[20px] mt-6 lg:mt-[41px] lg:px-0 relative flex flex-col gap-[42px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-white text-center text-[20px] lg:text-[50px] leading-[24px] lg:leading-[60px] relative z-[1] font-[700]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: lang["about/intro-1"]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: lang["about/intro-2"]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .z, {
                                    onClick: ()=>handleRedirectToEnjoyAndEarn(),
                                    className: "uppercase btn-primary w-[410px] text-white !py-[21px] xl:!py-[26px] relative text-[20px] leading-[20px]",
                                    children: lang["about/intro-btn"]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_SocialNew__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            backgroundImage: `url(${cloudfront}/images/po-play-half.svg)`
                        },
                        className: "absolute w-[153px] h-[135px] bg-cover lg:bg-contain lg:w-[342px] lg:h-[301px] z-[2] bottom-[-85px] lg:bottom-[-185px] right-[5%]"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    backgroundImage: `url(${cloudfront}/images/about/about${isMobile ? "-sm" : ""}.png)`
                },
                className: "w-full bg-cover max-h-[1464px] lg:h-auto relative text-white pt-[96px] lg:pt-[154px] lg:px-[5%] 3xl:px-[160px] pb-[120px] flex flex-col gap-[55px] lg:gap-[258px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "px-[20px] lg:px-0 text-center lg:text-left",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full h-[75px] lg:w-[573px] lg:h-[132px] relative flex justify-center lg:justify-start lg:-ml-[45px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_FlickrzWhiteLogo__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-[15px] lg:mt-[30px] text-[#FFFFFFF2]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "hidden lg:block mb-[20px] lg:text-[30px] lg:leading-[39px] font-[600]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: "Flickrz is a Web 3.0 digital content platform"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: "based on blockchain technology"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "block lg:hidden mb-[20px] text-[20px] leading-[26px] font-[600]",
                                        children: "Flickrz is a Web 3.0 digital content platform based on blockchain technology"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "hidden lg:block text-[18px] leading-[27px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: "The Flickrz platform provides a reward ecosystem"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: "for digital content creators and consumers,"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: "with the goal of building a decentralized digital content market."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "block lg:hidden text-[14px] leading-[21px]",
                                        children: "The Flickrz platform provides a reward ecosystem for digital content creators and consumers, with the goal of building a decentralized digital content market."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mx-[20px] lg:mx-0 text-center lg:text-left",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col items-end justify-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "lg:mt-[60px] text-[#FFFFFFF2] 5xl:pr-[130px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "hidden lg:block mb-[20px] text-[30px] leading-[39px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: "The Flickrz team classifies the broad digital"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: "content market into the following three areas,"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "block lg:hidden text-[20px] leading-[26px] font-[600] mb-[20px]",
                                            children: "The Flickrz team classifies the broad digital content market into the following three areas,"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "hidden lg:block text-[18px] leading-[27px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: "which represent the most suitable service range for the Flickrz platform to be applied."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: "Users can consume the following digital content through the Flickrz platform."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "block lg:hidden text-[14px] leading-[21px]",
                                            children: "which represent the most suitable service range for the Flickrz platform to be applied. Users can consume the following digital content through the Flickrz platform."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "block w-fit lg:w-auto mx-auto lg:mx-0 lg:flex flex-col lg:flex-row lg:gap-[35px] items-center mt-[36px] lg:mt-[60px] justify-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        ref: refEntertainment,
                                        style: {
                                            height: isMobile ? "" : heightEntertainment
                                        },
                                        className: "red-circle-about-mb lg:red-circle-about w-[250px] h-[250px] lg:w-full lg:max-w-[300px] 3xl:max-w-[350px] 3xl:max-h-[350px] flex-1 lg:h-[300px] 3xl:w-[350px] 3xl:h-[350px] flex flex-col text-center gap-[16px] justify-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-[24px] leading-[30px] lg:text-[26px] lg:leading-[32.76px] font-[500]",
                                                children: "Entertainment"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px] text-left list-disc pl-[75px] 3xl:pl-[130px]",
                                                children: listEntertainment.map((entertainment, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: entertainment
                                                    }, index))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_ItemWithBgImageComponent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        bg: `url(${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/Sphere-Black-Matte.svg)`,
                                        percent: 1,
                                        customClass: "max-w-[250px] max-h-[250px] flex-1 lg:max-w-[300px] lg:max-h-[300px] 3xl:max-w-[350px] 3xl:max-h-[350px] flex",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col justify-center text-center gap-[16px] w-full",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-[24px] leading-[30px] lg:text-[26px] lg:leading-[32.76px] font-[500]",
                                                    children: "Education"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px] text-left list-disc pl-[75px] lg:pl-[90px] 3xl:pl-[120px]",
                                                    children: listEducation.map((listEducation, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: listEducation
                                                        }, index))
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_ItemWithBgImageComponent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        bg: `url(${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/Sphere-Black-Matte.svg)`,
                                        percent: 1,
                                        customClass: "max-w-[250px] max-h-[250px] flex items-center justify-center flex-1 lg:max-w-[300px] lg:max-h-[300px] 3xl:max-w-[350px] 3xl:max-h-[350px]",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col text-center gap-[16px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-[24px] leading-[30px] lg:text-[26px] lg:leading-[32.76px] font-[500]",
                                                    children: "Digital Streaming"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px] text-left list-disc pl-[45px] lg:pl-[35px] 3xl:pl-[40px]",
                                                    children: listDigital.map((digital, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: digital
                                                        }, index))
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_DefaultLayoutTitleComponent__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                title: "Enjoy And Earn",
                bg: "bg-[#EE312F]",
                description: renderDescription("EnjoyAndEarn"),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col lg:flex-row justify-around gap-[100px] lg:gap-0 mt-[100px]",
                        children: listEnjoyAndEarnStep.map((ele, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col 2xl:flex-row gap-[12px] items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "rounded-[50%] bg-[#000] w-[60px] h-[60px] 2xl:w-[80px] 2xl:h-[80px] text-center text-white px-[10px] py-[22.5px] 2xl:px-[11.5px] 2xl:py-[28.5px] text-[12px] leading-[15px] 2xl:text-[18px] 2xl:leading-[23px] font-[600]",
                                        children: `STEP ${index + 1}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-[30px] font-[700] leading-[38px] 2xl:w-[50%]",
                                        children: ele
                                    }),
                                    index === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "2xl:hidden rounded-[50%] bg-[#000] w-[335px] h-[335px] lg:w-[300px] lg:h-[300px] 2xl:w-[335px] 2xl:h-[335px] border-[1px] border-[#EE312F] mt-[18px]",
                                        style: {
                                            boxShadow: "0px 0px 100px #3F0100"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                backgroundImage: `url(${cloudfront}/images/about/card-1.png)`
                                            },
                                            className: "bg-cover bg-no-repeat w-[327px] h-[334px] lg:w-[300px] lg:h-[307px] 2xl:w-[327px] 2xl:h-[334px]"
                                        })
                                    }),
                                    index === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "2xl:hidden rounded-[50%] bg-[#000] w-[335px] h-[335px] lg:w-[300px] lg:h-[300px] 2xl:w-[335px] 2xl:h-[335px] border-[1px] border-[#EE312F] mt-[18px]",
                                        style: {
                                            boxShadow: "0px 0px 100px #3F0100"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                backgroundImage: `url(${cloudfront}/images/about/card-2.png)`
                                            },
                                            className: "bg-cover bg-no-repeat w-[319px] h-[389px] lg:w-[300px] lg:h-[370px] 2xl:w-[319px] 2xl:h-[389px]"
                                        })
                                    }),
                                    index === 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "2xl:hidden yellow-circle-about w-[335px] h-[335px] lg:w-[300px] lg:h-[300px] 2xl:w-[335px] 2xl:h-[335px] flex items-center justify-center mt-[18px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                backgroundImage: `url(${cloudfront}/images/token/EP.png)`
                                            },
                                            className: "bg-cover bg-no-repeat w-[180px] h-[170px] lg:w-[160px] lg:h-[150px] 2xl:w-[180px] 2xl:h-[155px]"
                                        })
                                    })
                                ]
                            }, ele))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "hidden 2xl:flex gap-[28px] mt-[60px] justify-around",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "rounded-[50%] bg-[#000] w-[400px] h-[400px] border-[1px] border-[#EE312F]",
                                style: {
                                    boxShadow: "0px 0px 100px #3F0100"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        backgroundImage: `url(${cloudfront}/images/about/card-1.png)`
                                    },
                                    className: "bg-cover bg-no-repeat w-[391px] h-[398px]"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "rounded-[50%] bg-[#000] w-[400px] h-[400px] border-[1px] border-[#EE312F]",
                                style: {
                                    boxShadow: "0px 0px 100px #3F0100"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        backgroundImage: `url(${cloudfront}/images/about/card-2.png)`
                                    },
                                    className: "bg-cover bg-no-repeat w-[410px] h-[516px]"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "yellow-circle-about w-[400px] h-[400px] flex items-center justify-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        backgroundImage: `url(${cloudfront}/images/token/EP.png)`
                                    },
                                    className: "bg-cover bg-no-repeat w-[200px] h-[196px]"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-[45px] lg:mt-[120px] 2xl:mt-[177px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col items-center gap-[30px] justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .z, {
                                onClick: ()=>handleRedirectToEnjoyAndEarn(),
                                className: "uppercase w-[100%] lg:w-[410px] bg-[#000] text-white !py-[26px] relative text-[20px] leading-[20px]",
                                children: lang["about/intro-btn"]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-[#090909] lg:bg-Character bg-contain bg-right bg-no-repeat pb-[100px] 2xl:pb-[160px] px-[20px] lg:px-[120px] 4xl:px-[180px] pt-[60px] 4xl:pt-[132px] max-h-[1263px] 2xl:max-h-[842px] flex justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full lg:w-[50%] 2xl:w-[42%] 5xl:w-[30%] text-left",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-[#EE312F] text-center lg:text-left",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-[44px] leading-[44px] lg:text-[65px] lg:leading-[65px] font-[900] mb-[40px]",
                                        children: "NFT Character"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-[20px] leading-[26px] lg:text-[28px] lg:leading-[36px] font-[600] mb-[30px] lg:mb-[45px]",
                                        children: "Leveraging popular IPs, Flickrz utilizes them to create NFT characters with unique backgrounds."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex lg:hidden items-center justify-center mb-[30px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: `${cloudfront}/images/about/card-character-mb.png`,
                                    width: 380,
                                    height: 552,
                                    alt: "character"
                                })
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .z, {
                                onClick: handleRedirectToEnjoyAndEarn,
                                className: "uppercase w-full lg:w-[410px] border-[#fff] border-[1px] bg-[#000] text-white !py-[21.5px] mt-[60px] relative text-[18px] leading-[18px]",
                                children: lang["about/intro-btn"]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "top-[129px] right-[150px] hidden lg:block",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: `${cloudfront}/images/about/card-character.png`,
                            width: 450,
                            height: 606,
                            alt: "character"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-[#151515] lg:bg-Equipment bg-cover bg-no-repeat pt-[60px] pb-[100px] lg:pt-[130px] lg:pb-[160px]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-center w-fit mx-auto gap-[43px] lg:gap-[74px] px-[20px]",
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
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-[20px] leading-[26px] lg:text-[28px] lg:leading-[36px] font-[600] mb-[50px] lg:mb-[45px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: "Users can activate specific equipment items"
                                                }),
                                                "to increase their overall attributes."
                                            ]
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
                            className: "w-full grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-8 lg:flex lg:flex-row lg:justify-start lg:gap-[20px] lg:flex-no-wrap",
                            children: listItems.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full lg:w-fit max-w-[154px] lg:max-w-[180px] text-center mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col border-[1px] border-[#FFF] rounded-[20px] w-full lg:w-fit h-fit",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "relative w-[153px] h-[159px] lg:w-[180px] lg:h-[165px]",
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
                                                                                (0,_utils_common__WEBPACK_IMPORTED_MODULE_18__/* .getTokenName */ ._M)(item.priceToken),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "w-4 h-4 ml-1",
                                                                                    children: (0,_utils_common__WEBPACK_IMPORTED_MODULE_18__/* .getTokenIcon */ .YX)(item.priceToken)
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
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .z, {
                                onClick: handleRedirectToEnjoyAndEarn,
                                className: "uppercase w-full lg:w-[410px] border-[#fff] border-[1px] bg-transfer text-white !py-[21.5px] mt-[17px] lg:mt-[-14px] relative text-[18px] leading-[18px]",
                                children: lang["about/intro-btn"]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-[#000] pt-[60px] pb-[100px] px-[20px] lg:px-[180px] 2xl:pt-[130px] 2xl:pb-[160px]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col lg:flex-row lg:justify-between ",
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
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .z, {
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
                                    className: "flex gap-[10px] lg:gap-[45px] text-center justify-center",
                                    children: listBadges.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full max-w-[196px] lg:w-fit lg:max-w-[198px]",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col border-[1px] border-[#FFF] rounded-[20px] w-fit h-fit mx-auto",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "relative w-[168px] h-[162px] lg:w-[196px] lg:h-[174px]",
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
                                                                                        (0,_utils_common__WEBPACK_IMPORTED_MODULE_18__/* .getTokenName */ ._M)(item.priceToken),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            className: "w-4 h-4 ml-1",
                                                                                            children: (0,_utils_common__WEBPACK_IMPORTED_MODULE_18__/* .getTokenIcon */ .YX)(item.priceToken)
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
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .z, {
                                    onClick: handleRedirectToEnjoyAndEarn,
                                    className: "block lg:hidden uppercase w-full lg:w-[410px] border-[#fff] border-[1px] bg-[#000] text-white !py-[21.5px] mt-[60px] relative text-[18px] leading-[18px]",
                                    children: lang["about/intro-btn"]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_DefaultLayoutTitleComponent__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                colorTitle: "#EE312F",
                title: "RoadMap",
                bg: isMobile ? "bg-[#000]" : "bg-Roadmap",
                customClass: "bg-cover bg-no-repeat",
                customHeightForBg: !isMobile && heightRoadmap ? heightRoadmap : "",
                children: isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col text-white px-[22.5px] mx-auto w-fit",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col gap-[90.5px]",
                        children: listRoadMap.map((data)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col gap-[30px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-[30px] leading-[30px] font-[600]",
                                        children: data.year
                                    }),
                                    data.data.map((ele)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-[20px] leading-[20px] font-[700] mb-[10px]",
                                                    children: ele.title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex flex-col gap-[7px]",
                                                    children: ele.value.map((val)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex gap-[10px]",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("border-[1px] py-[2px] px-[7.5px] rounded-[999px] w-[42px] text-[14px] leading-[18px]", `border-[${val.key === "DEV" ? "#EE312F" : "#fff"}]`, `text-[${val.key === "DEV" ? "#EE312F" : "#fff"}]`),
                                                                    children: val.key
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "whitespace-nowrap",
                                                                    children: val.name
                                                                })
                                                            ]
                                                        }, val.name))
                                                })
                                            ]
                                        }, ele.title))
                                ]
                            }, data.year))
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_StayInformed__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_Footer__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21082);

const systemApi = _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].injectEndpoints */ .Z.injectEndpoints({
    endpoints: (builder)=>({
            getMainPageAccess: builder.query({
                query: (ref)=>({
                        url: `/system-stats/main-page-access${ref ? `?ref=${ref}` : ""}`
                    })
            }),
            getSettingAccessPage: builder.query({
                query: ()=>({
                        url: "/system-config/access-page"
                    })
            })
        })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (systemApi);


/***/ }),

/***/ 5075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_classes_Storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37674);
/* harmony import */ var _app_components_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57182);
/* harmony import */ var _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57636);
/* harmony import */ var _app_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5178);
/* harmony import */ var _app_features_modal_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53450);
/* harmony import */ var _app_hooks_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85277);
/* harmony import */ var _app_services_query_endpoints_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11303);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_components_About__WEBPACK_IMPORTED_MODULE_4__, _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_5__, _app_hooks_common__WEBPACK_IMPORTED_MODULE_8__]);
([_app_components_About__WEBPACK_IMPORTED_MODULE_4__, _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_5__, _app_hooks_common__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Home = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { ref  } = router.query;
    const dispatch = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_8__/* .useAppDispatch */ .TL)();
    const authState = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_8__/* .useAppSelector */ .CG)((state)=>state.auth);
    const [getPageAccess] = _app_services_query_endpoints_system__WEBPACK_IMPORTED_MODULE_9__/* ["default"].useLazyGetMainPageAccessQuery */ .Z.useLazyGetMainPageAccessQuery();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (authState.bLoggingOut) {
            dispatch(_app_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_6__/* .authActions.logout */ .Y.logout());
        }
    }, [
        authState.bLoggingOut,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (authState.bGreeting) {
            dispatch(_app_features_modal_modal__WEBPACK_IMPORTED_MODULE_7__/* .modalSliceActions.addToQueue */ .E.addToQueue({
                type: "popup/verification-email",
                propsState: {
                    email: authState.email
                }
            }));
            dispatch(_app_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_6__/* .authActions.setGreeting */ .Y.setGreeting(false));
        }
    }, [
        authState.bGreeting,
        authState.email,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!authState.token) {
            const refStorage = localStorage.getItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_3__/* .LOCAL_STORAGE_KEYS.ref */ .d.ref);
            getPageAccess(refStorage ? refStorage : ref ? ref : undefined);
        }
    }, [
        authState.token,
        getPageAccess,
        ref
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        title: "Home",
        description: "Toomic Home Page",
        bHeaderAlwaysOnTop: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_About__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,5152,5277,8733,4969,5764,7636,8049,2248,88,175], () => (__webpack_exec__(5075)));
module.exports = __webpack_exports__;

})();