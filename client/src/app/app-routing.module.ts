import { AnimalComponent } from './animal/animal.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { TraitementComponent } from "./traitement/traitement.component";

const routes: Routes = [
  { path: "app", component: AppComponent },
  { path: "traitement", component: TraitementComponent },
  { path: "animal", component: AnimalComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }