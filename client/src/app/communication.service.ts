import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// tslint:disable-next-line:ordered-imports
import {Observable, Subject } from "rxjs";

@Injectable()
export class CommunicationService {
  private readonly BASE_URL: string = "http://localhost:3000/database";
  public constructor(private http: HttpClient) {}

  private _listners: any = new Subject<any>();

  public listen(): Observable<any> {
    return this._listners.asObservable();
  }

  public filter(filterBy: string): void {
    this._listners.next(filterBy);
  }
  
  getAnimalPK():Observable<Object[]> {
    return this.http
    .get<Object[]>(this.BASE_URL + "/animalpk")
  }

  getTraitement(selectedAnimal: string): Observable<Object[]> {
    
    return this.http.get<Object[]>(this.BASE_URL + "/traitement/" + selectedAnimal);
  }
  insertAnimal(selectedAnimal: Object): Observable<string> {
    return this.http.post<string>(this.BASE_URL + '/insert',selectedAnimal);
  }

  public getAnimal(proprietairekey: string, cliniqueNumber:string): Observable<Object> {
    return this.http
      .get<Object>(this.BASE_URL + '/proprietairekey/' + proprietairekey + '/' + cliniqueNumber)
  }
  public getProprietaireKey() : Observable<Object> {
    return this.http.get<Object>(this.BASE_URL + '/proprietairekey');
  }
  getCliniqueKey() : Observable<Object> {
    return this.http.get<Object>(this.BASE_URL + '/cliniquekey');

  }

  searchAnimal(name:string) : Observable<Object>{
    return this.http.get<Object>(this.BASE_URL + '/search/' + name);
  }

  deleteAnimal(animalkey: string,cliniquekey: string): Observable<void>{
    return this.http.delete<void>(this.BASE_URL + '/delete/' + animalkey + '/' + cliniquekey)
  }


  updateAnimalTaille(valueToUpdate: string, animalNB: string): Observable<number>{
    return this.http
    .put<number>(this.BASE_URL + "/taille", {valueToUpdate,animalNB})
  }
  updateAnimalWeight(valueToUpdate: string, animalNB: string): Observable<number>{
    return this.http
    .put<number>(this.BASE_URL + "/weight", {valueToUpdate,animalNB})
  }

  updateAnimalEtat(valueToUpdate: string  , animalNB: string): Observable<number>{
    return this.http
    .put<number>(this.BASE_URL + "/etat", {valueToUpdate,animalNB})
  }

  updateAnimalDescription(valueToUpdate: string  , animalNB: string): Observable<number>{
    return this.http
    .put<number>(this.BASE_URL + "/description", {valueToUpdate,animalNB})
  }
}