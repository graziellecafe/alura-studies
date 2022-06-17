import React from "react";
import Buttom from "../Button";

class Form extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você deseja estudar"
                        required>       
                    </input>
                </div>
                <div>
                <label htmlFor="tarefa">
                        Tempo
                    </label>
                    <input 
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required>       
                    </input>
                </div>
                <Buttom/>
            </form>
        )
    }
}

export default Form;