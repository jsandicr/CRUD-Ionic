package com.ionic.service;

import com.ionic.entity.Proveedor;
import com.ionic.repository.ProveedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProveedorService implements IProveedorService{

    @Autowired
    private ProveedorRepository proveedorRepository;

    @Override
    public List<Proveedor> getAll() {
        return (List<Proveedor>) proveedorRepository.findAll();
    }

    @Override
    public Proveedor getById(Long id) {
        return proveedorRepository.findById(id).get();
    }

    @Override
    public void delete(Long id) {
        proveedorRepository.deleteById(id);
    }

    @Override
    public void save(Proveedor proveedor) {
        proveedorRepository.save(proveedor);
    }
}
