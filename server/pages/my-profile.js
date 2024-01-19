"use strict";
(() => {
var exports = {};
exports.id = 1250;
exports.ids = [1250];
exports.modules = {

/***/ 3821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ ETypeUpdateRequest)
/* harmony export */ });
var ETypeUpdateRequest;
(function(ETypeUpdateRequest) {
    ETypeUpdateRequest["TOKEN_RT"] = "0";
    ETypeUpdateRequest["TOKEN_GT"] = "1";
    ETypeUpdateRequest["NFT"] = "2";
})(ETypeUpdateRequest || (ETypeUpdateRequest = {}));


/***/ }),

/***/ 54174:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48998);
/* harmony import */ var _docs_abi_NFTBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42388);
/* harmony import */ var _docs_abi_NFTEquipment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30598);
/* harmony import */ var _docs_abi_NTFCharacter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31464);
/* harmony import */ var _docs_abi_TMGToken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20641);
/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37674);
/* harmony import */ var _config_network__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71352);
/* harmony import */ var _constants_contractAddress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99304);
/* harmony import */ var _constants_walletSelection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41202);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14613);
/* harmony import */ var _features_account_account__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29335);
/* harmony import */ var _features_contract_contractSlice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(63794);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(53450);
/* harmony import */ var _features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(70355);
/* harmony import */ var _functions_contract__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(34700);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useBlockNumber__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(48581);
/* harmony import */ var _hooks_useDetectMobileDevice__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(77259);
/* harmony import */ var _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7334);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(45700);
/* harmony import */ var _utils_wagmiActions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(50312);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(60088);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(61103);
/* harmony import */ var _icons_SGTIcon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(16779);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_2__, _hooks_common__WEBPACK_IMPORTED_MODULE_17__, _hooks_useBlockNumber__WEBPACK_IMPORTED_MODULE_18__, _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_19__, _utils_format__WEBPACK_IMPORTED_MODULE_20__, _utils_wagmiActions__WEBPACK_IMPORTED_MODULE_21__, _icons_SGTIcon__WEBPACK_IMPORTED_MODULE_24__]);
([wagmi__WEBPACK_IMPORTED_MODULE_2__, _hooks_common__WEBPACK_IMPORTED_MODULE_17__, _hooks_useBlockNumber__WEBPACK_IMPORTED_MODULE_18__, _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_19__, _utils_format__WEBPACK_IMPORTED_MODULE_20__, _utils_wagmiActions__WEBPACK_IMPORTED_MODULE_21__, _icons_SGTIcon__WEBPACK_IMPORTED_MODULE_24__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


























const CryptoWalletProfile = ({ contextWeb3  })=>{
    const { account , chainId , privateKey  } = (0,_hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_19__/* .useConnectWallet */ .O)();
    const { deactivate , library , isConnected  } = contextWeb3;
    const walletSelected = localStorage.getItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_7__/* .LOCAL_STORAGE_KEYS.wallet */ .d.wallet);
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_17__/* .useAppDispatch */ .TL)();
    const { disconnect  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useDisconnect)();
    const isMobile = (0,_hooks_useDetectMobileDevice__WEBPACK_IMPORTED_MODULE_25__/* .useDetectMobileDevice */ .c)();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z).state;
    const { 0: balancesOf , 1: setBalancesOf  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        tokenTMG: "0",
        nftBadge: "0",
        nftCharacter: "0",
        nftEquipment: "0"
    });
    const latestBlock = (0,_hooks_useBlockNumber__WEBPACK_IMPORTED_MODULE_18__/* .useBlockNumber */ .O)(chainId);
    const handleClickConnectWalletBtn = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_14__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/select-wallet"
        }));
    }, [
        dispatch
    ]);
    const handleClickWithdrawBtn = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_14__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/withdraw-rewards"
        }));
    }, [
        dispatch
    ]);
    const handleClickDisconnectBtn = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        localStorage.removeItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_7__/* .LOCAL_STORAGE_KEYS.isConnected */ .d.isConnected);
        localStorage.removeItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_7__/* .LOCAL_STORAGE_KEYS.currentAccount */ .d.currentAccount);
        localStorage.removeItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_7__/* .LOCAL_STORAGE_KEYS.wallet */ .d.wallet);
        dispatch(_features_contract_contractSlice__WEBPACK_IMPORTED_MODULE_13__/* .contractActions.handleActivate */ .fm.handleActivate(false));
        dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_15__/* .walletActions.handleSelectChainId */ .vB.handleSelectChainId(_config_network__WEBPACK_IMPORTED_MODULE_8__/* .DEFAULT_CHAIN_ID */ .rC));
        dispatch(_features_account_account__WEBPACK_IMPORTED_MODULE_12__/* .accountSliceActions.changeAccount */ .w.changeAccount(""));
        deactivate();
        disconnect();
    }, [
        deactivate,
        dispatch,
        disconnect
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            try {
                if (!account) return;
                if (isMobile && walletSelected === _constants_walletSelection__WEBPACK_IMPORTED_MODULE_10__/* .WalletSelections.METAMASK */ .dv.METAMASK) {
                    const tmg = await (0,_utils_wagmiActions__WEBPACK_IMPORTED_MODULE_21__/* .wagmiReadContract */ .YA)({
                        typeContract: "tmg",
                        functionName: "balanceOf",
                        chainId,
                        args: [
                            account
                        ]
                    });
                    const badge = await (0,_utils_wagmiActions__WEBPACK_IMPORTED_MODULE_21__/* .wagmiReadContract */ .YA)({
                        typeContract: "badge",
                        functionName: "balanceOf",
                        chainId,
                        args: [
                            account
                        ]
                    });
                    const character = await (0,_utils_wagmiActions__WEBPACK_IMPORTED_MODULE_21__/* .wagmiReadContract */ .YA)({
                        typeContract: "characters",
                        functionName: "balanceOf",
                        chainId,
                        args: [
                            account
                        ]
                    });
                    const equipment = await (0,_utils_wagmiActions__WEBPACK_IMPORTED_MODULE_21__/* .wagmiReadContract */ .YA)({
                        typeContract: "equipment",
                        functionName: "balanceOf",
                        chainId,
                        args: [
                            account
                        ]
                    });
                    setBalancesOf({
                        tokenTMG: (0,_utils_format__WEBPACK_IMPORTED_MODULE_20__/* .formatBalance */ .az)(tmg),
                        nftBadge: (0,_utils_format__WEBPACK_IMPORTED_MODULE_20__/* .formatBalance */ .az)(badge, 0),
                        nftCharacter: (0,_utils_format__WEBPACK_IMPORTED_MODULE_20__/* .formatBalance */ .az)(character, 0),
                        nftEquipment: (0,_utils_format__WEBPACK_IMPORTED_MODULE_20__/* .formatBalance */ .az)(equipment, 0)
                    });
                } else {
                    let tmgContract;
                    let badgeContract;
                    let characterContract;
                    let equipmentContract;
                    if (walletSelected === _constants_walletSelection__WEBPACK_IMPORTED_MODULE_10__/* .WalletSelections.METAMASK */ .dv.METAMASK) {
                        tmgContract = (0,_functions_contract__WEBPACK_IMPORTED_MODULE_16__/* .getContract */ .u)(_constants_contractAddress__WEBPACK_IMPORTED_MODULE_9__/* .TMG_ADDRESS */ .Ek[chainId] || "", _docs_abi_TMGToken__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, library, privateKey ? privateKey : undefined);
                        badgeContract = (0,_functions_contract__WEBPACK_IMPORTED_MODULE_16__/* .getContract */ .u)(_constants_contractAddress__WEBPACK_IMPORTED_MODULE_9__/* .NFT_BADGE_ADDRESS */ .X_[chainId] || "", _docs_abi_NFTBadge__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, library, privateKey ? privateKey : undefined);
                        characterContract = (0,_functions_contract__WEBPACK_IMPORTED_MODULE_16__/* .getContract */ .u)(_constants_contractAddress__WEBPACK_IMPORTED_MODULE_9__/* .NFT_CHARACTER_ADDRESS */ .MI[chainId] || "", _docs_abi_NTFCharacter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, library, privateKey ? privateKey : undefined);
                        equipmentContract = (0,_functions_contract__WEBPACK_IMPORTED_MODULE_16__/* .getContract */ .u)(_constants_contractAddress__WEBPACK_IMPORTED_MODULE_9__/* .NFT_EQUIPMENT_ADDRESS */ .RR[chainId] || "", _docs_abi_NFTEquipment__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, library, privateKey ? privateKey : undefined);
                    } else if (walletSelected === _constants_walletSelection__WEBPACK_IMPORTED_MODULE_10__/* .WalletSelections.SIGHTNWALLET */ .dv.SIGHTNWALLET) {
                        tmgContract = (0,_functions_contract__WEBPACK_IMPORTED_MODULE_16__/* .getInternalContract */ .M)(_constants_contractAddress__WEBPACK_IMPORTED_MODULE_9__/* .TMG_ADDRESS */ .Ek[chainId] || "", _docs_abi_TMGToken__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, chainId, privateKey);
                        badgeContract = (0,_functions_contract__WEBPACK_IMPORTED_MODULE_16__/* .getInternalContract */ .M)(_constants_contractAddress__WEBPACK_IMPORTED_MODULE_9__/* .NFT_BADGE_ADDRESS */ .X_[chainId] || "", _docs_abi_NFTBadge__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, chainId, privateKey);
                        characterContract = (0,_functions_contract__WEBPACK_IMPORTED_MODULE_16__/* .getInternalContract */ .M)(_constants_contractAddress__WEBPACK_IMPORTED_MODULE_9__/* .NFT_CHARACTER_ADDRESS */ .MI[chainId] || "", _docs_abi_NTFCharacter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, chainId, privateKey);
                        equipmentContract = (0,_functions_contract__WEBPACK_IMPORTED_MODULE_16__/* .getInternalContract */ .M)(_constants_contractAddress__WEBPACK_IMPORTED_MODULE_9__/* .NFT_EQUIPMENT_ADDRESS */ .RR[chainId] || "", _docs_abi_NFTEquipment__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, chainId, privateKey);
                    }
                    const [tmg1, badge1, character1, equipment1] = await Promise.all([
                        tmgContract?.balanceOf(account),
                        badgeContract?.balanceOf(account),
                        characterContract?.balanceOf(account),
                        equipmentContract?.balanceOf(account), 
                    ]);
                    setBalancesOf({
                        tokenTMG: (0,_utils_format__WEBPACK_IMPORTED_MODULE_20__/* .formatBalance */ .az)(tmg1),
                        nftBadge: (0,_utils_format__WEBPACK_IMPORTED_MODULE_20__/* .formatBalance */ .az)(badge1, 0),
                        nftCharacter: (0,_utils_format__WEBPACK_IMPORTED_MODULE_20__/* .formatBalance */ .az)(character1, 0),
                        nftEquipment: (0,_utils_format__WEBPACK_IMPORTED_MODULE_20__/* .formatBalance */ .az)(equipment1, 0)
                    });
                }
            } catch (error) {
                return;
            }
        })();
    }, [
        account,
        chainId,
        library,
        latestBlock,
        walletSelected,
        privateKey
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
        isShadow: false,
        className: "!rounded-none lg:!rounded-xl p-[20px] lg:py-6 lg:px-8 lg:h-[70vh]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-h6 font-semibold flex flex-col xl:flex-row gap-[15px] lg:items-start xl:items-center justify-between dark:text-white",
                children: lang["wallet/crypto-wallet"]
            }),
            account && isConnected ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-[15px] lg:mt-5 border-[1px] flex flex-col gap-[15px] border-[#0000001A] rounded-[10px] p-[20px] dark:border-white/10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-[#00000080] leading-[16px] dark:text-white/50",
                                children: lang["common/token"]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row items-center justify-between leading-[16px]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-row items-center text-base leading-[16px] font-semibold",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-5 h-5",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SGTIcon__WEBPACK_IMPORTED_MODULE_24__/* .SGTIcon */ .$, {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-black dark:text-white/90 ml-2",
                                                children: "FLKZ"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-semibold text/black dark:text-white",
                                        children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_20__/* .formatIntBalance */ .qQ)(balancesOf.tokenTMG)
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-[15px] lg:mt-5 border-[1px] flex flex-col gap-[15px] border-[#0000001A] rounded-[10px] p-[20px] dark:border-white/10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-[#00000080] leading-[16px] dark:text-white/50",
                                children: lang["common/nft"]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row items-center justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex flex-row items-center text-base leading-[16px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-black dark:text-white/90",
                                            children: lang["nft/characters"]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-semibold text/black dark:text-white leading-[16px]",
                                        children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_20__/* .formatIntBalance */ .qQ)(balancesOf.nftCharacter)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row items-center justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex flex-row items-center text-base leading-[16px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-black dark:text-white/90",
                                            children: lang["nft/equipment"]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-semibold text/black dark:text-white leading-[16px]",
                                        children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_20__/* .formatIntBalance */ .qQ)(balancesOf.nftEquipment)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row items-center justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex flex-row items-center text-base leading-[16px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-black dark:text-white/90",
                                            children: lang["nft/badges"]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-semibold text/black dark:text-white leading-[16px]",
                                        children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_20__/* .formatIntBalance */ .qQ)(balancesOf.nftBadge)
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col gap-[15px] justify-end mt-[15px] lg:mt-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_22__/* .Button */ .z, {
                                className: "contained-primary !text-base !leading-[22px] !rounded-[10px] !py-[8px] px-[14px] h-[40px]",
                                onClick: handleClickWithdrawBtn,
                                children: lang["button/withdraw-reward"]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_22__/* .Button */ .z, {
                                className: "outlined-primary w-full !text-base !leading-[22px] rounded-[10px] h-[40px]",
                                onClick: handleClickDisconnectBtn,
                                children: lang["button/disconnect-wallet"]
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "h-[285px] lg:h-[52px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-[15px] text-h9 text-black/60 dark:text-white/70",
                        children: lang["wallet/note-wallet"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_22__/* .Button */ .z, {
                        className: "block lg:hidden contained-primary rounded-[10px] mt-[10px] w-full",
                        onClick: handleClickConnectWalletBtn,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-row justify-center items-center leading-[22px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "ml-2",
                                children: lang["button/connect-wallet"]
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CryptoWalletProfile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ InputSearch)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(59003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./app/contexts/AppContext.ts
var AppContext = __webpack_require__(14613);
// EXTERNAL MODULE: ./app/hooks/useDebounce.ts
var useDebounce = __webpack_require__(43489);
// EXTERNAL MODULE: ./app/components/bases/Input.tsx
var Input = __webpack_require__(36332);
;// CONCATENATED MODULE: ./app/components/icons/CloseRegularIcon.tsx


const CloseRegularIcon = ({ className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M10.0575 8.99916L14.7825 4.28166C14.9237 4.14043 15.0031 3.94889 15.0031 3.74916C15.0031 3.54944 14.9237 3.35789 14.7825 3.21666C14.6413 3.07543 14.4497 2.99609 14.25 2.99609C14.0503 2.99609 13.8587 3.07543 13.7175 3.21666L9.00002 7.94166L4.28252 3.21666C4.14129 3.07543 3.94974 2.99609 3.75002 2.99609C3.55029 2.99609 3.35874 3.07543 3.21752 3.21666C3.07629 3.35789 2.99695 3.54944 2.99695 3.74916C2.99695 3.94889 3.07629 4.14043 3.21752 4.28166L7.94252 8.99916L3.21752 13.7167C3.14722 13.7864 3.09142 13.8693 3.05335 13.9607C3.01527 14.0521 2.99567 14.1502 2.99567 14.2492C2.99567 14.3482 3.01527 14.4462 3.05335 14.5376C3.09142 14.629 3.14722 14.7119 3.21752 14.7817C3.28724 14.852 3.37019 14.9078 3.46158 14.9458C3.55298 14.9839 3.65101 15.0035 3.75002 15.0035C3.84902 15.0035 3.94705 14.9839 4.03845 14.9458C4.12984 14.9078 4.21279 14.852 4.28252 14.7817L9.00002 10.0567L13.7175 14.7817C13.7872 14.852 13.8702 14.9078 13.9616 14.9458C14.053 14.9839 14.151 15.0035 14.25 15.0035C14.349 15.0035 14.4471 14.9839 14.5384 14.9458C14.6298 14.9078 14.7128 14.852 14.7825 14.7817C14.8528 14.7119 14.9086 14.629 14.9467 14.5376C14.9848 14.4462 15.0044 14.3482 15.0044 14.2492C15.0044 14.1502 14.9848 14.0521 14.9467 13.9607C14.9086 13.8693 14.8528 13.7864 14.7825 13.7167L10.0575 8.99916Z"
        })
    });
};
/* harmony default export */ const icons_CloseRegularIcon = (CloseRegularIcon);

// EXTERNAL MODULE: ./app/components/icons/SearchIcon.tsx
var SearchIcon = __webpack_require__(49491);
;// CONCATENATED MODULE: ./app/components/InputSearch.tsx








const InputSearch = ({ className , placeholder , handleOnSearchChanged , handleOnSearchSubmitted , listSuggestion , textSearchAll , textNoResult , filterField , showSuggestion =false , defaultValueOptions  })=>{
    const { 0: keyword , 1: setKeyWord  } = (0,external_react_.useState)(defaultValueOptions?.keyword || "");
    const { 0: isVisible , 1: setIsVisible  } = (0,external_react_.useState)(false);
    const searchRef = (0,external_react_.useRef)(null);
    const inputRef = (0,external_react_.useRef)(null);
    const { lang  } = (0,external_react_.useContext)(AppContext/* default */.Z).state;
    const keySearch = (0,useDebounce/* default */.Z)(keyword, 200);
    const handleOnSearchChange = (0,external_react_.useCallback)((e)=>{
        if (!handleOnSearchChanged) return;
        const value = e ? e.target.value : "";
        handleOnSearchChanged(value);
        setKeyWord(value);
        setIsVisible(true);
    }, [
        handleOnSearchChanged
    ]);
    const handleOnKeyUpChanged = (0,external_react_.useCallback)((event)=>{
        if (!handleOnSearchSubmitted) return;
        if (event.code === "Enter" || event.keyCode === 13) {
            handleOnSearchSubmitted(keyword);
            setIsVisible(false);
            inputRef.current?.blur();
        }
    }, [
        handleOnSearchSubmitted,
        keyword
    ]);
    const handleClickItemSearch = (0,external_react_.useCallback)((key)=>{
        if (!key) return;
        if (!handleOnSearchSubmitted) return;
        handleOnSearchSubmitted(key);
        setKeyWord(key);
        setIsVisible(false);
    }, [
        handleOnSearchSubmitted
    ]);
    const handleFocusSearchKey = (0,external_react_.useCallback)(()=>{
        setIsVisible(true);
    }, []);
    const handleClickClearIcon = (0,external_react_.useCallback)(()=>{
        setKeyWord("");
        if (!handleOnSearchSubmitted) return;
        handleOnSearchSubmitted("");
    }, [
        handleOnSearchSubmitted
    ]);
    (0,external_react_.useEffect)(()=>{
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
    (0,external_react_.useEffect)(()=>{
        if (!defaultValueOptions?.dependencies) return;
        setKeyWord(defaultValueOptions?.keyword);
    }, [
        defaultValueOptions?.keyword,
        defaultValueOptions?.dependencies
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()("block justify-self-end self-center relative", className),
        ref: searchRef,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_classnames_default()("relative justify-self-end self-center"),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Input/* Input */.I, {
                        type: "text",
                        ref: inputRef,
                        className: external_classnames_default()("!px-[40px] w-full"),
                        placeholder: placeholder,
                        value: keyword,
                        onChange: handleOnSearchChange,
                        onKeyUp: handleOnKeyUpChanged,
                        onFocus: handleFocusSearchKey,
                        maxLength: 100
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: external_classnames_default()("btn rounded-none border-0 flex justify-center items-center absolute left-0 top-0", "h-full ml-[14px] cursor-default"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-[24px] h-[24px]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(SearchIcon/* default */.Z, {
                                className: "dark:fill-gray-3/[.83] fill-black/20"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: external_classnames_default()("btn rounded-none border-0 flex justify-center items-center absolute right-0 top-0", "h-full mr-[14px] ml-[10px] cursor-default"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "h-icon-sm grow-0 shrink-0 w-5 cursor-pointer",
                            onClick: handleClickClearIcon,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icons_CloseRegularIcon, {
                                className: external_classnames_default()("fill-black dark:fill-[#B7B9BA]", {
                                    hidden: !keyword
                                })
                            })
                        })
                    })
                ]
            }),
            showSuggestion && isVisible && keyword && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "shadow-[0px_5px_20px_rgba(0,0,0,0.1)] bg-white absolute rounded-lg w-fit z-10 mt-1 py-3 min-w-full dark:bg-[#2F2F2F]",
                children: listSuggestion?.length && filterField ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        filterField.map((filter, i)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: listSuggestion.filter((item)=>item[filter.key]?.toString()?.toLowerCase()?.includes(keySearch.trim().toLowerCase())).slice(0, 8).map((item, index)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: external_classnames_default()("py-3 px-4 text-base text-black/70 dark:text-[#B7B9BA]", "hover:bg-secondary-4 hover:text-secondary-3 cursor-pointer", "hover:dark:bg-black/20 hover:dark:text-secondary-3"),
                                        onClick: ()=>handleClickItemSearch(item[filter.key]?.toString()),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                                            className: "font-primary",
                                            children: item[filter.key]?.toString()
                                        })
                                    }, index);
                                })
                            }, i);
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-black/70 dark:text-[#B7B9BA] whitespace-nowrap text-base py-3 px-4 cursor-pointer",
                            onClick: ()=>handleClickItemSearch(keyword),
                            children: textSearchAll
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "my-7 flex flex-col items-center justify-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-2 text-black/70 dark:text-[#B7B9BA] opacity-30 text-base py-3 px-4",
                        children: textNoResult || `${lang["profile/no-data"]}`
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 74508:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3767);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60738);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85277);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([chart_js__WEBPACK_IMPORTED_MODULE_1__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__, _hooks_common__WEBPACK_IMPORTED_MODULE_4__]);
([chart_js__WEBPACK_IMPORTED_MODULE_1__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__, _hooks_common__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.Title, chart_js__WEBPACK_IMPORTED_MODULE_1__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_1__.Filler);
const LineChartComponent = ({ chartData , colorStop0 , colorStop1 , borderColor  })=>{
    const { theme  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const rfChart = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: datasets , 1: setDatasets  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const maxValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return Math.max(...[
            Math.max(...chartData.data[0]),
            Math.max(...chartData.data[1])
        ]);
    }, [
        chartData.data
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const canvas = document.getElementById("myChart");
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const data = chartData.data.map((item, index)=>{
            const gradientBg = ctx.createLinearGradient(0, 80, 0, 210);
            gradientBg.addColorStop(0, colorStop0[index]);
            gradientBg.addColorStop(1, colorStop1[index]);
            return {
                label: index === 0 ? "FLKZ" : "EP",
                data: item,
                backgroundColor: gradientBg,
                borderColor: borderColor[index],
                tension: 0.54,
                fill: true,
                borderWidth: 2
            };
        });
        setDatasets(data);
    }, [
        rfChart,
        chartData
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative h-full w-full min-h-[252px]",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Line, {
            ref: rfChart,
            id: "myChart",
            data: {
                labels: chartData.label,
                datasets
            },
            height: 100,
            width: 100,
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            usePointStyle: true,
                            boxWidth: 12
                        }
                    },
                    tooltip: {
                        enabled: true,
                        mode: "nearest",
                        boxPadding: 6,
                        usePointStyle: true
                    }
                },
                scales: {
                    x: {
                        display: true,
                        grid: {
                            color: theme === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.06)",
                            tickColor: theme === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.06)"
                        },
                        border: {
                            color: theme === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.06)"
                        }
                    },
                    y: {
                        display: true,
                        beginAtZero: true,
                        max: Math.round(maxValue / 5 + 1) * 5 < 25 ? 25 : Math.round(maxValue / 5 + 1) * 5,
                        grid: {
                            color: theme === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.06)",
                            tickColor: theme === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.06)"
                        },
                        border: {
                            color: theme === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.06)"
                        },
                        ticks: {
                            stepSize: 5
                        }
                    }
                },
                interaction: {
                    mode: "nearest",
                    axis: "x",
                    intersect: false
                },
                elements: {
                    point: {
                        radius: 0,
                        hoverRadius: 0
                    }
                }
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineChartComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3942:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49766);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_social__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23349);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66790);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14613);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53450);
/* harmony import */ var _features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85750);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48728);
/* harmony import */ var _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93992);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(45700);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(60088);
/* harmony import */ var _bases_Input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(36332);
/* harmony import */ var _bases_Tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(67517);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(61103);
/* harmony import */ var _icons_RemiderIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(84638);
/* harmony import */ var _icons_SGTIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(16779);
/* harmony import */ var _icons_SRTIcon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(68387);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([bignumber_js__WEBPACK_IMPORTED_MODULE_1__, _hooks_common__WEBPACK_IMPORTED_MODULE_10__, _utils_format__WEBPACK_IMPORTED_MODULE_13__, _icons_SGTIcon__WEBPACK_IMPORTED_MODULE_19__, _icons_SRTIcon__WEBPACK_IMPORTED_MODULE_20__]);
([bignumber_js__WEBPACK_IMPORTED_MODULE_1__, _hooks_common__WEBPACK_IMPORTED_MODULE_10__, _utils_format__WEBPACK_IMPORTED_MODULE_13__, _icons_SGTIcon__WEBPACK_IMPORTED_MODULE_19__, _icons_SRTIcon__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const remindEmail = "As your sign-up account does not have an associated email address, you are currently unable to receive emails regarding certain activities, such as when creating a new Flickrz wallet and receiving a private key, receiving notifications about offers or purchases on your NFTs, and receiving notifications when your withdrawal requests are approved by admins. To start receiving emails, please update your email address by providing it here.";
const MyAccountPanel = ({ className  })=>{
    const { myProfile: { userProfile  } ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_10__/* .useAppSelector */ .CG)((state)=>state.profile);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).state;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_10__/* .useAppDispatch */ .TL)();
    const [handleUpdateEmail, { isError  }] = _services_query_endpoints_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"].useUpdateEmailBySocialMutation */ .Z.useUpdateEmailBySocialMutation();
    const [getUserProfile] = _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_12__/* ["default"].useLazyGetProfileQuery */ .Z.useLazyGetProfileQuery();
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: isEdit , 1: setIsEdit  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: iconSocial , 1: setIconSocial  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const validateEmail = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }, [
        email
    ]);
    const handleChangeEmail = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((value)=>{
        setEmail(value);
    }, []);
    const handleSaveEmail = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(async ()=>{
        const validate = validateEmail();
        setError(validate ? "" : "Invalid email");
        if (!validate || !userProfile?.id) return;
        await handleUpdateEmail({
            userId: userProfile.id,
            email
        });
        await getUserProfile(undefined);
        setIsEdit(false);
        dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_9__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
            title: "Updated mail successfully",
            description: "You have updated email address successfully.",
            type: "success"
        }));
    }, [
        validateEmail,
        userProfile?.id,
        handleUpdateEmail,
        email,
        getUserProfile,
        dispatch
    ]);
    const handleEditEmail = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        if (!userProfile?.email) return;
        setIsEdit(true);
        setEmail(userProfile?.email);
    }, [
        userProfile?.email
    ]);
    const handleClickChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        router.replace(_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.CHANGE_PASSWORD */ .Yj.CHANGE_PASSWORD);
    }, [
        router
    ]);
    const handleClickAccountSettings = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_8__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/account-settings"
        }));
    }, [
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (isError) {
            dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_9__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                title: "Incorrect email!",
                type: "danger"
            }));
        }
    }, [
        isError,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!userProfile?.social) return;
        const icon = _config_social__WEBPACK_IMPORTED_MODULE_5__/* .listLoginSNS.find */ .G.find((item)=>item.type === userProfile?.social.type);
        if (icon) setIconSocial(icon);
        else setIconSocial(null);
    }, [
        userProfile?.social && userProfile?.social.type
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        isShadow: false,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("py-6 px-4 lg:px-8", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-row items-center gap-3 text-h6 font-semibold dark:text-white",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between w-full items-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-[6px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: lang["profile/my-account"]
                                }),
                                !userProfile?.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Tooltip__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                    className: "text-[12px] w-[60vw] max-h-[400px] overflow-y-auto md:w-[550px] text-start whitespace-pre-wrap",
                                    message: remindEmail,
                                    positionY: "left",
                                    positionX: "bottom",
                                    contentClassName: "top-[100%]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_RemiderIcon__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        className: "w-[24px] h-[24px] mt-2",
                                        fill: "#808080"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: handleClickAccountSettings,
                            className: "text-[14px] leading-[14px] font-[400] underline cursor-pointer",
                            children: lang["profile/account-settings"]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-3 px-[20px] py-[10px] lg:py-[15px] w-full flex flex-row items-center bg-black/5 dark:bg-white/5 rounded-[10px] gap-[10px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden lg:flex flex-row gap-2 shrink-0 items-center mr-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-black/50 dark:text-white/50 text-[14px]",
                            children: lang["profile/email-address"]
                        })
                    }),
                    userProfile?.email && !isEdit ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            userProfile?.social && iconSocial ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[27px] h-[27px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: iconSocial.class,
                                    children: iconSocial.icon
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "min-w-[24px] min-h-[24px] rounded-full bg-black/70 flex justify-center items-center text-white font-bold text-[12px]",
                                children: userProfile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: userProfile.email.slice(0, 1).toUpperCase()
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-fit font-semibold dark:text-white truncate pr-8",
                                children: userProfile?.email
                            }),
                            userProfile.isNotEmailWhenRegisterSocial && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_14__/* .Button */ .z, {
                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("contained-primary cursor-pointer"),
                                onClick: handleEditEmail,
                                children: "Edit"
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full lg:w-auto",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row items-center gap-3 w-full lg:w-auto",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                                        className: "w-full lg:w-[200px]",
                                        placeholder: "Enter email address",
                                        onChange: (e)=>handleChangeEmail(e.target.value),
                                        value: email
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_14__/* .Button */ .z, {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("contained-primary cursor-pointer z-9"),
                                        onClick: handleSaveEmail,
                                        disabled: email === "",
                                        children: "Save"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-[#e42d25]",
                                    children: error
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-3 text-h9 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 lg:grid-flow-col gap-y-[5px] gap-x-[20px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col px-[20px] py-[15px] gap-[15px] lg:gap-[10px] border border-[1px] border-black/10 dark:border-white/10 rounded-[10px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-black/70 lg:text-black dark:text-white/70 dark:lg:text-white/90",
                                children: lang["profile/total-earning"]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex row items-center justify-between font-semibold text-black dark:text-white/90",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-4 h-4 min-w-[16px] min-h-[16px] mr-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SRTIcon__WEBPACK_IMPORTED_MODULE_20__/* .SRTIcon */ .s, {})
                                            }),
                                            "EP"
                                        ]
                                    }),
                                    (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenString */ .Sy)({
                                        str: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .formatIntBalance */ .qQ)(userProfile?.RTEarned, 3),
                                        maxLength: 30
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex row items-center justify-between font-semibold text-black dark:text-white/90",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-4 h-4 min-w-[16px] min-h-[16px] mr-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SGTIcon__WEBPACK_IMPORTED_MODULE_19__/* .SGTIcon */ .$, {})
                                            }),
                                            "FLKZ"
                                        ]
                                    }),
                                    (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenString */ .Sy)({
                                        str: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .formatIntBalance */ .qQ)(userProfile?.GTEarned, 3),
                                        maxLength: 30
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col px-[20px] py-[15px] gap-[15px] lg:gap-[10px] border border-[1px] border-black/10 dark:border-white/10 rounded-[10px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-black/70 lg:text-black dark:text-white/70 dark:lg:text-white/90",
                                children: lang["profile/total-spending"]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between font-semibold text-black dark:text-white/90",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-4 h-4 min-w-[16px] min-h-[16px] mr-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SRTIcon__WEBPACK_IMPORTED_MODULE_20__/* .SRTIcon */ .s, {})
                                            }),
                                            "EP"
                                        ]
                                    }),
                                    (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenString */ .Sy)({
                                        str: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .formatIntBalance */ .qQ)(userProfile?.RTSpending, 3),
                                        maxLength: 30
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between font-semibold text-black dark:text-white/90",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-4 h-4 min-w-[16px] min-h-[16px] mr-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SGTIcon__WEBPACK_IMPORTED_MODULE_19__/* .SGTIcon */ .$, {})
                                            }),
                                            "FLKZ"
                                        ]
                                    }),
                                    (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenString */ .Sy)({
                                        str: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .formatIntBalance */ .qQ)(userProfile?.GTSpending, 3),
                                        maxLength: 30
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col px-[20px] py-[15px] gap-[15px] lg:gap-[10px] border border-[1px] border-black/10 dark:border-white/10 rounded-[10px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row items-center justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-black/70 dark:text-white/70",
                                        children: lang["profile/r2e-episode-limit"]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-semibold text-black dark:text-white/90",
                                        children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenString */ .Sy)({
                                            str: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .formatIntBalance */ .qQ)(userProfile?.r2eEpisodesLimit, 0),
                                            maxLength: 10
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row items-center justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-black/70 dark:text-white/70",
                                        children: lang["profile/r2e-episode-left"]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-semibold text-black dark:text-white/90",
                                        children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenString */ .Sy)({
                                            str: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .formatIntBalance */ .qQ)(userProfile?.episodesLeft, 0),
                                            maxLength: 10
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row items-center justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-black/70 dark:text-white/70",
                                        children: lang["profile/total-episodes-read"]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-semibold text-black dark:text-white/90",
                                        children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenString */ .Sy)({
                                            str: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .formatIntBalance */ .qQ)(userProfile?.totalEpisodesRead, 0),
                                            maxLength: 10
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col px-[20px] py-[15px] gap-[15px] lg:gap-[10px] border border-[1px] border-black/10 dark:border-white/10 rounded-[10px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row items-center justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-black/70 dark:text-white/70",
                                        children: lang["profile/character-owned"]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-semibold text-black dark:text-white/90",
                                        children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenString */ .Sy)({
                                            str: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .formatIntBalance */ .qQ)(userProfile?.charactersOwned, 0),
                                            maxLength: 10
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row items-center justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-black/70 dark:text-white/70",
                                        children: lang["profile/equipment-owned"]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-semibold text-black dark:text-white/90",
                                        children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenString */ .Sy)({
                                            str: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .formatIntBalance */ .qQ)(userProfile?.quipmentOwned, 0),
                                            maxLength: 10
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row items-center justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-black/70 dark:text-white/70",
                                        children: lang["profile/badges-owned"]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-semibold text-black dark:text-white/90",
                                        children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenString */ .Sy)({
                                            str: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .formatIntBalance */ .qQ)(userProfile?.badgesOwned, 0),
                                            maxLength: 10
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col px-[20px] py-[15px] gap-[15px] lg:gap-[10px] border border-[1px] border-black/10 dark:border-white/10 rounded-[10px] lg:row-span-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row items-center justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-black/70 dark:text-white/70",
                                        children: lang["profile/average-time-per-episode"]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-semibold text-black dark:text-white/90",
                                        children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .formatReadingTimeRequired */ .E1)(new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](userProfile?.avgTimePerEpisode || "0").toNumber())
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row items-center justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-black/70 dark:text-white/70",
                                        children: lang["profile/average-read-time-day"]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-semibold text-black dark:text-white/90",
                                        children: `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .formatReadingTimeRequired */ .E1)(new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](userProfile?.averageReadTimePerDay || "0").toNumber())}`
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyAccountPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11555:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ MyCollection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66790);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14613);
/* harmony import */ var _features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44523);
/* harmony import */ var _features_route_routeSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48172);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51897);
/* harmony import */ var _services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86588);
/* harmony import */ var _services_query_endpoints_equipment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2073);
/* harmony import */ var _services_query_endpoints_giftBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89148);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73732);
/* harmony import */ var _BadgeItemCollection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32413);
/* harmony import */ var _CharacterItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69380);
/* harmony import */ var _commons_NoItemsComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(50072);
/* harmony import */ var _EquipmentItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8239);
/* harmony import */ var _GiftBoxItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(54537);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_7__, _utils_common__WEBPACK_IMPORTED_MODULE_12__, _BadgeItemCollection__WEBPACK_IMPORTED_MODULE_13__, _CharacterItem__WEBPACK_IMPORTED_MODULE_14__, _EquipmentItem__WEBPACK_IMPORTED_MODULE_16__, _GiftBoxItem__WEBPACK_IMPORTED_MODULE_17__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_7__, _utils_common__WEBPACK_IMPORTED_MODULE_12__, _BadgeItemCollection__WEBPACK_IMPORTED_MODULE_13__, _CharacterItem__WEBPACK_IMPORTED_MODULE_14__, _EquipmentItem__WEBPACK_IMPORTED_MODULE_16__, _GiftBoxItem__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const MyCollection = ()=>{
    const [getCharacterList, { isFetching  }] = _services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_9__/* ["default"].useLazyGetCharacterCollectionQuery */ .Z.useLazyGetCharacterCollectionQuery();
    const [getEquipmentList, { isFetching: isFetchingEquipment  }] = _services_query_endpoints_equipment__WEBPACK_IMPORTED_MODULE_10__/* ["default"].useLazyGetEquipmentCollectionQuery */ .Z.useLazyGetEquipmentCollectionQuery();
    const [getBadgeList, { isFetching: isFetchingBadge  }] = _services_query_endpoints_badge__WEBPACK_IMPORTED_MODULE_8__/* ["default"].useLazyGetBadgeCollectionQuery */ .Z.useLazyGetBadgeCollectionQuery();
    const [getGiftBoxList] = _services_query_endpoints_giftBox__WEBPACK_IMPORTED_MODULE_11__/* ["default"].useLazyGetGiftBoxListQuery */ .Z.useLazyGetGiftBoxListQuery();
    const listRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).state;
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .TL)();
    const { filters , totalPage , collectionList  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .CG)((state)=>state.collection);
    const { timeStampAction  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .CG)((state)=>state.nft);
    const isBottom = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((ref)=>{
        if (!ref.current) {
            return false;
        }
        return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
    }, []);
    const handleClickNftItem = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        localStorage.removeItem(_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_6__/* .PREVIOUS_PAGE_KEY */ .m8);
        localStorage.setItem(_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_6__/* .BACK_TO_MY_COLLECTION */ .B1, "true");
    }, []);
    const renderNftItem = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((item)=>{
        switch(filters.type){
            case "characters":
                if (!item.character) return;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:px-5 flex justify-center",
                    onClick: handleClickNftItem,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CharacterItem__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        image: item.thumbnailUrl,
                        title: item.id.toString(),
                        link: `${_constants_route__WEBPACK_IMPORTED_MODULE_3__/* .ROUTER.MY_CHARACTER */ .Yj.MY_CHARACTER}/${item.id}?tab=my-collection`,
                        earningAmount: item.character.averageEarning,
                        earningToken: item.character.tokenTypeEarning,
                        level: item.character.level,
                        className: "lg:mt-10 max-w-[335px] sm:max-w-[265px]",
                        onSale: item.status === "on_sale",
                        inClaimRequest: item.status === "claim",
                        rarity: item.character.rarity,
                        groupClassName: {
                            imageClassName: "!h-[297px] sm:!h-[246px]"
                        }
                    })
                });
            case "equipment":
                if (!item.equipment) return;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:px-5 flex justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EquipmentItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        image: item.thumbnailUrl,
                        title: item.id.toString(),
                        link: `${_constants_route__WEBPACK_IMPORTED_MODULE_3__/* .ROUTER.MY_EQUIPMENT */ .Yj.MY_EQUIPMENT}/${item.id}?tab=my-collection`,
                        bonusAmount: item.equipment.bonus,
                        level: item.equipment.level,
                        bonusAttribute: item.equipment.itemType,
                        className: "lg:mt-10 max-w-[335px] sm:max-w-[265px]",
                        onSale: item.status === "on_sale",
                        using: item.status === "be_used",
                        inClaimRequest: item.status === "claim",
                        characterNFT: item.equipment.character?.nft?.id ? String(item.equipment.character.nft.id) : "",
                        groupClassName: {
                            imageClassName: "!h-[297px] sm:!h-[246px]"
                        }
                    })
                });
            case "badge":
                if (!item.badgesConfig) return;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:px-5 flex justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BadgeItemCollection__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        image: item.badgesConfig.thumbnailUrl,
                        title: item.nft?.badges ? item.nft.badges.name : item.badgesConfig.name,
                        link: item?.nft?.id ? `${_constants_route__WEBPACK_IMPORTED_MODULE_3__/* .ROUTER.MY_BADGE */ .Yj.MY_BADGE}/${item.nft.id}?tab=my-collection` : "",
                        idItem: item.id,
                        className: "lg:mt-10 max-w-[335px] sm:max-w-[265px]",
                        nft: item.nft,
                        badgesConfig: item.badgesConfig,
                        status: item.status,
                        priceAmount: item.amount,
                        inClaimRequest: item.nft?.status === "claim",
                        groupClassName: {
                            imageClassName: "!h-[297px] sm:!h-[246px]"
                        }
                    })
                });
            case "gift-box":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:px-5 flex justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GiftBoxItem__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        className: "lg:mt-10 lg:max-w-[300px]",
                        giftBoxData: item.giftBox
                    })
                });
            default:
                break;
        }
    }, [
        filters.type,
        handleClickNftItem
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const onScroll = ()=>{
            if (!filters.page) return;
            if (!(filters.page < totalPage)) return;
            if (isFetching || isFetchingBadge || isFetchingEquipment) return;
            if (isBottom(listRef) && filters.page < totalPage) {
                dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_5__/* .collectionActions.setCollectionFilters */ .X5.setCollectionFilters({
                    page: filters.page + 1
                }));
            }
        };
        document.addEventListener("scroll", onScroll);
        return ()=>{
            document.removeEventListener("scroll", onScroll);
        };
    }, [
        dispatch,
        filters.page,
        isBottom,
        isFetching,
        isFetchingBadge,
        isFetchingEquipment,
        totalPage, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        switch(filters.type){
            case "characters":
                getCharacterList((0,_utils_common__WEBPACK_IMPORTED_MODULE_12__/* .removeEmptyProperties */ .Nq)({
                    limit: filters.limit,
                    page: filters.page,
                    keyword: filters.keyword
                }));
                break;
            case "gift-box":
                getGiftBoxList(undefined);
                break;
            case "badge":
                getBadgeList((0,_utils_common__WEBPACK_IMPORTED_MODULE_12__/* .removeEmptyProperties */ .Nq)({
                    limit: filters.limit,
                    page: filters.page,
                    keyword: filters.keyword,
                    type: filters.badgeType
                }));
                break;
            case "equipment":
                getEquipmentList((0,_utils_common__WEBPACK_IMPORTED_MODULE_12__/* .removeEmptyProperties */ .Nq)({
                    limit: filters.limit,
                    page: filters.page,
                    keyword: filters.keyword,
                    statusInUse: filters.statusInUse
                }));
                break;
            default:
                break;
        }
    }, [
        dispatch,
        filters,
        getBadgeList,
        getGiftBoxList,
        getEquipmentList,
        getCharacterList,
        timeStampAction, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        localStorage.removeItem(_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_6__/* .PREVIOUS_PAGE_KEY */ .m8);
        localStorage.removeItem(_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_6__/* .BACK_TO_MY_COLLECTION */ .B1);
        return ()=>{
            dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_5__/* .collectionActions.resetCollectionState */ .X5.resetCollectionState());
            dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_5__/* .collectionActions.setCollectionFilters */ .X5.setCollectionFilters({
                page: 1
            }));
        };
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("lg:h-full"),
        children: [
            collectionList.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "px-6 lg:px-0 py-4 lg:py-0 lg:-mt-8 grid grid-cols-[repeat(auto-fill,minmax(300px,5fr))] -mx-5 gap-4 lg:gap-y-4",
                ref: listRef,
                children: collectionList.map((item, index)=>// <div key={index} className="lg:px-5 flex justify-center">
                    //     {renderNftItem(item)}
                    // </div>
                    renderNftItem(item))
            }),
            !isFetching && !isFetchingBadge && !isFetchingEquipment && collectionList.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-[140px] lg:mt-[150px] h-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_NoItemsComponent__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    description: filters.keyword ? `${lang["profile/no-items-found"]}` : `${lang["common/no-items"]}`
                })
            }),
            (isFetching || isFetchingEquipment || isFetchingBadge) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col flex-grow justify-center items-center h-full mt-10 lg:mt-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-icon-2xl h-icon-2xl animate-spin rounded-full border-4 border-white border-t-4 border-t-red-500"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14491:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _classes_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22314);
