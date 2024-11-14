const parseEnum = (enumText) => {
    var _a, _b;
    if (enumText) {
        return (_b = (_a = enumText === null || enumText === void 0 ? void 0 : enumText.split("_")) === null || _a === void 0 ? void 0 : _a.map((word) => { var _a, _b; return ((_a = word === null || word === void 0 ? void 0 : word.charAt(0)) === null || _a === void 0 ? void 0 : _a.toUpperCase()) + ((_b = word === null || word === void 0 ? void 0 : word.slice(1)) === null || _b === void 0 ? void 0 : _b.toLowerCase()); })) === null || _b === void 0 ? void 0 : _b.join(" ");
    }
    return "";
};
export default parseEnum;
