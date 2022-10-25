import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaTwitter, FaFacebook, FaWhatsapp, FaInstagram, FaTelegram } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    const {providerLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
        .then(result => {})
        .catch(error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-3' variant='outline-primary' onClick={handleGoogleLogin}><FaGoogle /> Login with Google</Button>
                <Button className='mb-3' variant='outline-dark'><FaGithub /> Login with Github</Button>
            </ButtonGroup>
            <div>
                <h4 className='mb-2'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp/> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram/> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTelegram/> Telegram</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;