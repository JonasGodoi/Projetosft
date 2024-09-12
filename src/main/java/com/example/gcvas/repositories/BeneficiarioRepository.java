package com.example.gcvas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.example.gcvas.models.Beneficiario;

public interface BeneficiarioRepository  extends JpaRepository<Beneficiario, Long> {
 
     @Transactional(readOnly = true)
    Beneficiario findByUsername(String username);

}
