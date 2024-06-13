package com.fullstack.encuestas.services.impl;

import com.fullstack.encuestas.entities.Encuesta;
import com.fullstack.encuestas.entities.Pregunta;
import com.fullstack.encuestas.entities.Respuesta;
import com.fullstack.encuestas.repositories.EncuestaRepository;
import com.fullstack.encuestas.repositories.PreguntaRepository;
import com.fullstack.encuestas.services.PreguntaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PreguntaServiceImpl implements PreguntaService {

    @Autowired
    private PreguntaRepository preguntaRepository;

    @Autowired
    private EncuestaRepository encuestaRepository;

    @Override
    public List<Pregunta> getAllPreguntas() {
        return preguntaRepository.findAll();
    }

    @Override
    public Optional<Pregunta> getPreguntaById(Long id) {
        return preguntaRepository.findById(id);
    }

    @Override
    public Pregunta createPregunta(Pregunta pregunta) {
        Pregunta preguntaCreated = preguntaRepository.save(pregunta);
        return preguntaCreated;
    }

    @Override
    public Pregunta updatePregunta(Long id, Pregunta pregunta) {
        if (preguntaRepository.existsById(id)){
            Pregunta preguntaAntigua = preguntaRepository.findById(id).orElse(null);
            pregunta.setId(id);
            pregunta.setEncuesta(preguntaAntigua.getEncuesta());
            return preguntaRepository.save(pregunta);
        }
        return null;
    }

    @Override
    public void deletePregunta(Long id) {
        preguntaRepository.findById(id).ifPresent(pregunta -> {
            Encuesta encuesta = pregunta.getEncuesta();
            encuesta.getPreguntas().remove(pregunta);

            preguntaRepository.deleteById(id);
            encuestaRepository.save(encuesta);
        });
    }

    @Override
    public List<Pregunta> findByEncuestaId(Long id) {
        if (encuestaRepository.existsById(id)){
            return preguntaRepository.findByEncuestaId(id);
        }
        return null;
    }


    @Override
    public Pregunta agregarPreguntaAEncuesta(Long id, Pregunta pregunta) {
        Optional<Encuesta> encuestaOptional = encuestaRepository.findById(id);
        if (encuestaOptional.isPresent()) {
            Encuesta encuesta = encuestaOptional.get();
            pregunta.setEncuesta(encuesta); // Establecer la encuesta en la pregunta
            Pregunta preguntaGuardada = preguntaRepository.save(pregunta); // Guardar la pregunta
            encuesta.getPreguntas().add(preguntaGuardada); // Agregar la pregunta guardada a la lista de preguntas de la encuesta
            encuestaRepository.save(encuesta); // Guardar la encuesta con la nueva relación
            return preguntaGuardada; // Devolver la pregunta guardada
        }
        return null;
    }



}