/* harmony import */ var _config_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71352);
/* harmony import */ var _constants_contractAddress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99304);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14613);
/* harmony import */ var _features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70355);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_wallet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47912);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73732);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45700);
/* harmony import */ var _bases_Input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36332);
/* harmony import */ var _bases_Table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(62558);
/* harmony import */ var _bases_Tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(67517);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61103);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_9__, _utils_common__WEBPACK_IMPORTED_MODULE_11__, _utils_format__WEBPACK_IMPORTED_MODULE_12__, _bases_Table__WEBPACK_IMPORTED_MODULE_14__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_9__, _utils_common__WEBPACK_IMPORTED_MODULE_11__, _utils_format__WEBPACK_IMPORTED_MODULE_12__, _bases_Table__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const MyHistoryPanel = ({ className  })=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppDispatch */ .TL)();
    const { historyFilters , historyList  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppSelector */ .CG)((state)=>state.wallet);
    const [getHistoryList] = _services_query_endpoints_wallet__WEBPACK_IMPORTED_MODULE_10__/* ["default"].useLazyGetHistoryListQuery */ .Z.useLazyGetHistoryListQuery();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).state;
    const getActionName = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((action)=>{
        switch(action){
            case _classes_User__WEBPACK_IMPORTED_MODULE_4__/* .TX_HISTORY_TYPE.DEPOSIT_NFT */ .A$.DEPOSIT_NFT:
            case _classes_User__WEBPACK_IMPORTED_MODULE_4__/* .TX_HISTORY_TYPE.DEPOSIT_TOKEN */ .A$.DEPOSIT_TOKEN:
                return `${lang["comp/deposit"]}`;
            case _classes_User__WEBPACK_IMPORTED_MODULE_4__/* .TX_HISTORY_TYPE.WITHDRAW_NFT */ .A$.WITHDRAW_NFT:
            case _classes_User__WEBPACK_IMPORTED_MODULE_4__/* .TX_HISTORY_TYPE.WITHDRAW_TOKEN */ .A$.WITHDRAW_TOKEN:
                return `${lang["comp/withdraw"]}`;
            default:
                return `${lang["comp/claim"]}`;
        }
    }, [
        lang
    ]);
    const getTokenNameByAddress = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((address, chainId, tokenType)=>{
        if (tokenType) {
            return (0,_utils_common__WEBPACK_IMPORTED_MODULE_11__/* .getTokenName */ ._M)(tokenType) || "";
        }
        switch(address?.toLowerCase()){
            case _constants_contractAddress__WEBPACK_IMPORTED_MODULE_6__/* .TMG_ADDRESS */ .Ek[chainId]?.toLowerCase():
                return "FLKZ";
            case _constants_contractAddress__WEBPACK_IMPORTED_MODULE_6__/* .NFT_BADGE_ADDRESS */ .X_[chainId]?.toLowerCase():
                return `${lang["comp/badge"]}`;
            case _constants_contractAddress__WEBPACK_IMPORTED_MODULE_6__/* .NFT_CHARACTER_ADDRESS */ .MI[chainId]?.toLowerCase():
                return `${lang["comp/character"]}`;
            case _constants_contractAddress__WEBPACK_IMPORTED_MODULE_6__/* .NFT_EQUIPMENT_ADDRESS */ .RR[chainId]?.toLowerCase():
                return `${lang["comp/equipment"]}`;
            default:
                return "";
        }
    }, [
        lang
    ]);
    const getAssetField = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((record)=>{
        if (!record) return {
            shorten: "",
            full: ""
        };
        if (record.amount) {
            return {
                shorten: `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_12__/* .shortenString */ .Sy)({
                    str: (0,_utils_format__WEBPACK_IMPORTED_MODULE_12__/* .formatIntBalance */ .qQ)(record.amount),
                    maxLength: 20,
                    isNumber: true
                })} ${getTokenNameByAddress(record.token_address, record.chain_id, record.token_type)}`,
                full: `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_12__/* .formatIntBalance */ .qQ)(record.amount)} ${getTokenNameByAddress(record.token_address, record.chain_id, record.token_type)}`
            };
        } else {
            if (record.type) {
                return {
                    shorten: getTokenNameByAddress(record.collection_address, record.chain_id, record.token_type),
                    full: record.nfts?.toString() || ""
                };
            }
            return {
                shorten: `${(0,_utils_common__WEBPACK_IMPORTED_MODULE_11__/* .getNftType */ .Mp)(JSON.parse(record.nfts || "")?.[0].type)}`,
                full: `${JSON.parse(record.nfts || "")?.map((item)=>item.id).join(", ")}`
            };
        }
    }, [
        getTokenNameByAddress
    ]);
    const getStatusField = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((record)=>{
        if (!record) return;
        if (record.tx) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: `${_config_network__WEBPACK_IMPORTED_MODULE_5__/* .SUPPORTED_NETWORKS */ .bA[record.chain_id || _config_network__WEBPACK_IMPORTED_MODULE_5__/* .DEFAULT_CHAIN_ID */ .rC]?.blockExplorerUrls?.[0]}/tx/${record.tx}`,
            target: "blank",
            className: "text-secondary-3",
            children: "View in transaction"
        });
        switch(record.status){
            case _classes_User__WEBPACK_IMPORTED_MODULE_4__/* .WITHDRAW_STATUS.APPROVED */ .zm.APPROVED:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: lang["comp/claim-approved"]
                });
            case _classes_User__WEBPACK_IMPORTED_MODULE_4__/* .WITHDRAW_STATUS.DONE */ .zm.DONE:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: lang["comp/withdrawn"]
                });
            case _classes_User__WEBPACK_IMPORTED_MODULE_4__/* .WITHDRAW_STATUS.REJECTED */ .zm.REJECTED:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: lang["comp/claim-rejected"]
                });
            case _classes_User__WEBPACK_IMPORTED_MODULE_4__/* .WITHDRAW_STATUS.PENDING */ .zm.PENDING:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: lang["comp/claim-submitted"]
                });
            default:
                break;
        }
    }, [
        lang
    ]);
    const columns = [
        {
            title: lang["profile/time"] || "",
            dataIndex: "updated_at",
            render: (text)=>moment__WEBPACK_IMPORTED_MODULE_2___default()(text).format("MM/DD/YYYY HH:mm:ss")
        },
        {
            title: lang["profile/action"] || "",
            dataIndex: "type",
            render: (text)=>getActionName(text)
        },
        {
            title: lang["profile/asset"] || "",
            render: (_, item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Tooltip__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    message: getAssetField(item).full,
                    className: "whitespace-nowrap min-w-[50px]",
                    positionX: index === 0 ? "bottom" : "top",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "whitespace-nowrap",
                        children: getAssetField(item).shorten
                    })
                })
        },
        {
            title: lang["modal/network"] || "",
            dataIndex: "chain_id",
            render: (text)=>text ? _config_network__WEBPACK_IMPORTED_MODULE_5__/* .NETWORK_DETAILS */ .Ys[Number(text)]?.name : "-"
        },
        {
            title: lang["wallet/wallet-address"] || "",
            dataIndex: "requester",
            render: (text, _, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Tooltip__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    message: text,
                    positionX: index === 0 ? "bottom" : "top",
                    children: text ? (0,_utils_format__WEBPACK_IMPORTED_MODULE_12__/* .shortenAddress */ .Xn)({
                        str: text
                    }) : "-"
                })
        },
        {
            title: "",
            render: (_, item)=>getStatusField(item)
        }, 
    ];
    const handleChangePage = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((page)=>{
        dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.handleHistoryChangePageFilter */ .vB.handleHistoryChangePageFilter({
            ...historyFilters,
            page
        }));
    }, [
        dispatch,
        historyFilters
    ]);
    const handleChangeItemPerPage = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((size, page)=>{
        dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.handleHistoryChangePageFilter */ .vB.handleHistoryChangePageFilter({
            ...historyFilters,
            page,
            limit: size
        }));
    }, [
        historyFilters,
        dispatch
    ]);
    const fromDatePicker = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return {
            minValue: moment__WEBPACK_IMPORTED_MODULE_2___default()("0000-01-01").valueOf(),
            minDate: moment__WEBPACK_IMPORTED_MODULE_2___default()("0000-01-01").format("YYYY-MM-DD"),
            maxValue: moment__WEBPACK_IMPORTED_MODULE_2___default()(historyFilters.to).valueOf(),
            maxDate: moment__WEBPACK_IMPORTED_MODULE_2___default()(historyFilters.to).format("YYYY-MM-DD")
        };
    }, [
        historyFilters
    ]);
    const toDatePicker = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return {
            minValue: moment__WEBPACK_IMPORTED_MODULE_2___default()(historyFilters.from).valueOf(),
            minDate: moment__WEBPACK_IMPORTED_MODULE_2___default()(historyFilters.from).format("YYYY-MM-DD"),
            maxValue: moment__WEBPACK_IMPORTED_MODULE_2___default()().valueOf(),
            maxDate: moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD")
        };
    }, [
        historyFilters
    ]);
    const handleChangeDate = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((e, key)=>{
        dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.handleHistoryChangePageFilter */ .vB.handleHistoryChangePageFilter({
            ...historyFilters,
            [key]: e.target.value
        }));
    }, [
        dispatch,
        historyFilters
    ]);
    const handleBlurDate = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((e, key, picker)=>{
        if (moment__WEBPACK_IMPORTED_MODULE_2___default()(e.target.value).valueOf() > picker.maxValue) {
            dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.handleHistoryChangePageFilter */ .vB.handleHistoryChangePageFilter({
                ...historyFilters,
                [key]: picker.maxDate
            }));
            return;
        }
        if (moment__WEBPACK_IMPORTED_MODULE_2___default()(e.target.value).valueOf() < picker.minValue) {
            dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.handleHistoryChangePageFilter */ .vB.handleHistoryChangePageFilter({
                ...historyFilters,
                [key]: picker.minDate
            }));
            return;
        }
        if (isNaN(moment__WEBPACK_IMPORTED_MODULE_2___default()(e.target.value).valueOf())) {
            dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.handleHistoryChangePageFilter */ .vB.handleHistoryChangePageFilter({
                ...historyFilters,
                [key]: moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD")
            }));
            return;
        }
        dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.handleHistoryChangePageFilter */ .vB.handleHistoryChangePageFilter({
            ...historyFilters,
            [key]: e.target.value
        }));
    }, [
        dispatch,
        historyFilters
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const args = {
            from: historyFilters.from,
            to: historyFilters.to,
            page: historyFilters.page,
            limit: historyFilters.limit
        };
        getHistoryList(args);
    }, [
        getHistoryList,
        historyFilters.page,
        historyFilters.limit,
        historyFilters.from,
        historyFilters.to, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        return ()=>{
            dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.handleHistoryChangePageFilter */ .vB.handleHistoryChangePageFilter({
                page: 1,
                limit: 10,
                from: moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD"),
                to: moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD"),
                total: 0
            }));
        };
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        isShadow: false,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("py-6 px-4 lg:px-8", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-h6 font-semibold dark:text-white",
                children: "History"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                className: "dark:border-white/[.05]"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-x-1 text-right mt-4 mb-6 justify-end w-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
                        type: "date",
                        className: "input-sm input-border cursor-pointer input-date !text-sm lg:!text-base grow lg:grow-0",
                        value: historyFilters.from,
                        onChange: (e)=>handleChangeDate(e, "from"),
                        onBlur: (e)=>handleBlurDate(e, "from", fromDatePicker),
                        min: fromDatePicker.minDate,
                        max: fromDatePicker.maxDate
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mx-1 w-[10px] h-[2px] bg-gray-d9 my-auto"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
                        type: "date",
                        className: "input-sm input-border cursor-pointer input-date !text-sm lg:!text-base grow lg:grow-0",
                        value: historyFilters.to,
                        onChange: (e)=>handleChangeDate(e, "to"),
                        onBlur: (e)=>handleBlurDate(e, "to", toDatePicker),
                        min: toDatePicker.minDate,
                        max: toDatePicker.maxDate
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full overflow-y-auto lg:overflow-visible",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Table__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    columns: columns,
                    data: historyList,
                    displayIndexNumber: true,
                    handleChangePage: handleChangePage,
                    filter: {
                        ...historyFilters,
                        size: historyFilters.limit
                    },
                    handleChangeItemPerPage: handleChangeItemPerPage
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyHistoryPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63924:
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
/* harmony import */ var _features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44523);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7334);
/* harmony import */ var _hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6483);
/* harmony import */ var _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93992);
/* harmony import */ var _InputSearch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12745);
/* harmony import */ var _MyAccountPanel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3942);
/* harmony import */ var _MyActivitiesPanel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3523);
/* harmony import */ var _MyCollection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11555);
/* harmony import */ var _MyWallet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(77720);
/* harmony import */ var _bases_CheckBox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(67071);
/* harmony import */ var _bases_SelectBox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(31114);
/* harmony import */ var _commons_SelectNetworkDropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3186);
/* harmony import */ var _ReferralLinkPanel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(97091);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_7__, _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_8__, _MyAccountPanel__WEBPACK_IMPORTED_MODULE_12__, _MyActivitiesPanel__WEBPACK_IMPORTED_MODULE_13__, _MyCollection__WEBPACK_IMPORTED_MODULE_14__, _MyWallet__WEBPACK_IMPORTED_MODULE_15__, _bases_SelectBox__WEBPACK_IMPORTED_MODULE_17__, _commons_SelectNetworkDropdown__WEBPACK_IMPORTED_MODULE_18__, _ReferralLinkPanel__WEBPACK_IMPORTED_MODULE_19__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_7__, _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_8__, _MyAccountPanel__WEBPACK_IMPORTED_MODULE_12__, _MyActivitiesPanel__WEBPACK_IMPORTED_MODULE_13__, _MyCollection__WEBPACK_IMPORTED_MODULE_14__, _MyWallet__WEBPACK_IMPORTED_MODULE_15__, _bases_SelectBox__WEBPACK_IMPORTED_MODULE_17__, _commons_SelectNetworkDropdown__WEBPACK_IMPORTED_MODULE_18__, _ReferralLinkPanel__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const MyProfileComponent = ()=>{
    const { transferFromCryptoWallet , tabSelected  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .CG)((state)=>state.wallet);
    const { filters , total  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .CG)((state)=>state.collection);
    const { account , chainId , isConnected  } = (0,_hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_8__/* .useConnectWallet */ .O)();
    const [isMobile] = (0,_hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_9__/* .useWindowResizeMobile */ .c)(1024);
    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: suggestionList , 1: setSuggestionList  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .TL)();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).state;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const itemOptions = [
        {
            label: lang["nft/characters"] || "",
            value: "characters"
        },
        {
            label: lang["nft/equipment"] || "",
            value: "equipment"
        },
        {
            label: lang["nft/badges"] || "",
            value: "badge"
        },
        {
            label: lang["nft/gift-boxes"] || "",
            value: "gift-box"
        }, 
    ];
    const equipmentStatusOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return [
            {
                label: lang["status/all"] || "",
                value: "None"
            },
            {
                label: lang["status/in-use"] || "",
                value: "InUse"
            },
            {
                label: lang["status/not-in-use"] || "",
                value: "NotInUse"
            }, 
        ];
    }, [
        lang
    ]);
    const badgesStatusOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return [
            {
                label: lang["status/all"] || "",
                value: "all"
            },
            {
                label: lang["status/claimed"] || "",
                value: "claimed"
            },
            {
                label: lang["status/unclaimed"] || "",
                value: "unclaimed"
            }, 
        ];
    }, [
        lang
    ]);
    const tabOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>[
            {
                label: lang["profile/my-profile"] || "",
                value: _constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.MY_PROFILE */ .Yj.MY_PROFILE,
                iconName: "my-profile"
            },
            {
                label: lang["profile/my-collection"] || "",
                value: _constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.MY_COLLECTION */ .Yj.MY_COLLECTION,
                iconName: "my-collection"
            },
            {
                label: lang["profile/my-wallet"] || "",
                value: _constants_route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTER.MY_WALLET */ .Yj.MY_WALLET,
                iconName: "my-wallet"
            }, 
        ], [
        lang
    ]);
    const textNoResult = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        switch(filters.type){
            case "characters":
                return `${lang["common/no-character-found"]}`;
            case "equipment":
                return `${lang["common/no-equipment-found"]}`;
            case "badge":
                return `${lang["common/no-badges-found"]}`;
            default:
                return `${lang["profile/no-data"]}`;
        }
    }, [
        filters.type,
        lang
    ]);
    const [getListSuggestCollection, { data , isSuccess  }] = _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_10__/* ["default"].useLazyGetSuggestCollectionQuery */ .Z.useLazyGetSuggestCollectionQuery();
    const handleSelectTab = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((tab)=>{
        route.push(tab);
    }, [
        route
    ]);
    const handleClickSelectItem = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((value)=>{
        dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_6__/* .collectionActions.resetCollectionState */ .X5.resetCollectionState());
        dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_6__/* .collectionActions.resetFilterCollectionState */ .X5.resetFilterCollectionState());
        dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_6__/* .collectionActions.setCollectionFilters */ .X5.setCollectionFilters({
            type: value,
            page: 1,
            keyword: ""
        }));
    }, [
        dispatch
    ]);
    const handleClickSelectStatus = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((value)=>{
        dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_6__/* .collectionActions.setCollectionState */ .X5.setCollectionState({
            total: 0,
            collectionList: []
        }));
        dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_6__/* .collectionActions.setCollectionFilters */ .X5.setCollectionFilters({
            page: 1,
            statusInUse: value
        }));
    }, [
        dispatch
    ]);
    const handleClickSelectBadgeType = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((value)=>{
        dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_6__/* .collectionActions.setCollectionState */ .X5.setCollectionState({
            total: 0,
            collectionList: []
        }));
        dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_6__/* .collectionActions.setCollectionFilters */ .X5.setCollectionFilters({
            page: 1,
            badgeType: value
        }));
    }, [
        dispatch
    ]);
    const handleOnSearchSubmitted = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((keyword)=>{
        dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_6__/* .collectionActions.setCollectionState */ .X5.setCollectionState({
            total: 0,
            collectionList: []
        }));
        dispatch(_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_6__/* .collectionActions.setCollectionFilters */ .X5.setCollectionFilters({
            keyword,
            page: 1
        }));
    }, [
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (isSuccess) {
            const arr = data?.data.map((item)=>{
                return {
                    id: item
                };
            });
            if (!arr) return;
            setSuggestionList(arr);
        }
    }, [
        data?.data,
        isSuccess
    ]);
    const renderTabOptionItem = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((item, index)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("uppercase", "cursor-pointer grow lg:grow-0", "transition-all ease-in", "py-[19px]", {
                "text-black dark:text-white/90 pb-[15px] border-b-[4px] border-black dark:border-white/90": route.query.tab === item.iconName || !route.query.tab && item.iconName === "my-profile"
            }, {
                "lg:!flex-col tablet-3:!flex-row": route.query.tab === "my-collection" && filters.type !== "gift-box"
            }),
            onClick: ()=>handleSelectTab(item.value),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("font-bold text-center", "text-caption-2 tracking-normal lg:text-caption-0"),
                children: item.label
            })
        }, index);
    }, [
        handleSelectTab,
        route.query.tab,
        filters
    ]);
    const renderInputSearch = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((className)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputSearch__WEBPACK_IMPORTED_MODULE_11__/* .InputSearch */ .V, {
            className: className,
            placeholder: filters.type === "badge" ? `${lang["comp/search-by-name-1"]}` : `${lang["comp/search-by-id"]}`,
            handleOnSearchSubmitted: handleOnSearchSubmitted,
            listSuggestion: suggestionList,
            filterField: [
                {
                    key: "id",
                    label: "Name"
                }
            ],
            textSearchAll: `Press Enter to search all ${filters.type}`,
            textNoResult: textNoResult,
            showSuggestion: true,
            handleOnSearchChanged: (e)=>{
                if (!e) return;
                getListSuggestCollection({
                    type: filters.type,
                    keyword: e
                });
            },
            defaultValueOptions: {
                dependencies: filters.type || "",
                keyword: filters.keyword || ""
            }
        });
    }, [
        filters.keyword,
        filters.type,
        getListSuggestCollection,
        handleOnSearchSubmitted,
        lang,
        suggestionList,
        textNoResult, 
    ]);
    const renderFilter = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        switch(route.query.tab){
            case "my-collection":
                {
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full grid grid-cols-[1fr_2fr] lg:grid-cols-[7fr_3fr_1fr] xl:grid-cols-[6fr_5fr_1fr] bg-white dark:bg-[#232323] lg:!bg-transparent p-[20px] lg:!px-0 lg:!py-[35px] gap-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-row items-center justify-center lg:justify-start col-span-2 lg:col-span-1 gap-1",
                                children: itemOptions.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex items-center justify-center cursor-pointer", "text-[10px] xs:text-[12px] md:text-[14px] lg:text-[16px] text-black dark:text-white px-[10px] lg:px-[15px] xl:px-[20px] py-2", "bg-black/5 dark:bg-white/10 rounded-[10px]", {
                                            "!bg-[#E42D25] !text-white": item.value === filters.type
                                        }),
                                        onClick: ()=>handleClickSelectItem(item.value),
                                        children: item.label
                                    }, `collection ${index}`))
                            }),
                            filters.type !== "gift-box" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex items-center justify-center col-span-2 lg:col-span-1",
                                        children: renderInputSearch("w-full")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex items-center justify-start text-black/70 dark:text-white/70"),
                                        children: [
                                            total,
                                            " ",
                                            total === 1 ? `${lang["mp/result"]}` : `${lang["wallet/results"]}`
                                        ]
                                    }),
                                    filters.type !== "characters" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex items-center justify-start lg:col-span-3 gap-6",
                                        children: !isMobile ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                filters.type === "equipment" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: equipmentStatusOptions.map((item, index)=>{
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_CheckBox__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                                onClick: ()=>handleClickSelectStatus(item.value),
                                                                checked: filters.statusInUse === item.value,
                                                                groupClassName: {
                                                                    checkClassName: "!bg-[#E42D25]"
                                                                },
                                                                children: item.label
                                                            })
                                                        }, `statusInUse ${index}`);
                                                    })
                                                }),
                                                filters.type === "badge" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: badgesStatusOptions.map((item, index)=>{
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_CheckBox__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                                onClick: ()=>handleClickSelectBadgeType(item.value),
                                                                checked: filters.badgeType === item.value,
                                                                groupClassName: {
                                                                    checkClassName: "!bg-[#E42D25]"
                                                                },
                                                                children: item.label
                                                            })
                                                        }, `statusInUse ${index}`);
                                                    })
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                filters.type === "equipment" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_SelectBox__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                    options: equipmentStatusOptions,
                                                    defaultValue: filters.statusInUse,
                                                    customClassName: "lg:ml-4 lg:min-w-[150px] w-full",
                                                    onChange: handleClickSelectStatus
                                                }),
                                                filters.type === "badge" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_SelectBox__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                    options: badgesStatusOptions,
                                                    defaultValue: filters.badgeType,
                                                    customClassName: "lg:ml-4 lg:min-w-[150px] w-full",
                                                    onChange: handleClickSelectBadgeType
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    });
                }
        }
    }, [
        filters.type,
        handleClickSelectItem,
        itemOptions,
        lang,
        renderInputSearch,
        route.query.tab,
        total,
        filters.statusInUse,
        filters.badgeType,
        handleClickSelectStatus,
        handleClickSelectBadgeType,
        equipmentStatusOptions,
        badgesStatusOptions,
        isMobile, 
    ]);
    const renderSelectNetwork = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (route.query.tab === "my-wallet") {
            if (!account || !isConnected) return null;
            if (!transferFromCryptoWallet && tabSelected !== "balance" && tabSelected !== "manageSightnWallet") return null;
            if (tabSelected === "history") return null;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden lg:flex lg:!px-0 flex-row items-center justify-end",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_SelectNetworkDropdown__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    account: account,
                    chainId: chainId
                })
            });
        }
    }, [
        account,
        isConnected,
        tabSelected,
        transferFromCryptoWallet,
        chainId,
        route.query.tab
    ]);
    const renderTabs = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex justify-between border-b-[1px] dark:border-white/10 border-[#0000001A]",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-[#00000080] px-[20px] dark:text-white/50 bg-white dark:bg-[#232323] lg:!bg-transparent gap-[30px]", "flex flex-row items-center", "w-full lg:w-auto select-none"),
                children: tabOptions.map((item, index)=>renderTabOptionItem(item, index))
            })
        });
    }, [
        renderTabOptionItem,
        tabOptions
    ]);
    const renderDomain = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        switch(route.query.tab){
            case "my-collection":
                {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "px-0 xs:px-6 !pb-6 lg:p-0 lg:h-fit",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MyCollection__WEBPACK_IMPORTED_MODULE_14__/* .MyCollection */ .a, {})
                    });
                }
            case "my-wallet":
                {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "lg:p-0 lg:h-screen",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MyWallet__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            className: "lg:pt-6"
                        })
                    });
                }
            default:
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MyAccountPanel__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("mt-3 lg:mt-6", {
                                "!rounded-none": isMobile
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReferralLinkPanel__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("mt-3 lg:mt-6", {
                                "!rounded-none": isMobile
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MyActivitiesPanel__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("mt-3 lg:mt-6", {
                                "!rounded-none": isMobile
                            })
                        })
                    ]
                });
        }
    }, [
        route.query.tab,
        isMobile
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "px-0 lg:px-[60px] xl:px-[120px] pt-0 lg:pt-[20px] lg:h-full",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex flex-col items-stretch justify-start"),
                children: [
                    renderTabs(),
                    renderFilter()
                ]
            }),
            renderDomain()
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyProfileComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77720:
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
/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37674);
/* harmony import */ var _constants_walletSelection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41202);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14613);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53450);
/* harmony import */ var _features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70355);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7334);
/* harmony import */ var _hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6483);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60088);
/* harmony import */ var _bases_SelectBox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(31114);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(61103);
/* harmony import */ var _commons_SelectWalletSightnDropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(91943);
/* harmony import */ var _commons_TransferHeader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(70586);
/* harmony import */ var _CryptoWalletBalance__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(54174);
/* harmony import */ var _MyHistoryPanel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14491);
/* harmony import */ var _NotConnectWallet__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(32516);
/* harmony import */ var _SightnWallet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(14159);
/* harmony import */ var _SpendingWalletBalance__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(29297);
/* harmony import */ var _SwapHeader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(92993);
/* harmony import */ var _SwapPanel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(24331);
/* harmony import */ var _TransferNfts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(20199);
/* harmony import */ var _TransferTokens__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(40346);
/* harmony import */ var _WrongNetworkNotification__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(18465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_9__, _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_10__, _bases_SelectBox__WEBPACK_IMPORTED_MODULE_13__, _commons_SelectWalletSightnDropdown__WEBPACK_IMPORTED_MODULE_15__, _commons_TransferHeader__WEBPACK_IMPORTED_MODULE_16__, _CryptoWalletBalance__WEBPACK_IMPORTED_MODULE_17__, _MyHistoryPanel__WEBPACK_IMPORTED_MODULE_18__, _NotConnectWallet__WEBPACK_IMPORTED_MODULE_19__, _SightnWallet__WEBPACK_IMPORTED_MODULE_20__, _SpendingWalletBalance__WEBPACK_IMPORTED_MODULE_21__, _SwapHeader__WEBPACK_IMPORTED_MODULE_22__, _SwapPanel__WEBPACK_IMPORTED_MODULE_23__, _TransferNfts__WEBPACK_IMPORTED_MODULE_24__, _TransferTokens__WEBPACK_IMPORTED_MODULE_25__, _WrongNetworkNotification__WEBPACK_IMPORTED_MODULE_26__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_9__, _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_10__, _bases_SelectBox__WEBPACK_IMPORTED_MODULE_13__, _commons_SelectWalletSightnDropdown__WEBPACK_IMPORTED_MODULE_15__, _commons_TransferHeader__WEBPACK_IMPORTED_MODULE_16__, _CryptoWalletBalance__WEBPACK_IMPORTED_MODULE_17__, _MyHistoryPanel__WEBPACK_IMPORTED_MODULE_18__, _NotConnectWallet__WEBPACK_IMPORTED_MODULE_19__, _SightnWallet__WEBPACK_IMPORTED_MODULE_20__, _SpendingWalletBalance__WEBPACK_IMPORTED_MODULE_21__, _SwapHeader__WEBPACK_IMPORTED_MODULE_22__, _SwapPanel__WEBPACK_IMPORTED_MODULE_23__, _TransferNfts__WEBPACK_IMPORTED_MODULE_24__, _TransferTokens__WEBPACK_IMPORTED_MODULE_25__, _WrongNetworkNotification__WEBPACK_IMPORTED_MODULE_26__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



























const MyWallet = ({ className  })=>{
    const contextWeb3 = (0,_hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_10__/* .useWeb3Activity */ .E)();
    const { account , isSupportedNetwork , isConnected , chainId  } = (0,_hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_10__/* .useConnectWallet */ .O)();
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppDispatch */ .TL)();
    const { transferFromCryptoWallet , tabSelected  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppSelector */ .CG)((state)=>state.wallet);
    const { 0: networkId , 1: setNetworkId  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(chainId);
    const walletSelected = localStorage.getItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_4__/* .LOCAL_STORAGE_KEYS.wallet */ .d.wallet);
    const [isMobile] = (0,_hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_11__/* .useWindowResizeMobile */ .c)(1024);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).state;
    const tabOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>[
            {
                label: lang["wallet/balance"] || "",
                value: "balance"
            },
            {
                label: lang["wallet/transfer-nfts"] || "",
                value: "transferNfts"
            },
            {
                label: lang["wallet/transfer-tokens"] || "",
                value: "transferTokens"
            },
            {
                label: lang["wallet/sightn-wallet"] || "",
                value: "manageSightnWallet"
            },
            {
                label: lang["wallet/swap"] || "",
                value: "swap"
            },
            {
                label: lang["wallet/history"] || "",
                value: "history"
            }, 
        ], [
        lang
    ]);
    const handleSelectTab = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((tab)=>{
        router.query.innerTab = tab;
        router.push(router);
        dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.handleSelectTab */ .vB.handleSelectTab(tab));
    }, [
        dispatch,
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        return ()=>{
            dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.handleSwitchTransfer */ .vB.handleSwitchTransfer(false));
            dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.clearTransferNftState */ .vB.clearTransferNftState());
            dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.handleSelectTab */ .vB.handleSelectTab("balance"));
        };
    }, [
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setNetworkId(chainId);
    }, [
        chainId
    ]);
    const renderTabs = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((item, index)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("p-[15px] flex flex-row items-center font-semibold cursor-pointer whitespace-nowrap text-[18px] leading-[18px]", "snap-center rounded-[5px]", tabSelected === item.value ? "text-black dark:text-white" : "text-[#00000080] dark:text-[#595B5F]"),
            onClick: ()=>handleSelectTab(item.value),
            children: item.label
        }, index);
    }, [
        handleSelectTab,
        tabSelected
    ]);
    const renderDomainByTab = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        switch(tabSelected){
            case "balance":
                {
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-1 lg:flex lg:space-x-8 w-full lg:h-full lg:max-h-[70vh] rounded-b-[0] gap-4 lg:gap-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex-1 mt-[10px] lg:mt-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SpendingWalletBalance__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CryptoWalletBalance__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                    contextWeb3: contextWeb3
                                })
                            })
                        ]
                    });
                }
            case "transferTokens":
                {
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_TransferHeader__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                className: "mb-[10px] lg:mb-5 bg-white dark:bg-[#232323] lg:bg-transparent p-[20px] lg:p-0"
                            }),
                            (!account || !isConnected) && transferFromCryptoWallet ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NotConnectWallet__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TransferTokens__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                contextWeb3: contextWeb3
                            })
                        ]
                    });
                }
            case "transferNfts":
                {
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_TransferHeader__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                className: "lg:mb-5 bg-white dark:bg-[#232323] lg:bg-transparent p-[20px] lg:p-0"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "lg:h-full w-full rounded-t-[10px] rounded-b-[0]",
                                children: (!account || !isConnected) && transferFromCryptoWallet ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NotConnectWallet__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "lg:h-full flex flex-col items-center lg:items-stretch lg:pt-6 w-full lg:w-auto",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TransferNfts__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                        contextWeb3: contextWeb3
                                    })
                                })
                            })
                        ]
                    });
                }
            case "swap":
                {
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SwapHeader__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                className: "lg:mb-5 bg-white dark:bg-[#232323] lg:bg-transparent p-[20px] lg:p-0"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "lg:h-full w-full rounded-t-[10px] rounded-b-[0]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "lg:h-full flex flex-col items-center lg:items-stretch lg:pt-6 w-full lg:w-auto",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SwapPanel__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                        contextWeb3: contextWeb3
                                    })
                                })
                            })
                        ]
                    });
                }
            case "manageSightnWallet":
                {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: !account || !isConnected || !walletSelected || walletSelected === _constants_walletSelection__WEBPACK_IMPORTED_MODULE_5__/* .WalletSelections.METAMASK */ .dv.METAMASK ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NotConnectWallet__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                            className: "p-[20px] lg:p-0"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SightnWallet__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                            contextWeb3: contextWeb3,
                            chainId: networkId
                        })
                    });
                }
            case "history":
                {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MyHistoryPanel__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("mt-3 lg:mt-0", {
                            "!rounded-none": isMobile
                        })
                    });
                }
            default:
                break;
        }
    }, [
        account,
        contextWeb3,
        isConnected,
        tabSelected,
        transferFromCryptoWallet,
        walletSelected,
        networkId,
        isMobile, 
    ]);
    const renderAlerts = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (!isConnected) return;
        if (isSupportedNetwork) return;
        if (!account) return;
        if (!transferFromCryptoWallet) return;
        if (tabSelected === "history") return;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WrongNetworkNotification__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            className: "mb-0",
            contextWeb3: contextWeb3
        });
    }, [
        contextWeb3,
        isSupportedNetwork,
        tabSelected,
        transferFromCryptoWallet,
        account,
        isConnected, 
    ]);
    const renderSelectNetworkDropdown = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (!account || !isConnected) return null;
        if (tabSelected === "history" || tabSelected === "swap") return null;
        // if (
        //     !transferFromCryptoWallet &&
        //     tabSelected !== "balance" &&
        //     tabSelected !== "manageSightnWallet"
        // )
        //     return (
        //         <div className="lg:pb-[20px] mt-[20px] lg:mt-0 lg:border-b-[1px] border-b-[#0000001A] lg:mb-[10px]">
        //             <div
        //                 className={cn(
        //                     "flex flex-row items-center rounded-[10px] relative gap-[5px] w-full",
        //                     "bg-transparent dark:text-white"
        //                 )}
        //             >
        //                 <div className="relative text-h9 font-semibold flex items-center grow border-[1px] gap-[25px] lg:gap-[10px] w-[218px] border-[#0000001A] dark:border-[#FFFFFF1A] rounded-[10px] bg-white dark:bg-[#232323]">
        //                     <div className="flex w-full items-center px-[10px] py-[9px] gap-[10px] font-[400]">
        //                         <div className="w-[26px] h-[26px]">{networkOptions[0].icon}</div>
        //                         {networkOptions[0].name}
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     );
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "lg:pb-[20px] lg:border-b-[1px] lg:border-b-[#0000001A] mb-[10px]",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex w-full lg:!px-0 mt-5 lg:mt-0 flex-row items-center justify-end",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_SelectWalletSightnDropdown__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    account: account
                })
            })
        });
    // }, [account, isConnected, tabSelected, transferFromCryptoWallet]);
    }, [
        account,
        isConnected,
        tabSelected
    ]);
    const handleClickConnectWalletBtn = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_7__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/select-wallet"
        }));
    }, [
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const { innerTab  } = router.query;
        if (innerTab) {
            dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.handleSelectTab */ .vB.handleSelectTab(innerTab));
        }
    }, [
        router.query
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("lg:h-full flex flex-col lg:flex-row lg:space-x-8", className),
        children: [
            isMobile ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "block lg:hidden p-[20px] pb-[20px] lg:p-0 bg-white dark:bg-[#232323] lg:mb-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_SelectBox__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        onChange: (value)=>handleSelectTab(value),
                        defaultValue: tabSelected,
                        options: tabOptions,
                        customClassName: "lg:hidden",
                        darkThemeDownIcon: true
                    }),
                    renderSelectNetworkDropdown()
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                isShadow: false,
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("rounded-lg lg:rounded-xl z-[1] lg:px-[15px] lg:py-[20px]", "max-w-full mb-4 lg:mb-0 lg:h-full lg:max-h-[70vh] lg:w-[300px] px-4 lg:px-0 lg:min-w-fit hidden lg:block"),
                children: [
                    account && isConnected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: renderSelectNetworkDropdown()
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-[370px] lg:h-fit lg:pb-[20px] border-b-[1px] border-b-[#0000001A] mb-[10px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_12__/* .Button */ .z, {
                            className: "contained-primary rounded-[10px] w-full",
                            onClick: handleClickConnectWalletBtn,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-row justify-between items-center leading-[22px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "ml-2",
                                    children: lang["button/connect-wallet"]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex flex-row lg:flex-col justify-start lg:items-stretch", "max-w-full overflow-y-auto snap-mandatory snap-x"),
                        children: tabOptions.map((item, index)=>renderTabs(item, index))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full lg:h-full lg:w-fit flex flex-col lg:flex-1",
                children: [
                    renderAlerts(),
                    renderDomainByTab()
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyWallet);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32516:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14613);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53450);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85277);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60088);
/* harmony import */ var _icons_WalletIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14980);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_6__]);
_hooks_common__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const NotConnectWallet = ({ className  })=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .TL)();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).state;
    const handleClickConnectWalletBtn = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        // dispatch(
        //     modalSliceActions.addToQueue({
        //         type: "popup/connect-wallet",
        //         propsState: { isRequireCreateAccount: false },
        //     })
        // );
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_5__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/select-wallet"
        }));
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("px-[20px] lg:px-0 h-full flex flex-col items-center justify-center", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                className: "mt-8 lg:mt-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/wallet-warning.png`,
                    alt: "",
                    height: "150px",
                    width: "150px"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-h7 text-black/50 text-center dark:text-white/50 mt-5",
                children: lang["wallet/you-have-not-connected"]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_7__/* .Button */ .z, {
                className: "contained-primary mt-10 stroke-primary-btn w-full lg:w-auto",
                onClick: handleClickConnectWalletBtn,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_WalletIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        className: "w-[22px] h-[22px]"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "ml-2",
                        children: lang["button/connect-wallet"]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotConnectWallet);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97091:
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
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14613);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53450);
/* harmony import */ var _features_referral_referralSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20465);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useCopyToClipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39414);
/* harmony import */ var _hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6483);
/* harmony import */ var _services_query_endpoints_referral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74476);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73732);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45700);
/* harmony import */ var _LineChartComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74508);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60088);
/* harmony import */ var _bases_SelectBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31114);
/* harmony import */ var _bases_Tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(67517);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61103);
/* harmony import */ var _icons_SGTIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(16779);
/* harmony import */ var _icons_SRTIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(68387);
/* harmony import */ var _icons_TooltipIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(77167);
/* harmony import */ var _modals_ReferralLinkTooltIp__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(63531);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_6__, _utils_common__WEBPACK_IMPORTED_MODULE_10__, _utils_format__WEBPACK_IMPORTED_MODULE_11__, _LineChartComponent__WEBPACK_IMPORTED_MODULE_12__, _bases_SelectBox__WEBPACK_IMPORTED_MODULE_14__, _icons_SGTIcon__WEBPACK_IMPORTED_MODULE_17__, _icons_SRTIcon__WEBPACK_IMPORTED_MODULE_18__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_6__, _utils_common__WEBPACK_IMPORTED_MODULE_10__, _utils_format__WEBPACK_IMPORTED_MODULE_11__, _LineChartComponent__WEBPACK_IMPORTED_MODULE_12__, _bases_SelectBox__WEBPACK_IMPORTED_MODULE_14__, _icons_SGTIcon__WEBPACK_IMPORTED_MODULE_17__, _icons_SRTIcon__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const ReferralLinkPanel = ({ className  })=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .TL)();
    const { theme  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const { listReferral , listRefSelectBox , ref , missionStatistics , listMissionReward , tabAnalyticsChart , chartAnalytics ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .CG)((state)=>state.referral);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).state;
    const [isMobile] = (0,_hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_8__/* .useWindowResizeMobile */ .c)(1024);
    const [isCopy, staticCopy] = (0,_hooks_useCopyToClipboard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const [getListReferral] = _services_query_endpoints_referral__WEBPACK_IMPORTED_MODULE_9__/* ["default"].useLazyGetListReferralQuery */ .Z.useLazyGetListReferralQuery();
    const [getListMission] = _services_query_endpoints_referral__WEBPACK_IMPORTED_MODULE_9__/* ["default"].useLazyGetListMissionQuery */ .Z.useLazyGetListMissionQuery();
    const [getRewardEarned] = _services_query_endpoints_referral__WEBPACK_IMPORTED_MODULE_9__/* ["default"].useLazyGetRewardEarnedQuery */ .Z.useLazyGetRewardEarnedQuery();
    const [getChartStatistics] = _services_query_endpoints_referral__WEBPACK_IMPORTED_MODULE_9__/* ["default"].useLazyGetChartStatisticsQuery */ .Z.useLazyGetChartStatisticsQuery();
    const handleChangeRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value)=>{
        dispatch(_features_referral_referralSlice__WEBPACK_IMPORTED_MODULE_5__/* .referralActions.setRef */ .e.setRef(value));
    }, [
        dispatch
    ]);
    const handleClickAddReferral = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_4__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/referral-code",
            propsState: {}
        }));
    }, [
        dispatch
    ]);
    const handleChangeTabAnalytics = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((tab)=>{
        dispatch(_features_referral_referralSlice__WEBPACK_IMPORTED_MODULE_5__/* .referralActions.setTabAnalyticsChart */ .e.setTabAnalyticsChart(tab));
    }, [
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getListReferral(undefined);
        getListMission(undefined);
        getRewardEarned({
            ref
        });
        getChartStatistics({
            type: tabAnalyticsChart,
            ref
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getRewardEarned({
            ref
        });
        getChartStatistics({
            type: tabAnalyticsChart,
            ref
        });
    }, [
        ref
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getChartStatistics({
            type: tabAnalyticsChart,
            ref
        });
    }, [
        tabAnalyticsChart
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        isShadow: false,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("py-6 px-4 lg:px-8 text-[14px]", className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "lg:grid lg:grid-cols-[6fr_1fr] lg:gap-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "!text-h6 font-semibold dark:text-white",
                                children: lang["profile/referral-link"]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-1 text-black/50 dark:text-white/50 font-semibold",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modals_ReferralLinkTooltIp__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_TooltipIcon__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                            fill: theme === "light" ? "black" : "white"
                                        })
                                    }),
                                    "Tip"
                                ]
                            })
                        ]
                    }),
                    !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_13__/* .Button */ .z, {
                        className: "btn outlined-primary !text-[16px]",
                        onClick: handleClickAddReferral,
                        children: lang["profile/btn-add-referral"]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-[6fr_1fr] gap-3 my-[15px]",
                children: listReferral.map((item, index)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full px-[20px] flex items-center gap-8 rounded-[10px] bg-black/5 dark:bg-white/5 min-h-[40px]",
                                children: [
                                    !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-normal text-black/50 dark:text-white/50",
                                        children: lang["profile/referral-link"]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " font-semibold text-black dark:text-white/90",
                                        children: item
                                    })
                                ]
                            }, `referralLink ${index}`),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Tooltip__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                message: isCopy ? "Copied!" : "Copy to clipboard",
                                className: "whitespace-nowrap",
                                positionY: "center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_13__/* .Button */ .z, {
                                    className: "w-full btn contained-primary !text-[16px]",
                                    onClick: ()=>staticCopy(item || ""),
                                    children: lang["button/copy"]
                                })
                            })
                        ]
                    });
                })
            }),
            isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_13__/* .Button */ .z, {
                className: "w-full btn outlined-primary !text-[16px]",
                onClick: handleClickAddReferral,
                children: lang["profile/btn-add-referral"]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-center justify-center gap-6 lg:!grid lg:grid-cols-3 border-dashed border-black/30 dark:border-white/30 lg:border-t-[1px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full col-span-3 mt-[15px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_SelectBox__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            options: listRefSelectBox,
                            defaultValue: ref,
                            disabled: listRefSelectBox.length <= 1,
                            customClassName: "w-full",
                            onChange: (value)=>handleChangeRef(value)
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full h-full px-[20px] py-[15px] flex flex-col border-solid border-[1px] border-black/10 dark:border-white/10 rounded-[10px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full pb-[15px] flex flex-col items-center justify-start gap-[20px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full font-normal text-black/70 dark:text-white/70 text-left",
                                        children: lang["profile/rewards-earned"]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full flex items-center justify-between font-semibold text-black dark:text-white/90",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-4 h-4 min-w-[16px] min-h-[16px] mr-1",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SRTIcon__WEBPACK_IMPORTED_MODULE_18__/* .SRTIcon */ .s, {})
                                                    }),
                                                    "EP"
                                                ]
                                            }),
                                            (0,_utils_format__WEBPACK_IMPORTED_MODULE_11__/* .shortenString */ .Sy)({
                                                str: (0,_utils_format__WEBPACK_IMPORTED_MODULE_11__/* .formatIntBalance */ .qQ)(missionStatistics?.earning.EP, 3),
                                                maxLength: 30
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full flex items-center justify-between font-semibold text-black dark:text-white/90",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-4 h-4 min-w-[16px] min-h-[16px] mr-1",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SGTIcon__WEBPACK_IMPORTED_MODULE_17__/* .SGTIcon */ .$, {})
                                                    }),
                                                    "FLKZ"
                                                ]
                                            }),
                                            (0,_utils_format__WEBPACK_IMPORTED_MODULE_11__/* .shortenString */ .Sy)({
                                                str: (0,_utils_format__WEBPACK_IMPORTED_MODULE_11__/* .formatIntBalance */ .qQ)(missionStatistics?.earning.FLKZ, 3),
                                                maxLength: 30
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full border-t-[1px] border-black/10 dark:border-white/10 pt-[20px] flex flex-col gap-[20px]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-black/70 dark:text-white/70 font-normal",
                                                children: lang["profile/label-click"]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-black dark:text-white/90 font-semibold",
                                                children: missionStatistics?.clickCount.views
                                            })
                                        ]
                                    }),
                                    missionStatistics && Object.keys(missionStatistics.misionCount).map((key, index)=>{
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-black/70 dark:text-white/70 font-normal",
                                                    children: [
                                                        lang["profile/mission"],
                                                        " ",
                                                        index + 1
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-black dark:text-white/90 font-semibold",
                                                    children: [
                                                        missionStatistics.misionCount[key],
                                                        "(",
                                                        Number(missionStatistics.clickCount.views) !== 0 ? index === 0 ? (0,_utils_format__WEBPACK_IMPORTED_MODULE_11__/* .formatIntBalance */ .qQ)(Number(missionStatistics.misionCount[key]) / Number(missionStatistics.clickCount.views) * 100, 2) : Number(missionStatistics.misionCount[Object.keys(missionStatistics.misionCount)[index - 1]]) !== 0 ? (0,_utils_format__WEBPACK_IMPORTED_MODULE_11__/* .formatIntBalance */ .qQ)(Number(missionStatistics.misionCount[key]) / Number(missionStatistics.misionCount[Object.keys(missionStatistics.misionCount)[index - 1]]) * 100, 2) : 0 : 0,
                                                        "% )"
                                                    ]
                                                })
                                            ]
                                        }, `missionProgress ${index}`);
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full h-full px-[20px] py-[15px] flex flex-col gap-[15px] border-solid border-[1px] border-black/10 dark:border-white/10 rounded-[10px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full font-normal text-black/70 dark:text-white/70 text-left",
                                children: lang["profile/mission"]
                            }),
                            listMissionReward.map((item, index)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-black/70 dark:text-white/70 font-normal",
                                            children: [
                                                index + 1,
                                                ".",
                                                (0,_utils_common__WEBPACK_IMPORTED_MODULE_10__/* .convertMissionName */ .Gu)(item.mission)
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-black dark:text-white/90 font-semibold",
                                            children: [
                                                item.reward,
                                                " ",
                                                item.token === "0" ? "EP" : "FLKZ"
                                            ]
                                        })
                                    ]
                                }, `missionReward ${index}`);
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full h-full px-[20px] py-[15px] flex flex-col gap-[15px] border-solid border-[1px] border-black/10 dark:border-white/10 rounded-[10px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full lg:w-fit font-normal text-black/70 dark:text-white/70 text-left",
                                        children: lang["profile/referral-analytics"]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full lg:w-fit flex items-center justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_13__/* .Button */ .z, {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("btn w-[50%] lg:w-fit contained-gray text-[12px]", {
                                                    "!contained-third": tabAnalyticsChart === "weekly"
                                                }),
                                                onClick: ()=>handleChangeTabAnalytics("weekly"),
                                                children: lang["profile/tab-weekly"]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_13__/* .Button */ .z, {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("btn w-[50%] lg;:w-fit contained-gray text-[12px]", {
                                                    "!contained-third": tabAnalyticsChart === "monthly"
                                                }),
                                                onClick: ()=>handleChangeTabAnalytics("monthly"),
                                                children: lang["profile/tab-monthly"]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LineChartComponent__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                chartData: {
                                    label: tabAnalyticsChart === "weekly" ? (0,_utils_common__WEBPACK_IMPORTED_MODULE_10__/* .convertNumbertoDate */ .W)(chartAnalytics.label) : chartAnalytics.label,
                                    data: [
                                        chartAnalytics.flkz,
                                        chartAnalytics.ep
                                    ]
                                },
                                colorStop0: [
                                    "rgba(255, 29, 29, 0.9)",
                                    "rgba(149, 255, 123, 0.9)"
                                ],
                                colorStop1: [
                                    "rgb(255, 29, 29, 0)",
                                    "rgba(149, 255, 123, 0)"
                                ],
                                borderColor: [
                                    "rgba(255, 29, 29, 0.8)",
                                    "rgba(149, 255, 123, 0.8)"
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReferralLinkPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14159:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethers_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12522);
/* harmony import */ var ethers_lib_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers_lib_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37674);
/* harmony import */ var _config_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71352);
/* harmony import */ var _constants_chains__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23486);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14613);
/* harmony import */ var _features_account_account__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29335);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53450);
/* harmony import */ var _features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70355);
/* harmony import */ var _functions_sightnWallet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51716);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useBlockNumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(48581);
/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70695);
/* harmony import */ var _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7334);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(45700);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(60088);
/* harmony import */ var _bases_SelectBox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(31114);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(61103);
/* harmony import */ var _icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(52577);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_functions_sightnWallet__WEBPACK_IMPORTED_MODULE_11__, _hooks_common__WEBPACK_IMPORTED_MODULE_12__, _hooks_useBlockNumber__WEBPACK_IMPORTED_MODULE_13__, _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_15__, _utils_format__WEBPACK_IMPORTED_MODULE_16__, _bases_SelectBox__WEBPACK_IMPORTED_MODULE_18__]);
([_functions_sightnWallet__WEBPACK_IMPORTED_MODULE_11__, _hooks_common__WEBPACK_IMPORTED_MODULE_12__, _hooks_useBlockNumber__WEBPACK_IMPORTED_MODULE_13__, _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_15__, _utils_format__WEBPACK_IMPORTED_MODULE_16__, _bases_SelectBox__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const SightnWallet = ({ contextWeb3 , chainId  })=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_12__/* .useAppDispatch */ .TL)();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).state;
    const { account: accountWallet , library , privateKey  } = (0,_hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_15__/* .useConnectWallet */ .O)();
    const { transactionStatus  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_12__/* .useAppSelector */ .CG)((state)=>state.wallet);
    const contractTMG = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_14__/* .useTMGInternalContract */ .QS)(chainId, privateKey);
    const latestBlock = (0,_hooks_useBlockNumber__WEBPACK_IMPORTED_MODULE_13__/* .useBlockNumber */ .O)(chainId);
    const { 0: listAddressOption , 1: setListAddressOption  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const { 0: network , 1: setNetwork  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_constants_chains__WEBPACK_IMPORTED_MODULE_6__/* .ChainId["GÖRLI"] */ .a["GÖRLI"]);
    const { 0: account , 1: setAccount  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: networkScan , 1: setNetworkScan  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(`${_config_network__WEBPACK_IMPORTED_MODULE_5__/* .NETWORK_SCAN */ .wl[chainId]}${accountWallet}`);
    const { 0: balance , 1: setBalance  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: balanceSGT , 1: setBalanceSGT  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: isCreating , 1: setIsCreating  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const getDataLocal = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        const listAccount = localStorage.getItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_4__/* .LOCAL_STORAGE_KEYS.listAccountStorage */ .d.listAccountStorage);
        if (listAccount) {
            const listAccountConvert = JSON.parse(listAccount);
            const listArrAccount = listAccountConvert.map((ele)=>{
                const decodeEle = (0,_functions_sightnWallet__WEBPACK_IMPORTED_MODULE_11__/* .decrypt */ .pe)(ele);
                return {
                    label: (0,_utils_format__WEBPACK_IMPORTED_MODULE_16__/* .shortenAddress */ .Xn)({
                        str: decodeEle.address,
                        start: 10
                    }),
                    value: decodeEle.address,
                    keyAccount: decodeEle.privateKey
                };
            });
            setListAddressOption(listArrAccount);
            setAccount(accountWallet ? accountWallet : listArrAccount[0].value);
        }
    }, [
        accountWallet
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getDataLocal();
    }, [
        getDataLocal
    ]);
    const handleChangeAccount = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((address)=>{
        const walletInfo = listAddressOption.find((ele)=>ele.value === address);
        if (walletInfo && walletInfo?.keyAccount) {
            dispatch(_features_account_account__WEBPACK_IMPORTED_MODULE_8__/* .accountSliceActions.changeAccount */ .w.changeAccount(walletInfo.keyAccount));
            const encryptedPrivateKey = (0,_functions_sightnWallet__WEBPACK_IMPORTED_MODULE_11__/* .encrypt */ .HI)(walletInfo.keyAccount);
            localStorage.setItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_4__/* .LOCAL_STORAGE_KEYS.currentAccount */ .d.currentAccount, JSON.stringify(encryptedPrivateKey));
            setBalance("");
            setBalanceSGT("");
        }
    }, [
        listAddressOption,
        dispatch
    ]);
    const handleChangeNetwork = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((value)=>{
        setNetwork(+value);
        setNetworkScan(`${_config_network__WEBPACK_IMPORTED_MODULE_5__/* .NETWORK_SCAN */ .wl[+value]}${accountWallet}`);
        dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_10__/* .walletActions.handleSelectChainId */ .vB.handleSelectChainId(+value));
    }, [
        dispatch,
        accountWallet
    ]);
    const handleCreateAccount = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_9__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/confirm-create-account",
            propsState: {}
        }));
    }, [
        dispatch
    ]);
    const handleImportAccount = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_9__/* .modalSliceActions.shiftFromQueue */ .E.shiftFromQueue());
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_9__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/import-account",
            propsState: {}
        }));
    }, [
        dispatch
    ]);
    const handleSendToken = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{
        const currentChainIdProps = _config_network__WEBPACK_IMPORTED_MODULE_5__/* .SUPPORTED_NETWORKS */ .bA[network];
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_9__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/send-token",
            propsState: {
                networkToken: currentChainIdProps.nativeCurrency.symbol,
                balanceOfNetwork: balance,
                chainId,
                balanceSGT
            }
        }));
    }, [
        dispatch,
        network,
        balance,
        chainId,
        balanceSGT
    ]);
    const getBalanceUser = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{
        if (library.connection.url !== "metamask") {
            const rawBalance = await library.getBalance(accountWallet);
            const balance = (0,ethers_lib_utils__WEBPACK_IMPORTED_MODULE_1__.formatEther)(rawBalance);
            setBalance(balance);
            if (contractTMG) {
                const balanceSGT = await contractTMG.balanceOf(accountWallet);
                setBalanceSGT((0,_utils_format__WEBPACK_IMPORTED_MODULE_16__/* .formatBalance */ .az)(balanceSGT));
            }
        }
    }, [
        library,
        accountWallet,
        contractTMG
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setNetwork(chainId);
    }, [
        chainId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setNetworkScan(`${_config_network__WEBPACK_IMPORTED_MODULE_5__/* .NETWORK_SCAN */ .wl[network]}${accountWallet}`);
    }, [
        accountWallet,
        network
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getBalanceUser();
    }, [
        transactionStatus,
        library,
        accountWallet,
        latestBlock
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        className: "!rounded-none lg:!rounded-2xl mt-[10px] lg:mt-0 h-fit w-full rounded-t-[10px] rounded-b-[10px] p-6 lg:px-[30px] lg:pb-[60px] lg:py-[25px] dark:text-white",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "hidden lg:flex flex-row justify-end lg:justify-between item-center pb-[7px] border-b-0 lg:border-b-[1px] border-b-[#0000001a] text-[18px] leading-[25px] font-[600] ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden lg:block",
                        children: lang["wallet/sightn-wallet"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "underline",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            rel: "noreferrer",
                            target: "_blank",
                            href: networkScan,
                            children: lang["sightn-wallet/history"]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto lg:w-[100%] lg:max-w-[330px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-[10px] lg:gap-[20px] items-center justify-center lg:justify-center mb-[20px] lg:mb-[32px] lg:mt-[29px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/star-icon.svg`,
                                width: 33,
                                height: 33,
                                alt: "star"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-[25px] lg:text-[30px] font-[900] dark:text-white",
                                children: lang["sightn-wallet/title"]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex lg:hidden flex-row justify-end lg:justify-between item-center mb-[28px] border-b-0 lg:border-b-[1px] border-b-[#0000001a] text-[18px] leading-[25px] font-[600] ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hidden lg:block",
                                children: lang["wallet/sightn-wallet"]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "underline",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    rel: "noreferrer",
                                    target: "_blank",
                                    href: networkScan,
                                    children: lang["sightn-wallet/history"]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col gap-[28px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mb-[5px] leading-[18px] text-[#000000B2] dark:text-[#FFFFFFB2]",
                                        children: lang["sightn-wallet/current-account"]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_SelectBox__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        options: listAddressOption,
                                        defaultValue: account,
                                        customClassName: "lg:min-w-[180px] min-w-[130px] border-[2px] border-[#0000001A] dark:bg-[#393939] dark:border-[#393939]",
                                        showSelected: true,
                                        darkThemeDownIcon: true,
                                        optionsClass: "!overflow-auto max-h-[300px]",
                                        onChange: handleChangeAccount
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mb-[5px] text-[#000000B2] dark:text-[#FFFFFFB2]",
                                        children: lang["sightn-wallet/current-balance"]
                                    }),
                                    balance && balanceSGT ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-[#0000000D] dark:bg-[#FFFFFF0D] rounded-[10px] px-[16px] py-[10px]",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mb-[5px]",
                                                children: [
                                                    balance,
                                                    " ",
                                                    _config_network__WEBPACK_IMPORTED_MODULE_5__/* .SUPPORTED_NETWORKS */ .bA[network]?.nativeCurrency.symbol
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    (0,_utils_format__WEBPACK_IMPORTED_MODULE_16__/* .formatIntBalance */ .qQ)(balanceSGT),
                                                    " FLKZ"
                                                ]
                                            })
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-center min-h-[73px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-icon-2xl h-icon-2xl animate-spin rounded-full border-4 border-white border-t-4 border-t-red-500"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pt-[30px] border-t-[1px] border-[#0000001A] dark:border-[#FFFFFF0D] flex flex-col gap-[15px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_17__/* .Button */ .z, {
                                        className: "leading-[22px] contained-primary !text-base h-10 w-full lg:px-5 lg:w-auto lg:min-w-[150px]",
                                        size: "sm",
                                        disabled: !balance || !balanceSGT,
                                        onClick: handleSendToken,
                                        children: lang["sightn-wallet/send-token"]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_17__/* .Button */ .z, {
                                        className: "leading-[22px] dark:border-[#4E5156] dark:text-[#898989] outlined-gray text-[#555555] !text-base h-10 w-full lg:px-5 lg:w-auto lg:min-w-[150px]",
                                        size: "sm",
                                        onClick: handleCreateAccount,
                                        children: [
                                            isCreating && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-icon-sm h-icon-sm grow-0 shrink-0 mr-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                                    className: "fill-icon animate-spin"
                                                })
                                            }),
                                            isCreating ? lang["sightn-wallet/creating-account"] : lang["sightn-wallet/create-account"]
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_17__/* .Button */ .z, {
                                        className: "leading-[22px] dark:border-[#4E5156] dark:text-[#898989] outlined-gray text-[#555555] !text-base h-10 w-full lg:px-5 lg:w-auto lg:min-w-[150px]",
                                        size: "sm",
                                        onClick: handleImportAccount,
                                        children: lang["sightn-wallet/import-account"]
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SightnWallet);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29297:
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
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85277);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45700);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61103);
/* harmony import */ var _icons_SGTIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16779);
/* harmony import */ var _icons_SRTIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68387);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_3__, _utils_format__WEBPACK_IMPORTED_MODULE_4__, _icons_SGTIcon__WEBPACK_IMPORTED_MODULE_6__, _icons_SRTIcon__WEBPACK_IMPORTED_MODULE_7__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_3__, _utils_format__WEBPACK_IMPORTED_MODULE_4__, _icons_SGTIcon__WEBPACK_IMPORTED_MODULE_6__, _icons_SRTIcon__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const SpendingWalletBalance = ()=>{
    const { myProfile: { userProfile  } ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .CG)((state)=>state.profile);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).state;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        isShadow: false,
        className: "!rounded-none lg:!rounded-xl p-[20px] lg:py-6 lg:px-8 lg:h-[70vh] w-full lg:w-auto overflow-hidden",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-h6 font-semibold dark:text-white leading-[25px]",
                children: lang["wallet/spending-wallet"]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-[15px] lg:mt-7 border-[1px] flex flex-col gap-[15px] border-[#0000001A] rounded-[10px] p-[20px] dark:border-white/10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-[#00000080] leading-[16px] dark:text-white/50",
                        children: lang["common/token"]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row items-center justify-between leading-[16px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row items-center text-base leading-[16px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-5 h-5",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SRTIcon__WEBPACK_IMPORTED_MODULE_7__/* .SRTIcon */ .s, {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-black font-[600] dark:text-white/90 ml-2",
                                        children: "EP"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font-semibold text/black dark:text-white",
                                children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_4__/* .formatIntBalance */ .qQ)(userProfile?.RTAvailable)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row items-center justify-between leading-[16px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row items-center text-base leading-[16px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-5 h-5",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SGTIcon__WEBPACK_IMPORTED_MODULE_6__/* .SGTIcon */ .$, {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-black font-[600] dark:text-white/90 ml-2",
                                        children: "FLKZ"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font-semibold text/black dark:text-white",
                                children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_4__/* .formatIntBalance */ .qQ)(userProfile?.GTAvailable)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-[15px] lg:mt-5 border-[1px] flex flex-col gap-[15px] border-[#0000001A] rounded-[10px] p-[20px] dark:border-white/10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-[#00000080] leading-[16px] dark:text-white/50",
                        children: lang["common/nft"]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row items-center justify-between leading-[16px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-row items-center text-base leading-[16px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-black dark:text-white/90",
                                    children: lang["nft/characters"]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font-semibold text/black dark:text-white",
                                children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_4__/* .formatIntBalance */ .qQ)(userProfile?.charactersOwned)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row items-center justify-between leading-[16px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-row items-center text-base leading-[16px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-black dark:text-white/90",
                                    children: lang["nft/equipment"]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font-semibold text/black dark:text-white",
                                children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_4__/* .formatIntBalance */ .qQ)(userProfile?.quipmentOwned)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row items-center justify-between leading-[16px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-row items-center text-base leading-[16px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-black dark:text-white/90",
                                    children: lang["nft/badges"]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font-semibold text/black dark:text-white",
                                children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_4__/* .formatIntBalance */ .qQ)(userProfile?.badgesOwned)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpendingWalletBalance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92993:
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
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14613);
/* harmony import */ var _features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70355);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85277);
/* harmony import */ var _icons_TransferIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_5__]);
_hooks_common__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const TransferHeader = ({ className  })=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_5__/* .useAppDispatch */ .TL)();
    const { transferFromGlobalCoin  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .CG)((state)=>state.wallet);
    const { theme  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).state;
    const handleClickTransferBtn = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_4__/* .walletActions.handleSwitchSwap */ .vB.handleSwitchSwap());
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative mb-[24px]", className),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-full h-[70px] lg:h-[70px] flex"),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("h-full box-border border-[2px] bg-[#FAEEE5] dark:bg-[#49443B] rounded-l-xl border-r-0 w-full", theme === "light" ? "border-[#F5E5D9]" : "border-[#49443B]", "px-4 lg:px-10 grid grid-cols-2 items-center"),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-h7 text-black/50 dark:text-[#898989] hidden lg:block",
                                    children: [
                                        lang["wallet/from"],
                                        ":"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-base lg:text-h6 font-semibold dark:text-white",
                                    children: transferFromGlobalCoin ? `${lang["swap/flkz"]}` : `${lang["swap/ep"]}`
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("border-t-[35px] border-b-[35px] border-t-transparent border-b-transparent", "border-l-[35px]", theme === "light" ? "border-[#F5E5D9]" : "border-[#49443B]", "relative"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("border-t-[33px] border-b-[33px] border-t-transparent border-b-transparent", "border-l-[33px]", "absolute -top-[33px] -left-[35px]", theme === "light" ? "border-[#FAEEE5]" : "border-[#49443B]")
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-8"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("border-t-[35px] border-b-[35px] border-t-transparent border-b-transparent", "border-r-[35px]", theme === "light" ? "border-[#F5E5D9]" : "border-[#49443B]", "relative"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("border-t-[33px] border-b-[33px] border-t-transparent border-b-transparent", "border-r-[33px]", "absolute -top-[33px] -right-[35px]", theme === "light" ? "border-[#FAEEE5]" : "border-[#49443B]")
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("h-full box-border border-[2px] bg-[#FAEEE5] dark:bg-[#49443B] rounded-r-xl border-l-0 w-full", theme === "light" ? "border-[#F5E5D9]" : "border-[#49443B]", "px-4 lg:px-10 items-center", "flex justify-between", "grid grid-cols-2"),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-h7 text-black/50 dark:text-[#898989] hidden lg:block",
                                    children: [
                                        lang["wallet/to"],
                                        ":"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-base lg:text-h6 font-semibold dark:text-white", "flex items-center gap-4"),
                                    children: !transferFromGlobalCoin ? `${lang["swap/flkz"]}` : `${lang["swap/ep"]}`
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute top-0 left-0 flex justify-center w-full items-center h-[100%]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[41px] h-[41px] lg:w-[70px] lg:h-[70px] bg-main/10 rounded-[50%] p-[3px] lg:p-[5px] cursor-pointer",
                        onClick: handleClickTransferBtn,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "btn-transfer w-full h-full rounded-[50%] flex items-center justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_TransferIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                className: "fill-white"
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransferHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24331:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49766);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _classes_Contract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3821);
/* harmony import */ var _config_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71352);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14613);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53450);
/* harmony import */ var _features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70355);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_swap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32550);
/* harmony import */ var _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93992);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45700);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60088);
/* harmony import */ var _bases_InputAmount__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(49508);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(61103);
/* harmony import */ var _icons_SGTIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(16779);
/* harmony import */ var _icons_SRTIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(68387);
/* harmony import */ var _icons_SwapArrowDown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(83774);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([bignumber_js__WEBPACK_IMPORTED_MODULE_1__, _hooks_common__WEBPACK_IMPORTED_MODULE_9__, _utils_format__WEBPACK_IMPORTED_MODULE_12__, _icons_SGTIcon__WEBPACK_IMPORTED_MODULE_16__, _icons_SRTIcon__WEBPACK_IMPORTED_MODULE_17__]);
([bignumber_js__WEBPACK_IMPORTED_MODULE_1__, _hooks_common__WEBPACK_IMPORTED_MODULE_9__, _utils_format__WEBPACK_IMPORTED_MODULE_12__, _icons_SGTIcon__WEBPACK_IMPORTED_MODULE_16__, _icons_SRTIcon__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const SwapPanel = ({ contextWeb3  })=>{
    const { account  } = contextWeb3;
    // const [configRate, configRateResult] = swapApi.useLazyConfigRateQuery();
    const [configPool, configPoolResult] = _services_query_endpoints_swap__WEBPACK_IMPORTED_MODULE_10__/* ["default"].useLazyConfigPoolQuery */ .Z.useLazyConfigPoolQuery();
    const [getProfile] = _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_11__/* ["default"].useLazyGetProfileQuery */ .Z.useLazyGetProfileQuery();
    const [validateSwap, { isSuccess , isError , error  }] = _services_query_endpoints_swap__WEBPACK_IMPORTED_MODULE_10__/* ["default"].useValidateSwapMutation */ .Z.useValidateSwapMutation();
    // const [pool, poolResult] = swapApi.useLazyPoolQuery();
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppDispatch */ .TL)();
    const { transferFromGlobalCoin , requestStatus , networkClaim , errorMsgSwap  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppSelector */ .CG)((state)=>state.wallet);
    const { myProfile: { userProfile  } ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppSelector */ .CG)((state)=>state.profile);
    const { 0: errorMsg , 1: setErrMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: balanceOf , 1: setBalanceOf  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("0");
    const { 0: amount , 1: setAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: srtValue , 1: setSrtValue  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: exchangeRate , 1: setExchangeRate  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const { 0: swapRate , 1: setSwapRate  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    // const [currentPool, setCurrentPool] = useState<number>(0);
    // const [initialPool, setInitialPool] = useState<number>(0);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).state;
    const { theme  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const validateInput = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        let errorMsg = "";
        if (transferFromGlobalCoin ? new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](+amount).gt(balanceOf) : userProfile && new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](+srtValue).gt(userProfile.RTAvailable)) {
            errorMsg = "Insufficient Balance";
        } else if ((transferFromGlobalCoin ? srtValue : amount).length > 20) {
            errorMsg = `The ${transferFromGlobalCoin ? "SRT" : "SGT"} length is over the maximum length`;
        } else {
            errorMsg = "";
        }
        return errorMsg;
    }, [
        amount,
        balanceOf,
        srtValue,
        transferFromGlobalCoin,
        userProfile
    ]);
    const calculateData = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((isInputReverted, formula, value)=>{
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](!isInputReverted ? +value * formula : +value / formula).toString();
    }, []);
    const calculateFromSrt = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((value, isInputReverted)=>{
        // const formula = (1 - swapRate) * exchangeRate * (currentPool / initialPool);
        const formula = (1 - swapRate) * exchangeRate;
        return calculateData(isInputReverted, formula, value);
    }, [
        exchangeRate,
        swapRate,
        calculateData
    ]);
    const calculateFromSgt = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((value, isInputReverted)=>{
        // const formula = (1 - swapRate) * (initialPool / currentPool) * (1 / exchangeRate);
        const formula = (1 - swapRate) * (1 / exchangeRate);
        return calculateData(isInputReverted, formula, value);
    }, [
        swapRate,
        exchangeRate,
        calculateData
    ]);
    const calculateToken = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((fromSrt = false, value, isInputReverted = false)=>{
        return fromSrt ? calculateFromSrt(value, isInputReverted) : calculateFromSgt(value, isInputReverted);
    }, [
        calculateFromSrt,
        calculateFromSgt
    ]);
    const convertValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((value)=>{
        return +value.replaceAll(",", "");
    }, []);
    const handleChangeValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((tokenId, value = "", isInputReverted = false)=>{
        const valueConvert = convertValue(value);
        const calculate = calculateToken(tokenId === _classes_Contract__WEBPACK_IMPORTED_MODULE_4__/* .ETypeUpdateRequest.TOKEN_RT */ .y.TOKEN_RT, valueConvert, isInputReverted);
        if (tokenId === _classes_Contract__WEBPACK_IMPORTED_MODULE_4__/* .ETypeUpdateRequest.TOKEN_RT */ .y.TOKEN_RT) {
            setSrtValue(!isInputReverted ? valueConvert.toString() : calculate);
            setAmount(!isInputReverted ? calculate : valueConvert.toString());
        } else {
            setAmount(!isInputReverted ? valueConvert.toString() : calculate);
            setSrtValue(!isInputReverted ? calculate : valueConvert.toString());
        }
    }, [
        calculateToken,
        convertValue
    ]);
    const setDataConfigPool = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (configPoolResult.data) {
            const { data  } = configPoolResult.data;
            if (data) {
                const { exchangeRate , swapRate  } = data;
                setExchangeRate(+exchangeRate / 100);
                setSwapRate(+swapRate / 100);
            }
        }
    }, [
        configPoolResult
    ]);
    // const setDataConfigRate = useCallback(() => {
    //     if (configRateResult.data) {
    //         const { data } = configRateResult.data;
    //         const config = data[0];
    //         if (config) {
    //             const { exchangeRate, swapRate } = config;
    //             setExchangeRate(+exchangeRate / 100);
    //             setSwapRate(+swapRate / 100);
    //         }
    //     }
    // }, [configRateResult]);
    // const setDataPool = useCallback(() => {
    //     if (poolResult.data) {
    //         const { data } = poolResult.data;
    //         const { currentValue, initialValue } = data;
    //         setCurrentPool(+convertBigNumber(currentValue));
    //         setInitialPool(+convertBigNumber(initialValue));
    //     }
    // }, [poolResult]);
    // const convertBigNumber = (number: string) => {
    //     return new BigNumber(number).toFixed();
    // };
    const handleSwap = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        // if (!amount || !srtValue) return;
        if (!transferFromGlobalCoin) {
            validateSwap({
                amount
            });
        } else {
            dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_7__/* .modalSliceActions.addToQueue */ .E.addToQueue({
                type: "popup/confirm-swap",
                propsState: {
                    transferFromGlobalCoin,
                    amount,
                    srtValue,
                    asset: transferFromGlobalCoin ? _classes_Contract__WEBPACK_IMPORTED_MODULE_4__/* .ETypeUpdateRequest.TOKEN_GT */ .y.TOKEN_GT : _classes_Contract__WEBPACK_IMPORTED_MODULE_4__/* .ETypeUpdateRequest.TOKEN_RT */ .y.TOKEN_RT,
                    networkClaim
                }
            }));
        }
    }, [
        dispatch,
        amount,
        validateSwap,
        transferFromGlobalCoin,
        networkClaim,
        srtValue
    ]);
    const handleSwitchToken = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        // if (srtValue || amount) {
        //     const tokenId = transferFromGlobalCoin
        //         ? ETypeUpdateRequest.TOKEN_GT
        //         : ETypeUpdateRequest.TOKEN_RT;
        //     handleChangeValue(tokenId, transferFromGlobalCoin ? amount : srtValue);
        // }
        // getProfile(undefined);
        // configRate(undefined);
        // pool(undefined);
        setAmount("");
        setSrtValue("");
        return;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (configPoolResult.data && configPoolResult.data.success) {
            setDataConfigPool();
        }
    // if (configRateResult.data && configRateResult.data.success) {
    //     setDataConfigRate();
    // }
    // if (poolResult.data && poolResult.data.success) {
    //     setDataPool();
    // }
    }, [
        configPoolResult
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        // configRate(undefined);
        // pool(undefined);
        configPool(undefined);
    }, [
        configPool
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        (async ()=>{
            if (!userProfile) return setBalanceOf("0");
            setBalanceOf(userProfile.GTAvailable);
        })();
    }, [
        account,
        userProfile
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setErrMsg(validateInput());
    }, [
        balanceOf,
        amount,
        srtValue,
        userProfile,
        transferFromGlobalCoin
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (requestStatus) {
            getProfile(undefined);
            configPool(undefined);
            // configRate(undefined);
            // pool(undefined);
            setAmount("");
            setSrtValue("");
            return;
        }
    }, [
        requestStatus,
        getProfile,
        configPool
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        return ()=>{
            dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.handleSetNetworkClaim */ .vB.handleSetNetworkClaim(_config_network__WEBPACK_IMPORTED_MODULE_5__/* .DEFAULT_CHAIN_ID */ .rC));
        };
    }, [
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        handleSwitchToken();
    }, [
        transferFromGlobalCoin
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        handleChangeValue((+transferFromGlobalCoin).toString(), transferFromGlobalCoin ? amount : srtValue);
    }, [
        exchangeRate,
        swapRate
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!transferFromGlobalCoin) {
            const interval = setInterval(async ()=>{
                // await configRate(undefined);
                await configPool(undefined);
                setErrMsg("");
            }, +(process.env.NEXT_PUBLIC_INTERVAL_MS || 60000));
            return ()=>{
                clearInterval(interval);
            };
        }
    }, [
        transferFromGlobalCoin,
        configPool
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (isSuccess) {
            dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_7__/* .modalSliceActions.addToQueue */ .E.addToQueue({
                type: "popup/confirm-swap",
                propsState: {
                    transferFromGlobalCoin,
                    amount,
                    srtValue,
                    asset: transferFromGlobalCoin ? _classes_Contract__WEBPACK_IMPORTED_MODULE_4__/* .ETypeUpdateRequest.TOKEN_GT */ .y.TOKEN_GT : _classes_Contract__WEBPACK_IMPORTED_MODULE_4__/* .ETypeUpdateRequest.TOKEN_RT */ .y.TOKEN_RT,
                    networkClaim
                }
            }));
        }
    }, [
        isSuccess,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (isError && error) {
            if ("status" in error) {
                const errMsgRaw = "error" in error ? error.error : JSON.stringify(error.data);
                const title = JSON.parse(errMsgRaw).message[0];
                setErrMsg(title);
            }
        }
    }, [
        isError,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (errorMsgSwap) {
            setErrMsg(errorMsgSwap);
        }
    }, [
        errorMsgSwap
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_Panel__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        className: "!rounded-none lg:!rounded-2xl h-full w-full rounded-t-[10px] rounded-b-[10px] p-6 lg:p-11",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mx-auto w-[100%] lg:w-max lg:max-w-[376px]",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between mb-[4px] items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${theme === "light" ? "text-[#000000]" : "text-[#ffffff80]"} opacity-[0.7]`,
                            children: transferFromGlobalCoin ? `${lang["swap/flkz"]}` : `${lang["swap/ep"]}`
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-[8px] text-[14px] items-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${theme === "light" ? "text-[#000000]" : "text-[#ffffff80]"} opacity-[0.7]`,
                                    children: [
                                        lang["wallet/balance"],
                                        ":"
                                    ]
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `${theme === "light" ? "text-[#00000080]" : "text-[#ffffff4d]"}`,
                                    children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_12__/* .formatIntBalance */ .qQ)(transferFromGlobalCoin ? balanceOf : userProfile?.RTAvailable, 6)
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col lg:flex-row items-stretch lg:items-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative justify-self-end self-center w-[100%]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_InputAmount__WEBPACK_IMPORTED_MODULE_14__/* .InputAmount */ .Z, {
                                classNameContainer: "!w-[100%]",
                                className: "text-base ml-[30px]",
                                decimalScale: 4,
                                placeholder: "0.0",
                                value: new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](transferFromGlobalCoin ? amount : srtValue).toFixed(),
                                onKeyUp: (event)=>handleChangeValue(transferFromGlobalCoin ? "1" : "0", event.target.value),
                                thousandSeparator: ",",
                                isAllowed: ({ value  })=>{
                                    return value.length <= 16;
                                },
                                thousandsGroupStyle: "thousand",
                                endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_13__/* .Button */ .z, {
                                    className: "contained-third h-[30px] rounded-[6px] !text-h10",
                                    onClick: ()=>handleChangeValue(transferFromGlobalCoin ? "1" : "0", transferFromGlobalCoin ? balanceOf : userProfile ? userProfile.RTAvailable : ""),
                                    children: lang["button/all"]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("btn rounded-none border-0 flex justify-center items-center absolute left-0 top-0", "h-full ml-[14px] cursor-default"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[24px] h-[24px]",
                                    children: transferFromGlobalCoin ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SGTIcon__WEBPACK_IMPORTED_MODULE_16__/* .SGTIcon */ .$, {
                                        className: "dark:fill-gray-3/[.83] fill-black/20"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SRTIcon__WEBPACK_IMPORTED_MODULE_17__/* .SRTIcon */ .s, {
                                        className: "dark:fill-gray-3/[.83] fill-black/20"
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col lg:flex-row items-center lg:justify-center my-[8px]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SwapArrowDown__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        fillColor: theme === "dark" ? "#ffffff1a" : "white"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between mb-[4px] items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${theme === "light" ? "text-[#000000]" : "text-[#ffffff80]"} opacity-[0.7]`,
                            children: !transferFromGlobalCoin ? `${lang["swap/flkz"]}` : `${lang["swap/ep"]}`
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-[8px] text-[14px] items-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${theme === "light" ? "text-[#000000]" : "text-[#ffffff80]"} opacity-[0.7]`,
                                    children: [
                                        lang["wallet/balance"],
                                        ":"
                                    ]
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `${theme === "light" ? "text-[#00000080]" : "text-[#ffffff4d]"}`,
                                    children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_12__/* .formatIntBalance */ .qQ)(!transferFromGlobalCoin ? balanceOf : userProfile?.RTAvailable, 6)
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col lg:flex-row items-stretch lg:items-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative justify-self-end self-center w-[100%]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_InputAmount__WEBPACK_IMPORTED_MODULE_14__/* .InputAmount */ .Z, {
                                classNameContainer: "!w-[100%]",
                                className: "text-base ml-[30px]",
                                decimalScale: 3,
                                placeholder: "0.0",
                                value: new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](transferFromGlobalCoin ? srtValue : amount).toFixed(),
                                onKeyUp: (event)=>handleChangeValue(transferFromGlobalCoin ? "1" : "0", event.target.value, true),
                                thousandSeparator: ",",
                                isAllowed: ({ value  })=>{
                                    return value.length <= 20;
                                },
                                thousandsGroupStyle: "thousand",
                                endAdornment: // <Button
                                //     className="contained-third h-[30px] rounded-[6px] !text-h10"
                                //     onClick={() =>
                                //         handleChangeValue(
                                //             transferFromGlobalCoin ? "1" : "0",
                                //             transferFromGlobalCoin
                                //                 ? userProfile
                                //                     ? userProfile.RTAvailable
                                //                     : ""
                                //                 : balanceOf,
                                //             true
                                //         )
                                //     }
                                // >
                                //     {lang["button/all"]}
                                // </Button>
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("btn rounded-none border-0 flex justify-center items-center absolute left-0 top-0", "h-full ml-[14px] cursor-default"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[24px] h-[24px]",
                                    children: !transferFromGlobalCoin ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SGTIcon__WEBPACK_IMPORTED_MODULE_16__/* .SGTIcon */ .$, {
                                        className: "dark:fill-gray-3/[.83] fill-black/20"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SRTIcon__WEBPACK_IMPORTED_MODULE_17__/* .SRTIcon */ .s, {
                                        className: "dark:fill-gray-3/[.83] fill-black/20"
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "my-[20px] text-main text-h9 lg:ml-32 h-[20px] text-right",
                    children: errorMsg
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_13__/* .Button */ .z, {
                    className: "contained-primary !text-base h-10 !px-5 w-[100%]",
                    size: "sm",
                    disabled: errorMsg.length > 0 || !amount || !srtValue || +amount <= 0 || +srtValue <= 0,
                    onClick: handleSwap,
                    children: lang["button/swap"]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${theme === "light" ? "text-[#000000]" : "text-[#ffffffcc]"} mt-[35px]`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mb-[8px] font-bold text-[14px]",
                            children: lang["swap/reminder"]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "list-disc ml-[24px] text-[14px] leading-[22px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "marker:text-[8px]",
                                    children: lang["swap/description-1"]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "marker:text-[8px]",
                                    children: lang["swap/description-2"]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwapPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20199:
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
/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37674);
/* harmony import */ var _constants_contractAddress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99304);
/* harmony import */ var _constants_transactions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62218);
/* harmony import */ var _constants_walletSelection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41202);
/* harmony import */ var _constants_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56091);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14613);
/* harmony import */ var _features_contract_contractSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63794);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53450);
/* harmony import */ var _features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70355);
/* harmony import */ var _features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85750);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70695);
/* harmony import */ var _hooks_useDetectMobileDevice__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(77259);
/* harmony import */ var _hooks_useInViewPort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(22052);
/* harmony import */ var _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7334);
/* harmony import */ var _services_query_endpoints_badge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(51897);
/* harmony import */ var _services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(86588);
/* harmony import */ var _services_query_endpoints_equipment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2073);
/* harmony import */ var _services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(17827);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(73732);
/* harmony import */ var _utils_wagmiActions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(50312);
/* harmony import */ var _BadgeItem__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(51095);
/* harmony import */ var _CharacterItem__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(69380);
/* harmony import */ var _EquipmentItem__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(8239);
/* harmony import */ var _TransferNftsFilters__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(41160);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(60088);
/* harmony import */ var _commons_NoItemsComponent__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(50072);
/* harmony import */ var _icons_ArrowGrowthIcon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(51131);
/* harmony import */ var _icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(52577);
/* harmony import */ var _icons_TransferIcon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(8573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_13__, _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_16__, _utils_common__WEBPACK_IMPORTED_MODULE_21__, _utils_wagmiActions__WEBPACK_IMPORTED_MODULE_22__, _BadgeItem__WEBPACK_IMPORTED_MODULE_23__, _CharacterItem__WEBPACK_IMPORTED_MODULE_24__, _EquipmentItem__WEBPACK_IMPORTED_MODULE_25__, _TransferNftsFilters__WEBPACK_IMPORTED_MODULE_26__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_13__, _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_16__, _utils_common__WEBPACK_IMPORTED_MODULE_21__, _utils_wagmiActions__WEBPACK_IMPORTED_MODULE_22__, _BadgeItem__WEBPACK_IMPORTED_MODULE_23__, _CharacterItem__WEBPACK_IMPORTED_MODULE_24__, _EquipmentItem__WEBPACK_IMPORTED_MODULE_25__, _TransferNftsFilters__WEBPACK_IMPORTED_MODULE_26__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

































const TransferNfts = ({ contextWeb3  })=>{
    const isMobile = (0,_hooks_useDetectMobileDevice__WEBPACK_IMPORTED_MODULE_32__/* .useDetectMobileDevice */ .c)();
    const { myProfile: { userProfile  } ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_13__/* .useAppSelector */ .CG)((state)=>state.profile);
    const { filtersTransferNfts , transferFromCryptoWallet , nftsList , nftsListSelected , selectedChain ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_13__/* .useAppSelector */ .CG)((state)=>state.wallet);
    const { timeStampAction , characterMaxLevel  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_13__/* .useAppSelector */ .CG)((state)=>state.nft);
    const { transactions  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_13__/* .useAppSelector */ .CG)((state)=>state.contract);
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const { account , chainId , isSupportedNetwork , privateKey  } = (0,_hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_16__/* .useConnectWallet */ .O)();
    const walletSelected = localStorage.getItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_3__/* .LOCAL_STORAGE_KEYS.wallet */ .d.wallet);
    const [getListWalletNft, { isFetching  }] = _services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_20__/* ["default"].useLazyGetListMyNftQuery */ .Z.useLazyGetListMyNftQuery();
    const [getCharacterList, { isFetching: isFetchingCharacter  }] = _services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_18__/* ["default"].useLazyGetCharacterWithdrawQuery */ .Z.useLazyGetCharacterWithdrawQuery();
    const [getEquipmentList, { isFetching: isFetchingEquipment  }] = _services_query_endpoints_equipment__WEBPACK_IMPORTED_MODULE_19__/* ["default"].useLazyGetEquipmentWithdrawQuery */ .Z.useLazyGetEquipmentWithdrawQuery();
    const [getBadgeList, { isFetching: isFetchingBadge  }] = _services_query_endpoints_badge__WEBPACK_IMPORTED_MODULE_17__/* ["default"].useLazyGetListWithdrawQuery */ .Z.useLazyGetListWithdrawQuery();
    const listRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: isApproveForAll , 1: setIsApproveForAll  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { 0: isApproving , 1: setIsApproving  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: isPending , 1: setIsPending  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const toomicsContract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_14__/* .useToomicsContract */ .xT)(contextWeb3, selectedChain, privateKey);
    const characterContract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_14__/* .useCharacterContract */ .SI)(contextWeb3, selectedChain, privateKey);
    const equipmentContract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_14__/* .useEquipmentContract */ .yu)(contextWeb3, selectedChain, privateKey);
    const badgeContract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_14__/* .useBadgeContract */ .zP)(contextWeb3, selectedChain, privateKey);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).state;
    const handleClickSelectItem = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((item)=>{
        if (nftsListSelected.length === 5 && !item.isChecked) return;
        dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_11__/* .walletActions.handleSelectItemToTransfer */ .vB.handleSelectItemToTransfer(item));
    }, [
        dispatch,
        nftsListSelected
    ]);
    const isTransactionPending = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (!transactions[chainId]) return false;
        return !!Object.values(transactions[chainId]).find((tx)=>tx.action === "transfer-nft");
    }, [
        chainId,
        transactions
    ]);
    const getNFTContractAddress = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        switch(filtersTransferNfts.nftType){
            case "characters":
                return _constants_contractAddress__WEBPACK_IMPORTED_MODULE_4__/* .NFT_CHARACTER_ADDRESS */ .MI[chainId];
            case "equipment":
                return _constants_contractAddress__WEBPACK_IMPORTED_MODULE_4__/* .NFT_EQUIPMENT_ADDRESS */ .RR[chainId];
            case "badge":
                return _constants_contractAddress__WEBPACK_IMPORTED_MODULE_4__/* .NFT_BADGE_ADDRESS */ .X_[chainId];
            default:
                return _constants_contractAddress__WEBPACK_IMPORTED_MODULE_4__/* .NFT_CHARACTER_ADDRESS */ .MI[chainId];
        }
    }, [
        chainId,
        filtersTransferNfts.nftType
    ]);
    const handleMetamaskTransfer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (args)=>{
        if (!toomicsContract) {
            dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_12__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                title: "toomicsContract is null",
                type: "danger"
            }));
            return;
        }
        if (!isMobile) {
            await toomicsContract.estimateGas.depositNFT(...args).then((gasLimit)=>{
                return toomicsContract.depositNFT(...args, {
                    gasLimit
                });
            }).then((tx)=>{
                if (tx.hash) {
                    dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_10__/* .modalSliceActions.shiftFromQueue */ .E.shiftFromQueue());
                    dispatch((0,_features_contract_contractSlice__WEBPACK_IMPORTED_MODULE_9__/* .addTransaction */ .dT)({
                        action: "transfer-nft",
                        chainId,
                        hash: tx.hash
                    }));
                }
            }).catch(({ code  })=>{
                if (code === _constants_web3__WEBPACK_IMPORTED_MODULE_7__/* .ERROR_TRANSACTION.reject.codeNumber */ .T.reject.codeNumber || code === _constants_web3__WEBPACK_IMPORTED_MODULE_7__/* .ERROR_TRANSACTION.reject.codeString */ .T.reject.codeString) {
                    dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_12__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                        type: "danger",
                        title: "Signature rejected"
                    }));
                }
            });
        } else {
            const res = await (0,_utils_wagmiActions__WEBPACK_IMPORTED_MODULE_22__/* .wagmiWriteContract */ .w5)({
                typeContract: "toomics",
                functionName: "depositNFT",
                chainId,
                args: [
                    ...args
                ]
            });
            if (res?.status && res?.status === "success" && res?.transactionHash) {
                dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_10__/* .modalSliceActions.shiftFromQueue */ .E.shiftFromQueue());
                dispatch((0,_features_contract_contractSlice__WEBPACK_IMPORTED_MODULE_9__/* .addTransaction */ .dT)({
                    action: "transfer-nft",
                    chainId,
                    hash: res.transactionHash
                }));
            } else {
                dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_12__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                    type: "danger",
                    title: "Signature rejected"
                }));
            }
        }
    }, [
        chainId,
        toomicsContract,
        dispatch,
        isMobile
    ]);
    const handleClickTransferNft = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        if (transferFromCryptoWallet) {
            if (isPending) return;
            if (!toomicsContract) return;
            if (!userProfile?.id) return;
            setIsPending(true);
            const args = [
                userProfile.id,
                getNFTContractAddress(),
                nftsListSelected.map((item)=>item.tokenId), 
            ];
            switch(walletSelected){
                case _constants_walletSelection__WEBPACK_IMPORTED_MODULE_6__/* .WalletSelections.METAMASK */ .dv.METAMASK:
                    {
                        await handleMetamaskTransfer(args);
                        setIsPending(false);
                        break;
                    }
                case _constants_walletSelection__WEBPACK_IMPORTED_MODULE_6__/* .WalletSelections.SIGHTNWALLET */ .dv.SIGHTNWALLET:
                    {
                        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_10__/* .modalSliceActions.addToQueue */ .E.addToQueue({
                            type: "popup/confirm-transaction",
                            propsState: {
                                typeTransaction: _constants_transactions__WEBPACK_IMPORTED_MODULE_5__/* .TypeTransaction.DEPOSIT_NFT */ .e.DEPOSIT_NFT,
                                args
                            }
                        }));
                        setIsPending(false);
                        break;
                    }
                default:
                    {
                        dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_12__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                            type: "danger",
                            title: "Invalid wallet !!!"
                        }));
                        break;
                    }
            }
        } else {
            return dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_10__/* .modalSliceActions.addToQueue */ .E.addToQueue({
                type: "popup/confirm-withdraw-nft"
            }));
        }
    }, [
        dispatch,
        getNFTContractAddress,
        isPending,
        nftsListSelected,
        transferFromCryptoWallet,
        userProfile?.id,
        handleMetamaskTransfer,
        walletSelected,
        toomicsContract, 
    ]);
    const handleSetIsApproveForAll = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        setIsApproveForAll(true);
    }, []);
    const handleMetamaskApprove = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        if (!filtersTransferNfts.nftType) return;
        let tx;
        if (!isMobile) {
            if (filtersTransferNfts.nftType === "characters") {
                if (!characterContract) return;
                const gasLimit = await characterContract.estimateGas.setApprovalForAll(_constants_contractAddress__WEBPACK_IMPORTED_MODULE_4__/* .TOOMICS_ADDRESS */ .kM[chainId], true);
                tx = await characterContract.setApprovalForAll(_constants_contractAddress__WEBPACK_IMPORTED_MODULE_4__/* .TOOMICS_ADDRESS */ .kM[chainId], true, {
                    gasLimit
                });
            }
            if (filtersTransferNfts.nftType === "equipment") {
                if (!equipmentContract) return;
                const gasLimit1 = await equipmentContract.estimateGas.setApprovalForAll(_constants_contractAddress__WEBPACK_IMPORTED_MODULE_4__/* .TOOMICS_ADDRESS */ .kM[chainId], true);
                tx = await equipmentContract.setApprovalForAll(_constants_contractAddress__WEBPACK_IMPORTED_MODULE_4__/* .TOOMICS_ADDRESS */ .kM[chainId], true, {
                    gasLimit: gasLimit1
                });
            }
            if (filtersTransferNfts.nftType === "badge") {
                if (!badgeContract) return;
                const gasLimit2 = await badgeContract.estimateGas.setApprovalForAll(_constants_contractAddress__WEBPACK_IMPORTED_MODULE_4__/* .TOOMICS_ADDRESS */ .kM[chainId], true);
                tx = await badgeContract.setApprovalForAll(_constants_contractAddress__WEBPACK_IMPORTED_MODULE_4__/* .TOOMICS_ADDRESS */ .kM[chainId], true, {
                    gasLimit: gasLimit2
                });
            }
            const result = await tx.wait();
            if (result?.status === 1) {
                dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_12__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                    type: "success",
                    title: "Approved successfully"
                }));
                setIsApproveForAll(true);
                setIsApproving(false);
            }
        } else {
            const res = await (0,_utils_wagmiActions__WEBPACK_IMPORTED_MODULE_22__/* .wagmiWriteContract */ .w5)({
                typeContract: filtersTransferNfts.nftType,
                functionName: "setApprovalForAll",
                chainId,
                args: [
                    _constants_contractAddress__WEBPACK_IMPORTED_MODULE_4__/* .TOOMICS_ADDRESS */ .kM[chainId],
                    true
                ]
            });
            if (res?.status && res?.status === "success") {
                dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_12__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                    type: "success",
                    title: "Approved successfully"
                }));
                setIsApproveForAll(true);
                setIsApproving(false);
            }
        }
    }, [
        badgeContract,
        chainId,
        characterContract,
        dispatch,
        equipmentContract,
        filtersTransferNfts.nftType,
        isMobile, 
    ]);
    //Deposit
    const handleApproveForAll = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        if (isApproving) return;
        setIsApproving(true);
        try {
            switch(walletSelected){
                case _constants_walletSelection__WEBPACK_IMPORTED_MODULE_6__/* .WalletSelections.METAMASK */ .dv.METAMASK:
                    {
                        await handleMetamaskApprove();
                        break;
                    }
                case _constants_walletSelection__WEBPACK_IMPORTED_MODULE_6__/* .WalletSelections.SIGHTNWALLET */ .dv.SIGHTNWALLET:
                    {
                        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_10__/* .modalSliceActions.shiftFromQueue */ .E.shiftFromQueue());
                        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_10__/* .modalSliceActions.addToQueue */ .E.addToQueue({
                            type: "popup/confirm-transaction",
                            propsState: {
                                typeTransaction: _constants_transactions__WEBPACK_IMPORTED_MODULE_5__/* .TypeTransaction.APPROVE_DEPOSIT_NFT */ .e.APPROVE_DEPOSIT_NFT,
                                filtersTransferNfts,
                                handleSetIsApproveForAll
                            }
                        }));
                        setIsApproving(false);
                        break;
                    }
                default:
                    {
                        dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_12__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                            type: "danger",
                            title: "Invalid wallet !!!"
                        }));
                        break;
                    }
            }
        } catch (e) {
            setIsApproving(false);
            dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_12__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                type: "danger",
                title: "Signature rejected"
            }));
        }
    }, [
        dispatch,
        isApproving,
        handleMetamaskApprove,
        filtersTransferNfts,
        handleSetIsApproveForAll,
        walletSelected, 
    ]);
    const renderNftItem = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((item)=>{
        switch(filtersTransferNfts.nftType){
            case "characters":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CharacterItem__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                    title: transferFromCryptoWallet ? String(item.tokenId) : String(item.id),
                    image: item?.nft ? item?.nft.thumbnailUrl : item.thumbnailUrl,
                    level: item.level,
                    earningAmount: transferFromCryptoWallet ? (item.level || 0) < characterMaxLevel ? item.rtEarning : item.gtEarning : item.averageEarning,
                    earningToken: transferFromCryptoWallet ? (item.level || 0) < characterMaxLevel ? "0" : "1" : item.tokenTypeEarning,
                    className: "lg:mt-10 max-w-[335px] sm:max-w-[265px]",
                    isCheck: item.isChecked,
                    handleChecked: ()=>handleClickSelectItem(item),
                    groupClassName: {
                        imageClassName: "!h-[297px] sm:!h-[246px]"
                    },
                    rarity: item.rarity
                });
            case "equipment":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EquipmentItem__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                    image: item?.nft ? item?.nft.thumbnailUrl : item.thumbnailUrl,
                    title: transferFromCryptoWallet ? String(item.tokenId) : String(item.id),
                    bonusAmount: item.bonus,
                    level: item.level,
                    bonusAttribute: item.itemType?.toString(),
                    className: "lg:mt-10 max-w-[335px] sm:max-w-[265px]",
                    isCheck: item.isChecked,
                    handleChecked: ()=>handleClickSelectItem(item),
                    groupClassName: {
                        imageClassName: "!h-[297px] sm:!h-[246px]"
                    }
                });
            case "badge":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BadgeItem__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                    image: item?.nft ? item?.nft.thumbnailUrl : item.thumbnailUrl,
                    title: item.title,
                    idItem: transferFromCryptoWallet ? String(item.tokenId) : String(item.id),
                    className: "lg:mt-10 max-w-[335px] sm:max-w-[265px]",
                    benefitAmount: item.benefitAmount,
                    benefitType: item.benefitType,
                    isCheck: item.isChecked,
                    handleChecked: ()=>handleClickSelectItem(item),
                    groupClassName: {
                        imageClassName: "!h-[297px] sm:!h-[246px]"
                    }
                });
            default:
                break;
        }
    }, [
        characterMaxLevel,
        filtersTransferNfts.nftType,
        handleClickSelectItem,
        transferFromCryptoWallet, 
    ]);
    const renderDomain = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:py-8 mb-8 lg:mb-0 lg:pt-0 lg:pb-[20px]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("px-6 lg:px-0 py-4 lg:py-0 grid grid-cols-[repeat(auto-fill,minmax(263px,5fr))] -mx-5 gap-4 lg:gap-y-4", "lg:max-h-[calc(100vh-180px-16rem)] overflow-y-auto scrollbar-thin"),
                        ref: listRef,
                        children: nftsList.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center",
                                id: `nft-${index}`,
                                children: renderNftItem(item)
                            }, index))
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("fixed bottom-0 bg-[#f8f8f8] dark:bg-[#0f0f0f] w-full px-6 left-0 py-4", "lg:bg-inherit lg:flex justify-center lg:justify-end lg:relative lg:p-0"),
                    children: transferFromCryptoWallet ? isTransactionPending ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_27__/* .Button */ .z, {
                        className: "contained-primary w-full lg:w-[200px] rounded-xl h-10 fill-primary-btn",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-icon-sm h-icon-sm grow-0 shrink-0 mr-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                                    className: "fill-icon animate-spin"
                                })
                            }),
                            lang["button/processing"]
                        ]
                    }) : isApproveForAll ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_27__/* .Button */ .z, {
                        className: "contained-primary w-full lg:w-[200px] rounded-xl h-10 fill-primary-btn",
                        disabled: !nftsListSelected.length || !isSupportedNetwork,
                        onClick: handleClickTransferNft,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_TransferIcon__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                                className: "mr-3"
                            }),
                            lang["button/transfer"]
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_27__/* .Button */ .z, {
                        className: "contained-primary w-full lg:w-[200px] rounded-xl h-10 fill-primary-btn",
                        disabled: !isSupportedNetwork,
                        onClick: handleApproveForAll,
                        children: [
                            isApproving && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-icon-sm h-icon-sm grow-0 shrink-0 mr-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                                    className: "fill-icon animate-spin"
                                })
                            }),
                            isApproving ? "Approving" : "Approve"
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_27__/* .Button */ .z, {
                        className: "contained-primary w-full lg:w-[200px] rounded-xl h-10 fill-primary-btn",
                        disabled: !nftsListSelected.length || !filtersTransferNfts.chainId,
                        onClick: handleClickTransferNft,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ArrowGrowthIcon__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                                className: "mr-3"
                            }),
                            lang["button/submit-claim-request"]
                        ]
                    })
                })
            ]
        });
    }, [
        filtersTransferNfts.chainId,
        handleApproveForAll,
        handleClickTransferNft,
        isApproveForAll,
        isApproving,
        isSupportedNetwork,
        isTransactionPending,
        lang,
        nftsList,
        nftsListSelected.length,
        renderNftItem,
        transferFromCryptoWallet, 
    ]);
    const handleCallBackInViewPort = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (!filtersTransferNfts.page) return;
        if (!filtersTransferNfts.totalPage) return;
        if (!(filtersTransferNfts.page < filtersTransferNfts.totalPage)) return;
        if (isFetching || isFetchingCharacter || isFetchingEquipment || isFetchingBadge) return;
        dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_11__/* .walletActions.setTransferNftFilters */ .vB.setTransferNftFilters({
            page: filtersTransferNfts.page + 1
        }));
    }, [
        dispatch,
        filtersTransferNfts.page,
        isFetching,
        isFetchingBadge,
        isFetchingCharacter,
        isFetchingEquipment,
        filtersTransferNfts.totalPage, 
    ]);
    (0,_hooks_useInViewPort__WEBPACK_IMPORTED_MODULE_15__/* .useInViewPort */ .O)(document.getElementById(`nft-${nftsList.length - 1}`), handleCallBackInViewPort);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (account) {
            dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_11__/* .walletActions.clearTransferNftState */ .vB.clearTransferNftState());
        }
    }, [
        account,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (transferFromCryptoWallet) {
            if (!account || !isSupportedNetwork) return;
            const params = {
                owner: account,
                chainId,
                tokenId: filtersTransferNfts.tokenId,
                nftType: filtersTransferNfts.nftType,
                page: filtersTransferNfts.page,
                limit: filtersTransferNfts.limit,
                searchEqual: filtersTransferNfts.tokenId ? true : ""
            };
            getListWalletNft((0,_utils_common__WEBPACK_IMPORTED_MODULE_21__/* .removeEmptyProperties */ .Nq)(params));
        }
    }, [
        account,
        getListWalletNft,
        isSupportedNetwork,
        transferFromCryptoWallet,
        timeStampAction,
        chainId,
        filtersTransferNfts.tokenId,
        filtersTransferNfts.nftType,
        filtersTransferNfts.page,
        filtersTransferNfts.limit, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (transferFromCryptoWallet) return;
        const { limit , page , keyword , nftType , chainId  } = {
            page: filtersTransferNfts.page,
            limit: filtersTransferNfts.limit,
            keyword: filtersTransferNfts.tokenId,
            nftType: filtersTransferNfts.nftType,
            chainId: filtersTransferNfts.chainId
        };
        switch(nftType){
            case "characters":
                getCharacterList((0,_utils_common__WEBPACK_IMPORTED_MODULE_21__/* .removeEmptyProperties */ .Nq)({
                    page,
                    limit,
                    keyword,
                    chainId
                }));
                break;
            case "equipment":
                getEquipmentList((0,_utils_common__WEBPACK_IMPORTED_MODULE_21__/* .removeEmptyProperties */ .Nq)({
                    page,
                    limit,
                    keyword,
                    chainId
                }));
                break;
            case "badge":
                getBadgeList((0,_utils_common__WEBPACK_IMPORTED_MODULE_21__/* .removeEmptyProperties */ .Nq)({
                    page,
                    limit,
                    chainId
                }));
                break;
            default:
                break;
        }
    }, [
        filtersTransferNfts.chainId,
        filtersTransferNfts.limit,
        filtersTransferNfts.nftType,
        filtersTransferNfts.page,
        filtersTransferNfts.tokenId,
        getBadgeList,
        getCharacterList,
        getEquipmentList,
        transferFromCryptoWallet,
        timeStampAction,
        account, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const selectedList = nftsList.filter((item)=>item.isChecked);
        dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_11__/* .walletActions.handleUpdateListSelected */ .vB.handleUpdateListSelected(selectedList));
    }, [
        nftsList,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (async ()=>{
            try {
                if (!transferFromCryptoWallet || !account) return;
                if (!isMobile || walletSelected === _constants_walletSelection__WEBPACK_IMPORTED_MODULE_6__/* .WalletSelections.SIGHTNWALLET */ .dv.SIGHTNWALLET) {
                    let isApproval = false;
                    if (filtersTransferNfts.nftType === "characters") {
                        if (!characterContract) return;
                        if (characterContract.address !== _constants_contractAddress__WEBPACK_IMPORTED_MODULE_4__/* .NFT_CHARACTER_ADDRESS */ .MI[chainId]) return;
                        isApproval = await characterContract.isApprovedForAll(account, _constants_contractAddress__WEBPACK_IMPORTED_MODULE_4__/* .TOOMICS_ADDRESS */ .kM[chainId]);
                    }
                    if (filtersTransferNfts.nftType === "equipment") {
                        if (!equipmentContract) return;
                        if (equipmentContract.address !== _constants_contractAddress__WEBPACK_IMPORTED_MODULE_4__/* .NFT_EQUIPMENT_ADDRESS */ .RR[chainId]) return;
                        isApproval = await equipmentContract.isApprovedForAll(account, _constants_contractAddress__WEBPACK_IMPORTED_MODULE_4__/* .TOOMICS_ADDRESS */ .kM[chainId]);
                    }
                    if (filtersTransferNfts.nftType === "badge") {
                        if (!badgeContract) return;
                        if (badgeContract.address !== _constants_contractAddress__WEBPACK_IMPORTED_MODULE_4__/* .NFT_BADGE_ADDRESS */ .X_[chainId]) return;
                        isApproval = await badgeContract.isApprovedForAll(account, _constants_contractAddress__WEBPACK_IMPORTED_MODULE_4__/* .TOOMICS_ADDRESS */ .kM[chainId]);
                    }
                    setIsApproveForAll(isApproval);
                } else {
                    if (!filtersTransferNfts.nftType) return;
                    const isApproval1 = await (0,_utils_wagmiActions__WEBPACK_IMPORTED_MODULE_22__/* .wagmiReadContract */ .YA)({
                        typeContract: filtersTransferNfts.nftType,
                        functionName: "isApprovedForAll",
                        chainId,
                        args: [
                            account,
                            _constants_contractAddress__WEBPACK_IMPORTED_MODULE_4__/* .TOOMICS_ADDRESS */ .kM[chainId]
                        ]
                    });
                    setIsApproveForAll(isApproval1);
                }
            } catch (error) {
                return;
            }
        })();
    }, [
        account,
        badgeContract,
        chainId,
        characterContract,
        equipmentContract,
        filtersTransferNfts.nftType,
        transferFromCryptoWallet,
        walletSelected, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_11__/* .walletActions.clearTransferNftState */ .vB.clearTransferNftState());
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "lg:grow lg:h-full flex flex-col items-stretch w-full lg:w-auto",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "lg:mb-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TransferNftsFilters__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                    contextWeb3: contextWeb3
                })
            }),
            nftsList.length > 0 && !nftsList.every((nft)=>!nft.imageUrl) && renderDomain(),
            (!isFetching && !isFetchingBadge && !isFetchingCharacter && !isFetchingEquipment && !nftsList.length || nftsList.every((nft)=>!nft.imageUrl)) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-8 lg:mt-0 grow-o lg:grow",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_NoItemsComponent__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                    description: filtersTransferNfts.tokenId ? `${lang["profile/no-items-found"]}` : `${lang["profile/no-nfts-available"]}`
                })
            }),
            (isFetching || isFetchingBadge || isFetchingCharacter || isFetchingEquipment) && !nftsList.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-8 lg:mt-0 flex flex-col flex-grow justify-center items-center h-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-icon-2xl h-icon-2xl animate-spin rounded-full border-4 border-white border-t-4 border-t-red-500"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransferNfts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41160:
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
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14613);
/* harmony import */ var _features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70355);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7334);
/* harmony import */ var _services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17827);
/* harmony import */ var _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93992);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73732);
/* harmony import */ var _bases_SelectBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31114);
/* harmony import */ var _InputSearch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12745);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_5__, _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_6__, _utils_common__WEBPACK_IMPORTED_MODULE_9__, _bases_SelectBox__WEBPACK_IMPORTED_MODULE_10__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_5__, _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_6__, _utils_common__WEBPACK_IMPORTED_MODULE_9__, _bases_SelectBox__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const TransferNftsFilters = ({ className , contextWeb3  })=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_5__/* .useAppDispatch */ .TL)();
    const { filtersTransferNfts: filters , nftsListSelected , transferFromCryptoWallet ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .CG)((state)=>state.wallet);
    const { account , chainId  } = (0,_hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_6__/* .useConnectWallet */ .O)();
    const { 0: suggestionList , 1: setSuggestionList  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [getListSuggestWithdraw, { data  }] = _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_8__/* ["default"].useLazyGetSuggestWithdrawQuery */ .Z.useLazyGetSuggestWithdrawQuery();
    const [getListSuggestUndeposit, { data: dataUndeposit  }] = _services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useLazyGetListSuggestMyNftQuery */ .Z.useLazyGetListSuggestMyNftQuery();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).state;
    const itemOptions = [
        {
            label: lang["nft/characters"] || "",
            value: "characters"
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
    const textNoResult = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        switch(filters.nftType){
            case "characters":
                return `${lang["common/no-character-found"]}`;
            case "equipment":
                return `${lang["common/no-equipment-found"]}`;
            case "badge":
                return `${lang["common/no-badge-found"]}`;
            default:
                return `${lang["profile/no-data"]}`;
        }
    }, [
        filters.nftType,
        lang
    ]);
    const handleClickSelectItem = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value)=>{
        dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_4__/* .walletActions.setTransferNftState */ .vB.setTransferNftState({
            total: 0,
            nftsList: []
        }));
        dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_4__/* .walletActions.setTransferNftFilters */ .vB.setTransferNftFilters({
            nftType: value,
            page: 1,
            tokenId: ""
        }));
    }, [
        dispatch
    ]);
    const handleOnSearchSubmitted = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((keyword)=>{
        if (filters.tokenId === keyword) return;
        dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_4__/* .walletActions.setTransferNftState */ .vB.setTransferNftState({
            total: 0,
            nftsList: []
        }));
        dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_4__/* .walletActions.setTransferNftFilters */ .vB.setTransferNftFilters({
            tokenId: keyword,
            page: 1
        }));
    }, [
        dispatch,
        filters.tokenId
    ]);
    const handleOnSearchChanged = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((key)=>{
        if (!key) return;
        if (transferFromCryptoWallet) {
            if (!account) return;
            return getListSuggestUndeposit((0,_utils_common__WEBPACK_IMPORTED_MODULE_9__/* .removeEmptyProperties */ .Nq)({
                ...filters,
                tokenId: key,
                owner: account,
                chainId
            }));
        } else {
            getListSuggestWithdraw({
                type: filters.nftType,
                keyword: key
            });
        }
    }, [
        account,
        chainId,
        filters,
        getListSuggestUndeposit,
        getListSuggestWithdraw,
        transferFromCryptoWallet, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setSuggestionList([]);
        return ()=>{
            setSuggestionList([]);
        };
    }, [
        transferFromCryptoWallet
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (data?.data) {
            const arr = data.data.map((item)=>{
                return {
                    id: item
                };
            });
            if (!arr) return;
            setSuggestionList(arr);
        }
    }, [
        data?.data
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (dataUndeposit?.data) {
            const arr = dataUndeposit.data.map((item)=>{
                return {
                    id: item.tokenId
                };
            });
            if (!arr) return;
            setSuggestionList(arr);
        }
    }, [
        dataUndeposit?.data
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_4__/* .walletActions.setTransferNftState */ .vB.setTransferNftState({
            total: 0,
            nftsList: []
        }));
        if (transferFromCryptoWallet) {
            dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_4__/* .walletActions.setTransferNftFilters */ .vB.setTransferNftFilters({
                owner: account || ""
            }));
        }
    }, [
        account,
        dispatch,
        transferFromCryptoWallet,
        chainId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        return ()=>{
            dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_4__/* .walletActions.setTransferNftFilters */ .vB.setTransferNftFilters({
                page: 1,
                nftType: "characters",
                tokenId: "",
                total: 0
            }));
        };
    }, [
        dispatch
    ]);
    const renderSearchInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputSearch__WEBPACK_IMPORTED_MODULE_11__/* .InputSearch */ .V, {
            className: "w-full lg:w-[225px]",
            placeholder: filters.nftType === "badge" && !transferFromCryptoWallet ? `${lang["comp/search-by-name"]}` : `${lang["comp/search-by-id"]}`,
            handleOnSearchSubmitted: handleOnSearchSubmitted,
            listSuggestion: suggestionList,
            filterField: [
                {
                    key: "id",
                    label: "Name"
                }
            ],
            textSearchAll: `${lang["comp/press-enter-to-search-all"]} ${filters.nftType}`,
            textNoResult: textNoResult,
            showSuggestion: true,
            handleOnSearchChanged: handleOnSearchChanged,
            defaultValueOptions: {
                keyword: filters.tokenId || "",
                dependencies: filters.nftType || ""
            }
        });
    }, [
        filters.nftType,
        filters.tokenId,
        handleOnSearchChanged,
        handleOnSearchSubmitted,
        lang,
        suggestionList,
        textNoResult,
        transferFromCryptoWallet, 
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex flex-col items-stretch justify-between", "lg:flex-row lg:items-center", className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-[10px] lg:mb-4 flex items-center justify-between lg:hidden bg-white dark:bg-[#232323] p-[20px] pt-0 lg:p-0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-h9 text-black/50 dark:text-[#898989] flex-col flex whitespace-nowrap mr-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-black dark:text-white",
                                        children: nftsListSelected.length
                                    }),
                                    "/5"
                                ]
                            }),
                            lang["wallet/items-selected"]
                        ]
                    }),
                    renderSearchInput()
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row justify-between items-center w-full text-base px-[20px] py-[10px] lg:p-0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "dark:text-[#898989] whitespace-nowrap lg:whitespace-normal",
                        children: [
                            filters.total,
                            " ",
                            filters.total === 1 ? `${lang["wallet/result"]}` : `${lang["wallet/results"]}`
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row-reverse lg:flex-row items-center justify-between w-full lg:w-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_SelectBox__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                options: itemOptions,
                                defaultValue: filters.nftType,
                                customClassName: "lg:ml-4 lg:min-w-[180px] min-w-[200px] bg-white dark:bg-[#232323]",
                                onChange: handleClickSelectItem
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "ml-4 hidden lg:block",
                                children: renderSearchInput()
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "ml-4 text-h9 text-black/50 dark:text-[#898989] flex-col lg:items-end hidden lg:flex",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-black dark:text-white",
                                                children: nftsListSelected.length
                                            }),
                                            "/5"
                                        ]
                                    }),
                                    lang["wallet/items-selected"]
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransferNftsFilters);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40346:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49766);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37674);
/* harmony import */ var _config_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71352);
/* harmony import */ var _config_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21796);
/* harmony import */ var _constants_contractAddress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99304);
/* harmony import */ var _constants_token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65264);
/* harmony import */ var _constants_transactions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62218);
/* harmony import */ var _constants_walletSelection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41202);
/* harmony import */ var _constants_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56091);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14613);
/* harmony import */ var _features_contract_contractSlice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(63794);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(53450);
/* harmony import */ var _features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(70355);
/* harmony import */ var _features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(85750);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useApproveToken__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(96380);
/* harmony import */ var _hooks_useBlockNumber__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(48581);
/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(70695);
/* harmony import */ var _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7334);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(73732);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(45700);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(60088);
/* harmony import */ var _bases_InputAmount__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(49508);
/* harmony import */ var _bases_SelectBox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(31114);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(61103);
/* harmony import */ var _icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(52577);
/* harmony import */ var _hooks_useDetectMobileDevice__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(77259);
/* harmony import */ var _utils_wagmiActions__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(50312);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([bignumber_js__WEBPACK_IMPORTED_MODULE_1__, _config_token__WEBPACK_IMPORTED_MODULE_6__, _hooks_common__WEBPACK_IMPORTED_MODULE_17__, _hooks_useApproveToken__WEBPACK_IMPORTED_MODULE_18__, _hooks_useBlockNumber__WEBPACK_IMPORTED_MODULE_19__, _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_21__, _utils_common__WEBPACK_IMPORTED_MODULE_22__, _utils_format__WEBPACK_IMPORTED_MODULE_23__, _bases_SelectBox__WEBPACK_IMPORTED_MODULE_26__, _utils_wagmiActions__WEBPACK_IMPORTED_MODULE_29__]);
([bignumber_js__WEBPACK_IMPORTED_MODULE_1__, _config_token__WEBPACK_IMPORTED_MODULE_6__, _hooks_common__WEBPACK_IMPORTED_MODULE_17__, _hooks_useApproveToken__WEBPACK_IMPORTED_MODULE_18__, _hooks_useBlockNumber__WEBPACK_IMPORTED_MODULE_19__, _hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_21__, _utils_common__WEBPACK_IMPORTED_MODULE_22__, _utils_format__WEBPACK_IMPORTED_MODULE_23__, _bases_SelectBox__WEBPACK_IMPORTED_MODULE_26__, _utils_wagmiActions__WEBPACK_IMPORTED_MODULE_29__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);































const TransferTokens = ({ contextWeb3  })=>{
    const isMobile = (0,_hooks_useDetectMobileDevice__WEBPACK_IMPORTED_MODULE_30__/* .useDetectMobileDevice */ .c)();
    const { account , chainId , isSupportedNetwork , privateKey  } = (0,_hooks_useWeb3Activity__WEBPACK_IMPORTED_MODULE_21__/* .useConnectWallet */ .O)();
    const walletSelected = localStorage.getItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_4__/* .LOCAL_STORAGE_KEYS.wallet */ .d.wallet);
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_17__/* .useAppDispatch */ .TL)();
    const { transferFromCryptoWallet , requestStatus , networkClaim , selectedChain  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_17__/* .useAppSelector */ .CG)((state)=>state.wallet);
    const { myProfile: { userProfile  } ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_17__/* .useAppSelector */ .CG)((state)=>state.profile);
    const { transactions  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_17__/* .useAppSelector */ .CG)((state)=>state.contract);
    const { 0: errorMsg , 1: setErrMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: asset , 1: setAsset  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_config_token__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_TOKEN */ .k);
    const { 0: balanceOf , 1: setBalanceOf  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("0");
    const { 0: amount , 1: setAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: isClickAll , 1: setIsClickAll  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: isPending , 1: setIsPending  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const tokenOptions = [
        _config_token__WEBPACK_IMPORTED_MODULE_6__/* .APPLICATION_TOKEN */ .e[_constants_token__WEBPACK_IMPORTED_MODULE_8__/* .TokenId.SGT */ .K.SGT]
    ];
    const latestBlock = (0,_hooks_useBlockNumber__WEBPACK_IMPORTED_MODULE_19__/* .useBlockNumber */ .O)(chainId);
    const tokenContract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_20__/* .useTokenContract */ .Ib)(contextWeb3, chainId, privateKey, _constants_contractAddress__WEBPACK_IMPORTED_MODULE_7__/* .TMG_ADDRESS */ .Ek[chainId]);
    const toomicsContract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_20__/* .useToomicsContract */ .xT)(contextWeb3, selectedChain, privateKey);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z).state;
    const isTransactionPending = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        if (!transactions[chainId]) return false;
        return !!Object.values(transactions[chainId]).find((tx)=>tx.action === "transfer-token");
    }, [
        chainId,
        transactions
    ]);
    const [approval, handleApprove] = (0,_hooks_useApproveToken__WEBPACK_IMPORTED_MODULE_18__/* .useApproveCallback */ .q)(contextWeb3, _constants_contractAddress__WEBPACK_IMPORTED_MODULE_7__/* .TMG_ADDRESS */ .Ek[chainId], transferFromCryptoWallet ? (0,_utils_format__WEBPACK_IMPORTED_MODULE_23__/* .parseBalance */ .am)(amount) : ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.BigNumber.from("0"), _constants_contractAddress__WEBPACK_IMPORTED_MODULE_7__/* .TOOMICS_ADDRESS */ .kM[chainId], latestBlock);
    const handleSelectAsset = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((value)=>{
        setAsset(String(value));
    }, []);
    const handleOnValueChangeAmount = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(({ value  })=>{
        setAmount(value);
    }, []);
    const handleOnChangeAmount = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        setIsClickAll(false);
    }, []);
    const handleSetMaxAmount = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        setIsClickAll(true);
        setAmount(balanceOf);
    }, [
        balanceOf
    ]);
    const handleApproveToken = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (approval === _hooks_useApproveToken__WEBPACK_IMPORTED_MODULE_18__/* .ApprovalState.PENDING */ .U.PENDING) return;
        handleApprove();
    }, [
        approval,
        handleApprove
    ]);
    const handleMetamaskTransfer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async (args)=>{
        if (isMobile) {
            const result = await (0,_utils_wagmiActions__WEBPACK_IMPORTED_MODULE_29__/* .wagmiWriteContract */ .w5)({
                typeContract: "toomics",
                functionName: "depositToken",
                chainId: chainId,
                args: [
                    ...args
                ]
            });
            if (result?.status && result?.status === "success" && result?.transactionHash) {
                dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_14__/* .modalSliceActions.shiftFromQueue */ .E.shiftFromQueue());
                dispatch((0,_features_contract_contractSlice__WEBPACK_IMPORTED_MODULE_13__/* .addTransaction */ .dT)({
                    action: "transfer-token",
                    chainId,
                    hash: result.transactionHash
                }));
            } else {
                dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_16__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                    type: "danger",
                    title: "Signature rejected"
                }));
            }
        } else {
            await toomicsContract?.estimateGas.depositToken(...args).then((gasLimit)=>{
                return toomicsContract?.depositToken(...args, {
                    gasLimit
                });
            }).then((tx)=>{
                if (tx?.hash) {
                    dispatch((0,_features_contract_contractSlice__WEBPACK_IMPORTED_MODULE_13__/* .addTransaction */ .dT)({
                        action: "transfer-token",
                        chainId,
                        hash: tx.hash
                    }));
                }
            }).catch(({ code  })=>{
                if (code === _constants_web3__WEBPACK_IMPORTED_MODULE_11__/* .ERROR_TRANSACTION.reject.codeNumber */ .T.reject.codeNumber || code === _constants_web3__WEBPACK_IMPORTED_MODULE_11__/* .ERROR_TRANSACTION.reject.codeString */ .T.reject.codeString) {
                    dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_16__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                        type: "danger",
                        title: "Signature rejected"
                    }));
                }
            });
        }
    }, [
        toomicsContract,
        dispatch,
        chainId,
        isMobile
    ]);
    const handleClickApproveToken = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{
        switch(walletSelected){
            case _constants_walletSelection__WEBPACK_IMPORTED_MODULE_10__/* .WalletSelections.METAMASK */ .dv.METAMASK:
                {
                    handleApproveToken();
                    break;
                }
            case _constants_walletSelection__WEBPACK_IMPORTED_MODULE_10__/* .WalletSelections.SIGHTNWALLET */ .dv.SIGHTNWALLET:
                {
                    const amountToApprove = transferFromCryptoWallet ? (0,_utils_format__WEBPACK_IMPORTED_MODULE_23__/* .parseBalance */ .am)(amount) : ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.BigNumber.from("0");
                    dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_14__/* .modalSliceActions.addToQueue */ .E.addToQueue({
                        type: "popup/confirm-transaction",
                        propsState: {
                            typeTransaction: _constants_transactions__WEBPACK_IMPORTED_MODULE_9__/* .TypeTransaction.APPROVE_DEPOSIT_TOKEN */ .e.APPROVE_DEPOSIT_TOKEN,
                            handleApproveToken,
                            amountToApprove
                        }
                    }));
                    break;
                }
            default:
                {
                    dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_16__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                        type: "danger",
                        title: "Invalid wallet !!!"
                    }));
                    break;
                }
        }
    }, [
        walletSelected,
        handleApproveToken,
        dispatch,
        amount,
        transferFromCryptoWallet
    ]);
    const handleClickTransferTokenBtn = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{
        if (!amount || new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](amount).isZero()) return;
        if (isPending) return;
        if (!userProfile?.id) return;
        setIsPending(true);
        const args = [
            userProfile?.id,
            _constants_contractAddress__WEBPACK_IMPORTED_MODULE_7__/* .TMG_ADDRESS */ .Ek[chainId],
            isClickAll ? (0,_utils_format__WEBPACK_IMPORTED_MODULE_23__/* .parseBalance */ .am)(balanceOf) : (0,_utils_format__WEBPACK_IMPORTED_MODULE_23__/* .parseBalance */ .am)(amount), 
        ];
        switch(walletSelected){
            case _constants_walletSelection__WEBPACK_IMPORTED_MODULE_10__/* .WalletSelections.METAMASK */ .dv.METAMASK:
                {
                    await handleMetamaskTransfer(args);
                    setIsPending(false);
                    break;
                }
            case _constants_walletSelection__WEBPACK_IMPORTED_MODULE_10__/* .WalletSelections.SIGHTNWALLET */ .dv.SIGHTNWALLET:
                {
                    dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_14__/* .modalSliceActions.addToQueue */ .E.addToQueue({
                        type: "popup/confirm-transaction",
                        propsState: {
                            typeTransaction: _constants_transactions__WEBPACK_IMPORTED_MODULE_9__/* .TypeTransaction.DEPOSIT_TOKEN */ .e.DEPOSIT_TOKEN,
                            args
                        }
                    }));
                    setIsPending(false);
                    break;
                }
            default:
                {
                    dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_16__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                        type: "danger",
                        title: "Invalid wallet !!!"
                    }));
                    break;
                }
        }
    }, [
        amount,
        balanceOf,
        chainId,
        dispatch,
        isClickAll,
        isPending,
        userProfile?.id,
        handleMetamaskTransfer,
        walletSelected, 
    ]);
    const handleSubmitClaimBtn = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (!amount || new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](amount).isZero()) return;
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_14__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/confirm-your-claim-token",
            propsState: {
                asset: asset,
                amount,
                networkClaim
            }
        }));
    }, [
        amount,
        asset,
        dispatch,
        networkClaim
    ]);
    const renderButtonDeposit = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (isTransactionPending) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_24__/* .Button */ .z, {
                className: "contained-primary !text-base h-10 w-full lg:px-5 lg:w-auto lg:min-w-[150px]",
                size: "sm",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-icon-sm h-icon-sm grow-0 shrink-0 mr-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                            className: "fill-icon animate-spin"
                        })
                    }),
                    lang["button/processing"]
                ]
            });
        }
        switch(approval){
            case _hooks_useApproveToken__WEBPACK_IMPORTED_MODULE_18__/* .ApprovalState.PENDING */ .U.PENDING:
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_24__/* .Button */ .z, {
                    className: "contained-primary !text-base h-10 w-full lg:px-5 lg:w-auto lg:min-w-[150px]",
                    size: "sm",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-icon-sm h-icon-sm grow-0 shrink-0 mr-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                className: "fill-icon animate-spin"
                            })
                        }),
                        lang["button/approving"]
                    ]
                });
            case _hooks_useApproveToken__WEBPACK_IMPORTED_MODULE_18__/* .ApprovalState.APPROVED */ .U.APPROVED:
            case _hooks_useApproveToken__WEBPACK_IMPORTED_MODULE_18__/* .ApprovalState.UNKNOWN */ .U.UNKNOWN:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_24__/* .Button */ .z, {
                    className: "contained-primary !text-base h-10 w-full lg:px-5 lg:w-auto lg:min-w-[150px]",
                    size: "sm",
                    onClick: handleClickTransferTokenBtn,
                    disabled: !amount || !!errorMsg || !isSupportedNetwork || new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](amount).isZero(),
                    children: lang["button/transfer"]
                });
            default:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_24__/* .Button */ .z, {
                    className: "contained-primary !text-base h-10 w-full lg:px-5 lg:w-auto lg:min-w-[150px]",
                    size: "sm",
                    onClick: handleClickApproveToken,
                    disabled: !isSupportedNetwork,
                    children: lang["button/approve"]
                });
        }
    }, [
        amount,
        approval,
        errorMsg,
        handleClickTransferTokenBtn,
        isSupportedNetwork,
        isTransactionPending,
        lang,
        handleClickApproveToken, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        (async ()=>{
            if (transferFromCryptoWallet) {
                if (!account) return;
                let balance;
                if (isMobile && walletSelected === _constants_walletSelection__WEBPACK_IMPORTED_MODULE_10__/* .WalletSelections.METAMASK */ .dv.METAMASK) {
                    balance = await (0,_utils_wagmiActions__WEBPACK_IMPORTED_MODULE_29__/* .wagmiReadContract */ .YA)({
                        typeContract: "tmg",
                        functionName: "balanceOf",
                        chainId: chainId,
                        args: [
                            account
                        ]
                    });
                } else {
                    balance = await tokenContract?.balanceOf(account);
                }
                setBalanceOf((0,_utils_format__WEBPACK_IMPORTED_MODULE_23__/* .formatBalance */ .az)(balance));
            } else {
                if (!userProfile) return setBalanceOf("0");
                if (asset === "0") {
                    setBalanceOf(userProfile.RTAvailable);
                } else {
                    setBalanceOf(userProfile.GTAvailable);
                }
            }
        })();
    }, [
        account,
        asset,
        tokenContract,
        transferFromCryptoWallet,
        userProfile,
        latestBlock,
        chainId,
        walletSelected, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](amount).gt(balanceOf) && approval === _hooks_useApproveToken__WEBPACK_IMPORTED_MODULE_18__/* .ApprovalState.APPROVED */ .U.APPROVED) {
            setErrMsg("Insufficient balance");
        } else {
            setErrMsg("");
        }
    }, [
        balanceOf,
        amount,
        approval
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!isTransactionPending || requestStatus) {
            return setAmount("");
        }
    }, [
        dispatch,
        isTransactionPending,
        requestStatus
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        return ()=>{
            dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_15__/* .walletActions.handleSetNetworkClaim */ .vB.handleSetNetworkClaim(_config_network__WEBPACK_IMPORTED_MODULE_5__/* .DEFAULT_CHAIN_ID */ .rC));
        };
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_Panel__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
        className: "!rounded-[0] lg:!rounded-2xl h-full w-full rounded-t-[10px] rounded-b-[0] p-6 lg:p-11",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mx-auto w-max",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col lg:flex-row items-stretch lg:items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-base mb-2 lg:mb-0 text-black/70 dark:text-[#898989] w-32",
                            children: lang["wallet/asset"]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_SelectBox__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                            options: tokenOptions,
                            defaultValue: asset,
                            onChange: handleSelectAsset,
                            customClassName: "!w-[265.5px] !text-base"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col lg:flex-row items-stretch lg:items-center mt-7",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-base mb-2 lg:mb-0 text-black/70 dark:text-[#898989] w-32",
                            children: lang["wallet/available"]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-base dark:text-white",
                            children: `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_23__/* .formatIntBalance */ .qQ)(balanceOf)} ${(0,_utils_common__WEBPACK_IMPORTED_MODULE_22__/* .getTokenName */ ._M)(asset)}`
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col lg:flex-row items-stretch lg:items-center mt-7",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-base mb-2 lg:mb-0 text-black/70 dark:text-[#898989] w-32",
                            children: lang["wallet/amount"]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_InputAmount__WEBPACK_IMPORTED_MODULE_25__/* .InputAmount */ .Z, {
                            classNameContainer: "!w-[265.5px]",
                            className: "text-base",
                            decimalScale: 4,
                            placeholder: "0.0",
                            value: new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](amount).toFixed(),
                            onValueChange: handleOnValueChangeAmount,
                            onChange: handleOnChangeAmount,
                            thousandSeparator: ",",
                            isAllowed: ({ value  })=>{
                                return value.length <= 20;
                            },
                            thousandsGroupStyle: "thousand",
                            endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_24__/* .Button */ .z, {
                                className: "contained-third h-[30px] !text-h10",
                                onClick: handleSetMaxAmount,
                                children: lang["button/all"]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-1 text-main text-h9 lg:ml-32 h-[18px] text-left lg:text-center",
                    children: errorMsg
                }),
                transferFromCryptoWallet ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-5 flex justify-end",
                    children: renderButtonDeposit()
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-5 flex justify-end",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_24__/* .Button */ .z, {
                        className: "contained-primary !text-base h-10 !px-5 w-full lg:w-auto",
                        size: "sm",
                        onClick: handleSubmitClaimBtn,
                        disabled: !amount || !!errorMsg || new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](amount).isZero(),
                        children: lang["button/submit-claim-request"]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransferTokens);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3186:
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
/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37674);
/* harmony import */ var _config_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71352);
/* harmony import */ var _config_wallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52021);
/* harmony import */ var _constants_walletSelection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41202);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14613);
/* harmony import */ var _features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70355);
/* harmony import */ var _features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85750);
/* harmony import */ var _functions_network__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80526);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useCopyToClipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(39414);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(45700);
/* harmony import */ var _bases_Tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(67517);
/* harmony import */ var _icons_CopyIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(53305);
/* harmony import */ var _icons_DarkDownOneIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(10439);
/* harmony import */ var _icons_DownOneIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(39165);
/* harmony import */ var _icons_LogoIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(44326);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_11__, _utils_format__WEBPACK_IMPORTED_MODULE_13__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_11__, _utils_format__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const SelectNetworkDropdown = ({ chainId , account , className  })=>{
    const { selectedChain  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useAppSelector */ .CG)((state)=>state.wallet);
    const walletSelected = localStorage.getItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_3__/* .LOCAL_STORAGE_KEYS.wallet */ .d.wallet);
    const { theme  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const { 0: expanded , 1: setExpanded  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const htmlRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useAppDispatch */ .TL)();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).state;
    const selectedNetwork = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return _config_network__WEBPACK_IMPORTED_MODULE_4__/* .networkOptions.find */ .Dc.find((net)=>net.chainId === selectedChain);
    }, [
        selectedChain
    ]);
    const handleExpandedDropdown = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        setExpanded((pre)=>!pre);
    }, []);
    const handleSelectNetwork = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (chainId)=>{
        try {
            if (walletSelected === _constants_walletSelection__WEBPACK_IMPORTED_MODULE_6__/* .WalletSelections.METAMASK */ .dv.METAMASK) {
                const connector = await _config_wallet__WEBPACK_IMPORTED_MODULE_5__/* .SUPPORTED_WALLETS.METAMASK.connector */ .Vp.METAMASK.connector;
                const conn = typeof connector === "function" ? await connector() : connector;
                (0,_functions_network__WEBPACK_IMPORTED_MODULE_10__/* .switchToNetwork */ .f)({
                    provider: await conn?.getProvider(),
                    chainId
                }).then(()=>{
                    dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.handleSelectChainId */ .vB.handleSelectChainId(chainId));
                });
            } else if (walletSelected === _constants_walletSelection__WEBPACK_IMPORTED_MODULE_6__/* .WalletSelections.SIGHTNWALLET */ .dv.SIGHTNWALLET) {
                dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.handleSelectChainId */ .vB.handleSelectChainId(chainId));
            }
            setExpanded(false);
        } catch (e) {
            dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_9__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                title: `${lang["msg/network-cancel"]}`,
                type: "danger"
            }));
        }
    }, [
        dispatch,
        lang,
        walletSelected
    ]);
    const [isCopy, staticCopy] = (0,_hooks_useCopyToClipboard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            if (htmlRef.current && !htmlRef.current?.contains(event.target)) {
                setExpanded(false);
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return ()=>{
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!chainId) return;
        if (_config_network__WEBPACK_IMPORTED_MODULE_4__/* .SUPPORTED_CHAIN.includes */ .jT.includes(chainId)) {
            dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_8__/* .walletActions.handleSelectChainId */ .vB.handleSelectChainId(chainId));
        }
    }, [
        chainId,
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex flex-row items-center rounded-[10px] relative gap-[5px] w-full", "bg-transparent dark:text-white", className),
        ref: htmlRef,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                onClick: handleExpandedDropdown,
                className: "relative text-h9 font-semibold flex items-center grow border-[1px] gap-[25px] lg:gap-[10px] w-[218px] border-[#0000001A] dark:border-[#FFFFFF1A] rounded-[10px] bg-white dark:bg-[#232323]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center px-[10px] py-[9px] gap-[10px] font-[400] border-r-[1px] border-r-[#0000001A]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[26px] h-[26px]",
                            children: _config_network__WEBPACK_IMPORTED_MODULE_4__/* .networkOptions[0].icon */ .Dc[0].icon
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[26px] h-[26px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_LogoIcon__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                            className: "fill-white"
                        })
                    }),
                    (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenAddress */ .Xn)({
                        str: account || ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute top-1/2 right-[12px] -translate-y-1/2", "transition-transform duration-300", {
                            "rotate-180 ": expanded
                        }),
                        children: theme === "dark" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_DarkDownOneIcon__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_DownOneIcon__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-[#0000000D] dark:border-[#FFFFFF1A] dark:border-[1px] dark:bg-[#232323] w-[44px] h-[44px] flex justify-center items-center rounded-[10px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Tooltip__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    message: isCopy ? "Copied!" : "Copy to clipboard",
                    className: "whitespace-nowrap",
                    positionY: "right",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-5 h-5 cursor-pointer",
                        onClick: ()=>staticCopy(account || ""),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CopyIcon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            fillColor: "#EE312F"
                        })
                    })
                })
            }),
            expanded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute z-10 left-0 right-0 top-full py-[8px] mt-2", "bg-white dark:bg-[#2F2F2F] rounded-md drop-shadow-[0px_5px_20px_rgba(0,0,0,0.1)]", "overflow-hidden transition-all duration-300 ease-in"),
                children: _config_network__WEBPACK_IMPORTED_MODULE_4__/* .networkOptions.map */ .Dc.map((option, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>{
                            handleSelectNetwork(option.chainId);
                        },
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("px-4 py-3 text-base cursor-pointer", "flex flex-row items-center", "hover:bg-secondary-4 hover:text-secondary-3 hover:dark:bg-black/20"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[32px] h-[32px]",
                                children: option.icon
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "ml-3",
                                children: option.name
                            })
                        ]
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectNetworkDropdown);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91943:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37674);
/* harmony import */ var _config_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71352);
/* harmony import */ var _constants_walletSelection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41202);
/* harmony import */ var _features_account_account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29335);
/* harmony import */ var _features_contract_contractSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63794);
/* harmony import */ var _features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70355);
/* harmony import */ var _functions_sightnWallet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51716);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85277);
/* harmony import */ var _hooks_useCopyToClipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(39414);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(45700);
/* harmony import */ var _bases_Tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(67517);
/* harmony import */ var _icons_CopyIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(53305);
/* harmony import */ var _icons_DarkDownOneIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(10439);
/* harmony import */ var _icons_DownOneIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(39165);
/* harmony import */ var _icons_OptionSelected__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(96279);
/* harmony import */ var _icons_Wallet_MetamaskIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(35295);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_functions_sightnWallet__WEBPACK_IMPORTED_MODULE_10__, _hooks_common__WEBPACK_IMPORTED_MODULE_11__, _utils_format__WEBPACK_IMPORTED_MODULE_13__]);
([_functions_sightnWallet__WEBPACK_IMPORTED_MODULE_10__, _hooks_common__WEBPACK_IMPORTED_MODULE_11__, _utils_format__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const SelectWalletSightnDropdown = ({ chainId , account , className  })=>{
    const { 0: listAddressOption , 1: setListAddressOption  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(listAddressOption.find((option)=>option.value === account) || {
        label: "",
        value: ""
    });
    const { theme  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const { 0: expanded , 1: setExpanded  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const htmlRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useAppDispatch */ .TL)();
    const walletStorage = localStorage.getItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_4__/* .LOCAL_STORAGE_KEYS.wallet */ .d.wallet);
    const handleExpandedDropdown = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (walletStorage === _constants_walletSelection__WEBPACK_IMPORTED_MODULE_6__/* .WalletSelections.METAMASK */ .dv.METAMASK) return;
        setExpanded((pre)=>!pre);
    }, [
        walletStorage
    ]);
    const getDataLocal = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        const listAccount = localStorage.getItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_4__/* .LOCAL_STORAGE_KEYS.listAccountStorage */ .d.listAccountStorage);
        if (listAccount) {
            const listAccountConvert = JSON.parse(listAccount);
            const listArrAccount = listAccountConvert.map((ele)=>{
                const decodeEle = (0,_functions_sightnWallet__WEBPACK_IMPORTED_MODULE_10__/* .decrypt */ .pe)(ele);
                return {
                    label: (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenAddress */ .Xn)({
                        str: decodeEle.address,
                        start: 10
                    }),
                    value: decodeEle.address,
                    keyAccount: decodeEle.privateKey
                };
            });
            setListAddressOption(listArrAccount);
            setSelected(listArrAccount.find((ele)=>ele.value === account));
        }
    }, [
        account
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getDataLocal();
    }, [
        getDataLocal
    ]);
    const handleChangeAccount = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((address, option)=>{
        setExpanded(false);
        setSelected(option);
        const walletInfo = listAddressOption.find((ele)=>ele.value === address);
        if (walletInfo && walletInfo?.keyAccount) {
            if (localStorage.getItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_4__/* .LOCAL_STORAGE_KEYS.wallet */ .d.wallet) !== _constants_walletSelection__WEBPACK_IMPORTED_MODULE_6__/* .WalletSelections.SIGHTNWALLET */ .dv.SIGHTNWALLET) {
                dispatch(_features_contract_contractSlice__WEBPACK_IMPORTED_MODULE_8__/* .contractActions.handleActivate */ .fm.handleActivate(true));
                localStorage.setItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_4__/* .LOCAL_STORAGE_KEYS.isConnected */ .d.isConnected, "true");
                localStorage.setItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_4__/* .LOCAL_STORAGE_KEYS.wallet */ .d.wallet, _constants_walletSelection__WEBPACK_IMPORTED_MODULE_6__/* .WalletSelections.SIGHTNWALLET */ .dv.SIGHTNWALLET);
            }
            dispatch(_features_account_account__WEBPACK_IMPORTED_MODULE_7__/* .accountSliceActions.changeAccount */ .w.changeAccount(walletInfo.keyAccount));
            const encryptedPrivateKey = (0,_functions_sightnWallet__WEBPACK_IMPORTED_MODULE_10__/* .encrypt */ .HI)(walletInfo.keyAccount);
            localStorage.setItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_4__/* .LOCAL_STORAGE_KEYS.currentAccount */ .d.currentAccount, JSON.stringify(encryptedPrivateKey));
        }
    }, [
        listAddressOption,
        dispatch
    ]);
    const [isCopy, staticCopy] = (0,_hooks_useCopyToClipboard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            if (htmlRef.current && !htmlRef.current?.contains(event.target)) {
                setExpanded(false);
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return ()=>{
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!chainId) return;
        if (_config_network__WEBPACK_IMPORTED_MODULE_5__/* .SUPPORTED_CHAIN.includes */ .jT.includes(chainId)) {
            dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_9__/* .walletActions.handleSelectChainId */ .vB.handleSelectChainId(chainId));
        }
    }, [
        chainId,
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex flex-row items-center rounded-[10px] relative gap-[5px] w-full", "bg-transparent dark:text-white", className),
        ref: htmlRef,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                onClick: handleExpandedDropdown,
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative text-h9 font-semibold flex items-center grow border-[1px] gap-[10px] w-[218px] border-[#0000001A] dark:border-[#FFFFFF1A] rounded-[10px] bg-white dark:bg-[#232323]", {
                    " cursor-pointer": walletStorage === _constants_walletSelection__WEBPACK_IMPORTED_MODULE_6__/* .WalletSelections.SIGHTNWALLET */ .dv.SIGHTNWALLET
                }),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center px-[10px] py-[9px] gap-[10px] font-[400] border-r-[1px] border-r-[#0000001A]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[26px] h-[26px]",
                            children: _config_network__WEBPACK_IMPORTED_MODULE_5__/* .networkOptions[0].icon */ .Dc[0].icon
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[26px] h-[26px] flex items-center",
                        children: walletStorage && (walletStorage === _constants_walletSelection__WEBPACK_IMPORTED_MODULE_6__/* .WalletSelections.SIGHTNWALLET */ .dv.SIGHTNWALLET ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/flickrzWallet-icon.png`,
                            width: 26,
                            height: 21,
                            alt: "Flickrz Wallet"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[21px] h-[21px] flex items-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Wallet_MetamaskIcon__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {})
                        }))
                    }),
                    (0,_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .shortenAddress */ .Xn)({
                        str: account || ""
                    }),
                    walletStorage === _constants_walletSelection__WEBPACK_IMPORTED_MODULE_6__/* .WalletSelections.SIGHTNWALLET */ .dv.SIGHTNWALLET && listAddressOption.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute top-1/2 right-[12px] -translate-y-1/2", "transition-transform duration-300", {
                            "rotate-180 ": expanded
                        }),
                        children: theme === "dark" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_DarkDownOneIcon__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_DownOneIcon__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-[#0000000D] dark:border-[#FFFFFF1A] dark:border-[1px] dark:bg-[#232323] w-[44px] h-[44px] flex justify-center items-center rounded-[10px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Tooltip__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    message: isCopy ? "Copied!" : "Copy to clipboard",
                    className: "whitespace-nowrap",
                    positionY: "right",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-5 h-5 cursor-pointer",
                        onClick: ()=>staticCopy(account || ""),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CopyIcon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            fillColor: "#EE312F"
                        })
                    })
                })
            }),
            walletStorage && expanded && listAddressOption.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute z-10 left-0 right-0 top-full py-[8px] mt-2", "bg-white dark:bg-[#2F2F2F] rounded-md drop-shadow-[0px_5px_20px_rgba(0,0,0,0.1)]", "overflow-hidden transition-all duration-300 ease-in"),
                children: listAddressOption.map((option, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>{
                            handleChangeAccount(option.value, option);
                        },
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("px-4 py-3 text-base", "hover:bg-secondary-4 hover:text-secondary-3", "hover:dark:bg-black/20 dark:text-white hover:dark:text-secondary-3", "flex flex-row items-center", option.value === selected?.value && "text-[#00A0F2] justify-between"),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-[10px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-[26px] h-[26px] flex items-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/flickrzWallet-icon.png`,
                                            width: 26,
                                            height: 21,
                                            alt: "Flickrz Wallet"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex gap-[5px] items-center"),
                                        children: option.label
                                    })
                                ]
                            }),
                            option.value === selected?.value && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_OptionSelected__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
                        ]
                    }, `flickrz ${index}`))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectWalletSightnDropdown);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70586:
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
/* harmony import */ var _config_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71352);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14613);
/* harmony import */ var _features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70355);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85277);
/* harmony import */ var _icons_TransferIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_6__]);
_hooks_common__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const TransferHeader = ({ className  })=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .TL)();
    const { transferFromCryptoWallet , networkClaim , tabSelected , filtersTransferNfts  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .CG)((state)=>state.wallet);
    const { theme  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .CG)((state)=>state.accessibility);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).state;
    const handleClickTransferBtn = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_5__/* .walletActions.handleSwitchTransfer */ .vB.handleSwitchTransfer());
        dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_5__/* .walletActions.setTransferNftFilters */ .vB.setTransferNftFilters({
            page: 1,
            tokenId: "",
            chainId: _config_network__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_CHAIN_ID */ .rC,
            total: 0
        }));
        dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_5__/* .walletActions.clearTransferNftState */ .vB.clearTransferNftState());
    }, [
        dispatch
    ]);
    const networkOptionsArr = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (tabSelected === "transferTokens") return _config_network__WEBPACK_IMPORTED_MODULE_3__/* .networkOptions */ .Dc;
        return [
            ..._config_network__WEBPACK_IMPORTED_MODULE_3__/* .networkOptions */ .Dc,
            {
                label: "View all",
                value: ""
            }, 
        ];
    }, [
        tabSelected
    ]);
    const handleSelectNetworkClaim = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value)=>{
        if (tabSelected === "transferTokens") {
            dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_5__/* .walletActions.handleSetNetworkClaim */ .vB.handleSetNetworkClaim(value));
        } else {
            dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_5__/* .walletActions.setTransferNftState */ .vB.setTransferNftState({
                total: 0,
                nftsList: []
            }));
            dispatch(_features_profile_walletSlice__WEBPACK_IMPORTED_MODULE_5__/* .walletActions.setTransferNftFilters */ .vB.setTransferNftFilters({
                chainId: Number(value) || "",
                page: 1,
                tokenId: ""
            }));
        }
    }, [
        dispatch,
        tabSelected
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative block", className),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-full h-[70px] flex justify-between"),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-[49%] flex"),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("h-full box-border border-[2px] bg-[#FAEEE5] dark:bg-[#49443B] rounded-l-xl border-r-0 w-full", theme === "light" ? "border-[#F5E5D9]" : "border-[#49443B]", "px-4 lg:px-10 flex gap-[50px] items-center"),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-h7 text-black/50 dark:text-[#898989] hidden lg:block",
                                            children: [
                                                lang["wallet/from"],
                                                ":"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-[14px] leading-[18px] lg:text-h6 font-semibold dark:text-white whitespace-nowrap lg:whitespace-normal",
                                            children: transferFromCryptoWallet ? `${lang["wallet/crypto-wallet"]}` : `${lang["wallet/spending-wallet"]}`
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("border-t-[35px] border-b-[35px] border-t-transparent border-b-transparent", "border-l-[35px]", theme === "light" ? "border-[#F5E5D9]" : "border-[#49443B]", "relative"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("border-t-[33px] border-b-[33px] border-t-transparent border-b-transparent", "border-l-[33px]", "absolute -top-[33px] -left-[35px]", theme === "light" ? "border-[#FAEEE5]" : "border-[#49443B]")
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-[49%] flex"),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("border-t-[35px] border-b-[35px] border-t-transparent border-b-transparent", "border-r-[35px]", theme === "light" ? "border-[#F5E5D9]" : "border-[#49443B]", "relative"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("border-t-[33px] border-b-[33px] border-t-transparent border-b-transparent", "border-r-[33px]", "absolute -top-[33px] -right-[35px]", theme === "light" ? "border-[#FAEEE5]" : "border-[#49443B]")
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("h-full box-border border-[2px] bg-[#FAEEE5] dark:bg-[#49443B] rounded-r-xl border-l-0 w-full", theme === "light" ? "border-[#F5E5D9]" : "border-[#49443B]", "px-4 lg:px-10 items-center", "flex gap-[50px]"),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-h7 text-black/50 dark:text-[#898989] hidden lg:block",
                                            children: [
                                                lang["wallet/to"],
                                                ":"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-[14px] leading-[18px] lg:text-h6 font-semibold dark:text-white", "flex lg:flex-col lg:!items-start xl:!flex-row xl:!items-center xl:gap-4 whitespace-nowrap lg:whitespace-normal"),
                                            children: !transferFromCryptoWallet ? `${lang["wallet/crypto-wallet"]}` : `${lang["wallet/spending-wallet"]}`
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute top-[20px] lg:top-0 left-0 flex justify-center w-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[70px] h-[70px] bg-main/10 rounded-[50%] p-[5px] cursor-pointer",
                        onClick: handleClickTransferBtn,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "btn-transfer w-full h-full rounded-[50%] flex items-center justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_TransferIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                className: "fill-white"
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransferHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LogoIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



function LogoIcon({ className  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBoxWidth: 21,
        viewBoxHeight: 14,
        className: className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M3.93755 10.7036C2.76616 9.83071 2.37 9.00902 2.37 9.00902C1.74105 8.04746 1.45381 6.86965 1.49599 5.72442C1.65189 0.865853 7.31506 -1.66007 11.0866 1.38108C12.7823 2.72225 13.4918 4.87123 13.1726 6.98391C13.0273 8.06721 12.4481 9.05334 11.7876 9.87823L11.7887 9.87716C11.7572 9.86595 11.7534 9.8825 11.7582 9.90759L11.7593 9.90652C11.7422 9.90012 11.739 9.90706 11.7433 9.92254L11.7444 9.92147C11.7289 9.91613 11.7235 9.92147 11.7283 9.93749L11.7294 9.93589C10.6824 11.0037 9.19869 11.7709 7.69306 11.7976C6.37004 11.8873 5.02673 11.4645 3.93862 10.7031M10.3407 8.60592C12.4278 8.2119 13.3589 5.89954 12.7198 3.99776C12.2051 2.32556 10.7652 0.954482 9.03638 0.616518C5.11909 -0.0433925 3.77204 4.24176 6.06037 6.94921C7.07159 8.17292 8.75447 8.97379 10.3402 8.60646L10.3407 8.60592Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M7.33277 11.8734C6.14803 11.8734 4.94193 11.4826 3.90134 10.7554L3.89974 10.7544C2.75771 9.90278 2.34927 9.10993 2.3151 9.04052C1.70218 8.10138 1.38877 6.92304 1.43309 5.72281C1.46993 4.56583 1.82711 3.46865 2.46566 2.55033C3.06471 1.68914 3.896 0.997724 4.87039 0.550843C6.94943 -0.402718 9.34614 -0.103195 11.1262 1.33248C12.784 2.64323 13.5726 4.76018 13.2346 6.99405C13.1118 7.91077 12.6601 8.87127 11.8923 9.84832L11.9004 9.85099L11.8603 9.89371H11.8614L11.8347 9.92094L11.7738 9.985L11.7124 10.088L11.7012 10.0539C10.5795 11.1623 9.08933 11.8361 7.69423 11.8612C7.57463 11.8692 7.45397 11.8734 7.33384 11.8734H7.33277ZM3.97449 10.6529C5.09676 11.4378 6.41605 11.8222 7.68782 11.7357C9.07652 11.7106 10.5602 11.0293 11.6649 9.91132C11.6686 9.89424 11.6777 9.88303 11.6836 9.87769C11.6852 9.87609 11.6873 9.87395 11.6905 9.87181C11.6932 9.86808 11.6953 9.86541 11.698 9.86274C11.7023 9.84939 11.7098 9.83871 11.7204 9.82964C11.7295 9.82163 11.7429 9.81415 11.7605 9.81202C12.5341 8.83817 12.9885 7.88407 13.1102 6.9759C13.4412 4.78634 12.6703 2.71371 11.0477 1.43072C10.155 0.711015 9.09841 0.269473 7.99162 0.154149C6.95049 0.0452314 5.88962 0.221955 4.92431 0.665099C3.97022 1.1029 3.15654 1.77937 2.57031 2.62187C1.94564 3.51991 1.59646 4.5936 1.56016 5.72655C1.51638 6.90275 1.82337 8.05599 2.42349 8.97431L2.42776 8.98126C2.43149 8.98926 2.83246 9.80027 3.97502 10.6524L3.97449 10.6529ZM11.7717 9.9236L11.7669 9.93695C11.7669 9.93695 11.7781 9.93802 11.7888 9.93322C11.7893 9.92681 11.7888 9.92147 11.7877 9.91827L11.7717 9.9236ZM9.56077 8.75648C8.28206 8.75648 6.93127 8.10244 6.01135 6.98924C4.80045 5.55623 4.53242 3.5402 5.36105 2.0869C6.07275 0.838619 7.41553 0.280151 9.04555 0.55458C10.7781 0.893078 12.2426 2.23746 12.7786 3.9796C13.1326 5.033 13.0173 6.22095 12.469 7.15689C11.9975 7.96203 11.2458 8.49914 10.3526 8.66785C10.0952 8.72765 9.82933 8.75648 9.56077 8.75648ZM8.25643 0.611708C7.03272 0.611708 6.04018 1.15042 5.47103 2.14883C4.66857 3.55728 4.93072 5.51405 6.10852 6.90809C7.01083 8.00047 8.66487 8.92947 10.3259 8.54452H10.3285C11.186 8.38221 11.9078 7.86646 12.3611 7.09282C12.8913 6.18785 13.0029 5.03834 12.6596 4.01751C12.1449 2.34371 10.6836 1.002 9.02419 0.677913C8.75991 0.633598 8.50363 0.611708 8.25697 0.611708H8.25643Z",
                fill: "#191919"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M3.52222 11.1174C3.59377 10.9541 3.6888 10.7693 3.82709 10.6316C4.46083 11.0646 5.27291 11.4757 6.02198 11.6535C5.92267 11.8959 5.8255 12.1383 5.71178 12.3743C5.70057 12.3972 5.67708 12.418 5.69523 12.4479C5.64771 12.4554 5.64237 12.5024 5.62529 12.5328C5.52545 12.7074 5.40959 12.8719 5.27398 13.0192C4.85005 13.5435 3.84577 13.5611 3.58149 12.8671C3.39142 12.3102 3.41865 11.6834 3.52222 11.1169V11.1174Z",
                fill: "#EC1818"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M4.42506 13.4522C4.3642 13.4522 4.30386 13.4474 4.24353 13.4378C3.9061 13.3839 3.64769 13.1826 3.5345 12.8852C3.36686 12.3945 3.34657 11.7971 3.4731 11.1078L3.47631 11.0966C3.53877 10.9546 3.63915 10.7474 3.79185 10.5953L3.82121 10.5659L3.85538 10.5894C4.56548 11.0742 5.3594 11.4436 6.03373 11.6038L6.09086 11.6172L6.04013 11.741C5.95204 11.9573 5.86074 12.1804 5.75716 12.3956C5.75396 12.4025 5.74969 12.409 5.74595 12.4159C5.74435 12.4186 5.74168 12.4228 5.74008 12.4255L5.76891 12.4826L5.70324 12.4976C5.69683 12.4987 5.69416 12.5013 5.68295 12.528C5.67868 12.5387 5.67387 12.5488 5.66907 12.5579C5.56229 12.7448 5.44162 12.9114 5.31082 13.0534C5.10953 13.3022 4.7689 13.4517 4.42453 13.4517L4.42506 13.4522ZM3.57081 11.1324C3.44854 11.8024 3.4683 12.3807 3.629 12.8516C3.72991 13.1164 3.95415 13.2904 4.25902 13.3385C4.62635 13.3972 5.01823 13.2563 5.235 12.9877C5.3626 12.8489 5.47846 12.6882 5.58204 12.5077C5.58524 12.5019 5.58791 12.4954 5.59058 12.489C5.59913 12.4682 5.61194 12.4383 5.63917 12.418C5.6413 12.394 5.65358 12.3748 5.66106 12.3625C5.6632 12.3588 5.66533 12.3556 5.66747 12.3518C5.76944 12.1399 5.86021 11.9178 5.94777 11.7031L5.95418 11.6876C5.29213 11.5211 4.52544 11.1623 3.83456 10.6962C3.71123 10.8313 3.6258 11.0064 3.57081 11.1313V11.1324Z",
                fill: "#191919"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.3329 9.95245C12.3329 9.98288 12.3585 9.99142 12.3783 10.0053C12.6233 10.1794 12.8849 10.3251 13.1572 10.4511C13.3382 10.5349 13.523 10.6108 13.7098 10.6807C13.7744 10.7047 13.8481 10.7037 13.9036 10.7533C13.7408 10.9914 13.6191 11.252 13.4888 11.5077C13.4434 11.5974 13.374 11.6727 13.3388 11.7683C13.2352 11.882 13.1476 12.0091 13.0408 12.1207C12.8454 12.3246 12.6164 12.4661 12.335 12.5056C12.1764 12.528 12.0221 12.4901 11.8748 12.4271C11.6393 12.3262 11.509 12.1436 11.4439 11.8996C11.3692 11.6177 11.3879 11.3321 11.3895 11.047C11.3911 10.7859 11.4226 10.5296 11.5219 10.2845C11.5651 10.1783 11.6185 10.079 11.6932 9.99142C11.7071 9.97541 11.7269 9.96153 11.7269 9.93643L11.7258 9.93803C11.736 9.93803 11.7413 9.93216 11.7418 9.92202L11.7408 9.92308C11.7509 9.92308 11.7557 9.91721 11.7568 9.90707L11.7557 9.90813C11.7723 9.9044 11.7819 9.89318 11.7861 9.8777L11.7851 9.87877C11.8438 9.83339 11.8977 9.78267 11.9356 9.71806C11.9613 9.71646 11.9746 9.73622 11.9906 9.7501C12.0798 9.82751 12.1716 9.90119 12.287 9.93697C12.2944 9.95031 12.3067 9.95245 12.3206 9.95031C12.3238 9.95031 12.327 9.95085 12.3302 9.95245H12.3329Z",
                fill: "#EC1818"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.2438 12.5622C12.1237 12.5622 11.9961 12.5328 11.8567 12.473C11.6208 12.3721 11.4707 12.1885 11.397 11.9124C11.3319 11.6674 11.3357 11.4191 11.3394 11.1788C11.3399 11.1345 11.341 11.0907 11.341 11.0464C11.3426 10.7384 11.3858 10.4901 11.4771 10.2658C11.522 10.1553 11.5716 10.0667 11.632 9.98982L11.6122 9.99462L11.6261 9.97914H11.6154L11.688 9.90706L11.7777 9.75597V9.81149L11.8178 9.76771V9.77465L11.8957 9.69136L11.9085 9.67001L11.9352 9.6684C11.9779 9.66627 12.0036 9.69083 12.0185 9.70578C12.0212 9.70791 12.0233 9.71058 12.026 9.71272C12.1077 9.78373 12.1968 9.85634 12.3042 9.88944L12.3228 9.89532L12.3261 9.90065C12.3351 9.90065 12.3447 9.90332 12.3533 9.90706L12.3826 9.92041V9.94924C12.3853 9.95138 12.3896 9.95351 12.3923 9.95511C12.3971 9.95832 12.4024 9.96152 12.4072 9.96472C12.6379 10.1281 12.8899 10.2728 13.1782 10.4063C13.349 10.4853 13.5338 10.5622 13.7276 10.6342C13.7457 10.6412 13.766 10.646 13.7879 10.6508C13.8359 10.662 13.8909 10.6748 13.9374 10.7159L13.9705 10.7453L13.9454 10.7821C13.813 10.9759 13.7057 11.19 13.6016 11.3972C13.5791 11.442 13.5567 11.4869 13.5338 11.5312C13.5135 11.5707 13.49 11.6065 13.467 11.6417C13.435 11.6898 13.4051 11.7357 13.3864 11.7864L13.3832 11.7955L13.3768 11.803C13.3303 11.8542 13.2855 11.9098 13.2428 11.9631C13.191 12.0277 13.1376 12.0945 13.0783 12.1564C12.8578 12.3871 12.617 12.5179 12.3431 12.5563C12.3106 12.5611 12.2769 12.5633 12.2433 12.5633L12.2438 12.5622ZM11.7729 9.97166C11.7649 9.99195 11.751 10.0064 11.7414 10.0165C11.7388 10.0192 11.7361 10.0219 11.7339 10.0245C11.6693 10.0998 11.6176 10.1884 11.5711 10.3038C11.4846 10.5163 11.444 10.7522 11.4419 11.0475C11.4419 11.0918 11.4408 11.1367 11.4403 11.181C11.4366 11.4143 11.4334 11.6556 11.4948 11.8873C11.561 12.1351 11.6886 12.292 11.8968 12.3812C12.0575 12.4501 12.1995 12.4746 12.3298 12.4559C12.5807 12.4207 12.8018 12.2995 13.0062 12.0859C13.0623 12.0272 13.1146 11.9621 13.1648 11.8991C13.207 11.8468 13.2502 11.7923 13.2967 11.741C13.3191 11.6834 13.3522 11.6337 13.3843 11.5851C13.4067 11.551 13.428 11.5189 13.4457 11.4848C13.4681 11.4404 13.4905 11.3956 13.5129 11.3513C13.6106 11.1564 13.7115 10.9551 13.8349 10.7677C13.8146 10.7592 13.7916 10.7538 13.7665 10.748C13.743 10.7426 13.7185 10.7368 13.6939 10.7277C13.498 10.6545 13.3106 10.5771 13.1376 10.497C12.8439 10.3609 12.5861 10.2135 12.3506 10.0464C12.3474 10.0443 12.3442 10.0421 12.341 10.04C12.3282 10.0325 12.309 10.0202 12.2962 9.99943C12.2807 9.99569 12.2695 9.98822 12.2614 9.98074C12.1419 9.94016 12.0479 9.86328 11.9614 9.788C11.9598 9.7864 11.9582 9.7848 11.9566 9.7832C11.9251 9.82644 11.8845 9.86702 11.8311 9.9092C11.8231 9.92468 11.8124 9.93696 11.7985 9.9455C11.7943 9.95138 11.7895 9.95672 11.7836 9.96099C11.7809 9.96472 11.7777 9.96846 11.7745 9.97113L11.7729 9.97166Z",
                fill: "#191919"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M5.69579 12.4485C5.67764 12.4186 5.70166 12.3972 5.71234 12.3748C5.82606 12.1388 5.92324 11.8959 6.02254 11.654C6.25479 11.6994 6.48758 11.7442 6.7225 11.7752C6.87252 11.795 7.02309 11.7987 7.17418 11.8056C7.18433 11.8142 7.19554 11.8152 7.20782 11.8104C7.3098 11.8104 7.41124 11.8104 7.51321 11.8104C7.52977 11.8158 7.54632 11.8174 7.56127 11.8056C7.60505 11.8035 7.64883 11.8008 7.69314 11.7987C7.70435 11.8158 7.71396 11.8126 7.72304 11.7966C7.81808 11.8136 7.91098 11.7811 8.00494 11.7859C7.89549 12.079 7.74493 12.3497 7.55326 12.598C7.41604 12.7757 7.26441 12.9375 7.06206 13.0432C6.86719 13.1452 6.65949 13.1815 6.44219 13.1532C6.28576 13.1329 6.1384 13.0827 6.01186 12.9834C5.83674 12.8468 5.72996 12.669 5.69579 12.449V12.4485Z",
                fill: "#EC1818"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M6.58313 13.212C6.53454 13.212 6.48542 13.2087 6.43523 13.2023C6.25317 13.1783 6.10474 13.1196 5.98034 13.0224C5.79614 12.8783 5.68456 12.6909 5.64718 12.4645C5.62583 12.4191 5.64879 12.3817 5.66053 12.363C5.66267 12.3593 5.6648 12.3561 5.66694 12.3524C5.76892 12.1404 5.85968 11.9183 5.94724 11.7037L5.99102 11.5958L6.0316 11.6038C6.26652 11.6497 6.49663 11.6935 6.72835 11.7245C6.84848 11.7405 6.97234 11.7458 7.09194 11.7506L7.19285 11.7549L7.19819 11.7592H7.20673L7.52654 11.7608C7.53188 11.7624 7.53402 11.7624 7.53402 11.7624L7.5463 11.7533H7.55697L7.69312 11.7469L7.69526 11.7437L7.72996 11.7458C7.77694 11.7544 7.82553 11.7485 7.87679 11.7421C7.9179 11.7373 7.96114 11.7314 8.00492 11.7341L8.0738 11.7373L8.04977 11.8019C7.93872 12.0982 7.78442 12.3758 7.59114 12.6268C7.47422 12.7779 7.31138 12.9669 7.0834 13.0859C6.92429 13.1692 6.75611 13.2109 6.58152 13.2109L6.58313 13.212ZM5.74062 12.426L5.74542 12.441C5.77692 12.6449 5.87676 12.8142 6.04228 12.9434C6.15173 13.0294 6.28467 13.0811 6.44805 13.1025C6.65467 13.1292 6.85328 13.0945 7.03802 12.9979C7.24731 12.8884 7.3952 12.7186 7.51266 12.5665C7.68458 12.3433 7.82446 12.0988 7.92964 11.8387C7.91683 11.8398 7.90348 11.8414 7.89067 11.843C7.84261 11.8489 7.79296 11.8548 7.74117 11.8494C7.72996 11.8569 7.71875 11.8596 7.70914 11.8596C7.7006 11.8596 7.68725 11.8585 7.67337 11.8494L7.57566 11.8548C7.55537 11.8649 7.53188 11.8665 7.50572 11.8601H7.21474C7.19498 11.8649 7.17523 11.8633 7.15814 11.8548L7.08767 11.8516C6.96594 11.8462 6.83994 11.8409 6.71553 11.8243C6.49396 11.795 6.27559 11.7538 6.05349 11.7106L6.04067 11.7416C5.95258 11.9578 5.86128 12.181 5.7577 12.3961C5.7545 12.4031 5.75023 12.4095 5.74649 12.4164C5.74489 12.4191 5.74222 12.4234 5.74062 12.426Z",
                fill: "#191919"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M13.3398 11.7677C13.3751 11.6727 13.444 11.5969 13.4899 11.5072C13.6201 11.2514 13.7419 10.9909 13.9047 10.7528C13.9832 10.7442 14.0526 10.7821 14.1258 10.7992C14.2731 10.8345 14.4205 10.8756 14.5705 10.8926C14.7606 10.914 14.9485 10.9487 15.1402 10.961C15.2651 10.969 15.3901 10.9626 15.5139 10.9738C15.366 11.2728 15.2053 11.5632 14.9784 11.8136C14.8551 11.9498 14.7237 12.0715 14.5652 12.1628C14.31 12.3096 14.043 12.3273 13.7664 12.2258C13.5454 12.1447 13.4077 11.9898 13.3398 11.7677Z",
                fill: "#EC1818"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M14.108 12.3401C13.9906 12.3401 13.8704 12.3177 13.7487 12.2733C13.5191 12.189 13.3648 12.024 13.2917 11.7827L13.2869 11.7667L13.2927 11.7506C13.3157 11.6892 13.3504 11.6364 13.3835 11.5857C13.4059 11.5515 13.4273 11.5195 13.4449 11.4853C13.4673 11.441 13.4898 11.3961 13.5122 11.3518C13.6174 11.142 13.7268 10.9247 13.863 10.725L13.8758 10.7058L13.8987 10.7031C13.9644 10.6962 14.0231 10.7154 14.0754 10.7325C14.0957 10.7394 14.1166 10.7458 14.1374 10.7512C14.1651 10.7576 14.1929 10.7645 14.2201 10.7715C14.3365 10.8003 14.4572 10.8302 14.5763 10.8435C14.6473 10.8515 14.7183 10.8612 14.7893 10.8713C14.9051 10.8873 15.0247 10.9044 15.1433 10.9113C15.1972 10.9145 15.2527 10.9156 15.3066 10.9161C15.376 10.9172 15.4476 10.9177 15.5186 10.9247L15.5917 10.9316L15.5592 10.9973C15.4166 11.2856 15.2516 11.5883 15.0157 11.8483C14.8656 12.0139 14.7343 12.1244 14.5907 12.2071C14.4358 12.2963 14.2746 12.3406 14.1086 12.3406L14.108 12.3401ZM13.3931 11.7693C13.4593 11.9727 13.5875 12.1068 13.7834 12.1783C14.052 12.2765 14.2992 12.2573 14.5399 12.119C14.6745 12.0416 14.7978 11.937 14.9409 11.7795C15.1507 11.5483 15.3034 11.2797 15.4348 11.0187C15.3915 11.0165 15.3478 11.016 15.305 11.0155C15.25 11.0149 15.1929 11.0138 15.1363 11.0106C15.0141 11.0032 14.8929 10.9861 14.7749 10.9695C14.7049 10.9599 14.6344 10.9498 14.5645 10.9423C14.439 10.9284 14.3152 10.8975 14.1956 10.8681C14.1683 10.8612 14.1406 10.8547 14.1134 10.8478C14.0899 10.8419 14.0669 10.8345 14.0434 10.827C14.005 10.8142 13.9681 10.8019 13.9313 10.8014C13.8053 10.9898 13.7017 11.1959 13.6013 11.3956C13.5789 11.4404 13.5565 11.4853 13.5335 11.5296C13.5132 11.5691 13.4898 11.6049 13.4668 11.6401C13.4385 11.6834 13.4113 11.7245 13.3926 11.7693H13.3931Z",
                fill: "#191919"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M10.3397 8.60646C7.89811 9.14517 5.43359 7.11311 5.00967 4.73562C4.45441 1.79058 7.00862 -0.25055 9.78014 0.827411C11.3562 1.44247 12.5821 2.91179 12.8544 4.58826C13.2132 6.32079 12.1475 8.29092 10.3397 8.60646ZM11.3616 4.07197C11.3776 2.86587 10.1635 1.77617 8.9702 2.09064C7.86234 2.38589 7.76998 3.75964 8.41761 4.54982C9.22594 5.71481 11.2585 5.72816 11.3621 4.07197H11.3616Z",
                fill: "black"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M9.53723 8.75649C8.71608 8.75649 7.88318 8.49487 7.12716 7.98979C5.98994 7.23058 5.1752 6.01807 4.94828 4.7463C4.6872 3.36134 5.11006 2.05273 6.08017 1.24707C7.06897 0.42538 8.46087 0.247055 9.80365 0.768683C11.4214 1.4003 12.6435 2.89524 12.9174 4.57759C13.1085 5.50125 12.8982 6.53329 12.3536 7.33469C11.8645 8.0544 11.1544 8.52744 10.353 8.66786C10.085 8.72712 9.81219 8.75595 9.53829 8.75595L9.53723 8.75649ZM8.28254 0.599968C7.49396 0.599968 6.75129 0.852507 6.15972 1.3437C5.2115 2.13122 4.81481 3.36348 5.07108 4.72334C5.29212 5.96254 6.08658 7.14462 7.19604 7.88515C8.17629 8.53972 9.28789 8.77357 10.3258 8.54506H10.3285C11.0962 8.41051 11.778 7.95562 12.2479 7.26421C12.7738 6.49058 12.9772 5.49484 12.7919 4.60108C12.525 2.95878 11.3338 1.50174 9.75666 0.886143C9.26387 0.69447 8.76413 0.599968 8.28201 0.599968H8.28254ZM9.98838 5.44092C9.37065 5.44092 8.73636 5.12004 8.3653 4.58559C7.98249 4.11842 7.84794 3.45691 8.02627 2.90485C8.16935 2.46171 8.49824 2.15097 8.95313 2.02978C9.50252 1.88562 10.0978 2.02177 10.5869 2.40404C11.1192 2.81996 11.4321 3.44356 11.4241 4.07251V4.07571C11.3824 4.7415 11.0236 5.21721 10.4395 5.38005C10.2927 5.42116 10.1405 5.44092 9.98784 5.44092H9.98838ZM9.3904 2.09918C9.25425 2.09918 9.11864 2.11627 8.9857 2.15151C8.57352 2.26149 8.2756 2.54286 8.1464 2.94329C7.98355 3.44837 8.11169 4.07785 8.46567 4.50978C8.89494 5.12805 9.72783 5.44839 10.4059 5.25885C10.9425 5.10936 11.2591 4.6865 11.2981 4.06931C11.305 3.47987 11.0108 2.89471 10.5095 2.50282C10.1704 2.238 9.77802 2.09865 9.3904 2.09865V2.09918Z",
                fill: "#191919"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M20.8612 4.58878C20.1532 0.457397 15.135 -1.32853 11.9604 1.39227C11.8301 1.50012 11.7073 1.61491 11.5893 1.73611C11.5044 1.83061 11.7111 1.94647 11.7591 2.01855C12.1884 2.48358 12.5269 3.02656 12.7789 3.60532C12.9834 4.07997 13.112 4.58931 13.1804 5.10293C13.2252 5.48468 13.2807 5.87603 13.2364 6.25671C13.2119 7.43611 12.7858 8.57601 12.0682 9.50981C12.0186 9.57335 11.9689 9.63688 11.9187 9.70042C11.9252 9.70629 11.9316 9.71217 11.9374 9.71804C11.9631 9.71644 11.9764 9.73619 11.9924 9.75007C12.088 9.84084 12.2007 9.90918 12.3224 9.95029C12.3256 9.95029 12.3293 9.95082 12.332 9.95242C12.332 9.98286 12.3576 9.9914 12.3774 10.0053C12.6224 10.1793 12.8841 10.3251 13.1563 10.4511C13.3966 10.575 13.6593 10.6454 13.9033 10.7528C17.8094 11.8617 21.5275 8.60324 20.8601 4.58878H20.8612ZM20.7752 5.31757C20.7517 6.69291 19.7047 7.99298 18.2787 8.03249C18.2776 8.06506 18.2349 8.06666 18.2317 8.03409C15.8606 8.09282 13.8841 5.7228 13.9172 3.435C13.8958 3.41525 13.8958 3.3955 13.9172 3.37574C13.9161 2.2209 14.5856 1.01426 15.7335 0.667223C16.5034 0.407744 17.3513 0.560976 18.0806 0.888795C19.7362 1.67364 20.8553 3.48145 20.7747 5.31757H20.7752Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M15.4531 11.0325C14.9325 11.0325 14.4061 10.9604 13.8872 10.8131L13.8791 10.8099C13.7798 10.7661 13.6741 10.7271 13.5716 10.6898C13.4248 10.6358 13.2726 10.5803 13.129 10.5066C12.837 10.3715 12.5785 10.2237 12.3426 10.056C12.3399 10.0539 12.3367 10.0523 12.3335 10.0501C12.3201 10.0416 12.2972 10.0277 12.2828 10.0021C12.1605 9.95723 12.0457 9.88622 11.9501 9.79493C11.948 9.79332 11.9443 9.78959 11.94 9.78532C11.9384 9.78371 11.9363 9.78158 11.9347 9.77998L11.9149 9.78104L11.8337 9.7063L12.019 9.46978C12.7398 8.5317 13.1504 7.38967 13.1739 6.25458V6.24871C13.2139 5.90807 13.1712 5.55196 13.1295 5.20758L13.1178 5.10988C13.0468 4.5749 12.9133 4.07623 12.7211 3.62989C12.4606 3.03084 12.1215 2.5028 11.7131 2.06073L11.7072 2.05325C11.6976 2.03884 11.6714 2.01588 11.6469 1.99346C11.5748 1.92885 11.4403 1.80819 11.5428 1.69393C11.6661 1.56686 11.7926 1.4494 11.9202 1.34369C13.4333 0.0468265 15.4713 -0.318901 17.3704 0.366638C19.2599 1.04844 20.5877 2.62293 20.923 4.57811C21.2369 6.46814 20.5802 8.35124 19.1654 9.61607C18.1291 10.5424 16.8108 11.0331 15.4526 11.0331L15.4531 11.0325ZM13.9261 10.6935C15.7548 11.2114 17.6822 10.7736 19.0821 9.5221C20.4115 8.33362 21.0559 6.58614 20.8306 4.81143C20.8429 4.98014 20.8461 5.14992 20.8386 5.31971C20.813 6.79917 19.6859 8.03516 18.3181 8.09389C18.3031 8.10938 18.2823 8.11952 18.2588 8.12006C18.2353 8.12166 18.2139 8.11205 18.1979 8.0971C18.1808 8.0971 18.1638 8.0971 18.1467 8.0971C17.1301 8.0971 16.129 7.65876 15.3186 6.85629C14.3906 5.93744 13.8444 4.66834 13.8546 3.45583C13.8418 3.43608 13.8386 3.41792 13.8386 3.40404C13.8386 3.39016 13.8418 3.37147 13.8546 3.35172C13.8626 2.06233 14.625 0.93525 15.7158 0.605829C16.4024 0.374112 17.2385 0.448326 18.0719 0.815121C17.8354 0.688584 17.5871 0.578065 17.3282 0.484631C15.4718 -0.18489 13.4809 0.172295 12.0014 1.43979C11.8765 1.54337 11.7537 1.65763 11.6346 1.77989C11.618 1.79858 11.6912 1.86425 11.7307 1.90002C11.7611 1.92725 11.79 1.95341 11.8087 1.97904C12.2251 2.43126 12.5711 2.96997 12.837 3.58077C13.034 4.03833 13.1707 4.54767 13.2433 5.09493L13.255 5.19317C13.2972 5.54395 13.3404 5.90647 13.2999 6.26099C13.2753 7.42224 12.8556 8.58936 12.1189 9.54826L12.0137 9.68281C12.0195 9.68761 12.0243 9.69242 12.0281 9.69615L12.035 9.70256C12.1231 9.78638 12.2267 9.84992 12.3367 9.88836C12.3442 9.88943 12.3516 9.89156 12.3591 9.89477L12.3959 9.91132V9.94122C12.3959 9.94122 12.3986 9.94282 12.3997 9.94335C12.405 9.94656 12.4104 9.94976 12.4152 9.9535C12.6453 10.1163 12.8968 10.2605 13.184 10.3934C13.3228 10.465 13.4712 10.5194 13.6143 10.5718C13.7174 10.6091 13.8236 10.6481 13.9256 10.693L13.9261 10.6935ZM13.9785 3.40458L13.9801 3.40618V3.43554C13.9635 4.62135 14.4963 5.86696 15.4067 6.76767C16.2123 7.56532 17.2086 7.99352 18.2177 7.97109L18.2769 7.96896C19.5952 7.93265 20.6881 6.74257 20.7121 5.31597V5.31437C20.7911 3.52097 19.6977 1.72437 18.0538 0.945394C17.239 0.579133 16.4222 0.501183 15.7537 0.726492C14.5876 1.07887 13.979 2.32555 13.9801 3.37521L13.9779 3.40458H13.9785Z",
                fill: "#191919"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M13.9174 3.37521C14.0018 0.547095 16.7813 -0.236682 18.854 1.3565C20.0755 2.26895 20.8412 3.78578 20.775 5.31703C20.7525 6.70893 19.6767 8.02128 18.2314 8.03356C15.8603 8.09229 13.8838 5.72227 13.9169 3.43447C13.9377 3.41472 13.9377 3.39496 13.9169 3.37521H13.9174ZM19.6858 3.80821C19.6773 3.2396 19.3537 2.64055 18.8919 2.29511C17.5913 1.28069 16.2795 2.41311 16.9912 3.86534C17.5592 5.1355 19.5982 5.59733 19.6858 3.80874V3.80821Z",
                fill: "black"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M18.1449 8.09763C17.1294 8.09763 16.1283 7.65929 15.3179 6.85683C14.3835 5.9321 13.8368 4.65232 13.8544 3.43341L13.8571 3.40458L13.8544 3.40191V3.37308C13.8907 2.14776 14.4503 1.18939 15.3889 0.744112C16.4465 0.242772 17.7888 0.457937 18.8924 1.30632C20.1583 2.25187 20.9041 3.79006 20.8379 5.31971C20.8267 6.01486 20.5518 6.71321 20.0835 7.23484C19.5897 7.78476 18.9319 8.09069 18.2319 8.09656C18.2031 8.0971 18.1737 8.09763 18.1444 8.09763H18.1449ZM13.9799 3.4569C13.9692 4.63577 14.5015 5.8723 15.4065 6.76767C16.2154 7.56853 17.2159 7.99512 18.2303 7.97056C18.8956 7.96522 19.5203 7.67371 19.9901 7.15048C20.438 6.65181 20.7013 5.98282 20.7119 5.31597C20.776 3.8253 20.0499 2.32822 18.816 1.40669C17.7493 0.586609 16.4567 0.376783 15.4423 0.857835C14.5405 1.2855 14.0221 2.17125 13.9804 3.35386C13.9922 3.37308 13.9954 3.39123 13.9954 3.40458C13.9954 3.41793 13.9922 3.43715 13.9799 3.45637V3.4569ZM18.634 5.05169C17.973 5.05169 17.2341 4.56316 16.9335 3.89043C16.5907 3.19101 16.6793 2.48519 17.1609 2.09437C17.6302 1.71316 18.3243 1.77242 18.9303 2.24493C19.4177 2.61012 19.7397 3.22358 19.7488 3.80714V3.81142C19.7157 4.48681 19.3932 4.93156 18.8635 5.03086C18.7888 5.04474 18.7119 5.05169 18.634 5.05169ZM17.8929 1.96783C17.6275 1.96783 17.4028 2.0602 17.2405 2.19207C16.8064 2.54445 16.7306 3.19048 17.0477 3.83704C17.3627 4.54127 18.1828 5.03033 18.8406 4.907C19.3142 4.81783 19.5923 4.42701 19.6233 3.80714C19.6142 3.27003 19.3056 2.68273 18.8545 2.3453C18.5048 2.07248 18.1759 1.96783 17.8934 1.96783H17.8929Z",
                fill: "#191919"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M11.3617 4.07196C11.2582 5.72868 9.22611 5.7148 8.41724 4.54981C7.77014 3.75963 7.86251 2.38481 8.96984 2.09063C10.1637 1.77669 11.3772 2.8664 11.3612 4.07196H11.3617Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M10.0014 5.403C9.39379 5.403 8.75577 5.08426 8.39592 4.5653C8.02485 4.11201 7.88977 3.44836 8.06223 2.91552C8.20158 2.48466 8.52139 2.18247 8.964 2.06501C9.50164 1.92352 10.0857 2.05753 10.5657 2.43287C11.0895 2.84184 11.397 3.45477 11.389 4.07304V4.0741C11.3484 4.72387 10.9993 5.1873 10.4312 5.34587C10.2929 5.38432 10.1482 5.403 10.0019 5.403H10.0014ZM9.39112 2.06341C9.25177 2.06341 9.11296 2.08103 8.97681 2.1168C8.55235 2.22945 8.24536 2.51936 8.11241 2.93207C7.94583 3.44836 8.07664 4.09172 8.4381 4.53327C8.87377 5.16114 9.72375 5.48789 10.4162 5.29409C10.9608 5.14192 11.2961 4.69611 11.3351 4.0709C11.3426 3.46972 11.0425 2.87281 10.5321 2.47452C10.1866 2.20489 9.78675 2.06287 9.39112 2.06287V2.06341Z",
                fill: "#191919"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M19.686 3.86162C19.5984 5.65074 17.5594 5.18838 16.9914 3.91821C16.2797 2.46598 17.5915 1.33356 18.8921 2.34799C19.3539 2.69342 19.6775 3.293 19.686 3.86108V3.86162Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M18.633 5.06878C17.9859 5.06878 17.262 4.58879 16.9672 3.92888C16.6314 3.24388 16.7168 2.55567 17.1846 2.17553C17.64 1.80553 18.317 1.86479 18.9085 2.32662C19.381 2.68007 19.7046 3.29673 19.7126 3.86054V3.86214C19.6688 4.76231 19.1579 4.99136 18.8568 5.04795C18.7836 5.06184 18.7089 5.06824 18.633 5.06824V5.06878ZM17.8824 1.98813C17.6362 1.98813 17.4067 2.06394 17.2177 2.21717C16.7697 2.58076 16.6907 3.24388 17.0153 3.90646C17.3362 4.6235 18.1749 5.12217 18.8471 4.99616C19.3394 4.9038 19.6277 4.5007 19.6592 3.86108C19.6507 3.31329 19.3362 2.71371 18.876 2.36987C18.5524 2.11733 18.2032 1.98866 17.8824 1.98866V1.98813Z",
                fill: "#191919"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M1.42196 8.99552C1.65763 8.64533 1.92395 8.31556 2.177 7.9768C2.45985 7.58131 2.75569 7.19104 3.25702 7.04633C3.8026 6.92623 4.47063 7.23037 4.62561 7.78222C4.87281 8.63569 4.21585 9.35637 3.70915 9.96801C3.33439 10.3836 2.98485 10.8428 2.45227 11.0645L2.45341 11.0635C1.87906 11.189 1.25515 10.9041 1.05327 10.3569C0.856923 9.87381 1.16521 9.3929 1.422 8.99499L1.42196 8.99552Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M2.24295 11.1548C1.69569 11.1795 1.17386 10.8672 0.99395 10.3788C0.784812 9.86537 1.10848 9.36416 1.36885 8.96116L1.36893 8.96009C1.53437 8.7151 1.71704 8.47618 1.8932 8.24588C1.97123 8.14392 2.04926 8.04196 2.12576 7.93883C2.43664 7.50361 2.73605 7.13072 3.23847 6.98556C3.78737 6.86409 4.51414 7.15535 4.68527 7.76511C4.92769 8.60324 4.32574 9.32576 3.84163 9.90638L3.75664 10.0084C3.70307 10.0682 3.65117 10.1271 3.59931 10.1854C3.27857 10.5498 2.94732 10.9263 2.47543 11.1229L2.24241 11.1548L2.24295 11.1548ZM1.47466 9.03036C1.23051 9.40885 0.926726 9.87937 1.11176 10.3338C1.29527 10.8315 1.87631 11.1246 2.43642 11.0034C2.87703 10.8174 3.19664 10.454 3.50573 10.1027C3.55762 10.0438 3.60956 9.98436 3.66248 9.92609L3.74572 9.82611C4.23508 9.23945 4.78956 8.57399 4.565 7.79978C4.44287 7.36379 3.88124 6.97258 3.27033 7.10777C2.81051 7.24102 2.52572 7.59676 2.22795 8.01366C2.1503 8.11778 2.07171 8.22023 1.99364 8.32272C1.81862 8.55203 1.63717 8.78891 1.47466 9.03036Z",
                fill: "#191919"
            })
        ]
    });
}


/***/ }),

