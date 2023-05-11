import { Component, Input, OnInit } from '@angular/core';
import { MyApiService } from '../../services/my-api.services'
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  @Input() contacto = {
    nombre: '',
    telf: '',
    email: '',
    asunto: '', 
    mensaje: '',
  }
  modelo: any = {};

  constructor(private http: MyApiService, public router: Router) {}
  ngOnInit(): void {}

  enviarDatosContacto() {
    this.http.createContacto(this.contacto)
    .subscribe((data) => {
      this.router.navigate(['/'])
    })
    
    
  }
}
