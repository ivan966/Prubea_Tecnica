// src/Componente/UserItem.jsx
import React from 'react';

const UserItem = ({ val, editarUsuario, deleteUser }) => {
  return (
    <tr>
      <th>{val.id}</th>
      <td>{val.nombre}</td>
      <td>{val.apellido}</td>
      <td>{val.edad}</td>
      <td>{val.pais}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            onClick={() => editarUsuario(val)}
            className="btn btn-info"
          >
            Editar
          </button>
          <button
            type="button"
            onClick={() => deleteUser(val)}
            className="btn btn-danger"
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserItem;
