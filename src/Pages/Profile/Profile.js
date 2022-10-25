import React, { useContext, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext)
    const [name, setName] = useState(user?.displayName)
    const photoURLRef = useRef(user?.photoURL)
    const handleSubmit = (event) => {
        event.preventDefault()
        user.displayName = photoURLRef.current.value

    }
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={handleNameChange} defaultValue={name} name='name' type="text" placeholder="Your Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo url</Form.Label>
                <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} name='photoURL' type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control readOnly defaultValue={user?.email} name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    );
};

export default Profile;