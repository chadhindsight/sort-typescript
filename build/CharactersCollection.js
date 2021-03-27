"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        // TODO: write logic for compare function
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase();
    };
    // Swap characters in a string
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var characters = this.data.split('');
        var leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = characters[leftIndex];
        this.data = characters.join('');
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
