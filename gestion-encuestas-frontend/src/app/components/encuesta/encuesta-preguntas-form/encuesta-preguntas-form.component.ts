import { Component } from '@angular/core';
import { PreguntaService } from '../../../services/pregunta.service';
import { Pregunta } from '../../../models/pregunta';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-encuesta-preguntas-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './encuesta-preguntas-form.component.html',
  styleUrls: ['./encuesta-preguntas-form.component.css']
})
export class EncuestaPreguntasFormComponent {

  pregunta: Pregunta = new Pregunta();
  encuestaId?: number;
  preguntaId?: number;

  constructor(private preguntaService: PreguntaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Capturar el ID de la encuesta desde la ruta
    this.route.paramMap.subscribe(params => {
      this.encuestaId = Number(params.get('id'));
      this.preguntaId = Number(params.get('preguntaId'));
    });

    if (this.preguntaId) {
      this.preguntaService.getPreguntaById(this.preguntaId).subscribe(pregunta => {
        this.pregunta = pregunta;
      });
    }
  }

  onSavePregunta(): void {
    if (this.pregunta.id) {
      this.preguntaService.updatePregunta(this.pregunta.id, this.pregunta).subscribe(updatedPregunta => {
        this.router.navigate([`/encuestas/${this.encuestaId}/preguntas`]);
      });
    } else {
      this.preguntaService.savePreguntaToEncuesta(this.encuestaId!, this.pregunta).subscribe(savedEncuesta => {
        this.router.navigate([`/encuestas/${this.encuestaId}/preguntas`]);
      });
    }
  }
}
