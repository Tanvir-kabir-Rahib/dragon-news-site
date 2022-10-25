import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    if (loading){
        return <div className='mt-5 text-center'><Spinner animation="border" variant="info" /></div>
    }
    if (!user) {
        return <Navigate to="/login" state={{from:location}} replace></Navigate>;
    }
    return children;
};

export default PrivateRoute;