/***/ 84638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



const ReminderIcon = ({ className , fill  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0.876953 7.49995C0.876953 5.74342 1.57473 4.05884 2.81678 2.81678C4.05884 1.57473 5.74342 0.876953 7.49995 0.876953C9.25648 0.876953 10.9411 1.57473 12.1831 2.81678C13.4252 4.05884 14.123 5.74342 14.123 7.49995C14.123 9.25648 13.4252 10.9411 12.1831 12.1831C10.9411 13.4252 9.25648 14.123 7.49995 14.123C5.74342 14.123 4.05884 13.4252 2.81678 12.1831C1.57473 10.9411 0.876953 9.25648 0.876953 7.49995ZM7.49995 1.82695C5.99538 1.82695 4.55243 2.42464 3.48854 3.48854C2.42464 4.55243 1.82695 5.99538 1.82695 7.49995C1.82695 9.00453 2.42464 10.4475 3.48854 11.5114C4.55243 12.5753 5.99538 13.173 7.49995 13.173C9.00453 13.173 10.4475 12.5753 11.5114 11.5114C12.5753 10.4475 13.173 9.00453 13.173 7.49995C13.173 5.99538 12.5753 4.55243 11.5114 3.48854C10.4475 2.42464 9.00453 1.82695 7.49995 1.82695ZM8.24995 10.5C8.24995 10.6989 8.17094 10.8896 8.03028 11.0303C7.88963 11.1709 7.69887 11.25 7.49995 11.25C7.30104 11.25 7.11028 11.1709 6.96962 11.0303C6.82897 10.8896 6.74995 10.6989 6.74995 10.5C6.74995 10.301 6.82897 10.1103 6.96962 9.96962C7.11028 9.82897 7.30104 9.74995 7.49995 9.74995C7.69887 9.74995 7.88963 9.82897 8.03028 9.96962C8.17094 10.1103 8.24995 10.301 8.24995 10.5ZM6.04995 6.24995C6.04995 5.57195 6.63495 4.92495 7.49995 4.92495C8.36495 4.92495 8.94995 5.57195 8.94995 6.24995C8.94995 6.74095 8.67995 6.99195 8.21395 7.27495C8.16295 7.30695 8.10295 7.34095 8.03795 7.37895C7.84253 7.48691 7.65415 7.60715 7.47395 7.73895C7.23195 7.92695 6.94995 8.23195 6.94995 8.69995C6.94942 8.84582 7.00686 8.98593 7.10963 9.08945C7.2124 9.19297 7.35208 9.25142 7.49795 9.25195C7.64382 9.25248 7.78393 9.19505 7.88745 9.09228C7.99097 8.98951 8.04942 8.84982 8.04995 8.70395C8.07788 8.66619 8.11164 8.63311 8.14995 8.60595C8.25195 8.52695 8.36495 8.46195 8.51595 8.37395C8.59395 8.32895 8.68295 8.27695 8.78595 8.21495C9.31995 7.88995 10.05 7.35395 10.05 6.24995C10.05 4.92795 8.93495 3.82495 7.49995 3.82495C6.06495 3.82495 4.94995 4.92795 4.94995 6.24995C4.94995 6.39582 5.0079 6.53572 5.11104 6.63886C5.21419 6.74201 5.35408 6.79995 5.49995 6.79995C5.64582 6.79995 5.78572 6.74201 5.88886 6.63886C5.99201 6.53572 6.04995 6.39582 6.04995 6.24995Z",
            fill: fill
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReminderIcon);


/***/ }),

