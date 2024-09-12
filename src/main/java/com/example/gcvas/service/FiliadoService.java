package com.example.gcvas.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.gcvas.models.Filiado;
import com.example.gcvas.repositories.FiliadoRepository;



public class FiliadoService {
    
    @Autowired
    FiliadoRepository filiadoRepository;

    public Filiado findByid(Long id) {

       Optional<Filiado> obj = this.filiadoRepository.findById(id);

        if(obj.isPresent()){
            return obj.get();
        }
        throw new RuntimeException("Filiado não encontrado {id:"+id+"} ");
    }

    public Filiado create(Filiado obj){
        obj.setId(null);

       return  this.filiadoRepository.save(obj);
    }

    public Filiado update(Filiado newObj){

        Filiado obj =  this.findByid(newObj.getId());
  
          return this.filiadoRepository.save(obj);
  
      }

      public void deleteByid(Long id){
        try {
            this.filiadoRepository.deleteById(id);
        } catch (Exception e) {
        }
    }

}
