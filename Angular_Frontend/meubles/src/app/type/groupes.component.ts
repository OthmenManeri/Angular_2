import { Component, OnInit } from '@angular/core';
import { type } from '../model/type.model';
import { typeService } from '../services/type.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})

export class typesComponent implements OnInit {

  types!: type[];
  totalLength:any;
   page:number=1;
   count:number=0;

  constructor(private typeService: typeService) {

  }

  ngOnInit(): void {
      this.chargertype();
  }
  chargertype(){
    this.typeService.listetype().subscribe(types => {
      this.totalLength=types.length;
    this.types = types;
    console.log(types);
    });
    }

  supprimerGroup(g: type)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.typeService.supprimertype(g.idtype).subscribe(() => {
  console.log("type supprimé");
  this.chargertype();
  });
  }
}
