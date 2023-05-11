import { Component,OnInit  } from '@angular/core';
import { MyApiService } from 'src/app/services/my-api.services';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  data: any;

  constructor(private myApiService: MyApiService) { }

  ngOnInit(): void {
    this.myApiService.getDataArtista().subscribe(response => {
      this.data = response;
    });
  }
}


