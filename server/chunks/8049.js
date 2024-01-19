"use strict";
exports.id = 8049;
exports.ids = [8049];
exports.modules = {

/***/ 31624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ LINK_TREE_STATUS),
/* harmony export */   "d": () => (/* binding */ LINK_TREE_CATEGORY)
/* harmony export */ });
var LINK_TREE_CATEGORY;
(function(LINK_TREE_CATEGORY) {
    LINK_TREE_CATEGORY["GENERAL"] = "General Information";
    LINK_TREE_CATEGORY["SOCIAL"] = "Social Media";
    LINK_TREE_CATEGORY["WHITEPAPER"] = "Whitepaper";
    LINK_TREE_CATEGORY["COINGECKO"] = "Coingecko";
    LINK_TREE_CATEGORY["COINMARKETCAP"] = "CoinMarketCap";
    LINK_TREE_CATEGORY["TELEGRAM_CHANNEL"] = "Telegram Channel";
    LINK_TREE_CATEGORY["TELEGRAM_CHAT"] = "Telegram Chat";
    LINK_TREE_CATEGORY["MEDIUM"] = "Medium";
    LINK_TREE_CATEGORY["TWITTER"] = "Twitter";
    LINK_TREE_CATEGORY["DISCORD_SERVER"] = "Discord Server!";
    LINK_TREE_CATEGORY["FACEBOOK"] = "Facebook";
    LINK_TREE_CATEGORY["YOUTUBE"] = "YouTube";
    LINK_TREE_CATEGORY["LINKEDIN"] = "Linkedin";
    LINK_TREE_CATEGORY["EMAIL"] = "E-mail";
    LINK_TREE_CATEGORY["INSTAGRAM"] = "Instagram";
})(LINK_TREE_CATEGORY || (LINK_TREE_CATEGORY = {}));
const LINK_TREE_STATUS = {
    ACTIVE: "active"
};


/***/ }),

/***/ 53589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21082);

const linkTreeApi = _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].injectEndpoints */ .Z.injectEndpoints({
    endpoints: (builder)=>({
            getLinkTree: builder.query({
                query: ()=>({
                        url: "/link-tree"
                    })
            }),
            getLinkTreeWhitePaper: builder.query({
                query: ()=>({
                        url: "/link-tree/white-paper"
                    })
            }),
            updateLinkTreeViewCount: builder.query({
                query: (id)=>({
                        url: `/link-tree/view/${id}`
                    })
            })
        })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkTreeApi);


/***/ })

};
;