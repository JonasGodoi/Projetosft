package com.example.gcvas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.example.gcvas.models.Beneficios;


public interface BeneficiosRepository extends JpaRepository<Beneficios, Long> {
 
     @Transactional(readOnly = true)
    Beneficios findByUsername(String username);


}
