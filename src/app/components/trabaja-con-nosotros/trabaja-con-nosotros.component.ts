import { Component, Input, OnInit } from '@angular/core';
import { MyApiService } from '../../services/my-api.services'
import { Router } from '@angular/router';

@Component({
  selector: 'app-trabaja-con-nosotros',
  templateUrl: './trabaja-con-nosotros.component.html',
  styleUrls: ['./trabaja-con-nosotros.component.css'],
})
export class TrabajaConNosotrosComponent implements OnInit  {
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
  modelo: any = {};

  constructor(private http: MyApiService, public router: Router) {}
  ngOnInit(): void {}

  enviarDatos() {
    this.http.createArtista(this.artista)
    .subscribe((data) => {
      this.router.navigate(['/'])
    })
    // this.http.post('http://localhost/api/artista_detail/', this.modelo)
    console.log("holi",this.artista);
    
  }
}