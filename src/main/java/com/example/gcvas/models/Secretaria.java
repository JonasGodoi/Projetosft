package com.example.gcvas.models;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@AllArgsConstructor
@Data
public class Secretaria extends User {
    
    public void encaminharPessoa(Pessoa pessoa, Setor setor) {
        if (pessoa instanceof Beneficiario) {
            // Se for um Beneficiario, só o número de NIS é necessário
            Beneficiario beneficiario = (Beneficiario) pessoa;
            System.out.println("Encaminhando Beneficiário com NIS: " + beneficiario.getCodNis() + " para o setor: " + setor.getNome());
            // Lógica para encaminhar o beneficiário para o setor
        } else {
            // Se for uma pessoa não cadastrada, coleta os dados
            System.out.println("Pessoa não cadastrada. Coletando dados:");
            System.out.println("Nome: " + pessoa.getUsername());
            System.out.println("Endereço: " + pessoa.getEndereco());
            System.out.println("Telefone: " + pessoa.getTelefone());
            System.out.println("CPF: " + pessoa.getCpf());
            System.out.println("Encaminhando pessoa para o setor: " + setor.getNome());
            // Lógica para encaminhar a pessoa não cadastrada para o setor
        }
        pessoas.add(pessoa);
    }

}
