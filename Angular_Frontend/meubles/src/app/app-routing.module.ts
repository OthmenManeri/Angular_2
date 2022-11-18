import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { meublesComponent } from './meubles/meubles.component';
import { AddmeubleComponent } from './add-meuble/add-meuble.component';
import { UpdatemeubleComponent } from './update-meuble/update-meuble.component';
import { typesComponent } from './types/types.component';
import { AddtypeComponent } from './add-type/add-type.component';
import { UpdatetypeComponent } from './update-type/update-type.component';
import { RecherchePartypeComponent } from './recherche-par-type/recherche-par-type.component';



const routes: Routes = [
  {path: "meubles", component : meublesComponent},
  {path: "add-meuble", component : AddmeubleComponent},
  { path: "", redirectTo: "meubles", pathMatch: "full" },
  {path: "updatemeuble/:id", component: UpdatemeubleComponent},
  {path: "types", component : typesComponent},
  {path: "add-type", component : AddtypeComponent},
  {path: "updatetype/:id", component : UpdatetypeComponent},
  {path: "recherchePartype", component : RecherchePartypeComponent}

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
