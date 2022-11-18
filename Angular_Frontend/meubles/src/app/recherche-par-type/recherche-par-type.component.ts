import { Component, OnInit } from '@angular/core';
import { meuble } from '../model/meuble.model';
import { type } from '../model/type.model';
import { meubleService } from '../services/meuble.service';
@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
  styles: [
  ]
})
export class RecherchePartypeComponent implements OnInit {
  meubles! : meuble[];
  Idtype! : number;
  types! : type[];

  constructor(private meubleService:meubleService ) { }

  ngOnInit(): void {
    this.meubleService.listetypes().
    subscribe(types => {this.types = types._embedded.types;
    console.log(types);
    }
    );
}
onChange() {
  this.meubleService.rechercherPartype(this.Idtype).
  subscribe(anims =>{this.meubles=anims});
  }
}
