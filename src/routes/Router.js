import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TaskPage } from "../pages/TaskPage";
import { UserPage } from "../pages/UserPage";

export default function Router() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<UserPage />} />              
                <Route exact path="/task"  element={<TaskPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}