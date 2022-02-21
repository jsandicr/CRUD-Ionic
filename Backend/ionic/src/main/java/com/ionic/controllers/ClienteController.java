package com.ionic.controllers;

import com.ionic.entity.Cliente;
import com.ionic.service.IClienteService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
public class ClienteController {

    @Autowired
    private IClienteService clienteService;

    @GetMapping("/api/clientes")
    public List<Cliente> getAll(){
        return clienteService.getAll();
    }

    @GetMapping("/api/clientes/{id}")
    public Cliente getById(@PathVariable String id){
        return clienteService.getById(Long.parseLong(id));
    }

    @DeleteMapping("/api/clientes/{id}")
    public void remove(@PathVariable String id){
        clienteService.remove(Long.parseLong(id));
    }

    @PostMapping("/api/clientes")
    public void save(@RequestBody Cliente cliente){
        clienteService.save(cliente);
    }

}
