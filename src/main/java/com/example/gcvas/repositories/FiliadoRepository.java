package com.example.gcvas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.gcvas.models.Filiado;

@Repository
public interface FiliadoRepository extends JpaRepository<Filiado, Long> {
    
    @Transactional(readOnly = true)
    Filiado findByUsername(String username);

}
