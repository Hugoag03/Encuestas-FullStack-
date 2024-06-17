import { Component } from '@angular/core';
import { EncuestaService } from '../../../services/encuesta.service';
import { Encuesta } from '../../../models/encuesta';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-encuesta-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './encuesta-list.component.html',
  styleUrl: './encuesta-list.component.css'
})
export class EncuestaListComponent {

  encuestas?:Encuesta[];

  constructor(private encuestaService:EncuestaService){}

  ngOnInit():void{
    this.cargarEncuestas();
  }

  cargarEncuestas():void{
    this.encuestaService.getAllEncuestas().subscribe(encuestas => {
      this.encuestas = encuestas;
    })
  }

  eliminarEncuesta(id:number):void{
    this.encuestaService.deleteEncuesta(id).subscribe(() => {
      this.cargarEncuestas();
    })
  }
}
