import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserName } from '../store/slices/userName.slice';
import logo from '../assets/pokemon-23.svg'
const InputName = () => {
    const dispatch = useDispatch()
    const [inputValue,setInputValue] = useState("")

    const navigate = useNavigate()
    const clickbtn = () => {
        dispatch(changeUserName(inputValue))
        navigate('/characters')
    }
    return (
        <div className='body_ini'>
            <div>
                <img className='img_logo' src={logo} alt="" />
            </div>
            <div>
            <h1 className='title_trainer'>¡Hello trainer!</h1>
            <p className='phr'>Para poder comenzar, introduce tu nombre</p>
            </div>
            <input className='name_trainer' type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button className='btn_go'onClick={clickbtn}>GO!</button>
        </div>
    );
};

export default InputName;