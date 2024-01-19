"use strict";
exports.id = 2361;
exports.ids = [2361];
exports.modules = {

/***/ 22361:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66790);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14613);
/* harmony import */ var _features_mint_mintSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8739);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53450);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_breed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42620);
/* harmony import */ var _services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86588);
/* harmony import */ var _services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17827);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(73732);
/* harmony import */ var _CharacterMintItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19760);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(60088);
/* harmony import */ var _commons_NoItemsComponent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(50072);
/* harmony import */ var _icons_ArrowBackWhiteIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(86492);
/* harmony import */ var _icons_VariantDisableIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(47399);
/* harmony import */ var _icons_VarientEnableIcon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(52359);
/* harmony import */ var _features_route_routeSlice__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(48172);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_10__, _utils_common__WEBPACK_IMPORTED_MODULE_14__, _CharacterMintItem__WEBPACK_IMPORTED_MODULE_15__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_10__, _utils_common__WEBPACK_IMPORTED_MODULE_14__, _CharacterMintItem__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const MintNewCharacterPage = ({ className  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { firstCharacterID , secondCharacterID , firstCharacterItem , secondCharacterItem , characterList , filtersCharacterList: filters ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_10__/* .useAppSelector */ .CG)((state)=>state.mint);
    const { id , secondCharacterId  } = router.query;
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_10__/* .useAppDispatch */ .TL)();
    const [getCharacterList, { isFetching  }] = _services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_12__/* ["default"].useLazyGetCharacterMintQuery */ .Z.useLazyGetCharacterMintQuery();
    const [getCharacter] = _services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_13__/* ["default"].useLazyGetOneCharacterQuery */ .Z.useLazyGetOneCharacterQuery();
    const mintState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_10__/* .useAppSelector */ .CG)((state)=>state.mint);
    const nftState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_10__/* .useAppSelector */ .CG)((state)=>state.nft);
    const listRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).state;
    const [getBreedFee] = _services_query_endpoints_breed__WEBPACK_IMPORTED_MODULE_11__/* ["default"].useLazyGetBreedFeeQuery */ .Z.useLazyGetBreedFeeQuery();
    const handleOnBackBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        if (!firstCharacterID) {
            router.push(`${_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.MY_COLLECTION */ .Yj.MY_COLLECTION}`);
            return;
        }
        const previousPage = localStorage.getItem(_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_21__/* .PREVIOUS_PAGE_KEY */ .m8);
        const isMint = localStorage.getItem(_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_21__/* .MINTORENHANCE */ .et);
        if (previousPage && isMint) {
            router.push(previousPage);
            return;
        }
        if (mintState.mintErrorMessage) {
            router.push(`${_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.MY_COLLECTION */ .Yj.MY_COLLECTION}`);
            return;
        } else {
            router.push(`${_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.MY_CHARACTER */ .Yj.MY_CHARACTER}/${firstCharacterItem.nft?.id}?tab=my-collection`);
            return;
        }
    }, [
        firstCharacterItem.nft?.id,
        mintState.mintErrorMessage,
        router,
        firstCharacterID
    ]);
    const handleMintNewCharacter = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_9__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/mint-new-character",
            propsState: {
                onCloseHandler: ()=>{
                    dispatch(_features_mint_mintSlice__WEBPACK_IMPORTED_MODULE_8__/* .mintActions.clearErrorMessage */ .kc.clearErrorMessage());
                    router.push(`${_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.MY_CHARACTER */ .Yj.MY_CHARACTER}/${firstCharacterItem.nft?.id}/mint`);
                }
            }
        }));
    }, [
        dispatch,
        firstCharacterItem.nft?.id,
        router
    ]);
    const renderNftItem = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((item, index)=>{
        if (!item.character) return;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CharacterMintItem__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            image: item.imageUrl,
            title: item.id,
            level: item.character.level,
            className: "lg:mt-10 max-w-[335px] sm:max-w-[265px]",
            // iconRarity={getRarityCollection(item.character.rarity || "")?.icon}
            // rarity={getRarity(item.character?.rarity || "")?.name}
            rarity: item.character?.rarity || "",
            mintCount: item.character.mintCount,
            totalCount: item.character.totalCount,
            isHover: true,
            id: `character-item-${index}`,
            customClassForImage: "!h-[297px] sm:!h-[246px]"
        });
    }, []);
    const isBottom = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((ref)=>{
        if (!ref.current) {
            return false;
        }
        return ref.current.getBoundingClientRect().bottom <= window.innerHeight - 30;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const onScroll = ()=>{
            if (!filters.page) return;
            if (!filters.totalPages) return;
            if (!(filters.page < filters.totalPages)) return;
            if (isFetching) return;
            if (isBottom(listRef)) {
                dispatch(_features_mint_mintSlice__WEBPACK_IMPORTED_MODULE_8__/* .mintActions.handleFilterCharacterList */ .kc.handleFilterCharacterList({
                    page: filters.page + 1
                }));
            }
        };
        document.addEventListener("scroll", onScroll);
        return ()=>document.removeEventListener("scroll", onScroll);
    }, [
        dispatch,
        filters.page,
        filters.totalPages,
        isBottom,
        isFetching
    ]);
    const characterListFiltered = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        return characterList.filter((item)=>{
            if (item.id === Number(id)) return false;
            if (item.id === Number(secondCharacterItem.id)) return false;
            if (item.character) {
                if (item.character.mintCount >= item.character.totalCount) return false;
            }
            if (item.status !== "none") return false;
            return true;
        });
    }, [
        characterList,
        id,
        secondCharacterItem.id
    ]);
    // useEffect(() => {
    //     if (!id) return;
    //     if (characterListFiltered.length) return;
    //     dispatch(mintActions.handlePlusPageFilter());
    // }, [characterListFiltered.length, dispatch, id]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const args = (0,_utils_common__WEBPACK_IMPORTED_MODULE_14__/* .removeEmptyProperties */ .Nq)({
            page: filters.page,
            limit: filters.limit
        });
        getCharacterList(args);
    }, [
        filters.page,
        filters.limit,
        getCharacterList
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        dispatch(_features_mint_mintSlice__WEBPACK_IMPORTED_MODULE_8__/* .mintActions.setFirstCharacterId */ .kc.setFirstCharacterId(id));
        dispatch(_features_mint_mintSlice__WEBPACK_IMPORTED_MODULE_8__/* .mintActions.setSecondCharacterId */ .kc.setSecondCharacterId(secondCharacterId));
    }, [
        dispatch,
        id,
        secondCharacterId
    ]);
    const handleAddCharacterItem = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((item)=>{
        if (!firstCharacterID) {
            router.push(`${_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.MY_CHARACTER */ .Yj.MY_CHARACTER}/${item.id}/mint${secondCharacterItem.id ? `?secondCharacterId=${secondCharacterItem.id}` : ""}`);
            return;
        }
        if (firstCharacterItem.character?.mintCount === firstCharacterItem.character?.totalCount) return;
        dispatch(_features_mint_mintSlice__WEBPACK_IMPORTED_MODULE_8__/* .mintActions.setSecondCharacterItem */ .kc.setSecondCharacterItem(item));
    }, [
        dispatch,
        firstCharacterItem.character?.mintCount,
        firstCharacterItem.character?.totalCount,
        firstCharacterID,
        secondCharacterItem.id,
        router, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (mintState.secondCharacterItem.character?.id) {
            getBreedFee({
                countFirst: mintState.firstCharacterItem.character?.mintCount || 0,
                countSecond: mintState.secondCharacterItem.character?.mintCount || 0
            });
        }
    }, [
        getBreedFee,
        mintState.firstCharacterItem.character?.mintCount,
        mintState.secondCharacterItem.character?.id,
        mintState.secondCharacterItem.character?.mintCount, 
    ]);
    const handleDeleteFirstCharacter = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        if (firstCharacterItem) {
            router.push(`${_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.EMPTY_MINT_CHARACTER */ .Yj.EMPTY_MINT_CHARACTER}${secondCharacterItem.id ? `?secondCharacterId=${secondCharacterItem.id}` : ""}`);
        }
    }, [
        firstCharacterItem,
        router,
        secondCharacterItem.id
    ]);
    const handleDeleteSecondCharacter = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        if (secondCharacterItem) {
            dispatch(_features_mint_mintSlice__WEBPACK_IMPORTED_MODULE_8__/* .mintActions.setClearSecondCharacterItem */ .kc.setClearSecondCharacterItem());
        }
    }, [
        dispatch,
        secondCharacterItem
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        (async ()=>{
            if (firstCharacterID) {
                const resFirst = await getCharacter({
                    nftId: firstCharacterID,
                    type: "collection"
                });
                if (resFirst.data?.data) dispatch(_features_mint_mintSlice__WEBPACK_IMPORTED_MODULE_8__/* .mintActions.setFirstCharacterItem */ .kc.setFirstCharacterItem(resFirst.data.data));
            }
            if (secondCharacterID) {
                const resSecond = await getCharacter({
                    nftId: secondCharacterID,
                    type: "collection"
                });
                const data = resSecond.data?.data;
                if (data) dispatch(_features_mint_mintSlice__WEBPACK_IMPORTED_MODULE_8__/* .mintActions.setSecondCharacterItem */ .kc.setSecondCharacterItem({
                    ...data,
                    id: data.nft?.id,
                    imageUrl: data.nft?.imageUrl,
                    userId: data.user?.id,
                    status: data.nft?.status,
                    price: data.nft?.price,
                    token: data.nft?.token,
                    tokenId: data.nft?.tokenId,
                    type: data.nft?.type
                }));
            }
        })();
    }, [
        dispatch,
        firstCharacterID,
        secondCharacterID,
        getCharacter,
        nftState.timeStampAction
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        return ()=>{
            dispatch(_features_mint_mintSlice__WEBPACK_IMPORTED_MODULE_8__/* .mintActions.setClearMintCharacter */ .kc.setClearMintCharacter());
            dispatch(_features_mint_mintSlice__WEBPACK_IMPORTED_MODULE_8__/* .mintActions.setClearCharacterList */ .kc.setClearCharacterList());
            dispatch(_features_mint_mintSlice__WEBPACK_IMPORTED_MODULE_8__/* .mintActions.clearErrorMessage */ .kc.clearErrorMessage());
        };
    }, [
        dispatch
    ]);
    const renderBackButton = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex tablet-3:pl-[150px] mb-8 cursor-pointer select-none",
            onClick: handleOnBackBtnClicked,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ArrowBackWhiteIcon__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    className: "w-[26px] h-[26px] mt-9"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-h7 font-semibold text-white mt-8",
                    children: lang["comp/minting-character"]
                })
            ]
        });
    }, [
        handleOnBackBtnClicked,
        lang
    ]);
    const renderMintArea = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-start items-center tablet-3:justify-center gap-8 mb-10 w-full overflow-x-auto overflow-y-hidden px-6 tablet-3:px-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative flex justify-center items-center shrink-0 grow-0", "w-character-container-w lg:h-[395px]", "bg-[rgba(170,153,125,0.2)] dark:bg-[rgba(35, 35, 35, 0.5)] shadow-character-slot rounded-[14px] bg-cover bg-center", "flex justify-center items-center"),
                            children: firstCharacterItem.character?.id ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: handleDeleteFirstCharacter,
                                className: "absolute w-character-card-w",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CharacterMintItem__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    className: "h-[380px]",
                                    image: firstCharacterItem.nft?.imageUrl,
                                    title: firstCharacterItem.nft?.id,
                                    level: firstCharacterItem.character?.level,
                                    // iconRarity={
                                    //     getRarityCollection(firstCharacterItem.character?.rarity || "")
                                    //         ?.icon
                                    // }
                                    // rarity={getRarity(firstCharacterItem.character?.rarity || "")?.name}
                                    rarity: firstCharacterItem.character?.rarity || "",
                                    mintCount: firstCharacterItem.character?.mintCount,
                                    totalCount: firstCharacterItem.character?.totalCount,
                                    isSimpleHover: true
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute w-character-card-w h-[380px] bg-[#988E7E] rounded-xl flex justify-center items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/svg/add-card.svg`,
                                    alt: "",
                                    width: "65px",
                                    height: "65px"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[35px] grow-0 shrink-0 flex items-center justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/svg/graft-character.svg`,
                                alt: "",
                                width: "35px",
                                height: "35px"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative flex justify-center items-center w-[275px] lg:h-[395px] bg-[rgba(170,153,125,0.2)] shadow-character-slot rounded-[14px] shrink-0 grow-0",
                            children: secondCharacterItem.id ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: handleDeleteSecondCharacter,
                                className: "absolute w-character-card-w",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CharacterMintItem__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    className: "h-[380px]",
                                    title: secondCharacterItem.id,
                                    image: secondCharacterItem.imageUrl,
                                    level: secondCharacterItem.character?.level,
                                    // iconRarity={
                                    //     getRarityCollection(
                                    //         secondCharacterItem.character?.rarity || ""
                                    //     )?.icon
                                    // }
                                    // rarity={
                                    //     getRarity(secondCharacterItem.character?.rarity || "")?.name
                                    // }
                                    rarity: secondCharacterItem.character?.rarity,
                                    mintCount: secondCharacterItem.character?.mintCount,
                                    totalCount: secondCharacterItem.character?.totalCount,
                                    isSimpleHover: true
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute w-character-card-w h-[380px] bg-[#988E7E] rounded-xl flex justify-center items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/svg/add-card.svg`,
                                    alt: "",
                                    width: "65px",
                                    height: "65px"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex justify-center items-center w-[40px] grow-0 shrink-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/right-arrow.png`,
                                alt: "",
                                width: "40px",
                                height: "40px"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grow-0 shrink-0 relative flex justify-center items-center w-character-container-w h-[395px] bg-[rgba(170,153,125,0.2)] shadow-character-slot rounded-[14px] overflow-visible",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute w-character-card-w h-[380px] bg-[#988E7E] rounded-xl flex justify-center items-center z-10",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/svg/question-card.svg`,
                                            alt: "",
                                            width: "65px",
                                            height: "65px"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute top-0 left-0 bottom-0 right-0 bg-contain bg-no-repeat bg-center scale-[1.4] animate-pulse",
                                    style: {
                                        backgroundImage: `url(${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/svg/light-effect.svg)`
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute top-0 left-0 bottom-0 right-0 bg-contain bg-no-repeat bg-center scale-[1.4] animate-pulse",
                                    style: {
                                        backgroundImage: `url(${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/svg/spark-effect.svg')`
                                    }
                                })
                            ]
                        })
                    ]
                }),
                firstCharacterID && secondCharacterItem.id ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-center mb-9 items-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_16__/* .Button */ .z, {
                        onClick: handleMintNewCharacter,
                        className: "contained-primary w-full lg:w-character-card-w",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_VarientEnableIcon__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                className: "w-[22px] h-[22px]"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "ml-2 text-white",
                                children: [
                                    lang["button/mint"],
                                    " (",
                                    mintState.mintFee.feeRTMint,
                                    " EP +",
                                    " ",
                                    mintState.mintFee.feeGTMint,
                                    " FLKZ)"
                                ]
                            })
                        ]
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-center mb-9",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_16__/* .Button */ .z, {
                        onClick: handleMintNewCharacter,
                        className: "contained-secondary w-full lg:w-character-card-w",
                        disabled: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_VariantDisableIcon__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "ml-2 text-[#555555]/50",
                                children: lang["button/mint"]
                            })
                        ]
                    })
                })
            ]
        });
    }, [
        firstCharacterID,
        firstCharacterItem.character?.level,
        firstCharacterItem.character?.mintCount,
        firstCharacterItem.character?.rarity,
        firstCharacterItem.character?.totalCount,
        firstCharacterItem.character?.id,
        firstCharacterItem.nft?.id,
        firstCharacterItem.nft?.imageUrl,
        handleDeleteFirstCharacter,
        handleDeleteSecondCharacter,
        handleMintNewCharacter,
        lang,
        mintState.mintFee.feeGTMint,
        mintState.mintFee.feeRTMint,
        secondCharacterItem.character?.level,
        secondCharacterItem.character?.mintCount,
        secondCharacterItem.character?.rarity,
        secondCharacterItem.character?.totalCount,
        secondCharacterItem.id,
        secondCharacterItem.imageUrl, 
    ]);
    const renderCharacterListPanel = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("py-12 px-6 lg:px-36 bg-[#F8F8F8] dark:bg-[#0f0f0f]", className),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-h6 font-semibold dark:text-white mb-8 lg:mb-0",
                    children: lang["comp/your-characters"]
                }),
                characterListFiltered.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(303px,5fr))] lg:-mx-5 gap-10 lg:gap-0",
                    ref: listRef,
                    children: characterListFiltered.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: ()=>handleAddCharacterItem(item),
                            className: "flex justify-center lg:px-5",
                            children: renderNftItem(item, index)
                        }, index))
                }),
                !isFetching && characterListFiltered.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-28",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_NoItemsComponent__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        classNameImage: "w-[100px] lg:w-[150px] mt-[30px]",
                        description: filters.keyword ? `${lang["profile/no-items-found"]}` : `${lang["comp/no-characters-with"]}`
                    })
                }),
                isFetching && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col flex-grow justify-center items-center lg:h-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-icon-2xl h-icon-2xl animate-spin rounded-full border-4 border-white border-t-4 border-t-red-500"
                    })
                })
            ]
        });
    }, [
        characterListFiltered,
        className,
        filters.keyword,
        handleAddCharacterItem,
        isFetching,
        lang,
        renderNftItem, 
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        lang["comp/mint-character"],
                        " - SGTFT"
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col bg-[#59544D] dark:bg-dark-01 lg:height-[520px] px-6 tablet-3:px-0",
                children: [
                    renderBackButton(),
                    renderMintArea()
                ]
            }),
            renderCharacterListPanel()
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MintNewCharacterPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const VariantDisableIcon = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "23",
        height: "22",
        viewBox: "0 0 23 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M19.9058 1.88901C19.2488 1.77584 18.5834 1.71758 17.9167 1.71485C15.6418 1.71298 13.4144 2.36529 11.5 3.59401C9.58063 2.38142 7.35359 1.74513 5.08333 1.76068C4.41659 1.76341 3.75123 1.82167 3.09416 1.93485C2.87894 1.97195 2.68403 2.08468 2.54454 2.25274C2.40505 2.4208 2.33015 2.63313 2.33333 2.85151V13.8515C2.33137 13.9862 2.35911 14.1197 2.41459 14.2424C2.47007 14.3652 2.55192 14.4742 2.65432 14.5617C2.75672 14.6492 2.87715 14.7131 3.00704 14.7488C3.13693 14.7845 3.27309 14.7911 3.40583 14.7682C4.71943 14.5407 6.06526 14.5785 7.36406 14.8792C8.66285 15.1799 9.88833 15.7374 10.9683 16.519L11.0783 16.5832H11.1792C11.2808 16.6255 11.3899 16.6473 11.5 16.6473C11.6101 16.6473 11.7192 16.6255 11.8208 16.5832H11.9217L12.0317 16.519C13.1041 15.7199 14.3261 15.1443 15.6251 14.8263C16.9242 14.5082 18.2738 14.4541 19.5942 14.6673C19.7269 14.6903 19.8631 14.6836 19.993 14.648C20.1228 14.6123 20.2433 14.5484 20.3457 14.4609C20.4481 14.3733 20.5299 14.2643 20.5854 14.1416C20.6409 14.0188 20.6686 13.8854 20.6667 13.7507V2.75068C20.6571 2.54182 20.5765 2.3425 20.4381 2.18577C20.2997 2.02905 20.1119 1.92434 19.9058 1.88901ZM10.5833 14.0715C8.88739 13.1793 6.99964 12.7137 5.08333 12.7148C4.78083 12.7148 4.47833 12.7148 4.16666 12.7148V3.54818C4.47197 3.53059 4.77803 3.53059 5.08333 3.54818C7.03893 3.54602 8.95186 4.1199 10.5833 5.19818V14.0715ZM18.8333 12.7515C18.5217 12.7515 18.2192 12.7515 17.9167 12.7515C16.0004 12.7503 14.1126 13.216 12.4167 14.1082V5.19818C14.0481 4.1199 15.9611 3.54602 17.9167 3.54818C18.222 3.53059 18.528 3.53059 18.8333 3.54818V12.7515ZM19.9058 16.5557C19.2488 16.4425 18.5834 16.3842 17.9167 16.3815C15.6418 16.3797 13.4144 17.032 11.5 18.2607C9.58555 17.032 7.35816 16.3797 5.08333 16.3815C4.41659 16.3842 3.75123 16.4425 3.09416 16.5557C2.97484 16.5746 2.86043 16.617 2.75753 16.6803C2.65462 16.7436 2.56525 16.8266 2.49454 16.9246C2.42383 17.0225 2.37319 17.1335 2.34552 17.2511C2.31786 17.3687 2.31371 17.4906 2.33333 17.6098C2.37991 17.8479 2.51895 18.0578 2.71997 18.1935C2.921 18.3292 3.16762 18.3798 3.40583 18.334C4.71943 18.1066 6.06526 18.1443 7.36406 18.445C8.66285 18.7457 9.88833 19.3033 10.9683 20.0848C11.1236 20.1954 11.3094 20.2548 11.5 20.2548C11.6906 20.2548 11.8764 20.1954 12.0317 20.0848C13.1117 19.3033 14.3371 18.7457 15.6359 18.445C16.9347 18.1443 18.2806 18.1066 19.5942 18.334C19.8324 18.3798 20.079 18.3292 20.28 18.1935C20.481 18.0578 20.6201 17.8479 20.6667 17.6098C20.6863 17.4906 20.6821 17.3687 20.6545 17.2511C20.6268 17.1335 20.5762 17.0225 20.5054 16.9246C20.4347 16.8266 20.3454 16.7436 20.2425 16.6803C20.1396 16.617 20.0252 16.5746 19.9058 16.5557Z",
            fill: "#555555",
            opacity: "50%"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VariantDisableIcon);


