package com.fullstack.encuestas.services;

import com.fullstack.encuestas.entities.Pregunta;
import com.fullstack.encuestas.entities.Respuesta;

import java.util.List;
import java.util.Optional;

public interface PreguntaService {

    List<Pregunta> getAllPreguntas();

    Optional<Pregunta> getPreguntaById(Long id);

    Pregunta createPregunta(Pregunta pregunta);

    Pregunta updatePregunta(Long id, Pregunta pregunta);

    void deletePregunta(Long id);

    List<Pregunta> findByEncuestaId(Long id);

    Pregunta agregarPreguntaAEncuesta(Long id, Pregunta pregunta);
}
