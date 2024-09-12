package com.example.gcvas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gcvas.models.Acao;
import com.example.gcvas.repositories.AcaoRepository;

@Service
public class AcaoService {
    
    @Autowired
    AcaoRepository acaoRepository;

    public Acao findById(Long id) {

       java.util.Optional<Acao> obj = this.acaoRepository.findById(id);

        if(obj.isPresent()){
            return obj.get();
        }
        throw new RuntimeException("Ação não encontrada {id:"+id+"} ");
    }

    public Acao create(Acao obj){
        obj.setId(null);

       return  this.acaoRepository.save(obj);
    }

    public Acao update(Acao newObj){

        Acao obj =  this.findById(newObj.getId());
  
        obj.setData_hora(newObj.getData_hora());

          return this.acaoRepository.save(obj);
  
      }

      public void deleteByid(Long id){
        try {
            this.acaoRepository.deleteById(id);
        } catch (Exception e) {
        }
    }

}
