"use strict";
(() => {
var exports = {};
exports.id = 5056;
exports.ids = [5056];
exports.modules = {

/***/ 3868:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var echarts_for_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67715);
/* harmony import */ var echarts_for_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(echarts_for_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6483);
/* harmony import */ var _commons_DefaultLayoutTitleComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35475);
/* harmony import */ var _commons_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4683);
/* harmony import */ var _commons_ItemWithBgImageComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50175);
/* harmony import */ var _commons_StayInformed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7043);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_commons_Footer__WEBPACK_IMPORTED_MODULE_6__, _commons_StayInformed__WEBPACK_IMPORTED_MODULE_8__]);
([_commons_Footer__WEBPACK_IMPORTED_MODULE_6__, _commons_StayInformed__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const TokenComponent = ()=>{
    const listCheckFlowToken = [
        {
            checkSgt: true,
            checkSrt: true,
            value: "Character Level Up"
        },
        {
            checkSgt: true,
            checkSrt: true,
            value: "Character Breeding"
        },
        {
            checkSgt: true,
            checkSrt: false,
            value: "Equipment Item Upgrade"
        },
        {
            checkSgt: false,
            checkSrt: true,
            value: "Badge Claim"
        }, 
    ];
    const [isMobile] = (0,_hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_4__/* .useWindowResizeMobile */ .c)(1023);
    const [isTwolineChart] = (0,_hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_4__/* .useWindowResizeMobile */ .c)(1280);
    const cloudfront = process.env.NEXT_PUBLIC_CLOUDFRONT_URL;
    const renderDescription = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((title)=>{
        switch(title){
            case "tokenTitle":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-[20px] leading-[26px] 3xl:text-[28px] 3xl:leading-[36.4px] font-[600] w-full lg:w-[50%] mx-auto",
                    children: isMobile ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "FLICKRZ is building a token economy with $FLKZ and $EP."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "FLKZ tokens have limited issuance and have different burning mechanisms from EP tokens."
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "FLICKRZ is building a token economy with"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "$FLKZ and $EP."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "FLKZ tokens have limited issuance and have different burning mechanisms from EP tokens."
                            })
                        ]
                    })
                });
            case "tokenFlow":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-[20px] leading-[26px] 3xl:text-[28px] 3xl:leading-[36.4px] font-[600] w-full lg:w-[50%] mx-auto",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "FLKZ token holders can subscribe to webtoons, stake their tokens, and participate in key governance votes to earn rewards."
                    })
                });
        }
    }, [
        isMobile
    ]);
    const optionChart = {
        legend: {
            icon: "circle",
            textStyle: {
                color: "#ffffff",
                fontSize: 12,
                lineHeight: 12,
                fontFamily: "Outfit"
            }
        },
        tooltip: {
            trigger: "axis",
            showContent: true,
            axisPointer: {
                type: "cross",
                label: {
                    backgroundColor: "#EE312F"
                }
            },
            valueFormatter: (value)=>{
                return value + "%";
            }
        },
        // dataset: {
        //     source: [
        //         [
        //             "Year",
        //             "2023",
        //             "2024",
        //             "2025",
        //             "2026",
        //             "2027",
        //             "2028",
        //             "2029",
        //             "2030",
        //             "2031",
        //             "2032",
        //             "2033",
        //         ],
        //         ["Reserve", 2.22, 5.03, 7.63, 10.23, 12.83, 15, 15, 15, 15, 15, 15],
        //         ["Ecosystem", 0, 2.22, 5.56, 8.89, 10, 10, 10, 10, 10, 10, 10],
        //         ["Marketing", 0.17, 2.33, 4.33, 6.33, 8.33, 10, 10, 10, 10, 10, 10],
        //         ["Investment", 0, 3.33, 8.33, 13.33, 15, 15, 15, 15, 15, 15, 15],
        //         ["Team", 0, 0, 0, 0.42, 2.92, 5, 5, 5, 5, 5, 5],
        //         [
        //             "Community",
        //             0.38,
        //             5.25,
        //             9.75,
        //             14.25,
        //             18.75,
        //             23.25,
        //             27.75,
        //             32.25,
        //             36.75,
        //             41.25,
        //             45,
        //         ],
        //     ],
        // },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                2023,
                2024,
                2025,
                2026,
                2027,
                2028,
                2029,
                2030,
                2031,
                2032,
                2033
            ],
            axisLine: {
                lineStyle: {
                    color: "#961b19"
                }
            },
            axisLabel: {
                color: "#EE312F"
            }
        },
        yAxis: {
            gridIndex: 0,
            axisLabel: {
                formatter: "{value} %"
            },
            axisLine: {
                lineStyle: {
                    color: "#EE312F"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#961b19"
                }
            }
        },
        grid: isTwolineChart ? {
            top: "60%",
            left: "15%",
            right: "5%"
        } : {
            left: "55%"
        },
        series: [
            {
                name: "Investment",
                type: "line",
                stack: "Total",
                // areaStyle: {},
                emphasis: {
                    focus: "series"
                },
                color: [
                    "#DEF163"
                ],
                showSymbol: false,
                data: [
                    0,
                    3.33,
                    8.33,
                    13.33,
                    15,
                    15,
                    15,
                    15,
                    15,
                    15,
                    15
                ]
            },
            {
                name: "Ecosystem",
                type: "line",
                stack: "Total",
                // areaStyle: {},
                emphasis: {
                    focus: "series"
                },
                color: [
                    "#9050E0"
                ],
                showSymbol: false,
                data: [
                    0,
                    2.22,
                    5.56,
                    8.89,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10
                ]
            },
            {
                name: "Team",
                type: "line",
                stack: "Total",
                // areaStyle: {},
                emphasis: {
                    focus: "series"
                },
                color: [
                    "#565656"
                ],
                showSymbol: false,
                data: [
                    0,
                    0,
                    0,
                    0.42,
                    2.92,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5
                ]
            },
            {
                name: "Community",
                type: "line",
                stack: "Total",
                // areaStyle: {},
                emphasis: {
                    focus: "series"
                },
                color: [
                    "#EE312F"
                ],
                showSymbol: false,
                data: [
                    0.38,
                    5.25,
                    9.75,
                    14.25,
                    18.75,
                    23.25,
                    27.75,
                    32.25,
                    36.75,
                    41.25,
                    45
                ]
            },
            {
                name: "Reserve",
                type: "line",
                stack: "Total",
                // areaStyle: {},
                emphasis: {
                    focus: "series"
                },
                color: [
                    "#418DE6"
                ],
                showSymbol: false,
                data: [
                    2.22,
                    5.03,
                    7.63,
                    10.23,
                    12.83,
                    15,
                    15,
                    15,
                    15,
                    15,
                    15
                ]
            },
            {
                name: "Marketing",
                type: "line",
                stack: "Total",
                // areaStyle: {},
                emphasis: {
                    focus: "series"
                },
                color: [
                    "#FF9A3D"
                ],
                showSymbol: false,
                data: [
                    0.17,
                    2.33,
                    4.33,
                    6.33,
                    8.33,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10
                ]
            },
            {
                type: "pie",
                id: "pie",
                radius: isTwolineChart ? window.innerWidth < 576 ? "60%" : "40%" : "65%",
                center: isTwolineChart ? [
                    "50%",
                    "30%"
                ] : [
                    "25%",
                    "50%"
                ],
                label: {
                    color: "#EE312F",
                    fontSize: isTwolineChart && window.innerWidth < 576 ? 10 : 14,
                    formatter: isTwolineChart && window.innerWidth < 576 ? "{c}%\n{b}" : "{b}: ({c}%)"
                },
                labelLine: {
                    lineStyle: {
                        color: "#EE312F"
                    },
                    length2: isTwolineChart && window.innerWidth < 576 ? 0 : 15,
                    length: isTwolineChart && window.innerWidth < 576 ? 10 : 15
                },
                data: [
                    {
                        value: 15,
                        name: "Reserve"
                    },
                    {
                        value: 10,
                        name: "Ecosystem"
                    },
                    {
                        value: 10,
                        name: "Marketing"
                    },
                    {
                        value: 15,
                        name: "Investment"
                    },
                    {
                        value: 5,
                        name: "Team"
                    },
                    {
                        value: 45,
                        name: "Community"
                    }, 
                ],
                color: [
                    "#418DE6",
                    "#9050E0",
                    "#FF9A3D",
                    "#DEF163",
                    "#565656",
                    "#EE312F"
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                }
            }, 
        ]
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_DefaultLayoutTitleComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: "FLICKRZ Tokens",
                bg: "bg-[#EE312F]",
                description: renderDescription("tokenTitle"),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-center mt-[60px] lg:mt-[80px] gap-[20px] lg:gap-[35px] items-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "red-circle-token w-[120px] h-[120px] lg:w-[350px] lg:h-[350px] flex items-center justify-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "relative w-[60px] h-[51px] lg:w-[200px] lg:h-[172px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/token/FLKZ.png`,
                                            layout: "fill",
                                            alt: "token"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex gap-[11px] flex-col items-center mt-[34px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-[25px] leading-[31px] lg:text-[40px] lg:leading-[50px] font-[900]",
                                            children: "$FLKZ"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-[18px] leading-[23px] lg:text-[24px] lg:leading-[30px] font-[700] w-[75%] lg:w-full mx-auto lg:mx-0 xl:w-fit",
                                                    children: "Governance Token"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-[12px] leading-[15px] lg:text-[18px] lg:leading-[23px]",
                                                    children: "Total Supply: 1 Billion"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-[10px] lg:gap-[18px] items-center mt-[-150px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        backgroundImage: `url(${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/token/arrow-swap${isMobile ? "-sm" : ""}.svg)`
                                    },
                                    className: "bg-no-repeat w-[44px] lg:w-[63px] h-[15px]"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-white text-[14px] leading-[14px] lg:text-[20px] lg:leading-[20px]",
                                    children: "Swap"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        transform: "rotate(180deg)",
                                        backgroundImage: `url(${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/token/arrow-swap${isMobile ? "-sm" : ""}.svg)`
                                    },
                                    className: "bg-no-repeat w-[44px] lg:w-[63px] h-[15px]"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "yellow-circle-about w-[120px] h-[120px] lg:w-[350px] lg:h-[350px] flex items-center justify-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "relative w-[60px] h-[66px] lg:w-[200px] lg:h-[195px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/token/EP.png`,
                                            layout: "fill",
                                            alt: "token"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex gap-[11px] flex-col items-center mt-[34px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-[25px] leading-[31px] lg:text-[40px] lg:leading-[50px] font-[900]",
                                            children: "$EP"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-[18px] leading-[23px] lg:text-[24px] lg:leading-[30px] font-[700] w-[50%] mx-auto lg:mx-0 lg:w-fit",
                                                    children: "Reward Token"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-[12px] leading-[15px] lg:text-[18px]",
                                                    children: "Unlimited Supply"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_DefaultLayoutTitleComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: "Tokens Flow",
                colorTitle: "#EE312F",
                description: renderDescription("tokenFlow"),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-[60px] lg:gap-[90px] items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_ItemWithBgImageComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            percent: 1,
                            customClass: "max-w-[708px] max-h-[708px] bg-TokenFlow"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex w-full lg:w-auto flex-col lg:min-w-[723px]",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex border-b-[1px] py-[14.5px] lg:py-[24px] border-[#EE312F] items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex-1 flex justify-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    backgroundImage: `url(${cloudfront}/images/token/FLKZ.png)`
                                                },
                                                className: "bg-cover w-[50px] h-[43px] lg:w-[70px] lg:h-[60px] bg-no-repeat"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-[241px]"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex-1 flex justify-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    backgroundImage: `url(${cloudfront}/images/token/EP.png)`
                                                },
                                                className: "bg-cover w-[50px] h-[43px] lg:w-[70px] lg:h-[60px] bg-no-repeat"
                                            })
                                        })
                                    ]
                                }),
                                listCheckFlowToken.map((ele)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex border-b-[1px] border-[#EE312F] items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex-1 flex justify-center",
                                                children: ele.checkSgt && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        backgroundImage: `url(${cloudfront}/images/token/check.svg)`
                                                    },
                                                    className: "bg-cover bg-no-repeat w-[20px] h-[15px]"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-white py-[13px] lg:py-[19.5px] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px] w-[215px] lg:w-[241px] text-center",
                                                children: ele.value
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex-1 flex justify-center",
                                                children: ele.checkSrt && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        backgroundImage: `url(${cloudfront}/images/token/check.svg)`
                                                    },
                                                    className: "bg-cover bg-no-repeat w-[20px] h-[15px]"
                                                })
                                            })
                                        ]
                                    }, ele.value))
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_DefaultLayoutTitleComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                customClass: window.innerWidth < 576 ? "!px-0" : "",
                title: "$FLKZ Token Metrics",
                colorTitle: "#EE312F",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "sm:px-[15%] lg:px-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col lg:flex-row justify-between lg:justify-center gap-[75px] lg:gap-[3%] 3xl:gap-[10%] lg:px-0 lg:mt-[80px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((echarts_for_react__WEBPACK_IMPORTED_MODULE_1___default()), {
                            option: optionChart,
                            style: {
                                width: "100%",
                                height: isTwolineChart ? "100vh" : "50vh"
                            }
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_DefaultLayoutTitleComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: "E&E Structure",
                bg: "bg-[#EE312F]",
                customClass: "bg-cover bg-no-repeat",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "sm:px-[15%] lg:px-[5%] 3xl:px-[110px] mt-[40px] lg:mt-[60px] flex justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_ItemWithBgImageComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        percent: isMobile ? 335 / 425 : 1222 / 538,
                        customClass: "lg:bg-FlowChart bg-FlowChartMB"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_StayInformed__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_Footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14571:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57636);
/* harmony import */ var _app_components_TokenComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3868);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__, _app_components_TokenComponent__WEBPACK_IMPORTED_MODULE_2__]);
([_app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__, _app_components_TokenComponent__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const Token = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: "Token",
        description: "Token",
        bHeaderAlwaysOnTop: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_TokenComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Token);

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

/***/ 67715:
/***/ ((module) => {

module.exports = require("echarts-for-react");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,5152,5277,8733,4969,5764,7636,8049,2248,88,175], () => (__webpack_exec__(14571)));
module.exports = __webpack_exports__;

})();