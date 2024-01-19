"use strict";
(() => {
var exports = {};
exports.id = 4820;
exports.ids = [4820];
exports.modules = {

/***/ 14422:
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
/* harmony import */ var _classes_Marketplace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69907);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14613);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53450);
/* harmony import */ var _features_route_routeSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48172);
/* harmony import */ var _features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85750);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86588);
/* harmony import */ var _services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17827);
/* harmony import */ var _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93992);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73732);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(45700);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(60088);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61103);
/* harmony import */ var _commons_Rarity__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(17439);
/* harmony import */ var _icons_EnergyIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(25015);
/* harmony import */ var _icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7833);
/* harmony import */ var _icons_StarIcon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(71942);
/* harmony import */ var _icons_VariantIcon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(63662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_9__, _utils_common__WEBPACK_IMPORTED_MODULE_13__, _utils_format__WEBPACK_IMPORTED_MODULE_14__, _commons_Rarity__WEBPACK_IMPORTED_MODULE_17__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_9__, _utils_common__WEBPACK_IMPORTED_MODULE_13__, _utils_format__WEBPACK_IMPORTED_MODULE_14__, _commons_Rarity__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const CharacterCardPanel = ({ className  })=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppDispatch */ .TL)();
    const { characterDetail , levelInformation  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppSelector */ .CG)((state)=>state.character);
    const { myProfile: { userProfile  } ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppSelector */ .CG)((state)=>state.profile);
    const permissionState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppSelector */ .CG)((state)=>state.auth);
    const mintState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppSelector */ .CG)((state)=>state.mint);
    const { offerList  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAppSelector */ .CG)((state)=>state.history);
    const { character , nft , user , config  } = characterDetail;
    const { 0: userOffer , 1: setUserOffer  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { 0: finishLevelUpTime , 1: setFinishLevelUpTime  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const { 0: isProcessing , 1: setIsProcessing  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [getCharacter] = _services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_11__/* ["default"].useLazyGetOneCharacterQuery */ .Z.useLazyGetOneCharacterQuery();
    const [getSlotStatus] = _services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_10__/* ["default"].useLazyGetCharacterSlotStatusQuery */ .Z.useLazyGetCharacterSlotStatusQuery();
    const [getPermission] = _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_12__/* ["default"].useLazyGetUserPermissionQuery */ .Z.useLazyGetUserPermissionQuery();
    const [getMintable] = _services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_10__/* ["default"].useLazyGetCharacterMintableQuery */ .Z.useLazyGetCharacterMintableQuery();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).state;
    const nextLevel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        if (character && character?.level < levelInformation.maxLevel) {
            return levelInformation.levels.find((item)=>item.level === character.level + 1);
        } else return null;
    }, [
        character,
        levelInformation
    ]);
    const handleOpenConfirmPurchaseModal = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_6__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/confirm-character-purchase",
            propsState: characterDetail
        }));
    }, [
        dispatch,
        characterDetail
    ]);
    const handleOpenMakeOfferModal = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_6__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/make-character-offer",
            propsState: characterDetail
        }));
    }, [
        dispatch,
        characterDetail
    ]);
    const handleOpenConfirmSellingModal = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_6__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/selling-character",
            propsState: characterDetail
        }));
    }, [
        dispatch,
        characterDetail
    ]);
    const handleOpenAbortSellingModal = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_6__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/abort-selling",
            propsState: {
                id: nft?.id,
                nftType: "Character"
            }
        }));
    }, [
        dispatch,
        nft?.id
    ]);
    const handleOpenCancelOfferModal = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_6__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/cancel-offer",
            propsState: {
                ...userOffer,
                nftId: nft?.id,
                type: "Character"
            }
        }));
    }, [
        dispatch,
        nft?.id,
        userOffer
    ]);
    const handleOpenLevelUpCharacterModal = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_6__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/levelup-character",
            propsState: nextLevel
        }));
    }, [
        dispatch,
        nextLevel
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!userProfile?.id) return;
        const offerOfUser = offerList?.find((item)=>item.user?.id === userProfile?.id);
        setUserOffer(offerOfUser);
    }, [
        offerList,
        userProfile?.id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!character?.finishLevelUpAt) return;
        const intervalTime = setInterval(()=>{
            const expired = Number(character?.finishLevelUpAt) - Date.now();
            if (expired < 0 && expired > -1000 || expired < 0 && nft?.status === "level_up") {
                setIsProcessing(true);
                setFinishLevelUpTime(0);
                clearInterval(intervalTime);
                return;
            } else if (expired > 0) {
                setFinishLevelUpTime(expired / 1000);
            } else return;
        }, 1000);
        return ()=>{
            clearInterval(intervalTime);
        };
    }, [
        character?.finishLevelUpAt,
        getCharacter,
        nft?.id,
        dispatch,
        nextLevel?.level,
        nft?.status, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!isProcessing) return;
        const interval = setInterval(()=>{
            getCharacter({
                nftId: nft?.id,
                type: "collection"
            });
        }, 10000);
        if (isProcessing && nft?.status !== "level_up") {
            setIsProcessing(false);
            clearInterval(interval);
            dispatch(_features_toastMessage_toastMessageSlice__WEBPACK_IMPORTED_MODULE_8__/* .toastMessageActions.addToastMessage */ ._.addToastMessage({
                title: "Level up Successful.",
                description: `Your character ${nft?.id} has been upgraded to level ${character?.level}`,
                type: "success"
            }));
            getSlotStatus(nft?.id);
        }
        return ()=>{
            clearInterval(interval);
        };
    }, [
        dispatch,
        getCharacter,
        isProcessing,
        character?.level,
        nft?.id,
        nft?.status,
        getSlotStatus, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getPermission(undefined);
    }, [
        getPermission
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (userProfile?.id && Number(character?.id)) {
            getMintable(Number(character?.id));
        }
    }, [
        character?.id,
        getMintable,
        mintState.mintable,
        userProfile?.id
    ]);
    const renderBusinessButton = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (nft?.status === "on_sale") {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_15__/* .Button */ .z, {
                className: "contained-primary w-full mt-8",
                onClick: handleOpenAbortSellingModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: lang["common/abort-selling-on-market"]
                })
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_15__/* .Button */ .z, {
            className: "contained-primary w-full mt-8 stroke-primary-btn",
            onClick: handleOpenConfirmSellingModal,
            disabled: nft?.status === "level_up" || nft?.status === "claim" || nft?.status === "withdraw" || permissionState.authPermission?.listCharacter === false,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "ml-2",
                    children: lang["comp/selling-on-market"]
                })
            ]
        });
    }, [
        handleOpenAbortSellingModal,
        handleOpenConfirmSellingModal,
        lang,
        nft?.status,
        permissionState.authPermission?.listCharacter, 
    ]);
    const renderLevelUpButton = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (nft?.status === "on_sale") return;
        if (nft?.status === "level_up") {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Button__WEBPACK_IMPORTED_MODULE_15__/* .Button */ .z, {
                className: "contained-primary w-full mt-4 fill-primary-btn cursor-default",
                children: isProcessing ? `${lang["comp/processing"]}` : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_EnergyIcon__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "ml-2",
                            children: [
                                lang["comp/leveling-up"],
                                " -",
                                " ",
                                finishLevelUpTime ? (0,_utils_format__WEBPACK_IMPORTED_MODULE_14__/* .formatTimeCount */ .J_)(finishLevelUpTime) : "00:00:00"
                            ]
                        })
                    ]
                })
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_15__/* .Button */ .z, {
            className: "contained-primary w-full mt-4 fill-primary-btn",
            onClick: handleOpenLevelUpCharacterModal,
            disabled: nft?.status === "claim" || config?.tokenTypeEarning === "1" || !nextLevel || nft?.status === "withdraw" || permissionState.authPermission?.levelUpCharacter === false,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_EnergyIcon__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "ml-2",
                    children: nextLevel ? `${lang["rte/level-up"]} - ${Number(nextLevel?.rtCost || 0)} EP & 
            ${Number(nextLevel?.gtCost || 0)} FLKZ` : `${lang["rte/level-up"]}`
                })
            ]
        });
    }, [
        config?.tokenTypeEarning,
        finishLevelUpTime,
        handleOpenLevelUpCharacterModal,
        isProcessing,
        lang,
        nextLevel,
        nft?.status,
        permissionState.authPermission?.levelUpCharacter, 
    ]);
    const handleLocalPreviousPage = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        localStorage.removeItem(_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_7__/* .MINTORENHANCE */ .et);
    }, []);
    const renderMintButton = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (nft?.status === "on_sale") return;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: `/my-profile/character/${nft?.id}/mint`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_15__/* .Button */ .z, {
                className: "contained-secondary w-full mt-4 fill-secondary-btn",
                disabled: nft?.status === "claim" || nft?.status === "level_up" || character?.mintCount === character?.totalCount || nft?.status === "withdraw" || !permissionState.authPermission?.minting || !mintState.mintable,
                onClick: handleLocalPreviousPage,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_VariantIcon__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "ml-2",
                        children: `${lang["button/mint"]} (${character?.mintCount}/${character?.totalCount})`
                    })
                ]
            })
        });
    }, [
        character?.mintCount,
        character?.totalCount,
        lang,
        mintState.mintable,
        nft?.id,
        nft?.status,
        permissionState.authPermission?.minting,
        handleLocalPreviousPage, 
    ]);
    const renderEnhanceButton = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (nft?.status === "on_sale") return;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: `/my-profile/character/${nft?.id}/enhance`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_15__/* .Button */ .z, {
                className: "contained-secondary w-full mt-4 fill-secondary-btn",
                disabled: nft?.status === "claim" || nft?.status === "level_up" || character?.rarity === _classes_Marketplace__WEBPACK_IMPORTED_MODULE_4__/* .EnumRarity.legendary */ .p.legendary || nft?.status === "withdraw",
                onClick: handleLocalPreviousPage,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_StarIcon__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "ml-2",
                        children: lang["button/enhance"]
                    })
                ]
            })
        });
    }, [
        character?.rarity,
        lang,
        nft?.id,
        nft?.status,
        handleLocalPreviousPage
    ]);
    const renderBuyButton = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (nft?.status !== "on_sale") return;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_15__/* .Button */ .z, {
            className: "contained-primary w-full mt-8 stroke-primary-btn",
            onClick: handleOpenConfirmPurchaseModal,
            disabled: permissionState.authPermission?.purchaseCharacter === false,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "ml-2",
                    children: [
                        lang["button/buy-with"],
                        " ",
                        (0,_utils_format__WEBPACK_IMPORTED_MODULE_14__/* .formatIntBalance */ .qQ)(nft?.price),
                        " ",
                        (0,_utils_common__WEBPACK_IMPORTED_MODULE_13__/* .getTokenName */ ._M)(nft?.token || "")
                    ]
                })
            ]
        });
    }, [
        handleOpenConfirmPurchaseModal,
        lang,
        nft?.price,
        nft?.status,
        nft?.token,
        permissionState.authPermission?.purchaseCharacter, 
    ]);
    const renderOfferButton = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (nft?.status !== "on_sale") return;
        if (!nft?.availableOffer) return;
        return userOffer ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_15__/* .Button */ .z, {
            className: "contained-secondary w-full mt-4 fill-secondary-btn",
            onClick: handleOpenCancelOfferModal,
            disabled: !nft?.availableOffer,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_VariantIcon__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "ml-2",
                    children: lang["button/cancel-offer"]
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_15__/* .Button */ .z, {
            className: "contained-secondary w-full mt-4 fill-secondary-btn",
            onClick: handleOpenMakeOfferModal,
            disabled: permissionState.authPermission?.makeCharacterOffer === false,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_VariantIcon__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "ml-2",
                    children: lang["button/make-an-offer"]
                })
            ]
        });
    }, [
        handleOpenCancelOfferModal,
        handleOpenMakeOfferModal,
        lang,
        nft?.availableOffer,
        nft?.status,
        permissionState.authPermission?.makeCharacterOffer,
        userOffer, 
    ]);
    const renderButtonComponent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (userProfile?.id && user?.id === userProfile?.id) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
                children: [
                    renderBusinessButton(),
                    renderLevelUpButton(),
                    renderMintButton(),
                    renderEnhanceButton()
                ]
            });
        } else {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
                children: [
                    renderBuyButton(),
                    renderOfferButton()
                ]
            });
        }
    }, [
        renderBusinessButton,
        renderBuyButton,
        renderEnhanceButton,
        renderLevelUpButton,
        renderMintButton,
        renderOfferButton,
        user?.id,
        userProfile?.id, 
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        className: `!rounded-none md:!rounded-[10px] relative md:px-4 pb-10 h-fit ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("md:rounded-[10px] w-full h-[337px] lg:h-[522px]", "-mt-28 shadow-xl border-slate-300 dark:border-slate-900 lg:mt-0", "bg-cover bg-no-repeat bg-center md:rounded-b-none"),
                style: {
                    backgroundImage: `url(${nft?.imageUrl})`
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "px-[20px] lg:px-[30px] mt-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row items-start justify-between mb-5",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-h3 leading-[30px] font-semibold dark:text-white",
                                children: [
                                    "#",
                                    nft?.id
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row right-0 gap-3 flex-wrap justify-end",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "ml-3 bg-[#EEEEEE] dark:bg-white/10 rounded-full py-1 px-3 font-bold text-black dark:text-white text-h9 h-fit",
                                        children: [
                                            "Lvl ",
                                            character?.level
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_Rarity__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        type: character?.rarity || "",
                                        customTextInside: "!text-h9",
                                        customClass: "!pl-[15px] !pr-[10px]"
                                    }),
                                    userProfile?.id && user?.id === userProfile?.id && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            nft?.status === "on_sale" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "py-1 px-2 flex flex-row items-center rounded-md bg-secondary-1 gap-1",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-white text-h9 font-semibold",
                                                        children: `${(0,_utils_format__WEBPACK_IMPORTED_MODULE_14__/* .formatIntBalance */ .qQ)(nft?.price)} ${(0,_utils_common__WEBPACK_IMPORTED_MODULE_13__/* .getTokenName */ ._M)(nft?.token)}`
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-4 h-4",
                                                        children: (0,_utils_common__WEBPACK_IMPORTED_MODULE_13__/* .getTokenIcon */ .YX)(nft?.token)
                                                    })
                                                ]
                                            }),
                                            nft?.status === "claim" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-caption-3 py-1 px-2 bg-secondary-2 rounded-md ml-1 text-white",
                                                children: lang["comp/in-claim-request"]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    renderButtonComponent()
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharacterCardPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70562:
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
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73732);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45700);
/* harmony import */ var _utils_number__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5115);
/* harmony import */ var _CharacterEquipmentPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43202);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61103);
/* harmony import */ var _icons_HexagonIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68069);
/* harmony import */ var _icons_SRTIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68387);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_3__, _utils_common__WEBPACK_IMPORTED_MODULE_4__, _utils_format__WEBPACK_IMPORTED_MODULE_5__, _CharacterEquipmentPanel__WEBPACK_IMPORTED_MODULE_6__, _icons_SRTIcon__WEBPACK_IMPORTED_MODULE_9__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_3__, _utils_common__WEBPACK_IMPORTED_MODULE_4__, _utils_format__WEBPACK_IMPORTED_MODULE_5__, _CharacterEquipmentPanel__WEBPACK_IMPORTED_MODULE_6__, _icons_SRTIcon__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const CharacterDetailPanel = ({ className  })=>{
    const { characterDetail  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .CG)((state)=>state.character);
    const { character , config  } = characterDetail;
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).state;
    const listEquipments = [
        {
            category: lang["sb/hat"] || "",
            itemType: "0",
            slotKey: "unlock_hat_slot",
            backgroundColor: "bg-[#F6EAEB] dark:bg-[#F6EAEB]",
            textColor: "#FF383E"
        },
        {
            category: lang["sb/glasses"] || "",
            itemType: "1",
            slotKey: "unlock_glass_slot",
            backgroundColor: "bg-[#EEEBF4] dark:bg-[#BAAADC]",
            textColor: "#9F72FF"
        },
        {
            category: lang["sb/medicine"] || "",
            itemType: "2",
            slotKey: "unlock_medicine_slot",
            backgroundColor: "bg-[#F5F0E2] dark:bg-[#EADFC3]",
            textColor: "#FFB800"
        },
        {
            category: lang["sb/ring"] || "",
            itemType: "3",
            slotKey: "unlock_ring_slot",
            backgroundColor: "bg-[#E9F3F0] dark:bg-[#ADD7C8]",
            textColor: "#25D395"
        }, 
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_Panel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        className: `pt-5 pb-10 px-6 h-fit !rounded-none md:!rounded-2xl ${className}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-[18px] font-semibold text-black dark:text-white/90",
                    children: lang["rte/stats"]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full flex flex-col items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full flex flex-row justify-between border dark:border-white/30 rounded-[10px] py-3 pl-5 pr-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col justify-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "w-[35px] h-[32px] relative",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_HexagonIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                            className: "fill-[#FF383E]"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text-white font-black left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] absolute",
                                                            children: "M"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "px-3 text-h7 md:text-[20px] font-bold",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-[#FF383E]",
                                                            children: character?.memory
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-black dark:text-white/90",
                                                            children: " Memory"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "pt-2 flex flex-col md:flex-row text-black/70 dark:text-white/70 text-h10 md:text-h9",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        lang["rte/average-earning-rate"],
                                                        "\xa0 \xa0"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "font-bold text-[#FF383E] text-[16px] mt-1 md:mt-0",
                                                    children: [
                                                        (0,_utils_number__WEBPACK_IMPORTED_MODULE_10__/* .isSmallerThan0 */ .GK)(config?.averageEarning),
                                                        " ",
                                                        (0,_utils_common__WEBPACK_IMPORTED_MODULE_4__/* .getTokenName */ ._M)(config?.tokenTypeEarning)
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CharacterEquipmentPanel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    item: listEquipments[0]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full flex flex-row justify-between border dark:border-white/30 rounded-[10px] py-3 pl-5 pr-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col justify-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "w-[35px] h-[32px] relative",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_HexagonIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                            className: "fill-[#9F72FF]"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text-white font-black left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] absolute",
                                                            children: "F"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "px-3 text-h7 md:text-[20px] font-bold",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-[#9F72FF]",
                                                            children: character?.focus
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-black dark:text-white/90",
                                                            children: " Focus"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "pt-2 flex flex-col md:flex-row text-black/70 dark:text-white/70 text-h10 md:text-h9",
                                            children: [
                                                lang["rte/reading-time-required"],
                                                "\xa0 \xa0",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "font-bold text-[#9F72FF] text-[16px]",
                                                    children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_5__/* .formatReadingTimeRequired */ .E1)((0,_utils_number__WEBPACK_IMPORTED_MODULE_10__/* .isSmallerThan0 */ .GK)(config?.readingTimeRequired))
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CharacterEquipmentPanel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    item: listEquipments[1]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full flex flex-row justify-between border dark:border-white/30 rounded-[10px] py-3 pl-5 pr-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col justify-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "w-[35px] h-[32px] relative",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_HexagonIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                            className: "fill-[#FFB800]"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text-white font-black left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] absolute",
                                                            children: "E"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "px-3 text-h7 md:text-[20px] font-bold",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-[#FFB800]",
                                                            children: character?.endurance
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "text-black dark:text-white/90",
                                                            children: [
                                                                " ",
                                                                "Endurance"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "pt-2 flex flex-col md:flex-row text-black/70 dark:text-white/70 text-h10 md:text-h9",
                                            children: [
                                                lang["rte/stamina-decay-rate"],
                                                "\xa0 \xa0",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "font-bold text-[#FFB800] text-[16px]",
                                                    children: [
                                                        (0,_utils_number__WEBPACK_IMPORTED_MODULE_10__/* .isGreaterThan100 */ .lJ)((0,_utils_number__WEBPACK_IMPORTED_MODULE_10__/* .isSmallerThan0 */ .GK)(config?.staminaDecayRate)),
                                                        "%"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CharacterEquipmentPanel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    item: listEquipments[2]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full flex flex-row justify-between border dark:border-white/30 rounded-[10px] py-3 pl-5 pr-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col justify-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "w-[35px] h-[32px] relative",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_HexagonIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                            className: "fill-[#25D395]"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text-white font-black left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] absolute",
                                                            children: "L"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "px-3 text-h7 md:text-[20px] font-bold",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-[#25D395]",
                                                            children: character?.luck
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-black dark:text-white/90",
                                                            children: " Luck"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "pt-2 flex flex-col md:flex-row text-black/70 dark:text-white/70 text-h10 md:text-h9",
                                            children: [
                                                lang["rte/gift-box-drop-chance"],
                                                "\xa0 \xa0",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "font-bold text-[#25D395] text-[16px]",
                                                    children: [
                                                        (0,_utils_number__WEBPACK_IMPORTED_MODULE_10__/* .isGreaterThan100 */ .lJ)((0,_utils_number__WEBPACK_IMPORTED_MODULE_10__/* .isSmallerThan0 */ .GK)(config?.giftBoxDropChance)),
                                                        "%"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CharacterEquipmentPanel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    item: listEquipments[3]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-row items-center justify-between w-full px-4 py-5 text-h9 text-black font-bold bg-[#000000]/10 dark:bg-[#ffffff]/5 rounded-[10px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "dark:text-white/90",
                            children: lang["rte/total-earning"]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row items-center gap-2 text-[20px] dark:text-[#E9FF1A]",
                            children: [
                                `${character?.totalRTEarning}`,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-5 h-5",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_SRTIcon__WEBPACK_IMPORTED_MODULE_9__/* .SRTIcon */ .s, {})
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharacterDetailPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48541:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components_BadgeCardPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52835);
/* harmony import */ var _app_components_BadgeDetailPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39068);
/* harmony import */ var _app_components_BadgeSimilarPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2606);
/* harmony import */ var _app_components_CharacterCardPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14422);
/* harmony import */ var _app_components_CharacterDetailPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70562);
/* harmony import */ var _app_components_CharacterHistoryPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49103);
/* harmony import */ var _app_components_EquipmentCardPanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44181);
/* harmony import */ var _app_components_EquipmentDetailPanel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44600);
/* harmony import */ var _app_components_EquipmentSimilarPanel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9561);
/* harmony import */ var _app_components_MyProfileNoCharacter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17633);
/* harmony import */ var _app_components_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63186);
/* harmony import */ var _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(57636);
/* harmony import */ var _app_constants_route__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(66790);
/* harmony import */ var _app_features_marketplace_badgeSlice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(41722);
/* harmony import */ var _app_features_marketplace_characterSlice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(17527);
/* harmony import */ var _app_features_marketplace_equipmentSlice__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(67998);
/* harmony import */ var _app_hooks_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(85277);
/* harmony import */ var _app_services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(17827);
/* harmony import */ var _app_hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6483);
/* harmony import */ var _app_components_icons_BulletListIcon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(61821);
/* harmony import */ var _app_components_bases_Button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(60088);
/* harmony import */ var _app_contexts_AppContext__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(14613);
/* harmony import */ var _app_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(44523);
/* harmony import */ var _app_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(48172);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_components_BadgeCardPanel__WEBPACK_IMPORTED_MODULE_4__, _app_components_BadgeDetailPanel__WEBPACK_IMPORTED_MODULE_5__, _app_components_BadgeSimilarPanel__WEBPACK_IMPORTED_MODULE_6__, _app_components_CharacterCardPanel__WEBPACK_IMPORTED_MODULE_7__, _app_components_CharacterDetailPanel__WEBPACK_IMPORTED_MODULE_8__, _app_components_CharacterHistoryPanel__WEBPACK_IMPORTED_MODULE_9__, _app_components_EquipmentCardPanel__WEBPACK_IMPORTED_MODULE_10__, _app_components_EquipmentDetailPanel__WEBPACK_IMPORTED_MODULE_11__, _app_components_EquipmentSimilarPanel__WEBPACK_IMPORTED_MODULE_12__, _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_15__, _app_hooks_common__WEBPACK_IMPORTED_MODULE_20__]);
([_app_components_BadgeCardPanel__WEBPACK_IMPORTED_MODULE_4__, _app_components_BadgeDetailPanel__WEBPACK_IMPORTED_MODULE_5__, _app_components_BadgeSimilarPanel__WEBPACK_IMPORTED_MODULE_6__, _app_components_CharacterCardPanel__WEBPACK_IMPORTED_MODULE_7__, _app_components_CharacterDetailPanel__WEBPACK_IMPORTED_MODULE_8__, _app_components_CharacterHistoryPanel__WEBPACK_IMPORTED_MODULE_9__, _app_components_EquipmentCardPanel__WEBPACK_IMPORTED_MODULE_10__, _app_components_EquipmentDetailPanel__WEBPACK_IMPORTED_MODULE_11__, _app_components_EquipmentSimilarPanel__WEBPACK_IMPORTED_MODULE_12__, _app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_15__, _app_hooks_common__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




























const CharacterDetails = ()=>{
    const dispatch = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_20__/* .useAppDispatch */ .TL)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { id , nftType , page  } = router.query;
    const [getCharacter, getCharacterResult] = _app_services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_21__/* ["default"].useLazyGetOneCharacterQuery */ .Z.useLazyGetOneCharacterQuery();
    const [getEquipment, getEquipmentResult] = _app_services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_21__/* ["default"].useLazyGetOneEquipmentQuery */ .Z.useLazyGetOneEquipmentQuery();
    const [getBadge, getBadgeResult] = _app_services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_21__/* ["default"].useLazyGetOneBadgeQuery */ .Z.useLazyGetOneBadgeQuery();
    const { timeStampAction  } = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_20__/* .useAppSelector */ .CG)((state)=>state.nft);
    const { characterDetail  } = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_20__/* .useAppSelector */ .CG)((state)=>state.character);
    const { equipmentDetail  } = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_20__/* .useAppSelector */ .CG)((state)=>state.equipment);
    const { badgeDetail  } = (0,_app_hooks_common__WEBPACK_IMPORTED_MODULE_20__/* .useAppSelector */ .CG)((state)=>state.badge);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_app_contexts_AppContext__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z).state;
    const [isMobile] = (0,_app_hooks_useWindowResizeMobile__WEBPACK_IMPORTED_MODULE_22__/* .useWindowResizeMobile */ .c)(1024);
    const nftNotExist = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        if (getCharacterResult.isError) return true;
        if (getEquipmentResult.isError) return true;
        if (getBadgeResult.isError) return true;
        return false;
    }, [
        getBadgeResult.isError,
        getCharacterResult.isError,
        getEquipmentResult.isError
    ]);
    const isFetching = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        if (getCharacterResult.isFetching) return true;
        if (getEquipmentResult.isFetching) return true;
        if (getBadgeResult.isFetching) return true;
        return false;
    }, [
        getBadgeResult.isFetching,
        getCharacterResult.isFetching,
        getEquipmentResult.isFetching
    ]);
    const renderComponentPage = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        switch(nftType){
            case "character":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_CharacterCardPanel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            className: "mt-[130px] lg:mt-0 w-full lg:w-[55%] lg:max-w-[560px] md:!px-0"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full mt-[5px] lg:mt-0 lg:w-[65%] lg:max-w-[560px] lg:ml-[30px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_CharacterDetailPanel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    className: "mt-3 lg:mt-0"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_CharacterHistoryPanel__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    className: "mt-3",
                                    nft: characterDetail.nft,
                                    user: characterDetail.user
                                })
                            ]
                        })
                    ]
                });
            case "badge":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_BadgeCardPanel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            className: "mt-[130px] lg:mt-0 w-full lg:w-[55%] lg:max-w-[560px] md:!px-0"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full mt-[5px] lg:mt-0 lg:w-[65%] lg:max-w-[560px] lg:ml-[30px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_BadgeDetailPanel__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    className: "mt-3 lg:mt-0"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_CharacterHistoryPanel__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    className: "mt-3",
                                    nft: badgeDetail.nft,
                                    user: badgeDetail.user
                                }),
                                page === "marketplace" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_BadgeSimilarPanel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    className: "mt-2"
                                })
                            ]
                        })
                    ]
                });
            case "equipment":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_EquipmentCardPanel__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            className: "mt-[130px] lg:mt-0 w-full lg:w-[55%] lg:max-w-[560px] md:!px-0"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full mt-[5px] lg:mt-0 lg:w-[65%] lg:max-w-[560px] lg:ml-[30px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_EquipmentDetailPanel__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    className: "mt-3 lg:mt-0"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_CharacterHistoryPanel__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    className: "mt-3",
                                    nft: equipmentDetail.nft,
                                    user: equipmentDetail.user
                                }),
                                page === "marketplace" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_EquipmentSimilarPanel__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    className: "mt-2"
                                })
                            ]
                        })
                    ]
                });
            default:
                return null;
        }
    }, [
        nftType,
        characterDetail,
        equipmentDetail,
        badgeDetail,
        page
    ]);
    const handleClickBackBtn = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        const previousPage = localStorage.getItem(_app_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_27__/* .PREVIOUS_PAGE_KEY */ .m8);
        if (previousPage) {
            router.push(previousPage);
            return;
        }
        if (`/${router.query.page}` === _app_constants_route__WEBPACK_IMPORTED_MODULE_16__/* .ROUTER.MARKETPLACE */ .Yj.MARKETPLACE) {
            router.push(_app_constants_route__WEBPACK_IMPORTED_MODULE_16__/* .ROUTER.MARKETPLACE */ .Yj.MARKETPLACE);
        } else {
            dispatch(_app_features_profile_collectionSlice__WEBPACK_IMPORTED_MODULE_26__/* .collectionActions.resetCollectionState */ .X5.resetCollectionState());
            router.push(_app_constants_route__WEBPACK_IMPORTED_MODULE_16__/* .ROUTER.MY_COLLECTION */ .Yj.MY_COLLECTION);
        }
    }, [
        router,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!id) return;
        switch(nftType){
            case "character":
                getCharacter({
                    nftId: id,
                    type: page === "marketplace" ? "market_place" : "collection"
                });
                break;
            case "badge":
                getBadge(id);
                break;
            case "equipment":
                getEquipment(id);
                break;
            default:
                break;
        }
    }, [
        getCharacter,
        getEquipment,
        getBadge,
        id,
        nftType,
        timeStampAction,
        page
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        return ()=>{
            switch(nftType){
                case "character":
                    dispatch(_app_features_marketplace_characterSlice__WEBPACK_IMPORTED_MODULE_18__/* .characterActions.setDefaultCharacterDetail */ .h.setDefaultCharacterDetail());
                    break;
                case "badge":
                    dispatch(_app_features_marketplace_badgeSlice__WEBPACK_IMPORTED_MODULE_17__/* .badgeActions.setDefaultBadgeDetail */ .w.setDefaultBadgeDetail());
                    break;
                case "equipment":
                    dispatch(_app_features_marketplace_equipmentSlice__WEBPACK_IMPORTED_MODULE_19__/* .equipmentActions.setDefaultEquipmentDetail */ .f.setDefaultEquipmentDetail());
                    break;
                default:
                    break;
            }
        };
    }, [
        dispatch,
        nftType
    ]);
    const renderBody = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (isFetching) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col flex-grow justify-center items-center mt-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-icon-2xl h-icon-2xl animate-spin rounded-full border-4 border-white border-t-4 border-t-red-500"
                })
            });
        }
        if (nftNotExist) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_MyProfileNoCharacter__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                title: "The NFT does not exist"
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                isMobile ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between px-[20px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-[18px] dark:text-white font-[600] leading-[25px] capitalize",
                            children: `My ${nftType}`
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-[5px] cursor-pointer items-center",
                            onClick: handleClickBackBtn,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_icons_BulletListIcon__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                    className: "h-6 w-6 dark:fill-white"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_bases_Button__WEBPACK_IMPORTED_MODULE_24__/* .Button */ .z, {
                                    className: "text-[14px] dark:text-white !leading-[25px] font-[600] !p-0",
                                    children: lang["rte/character-list"]
                                })
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("rounded-lg border-black/10 border dark:border-[#4E5156] mx-4 xl:mx-0 lg:!mr-[12px]", "w-10 h-10 flex items-center justify-center", "cursor-pointer", "xl:left-[100px]"),
                    onClick: handleClickBackBtn,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_14__/* .ArrowLeftIcon */ .Y, {
                        className: "w-4 h-4 fill-black dark:fill-[#B7B9BA]"
                    })
                }),
                renderComponentPage()
            ]
        });
    }, [
        handleClickBackBtn,
        isFetching,
        nftNotExist,
        renderComponentPage,
        isMobile,
        nftType,
        lang
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        description: "Market place",
        bHeaderAlwaysOnTop: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex flex-col relative py-5 min-h-[calc(100vh_-_60px)]", "lg:flex-row xl:py-[50px] xl:px-[170px] justify-center"),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "lg:w-[1200px] lg:min-w-[1200px] flex flex-col lg:flex-row",
                children: renderBody()
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharacterDetails);

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,5152,5277,8733,4969,5764,7636,2558,3941,1131,3186,1813,6545], () => (__webpack_exec__(48541)));
module.exports = __webpack_exports__;

})();