/***/ 83774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SwapArrowDown = ({ className , ...props })=>{
    const { fillColor  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "30",
        height: "30",
        viewBox: "0 0 30 30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                width: "30",
                height: "30",
                rx: "15",
                fill: fillColor ? fillColor : "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M15 9.0001C15.1768 9.0001 15.3464 9.07034 15.4714 9.19537C15.5964 9.3204 15.6666 9.48998 15.6666 9.6668V18.7246L19.1953 15.1957C19.321 15.0743 19.4894 15.0071 19.6642 15.0086C19.839 15.0101 20.0062 15.0802 20.1299 15.2039C20.2535 15.3275 20.3236 15.4947 20.3251 15.6695C20.3266 15.8443 20.2594 16.0127 20.138 16.1385L15.4713 20.8054C15.3463 20.9303 15.1767 21.0006 15 21.0006C14.8232 21.0006 14.6537 20.9303 14.5286 20.8054L9.86197 16.1385C9.7983 16.077 9.74751 16.0034 9.71257 15.922C9.67763 15.8407 9.65924 15.7532 9.65847 15.6647C9.6577 15.5762 9.67457 15.4884 9.70809 15.4064C9.74161 15.3245 9.79111 15.2501 9.85371 15.1875C9.9163 15.1249 9.99074 15.0754 10.0727 15.0419C10.1546 15.0083 10.2424 14.9915 10.3309 14.9922C10.4194 14.993 10.5069 15.0114 10.5882 15.0463C10.6696 15.0813 10.7431 15.1321 10.8046 15.1957L14.3333 18.7246V9.6668C14.3333 9.48998 14.4035 9.3204 14.5286 9.19537C14.6536 9.07034 14.8232 9.0001 15 9.0001Z",
                fill: "#D72E33"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "0.75",
                y: "0.75",
                width: "28.5",
                height: "28.5",
                rx: "14.25",
                stroke: "black",
                strokeOpacity: "0.1",
                strokeWidth: "1.5"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwapArrowDown);


/***/ }),

