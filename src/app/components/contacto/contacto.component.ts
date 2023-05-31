import { Component, Input, OnInit } from '@angular/core';
import { MyApiService } from '../../services/my-api.services'
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
    // Propiedad de entrada para el objeto contacto

  @Input() contacto = {
    nombre: '',
    telf: '',
    email: '',
    asunto: '',
    mensaje: '',

  }  
  // Propiedad de entrada para el objeto alerta

  @Input() alerta = {
   
    mostrarAlertas:false,

  }
  modelo: any = {};

  constructor(private http: MyApiService, public router: Router) { }
  ngOnInit(): void { }
  // Función para cerrar la alerta

  cerrarAlerta() {
    this.alerta.mostrarAlertas = false;
  

  }
  
  // Verificar los campos y contar los errores
  enviarDatosContacto() {
    let logError = 0
    const regexTelf = /^\d{9}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if ( this.contacto.nombre === "") {
      logError++
    }
    if (this.contacto.telf==="" || !regexTelf.test(this.contacto.telf)) {
      logError++
    } 
    if ( this.contacto.email === "" || !regexEmail.test(this.contacto.email)) {
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
      this.http.createContacto(this.contacto)
        .subscribe((data) => {
          this.router.navigate(['/'])
        })
    }else{
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Hace que el desplazamiento sea suave
      });
      this.alerta.mostrarAlertas =true;

    }

  }
}
