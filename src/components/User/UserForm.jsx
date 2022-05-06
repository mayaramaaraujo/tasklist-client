import { useContext, useState } from "react"
import { ErrorContext } from "../../contexts/ErrorContext";
import { Input } from "../Task/TaskForm.style";
import { Button, UserFormContainer } from "./UserForm.style";

export const UserForm = (props) => {

    const errorContext = useContext(ErrorContext);

    const [usernameInput, setUsernameInput] = useState({username: ""});

    const handleUsernameInput = (e) => {
        e.preventDefault();
        setUsernameInput({username: e.target.value})
    }

    return <UserFormContainer>
        <Input 
            type="text" 
            placeholder="username" 
            onChange={(e) => handleUsernameInput(e)} 
            value={usernameInput.username}
            onFocus={() => errorContext.clearError()}
        />
        <Button onClick={() => props.getUser(usernameInput.username)}>entrar</Button>
        <Button signIn={true} onClick={() => props.register(usernameInput)}>cadastrar</Button>

        <span>{props.hasError ? props.errorMessage : null}</span>
    </UserFormContainer>
}