"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.DatabaseService = void 0;
var inversify_1 = require("inversify");
require("reflect-metadata");
var pool_1 = require("./pool");
var DatabaseService = /** @class */ (function () {
    function DatabaseService() {
    }
    DatabaseService.prototype.getAnimalPK = function () {
        return __awaiter(this, void 0, Promise, function () {
            var client, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pool_1.pool.connect()];
                    case 1:
                        client = _a.sent();
                        return [4 /*yield*/, client.query("SELECT numeroanimal FROM TP3.animal;")];
                    case 2:
                        res = _a.sent();
                        client.release();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ;
    DatabaseService.prototype.getTraitement = function (numeroanimal) {
        return __awaiter(this, void 0, Promise, function () {
            var client, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pool_1.pool.connect()];
                    case 1:
                        client = _a.sent();
                        return [4 /*yield*/, client.query("\n    select numerotraitement, cout,t.description, et.quantitetraitement, et.datedebut, et.datefin from TP3.traitement t join \n    TP3.examentraitement et using(numerotraitement) join TP3.examen e using(numeroexamen) where e.numeroanimal = '" + numeroanimal + "'")];
                    case 2:
                        res = _a.sent();
                        client.release();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ;
    DatabaseService.prototype.insertAnimal = function (animal) {
        return __awaiter(this, void 0, Promise, function () {
            var client, res, q;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pool_1.pool.connect()];
                    case 1:
                        client = _a.sent();
                        res = 'INSERT INTO TP3.animal(numeroanimal,nom,typeanimal,espece,taille,poids,description,datenaissance,dateinscription,etat,numeroclinique,numeroproprietaire) VALUES($1, $2, $3,$4,$5,$6,$7,$8,$9,$10,$11,$12)';
                        return [4 /*yield*/, client.query(res, [animal.numeroanimal, animal.nom, animal.type, animal.espece, animal.taille, animal.poids, animal.description, animal.datenaissance, animal.dateinscription, animal.etat, animal.numeroclinique, animal.numeroproprietaire])];
                    case 2:
                        q = _a.sent();
                        client.release();
                        return [2 /*return*/, q];
                }
            });
        });
    };
    DatabaseService.prototype.getProprietaireKey = function () {
        return __awaiter(this, void 0, Promise, function () {
            var client, query, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, pool_1.pool.connect()];
                    case 1:
                        client = _a.sent();
                        query = "select distinct NumeroProprietaire from TP3.ProprietaireAnimal";
                        client.release();
                        return [4 /*yield*/, client.query(query)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_1 = _a.sent();
                        throw err_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ;
    DatabaseService.prototype.getCliniqueKey = function () {
        return __awaiter(this, void 0, Promise, function () {
            var client, query, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, pool_1.pool.connect()];
                    case 1:
                        client = _a.sent();
                        query = "select numeroclinique from TP3.clinique";
                        client.release();
                        return [4 /*yield*/, client.query(query)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_2 = _a.sent();
                        throw err_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DatabaseService.prototype.deleteAnimal = function (animalNB, numeroclinqiue) {
        return __awaiter(this, void 0, Promise, function () {
            var client, query, res, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, pool_1.pool.connect()];
                    case 1:
                        client = _a.sent();
                        query = "SET search_path=TP3; DELETE FROM TP3.animal WHERE numeroanimal = '" + animalNB + "' and numeroClinique = '" + numeroclinqiue + "';";
                        return [4 /*yield*/, client.query(query)];
                    case 2:
                        res = _a.sent();
                        client.release();
                        return [2 /*return*/, res];
                    case 3:
                        err_3 = _a.sent();
                        throw err_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DatabaseService.prototype.updateAnimalTaille = function (taille, animalkey) {
        return __awaiter(this, void 0, Promise, function () {
            var client, query, res, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, pool_1.pool.connect()];
                    case 1:
                        client = _a.sent();
                        console.log(taille);
                        query = "update TP3.animal set taille = '" + taille + "' where numeroanimal = '" + animalkey + "'";
                        return [4 /*yield*/, client.query(query)];
                    case 2:
                        res = _a.sent();
                        client.release();
                        return [2 /*return*/, res];
                    case 3:
                        err_4 = _a.sent();
                        throw err_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DatabaseService.prototype.updateAnimalWeight = function (weight, animalKey) {
        return __awaiter(this, void 0, Promise, function () {
            var client, query, res, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, pool_1.pool.connect()];
                    case 1:
                        client = _a.sent();
                        query = "update TP3.animal set poids = '" + weight + "' where numeroanimal = '" + animalKey + "'";
                        return [4 /*yield*/, client.query(query)];
                    case 2:
                        res = _a.sent();
                        client.release();
                        return [2 /*return*/, res];
                    case 3:
                        err_5 = _a.sent();
                        throw err_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DatabaseService.prototype.updateAnimalEtat = function (etat, animalKey) {
        return __awaiter(this, void 0, Promise, function () {
            var client, query, res, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, pool_1.pool.connect()];
                    case 1:
                        client = _a.sent();
                        query = "update TP3.animal set etat = '" + etat + "' where numeroanimal = '" + animalKey + "'";
                        return [4 /*yield*/, client.query(query)];
                    case 2:
                        res = _a.sent();
                        client.release();
                        return [2 /*return*/, res];
                    case 3:
                        err_6 = _a.sent();
                        throw err_6;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DatabaseService.prototype.getAnimalsByName = function (name) {
        return __awaiter(this, void 0, Promise, function () {
            var client, query, res, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, pool_1.pool.connect()];
                    case 1:
                        client = _a.sent();
                        query = "select * from TP3.animal join tp3.clinique using(numeroclinique) where nom like '" + ('%' + name + '%') + "'";
                        return [4 /*yield*/, client.query(query)];
                    case 2:
                        res = _a.sent();
                        client.release();
                        return [2 /*return*/, res];
                    case 3:
                        err_7 = _a.sent();
                        throw err_7;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DatabaseService.prototype.getAnimal = function (numeroproprietaire, numeroclinique) {
        return __awaiter(this, void 0, Promise, function () {
            var client, query, err_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, pool_1.pool.connect()];
                    case 1:
                        client = _a.sent();
                        query = "select * from TP3.animal  where numeroproprietaire = '" + numeroproprietaire + "'\n          and numeroclinique ='" + numeroclinique + "'";
                        client.release();
                        return [4 /*yield*/, client.query(query)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_8 = _a.sent();
                        throw err_8;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ;
    DatabaseService.prototype.searchAnimal = function (nomAnimal) {
        return __awaiter(this, void 0, Promise, function () {
            var client, query, err_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, pool_1.pool.connect()];
                    case 1:
                        client = _a.sent();
                        query = "select * from TP3.animal  where nom like \"" + ('%' + nomAnimal + '%') + "'";
                        client.release();
                        return [4 /*yield*/, client.query(query)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_9 = _a.sent();
                        throw err_9;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DatabaseService = __decorate([
        inversify_1.injectable()
    ], DatabaseService);
    return DatabaseService;
}());
exports.DatabaseService = DatabaseService;
