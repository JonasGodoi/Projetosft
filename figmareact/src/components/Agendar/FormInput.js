import React from 'react';
import styles from './AgendarConsulta.module.css';

const FormInput = ({ label, icon, type = 'text', id, value, onChange }) => {
  return (
    <>
      <label htmlFor={id} className={styles.inputLabel}>{label}</label>
      <div className={styles.inputWrapper}>
        <img loading="lazy" src={icon} alt="" className={styles.inputIcon} />
          <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
        />
      </div>
    </>
  );
};

export default FormInput;
