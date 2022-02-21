package com.ionic.controllers;

import com.ionic.entity.Proveedor;
import com.ionic.service.ProveedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProveedorController {

    @Autowired
    private ProveedorService service;

    @GetMapping("/api/proveedores")
    public List<Proveedor> getAll(){
        return service.getAll();
    }

    @GetMapping("api/proveedores/{id}")
    public Proveedor getById(@PathVariable Long id){
        return service.getById(id);
    }

    @DeleteMapping("api/proveedores/{id}")
    public void delete(@PathVariable Long id){
        service.delete(id);
    }

    @PostMapping("api/proveedores")
    public void save(@RequestBody Proveedor proveedor){
        service.save(proveedor);
    }
}