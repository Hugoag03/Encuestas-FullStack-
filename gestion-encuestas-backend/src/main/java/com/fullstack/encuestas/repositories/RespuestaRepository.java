package com.fullstack.encuestas.repositories;

import com.fullstack.encuestas.entities.Respuesta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RespuestaRepository extends JpaRepository<Respuesta, Long> {

    List<Respuesta>findByPreguntaId(Long id);
}
