package com.example.gcvas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.example.gcvas.models.Acao;



public interface AcaoRepository extends JpaRepository<Acao, Long> {
    
     @Transactional(readOnly = true)
   Acao findByUsername(String username);

}
