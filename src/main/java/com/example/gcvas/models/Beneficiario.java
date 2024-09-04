package com.example.gcvas.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Entity
@Data
@Table(name = Beneficiario.TABLE_NAME)
@AllArgsConstructor

public class Beneficiario extends Pessoa {
    public static final String TABLE_NAME = "Benficiario";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cod_nis", nullable = false, unique = true, length = 11)
    @Size(min = 11, max = 11)
    @NotNull(message = "O número de Nis é necessário")
    private Integer codNis;

    @OneToOne(mappedBy = "beneficiario")
    private Filiado filiado;

}
