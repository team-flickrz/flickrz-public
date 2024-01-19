"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 29605:
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85277);
/* harmony import */ var _ToastMessageItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14793);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_4__, _ToastMessageItem__WEBPACK_IMPORTED_MODULE_5__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_4__, _ToastMessageItem__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const ToastMessage = ({ container  })=>{
    const { toastList  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.toastMessage);
    return /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_3___default().createPortal(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("fixed flex flex-col-reverse justify-end", "transition-transform duration-500 ease-in-out", "box-border top-header right-0 z-[51]"),
        children: toastList.map((toast)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ToastMessageItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    ...toast
                })
            }, toast.id);
        })
    }), container);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastMessage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14793:
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
/* harmony import */ var _features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85750);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85277);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45700);
/* harmony import */ var _icons_CloseToastIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67411);
/* harmony import */ var _icons_DangerToastIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35529);
/* harmony import */ var _icons_SuccessToastIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77798);
/* harmony import */ var _icons_WarningIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9742);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_4__, _utils_format__WEBPACK_IMPORTED_MODULE_5__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_4__, _utils_format__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const TOAST_TIME = 5000;
function ToastMessageItem({ id , title , description , type , transaction  }) {
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    const colorList = {
        success: "bg-secondary-3 text-[#FFF]",
        danger: "bg-main text-[#FFF]",
        info: "bg-secondary-3 text-[#FFF]",
        warning: "bg-secondary-1 text-[#000]"
    };
    const iconList = {
        success: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SuccessToastIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            className: "w-7 h-7"
        }),
        danger: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_DangerToastIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            className: "w-7 h-7"
        }),
        info: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            className: "w-7 h-7"
        }),
        warning: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            className: "w-7 h-7"
        })
    };
    const handleOnCloseBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((index)=>{
        dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_3__/* .toastMessageActions.removeToastMessage */ ._.removeToastMessage(index));
    }, [
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!id) return;
        const timeout = setTimeout(()=>{
            dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_3__/* .toastMessageActions.removeToastMessage */ ._.removeToastMessage(id));
        }, TOAST_TIME);
        return ()=>{
            clearTimeout(timeout);
        };
    }, [
        dispatch,
        id
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("animate-[toastIn_5s_ease-in-out_forwards]", "relative transition-all overflow-hidden", "w-[370px] m-h-20 py-[14px] pr-[44px] pl-[50px] rounded-tl-lg rounded-bl-lg mt-2 origin-right", colorList[type]),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute top-[12.5px] left-[12.5px]", "w-7 h-7"),
                children: iconList[type]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-base font-semibold text-white",
                        children: title
                    }),
                    transaction ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-h9 text-white/70 mt-1",
                        children: [
                            description,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: transaction?.href,
                                target: "blank",
                                children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_5__/* .shortenAddress */ .Xn)({
                                    str: transaction.hash
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-h9 text-white/70 mt-1",
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>{
                    if (!id) return;
                    handleOnCloseBtnClicked(id);
                },
                className: "absolute w-[12px] top-6 right-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CloseToastIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    className: "stroke-white"
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastMessageItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Web3ReactManager)
});

// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(18054);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./app/config/wallet.tsx + 2 modules
var wallet = __webpack_require__(52021);
;// CONCATENATED MODULE: ./app/hooks/useEagerConnect.ts



const useEagerConnect = ()=>{
    const { activate , active  } = (0,core_.useWeb3React)();
    const { 0: tried , 1: setTried  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (!active) {
            wallet/* injected.isAuthorized */.Lj.isAuthorized().then((isAuthorized)=>{
                if (isAuthorized) {
                    activate(wallet/* injected */.Lj, undefined, true).catch(()=>{
                        setTried(true);
                    });
                } else {
                    setTried(true);
                }
            });
        }
    }, [
        activate,
        active
    ]);
    (0,external_react_.useEffect)(()=>{
        if (active) {
            setTried(true);
        }
    }, [
        active
    ]);
    return tried;
};

;// CONCATENATED MODULE: ./app/hooks/useInactiveListener.ts
/* eslint-disable no-console */ /* eslint-disable @typescript-eslint/no-explicit-any */ 


const useInactiveListener = (suppress = false)=>{
    const { active , error , activate  } = (0,core_.useWeb3React)();
    (0,external_react_.useEffect)(()=>{
        const ethereum = window.ethereum;
        if (ethereum && ethereum.on && !active && !error && !suppress) {
            const handleChainChanged = ()=>{
                // eat errors
                activate(wallet/* injected */.Lj, undefined, true).catch((error)=>{
                    console.error("Failed to activate after chain changed", error);
                });
            };
            const handleAccountsChanged = (accounts)=>{
                if (accounts.length > 0) {
                    // eat errors
                    activate(wallet/* injected */.Lj, undefined, true).catch((error)=>{
                        console.error("Failed to activate after accounts changed", error);
                    });
                }
            };
            ethereum.on("chainChanged", handleChainChanged);
            ethereum.on("accountsChanged", handleAccountsChanged);
            return ()=>{
                if (ethereum.removeListener) {
                    ethereum.removeListener("chainChanged", handleChainChanged);
                    ethereum.removeListener("accountsChanged", handleAccountsChanged);
                }
            };
        }
        return undefined;
    }, [
        active,
        error,
        suppress,
        activate
    ]);
};

;// CONCATENATED MODULE: ./app/components/commons/Web3ReactManager.tsx





