import { Component, Input, OnInit } from '@angular/core';
import { MyApiService } from '../../services/my-api.services'
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  @Input() contacto = {
    nombre: '',
    telf: '',
    email: '',
    asunto: '',
    mensaje: '',
  }
  modelo: any = {};

  constructor(private http: MyApiService, public router: Router) { }
  ngOnInit(): void { }

  enviarDatosContacto() {
    let logError = 0
    const regexTelf = /^\d{9}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    console.log(this.contacto.nombre);
    

    if ( this.contacto.nombre === "") {
      logError++
    }
    if (this.contacto.telf==="" ||regexTelf.test(this.contacto.telf)) {
      logError++
    } 
    if ( this.contacto.email === "" || regexEmail.test(this.contacto.email)) {
      logError++
    } 
    if (this.contacto.asunto === "") {
      logError++
    } 
    if (this.contacto.mensaje === "") {
      logError++
    }
    console.log(logError);
    
    if (logError == 0) {
      console.log("Dins");

      this.http.createContacto(this.contacto)
        .subscribe((data) => {
          this.router.navigate(['/'])
        })
    }
     //alert div

  }




}
