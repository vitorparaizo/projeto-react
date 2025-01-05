import React from 'react'
import {FaUser, FaLock} from "react-icons/fa"

import { useState } from "react";

import "./Login.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Enviando Dados" + username + " - " + password);


        console.log("Envio");
    };


  return (
    <div className="Container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o Sistema</h1>
            <div className="input-field">
                <input 
                type='email' placeholder='E-mail'
                onChange={(e) => setUsername(e.target.value)}
                />
                <FaUser className='icon' />
            </div>
            <div className ="input-field">
                <input 
                type="password" placeholder='Senha' 
                onChange={(e) => setpassword(e.target.value)}/>
                <FaLock className='icon' />
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembre de Mim
                </label>
                <a href='#'>Esqueceu a senha?</a>
            </div>

            <button>Entrar</button>

            <div className="signup-links">
                <p>
                    Não tem uma conta? <a href='#'>Cadastre-se</a>
                </p>
            </div>
        </form>
    </div>
  )
}

export default Login