const NetworkContextName = "NETWORK";
const network = (0,wallet/* getNetworkConnector */.tv)();
function Web3ReactManager({ children  }) {
    const { active  } = (0,core_.useWeb3React)();
    const { active: networkActive , error: networkError , activate: activateNetwork ,  } = (0,core_.useWeb3React)(NetworkContextName);
    const triedEager = useEagerConnect();
    (0,external_react_.useEffect)(()=>{
        const activate = async ()=>{
            if (triedEager && !networkActive && !networkError && !active) {
                activateNetwork(network);
            }
        };
        activate();
    }, [
        triedEager,
        networkActive,
        networkError,
        activateNetwork,
        active
    ]);
    useInactiveListener(!triedEager);
    if (!triedEager) {
        return null;
    }
    return children;
}


/***/ }),

/***/ 67411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CloseToastIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



function CloseToastIcon({ className  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        viewBoxWidth: 16,
        viewBoxHeight: 16,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M11 1L1 11",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M1 1L11 11",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
}


/***/ }),

/***/ 77798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SuccessToastIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function SuccessToastIcon({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "30",
        height: "30",
        viewBox: "0 0 30 30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5ZM21.9571 11.9571C22.3476 11.5666 22.3476 10.9334 21.9571 10.5429C21.5666 10.1524 20.9334 10.1524 20.5429 10.5429L13.75 17.3358L10.7071 14.2929C10.3166 13.9024 9.68342 13.9024 9.29289 14.2929C8.90237 14.6834 8.90237 15.3166 9.29289 15.7071L13.0429 19.4571C13.4334 19.8476 14.0666 19.8476 14.4571 19.4571L21.9571 11.9571Z",
            fill: "white"
        })
    });
}


/***/ }),

/***/ 9742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WarningIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function WarningIcon({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "24",
        height: "21",
        viewBox: "0 0 24 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.6258 1.94048C12.9203 0.686506 11.0778 0.686506 10.3733 1.94048L1.73153 17.3087C1.053 18.52 1.94688 20 3.35963 20H20.6413C22.0531 20 22.948 18.52 22.2676 17.3087L13.6258 1.94048ZM11.9995 2.81581L20.6413 18.184H3.35778L11.9995 2.81581ZM11.9995 7.28779C12.2457 7.28779 12.4819 7.38345 12.6559 7.55374C12.8299 7.72403 12.9278 7.95499 12.9278 8.19581V12.7359C12.9278 12.9767 12.8299 13.2077 12.6559 13.378C12.4819 13.5482 12.2457 13.6439 11.9995 13.6439C11.7534 13.6439 11.5172 13.5482 11.3432 13.378C11.1692 13.2077 11.0713 12.9767 11.0713 12.7359V8.19581C11.0713 7.95499 11.1692 7.72403 11.3432 7.55374C11.5172 7.38345 11.7534 7.28779 11.9995 7.28779ZM13.1598 16.1409C13.1598 16.4419 13.0376 16.7307 12.82 16.9436C12.6024 17.1564 12.3073 17.276 11.9995 17.276C11.6918 17.276 11.3967 17.1564 11.1791 16.9436C10.9615 16.7307 10.8393 16.4419 10.8393 16.1409C10.8393 15.8399 10.9615 15.5512 11.1791 15.3384C11.3967 15.1255 11.6918 15.0059 11.9995 15.0059C12.3073 15.0059 12.6024 15.1255 12.82 15.3384C13.0376 15.5512 13.1598 15.8399 13.1598 16.1409Z",
            fill: "white"
        })
    });
}


/***/ }),

