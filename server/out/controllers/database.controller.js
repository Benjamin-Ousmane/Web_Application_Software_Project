"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inversify_1 = require("inversify");
const database_service_1 = require("../services/database.service");
const types_1 = require("../types");
let DatabaseController = class DatabaseController {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    get router() {
        const router = express_1.Router();
        router.get('/animalpk', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const respond = yield this.databaseService.getAnimalPK();
                res.json(respond.rows);
            }
            catch (err) {
                throw err;
            }
        }));
        router.get('/traitement/:selectedAnimal', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const respond = yield this.databaseService.getTraitement(req.params.selectedAnimal);
                console.log(respond.rows);
                res.json(respond.rows);
            }
            catch (err) {
                throw err;
            }
        }));
        router.post('/insert', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const respond = yield this.databaseService.insertAnimal(req.body);
                res.json(respond.rowCount);
            }
            catch (err) {
                throw err;
            }
        }));
        router.get('/cliniquekey', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const respond = yield this.databaseService.getCliniqueKey();
                const { rows } = respond;
                res.json(rows);
            }
            catch (e) {
                throw e;
            }
        }));
        router.get('/proprietairekey', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const respond = yield this.databaseService.getProprietaireKey();
                const { rows } = respond;
                res.json(rows);
            }
            catch (e) {
                throw e;
            }
        }));
        router.get('/proprietairekey/:proprietairekey/:cliniqueNumber', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const key = req.params.proprietairekey;
                const clinumber = req.params.cliniqueNumber;
                console.log(key, clinumber);
                const respond = yield this.databaseService.getAnimal(key, clinumber);
                console.log(respond.rows);
                res.json(respond.rows);
            }
            catch (e) {
                throw e;
            }
        }));
        router.get('/search/:animal', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const animal = req.params.animal;
                const respond = yield this.databaseService.getAnimalsByName(animal);
                res.json(respond.rows);
            }
            catch (e) {
                throw e;
            }
        }));
        router.delete('/delete/:animalNB/:numeroClinique', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const animalNB = req.params.animalNB;
                const numeroClinique = req.params.numeroClinique;
                yield this.databaseService.deleteAnimal(animalNB, numeroClinique);
                res.send();
            }
            catch (err) {
                throw err;
            }
        }));
        router.put('/taille', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { valueToUpdate, animalNB } = req.body;
                yield this.databaseService.updateAnimalTaille(valueToUpdate, animalNB);
                res.send();
            }
            catch (err) {
                throw res.json(err.message);
            }
        }));
        router.put('/weight', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { valueToUpdate, animalNB } = req.body;
                console.log(req.body);
                yield this.databaseService.updateAnimalWeight(valueToUpdate, animalNB);
                res.send();
            }
            catch (err) {
                throw res.json(err.message);
            }
        }));
        router.put('/etat', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { valueToUpdate, animalNB } = req.body;
                yield this.databaseService.updateAnimalEtat(valueToUpdate, animalNB);
                res.send();
            }
            catch (err) {
                throw res.json(err.message);
            }
        }));
        return router;
    }
};
DatabaseController = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.default.DatabaseService)),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], DatabaseController);
exports.DatabaseController = DatabaseController;
//# sourceMappingURL=database.controller.js.map