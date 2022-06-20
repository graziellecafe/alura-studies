import React from 'react';
import style from './Button.module.scss'

class Buttom extends React.Component<{ 
    type?: "button" | "submit" | "reset" | undefined,
    texto: string
    }> {
    render() {
        const { type="button" } = this.props;
        return(
            <button type={type} className={style.botao}>
                {this.props.texto}
            </button>
        )
    }
}

export default Buttom;