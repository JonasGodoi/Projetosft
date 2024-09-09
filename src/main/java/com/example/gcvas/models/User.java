package com.example.gcvas.models;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@Entity
@Table(name = User.TABLE_NAME)
@AllArgsConstructor
@Data
public class User {
    public static final String TABLE_NAME = "user";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    protected Long id;

    @Column(name = "username", unique = true, nullable = false, insertable = true, updatable =false, length = 50 )
    @NotBlank
    @Size(min = 2, max = 50)
    private String username;

    @Column(name = "password", unique = false, nullable = false, insertable = true, updatable =true, length = 50)
    @NotBlank
    @Size(min = 2, max = 50)
    @JsonProperty(access = Access.WRITE_ONLY)
    private String password;

    @Column(name = "requisições", unique = false, nullable = false, insertable = true, updatable =true, length = 50)
    @NotBlank
    @Size
    private String requisicoes;

    @Column(name = "tipo", unique = false, nullable = false, insertable = true, updatable = false)
    @NotNull
    @Size
    private Integer tipo;

}
