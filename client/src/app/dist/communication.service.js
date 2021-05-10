"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CommunicationService = void 0;
var core_1 = require("@angular/core");
// tslint:disable-next-line:ordered-imports
var rxjs_1 = require("rxjs");
var CommunicationService = /** @class */ (function () {
    function CommunicationService(http) {
        this.http = http;
        this.BASE_URL = "http://localhost:3000/database";
        this._listners = new rxjs_1.Subject();
    }
    CommunicationService.prototype.listen = function () {
        return this._listners.asObservable();
    };
    CommunicationService.prototype.filter = function (filterBy) {
        this._listners.next(filterBy);
    };
    CommunicationService.prototype.getAnimalPK = function () {
        return this.http
            .get(this.BASE_URL + "/animalpk");
    };
    CommunicationService.prototype.getTraitement = function (selectedAnimal) {
        return this.http.get(this.BASE_URL + "/traitement/" + selectedAnimal);
    };
    CommunicationService.prototype.insertAnimal = function (selectedAnimal) {
        return this.http.post(this.BASE_URL + '/insert', selectedAnimal);
    };
    CommunicationService.prototype.getAnimal = function (proprietairekey, cliniqueNumber) {
        return this.http
            .get(this.BASE_URL + '/proprietairekey/' + proprietairekey + '/' + cliniqueNumber);
    };
    CommunicationService.prototype.getProprietaireKey = function () {
        return this.http.get(this.BASE_URL + '/proprietairekey');
    };
    CommunicationService.prototype.getCliniqueKey = function () {
        return this.http.get(this.BASE_URL + '/cliniquekey');
    };
    CommunicationService.prototype.searchAnimal = function (name) {
        return this.http.get(this.BASE_URL + '/search/' + name);
    };
    CommunicationService.prototype.deleteAnimal = function (animalkey, cliniquekey) {
        return this.http["delete"](this.BASE_URL + '/delete/' + animalkey + '/' + cliniquekey);
    };
    CommunicationService.prototype.updateAnimalTaille = function (valueToUpdate, animalNB) {
        return this.http
            .put(this.BASE_URL + "/taille", { valueToUpdate: valueToUpdate, animalNB: animalNB });
    };
    CommunicationService.prototype.updateAnimalWeight = function (valueToUpdate, animalNB) {
        return this.http
            .put(this.BASE_URL + "/weight", { valueToUpdate: valueToUpdate, animalNB: animalNB });
    };
    CommunicationService.prototype.updateAnimalEtat = function (valueToUpdate, animalNB) {
        return this.http
            .put(this.BASE_URL + "/etat", { valueToUpdate: valueToUpdate, animalNB: animalNB });
    };
    CommunicationService.prototype.updateAnimalDescription = function (valueToUpdate, animalNB) {
        return this.http
            .put(this.BASE_URL + "/description", { valueToUpdate: valueToUpdate, animalNB: animalNB });
    };
    CommunicationService = __decorate([
        core_1.Injectable()
    ], CommunicationService);
    return CommunicationService;
}());
exports.CommunicationService = CommunicationService;
