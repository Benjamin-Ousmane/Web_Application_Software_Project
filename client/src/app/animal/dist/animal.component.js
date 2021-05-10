"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AnimalComponent = void 0;
var core_1 = require("@angular/core");
var AnimalComponent = /** @class */ (function () {
    function AnimalComponent(communicationService) {
        this.communicationService = communicationService;
        this.animals = [{}];
        this.proprieatirekeys = [{}];
        this.cliniquesKeys = [{}];
        this.isSerach = false;
    }
    AnimalComponent.prototype.ngOnInit = function () {
        this.getAllCliniqueKeys();
        this.getAllProprietaire();
        this.getAnimal();
        this.selectedCliniqueKey = Object.values(this.selectedCliniqueKey)[0];
        this.proprietaireKey = Object.values(this.proprietaireKey)[0];
    };
    AnimalComponent.prototype.insertAnimal = function () {
        var _this = this;
        var animal = {
            numeroanimal: this.numeroanimal.nativeElement.innerText,
            numeroproprietaire: this.proprietaireKey,
            numeroclinique: this.selectedCliniqueKey,
            nom: this.nom.nativeElement.innerText,
            type: this.type.nativeElement.innerText,
            espece: this.espece.nativeElement.innerText,
            taille: this.taille.nativeElement.innerText,
            poids: this.poids.nativeElement.innerText,
            description: this.description.nativeElement.innerText,
            datenaissance: this.datenaissance.nativeElement.innerText,
            dateinscription: this.dateinscription.nativeElement.innerText,
            etat: this.etat.nativeElement.innerText
        };
        this.communicationService.insertAnimal(animal).subscribe(function (res) {
            _this.refresh();
            _this.getAnimal();
            if (isNaN(_this.taille.nativeElement.innerText) || _this.taille.nativeElement.innerText == "")
                alert('erreur dans taille');
            if (isNaN(_this.poids.nativeElement.innerText) || _this.poids.nativeElement.innerText == "")
                alert('erreur dans poids');
            else
                alert(res);
        }, function (e) { alert('erreur dans l insertion '); });
    };
    AnimalComponent.prototype.refresh = function () {
        this.numeroanimal.nativeElement.innerText = "";
        this.nom.nativeElement.innerText = "";
        this.taille.nativeElement.innerText = "";
        this.type.nativeElement.innerText = "";
        this.espece.nativeElement.innerText = "";
        this.poids.nativeElement.innerText = "";
        this.description.nativeElement.innerText = "";
        this.datenaissance.nativeElement.innerText = "";
        this.dateinscription.nativeElement.innerText = "";
        this.etat.nativeElement.innerText = "";
    };
    ;
    AnimalComponent.prototype.deleteAnimal = function (c) {
        var _this = this;
        if (this.isSerach) {
            this.communicationService.deleteAnimal((Object.values(Object.values(this.animals)[c])[1]), this.selectedCliniqueKey).subscribe(function () {
                console.log('deleteAnimal');
                _this.searchanimal();
            });
        }
        else {
            this.communicationService.deleteAnimal((Object.values(Object.values(this.animals)[c])[0]), this.selectedCliniqueKey).subscribe(function () {
                _this.getAnimal();
            });
        }
    };
    AnimalComponent.prototype.changeAnimalPoids = function (event, i) {
        var editField = event.target.textContent;
        var animal = Object.values((Object.values(this.animals)[i]))[0];
        console.log(animal);
        this.communicationService.updateAnimalWeight(editField, animal).subscribe(function (err) {
            if (err) {
                alert(err);
                confirm('Veuillez changer le contenu de la case Poids sinon les modifications ne seront pas appliquées');
            }
            ;
        });
    };
    AnimalComponent.prototype.changeAnimalSize = function (event, i) {
        var editField = event.target.textContent;
        var animal = Object.values((Object.values(this.animals)[i]))[0];
        this.communicationService.updateAnimalTaille(editField, animal).subscribe(function (err) {
            if (err) {
                alert(err);
                confirm('Veuillez changer le contenu de la case Taille sinon les modifications ne seront pas appliquées');
            }
            ;
        });
    };
    AnimalComponent.prototype.changeAnimalDescription = function (event, i) {
        var editField = event.target.textContent;
        var animal = Object.values((Object.values(this.animals)[i]))[0];
        this.communicationService.updateAnimalDescription(editField, animal).subscribe(function (err) {
            if (err) {
                alert(err);
                confirm('Veuillez changer le contenu de la case Description sinon les modifications ne seront pas appliquées');
            }
            ;
        });
    };
    AnimalComponent.prototype.changeAnimalEtat = function (event, i) {
        var editField = event.target.textContent;
        var animal = Object.values((Object.values(this.animals)[i]))[1];
        this.communicationService.updateAnimalEtat(editField, animal).subscribe(function (err) {
            if (err) {
                alert(err);
                confirm('Veuillez changer le contenu de la case Etat sinon les modifications ne seront pas appliquées');
            }
            ;
        });
    };
    AnimalComponent.prototype.getAnimal = function () {
        var _this = this;
        this.isSerach = false;
        this.communicationService.getAnimal(this.proprietaireKey, this.selectedCliniqueKey).subscribe(function (res) {
            _this.animals = res;
            console.log(res);
        });
    };
    ;
    AnimalComponent.prototype.updateselectedOwner = function (c) {
        this.proprietaireKey = Object.values(this.proprieatirekeys)[c];
        this.proprietaireKey = Object.values(this.proprietaireKey)[0];
        this.getAnimal();
    };
    AnimalComponent.prototype.updateclinique = function (c) {
        this.selectedCliniqueKey = Object.values(this.cliniquesKeys)[c];
        this.selectedCliniqueKey = Object.values(this.selectedCliniqueKey)[0];
        this.getAnimal();
    };
    AnimalComponent.prototype.getAllProprietaire = function () {
        var _this = this;
        this.communicationService.getProprietaireKey().subscribe(function (res) {
            _this.proprieatirekeys = res;
            _this.proprietaireKey = Object.values(_this.proprieatirekeys)[0];
            _this.proprietaireKey = Object.values(_this.proprietaireKey)[0];
        });
    };
    AnimalComponent.prototype.getAllCliniqueKeys = function () {
        var _this = this;
        this.communicationService.getCliniqueKey().subscribe(function (res) {
            _this.cliniquesKeys = res;
            _this.selectedCliniqueKey = Object.values(_this.cliniquesKeys)[0];
            _this.selectedCliniqueKey = Object.values(_this.selectedCliniqueKey)[0];
        });
    };
    AnimalComponent.prototype.searchanimal = function () {
        var _this = this;
        this.isSerach = true;
        this.communicationService.searchAnimal(this.name).subscribe(function (res) {
            return _this.animals = res;
        });
        this.name = '';
    };
    __decorate([
        core_1.ViewChild("nom")
    ], AnimalComponent.prototype, "nom");
    __decorate([
        core_1.ViewChild("numeroanimal")
    ], AnimalComponent.prototype, "numeroanimal");
    __decorate([
        core_1.ViewChild("taille")
    ], AnimalComponent.prototype, "taille");
    __decorate([
        core_1.ViewChild("espece")
    ], AnimalComponent.prototype, "espece");
    __decorate([
        core_1.ViewChild("poids")
    ], AnimalComponent.prototype, "poids");
    __decorate([
        core_1.ViewChild("description")
    ], AnimalComponent.prototype, "description");
    __decorate([
        core_1.ViewChild("datenaissance")
    ], AnimalComponent.prototype, "datenaissance");
    __decorate([
        core_1.ViewChild("dateinscription")
    ], AnimalComponent.prototype, "dateinscription");
    __decorate([
        core_1.ViewChild("etat")
    ], AnimalComponent.prototype, "etat");
    __decorate([
        core_1.ViewChild("type")
    ], AnimalComponent.prototype, "type");
    AnimalComponent = __decorate([
        core_1.Component({
            selector: 'app-animal',
            templateUrl: './animal.component.html',
            styleUrls: ['./animal.component.css']
        })
    ], AnimalComponent);
    return AnimalComponent;
}());
exports.AnimalComponent = AnimalComponent;
