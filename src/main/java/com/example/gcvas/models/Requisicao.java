package com.example.gcvas.models;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = Requisicao.TABLE_NAME)
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Requisicao {
    
    public static final String TABLE_NAME = "Requisicao";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CodR", nullable = false, unique = true, length = 10)
    @Size(min = 10)
    private Long id;

    @Column(name = "DataHora", unique = false, nullable = false, insertable = true, updatable =true, length = 50 )
    @NotNull
    @Size
    private Date data_hora;

    @Column(name = "Descricao", unique = false, nullable = false, insertable = true, updatable =true, length = 50 )
    @NotBlank
    @Size(min = 4, max = 50)
    private String desc_req;

    @Column(name = "Status", unique = false, nullable = false, insertable = true, updatable =true, length = 50 )
    @NotBlank
    @Size(min = 4, max = 50)
    private char status;

    @Column(name = "Beneficiario", unique = false, nullable = false, insertable = true, updatable =false, length = 50 )
    @NotNull
    @Size
    @ManyToOne
    private Beneficiario beneficiario;

    @Column(name = "Beneficios", unique = false, nullable = false, insertable = true, updatable =false, length = 50 )
    @NotNull
    @Size
    @OneToMany
    private Beneficios beneficios;

}
