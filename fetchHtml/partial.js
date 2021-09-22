'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 *
 * usage
 *
 * const partial = new Partial()
 * partial.includeAll()
 *
 */
var Partial = /** @class */ (function () {
    function Partial() {
        // this.partialTag = partialTag
    }
    Partial.prototype.includeAll = function (el) {
        if (el === undefined) {
            el = 'link';
        }
        var partial = document.getElementsByTagName(el);
        for (var i = 0; i < partial.length; i++) {
            if (partial[i].attributes.rel.value === "html") {
                var file = partial[i].getAttribute("href");
                this.include(file, partial[i]);
            }
        }
    };
    Partial.prototype.makeRequest = function (location) {
        return new Promise(function (resolve, reject) {
            fetch(location).then(function (partial) {
                if (partial.status == 200) {
                    return partial.text();
                }
                else {
                    reject('Partial not found');
                }
            }).then(function (html) {
                resolve(html);
            });
        });
    };
    Partial.prototype.processRequest = function (response, _el) {
        return new Promise(function (resolve, reject) {
            // resolve(_el.innerHTML = response)
            if (_el.attributes.rel.value === "html") {
                resolve(_el.outerHTML = response);
            }
            else {
                reject('No tag for html');
            }
        });
    };
    Partial.prototype.include = function (url, _el) {
        return __awaiter(this, void 0, void 0, function () {
            var response, processedResponse, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.makeRequest(url)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, this.processRequest(response, _el)];
                    case 2:
                        processedResponse = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Partial;
}());
