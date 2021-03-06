import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import skinlab from '../../imagenes/skinlab-baner.png';
import { FaInstagram,FaFacebookSquare,FaWhatsapp } from "react-icons/fa";


// En este Header styled estan contenidos el div que contine los div del menú y la funcion que permite
// que que roten al dar click en ellos tambien estan las reglas de media querie que los diferentes tamaños
// Nota: para que funcionen las arrow funcions se deben de pasar las variables de control a los componentes creados con stylish components

const HeaderStyled = styled.header`

    align-items: center;
    display: flex;
    justify-content: space-around;
    padding-top:20px;    
    padding-bottom:20px;
    background-color: #191919;

    a{
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 100%;
        // height: 10%;
        @media(min-width: 768px){
            width: 50%;
            
        }
    }

    .box{
        width: 20px;
        height: 2px;
        background-color: white;
        margin: 3px 0;
        transition: all .3s ease;
    }
    .box:first-child{
        transform: ${({open}) => open ? 'rotate(135deg)' : 'rotate(0deg)'};
    }
    .box:nth-child(2){
        transform: ${({open}) => open ? 'rotate(45deg);' : 'rotate(0deg);'}
    }
    .box:nth-child(3){
        transform: ${({open}) => open ? 'rotate(-45deg);' : 'rotate(0deg);'}
    }
    .socialMedia{
        display: none;
    }


    

    @media (min-width: 768px ){
        justify-content: space-between;
        align-items: center;
        .menu{
            display: none;
        }
        a{
            width:20%;
        }
        .socialMedia{
        display: flex;
        justify-content: center;
    }
    .socialMediaIcon{
        color: white;
        font-size: 30px;
        margin-right: 20px;

    }
        /* .socialMediaIcon:first-child{
            margin-right: 20px;
        }
        .socialMediaIcon:nth-child(2){
            margin-right: 20px;
        } */
    .logo{
        width: 20%;
    }
    }
`;
export const Header = ({open, handleMenu}) => {
    
    return (
        <>
            <HeaderStyled
                open = {open}
            >
                <Link
                    to='/'
                >
                    <img src = {skinlab}/>
                </Link>
                <div 
                    className = 'menu'
                    onClick = {handleMenu}
                >
                    <div className = 'box box1' ></div>
                    <div className = 'box'></div>
                    <div className = 'box'></div>
                </div>
                <div className = 'socialMedia'>
                                    <a className = 'socialMediaIcon' target = '_blank' href = 'http://wa.me/525513956948'><FaWhatsapp/></a>
                                    
                                    <a className = 'socialMediaIcon' target = '_blank' href = 'https://www.instagram.com/skinlabcoyoacan/?hl=es-la'><FaInstagram/></a>
                                    
                                    <a className = 'socialMediaIcon' target = '_blank' href = 'https://www.facebook.com/skinlabtatuajesyperforaciones'><FaFacebookSquare/></a>

                                    <a className = 'socialMediaIcon' target = '_blank' href = 'https://www.instagram.com/skin_lab_estudio/?hl=es-la'><FaInstagram/></a>
                </div>
            </HeaderStyled>   
        </>
    )
}
