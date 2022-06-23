import React from 'react';
import style from './Button.module.scss'

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    texto: string,
    onClick?: () => void
  }
  
  function Button({ onClick, texto, type }: Props) {
    return (
      <button
        onClick={onClick}
        type={type}
        className={style.botao}
      >
        {texto}
      </button>
    )
  }
  
  export default Button;