import { useContext } from "react"
import { SuccessMessageContext } from "../../contexts/SuccessMessageContext";

export const SuccessMessage = () => {
    const sucessContext = useContext(SuccessMessageContext);   


    return <div>
        {sucessContext.success.message}
    </div>
}