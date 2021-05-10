"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TraitementComponent = void 0;
var core_1 = require("@angular/core");
var TraitementComponent = /** @class */ (function () {
    function TraitementComponent(communicationService) {
        this.communicationService = communicationService;
        this.animalPK = [{}];
        this.traitements = [{}];
        this.factureTotal = 0;
    }
    TraitementComponent.prototype.ngOnInit = function () {
        this.getAllPKAnimals();
        this.getTraitement();
    };
    TraitementComponent.prototype.getAllPKAnimals = function () {
        var _this = this;
        this.communicationService.getAnimalPK().subscribe(function (res) {
            _this.animalPK = (res);
        });
    };
    TraitementComponent.prototype.updateSelectedTraitement = function (animal) {
        this.selectedAnimal = Object.values(this.animalPK)[animal];
        this.getTraitement();
        this.factureTotal = 0;
    };
    TraitementComponent.prototype.getTraitement = function () {
        var _this = this;
        this.communicationService.getTraitement(Object.values(this.selectedAnimal)[0]).subscribe(function (res) {
            _this.traitements = res;
            _this.afficherFacture();
        });
    };
    TraitementComponent.prototype.afficherFacture = function () {
        console.log(this.traitements);
        for (var _i = 0, _a = Object.values(this.traitements); _i < _a.length; _i++) {
            var it = _a[_i];
            this.factureTotal += Object.values(Object.values(it))[1];
        }
    };
    TraitementComponent = __decorate([
        core_1.Component({
            selector: 'app-traitement',
            templateUrl: './traitement.component.html',
            styleUrls: ['./traitement.component.css']
        })
    ], TraitementComponent);
    return TraitementComponent;
}());
exports.TraitementComponent = TraitementComponent;
