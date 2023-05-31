import { Component, Input, OnInit } from '@angular/core';
import { MyApiService } from '../../services/my-api.services'
import { Router } from '@angular/router';

@Component({
  selector: 'app-trabaja-con-nosotros',
  templateUrl: './trabaja-con-nosotros.component.html',
  styleUrls: ['./trabaja-con-nosotros.component.css'],
})
export class TrabajaConNosotrosComponent implements OnInit {
    // Propiedad de entrada para el objeto artista
  @Input() artista = {
    nombre: '',
    nombre_artistico: '',
    email: '',
    telf: '',
    direccion_postal: '',
    descripcion_proyecto: '',
    enlaces_redes_sociales: '',
    experiencia_previa: '',
    requerimientos_tecnicos: '',
    disponibilidad: '',
    condiciones_participacion: '',
    foto_artista: '',
  }
    // Propiedad de entrada para el objeto alerta

  @Input() alerta = {

  mostrar_alertas: false,}
  modelo: any = {};

  constructor(private http: MyApiService, public router: Router) { }
  ngOnInit(): void { }
    // Función para cerrar la alerta
  cerrarAlerta() {
    this.alerta.mostrar_alertas = false;
  }
    // Función para enviar los datos del formulario
  enviarDatosNosotros() {
    let logError = 0
    const regexTelf = /^\d{9}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexLink = /^(ftp|http|https):\/\/[^ "]+$/;
    // Verificar los campos y contar los errores

    if (this.artista.nombre === "") {
      logError++
      console.log('nombre');
    }
    if (this.artista.nombre_artistico === "") {
      logError++
      console.log('nombre_artistico');
    }
    if (this.artista.email === "" || !regexEmail.test(this.artista.email)) {
      logError++
      console.log('email');
    }
    if (this.artista.telf === ""|| !regexTelf.test(this.artista.telf)) {
      logError++                              
      console.log('telf');
    }
    if (this.artista.direccion_postal === "") {
      logError++
      console.log('direccion_postal');
    }
    if (this.artista.descripcion_proyecto === "") {
      logError++
      console.log('descripcion_proyecto');
    }
    if (this.artista.enlaces_redes_sociales === "" || !regexLink.test(this.artista.enlaces_redes_sociales)) {
      logError++
      console.log('enlaces_redes_sociales');
    }
    if (this.artista.experiencia_previa === "") {
      logError++
      console.log('experiencia_previa');
    }
    if (this.artista.requerimientos_tecnicos === "") {
      logError++
      console.log('requerimientos_tecnicos');
    }
    if (this.artista.disponibilidad === "") {
      logError++
      console.log('disponibilidad');
    }
    if (this.artista.condiciones_participacion === "") {
      logError++
      console.log('condiciones_participacion');
    }
    if (logError <=1) {
      // Si no hay errores, llamar al servicio http para crear el artista
      this.http.createArtista(this.artista)
      .subscribe((data) => {
          console.log(this.artista);
          this.router.navigate(['/'])
        })
    }else{
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Hace que el desplazamiento sea suave
      });
      this.alerta.mostrar_alertas = true
    }

  }
}