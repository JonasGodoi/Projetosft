package com.example.gcvas.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gcvas.models.Beneficiario;
import com.example.gcvas.repositories.BeneficiarioRepository;

@Service
public class BeneficiarioService {
    
    @Autowired
    BeneficiarioRepository beneficiarioRepository;

    public Beneficiario findByid(Long id) {

       Optional<Beneficiario> obj = this.beneficiarioRepository.findById(id);

        if(obj.isPresent()){
            return obj.get();
        }
        throw new RuntimeException("Beneficiario não encontrado {id:"+id+"} ");
    }

    public Beneficiario create(Beneficiario obj){
        obj.setId(null);

       return  this.beneficiarioRepository.save(obj);
    }

    public Beneficiario update(Beneficiario newObj){

        Beneficiario obj =  this.findByid(newObj.getId());

        obj.setTelefone(newObj.getTelefone());
        obj.setEndereco(newObj.getEndereco());
  
          return this.beneficiarioRepository.save(obj);
  
      }

      public void deleteByid(Long id){
        try {
            this.beneficiarioRepository.deleteById(id);
        } catch (Exception e) {
        }
    }

}
