package com.ionic.service;

import com.ionic.entity.Cliente;

import java.beans.Customizer;
import java.util.List;

public interface IClienteService {
    List<Cliente> getAll();
    Cliente getById(Long id);
    void remove(Long id);
    void save(Cliente cliente);
}
