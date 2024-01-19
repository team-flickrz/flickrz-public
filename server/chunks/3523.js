"use strict";
exports.id = 3523;
exports.ids = [3523];
exports.modules = {

/***/ 67838:
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
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14613);
/* harmony import */ var _features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63523);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85277);
/* harmony import */ var _bases_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36332);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_5__, _hooks_common__WEBPACK_IMPORTED_MODULE_6__]);
([_features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_5__, _hooks_common__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const MyActivitiesFilters = ()=>{
    const { myProfile: { myActivitiesFilter , tabActivity , filters  } ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .CG)((state)=>state.profile);
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .TL)();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).state;
    const activitiesOptions = [
        {
            label: lang["profile/earning"],
            value: "0"
        },
        {
            label: lang["profile/spending"],
            value: "1"
        }, 
    ];
    const handleClickActivityOption = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((act)=>{
        dispatch(_features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_5__/* .profileActions.setTabActivity */ .ef.setTabActivity(act));
        dispatch(_features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_5__/* .profileActions.handleProfileChangeFilter */ .ef.handleProfileChangeFilter({
            ...filters,
            page: 1
        }));
    }, [
        dispatch,
        filters
    ]);
    const fromDatePicker = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return {
            minValue: moment__WEBPACK_IMPORTED_MODULE_2___default()("0000-01-01").valueOf(),
            minDate: moment__WEBPACK_IMPORTED_MODULE_2___default()("0000-01-01").format("YYYY-MM-DD"),
            maxValue: moment__WEBPACK_IMPORTED_MODULE_2___default()(myActivitiesFilter.to).valueOf(),
            maxDate: moment__WEBPACK_IMPORTED_MODULE_2___default()(myActivitiesFilter.to).format("YYYY-MM-DD")
        };
    }, [
        myActivitiesFilter
    ]);
    const toDatePicker = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return {
            minValue: moment__WEBPACK_IMPORTED_MODULE_2___default()(myActivitiesFilter.from).valueOf(),
            minDate: moment__WEBPACK_IMPORTED_MODULE_2___default()(myActivitiesFilter.from).format("YYYY-MM-DD"),
            maxValue: moment__WEBPACK_IMPORTED_MODULE_2___default()().valueOf(),
            maxDate: moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD")
        };
    }, [
        myActivitiesFilter
    ]);
    const handleChangeDate = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((e, key)=>{
        dispatch(_features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_5__/* .profileActions.setActivityFilter */ .ef.setActivityFilter({
            ...myActivitiesFilter,
            [key]: e.target.value
        }));
    }, [
        dispatch,
        myActivitiesFilter
    ]);
    const handleBlurDate = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((e, key, picker)=>{
        if (moment__WEBPACK_IMPORTED_MODULE_2___default()(e.target.value).valueOf() > picker.maxValue) {
            dispatch(_features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_5__/* .profileActions.setActivityFilter */ .ef.setActivityFilter({
                ...myActivitiesFilter,
                [key]: picker.maxDate
            }));
            return;
        }
        if (moment__WEBPACK_IMPORTED_MODULE_2___default()(e.target.value).valueOf() < picker.minValue) {
            dispatch(_features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_5__/* .profileActions.setActivityFilter */ .ef.setActivityFilter({
                ...myActivitiesFilter,
                [key]: picker.minDate
            }));
            return;
        }
        if (isNaN(moment__WEBPACK_IMPORTED_MODULE_2___default()(e.target.value).valueOf())) {
            dispatch(_features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_5__/* .profileActions.setActivityFilter */ .ef.setActivityFilter({
                ...myActivitiesFilter,
                [key]: moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD")
            }));
            return;
        }
        dispatch(_features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_5__/* .profileActions.setActivityFilter */ .ef.setActivityFilter({
            ...myActivitiesFilter,
            [key]: e.target.value
        }));
    }, [
        dispatch,
        myActivitiesFilter
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("py-6 flex flex-col justify-start items-stretch", "lg:flex-row lg:justify-between lg:items-center", "gap-4 lg:gap-0"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-2 lg:flex lg:flex-row gap-3",
                children: activitiesOptions.map((item, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("py-2 px-[18px] rounded-lg text-caption-3 cursor-pointer", "transition-colors text-center", tabActivity === item.value ? "bg-secondary-3 text-white" : "bg-gray-f1 dark:bg-[#4E5156] text-black/50 dark:text-[#898989]"),
                        onClick: ()=>{
                            handleClickActivityOption(item.value);
                        },
                        children: item.label
                    }, index);
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-x-1 text-right",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Input__WEBPACK_IMPORTED_MODULE_7__/* .Input */ .I, {
                        type: "date",
                        className: "input-sm input-border cursor-pointer input-date !text-sm lg:!text-base w-full lg:w-auto",
                        value: myActivitiesFilter.from,
                        onChange: (e)=>handleChangeDate(e, "from"),
                        onBlur: (e)=>handleBlurDate(e, "from", fromDatePicker),
                        min: fromDatePicker.minDate,
                        max: fromDatePicker.maxDate
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mx-1 min-w-[10px] w-[10px] h-[2px] bg-gray-d9 my-auto"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Input__WEBPACK_IMPORTED_MODULE_7__/* .Input */ .I, {
                        type: "date",
                        className: "input-sm input-border cursor-pointer input-date !text-sm lg:!text-base w-full lg:w-auto",
                        value: myActivitiesFilter.to,
                        onChange: (e)=>handleChangeDate(e, "to"),
                        onBlur: (e)=>handleBlurDate(e, "to", toDatePicker),
                        min: toDatePicker.minDate,
                        max: toDatePicker.maxDate
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyActivitiesFilters);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3523:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ getAmount),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49766);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _classes_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22314);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14613);
/* harmony import */ var _features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63523);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85277);
/* harmony import */ var _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93992);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45700);
/* harmony import */ var _bases_Table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(62558);
/* harmony import */ var _commons_Panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61103);
/* harmony import */ var _MyActivitiesFilters__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(67838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([bignumber_js__WEBPACK_IMPORTED_MODULE_1__, _features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_7__, _hooks_common__WEBPACK_IMPORTED_MODULE_8__, _utils_format__WEBPACK_IMPORTED_MODULE_10__, _bases_Table__WEBPACK_IMPORTED_MODULE_11__, _MyActivitiesFilters__WEBPACK_IMPORTED_MODULE_13__]);
([bignumber_js__WEBPACK_IMPORTED_MODULE_1__, _features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_7__, _hooks_common__WEBPACK_IMPORTED_MODULE_8__, _utils_format__WEBPACK_IMPORTED_MODULE_10__, _bases_Table__WEBPACK_IMPORTED_MODULE_11__, _MyActivitiesFilters__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const getAmount = (type, asset)=>{
    let strReturn = type;
    const listDeduct = JSON.parse(asset);
    listDeduct.map((item, index)=>{
        strReturn = strReturn + " #" + item;
        if (index !== listDeduct.length - 1) strReturn += ", ";
    });
    return strReturn;
};
const MyActivitiesPanel = ({ className , nftId  })=>{
    const dispatch = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_8__/* .useAppDispatch */ .TL)();
    const { myProfile: { filters , myActivitiesFilter , tabActivity , earningList , spendingList , totalRowsActivities ,  } ,  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_8__/* .useAppSelector */ .CG)((state)=>state.profile);
    const [getUserActivities] = _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_9__/* ["default"].useLazyGetUserActivitiesQuery */ .Z.useLazyGetUserActivitiesQuery();
    const { lang  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).state;
    const getAction = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((item)=>{
        if (!item) return "";
        if (tabActivity === "0") {
            switch(item.subType){
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.READ_TO_EARN */ .NT.READ_TO_EARN:
                    return `Read - ${item.describe?.comics || ""} - ep ${item.describe?.episode}`;
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.SELL_CHARACTER */ .NT.SELL_CHARACTER:
                    return `Sell character #${item.asset}`;
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.SELL_EQUIPMENT */ .NT.SELL_EQUIPMENT:
                    return `Sell equipment #${item.asset}`;
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.SELL_BADGE */ .NT.SELL_BADGE:
                    return `Sell badge ${item.asset}`;
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.ADMIN_REQUEST_PAYMENT_HP */ .NT.ADMIN_REQUEST_PAYMENT_HP:
                    return "Receive HP from admins";
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.ADMIN_REQUEST_PAYMENT_FLKZ */ .NT.ADMIN_REQUEST_PAYMENT_FLKZ:
                    return "Receive FLKZ from admins";
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.ADMIN_REQUEST_PAYMENT_EP */ .NT.ADMIN_REQUEST_PAYMENT_EP:
                    return "Receive EP from admins";
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.ADMIN_REQUEST_PAYMENT_CHARACTER */ .NT.ADMIN_REQUEST_PAYMENT_CHARACTER:
                    return "Receive Character from admins";
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.ADMIN_REQUEST_PAYMENT_EQUIPMENT */ .NT.ADMIN_REQUEST_PAYMENT_EQUIPMENT:
                    return "Receive Equipment from admins";
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.ADMIN_REQUEST_PAYMENT_BADGE */ .NT.ADMIN_REQUEST_PAYMENT_BADGE:
                    return "Receive Badge from admins";
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.REWARD_PAYMENT_BY_MISSION_SIGNUP_FOR_FLICKRZ */ .NT.REWARD_PAYMENT_BY_MISSION_SIGNUP_FOR_FLICKRZ:
                    return "Referral Mission 1";
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.REWARD_PAYMENT_BY_MISSION_SIGNUP_FOR_TOOMICS */ .NT.REWARD_PAYMENT_BY_MISSION_SIGNUP_FOR_TOOMICS:
                    return "Referral Mission 2";
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.REWARD_PAYMENT_BY_MISSION_FIRST_EARNING */ .NT.REWARD_PAYMENT_BY_MISSION_FIRST_EARNING:
                    return "Referral Mission 3";
                default:
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-main",
                        children: lang["button/sell"]
                    });
            }
        } else {
            switch(item.subType){
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.BUY_CHARACTER */ .NT.BUY_CHARACTER:
                    return `Buy character #${item.asset}`;
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.BUY_EQUIPMENT */ .NT.BUY_EQUIPMENT:
                    return `Buy equipment #${item.asset}`;
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.BUY_BADGE */ .NT.BUY_BADGE:
                    return `Buy badge ${item.asset}`;
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.MINT_NEW_CHARACTER */ .NT.MINT_NEW_CHARACTER:
                    return `Mint a new character #${item.asset}`;
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.UPGRADE_EQUIPMENT */ .NT.UPGRADE_EQUIPMENT:
                    return `Upgrade equipment #${item.asset}`;
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.CLAIM_BADGE */ .NT.CLAIM_BADGE:
                    return `Claim badge ${item.asset}`;
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.OPEN_GIFT_BOX */ .NT.OPEN_GIFT_BOX:
                    return "Open gift box";
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.LEVEL_UP */ .NT.LEVEL_UP:
                    return `Level up character #${item.asset}`;
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.REFILL_STAMINA */ .NT.REFILL_STAMINA:
                    return "Refill stamina";
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.REFILL_HP */ .NT.REFILL_HP:
                    return "Refill HP";
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.ADMIN_REQUEST_DEDUCT_HP */ .NT.ADMIN_REQUEST_DEDUCT_HP:
                    return "Deduct HP by admins";
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.ADMIN_REQUEST_DEDUCT_FLKZ */ .NT.ADMIN_REQUEST_DEDUCT_FLKZ:
                    return "Deduct FLKZ by admins";
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.ADMIN_REQUEST_DEDUCT_EP */ .NT.ADMIN_REQUEST_DEDUCT_EP:
                    return "Deduct EP by admins";
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.ADMIN_REQUEST_DEDUCT_CHARACTER */ .NT.ADMIN_REQUEST_DEDUCT_CHARACTER:
                    return "Deduct Character by admins";
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.ADMIN_REQUEST_DEDUCT_EQUIPMENT */ .NT.ADMIN_REQUEST_DEDUCT_EQUIPMENT:
                    return "Deduct Equipment by admins";
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.ADMIN_REQUEST_DEDUCT_BADGE */ .NT.ADMIN_REQUEST_DEDUCT_BADGE:
                    return "Deduct Badge by admins";
                // Old case, should remove or not ?
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.SALE_CHARACTER */ .NT.SALE_CHARACTER:
                    return `Sale character #${item.asset}`;
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.SALE_EQUIPMENT */ .NT.SALE_EQUIPMENT:
                    return `Sale equipment #${item.asset}`;
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.SALE_BADGE */ .NT.SALE_BADGE:
                    return `Sale badge ${item.asset}`;
                case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.WITHDRAW_TOKEN */ .NT.WITHDRAW_TOKEN:
                    return "Withdraw Token";
                default:
                    break;
            }
        }
    }, [
        lang,
        tabActivity
    ]);
    const getAsset = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((item)=>{
        if (!item) return "";
        switch(item.subType){
            case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.BUY_CHARACTER */ .NT.BUY_CHARACTER:
            case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.SELL_CHARACTER */ .NT.SELL_CHARACTER:
            case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.SALE_CHARACTER */ .NT.SALE_CHARACTER:
            case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.MINT_NEW_CHARACTER */ .NT.MINT_NEW_CHARACTER:
            case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.READ_TO_EARN */ .NT.READ_TO_EARN:
            case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.ADMIN_REQUEST_PAYMENT_CHARACTER */ .NT.ADMIN_REQUEST_PAYMENT_CHARACTER:
                return `Character #${item.asset}`;
            case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.BUY_EQUIPMENT */ .NT.BUY_EQUIPMENT:
            case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.SELL_EQUIPMENT */ .NT.SELL_EQUIPMENT:
            case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.SALE_EQUIPMENT */ .NT.SALE_EQUIPMENT:
            case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.UPGRADE_EQUIPMENT */ .NT.UPGRADE_EQUIPMENT:
            case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.ADMIN_REQUEST_PAYMENT_EQUIPMENT */ .NT.ADMIN_REQUEST_PAYMENT_EQUIPMENT:
                return `Equipment #${item.asset}`;
            case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.BUY_BADGE */ .NT.BUY_BADGE:
            case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.SELL_BADGE */ .NT.SELL_BADGE:
            case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.SALE_BADGE */ .NT.SALE_BADGE:
            case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.CLAIM_BADGE */ .NT.CLAIM_BADGE:
            case _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.ADMIN_REQUEST_PAYMENT_BADGE */ .NT.ADMIN_REQUEST_PAYMENT_BADGE:
                return `Badge ${item.asset}`;
            default:
                break;
        }
    }, []);
    const getReadingTime = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((item)=>{
        if (!item) return "-";
        if (item.subType === _classes_User__WEBPACK_IMPORTED_MODULE_5__/* .ACTIVITY_SUBTYPE.READ_TO_EARN */ .NT.READ_TO_EARN) {
            return (0,_utils_format__WEBPACK_IMPORTED_MODULE_10__/* .formatReadingTimeRequired */ .E1)(new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](item.describe?.readingTime || "0").toNumber());
        } else {
            return "-";
        }
    }, []);
    const getRewardEarned = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((item)=>{
        if (!item) return "-";
        if (new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](item.rewardEarned).isZero()) return "-";
        return `${item.rewardEarned} ${item.tokenType}`;
    }, []);
    const renderColumn = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        switch(tabActivity){
            case "0":
                return [
                    {
                        title: lang["profile/asset"] || "",
                        render: (_, item)=>getAsset(item)
                    },
                    {
                        title: lang["profile/reading-time"] || "",
                        render: (_, item)=>getReadingTime(item)
                    },
                    {
                        title: lang["profile/reward-earned"] || "",
                        render: (_, item)=>getRewardEarned(item)
                    }, 
                ];
            case "1":
                {
                    return [
                        {
                            title: lang["profile/amount"] || "",
                            dataIndex: "rewardEarned",
                            render: (text)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: text
                                });
                            }
                        }, 
                    ];
                }
            default:
                return [];
        }
    }, [
        getAsset,
        getReadingTime,
        getRewardEarned,
        lang,
        tabActivity
    ]);
    const columns = [
        {
            title: lang["profile/time"] || "",
            dataIndex: "date",
            render: (text)=>moment__WEBPACK_IMPORTED_MODULE_3___default()(text).format("MM/DD/YYYY HH:mm:ss")
        },
        {
            title: lang["profile/action"] || "",
            render: (_, item)=>getAction(item)
        },
        ...renderColumn(), 
    ];
    const handleChangePage = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((page)=>{
        dispatch(_features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_7__/* .profileActions.handleProfileChangeFilter */ .ef.handleProfileChangeFilter({
            ...filters,
            page
        }));
    }, [
        dispatch,
        filters
    ]);
    const handleChangeItemPerPage = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((size, page)=>{
        dispatch(_features_profile_profileSlice__WEBPACK_IMPORTED_MODULE_7__/* .profileActions.handleProfileChangeFilter */ .ef.handleProfileChangeFilter({
            ...filters,
            page,
            take: size
        }));
    }, [
        filters,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        getUserActivities({
            page: filters.page,
            limit: filters.take,
            startDate: myActivitiesFilter.from.toString(),
            endDate: myActivitiesFilter.to.toString(),
            type: tabActivity === "0" ? "earning" : "spending",
            nftId
        });
    }, [
        filters.page,
        filters.take,
        getUserActivities,
        myActivitiesFilter.from,
        myActivitiesFilter.to,
        tabActivity,
        nftId, 
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !nftId ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_commons_Panel__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            isShadow: false,
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("py-6 px-4 lg:px-8", className),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-h6 font-semibold dark:text-white",
                    children: lang["profile/my-activities"]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: "dark:border-white/10"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MyActivitiesFilters__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full overflow-auto relative",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Table__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        columns: columns,
                        data: tabActivity === "0" ? earningList : spendingList,
                        displayIndexNumber: true,
                        handleChangePage: handleChangePage,
                        filter: {
                            ...filters,
                            size: filters.take,
                            total: totalRowsActivities
                        },
                        handleChangeItemPerPage: handleChangeItemPerPage
                    })
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MyActivitiesFilters__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full overflow-auto relative",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bases_Table__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        columns: columns,
                        data: tabActivity === "0" ? earningList : spendingList,
                        displayIndexNumber: true,
                        handleChangePage: handleChangePage,
                        filter: {
                            ...filters,
                            size: filters.take,
                            total: totalRowsActivities
                        },
                        handleChangeItemPerPage: handleChangeItemPerPage
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyActivitiesPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63523:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ef": () => (/* binding */ profileActions)
/* harmony export */ });
/* unused harmony export profileAsyncActions */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49766);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _classes_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22314);
/* harmony import */ var _services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93992);
/* harmony import */ var _components_MyActivitiesPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3523);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([bignumber_js__WEBPACK_IMPORTED_MODULE_1__, _components_MyActivitiesPanel__WEBPACK_IMPORTED_MODULE_5__]);
([bignumber_js__WEBPACK_IMPORTED_MODULE_1__, _components_MyActivitiesPanel__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const initialState = {
    myProfile: {
        userProfile: undefined,
        myActivitiesFilter: {
            from: moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD"),
            to: moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD")
        },
        tabActivity: "0",
        totalRowsActivities: 1,
        filters: {
            page: 1,
            take: 10,
            total: 0
        },
        earningList: [],
        spendingList: []
    }
};
const _clearAll = (state)=>{
    state.myProfile = {
        ...initialState.myProfile
    };
};
// Action my profile tab
const _setActivityFilter = (state, action)=>{
    state.myProfile.myActivitiesFilter = action.payload;
};
const _setTabActivity = (state, action)=>{
    state.myProfile.tabActivity = action.payload;
};
const _handleProfileChangeFilter = (state, action)=>{
    state.myProfile.filters = {
        ...state.myProfile.filters,
        page: action.payload.page,
        take: action.payload.take
    };
};
const profileSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "profileSlice",
    initialState,
    reducers: {
        clearAll: _clearAll,
        setActivityFilter: _setActivityFilter,
        setTabActivity: _setTabActivity,
        handleProfileChangeFilter: _handleProfileChangeFilter
    },
    extraReducers: (builder)=>{
        builder.addMatcher(_services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_4__/* ["default"].endpoints.getProfile.matchFulfilled */ .Z.endpoints.getProfile.matchFulfilled, (state, action)=>{
            if (action.payload.data) {
                const { totalEpisodesRead , totalReadTime , GTSpending , GTEarned , GTAvailable , GTBalance , RTAvailable , RTBalance , RTEarned , RTSpending ,  } = action.payload.data;
                state.myProfile.userProfile = {
                    ...action.payload.data,
                    avgTimePerEpisode: new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](totalReadTime).div(totalEpisodesRead).toFixed(),
                    GTSpending: new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](GTSpending).toFixed(),
                    RTSpending: new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](RTSpending).toFixed(),
                    GTEarned: new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](GTEarned).toFixed(),
                    RTEarned: new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](RTEarned).toFixed(),
                    GTAvailable: new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](GTAvailable).toFixed(),
                    RTAvailable: new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](RTAvailable).toFixed(),
                    GTBalance: new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](GTBalance).toFixed(),
                    RTBalance: new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](RTBalance).toFixed()
                };
            }
        });
        builder.addMatcher(_services_query_endpoints_user__WEBPACK_IMPORTED_MODULE_4__/* ["default"].endpoints.getUserActivities.matchFulfilled */ .Z.endpoints.getUserActivities.matchFulfilled, (state, action)=>{
            if (action.payload.data) {
                state.myProfile.totalRowsActivities = action.payload.total;
                switch(state.myProfile.tabActivity){
                    case "0":
                        state.myProfile.earningList = action.payload.data.map((item)=>{
                            return {
                                ...item,
                                rewardEarned: new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](item.GTEarning).isZero() ? new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](item.RTEarning).toFixed() : new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](item.GTEarning).toFixed(),
                                tokenType: new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](item.GTEarning).isZero() ? "EP" : "FLKZ"
                            };
                        });
                        break;
                    case "1":
                        state.myProfile.spendingList = action.payload.data.map((item)=>{
                            return {
                                ...item,
                                rewardEarned: `${Number(item?.GTSpending) > 0 ? `${(0,bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])(item.GTSpending).toFixed()} FLKZ` : ""} ${Number(item?.GTSpending) > 0 && Number(item.RTSpending) > 0 ? "&" : ""} ${Number(item?.RTSpending) > 0 ? `${(0,bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])(item.RTSpending).toFixed()} EP` : ""}
                                ${Number(item?.GTSpending) === 0 && Number(item.RTSpending) === 0 ? item.subType === _classes_User__WEBPACK_IMPORTED_MODULE_3__/* .ACTIVITY_SUBTYPE.ADMIN_REQUEST_DEDUCT_CHARACTER */ .NT.ADMIN_REQUEST_DEDUCT_CHARACTER ? `${(0,_components_MyActivitiesPanel__WEBPACK_IMPORTED_MODULE_5__/* .getAmount */ .B)("Character", item.asset)}` : item.subType === _classes_User__WEBPACK_IMPORTED_MODULE_3__/* .ACTIVITY_SUBTYPE.ADMIN_REQUEST_DEDUCT_EQUIPMENT */ .NT.ADMIN_REQUEST_DEDUCT_EQUIPMENT ? `${(0,_components_MyActivitiesPanel__WEBPACK_IMPORTED_MODULE_5__/* .getAmount */ .B)("Equipment", item.asset)}` : item.subType === _classes_User__WEBPACK_IMPORTED_MODULE_3__/* .ACTIVITY_SUBTYPE.ADMIN_REQUEST_DEDUCT_BADGE */ .NT.ADMIN_REQUEST_DEDUCT_BADGE ? `${(0,_components_MyActivitiesPanel__WEBPACK_IMPORTED_MODULE_5__/* .getAmount */ .B)("Badge", item.asset)}` : "" : ""}`,
                                tokenType: new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](item.GTSpending).isZero() ? "EP" : "FLKZ"
                            };
                        });
                        break;
                    default:
                        break;
                }
            }
        });
    }
});
const profileActions = profileSlice.actions;
const profileAsyncActions = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profileSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;