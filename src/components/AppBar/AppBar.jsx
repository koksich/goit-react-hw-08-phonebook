import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";

import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/authSelectors";
import { Header } from "./AppBar.styled";

const AppBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </Header>
    )
}


export default AppBar;