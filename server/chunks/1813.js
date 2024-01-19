"use strict";
exports.id = 1813;
exports.ids = [1813];
exports.modules = {

/***/ 91813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ historyActions),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_query_endpoints_offers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(804);
/* harmony import */ var _services_query_endpoints_trading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92460);



const initialState = {
    offerList: [],
    tradingList: []
};
const _setDefaultTableData = (state)=>{
    state.offerList = [];
    state.tradingList = [];
};
const historySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "history",
    initialState,
    reducers: {
        setDefaultTableData: _setDefaultTableData
    },
    extraReducers: (builder)=>{
        builder.addMatcher(_services_query_endpoints_offers__WEBPACK_IMPORTED_MODULE_1__/* ["default"].endpoints.getOffers.matchFulfilled */ .Z.endpoints.getOffers.matchFulfilled, (state, action)=>{
            state.offerList = action.payload.data[0];
        });
        builder.addMatcher(_services_query_endpoints_trading__WEBPACK_IMPORTED_MODULE_2__/* ["default"].endpoints.getTradingList.matchFulfilled */ .Z.endpoints.getTradingList.matchFulfilled, (state, action)=>{
            state.tradingList = action.payload.data;
        });
    }
});
const historyActions = historySlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (historySlice.reducer);


/***/ }),

/***/ 92460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21082);

const tradingApi = _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].injectEndpoints */ .Z.injectEndpoints({
    endpoints: (builder)=>({
            getTradingList: builder.query({
                query: (nftId)=>({
                        url: `/trading/${nftId}`
                    })
            })
        })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tradingApi);


/***/ })

};
;