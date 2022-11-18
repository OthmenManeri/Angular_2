import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { meubleService } from '../services/meuble.service';
import { meuble } from '../model/meuble.model';
import { type } from '../model/type.model';

@Component({
  selector: 'app-update-meuble',
  templateUrl: './update-meuble.component.html',
  styleUrls: ['./update-meuble.component.css']
})
export class UpdatemeubleComponent implements OnInit {
  currentmeuble = new meuble();
   types! : type[];
   updatedtypeId! : number;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private meubleService: meubleService) { }
  ngOnInit() {
   this.meubleService.listetypes().
   subscribe(types => {console.log(types);
   this.types = types._embedded.types;
   }
   );
   this.meubleService.consultermeuble(this.activatedRoute.snapshot.params['id']).
   subscribe(anim =>{ this.currentmeuble = anim;
   this.updatedtypeId = this.currentmeuble.type.idtype;
   } ) ;

  }

  updatemeuble() {
    this.currentmeuble.type = this.types.find(type => type.idtype == this.updatedtypeId)!;
   this.meubleService.updatemeuble(this.currentmeuble).subscribe(anim => {
   this.router.navigate(['meubles']); }
   );
    }

}

