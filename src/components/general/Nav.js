import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components';

const NavStylish = styled.nav`
    transform: ${({open}) => open ? 'translateX(0);' : 'translateX(-200%);'};
    transition: all 0.5s ease;
    background-color: white;
    position: absolute;
    z-index:200;

    
    ul{
        display: block; 
    }
    li{
        list-style: none;
    }

    li a {
        color: black;
        display: block;
        padding: 20px 0 20px 5px;
        text-decoration: none;
        /* font-weigth: bold; */
        font-size: 30px;
    }
    width: 70%;

    @media (min-width: 768px){
        transform: translateX(0);
        position: relative;
        width: 100%;
        ul{
            display: flex;
            justify-content: space-around;
        }
        li a{
            font-size: 20px;
            padding: 15px 0 15px;
        }
        // li a {
        //     display: inline; 
        // }
    }

`;

// const IMG = styled.img`
//     width: 70px;
// `;

export const Nav = ({open,handleMenu}) => {

    const customHandle = () => {
        handleMenu();
        // window.fbAsyncInit();
    }
    return (
        <>
            <NavStylish 
                open = {open}
            >
                <ul>
                    <li>
                        <Link
                            to = '/'
                            onClick = {handleMenu}
                        >
                        Inicio
                        
                        </Link>
                    </li>

                    <li>
                        <Link
                            to = '/aboutUs'
                            onClick = {customHandle}
                        >
                        Sobre nosotros
                        </Link>
                    </li>
                    <li>
                        <Link
                            to = '/artist'
                            onClick = {handleMenu}
                        >
                        Artistas
                        </Link>
                    </li>
                </ul>
                
            </NavStylish>   
        </>
    )
}
