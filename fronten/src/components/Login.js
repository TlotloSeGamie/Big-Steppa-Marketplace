import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(""); 

        if (!email || !password) {
            setError("Both fields are required.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        const userData = localStorage.getItem("user");

        const user = userData ? JSON.parse(userData) : null;

        if (user && user.email === email && user.password === password) {
            console.log("Login successful");
            navigate("/");
        } else {
            setError("Invalid email or password.");
        }
    };

    return (
        <div className="main-login">
            <h3>Logo</h3>
            <div className="container-login">
                <h1>Sign In</h1>
                <form className="logins" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email :"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password :"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <div className="error">{error}</div>}
                    <div className="pass">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                    <div className="bust">
                        <button type="submit">Login</button>
                        <Link to="/signup">Don't have an account? Sign Up</Link>
                    </div>
                </form>
                <div className="terms">
                    <h5>By continuing, you agree to our Terms of Use and Privacy Policy</h5>
                </div>
            </div>
        </div>
    );
}

export default Login;
