import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MyApiService {
  private apiUrl = 'http://localhost/api'; // La URL de tu API

  constructor(private http: HttpClient) { }

  getDataArtista(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/artista_list/`);
  }
  createArtista(data: any) {
    return this.http.post<any>(`${this.apiUrl}/artista_detail/`, data)
  }
  //No hace falta por que no llamamos ninguna info de contacto
  // getDataContacto(): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/contacto_list/`);
  // }
  createContacto(data: any) {
    return this.http.post<any>(`${this.apiUrl}/contacto_detail/`, data)
  }
}
