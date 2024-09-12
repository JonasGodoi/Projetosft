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
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = Acao.TABLE_NAME)
@AllArgsConstructor
@NoArgsConstructor
public class Acao {
    
    public static final String TABLE_NAME = "Ação";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CodA", nullable = false, unique = true, length = 10)
    @Size(min = 10)
    private Long id;

    @Column(name = "DataHora", unique = false, nullable = false, insertable = true, updatable =true, length = 50 )
    @NotNull
    @Size
    private Date data_hora;

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
