import { Component } from '@angular/core';
import { Encuesta } from '../../../models/encuesta';
import { EncuestaService } from '../../../services/encuesta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-encuesta-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './encuesta-form.component.html',
  styleUrl: './encuesta-form.component.css'
})
export class EncuestaFormComponent {

  encuesta:Encuesta = new Encuesta();

  constructor(private encuestaService:EncuestaService, private router:Router, private route:ActivatedRoute){}

  ngOnInit():void{
    const encuestaId = +this.route.snapshot.paramMap.get('id')!;
    if(encuestaId){
      this.encuestaService.getEncuestaById(encuestaId).subscribe(encuesta => {
        this.encuesta = encuesta;
      })
    }
  }

  onSaveTarea():void{
    if(this.encuesta.id != null){
      this.encuestaService.updateEncuesta(this.encuesta.id, this.encuesta).subscribe(updatedEncuesta => {
        this.router.navigate(['/encuestas']);
      })
    }else{
      this.encuestaService.saveEncuesta(this.encuesta).subscribe(savedEncuesta => {
        this.router.navigate(['/encuestas']);
      })
    }
  }
}
