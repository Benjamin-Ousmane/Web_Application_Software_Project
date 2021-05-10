import { Router } from "express";
import { inject, injectable } from "inversify";

import { DatabaseService } from "../services/database.service";
import Types from "../types";

@injectable()
export class DatabaseController {
  public constructor(
    @inject(Types.DatabaseService) private databaseService: DatabaseService
  ) {}

  public get router(): Router {
    const router: Router = Router();

    router.get('/animalpk', async(req, res) => {
      try{
        const respond = await this.databaseService.getAnimalPK();
        res.json(respond.rows);
      }
      catch (err){throw err;}

    });

    router.get('/traitement/:selectedAnimal',async (req,res) => {
      try {
        const respond = await this.databaseService.getTraitement(req.params.selectedAnimal);
        console.log(respond.rows);
        res.json(respond.rows);

      }
        catch (err){throw err}
    })

    router.post('/insert',async (req,res) => {
      try{
       const respond = await this.databaseService.insertAnimal(req.body);
        res.json(respond.rowCount);
      }
      catch (err){throw err}
    });

    router.get('/cliniquekey',async(req,res) => {
      try{
        const respond = await this.databaseService.getCliniqueKey();
        const {rows} = respond;
        res.json(rows);
      }
      catch (e){throw e;}
    });

    router.get('/proprietairekey',async(req,res) => {
      try{
        const respond = await this.databaseService.getProprietaireKey();
        const {rows} = respond;
        res.json(rows);
      }
      catch (e){throw e;}
    });

    router.get('/proprietairekey/:proprietairekey/:cliniqueNumber', async(req,res) => {
      try{  
        const key = req.params.proprietairekey;
        const clinumber = req.params.cliniqueNumber;
        console.log(key,clinumber)
        const respond = await this.databaseService.getAnimal(key,clinumber);
        console.log(respond.rows)
        res.json(respond.rows);
      }
      catch (e){throw e;}
    });
    router.get('/search/:animal',async(req,res)=>{
      try{
        const animal = req.params.animal;
        const respond = await this.databaseService.getAnimalsByName(animal);
        res.json(respond.rows);
      }
      catch (e){throw e;}
    });

    router.delete('/delete/:animalNB/:numeroClinique', async(req,res)=>{
      try{
        const animalNB = req.params.animalNB;
        const numeroClinique: string = req.params.numeroClinique;
        await this.databaseService.deleteAnimal(animalNB,numeroClinique);
        res.send();      
      }
      catch(err){throw err;}
    })

    router.put('/taille',async(req,res)=>{
      try{
      const {valueToUpdate,animalNB} = req.body; 
      await this.databaseService.updateAnimalTaille(valueToUpdate,animalNB);
      res.send();      
    }catch(err){throw res.json(err.message);}
    });

    router.put('/weight',async(req,res)=>{
      try{
      const {valueToUpdate,animalNB} = req.body; 
      console.log(req.body)
       await this.databaseService.updateAnimalWeight(valueToUpdate,animalNB);
      res.send();      
    }catch(err){throw res.json(err.message);}
    });

    router.put('/etat',async(req,res)=>{
      try{
      const {valueToUpdate,animalNB} = req.body; 
    await this.databaseService.updateAnimalEtat(valueToUpdate,animalNB);
      res.send();      
    }catch(err){throw res.json(err.message);}
    });


 

    return router;
  }
}
