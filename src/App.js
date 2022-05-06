import { useState } from "react";
import { ErrorContext } from "./contexts/ErrorContext";
import { SuccessMessageContext } from "./contexts/SuccessMessageContext";
import { UserContext } from "./contexts/UserContext";
import Router from "./routes/Router";

function App() {
  const [user, setUser] = useState({id: "", username: ""});
  const [error, setError] = useState({isError: false, message: ""})  
  const [success, setSuccess] = useState({sucess: true, message: ""});

  const clearError = () => {
    setError({isError: false, message: null})
  }
  
  return (
    <UserContext.Provider value={{user, setUser}}>
        <ErrorContext.Provider value={{ error, setError, clearError}}>
          <SuccessMessageContext.Provider value={{success, setSuccess}}>
            <Router />
          </SuccessMessageContext.Provider>
        </ErrorContext.Provider>   
    </UserContext.Provider>         
  );
}

export default App;
