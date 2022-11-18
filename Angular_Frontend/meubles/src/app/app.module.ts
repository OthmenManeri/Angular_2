import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { meublesComponent } from './meubles/meubles.component';
import { AddmeubleComponent } from './add-meuble/add-meuble.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UpdatemeubleComponent } from './update-meuble/update-meuble.component';
import { typesComponent } from './types/types.component';
import { AddtypeComponent } from './add-type/add-type.component';
import { UpdatetypeComponent } from './update-type/update-type.component';
import { HttpClientModule } from '@angular/common/http';
import { RecherchePartypeComponent } from './recherche-par-type/recherche-par-type.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    meublesComponent,
    AddmeubleComponent,
    UpdatemeubleComponent,
    typesComponent,
    AddtypeComponent,
    UpdatetypeComponent,
    RecherchePartypeComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
