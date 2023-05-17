import { Component, Input, OnInit } from '@angular/core';
import { MyApiService } from '../../services/my-api.services'
import { Router } from '@angular/router';

@Component({
  selector: 'app-trabaja-con-nosotros',
  templateUrl: './trabaja-con-nosotros.component.html',
  styleUrls: ['./trabaja-con-nosotros.component.css'],
})
export class TrabajaConNosotrosComponent implements OnInit {
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
    mostrarAlertas: false,
  }
  modelo: any = {};

  constructor(private http: MyApiService, public router: Router) { }
  ngOnInit(): void { }
  cerrarAlerta() {
    this.artista.mostrarAlertas = false;
   

  }
  enviarDatosNosotros() {
    let logError = 0
    const regexTelf = /^\d{9}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexLink = /^(ftp|http|https):\/\/[^ "]+$/;

    if (this.artista.nombre === "") {
      logError++
    }
    if (this.artista.nombre_artistico === "") {
      logError++
    }
    if (this.artista.email === "" || regexEmail.test(this.artista.email)) {
      logError++
    }
    if (this.artista.telf === ""||regexTelf.test(this.artista.telf)) {
      logError++
    }
    if (this.artista.direccion_postal === "") {
      logError++
    }
    if (this.artista.descripcion_proyecto === "") {
      logError++
    }
    if (this.artista.enlaces_redes_sociales === "" || regexLink.test(this.artista.enlaces_redes_sociales)) {
      logError++
    }
    if (this.artista.experiencia_previa === "") {
      logError++
    }
    if (this.artista.requerimientos_tecnicos === "") {
      logError++
    }
    if (this.artista.disponibilidad === "") {
      logError++
    }
    if (this.artista.condiciones_participacion === "") {
      logError++
    }



    console.log(logError);
    if (logError == 0) {
      this.http.createArtista(this.artista)
        .subscribe((data) => {
          this.router.navigate(['/'])
        })
    }else{
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Hace que el desplazamiento sea suave
      });
      this.artista.mostrarAlertas = true
    }

  }
}