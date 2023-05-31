import { Component,OnInit  } from '@angular/core';
import { MyApiService } from 'src/app/services/my-api.services';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  data: any;
  nombreBusqueda: any;
  dataTemporal: any;

  constructor(private myApiService: MyApiService) { }

  ngOnInit(): void {
    this.myApiService.getDataArtista().subscribe(response => {
      this.data = response;
      this.dataTemporal = this.data;

    });
  }
  // Función para filtrar los artistas
  filtrarArtistas(): void {
  // Filtrar la data basado en el nombre del artista
    this.dataTemporal = this.data.filter((item: any) => item.nombre_artistico.toLowerCase().includes(this.nombreBusqueda.toLowerCase()));
    console.log(this.nombreBusqueda);
  }
  
}