/***/ }),

/***/ 52359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bases_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74142);



const VariantEnableIcon = ({ className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 22 22",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M19.4058 1.88901C18.7488 1.77584 18.0834 1.71758 17.4167 1.71485C15.1418 1.71298 12.9144 2.36529 11 3.59401C9.08063 2.38142 6.85359 1.74513 4.58333 1.76068C3.91659 1.76341 3.25123 1.82167 2.59416 1.93485C2.37894 1.97195 2.18403 2.08468 2.04454 2.25274C1.90505 2.4208 1.83015 2.63313 1.83333 2.85151V13.8515C1.83137 13.9862 1.85911 14.1197 1.91459 14.2424C1.97007 14.3652 2.05192 14.4742 2.15432 14.5617C2.25672 14.6492 2.37715 14.7131 2.50704 14.7488C2.63693 14.7845 2.77309 14.7911 2.90583 14.7682C4.21943 14.5407 5.56526 14.5785 6.86406 14.8792C8.16285 15.1799 9.38833 15.7374 10.4683 16.519L10.5783 16.5832H10.6792C10.7808 16.6255 10.8899 16.6473 11 16.6473C11.1101 16.6473 11.2192 16.6255 11.3208 16.5832H11.4217L11.5317 16.519C12.6041 15.7199 13.8261 15.1443 15.1251 14.8263C16.4242 14.5082 17.7738 14.4541 19.0942 14.6673C19.2269 14.6903 19.3631 14.6836 19.493 14.648C19.6228 14.6123 19.7433 14.5484 19.8457 14.4609C19.9481 14.3733 20.0299 14.2643 20.0854 14.1416C20.1409 14.0188 20.1686 13.8854 20.1667 13.7507V2.75068C20.1571 2.54182 20.0765 2.3425 19.9381 2.18577C19.7997 2.02905 19.6119 1.92434 19.4058 1.88901ZM10.0833 14.0715C8.38739 13.1793 6.49964 12.7137 4.58333 12.7148C4.28083 12.7148 3.97833 12.7148 3.66666 12.7148V3.54818C3.97197 3.53059 4.27803 3.53059 4.58333 3.54818C6.53893 3.54602 8.45186 4.1199 10.0833 5.19818V14.0715ZM18.3333 12.7515C18.0217 12.7515 17.7192 12.7515 17.4167 12.7515C15.5004 12.7503 13.6126 13.216 11.9167 14.1082V5.19818C13.5481 4.1199 15.4611 3.54602 17.4167 3.54818C17.722 3.53059 18.028 3.53059 18.3333 3.54818V12.7515ZM19.4058 16.5557C18.7488 16.4425 18.0834 16.3842 17.4167 16.3815C15.1418 16.3797 12.9144 17.032 11 18.2607C9.08555 17.032 6.85816 16.3797 4.58333 16.3815C3.91659 16.3842 3.25123 16.4425 2.59416 16.5557C2.47484 16.5746 2.36043 16.617 2.25753 16.6803C2.15462 16.7436 2.06525 16.8266 1.99454 16.9246C1.92383 17.0225 1.87319 17.1335 1.84552 17.2511C1.81786 17.3687 1.81371 17.4906 1.83333 17.6098C1.87991 17.8479 2.01895 18.0578 2.21997 18.1935C2.421 18.3292 2.66762 18.3798 2.90583 18.334C4.21943 18.1066 5.56526 18.1443 6.86406 18.445C8.16285 18.7457 9.38833 19.3033 10.4683 20.0848C10.6236 20.1954 10.8094 20.2548 11 20.2548C11.1906 20.2548 11.3764 20.1954 11.5317 20.0848C12.6117 19.3033 13.8371 18.7457 15.1359 18.445C16.4347 18.1443 17.7806 18.1066 19.0942 18.334C19.3324 18.3798 19.579 18.3292 19.78 18.1935C19.981 18.0578 20.1201 17.8479 20.1667 17.6098C20.1863 17.4906 20.1821 17.3687 20.1545 17.2511C20.1268 17.1335 20.0762 17.0225 20.0054 16.9246C19.9347 16.8266 19.8454 16.7436 19.7425 16.6803C19.6396 16.617 19.5252 16.5746 19.4058 16.5557V16.5557Z",
                fill: "white"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VariantEnableIcon);


/***/ })

};
;