/***/ 77167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const TootipIcon = ({ className , fill  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                width: "16",
                height: "16",
                rx: "8",
                fill: fill,
                fillOpacity: "0.5"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M6.55 12.5V7.121H8.475V12.5H6.55ZM7.507 6.494C7.221 6.494 6.98267 6.39867 6.792 6.208C6.60133 6.01 6.506 5.76433 6.506 5.471C6.506 5.185 6.60133 4.943 6.792 4.745C6.98267 4.547 7.221 4.448 7.507 4.448C7.80767 4.448 8.04967 4.547 8.233 4.745C8.42367 4.943 8.519 5.185 8.519 5.471C8.519 5.76433 8.42367 6.01 8.233 6.208C8.04967 6.39867 7.80767 6.494 7.507 6.494Z",
                fill: "white"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TootipIcon);


/***/ }),

/***/ 8573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const TransferIcon = ({ className , onClick  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        onClick: onClick,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M21.71 9.29019L17.71 5.29019C17.6168 5.19695 17.5061 5.12299 17.3843 5.07253C17.2624 5.02207 17.1319 4.99609 17 4.99609C16.7337 4.99609 16.4783 5.10188 16.29 5.29019C16.1017 5.47849 15.9959 5.73388 15.9959 6.00019C15.9959 6.26649 16.1017 6.52188 16.29 6.71019L18.59 9.00019H7.00002C6.7348 9.00019 6.48045 9.10554 6.29291 9.29308C6.10537 9.48062 6.00002 9.73497 6.00002 10.0002C6.00002 10.2654 6.10537 10.5198 6.29291 10.7073C6.48045 10.8948 6.7348 11.0002 7.00002 11.0002H21C21.1974 10.9992 21.3902 10.9398 21.5539 10.8295C21.7176 10.7191 21.845 10.5628 21.92 10.3802C21.9966 10.1981 22.0175 9.99736 21.9801 9.80337C21.9428 9.60938 21.8488 9.43081 21.71 9.29019ZM17 13.0002H3.00002C2.80259 13.0012 2.60988 13.0606 2.44616 13.1709C2.28244 13.2812 2.15504 13.4376 2.08002 13.6202C2.00344 13.8023 1.98252 14.003 2.01989 14.197C2.05726 14.391 2.15126 14.5696 2.29002 14.7102L6.29002 18.7102C6.38298 18.8039 6.49358 18.8783 6.61544 18.9291C6.7373 18.9798 6.86801 19.006 7.00002 19.006C7.13203 19.006 7.26274 18.9798 7.38459 18.9291C7.50645 18.8783 7.61705 18.8039 7.71002 18.7102C7.80375 18.6172 7.87814 18.5066 7.92891 18.3848C7.97968 18.2629 8.00582 18.1322 8.00582 18.0002C8.00582 17.8682 7.97968 17.7375 7.92891 17.6156C7.87814 17.4937 7.80375 17.3831 7.71002 17.2902L5.41002 15.0002H17C17.2652 15.0002 17.5196 14.8948 17.7071 14.7073C17.8947 14.5198 18 14.2654 18 14.0002C18 13.735 17.8947 13.4806 17.7071 13.2931C17.5196 13.1055 17.2652 13.0002 17 13.0002Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransferIcon);


/***/ }),

