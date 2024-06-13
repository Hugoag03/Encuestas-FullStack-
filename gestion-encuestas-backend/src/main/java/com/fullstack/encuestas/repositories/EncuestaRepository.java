package com.fullstack.encuestas.repositories;

import com.fullstack.encuestas.entities.Encuesta;
import com.fullstack.encuestas.entities.Pregunta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EncuestaRepository extends JpaRepository<Encuesta, Long> {

}
