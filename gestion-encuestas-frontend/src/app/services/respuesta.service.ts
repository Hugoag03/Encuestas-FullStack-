import { Injectable } from '@angular/core';
import { Respuesta } from '../models/respuesta';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RespuestaService {

  private baseUrl:string='http://localhost:8080/api/respuestas';

  constructor(private httpClient:HttpClient) { }

  getAllRespuestas():Observable<Respuesta[]>{
    return this.httpClient.get<Respuesta[]>(this.baseUrl);
  }

  getRespuestaById(id:number):Observable<Respuesta>{
    return this.httpClient.get<Respuesta>(`${this.baseUrl}/${id}`);
  }

  updateRespuesta(id:number, Respuesta:Respuesta):Observable<Respuesta>{
    return this.httpClient.put<Respuesta>(`${this.baseUrl}/${id}`, Respuesta);
  }

  deleteRespuesta(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  saveRespuestaToPregunta(id: number, respuesta: Respuesta): Observable<Respuesta> {
    return this.httpClient.post<Respuesta>(`${this.baseUrl}/${id}`, respuesta);
  }

  getRespuestaByPreguntaId(id:number):Observable<Respuesta[]>{
    return this.httpClient.get<Respuesta[]>(`${this.baseUrl}/${id}/pregunta`);
  }
}
