import { Encuesta } from "./encuesta";
import { Respuesta } from "./respuesta";

export class Pregunta {

    id?:number;

    contenido?:string;
    
    respuestas?:Respuesta[];

    encuesta?=Encuesta;

}
