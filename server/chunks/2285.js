"use strict";
exports.id = 2285;
exports.ids = [2285];
exports.modules = {

/***/ 82285:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ EnhanceCharacterPage)
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
/* harmony import */ var _features_characterEnhance_characterEnhanceSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74362);
/* harmony import */ var _features_modal_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53450);
/* harmony import */ var _features_route_routeSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48172);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86588);
/* harmony import */ var _services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17827);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(73732);
/* harmony import */ var _CharacterEnhanceItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23394);
/* harmony import */ var _bases_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(60088);
/* harmony import */ var _commons_NoItemsComponent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(50072);
/* harmony import */ var _icons_ArrowBackWhiteIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(86492);
/* harmony import */ var _icons_StarEmpty__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(19240);
/* harmony import */ var _icons_StarEmptyEnable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(39929);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_11__, _utils_common__WEBPACK_IMPORTED_MODULE_14__, _CharacterEnhanceItem__WEBPACK_IMPORTED_MODULE_15__]);
([_hooks_common__WEBPACK_IMPORTED_MODULE_11__, _utils_common__WEBPACK_IMPORTED_MODULE_14__, _CharacterEnhanceItem__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const EnhanceCharacterPage = ({ className  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useAppDispatch */ .TL)();
    const { firstCharacterID , firstCharacterItem , charactersSelected , filtersCharacterList: filters , characterList ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useAppSelector */ .CG)((state)=>state.characterEnhance);
    const { id  } = router.query;
    const [getCharacterList, { isFetching  }] = _services_query_endpoints_character__WEBPACK_IMPORTED_MODULE_12__/* ["default"].useLazyGetCharacterEnhanceQuery */ .Z.useLazyGetCharacterEnhanceQuery();
    const [getCharacter] = _services_query_endpoints_nfts__WEBPACK_IMPORTED_MODULE_13__/* ["default"].useLazyGetOneCharacterQuery */ .Z.useLazyGetOneCharacterQuery();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).state;
    const { characterDetail  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useAppSelector */ .CG)((state)=>state.character);
    const { nft  } = characterDetail;
    const nftState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useAppSelector */ .CG)((state)=>state.nft);
    const listRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const enhanceState = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_11__/* .useAppSelector */ .CG)((state)=>state.characterEnhance);
    const { 0: isEnhancing , 1: setIsEnhancing  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const characterListFiltered = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        return characterList.filter((item)=>{
            if (item.id === Number(id)) return false;
            if (charactersSelected.filter((char)=>char.id === item.id).length > 0) return false;
            if (firstCharacterItem.character?.rarity && item.character?.rarity !== firstCharacterItem.character?.rarity) return false;
            if (item.character?.rarity === "4") return false;
            return true;
        });
    }, [
        characterList,
        charactersSelected,
        firstCharacterItem.character?.rarity,
        id
    ]);
    const handleOpenEnhanceCharacter = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        dispatch(_features_modal_modal__WEBPACK_IMPORTED_MODULE_9__/* .modalSliceActions.addToQueue */ .E.addToQueue({
            type: "popup/enhance-character",
            propsState: {
                onConfirmHandler: ()=>setIsEnhancing(true),
                onCloseHandler: ()=>{
                    setIsEnhancing(false);
                    dispatch(_features_characterEnhance_characterEnhanceSlice__WEBPACK_IMPORTED_MODULE_8__/* .characterEnhanceActions.clearErrorMessage */ .b.clearErrorMessage());
                    router.push(_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.EMPTY_ENHANCE_CHARACTER */ .Yj.EMPTY_ENHANCE_CHARACTER);
                }
            }
        }));
    }, [
        dispatch,
        router
    ]);
    const handleAddCharacterItem = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((item)=>{
        if (!firstCharacterID) {
            router.push(`${_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.MY_CHARACTER */ .Yj.MY_CHARACTER}/${item.id}/enhance`);
            return;
        }
        if (charactersSelected.length === 4) return;
        dispatch(_features_characterEnhance_characterEnhanceSlice__WEBPACK_IMPORTED_MODULE_8__/* .characterEnhanceActions.setCharactersSlot */ .b.setCharactersSlot(item));
    }, [
        firstCharacterID,
        router,
        dispatch,
        charactersSelected.length
    ]);
    const handleDeleteFirstCharacter = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        if (firstCharacterItem) {
            router.push(`${_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.EMPTY_ENHANCE_CHARACTER */ .Yj.EMPTY_ENHANCE_CHARACTER}`);
        }
    }, [
        firstCharacterItem,
        router
    ]);
    const handleUnSelectCharacterSlot = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((items)=>{
        if (items) {
            dispatch(_features_characterEnhance_characterEnhanceSlice__WEBPACK_IMPORTED_MODULE_8__/* .characterEnhanceActions.setUnSelectCharacterSlot */ .b.setUnSelectCharacterSlot(items.id));
        } else return;
    }, [
        dispatch
    ]);
    const handleOnBackBtnClicked = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        if (!firstCharacterID) {
            router.push(`${_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.MY_COLLECTION */ .Yj.MY_COLLECTION}`);
            return;
        }
        const previousPage = localStorage.getItem(_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_10__/* .PREVIOUS_PAGE_KEY */ .m8);
        const isMint = localStorage.getItem(_features_route_routeSlice__WEBPACK_IMPORTED_MODULE_10__/* .MINTORENHANCE */ .et);
        if (previousPage && isMint) {
            router.push(previousPage);
            return;
        }
        if (enhanceState.enhanceErrorMessage) {
            router.push(`${_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.MY_COLLECTION */ .Yj.MY_COLLECTION}`);
            return;
        } else {
            router.push(`${_constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTER.MY_CHARACTER */ .Yj.MY_CHARACTER}/${nft?.id}`);
            return;
        }
    }, [
        enhanceState.enhanceErrorMessage,
        nft?.id,
        router,
        firstCharacterID
    ]);
    const renderNftItem = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((item, index)=>{
        if (!item.character) return;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CharacterEnhanceItem__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            image: item.imageUrl,
            title: item.id,
            level: item.character.level,
            className: "mt-10 max-w-[335px] sm:max-w-[265px]",
            // iconRarity={getRarityCollection(item.character?.rarity || "")?.icon}
            // rarity={getRarity(item.character?.rarity || "")?.name}
            rarity: item.character?.rarity,
            isHover: true,
            isId: true,
            heightCharacter: true,
            id: `character-item-${index}`
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
                dispatch(_features_characterEnhance_characterEnhanceSlice__WEBPACK_IMPORTED_MODULE_8__/* .characterEnhanceActions.handleFilterCharacterList */ .b.handleFilterCharacterList({
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
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (!id) return;
        if (characterListFiltered.length) return;
        dispatch(_features_characterEnhance_characterEnhanceSlice__WEBPACK_IMPORTED_MODULE_8__/* .characterEnhanceActions.handlePlusPageFilter */ .b.handlePlusPageFilter());
    }, [
        dispatch,
        id,
        characterListFiltered.length,
        characterList.length
    ]);
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
        dispatch(_features_characterEnhance_characterEnhanceSlice__WEBPACK_IMPORTED_MODULE_8__/* .characterEnhanceActions.setFirstCharacterId */ .b.setFirstCharacterId(id));
    }, [
        dispatch,
        id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (!firstCharacterID || isEnhancing) return;
        getCharacter({
            nftId: firstCharacterID,
            type: "collection"
        });
    }, [
        firstCharacterID,
        getCharacter,
        nftState.timeStampAction,
        isEnhancing
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        return ()=>{
            dispatch(_features_characterEnhance_characterEnhanceSlice__WEBPACK_IMPORTED_MODULE_8__/* .characterEnhanceActions.setDefaultEnhanceCharacter */ .b.setDefaultEnhanceCharacter());
            dispatch(_features_characterEnhance_characterEnhanceSlice__WEBPACK_IMPORTED_MODULE_8__/* .characterEnhanceActions.setClearCharacterList */ .b.setClearCharacterList());
            dispatch(_features_characterEnhance_characterEnhanceSlice__WEBPACK_IMPORTED_MODULE_8__/* .characterEnhanceActions.clearErrorMessage */ .b.clearErrorMessage());
        };
    }, [
        dispatch
    ]);
    const renderBackButton = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            onClick: handleOnBackBtnClicked,
            className: "flex 3xl:pl-[150px] mb-7 cursor-pointer select-none",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ArrowBackWhiteIcon__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    className: "w-[26px] h-[26px] mt-9"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-h7 font-semibold text-white mt-8",
                    children: lang["modal/enhance-character"]
                })
            ]
        });
    }, [
        handleOnBackBtnClicked,
        lang
    ]);
    const renderEnhanceArea = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-start 3xl:justify-center gap-2 mb-8 w-full overflow-x-auto overflow-y-hidden px-6 3xl:px-0 lg:scrollbar-thin",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative flex justify-center items-center shrink-0 grow-0", "w-[200px] lg:h-[325px] bg-cover bg-center", "bg-[rgba(170,153,125,0.2)] shadow-character-slot rounded-[14px]", "dark:bg-[rgba(35, 35, 35, 0.5)]"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute w-[190px] h-[310px] bg-[#988E7E] rounded-xl flex justify-center items-center",
                                children: firstCharacterItem.character?.id ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: handleDeleteFirstCharacter,
                                    className: "w-full h-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CharacterEnhanceItem__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        className: "h-[310px]",
                                        title: firstCharacterItem.nft?.id,
                                        level: firstCharacterItem.character?.level,
                                        // iconRarity={
                                        //     getRarityCollection(
                                        //         firstCharacterItem.character?.rarity || ""
                                        //     )?.icon
                                        // }
                                        // rarity={
                                        //     getRarity(firstCharacterItem.character?.rarity || "")?.name
                                        // }
                                        rarity: firstCharacterItem.character?.rarity,
                                        image: firstCharacterItem.nft?.imageUrl,
                                        isId: true
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/svg/add-card.svg`,
                                        alt: "",
                                        width: "65px",
                                        height: "65px"
                                    })
                                })
                            })
                        }),
                        [
                            ...charactersSelected,
                            ...Array(4)
                        ].slice(0, 4).map((characterItem, characterIndex)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>handleUnSelectCharacterSlot(characterItem),
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative flex justify-center items-center shrink-0 grow-0", "bg-[rgba(170,153,125,0.2)] shadow-character-slot rounded-[14px]", "w-[200px] h-[325px]"),
                                children: characterItem ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CharacterEnhanceItem__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    className: "h-[310px]",
                                    title: characterItem.id,
                                    level: characterItem.character?.level,
                                    // iconRarity={
                                    //     getRarityCollection(
                                    //         characterItem.character?.rarity || ""
                                    //     )?.icon
                                    // }
                                    // rarity={
                                    //     getRarity(characterItem.character?.rarity || "")
                                    //         ?.name
                                    // }
                                    rarity: characterItem.character?.rarity,
                                    image: characterItem.imageUrl,
                                    isId: true
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute w-[190px] h-[310px] bg-[#988E7E] rounded-xl flex justify-center items-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/svg/add-card.svg`,
                                        alt: "",
                                        width: "65px",
                                        height: "65px"
                                    })
                                })
                            }, characterIndex);
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
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("grow-0 shrink-0 relative flex justify-center items-center", "w-[200px] h-[325px]", "bg-[rgba(170,153,125,0.2)] shadow-character-slot rounded-[14px] overflow-visible"),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute w-[190px] h-[310px] bg-[#988E7E] rounded-xl flex justify-center items-center z-10",
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
                                    className: "absolute top-0 left-0 bottom-0 right-0 bg-contain bg-no-repeat bg-center scale-[1.5] animate-pulse",
                                    style: {
                                        backgroundImage: `url(${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/svg/light-effect.svg)`
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute top-0 left-0 bottom-0 right-0 bg-contain bg-no-repeat bg-center scale-[1.6] animate-pulse",
                                    style: {
                                        backgroundImage: `url(${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/svg/spark-effect.svg)`
                                    }
                                })
                            ]
                        })
                    ]
                }),
                firstCharacterID && charactersSelected.length === 4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-center mb-14",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_16__/* .Button */ .z, {
                        onClick: handleOpenEnhanceCharacter,
                        className: "contained-primary w-full lg:w-character-card-w",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_StarEmptyEnable__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "ml-2 text-white text-h8",
                                children: lang["button/enhance"]
                            })
                        ]
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-center mb-14",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bases_Button__WEBPACK_IMPORTED_MODULE_16__/* .Button */ .z, {
                        className: "contained-secondary w-full lg:w-character-card-w",
                        disabled: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_StarEmpty__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "ml-2 text-[#555555]/50 text-h8",
                                children: lang["button/enhance"]
                            })
                        ]
                    })
                })
            ]
        });
    }, [
        charactersSelected,
        firstCharacterID,
        firstCharacterItem.character?.id,
        firstCharacterItem.character?.level,
        firstCharacterItem.character?.rarity,
        firstCharacterItem.nft?.id,
        firstCharacterItem.nft?.imageUrl,
        handleOpenEnhanceCharacter,
        handleUnSelectCharacterSlot,
        handleDeleteFirstCharacter,
        lang, 
    ]);
    const renderCharacterListPanel = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("py-12 px-6 lg:px-36 bg-[#F8F8F8] dark:bg-[#0F0F0F]", className),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-h4 font-semibold dark:text-white mb-8 lg:mb-0",
                    children: lang["comp/your-characters"]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("h-full"),
                    children: characterListFiltered.length > 0 && !isEnhancing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(303px,5fr))] lg:mx-5",
                        ref: listRef,
                        children: characterListFiltered.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>handleAddCharacterItem(item),
                                className: "flex justify-center lg:px-5",
                                children: renderNftItem(item, index)
                            }, index))
                    })
                }),
                !isFetching && characterListFiltered.length === 0 && !isEnhancing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commons_NoItemsComponent__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    classNameImage: "w-[80px] lg:w-[150px] mt-[30px]",
                    description: filters.keyword ? `${lang["profile/no-items-found"]}` : `${lang["comp/no-character-rarity"]}`
                }),
                (isFetching || isEnhancing) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col flex-grow justify-center items-center lg:h-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-icon-2xl h-icon-2xl animate-spin rounded-full border-4 border-white border-t-4 border-t-red-500"
                    })
                })
            ]
        });
    }, [
        className,
        lang,
        characterListFiltered,
        isFetching,
        filters.keyword,
        renderNftItem,
        handleAddCharacterItem,
        isEnhancing, 
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        lang["modal/enhance-character"],
                        " - Flickrz"
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col bg-[#59544D] dark:bg-dark-01 3xl:height-[520px] px-6 3xl:px-0",
                children: [
                    renderBackButton(),
                    renderEnhanceArea()
                ]
            }),
            renderCharacterListPanel()
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const StarEmpty = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "19",
        height: "18",
        viewBox: "0 0 19 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M18.6667 6.86564C18.6088 6.69797 18.5035 6.5507 18.3636 6.44169C18.2236 6.33267 18.0551 6.2666 17.8783 6.25148L12.6625 5.49064L10.325 0.751476C10.2499 0.596494 10.1327 0.465789 9.98683 0.374335C9.84092 0.28288 9.6722 0.234375 9.5 0.234375C9.3278 0.234375 9.15908 0.28288 9.01317 0.374335C8.86726 0.465789 8.75006 0.596494 8.675 0.751476L6.3375 5.48148L1.12167 6.25148C0.952012 6.27559 0.792513 6.34678 0.661271 6.45695C0.530028 6.56713 0.432296 6.71189 0.379166 6.87481C0.330533 7.03401 0.326168 7.20345 0.366542 7.36494C0.406915 7.52644 0.490503 7.67389 0.608333 7.79148L4.39417 11.4581L3.4775 16.6648C3.44477 16.8367 3.46191 17.0143 3.52688 17.1767C3.59185 17.3392 3.70195 17.4796 3.84417 17.5815C3.98278 17.6806 4.14628 17.7391 4.31629 17.7504C4.48631 17.7617 4.65612 17.7255 4.80667 17.6456L9.5 15.1981L14.175 17.6548C14.3037 17.7274 14.449 17.7653 14.5967 17.7648C14.7908 17.7655 14.9802 17.7045 15.1375 17.5906C15.2797 17.4888 15.3898 17.3483 15.4548 17.1859C15.5198 17.0235 15.5369 16.8458 15.5042 16.674L14.5875 11.4673L18.3733 7.80064C18.5057 7.68851 18.6035 7.54114 18.6554 7.37563C18.7073 7.21012 18.7112 7.03328 18.6667 6.86564ZM13.0292 10.5323C12.9217 10.6363 12.8412 10.765 12.7949 10.9072C12.7486 11.0494 12.7377 11.2008 12.7633 11.3481L13.4233 15.189L9.97667 13.3556C9.84404 13.285 9.69609 13.2481 9.54583 13.2481C9.39558 13.2481 9.24762 13.285 9.115 13.3556L5.66833 15.189L6.32833 11.3481C6.35394 11.2008 6.3431 11.0494 6.29677 10.9072C6.25043 10.765 6.17 10.6363 6.0625 10.5323L3.3125 7.78231L7.17167 7.22314C7.32016 7.20249 7.46133 7.14572 7.58279 7.05782C7.70425 6.96993 7.80229 6.85358 7.86833 6.71898L9.5 3.22648L11.2233 6.72814C11.2894 6.86274 11.3874 6.97909 11.5089 7.06699C11.6303 7.15489 11.7715 7.21165 11.92 7.23231L15.7792 7.79148L13.0292 10.5323Z",
            fill: "#555555",
            opacity: "50%"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarEmpty);