/***/ 97344:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ TransactionUpdater),
/* harmony export */   "u8": () => (/* binding */ BlockNumberUpdater)
/* harmony export */ });
/* unused harmony export shouldCheck */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71352);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useBlockNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48581);
/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43489);
/* harmony import */ var _hooks_useIsWindowVisible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10597);
/* harmony import */ var _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7334);
/* harmony import */ var _marketplace_nftSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52114);
/* harmony import */ var _profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70355);
/* harmony import */ var _toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85750);
/* harmony import */ var _contractSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63794);
/* harmony import */ var _hooks_useDetectMobileDevice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(77259);
/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22585);
/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37674);
/* harmony import */ var _constants_walletSelection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(41202);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_2__, _hooks_useBlockNumber__WEBPACK_IMPORTED_MODULE_3__, _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_6__, _wagmi_core__WEBPACK_IMPORTED_MODULE_11__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_2__, _hooks_useBlockNumber__WEBPACK_IMPORTED_MODULE_3__, _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_6__, _wagmi_core__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function BlockNumberUpdater() {
    const { library , chainId  } = (0,_hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_6__/* .useConnectWallet */ .O)();
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .TL)();
    const windowVisible = (0,_hooks_useIsWindowVisible__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const isMobile = (0,_hooks_useDetectMobileDevice__WEBPACK_IMPORTED_MODULE_14__/* .useDetectMobileDevice */ .c)();
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        chainId,
        blockNumber: null
    });
    const walletStorage = localStorage.getItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_12__/* .LOCAL_STORAGE_KEYS.wallet */ .d.wallet);
    const blockNumberCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((blockNumber)=>{
        setState((state)=>{
            if (chainId === state.chainId) {
                if (typeof state.blockNumber !== "number") return {
                    chainId,
                    blockNumber
                };
                return {
                    chainId,
                    blockNumber: Math.max(blockNumber, state.blockNumber)
                };
            }
            return state;
        });
    }, [
        chainId,
        setState
    ]);
    // attach/detach listeners
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!isMobile || walletStorage === _constants_walletSelection__WEBPACK_IMPORTED_MODULE_13__/* .WalletSelections.SIGHTNWALLET */ .dv.SIGHTNWALLET) {
            if (!library || !chainId || !windowVisible) return undefined;
            setState({
                chainId,
                blockNumber: null
            });
            library.getBlockNumber().then(blockNumberCallback).catch((error)=>// eslint-disable-next-line no-console
                console.error(`Failed to get block number for chainId: ${chainId}`, error));
            library.on("block", blockNumberCallback);
            return ()=>{
                library.removeListener("block", blockNumberCallback);
            };
        } else {
            (async ()=>{
                if (!chainId) return undefined;
                setState({
                    chainId,
                    blockNumber: null
                });
                const blockNumber = await (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_11__.fetchBlockNumber)();
                if (!blockNumber) {
                    // eslint-disable-next-line no-console
                    console.error(`Failed to get block number for chainId: ${chainId}`);
                    return;
                }
                blockNumberCallback(Number(blockNumber));
                (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_11__.watchBlockNumber)({
                    chainId,
                    listen: true
                }, (blockNumber)=>blockNumberCallback(Number(blockNumber)));
            })();
        }
    }, [
        dispatch,
        chainId,
        library,
        blockNumberCallback,
        windowVisible,
        walletStorage
    ]);
    const debouncedState = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(state, 100);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!debouncedState.chainId || !debouncedState.blockNumber || !windowVisible) return;
        dispatch((0,_contractSlice__WEBPACK_IMPORTED_MODULE_10__/* .updateBlockNumber */ .fG)({
            chainId: debouncedState.chainId,
            blockNumber: debouncedState.blockNumber
        }));
    }, [
        windowVisible,
        dispatch,
        debouncedState.blockNumber,
        debouncedState.chainId
    ]);
    return null;
}
function shouldCheck(lastBlockNumber, tx) {
    const blocksSinceCheck = lastBlockNumber;
    if (blocksSinceCheck < 1) return false;
    const minutesPending = (new Date().getTime() - tx.addedTime) / 1000 / 60;
    if (minutesPending > 60) {
        // every 10 blocks if pending for longer than an hour
        return blocksSinceCheck > 9;
    } else if (minutesPending > 5) {
        // every 3 blocks if pending more than 5 minutes
        return blocksSinceCheck > 2;
    } else {
        // otherwise every block
        return true;
    }
}
function TransactionUpdater() {
    const { chainId , library  } = (0,_hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_6__/* .useConnectWallet */ .O)();
    const lastBlockNumber = (0,_hooks_useBlockNumber__WEBPACK_IMPORTED_MODULE_3__/* .useBlockNumber */ .O)(chainId);
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .TL)();
    const state = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .CG)((state)=>state.contract);
    const isMobile = (0,_hooks_useDetectMobileDevice__WEBPACK_IMPORTED_MODULE_14__/* .useDetectMobileDevice */ .c)();
    const walletStorage = localStorage.getItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_12__/* .LOCAL_STORAGE_KEYS.wallet */ .d.wallet);
    const transactions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return chainId ? state.transactions[chainId] ?? {} : {};
    }, [
        chainId,
        state
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!isMobile || walletStorage === _constants_walletSelection__WEBPACK_IMPORTED_MODULE_13__/* .WalletSelections.SIGHTNWALLET */ .dv.SIGHTNWALLET) {
            if (!chainId || !library || !lastBlockNumber) return;
            Object.keys(transactions).filter((hash)=>shouldCheck(lastBlockNumber, transactions[hash])).forEach((hash)=>{
                library.getTransactionReceipt(hash).then((receipt)=>{
                    if (receipt) {
                        if (receipt.status === 1) {
                            dispatch(_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_9__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                                type: "success",
                                title: "Transaction Successful",
                                description: `View on ${_config_network__WEBPACK_IMPORTED_MODULE_1__/* .NETWORK_SCAN */ .wl[chainId]}: `,
                                transaction: {
                                    hash: receipt.transactionHash,
                                    href: `${_config_network__WEBPACK_IMPORTED_MODULE_1__/* .SUPPORTED_NETWORKS */ .bA[chainId].blockExplorerUrls[0]}/tx/${receipt?.transactionHash}`
                                }
                            }));
                        }
                        if (!transactions[hash]) return;
                        if (transactions[hash].action === "transfer-nft") {
                            dispatch(_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.clearTransferNftState */ .vB.clearTransferNftState());
                            dispatch(_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.setTransferNftFilters */ .vB.setTransferNftFilters({
                                page: 1
                            }));
                            dispatch(_marketplace_nftSlice__WEBPACK_IMPORTED_MODULE_7__/* .nftActions.setTimeStamp */ .k.setTimeStamp());
                        }
                        dispatch((0,_contractSlice__WEBPACK_IMPORTED_MODULE_10__/* .removeTransaction */ .qL)({
                            chainId,
                            hash: receipt.transactionHash
                        }));
                    }
                }).catch((error)=>{
                    // eslint-disable-next-line no-console
                    console.error(`failed to check transaction hash: ${hash}`, error);
                });
            });
        } else {
            if (!lastBlockNumber) return;
            Object.keys(transactions).filter((hash)=>shouldCheck(lastBlockNumber, transactions[hash])).forEach((hash)=>{
                if (!transactions[hash]) return;
                // eslint-disable-next-line react-hooks/rules-of-hooks
                (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_11__.waitForTransaction)({
                    hash: `0x${hash.slice(2)}`
                }).then((receipt)=>{
                    if (receipt && receipt.status === "success") {
                        dispatch(_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_9__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                            type: "success",
                            title: "Transaction Successful",
                            description: `View on ${_config_network__WEBPACK_IMPORTED_MODULE_1__/* .NETWORK_SCAN */ .wl[chainId]}: `,
                            transaction: {
                                hash: receipt.transactionHash,
                                href: `${_config_network__WEBPACK_IMPORTED_MODULE_1__/* .SUPPORTED_NETWORKS */ .bA[chainId].blockExplorerUrls[0]}/tx/${receipt?.transactionHash}`
                            }
                        }));
                    }
                    if (transactions[hash].action === "transfer-nft") {
                        dispatch(_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.clearTransferNftState */ .vB.clearTransferNftState());
                        dispatch(_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.setTransferNftFilters */ .vB.setTransferNftFilters({
                            page: 1
                        }));
                        dispatch(_marketplace_nftSlice__WEBPACK_IMPORTED_MODULE_7__/* .nftActions.setTimeStamp */ .k.setTimeStamp());
                    }
                    dispatch((0,_contractSlice__WEBPACK_IMPORTED_MODULE_10__/* .removeTransaction */ .qL)({
                        chainId,
                        hash: receipt.transactionHash
                    }));
                });
            });
        }
    }, [
        chainId,
        library,
        transactions,
        lastBlockNumber,
        dispatch,
        walletStorage
    ]);
    return null;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export linkTreeActions */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_LinkTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31624);
