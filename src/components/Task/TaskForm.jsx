import { useState } from "react";
import { useContext } from "react";
import { ErrorContext } from "../../contexts/ErrorContext";
import { SuccessMessageContext } from "../../contexts/SuccessMessageContext";
import { SuccessMessage } from "../Success/SuccessMessage";
import { Button, Input, TaskFormContainer } from "./TaskForm.style";


export const TaskForm = (props) => {

    const [buttonDisable, setButtonDisabled] = useState(false);

    const userName = localStorage.getItem("username");

    const errorContext = useContext(ErrorContext);
    const successContext = useContext(SuccessMessageContext);
    
    const handleTitleInput = (e) => {
        if(e.target.value.length > 30) {
            setButtonDisabled(true)
        } else {
            setButtonDisabled(false)
        } 

        props.setTask({title: e.target.value, description: ""})
    }

    const handleDescriptionInput = (e) => {
        if(e.target.value.length > 50) {
            setButtonDisabled(true)
        } else {
            setButtonDisabled(false)
        }  

        props.setTask({...props.task, description: e.target.value})
    }

    return <TaskFormContainer>
        <span>Olá, <b>{userName}</b>! O que temos para hoje?</span>
        <hr></hr>
        <Input 
            type="text" 
            placeholder="Título" 
            onChange={(e) => handleTitleInput(e)}
            onFocus={() => errorContext.clearError()}
            value={props.task.title}
        />
        <Input 
            type="text" 
            placeholder="Descrição" 
            onChange={(e) => handleDescriptionInput(e)}
            onFocus={() => errorContext.clearError()}
            value={props.task.description}
        />
        <Button onClick={props.addTask}  disabled={buttonDisable}>
            Adicionar tarefa
        </Button>
        <hr />
        <Button logout={true} onClick={props.logout}>
            sair
        </Button>
        {props.hasError ? <span>{props.errorMessage}</span> : null}
        {successContext.success.success ? <SuccessMessage /> : null}
        {buttonDisable ? "Por favor, diminua o tamanho do texto." : null}
    </TaskFormContainer>
}