/***/ }),

/***/ 39929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const StarEmptyEnable = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "19",
        height: "18",
        viewBox: "0 0 19 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M18.6667 6.86564C18.6088 6.69797 18.5035 6.5507 18.3636 6.44169C18.2236 6.33267 18.0551 6.2666 17.8783 6.25148L12.6625 5.49064L10.325 0.751476C10.2499 0.596494 10.1327 0.465789 9.98683 0.374335C9.84092 0.28288 9.6722 0.234375 9.5 0.234375C9.3278 0.234375 9.15908 0.28288 9.01317 0.374335C8.86726 0.465789 8.75006 0.596494 8.675 0.751476L6.3375 5.48148L1.12167 6.25148C0.952012 6.27559 0.792513 6.34678 0.661271 6.45695C0.530028 6.56713 0.432296 6.71189 0.379166 6.87481C0.330533 7.03401 0.326168 7.20345 0.366542 7.36494C0.406915 7.52644 0.490503 7.67389 0.608333 7.79148L4.39417 11.4581L3.4775 16.6648C3.44477 16.8367 3.46191 17.0143 3.52688 17.1767C3.59185 17.3392 3.70195 17.4796 3.84417 17.5815C3.98278 17.6806 4.14628 17.7391 4.31629 17.7504C4.48631 17.7617 4.65612 17.7255 4.80667 17.6456L9.5 15.1981L14.175 17.6548C14.3037 17.7274 14.449 17.7653 14.5967 17.7648C14.7908 17.7655 14.9802 17.7045 15.1375 17.5906C15.2797 17.4888 15.3898 17.3483 15.4548 17.1859C15.5198 17.0235 15.5369 16.8458 15.5042 16.674L14.5875 11.4673L18.3733 7.80064C18.5057 7.68851 18.6035 7.54114 18.6554 7.37563C18.7073 7.21012 18.7112 7.03328 18.6667 6.86564ZM13.0292 10.5323C12.9217 10.6363 12.8412 10.765 12.7949 10.9072C12.7486 11.0494 12.7377 11.2008 12.7633 11.3481L13.4233 15.189L9.97667 13.3556C9.84404 13.285 9.69609 13.2481 9.54583 13.2481C9.39558 13.2481 9.24762 13.285 9.115 13.3556L5.66833 15.189L6.32833 11.3481C6.35394 11.2008 6.3431 11.0494 6.29677 10.9072C6.25043 10.765 6.17 10.6363 6.0625 10.5323L3.3125 7.78231L7.17167 7.22314C7.32016 7.20249 7.46133 7.14572 7.58279 7.05782C7.70425 6.96993 7.80229 6.85358 7.86833 6.71898L9.5 3.22648L11.2233 6.72814C11.2894 6.86274 11.3874 6.97909 11.5089 7.06699C11.6303 7.15489 11.7715 7.21165 11.92 7.23231L15.7792 7.79148L13.0292 10.5323Z",
            fill: "#FFFFFF"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarEmptyEnable);


/***/ })

};
;