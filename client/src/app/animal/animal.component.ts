import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  @ViewChild("nom") nom :ElementRef;
  @ViewChild("numeroanimal") numeroanimal :ElementRef;
  @ViewChild("taille") taille :ElementRef;
  @ViewChild("espece") espece :ElementRef;
  @ViewChild("poids") poids :ElementRef;
  @ViewChild("description") description :ElementRef;
  @ViewChild("datenaissance") datenaissance :ElementRef;
  @ViewChild("dateinscription") dateinscription :ElementRef;
  @ViewChild("etat") etat :ElementRef;
  @ViewChild("type") type :ElementRef;

  public animals: Object = [{}];
  proprieatirekeys: Object =[{}];
  cliniquesKeys: Object =[{}];
  selectedCliniqueKey:string;
  proprietaireKey:string;
  name:string;
  isSerach: boolean = false;
  constructor(public communicationService:CommunicationService) { }

  ngOnInit() {
    this.getAllCliniqueKeys();
    this.getAllProprietaire();
    this.getAnimal();
    this.selectedCliniqueKey = Object.values(this.selectedCliniqueKey)[0];
    this.proprietaireKey = Object.values(this.proprietaireKey)[0];

    

  }
  insertAnimal(): void {
    const animal: Object = {                                                                                                       
      numeroanimal: this.numeroanimal.nativeElement.innerText,
      numeroproprietaire: this.proprietaireKey,
      numeroclinique:this.selectedCliniqueKey,
      nom: this.nom.nativeElement.innerText,
      type: this.type.nativeElement.innerText,
      espece: this.espece.nativeElement.innerText,                                                          
      taille: this.taille.nativeElement.innerText,
      poids: this.poids.nativeElement.innerText,
      description: this.description.nativeElement.innerText,                                              
      datenaissance: this.datenaissance.nativeElement.innerText,
      dateinscription: this.dateinscription.nativeElement.innerText,
      etat: this.etat.nativeElement.innerText,                                                
      
    };
    this.communicationService.insertAnimal(animal).subscribe(
      (res: string) => { 
        this.refresh();
        this.getAnimal();
        
        if(isNaN(this.taille.nativeElement.innerText) || this.taille.nativeElement.innerText == ""
        ) 
        alert('erreur dans taille')
        if  (isNaN(this.poids.nativeElement.innerText) ||     this.poids.nativeElement.innerText == "") 
        alert('erreur dans poids') ;
        else  alert(res); 
      },
      (e:Error) => { alert('erreur dans l insertion ');})
      ;
  }
  refresh(){
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

  public deleteAnimal(c:number) {
    if(this.isSerach) {
    this.communicationService.deleteAnimal((Object.values(Object.values(this.animals)[c])[1]) as string, this.selectedCliniqueKey).subscribe(()=>{
      console.log('deleteAnimal')
      this.searchanimal();
    })

  }
  else
 {   this.communicationService.deleteAnimal((Object.values(Object.values(this.animals)[c])[0]) as string, this.selectedCliniqueKey).subscribe(()=>{
      this.getAnimal();
    })
  }
  }


  public changeAnimalPoids(event: any, i:number){
    const editField = event.target.textContent;
    const animal = Object.values((Object.values(this.animals)[i]))[0] as string;
    console.log(animal);
     this.communicationService.updateAnimalWeight(editField,animal).subscribe(
       (err)=> {if(err) {alert(err);
         confirm('Veuillez changer le contenu de la case Poids sinon les modifications ne seront pas appliquées')};});
  
  }

  public changeAnimalSize(event: any, i:number){
    const editField = event.target.textContent;
    const animal = Object.values((Object.values(this.animals)[i]))[0] as string;
     this.communicationService.updateAnimalTaille(editField,animal).subscribe(
       (err)=> {if(err) {alert(err);
         confirm('Veuillez changer le contenu de la case Taille sinon les modifications ne seront pas appliquées')};});
  
  }

  public changeAnimalDescription(event: any, i:number){
    const editField = event.target.textContent;
    const animal = Object.values((Object.values(this.animals)[i]))[0] as string;
     this.communicationService.updateAnimalDescription(editField,animal).subscribe(
       (err)=> {if(err) {alert(err);
         confirm('Veuillez changer le contenu de la case Description sinon les modifications ne seront pas appliquées')};});
  }

  public changeAnimalEtat(event: any, i:number){
    const editField = event.target.textContent;
    const animal = Object.values((Object.values(this.animals)[i]))[1] as string;
     this.communicationService.updateAnimalEtat(editField,animal).subscribe(
       (err)=> {if(err) {alert(err);
         confirm('Veuillez changer le contenu de la case Etat sinon les modifications ne seront pas appliquées')};});
  }

 


  getAnimal(){
    this.isSerach = false;
    this.communicationService.getAnimal(this.proprietaireKey,this.selectedCliniqueKey).subscribe((res)=> {
      this.animals = res;
      console.log(res)
    });
  };

  updateselectedOwner(c:number) {
    this.proprietaireKey = Object.values(this.proprieatirekeys)[c];
    this.proprietaireKey = Object.values(this.proprietaireKey)[0];
    this.getAnimal();
  }
  
  
  
  updateclinique(c:number){
    this.selectedCliniqueKey = Object.values(this.cliniquesKeys)[c];
    this.selectedCliniqueKey = Object.values(this.selectedCliniqueKey)[0];
    this.getAnimal();
  }

  getAllProprietaire() {
    this.communicationService.getProprietaireKey().subscribe((res)=>{
      this.proprieatirekeys = res;
      this.proprietaireKey = Object.values(this.proprieatirekeys)[0];
      this.proprietaireKey = Object.values(this.proprietaireKey)[0];

    });

  }

  getAllCliniqueKeys(){
    this.communicationService.getCliniqueKey().subscribe((res) =>{
      this.cliniquesKeys = res;
      this.selectedCliniqueKey = Object.values(this.cliniquesKeys)[0];
      this.selectedCliniqueKey = Object.values(this.selectedCliniqueKey)[0];

    });
  }
  searchanimal(){
    this.isSerach = true;
    this.communicationService.searchAnimal(this.name).subscribe((res) =>
       this.animals = res
    );
    this.name = '';
  }
}
