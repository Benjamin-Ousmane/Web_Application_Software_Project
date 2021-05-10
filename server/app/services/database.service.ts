import { injectable } from "inversify";
import "reflect-metadata";
import {pool} from './pool';
import * as pg from "pg";

@injectable()
export class DatabaseService {

  async getAnimalPK(): Promise<pg.QueryResult>{
    const client = await pool.connect();
    const res = await client.query(`SELECT numeroanimal FROM TP3.animal;`);
    client.release()
    return res;
  };

  async getTraitement(numeroanimal: string): Promise<pg.QueryResult>{
    const client = await pool.connect();
    const res = await client.query(`
    select numerotraitement, cout,t.description, et.quantitetraitement, et.datedebut, et.datefin from TP3.traitement t join 
    TP3.examentraitement et using(numerotraitement) join TP3.examen e using(numeroexamen) where e.numeroanimal = '${numeroanimal}'`);
    client.release();
    return res;
  };
  async insertAnimal(animal:any): Promise<pg.QueryResult> {
    const client = await pool.connect();
    const res = 'INSERT INTO TP3.animal(numeroanimal,nom,typeanimal,espece,taille,poids,description,datenaissance,dateinscription,etat,numeroclinique,numeroproprietaire) VALUES($1, $2, $3,$4,$5,$6,$7,$8,$9,$10,$11,$12)';
    const q = await client.query(res,[animal.numeroanimal,animal.nom,animal.type,animal.espece,animal.taille,animal.poids,animal.description,animal.datenaissance,animal.dateinscription,animal.etat,animal.numeroclinique,animal.numeroproprietaire]);
    client.release();
    return q;
  }
  public async getProprietaireKey(): Promise<pg.QueryResult>{
    try{
      const client = await pool.connect();
      const query = "select distinct NumeroProprietaire from TP3.ProprietaireAnimal";
      client.release();
      return await client.query(query);
    }
    catch(err){throw err;} 
  };

  public async getCliniqueKey(): Promise<pg.QueryResult>{
    try{
      const client = await pool.connect();
      const query = "select numeroclinique from TP3.clinique";
      client.release();
      return await client.query(query);
    }
    catch(err){throw err;} 
  }
  public async deleteAnimal(animalNB: string, numeroclinqiue: string): Promise<pg.QueryResult> {
    try{
     const client = await pool.connect();
     const query = `SET search_path=TP3; DELETE FROM TP3.animal WHERE numeroanimal = '${animalNB}' and numeroClinique = '${numeroclinqiue}';`;
     const res = await client.query(query);
     client.release();
     return res;
   }
   catch (err) {throw err;}
   }
   async updateAnimalTaille(taille: string, animalkey: string): Promise<pg.QueryResult> {
     try{
       const client = await pool.connect();
       console.log(taille);
       const query = `update TP3.animal set taille = '${taille}' where numeroanimal = '${animalkey}'`;
       const res = await client.query(query);
       client.release();
       return res;
     }
     catch (err) {throw err;}
     }
     async updateAnimalWeight(weight: string, animalKey: string): Promise<pg.QueryResult> {
       try{
         const client = await pool.connect();
         const query = `update TP3.animal set poids = '${weight}' where numeroanimal = '${animalKey}'`;
         const res = await client.query(query);
         client.release();
         return res;
       }
       catch (err) {throw err;}
       }
 
       async updateAnimalEtat(etat: string, animalKey: string): Promise<pg.QueryResult> {
         try{
           const client = await pool.connect();
           const query = `update TP3.animal set etat = '${etat}' where numeroanimal = '${animalKey}'`;
           const res = await client.query(query);
           client.release();
           return res;
         }
         catch (err) {throw err;}
         }
 
       async getAnimalsByName(name: string): Promise<pg.QueryResult> {
         try{
           const client = await pool.connect();
           const query = `select * from TP3.animal join tp3.clinique using(numeroclinique) where nom like '${'%'+ name +'%'}'`;
           const res = await client.query(query);
           client.release();
           return res;
         }
         catch (err) {throw err;}
       }
       async getAnimal(numeroproprietaire:string, numeroclinique:string): Promise<pg.QueryResult> {
        try{
          const client = await pool.connect();
          const query = `select * from TP3.animal  where numeroproprietaire = '${numeroproprietaire}'
          and numeroclinique ='${numeroclinique}'`;
          client.release(); 
          return await client.query(query);
        }
        catch (err){throw err;}
       };

       async searchAnimal(nomAnimal:string): Promise<pg.QueryResult> {
        try{
          const client = await pool.connect();
          const query = `select * from TP3.animal  where nom like "${'%' + nomAnimal + '%'}'`;
          client.release(); 
          return await client.query(query);
        }
        catch (err){throw err;}
      
       }



}
