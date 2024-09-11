package com.example.gcvas.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gcvas.models.User;
import com.example.gcvas.repositories.UserRepository;
import com.example.gcvas.service.exceptions.DataBindingViolationException;
import com.example.gcvas.service.exceptions.ObjectNotFoundException;

@Service
public class UserService {
    
    @Autowired  
    UserRepository userRepository;  

    
    public User findByid(Long id) {

       Optional<User> obj = this.userRepository.findById(id);

        if(obj.isPresent()){
            return obj.get();
        }
        throw new ObjectNotFoundException("Usuário não encontrado {id:"+id+"} ");
    }

    public User create(User obj){
        obj.setId(null);

       return  this.userRepository.save(obj);
    }

    public User update(User newObj){

      User obj =  this.findByid(newObj.getId());

        obj.setPassword(newObj.getPassword());

        return this.userRepository.save(obj);

    }

    public void deleteByid(Long id){
        try {
            this.userRepository.deleteById(id);
        } catch (Exception e) {
            throw new DataBindingViolationException(
                    "Não é possível excluir o usuário {id:" + id + "} pois possui entidades relacionadas");
        }
    }


    
}
