import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const [err, setErr] = useState(null)
    const {createUser} = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            const user= result.user;
            console.log(user)
            form.reset()
        })
        .catch(error => setErr(error.messege))
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Your Name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo url</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Your Name" />
            </Form.Group>
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
                Register
            </Button>
        </Form>
    );
};

export default SignUp;