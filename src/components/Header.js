import { NavLink , Outlet } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="header-block">
                <h1>Tripma</h1>
                <nav>
                    <ul>
                        <li className="item-header">
                            <NavLink  
                            className={({ isActive }) => (isActive ? "active" : "")}
                            to="/" end>Home</NavLink>
                        </li>
                        <li className="item-header">
                            <NavLink  
                            className={({ isActive }) => (isActive ? "active" : "")}
                            to="users">Users</NavLink>
                        </li>
                        <li className="item-header">
                            <NavLink  
                            className={({ isActive }) => (isActive ? "active" : "")}
                            to="hotels">Hotels</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </header>
    )
};

export default Header;