"use strict";
var Helpers = (function () {
    function Helpers() {
        this.countWordsInText = function (text) {
            var countedWords = text.replace(/[^\w\s]/g, "").split(/\s+/).reduce(function (map, word) {
                map[word] = (map[word] || 0) + 1;
                return map;
            }, Object.create(null));
            return countedWords;
        };
    }
    return Helpers;
}());
exports.Helpers = Helpers;
//# sourceMappingURL=Helpers.js.map