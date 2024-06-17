package com.fullstack.encuestas.services.impl;

import com.fullstack.encuestas.entities.Encuesta;
import com.fullstack.encuestas.entities.Pregunta;
import com.fullstack.encuestas.repositories.EncuestaRepository;
import com.fullstack.encuestas.services.EncuestaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EncuestaServiceImpl implements EncuestaService {

    @Autowired
    private EncuestaRepository encuestaRepository;

    @Override
    public List<Encuesta> getAllEncuestas() {
        return encuestaRepository.findAll();
    }

    @Override
    public Optional<Encuesta> getEncuestaById(Long id) {
        return encuestaRepository.findById(id);
    }

    @Override
    public Encuesta createEncuesta(Encuesta encuesta) {
        Encuesta encuestaCreated = encuestaRepository.save(encuesta);
        return encuestaCreated;
    }

    @Override
    public Encuesta updateEncuesta(Long id, Encuesta encuesta) {
        if (encuestaRepository.existsById(id)){
            encuesta.setId(id);
            encuesta.setPreguntas(encuestaRepository.findById(id).get().getPreguntas());
            return encuestaRepository.save(encuesta);
        }
        return null;
    }

    @Override
    public void deleteEncuesta(Long id) {
        encuestaRepository.deleteById(id);
    }

}
