import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { typeService } from '../services/type.service';
import { type } from '../model/type.model';
@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styleUrls: ['./update-type.component.css']
})
export class UpdatetypeComponent implements OnInit {
  currenttype = new type();
  constructor(private activatedRoute: ActivatedRoute,private router :Router,
  private typeService: typeService) { }
  ngOnInit() {
  this.typeService.consultertype(this.activatedRoute.snapshot.params['id']).subscribe( type =>{ this.currenttype = type; } ) ;

  }
  updatetype() {
    this.typeService.updatetype(this.currenttype).subscribe(type => {
    this.router.navigate(['types']); }
    );
    }

}

