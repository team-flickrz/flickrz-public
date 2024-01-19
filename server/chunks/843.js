"use strict";
exports.id = 843;
exports.ids = [843];
exports.modules = {

/***/ 20843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RH": () => (/* binding */ customerServiceAction),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports initialState, customerServiceAsyncAction */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54553);


const initialState = {
    tabSelected: "/help?tab=notifications",
    notification: {
        myActivitiesFilter: {
            from: "",
            to: ""
        },
        idItemDetail: null,
        filters: {
            page: 1,
            take: 10,
            total: 0
        },
        notificationDetail: {
            id: 0,
            adminId: 0,
            title: "",
            name: "",
            description: "",
            views: "",
            status: "",
            createdAt: "",
            updatedAt: "",
            deletedAt: "",
            publishDate: ""
        },
        notificationsList: []
    },
    tabActiveFAQ: "",
    tabActiveQA: "submit",
    dataResource: {
        type: "",
        message: "",
        success: true,
        data: []
    },
    categoryList: [],
    dataSubmit: {
        customerServiceCategoryId: 0,
        description: "",
        title: "",
        files: []
    },
    dataQA: {
        data: []
    }
};
const _handleProfileChangeFilter = (state, action)=>{
    state.notification.filters = {
        ...state.notification.filters,
        page: action.payload.page,
        take: action.payload.take
    };
};
const _resetNotificationDetail = (state)=>{
    state.notification.notificationDetail = initialState.notification.notificationDetail;
};
const _setIdItemDetail = (state, action)=>{
    state.notification.idItemDetail = action.payload;
};
const _setDataSubmit = (state, action)=>{
    state.dataSubmit = action.payload;
};
const _setActivityFilter = (state, action)=>{
    state.notification.myActivitiesFilter = action.payload;
};
const _setActiveTabFAQ = (state, action)=>{
    state.tabActiveFAQ = action.payload;
};
const _setActiveTabQA = (state, action)=>{
    state.tabActiveQA = action.payload;
};
const _handleSelectTab = (state, action)=>{
    state.tabSelected = action.payload;
};
const _handleResetState = (state, action)=>{
    state.dataResource = action.payload;
};
const customerServiceSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "customerServiceSlice",
    initialState,
    reducers: {
        handleSelectTab: _handleSelectTab,
        handleResetState: _handleResetState,
        setActivityFilter: _setActivityFilter,
        handleProfileChangeFilter: _handleProfileChangeFilter,
        setActiveTabFAQ: _setActiveTabFAQ,
        setActiveTabQA: _setActiveTabQA,
        setDataSubmit: _setDataSubmit,
        resetNotificationDetail: _resetNotificationDetail,
        setIdItemDetail: _setIdItemDetail
    },
    extraReducers: (builder)=>{
        builder.addMatcher(_services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_1__/* ["default"].endpoints.getResource.matchFulfilled */ .Z.endpoints.getResource.matchFulfilled, (state, action)=>{
            state.dataResource.data = action.payload.data;
        });
        builder.addMatcher(_services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_1__/* ["default"].endpoints.getNotificationsList.matchFulfilled */ .Z.endpoints.getNotificationsList.matchFulfilled, (state, action)=>{
            state.notification.notificationsList = action.payload.data;
            state.notification.filters.total = action.payload.total;
        });
        builder.addMatcher(_services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_1__/* ["default"].endpoints.getDetailIdNoti.matchFulfilled */ .Z.endpoints.getDetailIdNoti.matchFulfilled, (state, action)=>{
            state.notification.notificationDetail = action.payload.data;
        });
        builder.addMatcher(_services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_1__/* ["default"].endpoints.getCustomerServiceCategoriesId.matchFulfilled */ .Z.endpoints.getCustomerServiceCategoriesId.matchFulfilled, (state, action)=>{
            state.categoryList = action.payload.data;
        });
        builder.addMatcher(_services_query_endpoints_resource__WEBPACK_IMPORTED_MODULE_1__/* ["default"].endpoints.getQA.matchFulfilled */ .Z.endpoints.getQA.matchFulfilled, (state, action)=>{
            state.dataQA.data = action.payload.data.map((item)=>{
                return {
                    ...item,
                    fileArr: item.files
                };
            });
        });
    }
});
const customerServiceAction = customerServiceSlice.actions;
const customerServiceAsyncAction = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customerServiceSlice.reducer);


/***/ })

};
;