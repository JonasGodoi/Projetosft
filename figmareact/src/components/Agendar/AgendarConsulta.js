import React from "react";
import styles from "./AgendarConsulta.module.css";
import InputField from "./FormInput";

const AgendarConsulta = () => {
  const formFields = [
    {
      label: "Nome",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c805c4eca63acfd59aa6694b70060af31b027a50f84b6577f79a70190acc7d20?placeholderIfAbsent=true&apiKey=03461e8016f04c50a309e203e5ed2c0b",
      id: "nome",
    },
    {
      label: "CPF",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d2b83e0c3ce1a7a05c57544c8b3e595070d50aaa8a0de14c5d01ef8a64000b1?placeholderIfAbsent=true&apiKey=03461e8016f04c50a309e203e5ed2c0b",
      id: "cpf",
    },
    {
      label: "Telefone",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d2b83e0c3ce1a7a05c57544c8b3e595070d50aaa8a0de14c5d01ef8a64000b1?placeholderIfAbsent=true&apiKey=03461e8016f04c50a309e203e5ed2c0b",
      id: "telefone",
    },
    {
      label: "Endereço",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4713f7b1c7c58da2482eb4f9223f13457af387629cf23de8acbb172c15f58d4?placeholderIfAbsent=true&apiKey=03461e8016f04c50a309e203e5ed2c0b",
      id: "endereco",
    },
    {
      label: "Data de Nascimento",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/60ee6bab91e32a5efbbfe3185a85881edfa9cc9aee83a6012a778ab8660a3a49?placeholderIfAbsent=true&apiKey=03461e8016f04c50a309e203e5ed2c0b",
      id: "dataNascimento",
      type: "date",
    },
    {
      label: "Setor",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc01e5bd0214d4b274fcd2cd0553224e8e6a1f8442188e9cae06e3a4d6e48f19?placeholderIfAbsent=true&apiKey=03461e8016f04c50a309e203e5ed2c0b",
      id: "setor",
    },
    {
      label: "Data da Consulta",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/11000c776973a991189e58c9c0ada76c3d9669344276b8903298705e99ee44fa?placeholderIfAbsent=true&apiKey=03461e8016f04c50a309e203e5ed2c0b",
      id: "dataConsulta",
      type: "date",
    },
    {
      label: "Horário Consulta",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/11000c776973a991189e58c9c0ada76c3d9669344276b8903298705e99ee44fa?placeholderIfAbsent=true&apiKey=03461e8016f04c50a309e203e5ed2c0b",
      id: "horarioConsulta",
      type: "time",
    },
  ];

  return (
    <div className={styles.container}>
      <main className={styles.background}>
        <form className={styles.formWrapper}>
          <aside className={styles.sidebar}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/54dd64f78ce2fca01f71b9613ff62278d4f1d5bd8c92c2b46c110b2753c73c90?placeholderIfAbsent=true&apiKey=03461e8016f04c50a309e203e5ed2c0b"
              alt="Logo da Secretaria"
              className={styles.logo}
            />
            <h2 className={styles.sidebarTitle}>
              Secretaria de Assistência Social de Quatiguá
            </h2>
          </aside>
          <div className={styles.formContent}>
            <h1 className={styles.formTitle}>Agendar</h1>
            {formFields.map((field) => (
              <InputField
                key={field.id}
                label={field.label}
                icon={field.icon}
                type={field.type}
                id={field.id}
              />
            ))}
            <button type="submit" className={styles.submitButton}>
              Enviar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AgendarConsulta;