/* harmony import */ var _services_query_endpoints_linkTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53589);



const initialState = {
    listGeneral: [],
    listSocialMedia: [],
    linkTreeWhitePaper: ""
};
const linkTreeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "linkTreeSlice",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addMatcher(_services_query_endpoints_linkTree__WEBPACK_IMPORTED_MODULE_2__/* ["default"].endpoints.getLinkTree.matchFulfilled */ .Z.endpoints.getLinkTree.matchFulfilled, (state, action)=>{
            const { data  } = action.payload;
            state.listGeneral = data.filter((ele)=>ele.categories1 === _classes_LinkTree__WEBPACK_IMPORTED_MODULE_1__/* .LINK_TREE_CATEGORY.GENERAL */ .d.GENERAL && ele.status === _classes_LinkTree__WEBPACK_IMPORTED_MODULE_1__/* .LINK_TREE_STATUS.ACTIVE */ .U.ACTIVE);
            state.listSocialMedia = data.filter((ele)=>ele.categories1 == _classes_LinkTree__WEBPACK_IMPORTED_MODULE_1__/* .LINK_TREE_CATEGORY.SOCIAL */ .d.SOCIAL);
        });
        builder.addMatcher(_services_query_endpoints_linkTree__WEBPACK_IMPORTED_MODULE_2__/* ["default"].endpoints.getLinkTreeWhitePaper.matchFulfilled */ .Z.endpoints.getLinkTreeWhitePaper.matchFulfilled, (state, action)=>{
            const { data  } = action.payload;
            state.linkTreeWhitePaper = data.url;
        });
    }
});
const linkTreeActions = linkTreeSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkTreeSlice.reducer);


/***/ }),

/***/ 42827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports registerActions, registerAsyncActions */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48728);


const initialState = {
    draft: {
        email: "",
        password: ""
    }
};
const _setDraft = (state, action)=>{
    state.draft = action.payload;
};
const registerSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "registerSlice",
    initialState,
    reducers: {
        setDraft: _setDraft
    },
    extraReducers: (builder)=>{
        builder.addMatcher(_services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"].endpoints.register.matchPending */ .Z.endpoints.register.matchPending, (state)=>{
            state.bRegistering = "pending";
        });
        builder.addMatcher(_services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"].endpoints.register.matchFulfilled */ .Z.endpoints.register.matchFulfilled, (state)=>{
            state.bRegistering = "fulfilled";
        });
        builder.addMatcher(_services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"].endpoints.register.matchRejected */ .Z.endpoints.register.matchRejected, (state)=>{
            state.bRegistering = "rejected";
            state.token = undefined;
        });
    }
});
const registerActions = registerSlice.actions;
const registerAsyncActions = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerSlice.reducer);


/***/ }),

/***/ 939:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ authMiddleware)
/* harmony export */ });
/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37674);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5178);
/* harmony import */ var _features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63523);
/* harmony import */ var _features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84689);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_2__]);
_features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const authMiddleware = (store)=>(next)=>async (action)=>{
            switch(action.type){
                case _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__/* .authActions.logout.type */ .Y.logout.type:
                    {
                        store.dispatch(_features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_2__/* .profileActions.clearAll */ .ef.clearAll());
                        store.dispatch(_features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_3__/* .sidebarFilterActions.clearAllFilter */ .A.clearAllFilter());
                        return next(action);
                    }
                default:
                    {
                        const token = store.getState().auth.token;
                        const oldToken = window.localStorage.getItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_0__/* .LOCAL_STORAGE_KEYS.token */ .d.token);
                        if (oldToken && !token && action.type !== _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__/* .authActions.setToken.type */ .Y.setToken.type && action.type !== _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__/* .authActions.logout.type */ .Y.logout.type) {
                            store.dispatch(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__/* .authActions.setToken */ .Y.setToken(oldToken));
                            return next(action);
                        }
                        if (action.payload?.error && action.payload.error.status === 401 || action.payload && action.payload.status === 401) {
                            store.dispatch(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__/* .authActions.logout */ .Y.logout());
                            return;
                        }
                        const result = next(action);
                        return result;
                    }
            }
        };

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ netMiddleware)
/* harmony export */ });
const _netMiddlewareClosure = ()=>{
    return ()=>(next)=>async (action)=>{
                switch(action.type){
                    default:
                        next(action);
                        break;
                }
            };
};
const netMiddleware = _netMiddlewareClosure();


/***/ }),

/***/ 76672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const baseQuery = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
    baseUrl: process.env.NEXT_PUBLIC_TOOMICS_API_URL
});
const toomicApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "toomicAPIReducer",
    baseQuery,
    endpoints: ()=>({}),
    keepUnusedDataFor: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toomicApi);


/***/ }),

