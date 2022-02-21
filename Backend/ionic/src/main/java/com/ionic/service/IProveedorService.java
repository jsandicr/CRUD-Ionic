package com.ionic.service;

import com.ionic.entity.Proveedor;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface IProveedorService{
    List<Proveedor> getAll();
    Proveedor getById(Long id);
    void delete(Long id);
    void save(Proveedor proveedor);
}
