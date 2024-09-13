package com.example.gcvas.models;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import com.example.gcvas.models.Enums.TipoUser;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
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

    @ElementCollection(fetch = FetchType.EAGER)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @CollectionTable(name = "user_profile")
    @Column(name = "profile", nullable = false)
    private Set<Integer> profiles = new HashSet<>();

     public Set<TipoUser> getProfiles() {
        return this.profiles.stream().map(x -> TipoUser.toEnum(x)).collect(Collectors.toSet());
    }

    public void addProfile(TipoUser tipoUser) {
        this.profiles.add(tipoUser.getCode());
    }

}
