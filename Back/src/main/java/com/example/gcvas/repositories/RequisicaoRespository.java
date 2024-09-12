package com.example.gcvas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;


import com.example.gcvas.models.Requisicao;

public interface RequisicaoRespository extends JpaRepository<Requisicao, Long> {
    
     @Transactional(readOnly = true)
    Requisicao findByUsername(String username);

}
