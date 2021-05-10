"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const inversify_1 = require("inversify");
require("reflect-metadata");
const pool_1 = require("./pool");
let DatabaseService = class DatabaseService {
    getAnimalPK() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield pool_1.pool.connect();
            const res = yield client.query(`SELECT numeroanimal FROM TP3.animal;`);
            client.release();
            return res;
        });
    }
    ;
    getTraitement(numeroanimal) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield pool_1.pool.connect();
            const res = yield client.query(`
    select numerotraitement, cout,t.description, et.quantitetraitement, et.datedebut, et.datefin from TP3.traitement t join 
    TP3.examentraitement et using(numerotraitement) join TP3.examen e using(numeroexamen) where e.numeroanimal = '${numeroanimal}'`);
            client.release();
            return res;
        });
    }
    ;
    insertAnimal(animal) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield pool_1.pool.connect();
            const res = 'INSERT INTO TP3.animal(numeroanimal,nom,typeanimal,espece,taille,poids,description,datenaissance,dateinscription,etat,numeroclinique,numeroproprietaire) VALUES($1, $2, $3,$4,$5,$6,$7,$8,$9,$10,$11,$12)';
            const q = yield client.query(res, [animal.numeroanimal, animal.nom, animal.type, animal.espece, animal.taille, animal.poids, animal.description, animal.datenaissance, animal.dateinscription, animal.etat, animal.numeroclinique, animal.numeroproprietaire]);
            client.release();
            return q;
        });
    }
    getProprietaireKey() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield pool_1.pool.connect();
                const query = "select distinct NumeroProprietaire from TP3.ProprietaireAnimal";
                client.release();
                return yield client.query(query);
            }
            catch (err) {
                throw err;
            }
        });
    }
    ;
    getCliniqueKey() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield pool_1.pool.connect();
                const query = "select numeroclinique from TP3.clinique";
                client.release();
                return yield client.query(query);
            }
            catch (err) {
                throw err;
            }
        });
    }
    deleteAnimal(animalNB, numeroclinqiue) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield pool_1.pool.connect();
                const query = `SET search_path=TP3; DELETE FROM TP3.animal WHERE numeroanimal = '${animalNB}' and numeroClinique = '${numeroclinqiue}';`;
                const res = yield client.query(query);
                client.release();
                return res;
            }
            catch (err) {
                throw err;
            }
        });
    }
    updateAnimalTaille(taille, animalkey) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield pool_1.pool.connect();
                console.log(taille);
                const query = `update TP3.animal set taille = '${taille}' where numeroanimal = '${animalkey}'`;
                const res = yield client.query(query);
                client.release();
                return res;
            }
            catch (err) {
                throw err;
            }
        });
    }
    updateAnimalWeight(weight, animalKey) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield pool_1.pool.connect();
                const query = `update TP3.animal set poids = '${weight}' where numeroanimal = '${animalKey}'`;
                const res = yield client.query(query);
                client.release();
                return res;
            }
            catch (err) {
                throw err;
            }
        });
    }
    updateAnimalEtat(etat, animalKey) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield pool_1.pool.connect();
                const query = `update TP3.animal set etat = '${etat}' where numeroanimal = '${animalKey}'`;
                const res = yield client.query(query);
                client.release();
                return res;
            }
            catch (err) {
                throw err;
            }
        });
    }
    getAnimalsByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield pool_1.pool.connect();
                const query = `select * from TP3.animal join tp3.clinique using(numeroclinique) where nom like '${'%' + name + '%'}'`;
                const res = yield client.query(query);
                client.release();
                return res;
            }
            catch (err) {
                throw err;
            }
        });
    }
    getAnimal(numeroproprietaire, numeroclinique) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield pool_1.pool.connect();
                const query = `select * from TP3.animal  where numeroproprietaire = '${numeroproprietaire}'
          and numeroclinique ='${numeroclinique}'`;
                client.release();
                return yield client.query(query);
            }
            catch (err) {
                throw err;
            }
        });
    }
    ;
    searchAnimal(nomAnimal) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield pool_1.pool.connect();
                const query = `select * from TP3.animal  where nom like "${'%' + nomAnimal + '%'}'`;
                client.release();
                return yield client.query(query);
            }
            catch (err) {
                throw err;
            }
        });
    }
};
DatabaseService = __decorate([
    inversify_1.injectable()
], DatabaseService);
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=database.service.js.map