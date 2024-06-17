import { Component } from '@angular/core';
import { EncuestaService } from '../../../services/encuesta.service';
import { PreguntaService } from '../../../services/pregunta.service';
import { Encuesta } from '../../../models/encuesta';
import { Pregunta } from '../../../models/pregunta';
import { NgFor } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-encuesta-preguntas-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './encuesta-preguntas-list.component.html',
  styleUrl: './encuesta-preguntas-list.component.css'
})
export class EncuestaPreguntasListComponent {

  preguntas?:Pregunta[];
  encuestaId?: number;
  constructor(private route: ActivatedRoute, private preguntaService: PreguntaService){}

 
  ngOnInit(): void {
    // Capturar el ID de la encuesta desde la ruta
    this.route.paramMap.subscribe(params => {
      this.encuestaId = Number(params.get('id'));
      this.cargarPreguntasDeLaEncuesta();
    });
  }


  cargarPreguntasDeLaEncuesta(): void {
    if (this.encuestaId) {
      this.preguntaService.getPreguntaByEncuestaId(this.encuestaId).subscribe(
        (preguntas: Pregunta[]) => {
          this.preguntas = preguntas;
        },
        error => {
          console.error('Error al cargar preguntas de la encuesta:', error);
        }
      );
    }
  }

  eliminarPregunta(id:number):void{
    this.preguntaService.deletePregunta(id).subscribe(() => {
      this.cargarPreguntasDeLaEncuesta();
    })
  }

}
