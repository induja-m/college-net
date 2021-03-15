import Login from "../login/Login";
import { useDispatch } from 'react-redux';
import { saveUser } from '../../redux/actions/userActions';
import { getData } from '../../components/api/api';
import React, { useState } from "react";

const LoginContainer = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    const dispatcher = useDispatch();

    const validateForm = () => {
        return userName.length > 0 && password.length > 0;
    }


    //submit login and check 
    const handleSubmit = async (event) => {
        event.preventDefault();
        let result = await getDataLogin();
        if (result?.data?.length === 1) {
            let usersPath = isAdmin ? "colleges" : "students";
            props.history.push(`/${usersPath}/home`);
        } else {
            alert("Invalid credentials");
        }
    }

    //getData from db after login and dispatch the response to reducer to save the object
    const getDataLogin = async () => {
        let users = isAdmin ? "colleges" : "students";
        let response = await getData(`${users}?username=${userName}&password=${password}`);
        dispatcher(saveUser(response.data[0]));
        return response;
    }

    return <Login
        handleSubmit={handleSubmit}
        userName={userName}
        setUserName={setUserName}
        password={password}
        setPassword={setPassword}
        setIsAdmin={setIsAdmin}
        validateForm={validateForm}
    />
}

export default LoginContainer;