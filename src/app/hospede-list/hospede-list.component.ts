import { Component, OnInit } from '@angular/core';
import { HospedeService } from '../hospede.service';
import { Hospede } from '../hospede';
import { Observable,Subject } from "rxjs";

import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-hospede-list',
  templateUrl: './hospede-list.component.html',
  styleUrls: ['./hospede-list.component.css']
})
export class HospedeListComponent implements OnInit {

 constructor(private hospedeservice:HospedeService) { }

  hospedesArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  hospedes: Observable<Hospede[]>;
  hospede : Hospede=new Hospede();
  deleteMessage=false;
  hospedelist:any;
  isupdated = false;    
 

  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };   
    this.hospedeservice.getHospedeList().subscribe(data =>{
    this.hospedes =data;
    this.dtTrigger.next();
    })
  }

  updateHospede(id: number){
    this.hospedeservice.getHospede(id)
      .subscribe(
        data => {
          this.hospedelist=data           
        },
        error => console.log(error));
  }

  hospedeupdateform=new FormGroup({
    hospede_id:new FormControl(),
    hospede_name:new FormControl(),
    hospede_email:new FormControl(),
    hospede_branch:new FormControl()
  });
   

}