/***/ 95170:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _features_accessibility_accessibilitySlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19010);
/* harmony import */ var _features_account_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29335);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5178);
/* harmony import */ var _features_characterEnhance_characterEnhanceSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74362);
/* harmony import */ var _features_contract_contractSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63794);
/* harmony import */ var _features_equipmentUpgrade_equipmentUpgradeSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13644);
/* harmony import */ var _features_linkTree_linkTreeSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27010);
/* harmony import */ var _features_marketplace_badgeSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41722);
/* harmony import */ var _features_marketplace_characterSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17527);
/* harmony import */ var _features_marketplace_equipmentSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(67998);
/* harmony import */ var _features_marketplace_historySlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(91813);
/* harmony import */ var _features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(99275);
/* harmony import */ var _features_marketplace_nftSlice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(52114);
/* harmony import */ var _features_mint_mintSlice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8739);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(53450);
/* harmony import */ var _features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(44523);
/* harmony import */ var _features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(20843);
/* harmony import */ var _features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(63523);
/* harmony import */ var _features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(70355);
/* harmony import */ var _features_readToEarn_readToEarnSlice__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(45151);
/* harmony import */ var _features_register_registerSlice__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(42827);
/* harmony import */ var _features_route_routeSlice__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(48172);
/* harmony import */ var _features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(84689);
/* harmony import */ var _features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(85750);
/* harmony import */ var _features_referral_referralSlice__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(20465);
/* harmony import */ var _middlewares_auth__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(939);
/* harmony import */ var _middlewares_net__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(7622);
/* harmony import */ var _services_query_api__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(21082);
/* harmony import */ var _services_query_toomicApi__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(76672);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_13__, _features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_19__, _middlewares_auth__WEBPACK_IMPORTED_MODULE_27__]);
([_features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_13__, _features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_19__, _middlewares_auth__WEBPACK_IMPORTED_MODULE_27__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);































const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
    route: _features_route_routeSlice__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .ZP,
    accessibility: _features_accessibility_accessibilitySlice__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
    auth: _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
    register: _features_register_registerSlice__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .ZP,
    modal: _features_modal_modal__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
    sidebar: _features_sidebarFilter_sidebarFilterSlice__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z,
    marketplace: _features_marketplace_marketplaceSlice__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
    toastMessage: _features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z,
    badge: _features_marketplace_badgeSlice__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
    character: _features_marketplace_characterSlice__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
    equipment: _features_marketplace_equipmentSlice__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
    [_services_query_api__WEBPACK_IMPORTED_MODULE_29__/* ["default"].reducerPath */ .Z.reducerPath]: _services_query_api__WEBPACK_IMPORTED_MODULE_29__/* ["default"].reducer */ .Z.reducer,
    [_services_query_toomicApi__WEBPACK_IMPORTED_MODULE_30__/* ["default"].reducerPath */ .Z.reducerPath]: _services_query_toomicApi__WEBPACK_IMPORTED_MODULE_30__/* ["default"].reducer */ .Z.reducer,
    profile: _features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP,
    collection: _features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP,
    wallet: _features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .ZP,
    customerService: _features_profile_customerServiceSlice__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP,
    contract: _features_contract_contractSlice__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,
    nft: _features_marketplace_nftSlice__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
    mint: _features_mint_mintSlice__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP,
    history: _features_marketplace_historySlice__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
    characterEnhance: _features_characterEnhance_characterEnhanceSlice__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    equipmentUpgrade: _features_equipmentUpgrade_equipmentUpgradeSlice__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    readToEarn: _features_readToEarn_readToEarnSlice__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,
    account: _features_account_account__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    linkTree: _features_linkTree_linkTreeSlice__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
    referral: _features_referral_referralSlice__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z
});
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            // serializableCheck: {
            //     ignoredActions: [walletAsyncActions.connect.fulfilled.type],
            // },
            serializableCheck: false
        }).concat(_middlewares_net__WEBPACK_IMPORTED_MODULE_28__/* .netMiddleware */ .b).concat(_services_query_api__WEBPACK_IMPORTED_MODULE_29__/* ["default"].middleware */ .Z.middleware).concat(_services_query_toomicApi__WEBPACK_IMPORTED_MODULE_30__/* ["default"].middleware */ .Z.middleware).concat(_middlewares_auth__WEBPACK_IMPORTED_MODULE_27__/* .authMiddleware */ .l)
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90399);
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22585);
/* harmony import */ var _wagmi_core_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42848);
/* harmony import */ var _wagmi_core_providers_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41060);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48998);
/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87697);
/* harmony import */ var _app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37674);
/* harmony import */ var _app_components_commons_ToastMessage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29605);
/* harmony import */ var _app_components_commons_Web3ReactManager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(13828);
/* harmony import */ var _app_constants_route__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(66790);
/* harmony import */ var _app_constants_walletSelection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(41202);
/* harmony import */ var _app_contexts_AppContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14613);
/* harmony import */ var _app_features_accessibility_accessibilitySlice__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(19010);
/* harmony import */ var _app_features_account_account__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(29335);
/* harmony import */ var _app_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5178);
/* harmony import */ var _app_features_contract_contractSlice__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(63794);
/* harmony import */ var _app_features_contract_updater__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(97344);
/* harmony import */ var _app_features_modal_modal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(53450);
/* harmony import */ var _app_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(48172);
/* harmony import */ var _app_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(85750);
/* harmony import */ var _app_hooks_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(85277);
/* harmony import */ var _app_hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(7334);
/* harmony import */ var _app_services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(86588);
/* harmony import */ var _app_services_query_endpoints_linkTree__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(53589);
/* harmony import */ var _app_services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(93992);
/* harmony import */ var _app_services_query_endpoints_wallet__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(47912);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(95170);
/* harmony import */ var _languages_LangEN__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(45097);
/* harmony import */ var _languages_languages__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(87271);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wagmi_core__WEBPACK_IMPORTED_MODULE_2__, _wagmi_core_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_3__, _wagmi_core_providers_public__WEBPACK_IMPORTED_MODULE_4__, wagmi__WEBPACK_IMPORTED_MODULE_11__, wagmi_chains__WEBPACK_IMPORTED_MODULE_12__, _app_components_commons_ToastMessage__WEBPACK_IMPORTED_MODULE_14__, _app_features_contract_updater__WEBPACK_IMPORTED_MODULE_23__, _app_hooks_common__WEBPACK_IMPORTED_MODULE_27__, _app_hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_28__, _app_store__WEBPACK_IMPORTED_MODULE_33__]);
([_wagmi_core__WEBPACK_IMPORTED_MODULE_2__, _wagmi_core_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_3__, _wagmi_core_providers_public__WEBPACK_IMPORTED_MODULE_4__, wagmi__WEBPACK_IMPORTED_MODULE_11__, wagmi_chains__WEBPACK_IMPORTED_MODULE_12__, _app_components_commons_ToastMessage__WEBPACK_IMPORTED_MODULE_14__, _app_features_contract_updater__WEBPACK_IMPORTED_MODULE_23__, _app_hooks_common__WEBPACK_IMPORTED_MODULE_27__, _app_hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_28__, _app_store__WEBPACK_IMPORTED_MODULE_33__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





































const Web3ProviderNetwork = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(null, {
    loadableGenerated: {
        modules: [
            "_app.tsx -> " + "../app/components/commons/Web3ProviderNetwork"
        ]
    },
    ssr: false
});
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";
const walletIds = [
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96"
];
const { chains , publicClient , webSocketPublicClient  } = (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_2__.configureChains)([
    wagmi_chains__WEBPACK_IMPORTED_MODULE_12__.bsc,
    wagmi_chains__WEBPACK_IMPORTED_MODULE_12__.bscTestnet
], [
    (0,_wagmi_core_providers_public__WEBPACK_IMPORTED_MODULE_4__.publicProvider)()
]);
const wagmiConfig = (0,wagmi__WEBPACK_IMPORTED_MODULE_11__.createConfig)({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
    connectors: [
        new _wagmi_core_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_3__.WalletConnectConnector({
            chains,
            options: {
                projectId: projectId,
                qrModalOptions: {
                    enableExplorer: true,
                    explorerRecommendedWalletIds: walletIds,
                    explorerExcludedWalletIds: "ALL"
                }
            }
        }), 
    ]
});
const getLibrary = (provider)=>{
    const rpc = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_1__.Web3Provider(provider, "any");
    rpc.pollingInterval = 15000;
    return rpc;
};
function App({ children  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const modalState = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_27__/* .useAppSelector */ .CG)((state)=>state.modal);
    const { transactions  } = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_27__/* .useAppSelector */ .CG)((state)=>state.contract);
    const { sanction  } = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_27__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const { account  } = (0,_app_hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_28__/* .useConnectWallet */ .O)();
    const { bLoggingOut  } = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_27__/* .useAppSelector */ .CG)((state)=>state.auth);
    const dispatch = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_27__/* .useAppDispatch */ .TL)();
    // App context
    const { 0: langSelected , 1: setLangSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)("en");
    const { chainId  } = (0,_app_hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_28__/* .useConnectWallet */ .O)();
    const { isConnected: isWalletConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_11__.useAccount)();
    const walletSelected = localStorage.getItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.wallet */ .d.wallet);
    const isConnected = localStorage.getItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.isConnected */ .d.isConnected);
    const tokenStorage = localStorage.getItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.token */ .d.token);
    const [handleConnectWalletHistory] = _app_services_query_endpoints_wallet__WEBPACK_IMPORTED_MODULE_32__/* ["default"].useConnectWalletHistoryMutation */ .Z.useConnectWalletHistoryMutation();
    const [getUserProfile] = _app_services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_31__/* ["default"].useLazyGetProfileQuery */ .Z.useLazyGetProfileQuery();
    const [handleUpdateUserRegistration] = _app_services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_31__/* ["default"].useLazyUpdateUserRegistrationQuery */ .Z.useLazyUpdateUserRegistrationQuery();
    const [getMintable] = _app_services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_29__/* ["default"].useLazyGetCharacterMintableQuery */ .Z.useLazyGetCharacterMintableQuery();
    const [getLinkTreeWhitepaper] = _app_services_query_endpoints_linkTree__WEBPACK_IMPORTED_MODULE_30__/* ["default"].useLazyGetLinkTreeWhitePaperQuery */ .Z.useLazyGetLinkTreeWhitePaperQuery();
    const { myProfile: { userProfile  } ,  } = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_27__/* .useAppSelector */ .CG)((state)=>state.profile);
    const appContextValue = {
        state: {
            lang: _languages_languages__WEBPACK_IMPORTED_MODULE_35__/* ["default"].get */ .Z.get(langSelected) || _languages_LangEN__WEBPACK_IMPORTED_MODULE_34__/* .LangEN */ .B,
            langSelected
        },
        setLangSelected
    };
    const modalQueue = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_27__/* .useModalQueue */ .m$)(modalState.queue);
    (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_27__/* .useLoadTheme */ .Jv)();
    (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_27__/* .useTheme */ .Fg)();
    const handleStorage = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(()=>{
        const token = localStorage.getItem("token");
        const message = localStorage.getItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.message */ .d.message);
        const syncSuccess = localStorage.getItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.syncSuccess */ .d.syncSuccess);
        const syncError = localStorage.getItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.syncError */ .d.syncError);
        dispatch(_app_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_21__/* .authActions.setToken */ .Y.setToken(token || ""));
        if (message) {
            const error = JSON.parse(localStorage.getItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.error */ .d.error) || "");
            const showFirstToast = localStorage.getItem("showFirstToast");
            if (error && error === _app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .ERROR_LOGIN_SOCIAL.EXISTED */ .o.EXISTED) {
                if (!Number(showFirstToast)) {
                    localStorage.setItem("showFirstToast", "1");
                    dispatch(_app_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_26__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                        type: "danger",
                        title: JSON.parse(message)
                    }));
                    localStorage.removeItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.error */ .d.error);
                    localStorage.removeItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.message */ .d.message);
                }
            } else {
                dispatch(_app_features_modal_modal__WEBPACK_IMPORTED_MODULE_24__/* .modalSliceActions.addToQueueAtBegin */ .E.addToQueueAtBegin({
                    type: "popup/reasons-ban",
                    propsState: {
                        reasons: message
                    }
                }));
            }
            localStorage.removeItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.token */ .d.token);
        }
        if (syncSuccess) {
            dispatch(_app_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_26__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                title: "Sync Successfully",
                type: "success"
            }));
            localStorage.removeItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.syncSuccess */ .d.syncSuccess);
        } else if (syncError) {
            dispatch(_app_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_26__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                title: "Sync Failed",
                description: String(syncError),
                type: "danger"
            }));
            localStorage.removeItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.syncError */ .d.syncError);
            dispatch(_app_features_modal_modal__WEBPACK_IMPORTED_MODULE_24__/* .modalSliceActions.addToQueue */ .E.addToQueue({
                type: "popup/sync-sns"
            }));
        }
    }, [
        dispatch
    ]);
    const handleListenToLocalStorage = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(()=>{
        window.addEventListener("storage", handleStorage);
    }, [
        handleStorage
    ]);
    const handleClosePopup = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(()=>{
        const error = JSON.parse(localStorage.getItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.error */ .d.error) || "{}");
        if (error !== _app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .ERROR_LOGIN_SOCIAL.EXISTED */ .o.EXISTED) {
            localStorage.removeItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.error */ .d.error);
            localStorage.removeItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.message */ .d.message);
            localStorage.removeItem("showFirstToast");
            dispatch(_app_features_modal_modal__WEBPACK_IMPORTED_MODULE_24__/* .modalSliceActions.clearAll */ .E.clearAll());
            dispatch(_app_features_accessibility_accessibilitySlice__WEBPACK_IMPORTED_MODULE_19__/* .accessibilityActions.toggleSanction */ .dT.toggleSanction(false));
        }
    }, [
        dispatch
    ]);
    const cleanup = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(()=>{
        window.removeEventListener("storage", handleStorage);
        handleClosePopup();
    }, [
        handleClosePopup,
        handleStorage
    ]);
    const handleBeforeUnload = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)((e)=>{
        // e.preventDefault(); // prevent browser reload right away
        cleanup();
    }, [
        cleanup
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        if (sanction) {
            if (router.pathname.includes(_app_constants_route__WEBPACK_IMPORTED_MODULE_16__/* .ROUTER.PROFILE */ .Yj.PROFILE) || router.pathname === _app_constants_route__WEBPACK_IMPORTED_MODULE_16__/* .ROUTER.ENJOY_AND_EARN */ .Yj.ENJOY_AND_EARN) {
                router.push(_app_constants_route__WEBPACK_IMPORTED_MODULE_16__/* .ROUTER.LOGIN */ .Yj.LOGIN);
            } else {
                const message = localStorage.getItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.message */ .d.message);
                dispatch(_app_features_modal_modal__WEBPACK_IMPORTED_MODULE_24__/* .modalSliceActions.addToQueueAtBegin */ .E.addToQueueAtBegin({
                    type: "popup/reasons-ban",
                    propsState: {
                        reasons: message
                    }
                }));
            }
        }
    }, [
        sanction,
        router.pathname,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        handleListenToLocalStorage();
        getLinkTreeWhitepaper({});
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        window.addEventListener("beforeunload", handleBeforeUnload);
        return ()=>{
            window.removeEventListener("beforeunload", handleBeforeUnload);
            cleanup();
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useLayoutEffect)(()=>{
        //set lang based on locale
        setLangSelected(router.locale || "en");
    }, [
        router.locale
    ]);
    (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_27__/* .useMouseClick */ .z)(()=>{
        // Close all Menu
        dispatch(_app_features_accessibility_accessibilitySlice__WEBPACK_IMPORTED_MODULE_19__/* .accessibilityActions.turnOffAllMenu */ .dT.turnOffAllMenu());
    });
    const handleAfterRegistration = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(async ()=>{
        if (userProfile && userProfile.isUserHaveWallet) {
            await handleUpdateUserRegistration(undefined);
            await getMintable(userProfile.registrationRewardCharecter);
            dispatch(_app_features_modal_modal__WEBPACK_IMPORTED_MODULE_24__/* .modalSliceActions.addToQueue */ .E.addToQueue({
                type: "popup/welcome-gift"
            }));
            localStorage.setItem("firstLogin", "true");
        }
    }, [
        handleUpdateUserRegistration,
        userProfile,
        getMintable,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        router.events.on("routeChangeStart", ()=>{
            dispatch(_app_features_modal_modal__WEBPACK_IMPORTED_MODULE_24__/* .modalSliceActions.clearAll */ .E.clearAll());
        });
        router.events.on("routeChangeComplete", ()=>{
            dispatch(_app_features_accessibility_accessibilitySlice__WEBPACK_IMPORTED_MODULE_19__/* .accessibilityActions.turnOffAllMenu */ .dT.turnOffAllMenu());
        });
    }, [
        dispatch,
        router.events
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        const oldToken = window.localStorage.getItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.token */ .d.token);
        if (!oldToken) return;
        dispatch(_app_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_21__/* .authActions.setToken */ .Y.setToken(oldToken));
    }, [
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        const { route  } = router;
        if (route.includes("/[page]/[nftType]/[id]")) {
            dispatch(_app_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_25__/* .routeActions.setRoute */ .WU.setRoute("/my-profile"));
        }
        if (route.includes("/marketplace")) {
            dispatch(_app_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_25__/* .routeActions.setRoute */ .WU.setRoute("/marketplace"));
        }
        if (!(0,_app_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_25__/* .isRoute */ .x9)(route)) return;
        dispatch(_app_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_25__/* .routeActions.setRoute */ .WU.setRoute(route));
    }, [
        dispatch,
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        const data = localStorage.getItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.transactions */ .d.transactions);
        const txs = chainId ? JSON.parse(data || "{}")[chainId] ?? {} : {};
        Object.values(txs).forEach((tx)=>{
            dispatch((0,_app_features_contract_contractSlice__WEBPACK_IMPORTED_MODULE_22__/* .addTransaction */ .dT)({
                action: tx.action,
                chainId: tx.chainId,
                hash: tx.hash
            }));
        });
    }, [
        chainId,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        localStorage.setItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.transactions */ .d.transactions, JSON.stringify(transactions));
    }, [
        transactions
    ]);
    const updateHistory = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(async ()=>{
        switch(walletSelected){
            case _app_constants_walletSelection__WEBPACK_IMPORTED_MODULE_17__/* .WalletSelections.METAMASK */ .dv.METAMASK:
                await handleConnectWalletHistory({
                    wallet_type: _app_constants_walletSelection__WEBPACK_IMPORTED_MODULE_17__/* .WalletConnections */ .DF[_app_constants_walletSelection__WEBPACK_IMPORTED_MODULE_17__/* .WalletSelections.METAMASK */ .dv.METAMASK],
                    address: account
                });
                break;
            case _app_constants_walletSelection__WEBPACK_IMPORTED_MODULE_17__/* .WalletSelections.SIGHTNWALLET */ .dv.SIGHTNWALLET:
                await handleConnectWalletHistory({
                    wallet_type: _app_constants_walletSelection__WEBPACK_IMPORTED_MODULE_17__/* .WalletConnections */ .DF[_app_constants_walletSelection__WEBPACK_IMPORTED_MODULE_17__/* .WalletSelections.SIGHTNWALLET */ .dv.SIGHTNWALLET],
                    address: account
                });
                break;
            default:
                break;
        }
        if (!bLoggingOut) {
            await getUserProfile(undefined);
        }
    }, [
        walletSelected,
        handleConnectWalletHistory,
        getUserProfile,
        account,
        bLoggingOut
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        if (walletSelected && isConnected && userProfile?.id) {
            updateHistory();
        }
    }, [
        walletSelected,
        isConnected,
        userProfile?.id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        if (userProfile && !userProfile.openRegistration) {
            handleAfterRegistration();
        }
    }, [
        userProfile?.openRegistration,
        handleAfterRegistration,
        userProfile
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        if (!tokenStorage) {
            dispatch(_app_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_21__/* .authActions.logout */ .Y.logout());
            dispatch(_app_features_account_account__WEBPACK_IMPORTED_MODULE_20__/* .accountSliceActions.changeAccount */ .w.changeAccount(undefined));
        }
    }, [
        dispatch,
        tokenStorage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        if (isWalletConnected) {
            dispatch(_app_features_contract_contractSlice__WEBPACK_IMPORTED_MODULE_22__/* .contractActions.handleActivate */ .fm.handleActivate(true));
            localStorage.setItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.isConnected */ .d.isConnected, "true");
            localStorage.setItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.wallet */ .d.wallet, _app_constants_walletSelection__WEBPACK_IMPORTED_MODULE_17__/* .WalletSelections.METAMASK */ .dv.METAMASK);
        }
    }, [
        dispatch,
        isWalletConnected
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        const { ref  } = router.query;
        if (ref) localStorage.setItem(_app_classes_Storage__WEBPACK_IMPORTED_MODULE_13__/* .LOCAL_STORAGE_KEYS.ref */ .d.ref, String(ref).trim());
    }, [
        router
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_contexts_AppContext__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Provider */ .Z.Provider, {
        value: appContextValue,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_commons_ToastMessage__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                container: document.body
            }),
            modalQueue,
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_features_contract_updater__WEBPACK_IMPORTED_MODULE_23__/* .BlockNumberUpdater */ .u8, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_features_contract_updater__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .ZP, {})
        ]
    });
}
function Root({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_web3_react_core__WEBPACK_IMPORTED_MODULE_5__.Web3ReactProvider, {
        getLibrary: getLibrary,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Web3ProviderNetwork, {
            getLibrary: getLibrary,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_10__.Provider, {
                store: _app_store__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_commons_Web3ReactManager__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(wagmi__WEBPACK_IMPORTED_MODULE_11__.WagmiConfig, {
                            config: wagmiConfig,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                                name: "viewport",
                                                content: "width=device-width, initial-scale=1.0"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                            ...pageProps
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Root);

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

/***/ 90399:
/***/ ((module) => {

module.exports = require("@ethersproject/providers");

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

/***/ 86695:
/***/ ((module) => {

module.exports = require("redux");

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

/***/ 42848:
/***/ ((module) => {

module.exports = import("@wagmi/core/connectors/walletConnect");;

/***/ }),

/***/ 41060:
/***/ ((module) => {

module.exports = import("@wagmi/core/providers/public");;

/***/ }),

/***/ 49766:
/***/ ((module) => {

module.exports = import("bignumber.js");;

/***/ }),

/***/ 48998:
/***/ ((module) => {

module.exports = import("wagmi");;

/***/ }),

/***/ 87697:
/***/ ((module) => {

module.exports = import("wagmi/chains");;

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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,5152,5277,8733,2558,8049,2314,3523,1813,843], () => (__webpack_exec__(35656)));
module.exports = __webpack_exports__;

})();