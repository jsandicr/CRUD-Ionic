package com.ionic.controllers;

import com.ionic.entity.Empleado;
import com.ionic.entity.Proveedor;
import com.ionic.service.EmpleadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmpleadoController {

    @Autowired
    EmpleadoService service;

    @GetMapping("/api/empleados")
    public List<Empleado> getAll(){
        return service.getAll();
    }

    @GetMapping("/api/empleados/{id}")
    public Empleado getById(@PathVariable String id){
        return service.getById(Long.parseLong(id));
    }

    @DeleteMapping("/api/empleados/{id}")
    public void delete(@PathVariable String id){
        service.remove(Long.parseLong(id));
    }

    @PostMapping("/api/empleados")
    public void save(@RequestBody Empleado empleado){
        service.save(empleado);
    }
}