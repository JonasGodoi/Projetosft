package com.example.gcvas.models;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Table(name = Lista.TABLE_NAME)
@AllArgsConstructor
@Data

public class Lista {
    public static final String TABLE_NAME = "Lista";
 
@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "date", unique = false, nullable = false, insertable = true, updatable =true)
    @NotNull
    @NotEmpty
    @FutureOrPresent
    private Date data;
    
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false )
    private User user;

}