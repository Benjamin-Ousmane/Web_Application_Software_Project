"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.__esModule = true;
exports.DatabaseController = void 0;
var express_1 = require("express");
var inversify_1 = require("inversify");
var types_1 = require("../types");
var DatabaseController = /** @class */ (function () {
    function DatabaseController(databaseService) {
        this.databaseService = databaseService;
    }
    Object.defineProperty(DatabaseController.prototype, "router", {
        get: function () {
            var _this = this;
            var router = express_1.Router();
            router.get('/animalpk', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var respond, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.databaseService.getAnimalPK()];
                        case 1:
                            respond = _a.sent();
                            res.json(respond.rows);
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            throw err_1;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            router.get('/traitement/:selectedAnimal', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var respond, err_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.databaseService.getTraitement(req.params.selectedAnimal)];
                        case 1:
                            respond = _a.sent();
                            console.log(respond.rows);
                            res.json(respond.rows);
                            return [3 /*break*/, 3];
                        case 2:
                            err_2 = _a.sent();
                            throw err_2;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            router.post('/insert', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var respond, err_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.databaseService.insertAnimal(req.body)];
                        case 1:
                            respond = _a.sent();
                            res.json(respond.rowCount);
                            return [3 /*break*/, 3];
                        case 2:
                            err_3 = _a.sent();
                            throw err_3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            router.get('/cliniquekey', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var respond, rows, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.databaseService.getCliniqueKey()];
                        case 1:
                            respond = _a.sent();
                            rows = respond.rows;
                            res.json(rows);
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _a.sent();
                            throw e_1;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            router.get('/proprietairekey', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var respond, rows, e_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.databaseService.getProprietaireKey()];
                        case 1:
                            respond = _a.sent();
                            rows = respond.rows;
                            res.json(rows);
                            return [3 /*break*/, 3];
                        case 2:
                            e_2 = _a.sent();
                            throw e_2;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            router.get('/proprietairekey/:proprietairekey/:cliniqueNumber', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var key, clinumber, respond, e_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            key = req.params.proprietairekey;
                            clinumber = req.params.cliniqueNumber;
                            console.log(key, clinumber);
                            return [4 /*yield*/, this.databaseService.getAnimal(key, clinumber)];
                        case 1:
                            respond = _a.sent();
                            console.log(respond.rows);
                            res.json(respond.rows);
                            return [3 /*break*/, 3];
                        case 2:
                            e_3 = _a.sent();
                            throw e_3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            router.get('/search/:animal', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var animal, respond, e_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            animal = req.params.animal;
                            return [4 /*yield*/, this.databaseService.getAnimalsByName(animal)];
                        case 1:
                            respond = _a.sent();
                            res.json(respond.rows);
                            return [3 /*break*/, 3];
                        case 2:
                            e_4 = _a.sent();
                            throw e_4;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            router["delete"]('/delete/:animalNB/:numeroClinique', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var animalNB, numeroClinique, err_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            animalNB = req.params.animalNB;
                            numeroClinique = req.params.numeroClinique;
                            return [4 /*yield*/, this.databaseService.deleteAnimal(animalNB, numeroClinique)];
                        case 1:
                            _a.sent();
                            res.send();
                            return [3 /*break*/, 3];
                        case 2:
                            err_4 = _a.sent();
                            throw err_4;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            router.put('/taille', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var _a, valueToUpdate, animalNB, err_5;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            _a = req.body, valueToUpdate = _a.valueToUpdate, animalNB = _a.animalNB;
                            return [4 /*yield*/, this.databaseService.updateAnimalTaille(valueToUpdate, animalNB)];
                        case 1:
                            _b.sent();
                            res.send();
                            return [3 /*break*/, 3];
                        case 2:
                            err_5 = _b.sent();
                            throw res.json(err_5.message);
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            router.put('/weight', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var _a, valueToUpdate, animalNB, err_6;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            _a = req.body, valueToUpdate = _a.valueToUpdate, animalNB = _a.animalNB;
                            console.log(req.body);
                            return [4 /*yield*/, this.databaseService.updateAnimalWeight(valueToUpdate, animalNB)];
                        case 1:
                            _b.sent();
                            res.send();
                            return [3 /*break*/, 3];
                        case 2:
                            err_6 = _b.sent();
                            throw res.json(err_6.message);
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            router.put('/etat', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var _a, valueToUpdate, animalNB, err_7;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            _a = req.body, valueToUpdate = _a.valueToUpdate, animalNB = _a.animalNB;
                            return [4 /*yield*/, this.databaseService.updateAnimalEtat(valueToUpdate, animalNB)];
                        case 1:
                            _b.sent();
                            res.send();
                            return [3 /*break*/, 3];
                        case 2:
                            err_7 = _b.sent();
                            throw res.json(err_7.message);
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            return router;
        },
        enumerable: false,
        configurable: true
    });
    DatabaseController = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1["default"].DatabaseService))
    ], DatabaseController);
    return DatabaseController;
}());
exports.DatabaseController = DatabaseController;
