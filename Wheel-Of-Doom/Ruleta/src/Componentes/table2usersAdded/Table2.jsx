import React from "react";
import "./table2.css";

const Table2 = ({ selectedUsers, handleRemoveFromSelection }) => {
  return (
    <section className="selectedUsers">
      <h2>Participantes en Sorteo</h2>
      <table>
        <thead>
          <tr>
            <th className="title">Nombre</th>
            <th className="title">Primer Apellido</th>
            <th className="title">Segundo Apellido</th>
            <th className="title">Correo Electrónico</th>
            <th className="title">Número de Teléfono</th>
            <th className="title">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {drawParticipants.map((userId) => {
            const user = adminList.find((u) => u.id === userId);
            return user ? (
              <tr key={user.id}>
                <td>{user.userName}</td>
                <td>{user.surName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>
                  <button onClick={() => handleRemoveFromDraw(user.id)}>
                    Eliminar del sorteo
                  </button>
                </td>
              </tr>
            ) : null;
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Table2;
