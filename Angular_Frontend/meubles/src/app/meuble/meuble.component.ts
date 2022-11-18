import { Component, OnInit } from '@angular/core';
import { meuble } from '../model/meuble.model';
import { type } from '../model/type.model';
import { meubleService } from '../services/meuble.service';

@Component({
  selector: 'app-meubles',
  templateUrl: './meubles.component.html',
  styleUrls: ['./meubles.component.css']
})

export class meublesComponent implements OnInit {


  meubles!: meuble[]; //un tableau meubles
  Idtype!: number;
  types!: type[];
  nommeuble!:string;
  allmeubles! : meuble[];
  searchTerm!: string;
  totalLength:any;
   page:number=1;
   count:number=0;

  constructor(private meubleService: meubleService) {
  }

  ngOnInit(): void {
        this.chargermeubles();
        this.meubleService.listemeuble().subscribe(anims => {
          this.allmeubles = anims;
          this.totalLength=anims.length;
          console.log(anims);
          });

  }

    chargermeubles(){
    this.meubleService.listemeuble().subscribe(anims => {
    console.log(anims);
    this.meubles = anims;});
    }

    supprimermeubles(a: meuble)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.meubleService.supprimermeuble(a.idmeuble).subscribe(() => {
    console.log("meuble supprimé");
    this.chargermeubles();
    });
    }

      /*rechercherAnims(){
        this.meubleService.rechercherParNom(this.nommeuble).
        subscribe(anims => {
        this.meubles = anims;
        console.log(anims)});
        }
        */
        onKeyUp(filterText : string){
          this.meubles = this.allmeubles.filter(item =>
          item.nommeuble.toLowerCase().includes(filterText));
          }


}
