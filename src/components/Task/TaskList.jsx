import axios from "axios";
import { BASE_URL } from "../../constants/constants";
import { Button, Checker, Icon, Span, TaskCard, TaskDescription, TaskHeader, TaskListContainer, TaskTitle } from "./TaskList.style"
import DeleteIcon from "../../assets/Delete.svg"
import { useState } from "react";

export const TaskList = (props) => {
    const userId = localStorage.getItem("userId")

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const isDone = (taskId, e, done) => {
        e.preventDefault();

        const body = {
            done: !done
        }        
        
        axios.put(`${BASE_URL}/task/${userId}/${taskId}`, body)
        .then((res) => { }).catch((err) => { })
    }

    const deleteTask = (taskId) => {
        axios.delete(`${BASE_URL}/task/${userId}/${taskId}`)
            .then((res) => {})
            .catch((err) => {})
    }

    const updateTask = (taskId) => {        

        const body = {
            title: title,
            description: description
        }

        axios.put(`${BASE_URL}/task/${userId}/${taskId}`, body)
        .then((res) => {
            setTitle(null);

            if(description != null) {
                setDescription(null);
            }
         }).catch((err) => { })
    }

    return <TaskListContainer>
        {props?.taskList.map((task) => {

            return <TaskCard key={task.id} isDone={task.done}>
                <TaskHeader>
                    <TaskTitle 
                        type="text" 
                        placeholder={task.title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        onBlur={() => updateTask(task.id)}
                    />
                    <Checker onClick={(e) => isDone(task.id, e, task.done)} checked={task.done}></Checker>
                    <Button onClick={() => deleteTask(task.id)}><Icon src={DeleteIcon} /></Button>
                </TaskHeader>
                <TaskDescription 
                    placeholder={task.description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    onBlur={() => updateTask(task.id)}
                />                     
                
                <Span>Última modificação: {task.updatedDate ? task.updatedDate : task.createdDate}</Span>
            </TaskCard>
        })}
    </TaskListContainer>
}