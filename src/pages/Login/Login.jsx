import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Login = () => {

    const [loginView, setLoginView] = useState(true);

    return (
        loginView ? <LoginForm setLoginView={setLoginView} /> : <RegisterForm setLoginView={setLoginView} />
    );
}

export default Login