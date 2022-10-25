import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const [err, setErr] = useState(null)
    const [accept, setAccept] = useState(false)
    const { createUser, updateUser, verifyEmail } = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                setErr(null)
                form.reset()
                handleUpdateUser(name, photoURL)
                handleEmailVerification()
                toast.success("Please verify your email address before login.")
            })
            .catch(error => setErr(error.message))
    }
    const handleEmailVerification = () => [
        verifyEmail()
        .then(() => {})
        .catch(error => setErr(error))

    ]
    const handleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUser(profile)
        .then(()=>{})
        .catch((error)=>setErr(error))
    }
    const handleAccept = (event) => {
        setAccept(event.target.checked)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Your Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo url</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
                <Form.Text className="text-danger">
                    {err}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" onClick={handleAccept} label={<>Accept <Link>Terms and Conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled = {!accept}>
                Register
            </Button>
        </Form>
    );
};

export default SignUp;