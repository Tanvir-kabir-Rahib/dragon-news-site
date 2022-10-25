import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [err, setErr] = useState(null)
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset()
            navigate("/")
        })
        .catch(error => setErr(error))
    }
    return (
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required/>
                <Form.Text className="text-danger">
                    {err}
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Login;