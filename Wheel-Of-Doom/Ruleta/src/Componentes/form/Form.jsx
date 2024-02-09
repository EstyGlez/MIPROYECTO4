import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import "./form.css";

const Form = ({ onSubmit, editingUserId, resetForm }) => {
  const methods = useForm();

  React.useEffect(() => {
    if (editingUserId) {
      resetForm(editingUserId);
    }
  }, [editingUserId, resetForm]);

  return (
    <section className="Form">
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          {/* Aquí van todos los campos del formulario */}
          <button className="buttonForm" type="submit">
            {editingUserId ? "Actualizar usuario" : "Añadir usuario"}
          </button>
        </form>
      </FormProvider>
    </section>
  );
};

export default Form;
