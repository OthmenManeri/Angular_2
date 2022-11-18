import { Component, OnInit } from '@angular/core';
import { type } from '../model/type.model';
import { typeService } from '../services/type.service';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddtypeComponent implements OnInit {
  newtype= new type();
  types!: type[];

  newIdtype!: number;


  constructor(private typeService: typeService, private router: Router) { }
    ngOnInit() {

    }


    addtype(){
      this.typeService.ajoutertype(this.newtype).subscribe(types => {
      console.log(types);
      this.router.navigate(['types']);
      });
      }

}
