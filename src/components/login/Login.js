//login component for user and doctor login

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./login.css";
import { getData } from '../../components/api/api';
import Header from '../header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from "../../redux/actions/userActions";

const Login = ({handleSubmit,userName,setUserName,password,setPassword,setIsAdmin,validateForm}) => {
    // const [userName, setUserName] = useState("");
    // const [password, setPassword] = useState("");
    // const [isAdmin, setIsAdmin] = useState(false);

    // const dispatcher = useDispatch();

    // const validateForm = () => {
    //     return userName.length > 0 && password.length > 0;
    // }


    // //submit login and check 
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     let result = await getDataLogin();
    //     if (result?.data?.length === 1) {
    //         let usersPath = isAdmin ? "colleges" : "students";
    //         props.history.push(`/${usersPath}/home`);
    //     } else {
    //         alert("Invalid credentials");
    //     }
    // }

    // //getData from db after login and dispatch the response to reducer to save the object
    // const getDataLogin = async () => {
    //     let users = isAdmin ? "colleges" : "students";
    //     let response = await getData(`${users}?username=${userName}&password=${password}`);
    //     dispatcher(saveUser(response.data[0]));
    //     return response;
    // }


    return (
        <>
            {/* using header component to display navbar  */}
            <Header />
            {/* form for login starts here */}
            <div className="Login">

                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="userName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="checkBox">
                        <Form.Check
                        className="custom-checkbox"
                            type="checkbox"
                            label="Login as Admin"
                            onChange={(e) => setIsAdmin(e.target.checked)}
                            
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Login
        </Button>
                </Form>
            </div>
            {/* form for login ends here */}
        </>
    );
}

export default Login;

