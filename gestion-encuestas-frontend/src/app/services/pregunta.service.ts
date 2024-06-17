import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pregunta } from '../models/pregunta';

@Injectable({
  providedIn: 'root'
})

export class PreguntaService {

  private baseUrl:string='http://localhost:8080/api/preguntas';

  constructor(private httpClient:HttpClient) { }

  getAllPreguntas():Observable<Pregunta[]>{
    return this.httpClient.get<Pregunta[]>(this.baseUrl);
  }

  getPreguntaById(id:number):Observable<Pregunta>{
    return this.httpClient.get<Pregunta>(`${this.baseUrl}/${id}`);
  }

  updatePregunta(id:number, pregunta:Pregunta):Observable<Pregunta>{
    return this.httpClient.put<Pregunta>(`${this.baseUrl}/${id}`, pregunta);
  }

  deletePregunta(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  savePreguntaToEncuesta(id: number, pregunta: Pregunta): Observable<Pregunta> {
    return this.httpClient.post<Pregunta>(`${this.baseUrl}/${id}`, pregunta);
  }

  getPreguntaByEncuestaId(id:number):Observable<Pregunta[]>{
    return this.httpClient.get<Pregunta[]>(`${this.baseUrl}/${id}/encuesta`);
  }
}
