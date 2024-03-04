package com.example.application.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario,Long>, JpaSpecificationExecutor<Usuario> {
    @Query("SELECT u FROM Usuario u JOIN  FETCH u.organismo")
    List<Usuario> findAllWithOrganismo();

    Optional<Usuario> findByUsername(String username);

}
