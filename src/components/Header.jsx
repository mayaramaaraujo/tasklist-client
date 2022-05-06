import { CheckHeader, HeaderContainer } from "./GlobalStyle"
import check from "../assets/check.svg"

export const Header = () => {
    return <HeaderContainer>
        <CheckHeader src={check} alt="" />
        <h1>TaskList</h1>
    </HeaderContainer>
}