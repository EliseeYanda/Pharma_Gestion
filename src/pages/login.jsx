import {useNavigate} from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/home");
    
    }

    const toClick = () => {
        navigate("/all-product")
    }
    
    return (
        <>
            <h1>Login Page</h1>
            <fieldset>
            <form action="">
                <input type="text" name="Name" id=""  placeholder="Name"/><br /><br />
                <input type="password"  id="" placeholder="Password" />
            </form><br />
            <button onClick={handleClick}>Connexion</button>
            <button onClick={toClick} className="adminbutton">Dashbord</button>
            </fieldset>
            
        </>
    )
}

export default Login;