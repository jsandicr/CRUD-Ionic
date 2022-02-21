package com.ionic.service;
import com.ionic.entity.Empleado;

import java.util.List;

public interface IEmpleadoService {
    List<Empleado> getAll();
    Empleado getById(Long id);
    void remove(Long id);
    void save(Empleado empleado);
}
