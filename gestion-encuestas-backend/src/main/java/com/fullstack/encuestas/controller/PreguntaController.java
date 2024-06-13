package com.fullstack.encuestas.controller;

import com.fullstack.encuestas.entities.Pregunta;
import com.fullstack.encuestas.entities.Respuesta;
import com.fullstack.encuestas.services.PreguntaService;
import com.fullstack.encuestas.services.RespuestaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/preguntas")
@CrossOrigin("*")
public class PreguntaController {

    @Autowired
    private PreguntaService preguntaService;

    @GetMapping
    public List<Pregunta> listarPreguntas(){
        return preguntaService.getAllPreguntas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pregunta> listarPreguntaPorId(@PathVariable Long id){
        Optional<Pregunta> pregunta = preguntaService.getPreguntaById(id);
        return pregunta.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Pregunta> crearPregunta(@RequestBody Pregunta pregunta){
        Pregunta preguntaCreated = preguntaService.createPregunta(pregunta);
        return ResponseEntity.status(HttpStatus.CREATED).body(preguntaCreated);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pregunta> actualizarPregunta(@PathVariable Long id, @RequestBody Pregunta pregunta){
        return ResponseEntity.ok().body(preguntaService.updatePregunta(id, pregunta));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarPregunta(@PathVariable Long id){
        preguntaService.deletePregunta(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}/encuesta")
    public ResponseEntity<List<Pregunta>> listarPreguntasPorEncuestaId(@PathVariable Long id){
        List<Pregunta> preguntas = preguntaService.findByEncuestaId(id);
        return ResponseEntity.ok().body(preguntas);
    }

    @PostMapping("/{id}/agregar")
    public ResponseEntity<Pregunta> agregarPreguntaAEncuesta(@PathVariable Long id, @RequestBody Pregunta pregunta){
        return ResponseEntity.status(HttpStatus.CREATED).body(preguntaService.agregarPreguntaAEncuesta(id, pregunta));
    }
}
