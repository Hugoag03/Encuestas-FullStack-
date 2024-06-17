import { Component } from '@angular/core';
import { RespuestaService } from '../../../services/respuesta.service';
import { Respuesta } from '../../../models/respuesta';
import { NgFor } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Pregunta } from '../../../models/pregunta';

@Component({
  selector: 'app-pregunta-respuestas-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './pregunta-respuestas-list.component.html',
  styleUrl: './pregunta-respuestas-list.component.css'
})
export class PreguntaRespuestasListComponent {

  respuestas?:Respuesta[];
  preguntaId?:number;

  constructor(private respuestaService:RespuestaService, private route:ActivatedRoute){}

  ngOnInit():void{
    this.route.paramMap.subscribe(params => {
      this.preguntaId = Number(params.get('id'));
    })
    this.cargarRespuestasDeLaPregunta();
  }

  cargarRespuestasDeLaPregunta():void{
    if (this.preguntaId) {
      this.respuestaService.getRespuestaByPreguntaId(this.preguntaId).subscribe(
        (respuesta: Respuesta[]) => {
          this.respuestas = respuesta;
        },
        error => {
          console.error('Error al cargar preguntas de la encuesta:', error);
        }
      );
    }
  }

  eliminarRespuesta(id:number):void{
    this.respuestaService.deleteRespuesta(id).subscribe(() => {
      this.cargarRespuestasDeLaPregunta();
    
    });
  }
}
