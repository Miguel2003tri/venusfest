import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MyApiService {
  private apiUrl = 'http://localhost/api'; // La URL de tu API

  constructor(private http: HttpClient) { }
  // Obtener datos del artista
  getDataArtista(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/artista_list/`);
  }
  // Crear un artista
  createArtista(data: any) {
    return this.http.post<any>(`${this.apiUrl}/artista_detail/`, data)
  }
  // Crear un contacto
  createContacto(data: any) {
    return this.http.post<any>(`${this.apiUrl}/contacto_detail/`, data)
  }
}
