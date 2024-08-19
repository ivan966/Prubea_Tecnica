// src/Contenedor/UserContainer.jsx
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import UserForm from '../Component/UserForm';
import UserList from '../Component/UserList';

const UserContainer = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [pais, setPais] = useState("");
  const [id, setId] = useState(null);
  const [editar, setEditar] = useState(false);
  const [usuariosList, setUsuariosList] = useState([]);

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = () => {
    Axios.get("http://localhost:3001/usuarios")
      .then(response => setUsuariosList(response.data))
      .catch(error => console.error(error));
  };

  const handleAdd = () => {
    Axios.post("http://localhost:3001/create", {
      nombre,
      apellido,
      edad,
      pais
    })
    .then(() => {
      getUsuarios();
      limpiarCampos();
      Swal.fire({
        title: "Usuario Registrado",
        html: `El usuario <strong>${nombre}</strong> fue registrado con éxito`,
        icon: "success",
        timer: 3000
      });
    })
    .catch(error => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se logró registrar al usuario",
        footer: error.message === "Network Error" ? "Error de Servidor, intente más tarde" : error.message
      });
    });
  };

  const handleUpdate = () => {
    Axios.put("http://localhost:3001/update", {
      id,
      nombre,
      apellido,
      edad,
      pais
    })
    .then(() => {
      getUsuarios();
      limpiarCampos();
      Swal.fire({
        title: "Usuario Modificado",
        html: `El usuario <strong>${nombre}</strong> fue modificado con éxito`,
        icon: "success",
        timer: 3000
      });
    })
    .catch(error => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se logró actualizar al usuario",
        footer: error.message === "Network Error" ? "Error de Servidor, intente más tarde" : error.message
      });
    });
  };

  const handleDelete = (usuario) => {
    Swal.fire({
      title: "Confirmar Eliminación",
      html: `¿Desea eliminar a <strong>${usuario.nombre}</strong>?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, Eliminar"
    }).then(result => {
      if (result.isConfirmed) {
        Axios.put(`http://localhost:3001/delete/${usuario.id}`)
          .then(() => {
            getUsuarios();
            limpiarCampos();
            Swal.fire({
              title: "Eliminado",
              html: `${usuario.nombre} fue eliminado`,
              icon: "success",
              timer: 3000
            });
          })
          .catch(error => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No se logró eliminar el usuario",
              footer: error.message === "Network Error" ? "Error de Servidor, intente más tarde" : error.message
            });
          });
      }
    });
  };

  const editarUsuario = (usuario) => {
    setEditar(true);
    setNombre(usuario.nombre);
    setApellido(usuario.apellido);
    setEdad(usuario.edad);
    setPais(usuario.pais);
    setId(usuario.id);
  };

  const limpiarCampos = () => {
    setNombre("");
    setApellido("");
    setEdad("");
    setPais("");
    setEditar(false);
  };

  return (
    <div className="card text-center">
      <div className="card-header">Control de Usuarios</div>
      <UserForm
        nombre={nombre}
        apellido={apellido}
        edad={edad}
        pais={pais}
        editar={editar}
        setNombre={setNombre}
        setApellido={setApellido}
        setEdad={setEdad}
        setPais={setPais}
        add={handleAdd}
        update={handleUpdate}
        limpiarCampos={limpiarCampos}
      />
      <UserList
        usuariosList={usuariosList}
        editarUsuario={editarUsuario}
        deleteUser={handleDelete}
      />
    </div>
  );
};

export default UserContainer;
