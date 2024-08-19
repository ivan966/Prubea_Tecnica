// src/Componente/UserList.jsx
import React from 'react';
import UserItem from './UserItem';

const UserList = ({ usuariosList, editarUsuario, deleteUser }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Edad</th>
          <th scope="col">País</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {usuariosList.map((val) => (
          <UserItem 
            key={val.id} 
            val={val} 
            editarUsuario={editarUsuario} 
            deleteUser={deleteUser} 
          />
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
