import React from 'react';
import "./table1.css";

const Table1 = ({ adminList, handleEditUser, handleDeleteUser }) => {
  return (
    <section className="listForm">
      <table>
      <thead>
            <tr>
              <th className="title">Nombre</th>
              <th className="title">Primer Apellido</th>
              <th className="title">Segundo Apellido</th>
              <th className="title">Correo Electrónico</th>
              <th className="title">Número de Teléfono</th>
              <th className="title"></th>
            </tr>
          </thead>
        <tbody>
          {adminList.map((user) => (
            <tr key={user.id}>
              <td className="dataUser">{user.userName}</td>
                <td className="dataUser">{user.surName}</td>
                <td className="dataUser">{user.lastName}</td>
                <td className="dataUser">{user.email}</td>
                <td className="dataUser">{user.phoneNumber}</td>
                <td>
                <button onClick={() => handleEditUser(user.id, user)}>
                    Editar
                </button>
                <button onClick={() => handleDeleteUser(user.id)}>
                    Eliminar
                </button>
                <button onClick={() => handleAddToDraw(user.id)}>
                    Añadir a sorteo
                </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table1;
