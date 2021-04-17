import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import skinlab from '../../imagenes/skinlab-baner.png';

// En este Header styled estan contenidos el div que contine los div del menú y la funcion que permite
// que que roten al dar click en ellos tambien estan las reglas de media querie que los diferentes tamaños
// Nota: para que funcionen las arrow funcions se deben de pasar las variables de control a los componentes creados con stylish components

const HeaderStyled = styled.header`

    align-items: center;
    display: flex;
    justify-content: space-around;
    padding-top:35px;    
    margin-bottom:20px;

    a{
        width: 30%;
    }
    img{
        width: 100%;
        // height: 10%;
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


    

    @media (min-width: 768px ){
        .menu{
            display: none;
        }
        a{
            width:20%;
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
            </HeaderStyled>   
        </>
    )
}
