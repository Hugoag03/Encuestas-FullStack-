package com.fullstack.encuestas.services.impl;

import com.fullstack.encuestas.entities.Encuesta;
import com.fullstack.encuestas.entities.Pregunta;
import com.fullstack.encuestas.entities.Respuesta;
import com.fullstack.encuestas.repositories.PreguntaRepository;
import com.fullstack.encuestas.repositories.RespuestaRepository;
import com.fullstack.encuestas.services.RespuestaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RespuestaServiceImpl implements RespuestaService {

    @Autowired
    private RespuestaRepository respuestaRepository;

    @Autowired
    private PreguntaRepository preguntaRepository;

    @Override
    public List<Respuesta> getAllRespuestas() {
        return respuestaRepository.findAll();
    }

    @Override
    public Optional<Respuesta> getRespuestaById(Long id) {
        return respuestaRepository.findById(id);
    }

    @Override
    public Respuesta createRespuesta(Respuesta respuesta) {
        Respuesta respuestaCreated = respuestaRepository.save(respuesta);
        return respuestaCreated;
    }

    @Override
    public Respuesta updateRespuesta(Long id, Respuesta respuesta) {
        if (respuestaRepository.existsById(id)){
            Respuesta respuestaAntigua = respuestaRepository.findById(id).orElse(null);
            respuesta.setId(id);
            respuesta.setPregunta(respuestaAntigua.getPregunta());
            return respuestaRepository.save(respuesta);
        }
        return null;
    }

    @Override
    public void deleteRespuesta(Long id) {
        Respuesta respuesta = respuestaRepository.findById(id).orElse(null);
        Pregunta pregunta = respuesta.getPregunta();
        pregunta.getRespuestas().remove(respuesta);

        respuestaRepository.deleteById(id);
        preguntaRepository.save(pregunta);
    }

    @Override
    public List<Respuesta> findByPreguntaId(Long id) {
        if (preguntaRepository.existsById(id)){
            return respuestaRepository.findByPreguntaId(id);
        }
        return null;
    }

    @Override
    public Respuesta agregarRespuestaAPregunta(Long id, Respuesta respuesta) {
        Optional<Pregunta> preguntaOptional = preguntaRepository.findById(id);
        if (preguntaOptional.isPresent()) {
            Pregunta pregunta = preguntaOptional.get();
            respuesta.setPregunta(pregunta); // Establecer la encuesta en la pregunta
            Respuesta respuestaGuardada = respuestaRepository.save(respuesta); // Guardar la pregunta
            pregunta.getRespuestas().add(respuestaGuardada); // Agregar la pregunta guardada a la lista de preguntas de la encuesta
            preguntaRepository.save(pregunta); // Guardar la encuesta con la nueva relación
            return respuestaGuardada; // Devolver la pregunta guardada
        }
        return null;
    }
}
