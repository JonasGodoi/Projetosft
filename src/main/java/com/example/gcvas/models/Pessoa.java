package com.example.gcvas.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", nullable = false, length = 100)
    @NotBlank(message = "Nome é obrigatório")
    private String username;

    @Column(name = "cpf", unique = true, nullable = false, length = 11)
    @NotBlank(message = "CPF é obrigatório")
    @Pattern(regexp = "\\d{11}", message = "CPF deve conter 11 dígitos numéricos")
    private String cpf;

    @Column(name = "endereco", unique = false, nullable = false, insertable = true, updatable =true, length = 50 )
    @NotBlank(message = "Endereço é obrigatório")
    @Size(min = 2, max = 50)
    private String endereco;

    @Column(name = "telefone", unique = true, nullable = false, insertable = true, updatable =true, length = 11 )
    @NotNull(message = "Telefone é obrigatório")
    @Size(min = 10, max = 11)
    private Long telefone;

    @Column(name = "data_nascimento", nullable = false, insertable = true, updatable = false, length = 6 )
    @NotNull(message = "Data de nascimento é obrigatória")
    @Size(min = 6, max = 6)
    private Integer dataNascimento;

}