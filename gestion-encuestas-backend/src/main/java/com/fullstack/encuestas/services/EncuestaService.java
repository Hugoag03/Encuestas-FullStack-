package com.fullstack.encuestas.services;

import com.fullstack.encuestas.entities.Encuesta;
import com.fullstack.encuestas.entities.Pregunta;

import java.util.List;
import java.util.Optional;

public interface EncuestaService {

    List<Encuesta> getAllEncuestas();
    Optional<Encuesta> getEncuestaById(Long id);

    Encuesta createEncuesta(Encuesta encuesta);

    Encuesta updateEncuesta(Long id, Encuesta encuesta);

    void deleteEncuesta(Long id);

}
