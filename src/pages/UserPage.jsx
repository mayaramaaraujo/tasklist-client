import axios from "axios";
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { UserForm } from "../components/User/UserForm";

import { BASE_URL } from "../constants/constants";
import { ErrorContext } from "../contexts/ErrorContext";
import { UserContext } from "../contexts/UserContext"
import { UserPageContainer } from "./UserPage.style";

export const UserPage = () => {
    const errorContext = useContext(ErrorContext);
    const userContext = useContext(UserContext);

    const navigate = useNavigate();

    const register = (usernameInput) => {
        axios.post(`${BASE_URL}/user`, usernameInput)
        .then((res) => {
            localStorage.setItem("userId", res.data.id);
            localStorage.setItem("username", res.data.username);

            userContext.setUser({
                id: res.data.id, 
                username: res.data.username
            });

            errorContext.clearError();
            navigate("/task");
            
        }).catch((err) => {
            console.log(err)
            if(err.response?.data?.message === "Invalid body") {
                errorContext.setError({isError: true, message: "Campo usuário não pode estar vazio."});
            } else {
                errorContext.setError({isError: true, message: err.response.data.message});
            }          
        })
    }

    const getUser = (username) => {
        axios.get(`${BASE_URL}/user?username=${username}`)
        .then((res) => {
            localStorage.setItem("userId", res.data.id);
            localStorage.setItem("username", res.data.username);
            navigate("/task");
            errorContext.clearError();
        }).catch((err) => {
            console.log(err)
            if(err.response.data.message === "User not found") {
                errorContext.setError({isError: true, message: "Usuário inválido, por favor cadastre-se."});
            }

        })
    }

    useEffect(() => {
        const id = localStorage.getItem("userId");
        if(id) {
            navigate("/task");
        }
    }, [navigate])

    return <UserPageContainer>
        <Header />
        <UserForm 
            register={register} 
            getUser={getUser}
            hasError={errorContext.error.isError} 
            errorMessage={errorContext.error.message}
        />
    </UserPageContainer>
}