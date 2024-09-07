package com.example.gcvas.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@AllArgsConstructor
@NoArgsConstructor
@Table(name = BeneficiadoBeneficio.TABLE_NAME)
public class BeneficiadoBeneficio {
    
    public static final String TABLE_NAME = "BenficiadoBeneficio";

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
