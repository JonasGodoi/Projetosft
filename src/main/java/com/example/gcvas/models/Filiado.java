package com.example.gcvas.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Entity
@Data
@Table(name = Filiado.TABLE_NAME)
@AllArgsConstructor
public class Filiado extends Pessoa {

    public static final String TABLE_NAME = "Filiado";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CodF", nullable = false, unique = true, length = 10)
    @Size(min = 10)
    private Long codF;

    @OneToOne
    @JoinColumn(name = "beneficiario_cod_nis", nullable = false)
    private Beneficiario beneficiario;
}
