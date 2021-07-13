import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.scss']
})
export class QuejasComponent implements OnInit {
  submmited: boolean = false;
  quejasForm : FormGroup;
  Paises: string[] = [
    'Argentina',
    'Bolivia',
    'Brazil',
    'Chile',
    'Colombia',
    'Ecuador',
    'French Guiana (département of France)',
    'Guyana',
    'Paraguay',
    'Peru',
    'Suriname',
    'Uruguay',
    'Venezuela',
  ]
  constructor( private fb : FormBuilder) { 
    this.quejasForm = this.fb.group({
     Nombre: ['', Validators.required],
     Pais: ['',Validators.required],
     Observacion:  ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.quejasForm.valid){
      this.submmited = true;
    }
    this.quejasForm.get("Nombre")?.valid
  }

  getNameMsg(){
    if (this.quejasForm.get('Nombre')?.hasError('required')) {
      return 'Debe ingresar su nombre';
    }
    return null;
  }
  getAreaMsg(){
    if (this.quejasForm.get('Observacion')?.hasError('required')) {
      return 'Debe ingresar alguna observación';
    }
    return null;
  }
  getSelectMsg(){
    if (this.quejasForm.get('Pais')?.hasError('required')) {
      return 'Tiene que seleccionar un país';
    }
    return null;
  }

}