/***/ 14980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WalletIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



function WalletIcon({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M17.4173 6.41667H16.5007V5.5C16.5007 4.77065 16.2109 4.07118 15.6952 3.55546C15.1795 3.03973 14.48 2.75 13.7507 2.75H4.58398C3.85464 2.75 3.15517 3.03973 2.63944 3.55546C2.12372 4.07118 1.83398 4.77065 1.83398 5.5V16.5C1.83398 17.2293 2.12372 17.9288 2.63944 18.4445C3.15517 18.9603 3.85464 19.25 4.58398 19.25H17.4173C18.1467 19.25 18.8461 18.9603 19.3619 18.4445C19.8776 17.9288 20.1673 17.2293 20.1673 16.5V9.16667C20.1673 8.43732 19.8776 7.73785 19.3619 7.22212C18.8461 6.7064 18.1467 6.41667 17.4173 6.41667ZM4.58398 4.58333H13.7507C13.9938 4.58333 14.2269 4.67991 14.3988 4.85182C14.5707 5.02373 14.6673 5.25688 14.6673 5.5V6.41667H4.58398C4.34087 6.41667 4.10771 6.32009 3.9358 6.14818C3.7639 5.97627 3.66732 5.74312 3.66732 5.5C3.66732 5.25688 3.7639 5.02373 3.9358 4.85182C4.10771 4.67991 4.34087 4.58333 4.58398 4.58333ZM18.334 13.75H17.4173C17.1742 13.75 16.941 13.6534 16.7691 13.4815C16.5972 13.3096 16.5007 13.0764 16.5007 12.8333C16.5007 12.5902 16.5972 12.3571 16.7691 12.1852C16.941 12.0132 17.1742 11.9167 17.4173 11.9167H18.334V13.75ZM18.334 10.0833H17.4173C16.688 10.0833 15.9885 10.3731 15.4728 10.8888C14.957 11.4045 14.6673 12.104 14.6673 12.8333C14.6673 13.5627 14.957 14.2622 15.4728 14.7779C15.9885 15.2936 16.688 15.5833 17.4173 15.5833H18.334V16.5C18.334 16.7431 18.2374 16.9763 18.0655 17.1482C17.8936 17.3201 17.6604 17.4167 17.4173 17.4167H4.58398C4.34087 17.4167 4.10771 17.3201 3.9358 17.1482C3.7639 16.9763 3.66732 16.7431 3.66732 16.5V8.09417C3.96181 8.19777 4.2718 8.25046 4.58398 8.25H17.4173C17.6604 8.25 17.8936 8.34658 18.0655 8.51849C18.2374 8.69039 18.334 8.92355 18.334 9.16667V10.0833Z",
            fill: "white"
        })
    });
}


