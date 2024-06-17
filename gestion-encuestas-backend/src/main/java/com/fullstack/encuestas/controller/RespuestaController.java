package com.fullstack.encuestas.controller;

import com.fullstack.encuestas.entities.Pregunta;
import com.fullstack.encuestas.entities.Respuesta;
import com.fullstack.encuestas.services.RespuestaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/respuestas")
@CrossOrigin("*")
public class RespuestaController {

    @Autowired
    private RespuestaService respuestaService;

    @GetMapping
    public List<Respuesta> listarRespuestas(){
        return respuestaService.getAllRespuestas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Respuesta> listarRespuestaPorPreguntaId(@PathVariable Long id){
        Optional<Respuesta> respuesta = respuestaService.getRespuestaById(id);
        return respuesta.map(value -> ResponseEntity.ok().body(value))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Respuesta> actualizarRespuesta(@PathVariable Long id, @RequestBody Respuesta respuesta){
        return ResponseEntity.ok().body(respuestaService.updateRespuesta(id, respuesta));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarRespuesta(@PathVariable Long id){
        respuestaService.deleteRespuesta(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}/pregunta")
    public ResponseEntity<List<Respuesta>> listarRespuestasPorPreguntaId(@PathVariable Long id){
        List<Respuesta> respuestas = respuestaService.findByPreguntaId(id);
        return ResponseEntity.ok().body(respuestas);
    }

    @PostMapping("/{id}")
    public ResponseEntity<Respuesta> agregarRespuestaAPregunta(@PathVariable Long id, @RequestBody Respuesta respuesta){
        return ResponseEntity.status(HttpStatus.CREATED).body(respuestaService.agregarRespuestaAPregunta(id, respuesta));
    }
}
