import React from 'react';
import { Link } from 'react-router-dom'

import {FiLogIn} from 'react-icons/fi'
import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Register() {
    return (
        <div className="register-container">
           oi

           <Link className="back-link" to="/register">
                <FiLogIn size={16} color="#E02041" />
                Não tenho cadastro
            </Link>
        </div>
    )
}