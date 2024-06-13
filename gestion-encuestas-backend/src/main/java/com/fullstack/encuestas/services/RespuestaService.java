package com.fullstack.encuestas.services;

import com.fullstack.encuestas.entities.Pregunta;
import com.fullstack.encuestas.entities.Respuesta;

import java.util.List;
import java.util.Optional;

public interface RespuestaService {

    List<Respuesta> getAllRespuestas();

    Optional<Respuesta> getRespuestaById(Long id);

    Respuesta createRespuesta(Respuesta respuesta);

    Respuesta updateRespuesta(Long id, Respuesta respuesta);

    void deleteRespuesta(Long id);

    List<Respuesta> findByPreguntaId(Long id);

    Respuesta agregarRespuestaAPregunta(Long id, Respuesta respuesta);
}
