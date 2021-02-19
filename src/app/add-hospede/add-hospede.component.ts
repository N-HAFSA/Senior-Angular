import { Component, OnInit } from '@angular/core';
import { HospedeService } from '../hospede.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Hospede } from '../hospede';
@Component({
  selector: 'app-add-hospede',
  templateUrl: './add-hospede.component.html',
  styleUrls: ['./add-hospede.component.css']
})
export class AddHospedeComponent implements OnInit {

  constructor(private hospedeservice:HospedeService) { }

  hospede : Hospede=new Hospede();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  hospedesaveform=new FormGroup({
    hospede_nome:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    hospede_telefone:new FormControl()
  });

  saveHospede(saveHospede){
    this.hospede=new Hospede();   
    this.hospede.nome=this.HospedeNome.value;
    this.hospede.documento=this.HospedeDocumento.value;
    this.hospede.telefone=this.HospedeTelefone.value;
    this.submitted = true;
    this.save();
  }

  

  save() {
    this.hospedeservice.createHospede(this.hospede)
      .subscribe(data => console.log(data), error => console.log(error));
    this.hospede = new Hospede();
  }

  get HospedeNome(){
    return this.hospedesaveform.get('hospede_nome');
  }

  get HospedeDocumento(){
    return this.hospedesaveform.get('hospede_documento');
  }

  get HospedeTelefone(){
    return this.hospedesaveform.get('hospede_elefone');
  }

  addHospedeForm(){
    this.submitted=false;
    this.hospedesaveform.reset();
  }
}
