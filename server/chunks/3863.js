"use strict";
exports.id = 3863;
exports.ids = [3863];
exports.modules = {

/***/ 53863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ useValidator)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "validator"
var external_validator_ = __webpack_require__(71564);
var external_validator_default = /*#__PURE__*/__webpack_require__.n(external_validator_);
;// CONCATENATED MODULE: ./app/classes/Validator.ts
/* eslint-disable @typescript-eslint/no-explicit-any */ 
(external_validator_default()).isEmpty;
class Validator {
    constructor(rules){
        this._rules = rules;
        this._bValid = true;
        this._errors = {};
    }
    validate(values) {
        this._errors = {};
        this._bValid = true;
        this._rules.forEach((rule)=>{
            if (this._errors[rule.field]) return;
            const fieldValue = values[rule.field] || "";
            const args = rule.args || [];
            const validationMethod = rule.method;
            if (validationMethod(fieldValue, ...args, values) !== rule.when) {
                this._errors[rule.type || rule.field] = rule.message;
                this._bValid = false;
            }
        });
        return this._errors;
    }
    get valid() {
        return this._bValid;
    }
    get errors() {
        return this._errors;
    }
}
/* harmony default export */ const classes_Validator = (Validator);

;// CONCATENATED MODULE: ./app/hooks/useValidator.ts


const useValidator = (rules)=>{
    const { 0: validator , 1: setValidator  } = (0,external_react_.useState)(new classes_Validator([]));
    (0,external_react_.useEffect)(()=>{
        setValidator(new classes_Validator(rules));
    }, [
        rules
    ]);
    return validator;
};


/***/ })

};
;