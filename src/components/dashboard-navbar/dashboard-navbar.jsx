import { NavLink } from "react-router-dom";

function DashBoardNavBar () {
    return (
        <ul className="navbar">
            <li>
                <NavLink to="/all-product">All-product</NavLink>
            </li>
            <li>
                <NavLink to="/create-product">Create-product</NavLink>
            </li>
            <li>
                <NavLink to="/update-product">Update-product</NavLink>
            </li>
            <li>
                <NavLink to="/delete-product">Delete-product</NavLink>
            </li>
            <li>
                <NavLink to="/">Deconnexion</NavLink>
            </li>
        </ul>
    );
}

export default DashBoardNavBar;