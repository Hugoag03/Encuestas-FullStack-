package com.fullstack.encuestas.controller;

import com.fullstack.encuestas.entities.Encuesta;
import com.fullstack.encuestas.entities.Pregunta;
import com.fullstack.encuestas.services.EncuestaService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/encuestas")
@CrossOrigin("*")
public class EncuestaController {

    @Autowired
    private EncuestaService encuestaService;

    @GetMapping
    public List<Encuesta> listarEncuestas(){
        return encuestaService.getAllEncuestas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Encuesta> listarEncuestaPorId(@PathVariable Long id){
        Optional<Encuesta> encuestaOptional = encuestaService.getEncuestaById(id);
        return encuestaOptional.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Encuesta> guardarEncuesta(@RequestBody Encuesta encuesta){
        return ResponseEntity.status(HttpStatus.CREATED).body(encuestaService.createEncuesta(encuesta));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Encuesta> actualizarEncuesta(@PathVariable Long id, @RequestBody Encuesta encuesta){
        return ResponseEntity.ok().body(encuestaService.updateEncuesta(id, encuesta));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarEncuesta(@PathVariable Long id){
        encuestaService.deleteEncuesta(id);

        return ResponseEntity.noContent().build();
    }

}
