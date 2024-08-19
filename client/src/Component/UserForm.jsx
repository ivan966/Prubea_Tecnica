// src/Componente/UserForm.jsx
import React, { useState } from 'react';

const UserForm = ({ nombre, apellido, edad, pais, editar, setNombre, setApellido, setEdad, setPais, add, update, limpiarCampos }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!nombre) tempErrors.nombre = "El nombre es requerido.";
    if (!apellido) tempErrors.apellido = "El apellido es requerido.";
    if (!edad) tempErrors.edad = "La edad es requerida.";
    else if (edad <= 0) tempErrors.edad = "La edad debe ser un número positivo.";
    if (!pais) tempErrors.pais = "El país es requerido.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleAdd = () => {
    if (validate()) {
      add();
    }
  };

  const handleUpdate = () => {
    if (validate()) {
      update();
    }
  };

  return (
    <div className="card-body">
      {/* Nombre */}
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Nombre
        </span>
        <input
          type="text"
          value={nombre}
          className="form-control"
          placeholder="Ingrese su Nombre"
          aria-label="Nombre"
          aria-describedby="basic-addon1"
          onChange={(event) => setNombre(event.target.value)}
        />
        {errors.nombre && <div className="text-danger">{errors.nombre}</div>}
      </div>
      {/* Apellido */}
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Apellido
        </span>
        <input
          type="text"
          value={apellido}
          className="form-control"
          placeholder="Ingrese su Apellido"
          aria-label="Apellido"
          aria-describedby="basic-addon1"
          onChange={(event) => setApellido(event.target.value)}
        />
        {errors.apellido && <div className="text-danger">{errors.apellido}</div>}
      </div>
      {/* Edad */}
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Edad
        </span>
        <input
          type="number"
          value={edad}
          className="form-control"
          placeholder="Ingrese su Edad"
          aria-label="Edad"
          aria-describedby="basic-addon1"
          onChange={(event) => setEdad(event.target.value)}
        />
        {errors.edad && <div className="text-danger">{errors.edad}</div>}
      </div>
      {/* País */}
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          País
        </span>
        <input
          type="text"
          value={pais}
          className="form-control"
          placeholder="Ingrese su País"
          aria-label="País"
          aria-describedby="basic-addon1"
          onChange={(event) => setPais(event.target.value)}
        />
        {errors.pais && <div className="text-danger">{errors.pais}</div>}
      </div>

      <div className="card-footer text-muted">
        {editar ? (
          <>
            <button className="btn btn-warning m-2" onClick={handleUpdate}>
              Actualizar
            </button>
            <button className="btn btn-danger m-2" onClick={limpiarCampos}>
              Cancelar
            </button>
          </>
        ) : (
          <button className="btn btn-success" onClick={handleAdd}>
            Registrar
          </button>
        )}
      </div>
    </div>
  );
};

export default UserForm;
