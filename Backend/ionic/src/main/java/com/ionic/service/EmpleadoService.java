package com.ionic.service;

import com.ionic.entity.Cliente;
import com.ionic.entity.Empleado;
import com.ionic.repository.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpleadoService implements IEmpleadoService{

    @Autowired
    EmpleadoRepository empleadoRepository;

    @Override
    public List<Empleado> getAll() {
        return (List<Empleado>) empleadoRepository.findAll();
    }

    @Override
    public Empleado getById(Long id) {
        return empleadoRepository.findById(id).get();
    }

    @Override
    public void remove(Long id) {
        empleadoRepository.deleteById(id);
    }

    @Override
    public void save(Empleado empleado) {
        empleadoRepository.save(empleado);
    }
}
