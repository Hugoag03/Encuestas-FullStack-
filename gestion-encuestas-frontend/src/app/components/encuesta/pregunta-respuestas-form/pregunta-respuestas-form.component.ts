import { Component } from '@angular/core';
import { RespuestaService } from '../../../services/respuesta.service';
import { Respuesta } from '../../../models/respuesta';
import { Pregunta } from '../../../models/pregunta';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregunta-respuestas-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pregunta-respuestas-form.component.html',
  styleUrl: './pregunta-respuestas-form.component.css'
})
export class PreguntaRespuestasFormComponent {

  respuesta: Respuesta = new Respuesta();
  preguntaId?:number;
  respuestaId?:number;
  constructor(private respuestaService:RespuestaService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    // Capturar el ID de la encuesta desde la ruta
    this.route.paramMap.subscribe(params => {
      this.preguntaId = Number(params.get('id'));
      this.respuestaId = Number(params.get('respuestaId'));
    });

    if (this.respuestaId) {
      this.respuestaService.getRespuestaById(this.respuestaId).subscribe(respuesta => {
        this.respuesta = respuesta;
      });
    }
  }
  onSaveRespuesta():void{
    if(this.respuestaId){
      this.respuestaService.updateRespuesta(this.respuestaId, this.respuesta).subscribe(updatedRespuesta => {
        this.router.navigate([`/pregunta/${this.preguntaId}/respuestas`]);
      })
    }else{
      this.respuestaService.saveRespuestaToPregunta(this.preguntaId!, this.respuesta).subscribe(savedRespuesta => {
        this.router.navigate([`/pregunta/${this.preguntaId}/respuestas`]);
      })
    }
  }
}
