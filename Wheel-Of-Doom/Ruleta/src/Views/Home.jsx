import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form'; 
import "./home.css";
import Form from "../Componentes/form/Form.jsx";
import Table1 from "../Componentes/table1users/Table1.jsx";
import Table2 from "../Componentes/table2usersAdded/Table2.jsx";
import { UserService } from "../../userService.js";

const AdminList = () => {
  const [adminList, setAdminList] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [drawParticipants, setDrawParticipants] = useState([]);
  const methods = useForm();
  const { formState: { errors } } = methods;

 
  useEffect(() => {
    getData();
    const savedDrawParticipants = JSON.parse(localStorage.getItem('drawParticipants') || '[]');
    setDrawParticipants(savedDrawParticipants);
  }, []);

  
  useEffect(() => {
    const savedDrawParticipants = JSON.parse(localStorage.getItem('drawParticipants') || '[]');
    setDrawParticipants(savedDrawParticipants);
  }, [adminList]);

  async function getData() {
    let users = await UserService.getAllUsers();
    setAdminList(users);
  }

  async function handleDeleteUser(userId) {
    await UserService.deleteUser(userId);
    let updatedUsers = adminList.filter((user) => user.id !== userId);
    setAdminList(updatedUsers);
  }

  function showAlert(message) {
    alert(message);
  }

  const onSubmit = methods.handleSubmit(async (data) => {
    if (editingUserId) {
      await UserService.updateUser(editingUserId, data);
      showAlert("Usuario actualizado correctamente");
      setEditingUserId(null);
    } else {
      await UserService.submitUser(data);
      showAlert("Usuario creado correctamente");
    }
    
    getData();
    methods.reset();
  });

  const handleEditUser = (userId, userData) => {
  setEditingUserId(userId);
  methods.reset();
  Object.keys(userData).forEach(key => {
    methods.setValue(key, userData[key]);
  });
};

const handleAddToDraw = async (userId) => {
  try {
    // Agregar participante al estado local
    const updatedParticipants = [...drawParticipants, userId];
    setDrawParticipants(updatedParticipants);
    localStorage.setItem('drawParticipants', JSON.stringify(updatedParticipants));

    // Agregar participante a la base de datos JSON en el servidor
    await UserService.addToDraw(updatedParticipants);
  } catch (error) {
    console.error('Error al agregar participante al sorteo:', error);
  }
};

  const handleSaveDraw = async () => {
    try {
      await UserService.addToDraw(drawParticipants);
      alert("La lista de sorteo ha sido guardada.");
    } catch (error) {
      console.error("Error al guardar la lista de sorteo:", error);
    }
  };

  const handleRemoveFromDraw = (userId) => {
    const updatedParticipants = drawParticipants.filter((id) => id !== userId);
    setDrawParticipants(updatedParticipants);
    localStorage.setItem('drawParticipants', JSON.stringify(updatedParticipants));
  };

  return (
    <section className="container">
      <Form
        onSubmit={onSubmit}
        editingUserId={editingUserId}
        resetForm={methods.reset}
      />
      <Table1
        adminList={adminList}
        handleEditUser={handleEditUser}
        handleDeleteUser={handleDeleteUser}
      />
      <Table2
        selectedUsers={selectedUsers}
        handleRemoveFromSelection={handleRemoveFromSelection}
      />
    </section>
  );
};

export default AdminList;
