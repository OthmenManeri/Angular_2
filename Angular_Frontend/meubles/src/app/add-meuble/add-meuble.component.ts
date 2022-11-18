import { Component, OnInit } from '@angular/core';
import { meuble } from '../model/meuble.model';
import { meubleService } from '../services/meuble.service';
import { type } from '../model/type.model';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-add-meuble',
  templateUrl: './add-meuble.component.html',
  styleUrls: ['./add-meuble.component.css']
})
export class AddmeubleComponent implements OnInit {

  newmeuble = new meuble();
  types!: type[];

  newIdtype!: number;
  newtype!: type;

  message!: string;

  constructor(private meubleService: meubleService, private router: Router) { }

  ngOnInit() {
    this.meubleService.listetypes().
    subscribe(types => {console.log(types);
    this.types = types._embedded.types;
    }
    );
  }

  addmeuble(){
    this.newmeuble.type = this.types.find(type => type.idtype == this.newIdtype)!;
    this.meubleService.ajoutermeuble(this.newmeuble).subscribe(prod => {
    console.log(prod);
    this.router.navigate(['meubles']);
    });

    }


}
