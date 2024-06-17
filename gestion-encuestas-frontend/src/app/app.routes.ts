import { Routes } from '@angular/router';
import { EncuestaListComponent } from './components/encuesta/encuesta-list/encuesta-list.component';
import { EncuestaFormComponent } from './components/encuesta/encuesta-form/encuesta-form.component';
import { EncuestaPreguntasListComponent } from './components/encuesta/encuesta-preguntas-list/encuesta-preguntas-list.component';
import { EncuestaPreguntasFormComponent } from './components/encuesta/encuesta-preguntas-form/encuesta-preguntas-form.component';
import { PreguntaRespuestasListComponent } from './components/encuesta/pregunta-respuestas-list/pregunta-respuestas-list.component';
import { PreguntaRespuestasFormComponent } from './components/encuesta/pregunta-respuestas-form/pregunta-respuestas-form.component';

export const routes: Routes = [

   
    {path:'', redirectTo:'encuestas', pathMatch:'full'},
    {path:'encuestas', component:EncuestaListComponent},
    {path:'encuestas/new', component:EncuestaFormComponent},
    {path:'encuestas/:id/edit', component:EncuestaFormComponent},

    {path:'encuestas/:id/preguntas', component:EncuestaPreguntasListComponent},
    {path:'encuestas/:id/preguntas/new', component:EncuestaPreguntasFormComponent},
    {path:'encuestas/:id/preguntas/:preguntaId/edit', component:EncuestaPreguntasFormComponent},

    {path:'pregunta/:id/respuestas', component:PreguntaRespuestasListComponent},
    {path:'pregunta/:id/respuestas/new', component:PreguntaRespuestasFormComponent},
    {path:'pregunta/:id/respuestas/:respuestaId/edit', component:PreguntaRespuestasFormComponent},


];
