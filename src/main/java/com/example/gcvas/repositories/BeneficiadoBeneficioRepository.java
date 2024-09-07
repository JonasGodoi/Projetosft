package com.example.gcvas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.gcvas.models.BeneficiadoBeneficio;

@Repository
public interface  BeneficiadoBeneficioRepository extends JpaRepository<BeneficiadoBeneficio , Long> {
    
}