/***/ }),

/***/ 63531:
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
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60088);





const ReferralLinkTooltip = ({ children  })=>{
    const [isMobile] = (0,_hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_3__/* .useWindowResizeMobile */ .c)(1024);
    const { 0: generatedId , 1: setGeneratedId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: bShowReferralTooltip , 1: setShowReferralTooltip  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: contentPosition , 1: setContentPosition  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        left: "",
        right: ""
    });
    const { 0: suffixPosition , 1: setSuffixPosition  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        left: "",
        right: ""
    });
    const loadPosition = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        const container = document.getElementById(`referralLinkTooltip-container-${generatedId}`)?.getBoundingClientRect();
        const content = document.getElementById(`referralLinkTooltip-content-${generatedId}`)?.getBoundingClientRect();
        const children = document.getElementById(`referralLinkTooltip-position-${generatedId}`)?.getBoundingClientRect();
        if (!container || !children || !content) return;
        const contentPosition = {
            left: "",
            right: ""
        };
        const suffixPosition = {
            left: "",
            right: ""
        };
        contentPosition.right = "0";
        suffixPosition.right = `${container.width / 0.75}px`;
        setContentPosition(contentPosition);
        setSuffixPosition(suffixPosition);
    }, [
        generatedId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const random = `${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 10000)}`;
        setGeneratedId(random);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        document.getElementById(`referralLinkTooltip-container-${generatedId}`)?.addEventListener("mouseenter", loadPosition);
        return ()=>{
            document.getElementById(`referralLinkTooltip-container-${generatedId}`)?.removeEventListener("mouseenter", loadPosition);
        };
    }, [
        generatedId,
        loadPosition
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        loadPosition();
    }, [
        loadPosition
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative inline-block group"),
                id: `referralLinkTooltip-container-${generatedId}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "cursor-pointer",
                        onClick: ()=>setShowReferralTooltip(true),
                        children: children
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute bottom-0 invisible w-[390px] h-[430px] mt-3 -mr-4 top-[100%]", {
                            "!visible": bShowReferralTooltip,
                            "!w-[85vw] ml-3": isMobile
                        }),
                        id: `referralLinkTooltip-content-${generatedId}`,
                        style: {
                            ...contentPosition
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative flex flex-col z-15 p-[20px] text-[15px] font-normal text-black dark:text-white/90 bg-modal-light dark:bg-modal-dark shadow-lg rounded-[20px]"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "!font-semibold",
                                        children: "Referral Link"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: "A system where users can earn rewards based on missions when other users access the particular link."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "px-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "list-disc",
                                                children: "You can add a referral link by clicking on the + Referral button."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "list-disc",
                                                children: 'When adding a link, you can customize your link by adding in different characters after the underscore(_) highlighted in blue, and once you make the edits and click "Register", the code is saved. You can then copy the saved code for promotional activities.'
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "list-disc",
                                                children: "Please note that once a referral link is saved, it cannot be modified."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-red-500 mt-3",
                                        children: "※ Caution!"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: "If abuse is detected, your earnings may be confiscated, so please be aware."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full flex items-center justify-end text-red-600 mt-3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                                            className: "text-[15px]",
                                            onClick: ()=>setShowReferralTooltip(false),
                                            children: "GOT IT"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-3 h-3 -mt-[6px] rotate-45 z-15 bg-modal-light dark:bg-modal-dark absolute top-0"),
                                id: `referralLinkTooltip-position-${generatedId}`,
                                style: {
                                    ...suffixPosition
                                }
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setShowReferralTooltip(false),
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute top-0 left-0 bottom-0 right-0 bg-modal-backdrop/70 invisible z-10", {
                    "!visible": bShowReferralTooltip
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReferralLinkTooltip);


/***/ }),

/***/ 21796:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ APPLICATION_TOKEN),
/* harmony export */   "k": () => (/* binding */ DEFAULT_TOKEN)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_SGTIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16779);
/* harmony import */ var _components_icons_SRTIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68387);
/* harmony import */ var _constants_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65264);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_icons_SGTIcon__WEBPACK_IMPORTED_MODULE_1__, _components_icons_SRTIcon__WEBPACK_IMPORTED_MODULE_2__]);
([_components_icons_SGTIcon__WEBPACK_IMPORTED_MODULE_1__, _components_icons_SRTIcon__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const DEFAULT_TOKEN = process.env.NEXT_PUBLIC_DEFAULT_TOKEN || "";
const APPLICATION_TOKEN = {
    [_constants_token__WEBPACK_IMPORTED_MODULE_3__/* .TokenId.SRT */ .K.SRT]: {
        label: "EP",
        value: _constants_token__WEBPACK_IMPORTED_MODULE_3__/* .TokenId.SRT */ .K.SRT,
        tokenId: _constants_token__WEBPACK_IMPORTED_MODULE_3__/* .TokenId.SRT */ .K.SRT,
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_SRTIcon__WEBPACK_IMPORTED_MODULE_2__/* .SRTIcon */ .s, {})
    },
    [_constants_token__WEBPACK_IMPORTED_MODULE_3__/* .TokenId.SGT */ .K.SGT]: {
        label: "FLKZ",
        value: _constants_token__WEBPACK_IMPORTED_MODULE_3__/* .TokenId.SGT */ .K.SGT,
        tokenId: _constants_token__WEBPACK_IMPORTED_MODULE_3__/* .TokenId.SGT */ .K.SGT,
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_SGTIcon__WEBPACK_IMPORTED_MODULE_1__/* .SGTIcon */ .$, {})
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ TokenId)
/* harmony export */ });
var TokenId;
(function(TokenId) {
    TokenId["SRT"] = "0";
    TokenId["SGT"] = "1";
})(TokenId || (TokenId = {}));


/***/ }),

/***/ 96380:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ ApprovalState),
/* harmony export */   "q": () => (/* binding */ useApproveCallback)
/* harmony export */ });
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26644);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56091);
/* harmony import */ var _features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85750);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85277);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70695);
/* harmony import */ var _useTokenAllowance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47956);
/* harmony import */ var _useWeb3Activity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7334);
/* harmony import */ var _useDetectMobileDevice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(77259);
/* harmony import */ var _utils_wagmiActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50312);
/* harmony import */ var _constants_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17993);
/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37674);
/* harmony import */ var _constants_walletSelection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(41202);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common__WEBPACK_IMPORTED_MODULE_5__, _useTokenAllowance__WEBPACK_IMPORTED_MODULE_7__, _useWeb3Activity__WEBPACK_IMPORTED_MODULE_8__, _utils_wagmiActions__WEBPACK_IMPORTED_MODULE_9__]);
([_common__WEBPACK_IMPORTED_MODULE_5__, _useTokenAllowance__WEBPACK_IMPORTED_MODULE_7__, _useWeb3Activity__WEBPACK_IMPORTED_MODULE_8__, _utils_wagmiActions__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














var ApprovalState;
(function(ApprovalState) {
    ApprovalState["UNKNOWN"] = "UNKNOWN";
    ApprovalState["NOT_APPROVED"] = "NOT_APPROVED";
    ApprovalState["PENDING"] = "PENDING";
    ApprovalState["APPROVED"] = "APPROVED";
})(ApprovalState || (ApprovalState = {}));
// returns a variable indicating the state of the approval and a function which approves if necessary or early returns
function useApproveCallback(context, tokenAddress, amountToApprove, spender, dependency) {
    const { chainId , account , privateKey  } = (0,_useWeb3Activity__WEBPACK_IMPORTED_MODULE_8__/* .useConnectWallet */ .O)();
    const isMobile = (0,_useDetectMobileDevice__WEBPACK_IMPORTED_MODULE_13__/* .useDetectMobileDevice */ .c)();
    const dispatch = (0,_common__WEBPACK_IMPORTED_MODULE_5__/* .useAppDispatch */ .TL)();
    const { 0: isApproving , 1: setApproving  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const currentAllowance = (0,_useTokenAllowance__WEBPACK_IMPORTED_MODULE_7__/* .useTokenAllowance */ .F)(context, privateKey, tokenAddress, account ?? undefined, spender, dependency);
    const { selectedChain  } = (0,_common__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .CG)((state)=>state.wallet);
    const walletStorage = localStorage.getItem(_classes_Storage__WEBPACK_IMPORTED_MODULE_11__/* .LOCAL_STORAGE_KEYS.wallet */ .d.wallet);
    // check the current approval status
    const approvalState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (!amountToApprove || !spender) return ApprovalState.UNKNOWN;
        // we might not have enough data to know whether or not we need to approve
        if (!currentAllowance) return ApprovalState.UNKNOWN;
        if (isApproving) return ApprovalState.PENDING;
        // amountToApprove will be defined if currentAllowance is
        return ethers__WEBPACK_IMPORTED_MODULE_1__.BigNumber.from(currentAllowance).lt(amountToApprove) ? ApprovalState.NOT_APPROVED : ApprovalState.APPROVED;
    }, [
        amountToApprove,
        currentAllowance,
        isApproving,
        spender
    ]);
    const tokenContract = (0,_useContract__WEBPACK_IMPORTED_MODULE_6__/* .useTokenContract */ .Ib)(context, selectedChain, privateKey, tokenAddress);
    const tokenERC20PermitContract = (0,_useContract__WEBPACK_IMPORTED_MODULE_6__/* .useTokenERC20PermitContract */ .F4)(context, selectedChain, privateKey, tokenAddress);
    const approve = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        if (approvalState !== ApprovalState.NOT_APPROVED) {
            console.error("approve was called unnecessarily");
            return;
        }
        if (!tokenAddress) {
            console.error("no token");
            return;
        }
        if (!tokenContract) {
            console.error("tokenContract is null");
            return;
        }
        if (!amountToApprove) {
            console.error("missing amount to approve");
            return;
        }
        if (!spender) {
            console.error("no spender");
            return;
        }
        let useExact = false;
        if (ethers__WEBPACK_IMPORTED_MODULE_1__.BigNumber.from(currentAllowance).isZero()) {
            setApproving(true);
            const provider = _constants_providers__WEBPACK_IMPORTED_MODULE_10__/* .PROVIDER */ .M[chainId];
            if (!isMobile || walletStorage === _constants_walletSelection__WEBPACK_IMPORTED_MODULE_12__/* .WalletSelections.SIGHTNWALLET */ .dv.SIGHTNWALLET) {
                const estimatedGas = await tokenContract.estimateGas.approve(spender, _ethersproject_constants__WEBPACK_IMPORTED_MODULE_0__.MaxUint256).catch(()=>{
                    // general fallback for tokens who restrict approval amounts
                    useExact = true;
                    return tokenContract.estimateGas.approve(spender, amountToApprove);
                });
                return tokenContract.approve(spender, useExact ? amountToApprove : _ethersproject_constants__WEBPACK_IMPORTED_MODULE_0__.MaxUint256, {
                    gasLimit: estimatedGas,
                    gasPrice: provider.getGasPrice()
                }).then((response)=>{
                    return response.wait();
                }).then((tx)=>{
                    if (tx?.status === 1) {
                        dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_4__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                            type: "success",
                            title: "Approved successfully"
                        }));
                    }
                    setApproving(false);
                }).catch(({ code  })=>{
                    setApproving(false);
                    if (code === _constants_web3__WEBPACK_IMPORTED_MODULE_3__/* .ERROR_TRANSACTION.reject.codeNumber */ .T.reject.codeNumber || code === _constants_web3__WEBPACK_IMPORTED_MODULE_3__/* .ERROR_TRANSACTION.reject.codeString */ .T.reject.codeString) {
                        dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_4__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                            type: "danger",
                            title: "Signature rejected"
                        }));
                    }
                });
            } else {
                (0,_utils_wagmiActions__WEBPACK_IMPORTED_MODULE_9__/* .wagmiWriteContract */ .w5)({
                    typeContract: "tmg",
                    functionName: "approve",
                    chainId: chainId,
                    args: [
                        spender,
                        useExact ? amountToApprove : _ethersproject_constants__WEBPACK_IMPORTED_MODULE_0__.MaxUint256
                    ]
                }).then((result)=>{
                    if (result?.status && result?.status === "success" && result?.transactionHash) {
                        dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_4__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                            type: "success",
                            title: "Approved successfully"
                        }));
                        setApproving(false);
                    } else {
                        setApproving(false);
                        dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_4__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                            type: "danger",
                            title: "Signature rejected"
                        }));
                    }
                }).catch((error)=>{
                    setApproving(false);
                    dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_4__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                        type: "danger",
                        title: "Signature rejected"
                    }));
                });
            }
        } else {
            setApproving(true);
            if (!isMobile || walletStorage === _constants_walletSelection__WEBPACK_IMPORTED_MODULE_12__/* .WalletSelections.SIGHTNWALLET */ .dv.SIGHTNWALLET) {
                const gasFee = await tokenERC20PermitContract?.estimateGas.increaseAllowance(spender, _ethersproject_constants__WEBPACK_IMPORTED_MODULE_0__.MaxUint256).catch((err)=>{
                    // general fallback for tokens who restrict approval amounts
                    useExact = true;
                    console.log("err", err);
                    return tokenERC20PermitContract.estimateGas.increaseAllowance(spender, amountToApprove);
                });
                return tokenERC20PermitContract?.increaseAllowance(spender, useExact ? amountToApprove : _ethersproject_constants__WEBPACK_IMPORTED_MODULE_0__.MaxUint256, {
                    gasLimit: gasFee
                }).then((response)=>{
                    return response.wait();
                }).then((tx)=>{
                    if (tx?.status === 1) {
                        dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_4__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                            type: "success",
                            title: "Approve Successfully"
                        }));
                    }
                    setApproving(false);
                }).catch(({ code  })=>{
                    setApproving(false);
                    if (code === _constants_web3__WEBPACK_IMPORTED_MODULE_3__/* .ERROR_TRANSACTION.reject.codeNumber */ .T.reject.codeNumber || code === _constants_web3__WEBPACK_IMPORTED_MODULE_3__/* .ERROR_TRANSACTION.reject.codeString */ .T.reject.codeString) {
                        dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_4__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                            type: "danger",
                            title: "Signature rejected"
                        }));
                    }
                });
            } else {
                (0,_utils_wagmiActions__WEBPACK_IMPORTED_MODULE_9__/* .wagmiWriteContract */ .w5)({
                    typeContract: "tokenERC20Permit",
                    functionName: "increaseAllowance",
                    chainId: chainId,
                    args: [
                        spender,
                        useExact ? amountToApprove : _ethersproject_constants__WEBPACK_IMPORTED_MODULE_0__.MaxUint256
                    ]
                }).then((result)=>{
                    if (result?.status && result?.status === "success" && result?.transactionHash) {
                        dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_4__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                            type: "success",
                            title: "Approve Successfully"
                        }));
                        setApproving(false);
                    } else {
                        setApproving(false);
                        dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_4__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                            type: "danger",
                            title: "Signature rejected"
                        }));
                    }
                }).catch((error)=>{
                    setApproving(false);
                    dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_4__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                        type: "danger",
                        title: "Signature rejected"
                    }));
                });
            }
        }
    }, [
        approvalState,
        tokenAddress,
        tokenContract,
        amountToApprove,
        spender,
        currentAllowance,
        dispatch,
        tokenERC20PermitContract,
        chainId,
        isMobile,
        walletStorage, 
    ]);
    return [
        approvalState,
        approve,
        isApproving
    ];
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useInViewPort)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useInViewPort = (htmlElement, handleCallBack)=>{
    const { 0: entry , 1: setEntry  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const isInViewPort = (element)=>{
        const bounding = element.boundingClientRect;
        if (bounding.bottom >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.top <= (window.innerHeight || document.documentElement.clientHeight)) {
            // console.log("In the viewport! :)");
            return true;
        } else {
            // console.log("Not in the viewport. :(");
            return false;
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (isInViewPort(entry)) {
                setEntry(entry);
                if (entry.isIntersecting) {
                    handleCallBack();
                }
            }
        });
        if (htmlElement) {
            observer.observe(htmlElement);
        }
        return ()=>{
            if (htmlElement) {
                observer.unobserve(htmlElement);
            }
        };
    }, [
        handleCallBack,
        htmlElement
    ]);
    return [
        entry
    ];
};


/***/ }),

/***/ 67588:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_MyProfileComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63924);
/* harmony import */ var _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57636);
/* harmony import */ var _app_components_layouts_Protector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80152);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_components_MyProfileComponent__WEBPACK_IMPORTED_MODULE_1__, _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__, _app_components_layouts_Protector__WEBPACK_IMPORTED_MODULE_3__]);
([_app_components_MyProfileComponent__WEBPACK_IMPORTED_MODULE_1__, _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__, _app_components_layouts_Protector__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const MyProfile = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_layouts_Protector__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            title: "MyProfile",
            description: "Read profile",
            bHeaderAlwaysOnTop: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-0 lg:py-[20px] px-0 lg:px-8 h-full box-border overflow-x-hidden lg:overflow-x-auto",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_MyProfileComponent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyProfile);

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

/***/ 3767:
/***/ ((module) => {

module.exports = import("chart.js");;

/***/ }),

/***/ 60738:
/***/ ((module) => {

module.exports = import("react-chartjs-2");;

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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,5152,5277,8733,4969,5764,7636,2558,2314,3523,1131,4560], () => (__webpack_exec__(67588)));
module.exports = __webpack_exports__;

})();