import { Injectable } from '@angular/core';
import { Encuesta } from '../models/encuesta';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  private baseUrl: string = 'http://localhost:8080/api/encuestas';

  constructor(private httpClient: HttpClient) {}

  getAllEncuestas(): Observable<Encuesta[]> {
    return this.httpClient.get<Encuesta[]>(this.baseUrl);
  }

  getEncuestaById(id: number): Observable<Encuesta> {
    return this.httpClient.get<Encuesta>(`${this.baseUrl}/${id}`);
  }

  saveEncuesta(encuesta: Encuesta): Observable<Encuesta> {
    return this.httpClient.post<Encuesta>(this.baseUrl, encuesta);
  }

  updateEncuesta(id: number, encuesta: Encuesta): Observable<Encuesta> {
    return this.httpClient.put<Encuesta>(`${this.baseUrl}/${id}`, encuesta);
  }

  deleteEncuesta(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
