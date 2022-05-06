import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { TaskForm } from "../components/Task/TaskForm";
import { TaskList } from "../components/Task/TaskList";
import { BASE_URL } from "../constants/constants";
import { ErrorContext } from "../contexts/ErrorContext";
import { SuccessMessageContext } from "../contexts/SuccessMessageContext";
import { TaskPageContainer } from "./TaskPage.style";

export const TaskPage = () => {
    const navigate = useNavigate();

    const errorContext = useContext(ErrorContext);
    const successContext = useContext(SuccessMessageContext);

    const [taskBody, setTaskBody] = useState({title: "", description: ""});
    const [taskList, setTaskList] = useState([]);

    const userId = localStorage.getItem("userId");

    const addTask = () => {

        axios.post(`${BASE_URL}/task/${userId}`, taskBody)
        .then((res) => {
            successContext.setSuccess({success: true, message: "Tarefa adicionada com sucesso!"});
            setInterval(() => {
                successContext.setSuccess({sucess: false, message: null})
            }, 2000)
            setTaskBody({title: "", description: ""})
        })
        .catch((err) => {

            if (err.response?.data?.message === "User not found") {
                localStorage.clear()
                navigate("/")
            } else if (err.response.data.message === "Invalid body") {
                errorContext.setError({isError: true, message: "É necessário preencher todos os campos."})
            } 
        })
    }

    const getTasks = () => {
        axios.get(`${BASE_URL}/task/${userId}`)
        .then((res) => {
            setTaskList(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const logout = () => {
        localStorage.clear();
    }

    useEffect(() => {
        const id = localStorage.getItem("userId");

        if(!id) {
            navigate("/");
        }

        getTasks();
    }, [taskList])

    return <div>
        <Header />
        <TaskPageContainer>
        <TaskForm 
            task={taskBody} 
            setTask={setTaskBody} 
            addTask={addTask} 
            hasError={errorContext.error.isError} 
            errorMessage={errorContext.error.message}
            logout={logout}
        />
        <TaskList taskList={taskList} />
        </TaskPageContainer>        
    </div>
}