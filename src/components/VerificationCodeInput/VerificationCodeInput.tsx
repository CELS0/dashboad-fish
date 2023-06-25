import React, { useState, useRef, ChangeEvent } from 'react';
import styles from './styles.module.scss';

const VerificationCodeInput: React.FC = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Apenas o primeiro caractere será considerado
      value = value[0];
    }

    // Clonando o array de código atual
    const newCode = [...code];

    // Atualizando o valor do código no índice fornecido
    newCode[index] = value;

    // Atualizando o estado do código
    setCode(newCode);

    // Movendo o foco para o próximo input, se houver
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Movendo o foco para o input anterior se o valor estiver vazio
    if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className={styles['verification-code-container']}>
      {code.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
          ref={(el: HTMLInputElement) => (inputRefs.current[index] = el)}
          className={styles['verification-code-input']}
        />
      ))}
    </div>
  );
};

export default VerificationCodeInput;
