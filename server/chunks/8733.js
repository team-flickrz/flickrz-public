"use strict";
exports.id = 8733;
exports.ids = [8733];
exports.modules = {

/***/ 99275:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "z": () => (/* binding */ marketplaceActions)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49766);
/* harmony import */ var _services_query_endpoints_marketplace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1774);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([bignumber_js__WEBPACK_IMPORTED_MODULE_1__]);
bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const initialState = {
    filter: {
        keyword: "",
        item: "character",
        direction: "ASC"
    },
    results: [],
    totalItems: 0,
    totalPages: 0,
    searchKey: "",
    suggestList: [],
    marketFee: {
        marketFee: 0,
        creatorFee: 0
    }
};
const _handleOnChangeFilter = (state, action)=>{
    if (action.payload.fieldName === "item") {
        state.filter.keyword = "";
        state.filter.direction = "ASC";
        state.searchKey = "";
    }
    state.filter[action.payload.fieldName] = action.payload.value;
};
const _setTotalItems = (state, action)=>{
    state.totalItems = action.payload;
};
const _setSearchKey = (state, action)=>{
    state.searchKey = action.payload;
};
const _resetFilter = (state)=>{
    state.filter = {
        ...initialState.filter
    };
    state.searchKey = "";
};
const marketplaceSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "marketplace",
    initialState,
    reducers: {
        handleOnChangeFilter: _handleOnChangeFilter,
        setTotalItems: _setTotalItems,
        setSearchKey: _setSearchKey,
        resetFilter: _resetFilter
    },
    extraReducers: (builder)=>{
        builder.addMatcher(_services_query_endpoints_marketplace__WEBPACK_IMPORTED_MODULE_2__/* ["default"].endpoints.getSuggestSearchKey.matchFulfilled */ .Z.endpoints.getSuggestSearchKey.matchFulfilled, (state, action)=>{
            const data = action.payload.data ? action.payload.data : [];
            state.suggestList = [
                ...data
            ];
        });
        builder.addMatcher(_services_query_endpoints_marketplace__WEBPACK_IMPORTED_MODULE_2__/* ["default"].endpoints.getFee.matchFulfilled */ .Z.endpoints.getFee.matchFulfilled, (state, action)=>{
            state.marketFee = {
                ...action.payload.data,
                marketFee: new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](action.payload.data.marketFee).div(100).toFixed(),
                creatorFee: new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](action.payload.data.creatorFee).div(100).toFixed()
            };
        });
    }
});
const marketplaceActions = marketplaceSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (marketplaceSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B1": () => (/* binding */ BACK_TO_MY_COLLECTION),
/* harmony export */   "WU": () => (/* binding */ routeActions),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "et": () => (/* binding */ MINTORENHANCE),
/* harmony export */   "m8": () => (/* binding */ PREVIOUS_PAGE_KEY),
/* harmony export */   "x9": () => (/* binding */ isRoute)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const ROUTES = [
    "/",
    "/enjoy-and-earn",
    "/marketplace",
    "/my-profile",
    "/login",
    "/[page]/[nftType]/[id]",
    "/login/",
    "/login2/",
    "/login2",
    "/register",
    "/register/",
    "/token",
    "/enjoyandearn",
    "/help",
    "/change-password",
    "/change-password/",
    "/link-tree",
    "/link-tree/", 
];
const PREVIOUS_PAGE_KEY = "previous_page";
const MINTORENHANCE = "isMintOrEnhance";
const BACK_TO_MY_COLLECTION = "backToMyCollection";
function isRoute(type) {
    return ROUTES.includes(type);
}
const initialState = {
    here: "/"
};
const _setRoute = (state, action)=>{
    state.here = action.payload;
};
const routeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "route",
    initialState,
    reducers: {
        setRoute: _setRoute
    }
});
const routeActions = routeSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routeSlice.reducer);


/***/ }),

