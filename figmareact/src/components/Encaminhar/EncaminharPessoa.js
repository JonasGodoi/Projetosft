import React from "react";
import styles from "./EncaminharPessoa.module.css"; // Atualize para o CSS do AgendarConsulta
import FormInput from "./FormInput";

const formInputs = [
  {
    label: "Nome",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/31c9061c260400027a8ed982471e1c5aaf8604e5f930344b21f4933d875a21dd?placeholderIfAbsent=true&apiKey=03461e8016f04c50a309e203e5ed2c0b",
    width: 412,
    id: "nome",
  },
  {
    label: "CPF",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cdae778183e54d48192ed111b57665f8042ea06478dabb4a895e0ba3cb0bbbff?placeholderIfAbsent=true&apiKey=03461e8016f04c50a309e203e5ed2c0b",
    width: 217,
    id: "cpf",
  },
  {
    label: "Telefone",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d37bb1409112f31f55ec74570ee9d30eece237143c960235d72a516fd831de51?placeholderIfAbsent=true&apiKey=03461e8016f04c50a309e203e5ed2c0b",
    width: 217,
    id: "telefone",
  },
  { label: "Endereço", icon: null, width: 412, id: "endereco" },
  { label: "Data de Nascimento", icon: null, width: 217, id: "dataNascimento", type: "date" },
  {
    label: "Setor",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2eea134a9aa80ade0ca18e219e0b9cc59505b382f126b49c9a2b43bc97f69344?placeholderIfAbsent=true&apiKey=03461e8016f04c50a309e203e5ed2c0b",
    width: 217,
    id: "setor",
  },
];

function EncaminharPessoa() {
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
            <h1 className={styles.formTitle}>Encaminhar</h1>
            {formInputs.map((input, index) => (
              <FormInput
                key={index}
                label={input.label}
                icon={input.icon}
                width={input.width}
                type={input.type}
                id={input.id}
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
}

export default EncaminharPessoa;
