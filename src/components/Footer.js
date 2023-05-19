import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start" style={{ position: 'fixed', bottom: '0', width: '100%' }}>
            <Container className="p-4">
                <div className="text-center">
                    © Tous droits réservés.
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
