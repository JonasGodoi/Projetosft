package com.example.gcvas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gcvas.models.Beneficios;
import com.example.gcvas.repositories.BeneficiosRepository;

@Service
public class BeneficiosService {
    
    @Autowired
    BeneficiosRepository beneficiosRepository;

    public Beneficios findById(Long id) {

       java.util.Optional<Beneficios> obj = this.beneficiosRepository.findById(id);

        if(obj.isPresent()){
            return obj.get();
        }
        throw new RuntimeException("Beneficio não encontrado {id:"+id+"} ");
    }

    public Beneficios create(Beneficios obj){
        obj.setId(null);

       return  this.beneficiosRepository.save(obj);
    }

    public Beneficios update(Beneficios newObj){

        Beneficios obj =  this.findById(newObj.getId());
  
        obj.setDesc_beneficio(newObj.getDesc_beneficio());
        

          return this.beneficiosRepository.save(obj);
  
      }

      public void deleteByid(Long id){
        try {
            this.beneficiosRepository.deleteById(id);
        } catch (Exception e) {
        }
    }

}
