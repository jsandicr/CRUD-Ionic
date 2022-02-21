package com.ionic.service;

import com.ionic.entity.Cliente;
import com.ionic.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClienteService implements IClienteService{

    @Autowired
    private ClienteRepository clienteRepository;

    @Override
    public List<Cliente> getAll(){
        return (List<Cliente>) clienteRepository.findAll();
    }

    @Override
    public Cliente getById(Long id) {
        return clienteRepository.findById(id).get();
    }

    public void remove(Long id){
        clienteRepository.deleteById(id);
    }

    public void save(Cliente cliente){
        clienteRepository.save(cliente);
    }
}