/***/ 84689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ sidebarFilterActions),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    badgeFilter: {
        minPrice: "",
        maxPrice: ""
    },
    characterFilter: {
        minPrice: "",
        maxPrice: "",
        minAverageEarning: "",
        maxAverageEarning: "",
        rarity: [],
        mintCount: "",
        tokenEarning: ""
    },
    equipmentFilter: {
        minPrice: "",
        maxPrice: "",
        minLevel: "",
        maxLevel: "",
        slot: []
    }
};
const _handleChangeValueField = (state, action)=>{
    state.characterFilter = action.payload;
};
const _handleChangeValueFieldEquipment = (state, action)=>{
    state.equipmentFilter = action.payload;
};
const _handleChangeValueFieldBadge = (state, action)=>{
    state.badgeFilter = action.payload;
};
const _handleClearFilter = (state)=>{
    state.characterFilter = {
        minPrice: "",
        maxPrice: "",
        minAverageEarning: "",
        maxAverageEarning: "",
        rarity: [],
        mintCount: "",
        tokenEarning: ""
    };
};
const _handleClearFilterEquipment = (state)=>{
    state.equipmentFilter = {
        minPrice: "",
        maxPrice: "",
        minLevel: "",
        maxLevel: "",
        slot: []
    };
};
const _handleClearFilterBadge = (state)=>{
    state.badgeFilter = {
        minPrice: "",
        maxPrice: ""
    };
};
const _clearAllFilter = (state)=>{
    state.characterFilter = {
        ...initialState.characterFilter
    };
    state.equipmentFilter = {
        ...initialState.equipmentFilter
    };
    state.badgeFilter = {
        ...initialState.badgeFilter
    };
};
const sidebarFilterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "accessibility",
    initialState,
    reducers: {
        handleChangeValueField: _handleChangeValueField,
        handleClearFilter: _handleClearFilter,
        handleChangeValueFieldEquipment: _handleChangeValueFieldEquipment,
        handleClearFilterEquipment: _handleClearFilterEquipment,
        handleChangeValueFieldBadge: _handleChangeValueFieldBadge,
        handleClearFilterBadge: _handleClearFilterBadge,
        clearAllFilter: _clearAllFilter
    }
});
const sidebarFilterActions = sidebarFilterSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebarFilterSlice.reducer);


/***/ }),

/***/ 10597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useIsWindowVisible)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const VISIBILITY_STATE_SUPPORTED = typeof document !== "undefined" && "visibilityState" in document;
function isWindowVisible() {
    return !VISIBILITY_STATE_SUPPORTED || document.visibilityState !== "hidden";
}
/**
 * Returns whether the window is currently visible to the user.
 */ function useIsWindowVisible() {
    const { 0: focused , 1: setFocused  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isWindowVisible());
    const listener = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setFocused(isWindowVisible());
    }, [
        setFocused
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!VISIBILITY_STATE_SUPPORTED) return undefined;
        document.addEventListener("visibilitychange", listener);
        return ()=>{
            document.removeEventListener("visibilitychange", listener);
        };
    }, [
        listener
    ]);
    return focused;
}


/***/ }),

/***/ 54553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21082);

const resourceApi = _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].injectEndpoints */ .Z.injectEndpoints({
    endpoints: (builder)=>({
            getResource: builder.query({
                query: (args)=>({
                        url: "/resource",
                        params: args
                    })
            }),
            getCustomerServiceCategoriesId: builder.query({
                query: ()=>({
                        url: "/customer-service-categories"
                    })
            }),
            getNotificationsList: builder.query({
                query: (args)=>({
                        url: "/announce",
                        params: args
                    })
            }),
            getDetailIdNoti: builder.query({
                query: (args)=>({
                        url: `/announce/${args}`
                    })
            }),
            uploadImage: builder.mutation({
                query: (args)=>({
                        url: `/file/images/${args.folder}`,
                        method: "POST",
                        body: args.formData
                    })
            }),
            uploadQA: builder.query({
                query: (args)=>({
                        url: "/qa",
                        method: "POST",
                        body: args
                    })
            }),
            getQA: builder.query({
                query: (args)=>({
                        url: "/qa",
                        params: args
                    })
            }),
            getCount: builder.query({
                query: (id)=>({
                        url: `/resource/count/${id}`
                    })
            }),
            getCheckAnswer: builder.query({
                query: (id)=>({
                        url: `/qa/check-answer/${id}`
                    })
            }),
            getNotificationsIndividual: builder.mutation({
                query: ()=>({
                        url: "/announce/individual-one-by-user"
                    })
            }),
            getNotificationsIndividualCount: builder.query({
                query: (id)=>({
                        url: `/announce/${id}`
                    })
            }),
            setIsReadIndividual: builder.query({
                query: ()=>({
                        url: "/announce/set-is-read-individual"
                    })
            })
        })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resourceApi);


/***/ })

};
;