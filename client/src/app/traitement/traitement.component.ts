import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-traitement',
  templateUrl: './traitement.component.html',
  styleUrls: ['./traitement.component.css']
})
export class TraitementComponent implements OnInit {
  animalPK:Object=[{}];
  traitements:Object=[{}];
  selectedAnimal: string;
  factureTotal: number = 0;
  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    this.getAllPKAnimals();
    this.getTraitement();
  }

  getAllPKAnimals(){
    this.communicationService.getAnimalPK().subscribe((res)=>{
       this.animalPK = (res);
    })
  }
  updateSelectedTraitement(animal:number){
    this.selectedAnimal = Object.values(this.animalPK)[animal];
    this.getTraitement();
    this.factureTotal = 0;
  }

  getTraitement(){
    this.communicationService.getTraitement(Object.values(this.selectedAnimal)[0]).subscribe((res)=>{
      this.traitements = res;
      this.afficherFacture();
    })
  }



  afficherFacture(){
    console.log(this.traitements);
        for (let it of Object.values(this.traitements)) 
{    
  this.factureTotal+= Object.values(Object.values(it))[1] as number;
      
}   
    
  }


}
