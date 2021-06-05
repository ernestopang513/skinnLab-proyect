import React from 'react'
import styled from 'styled-components'
import banner from '../../imagenes/skinlab-baner-black.png';


const STCFooter = styled.footer`

    background-color:white;
    color:black;
    padding:20px 0;
    text-align:center;

    p{
        color: black;
    }
    .logo{
        width: 100px;
    }

`;
export const Footer = () => {
    return (
        <STCFooter>
            <img className = 'logo' src = {banner} alt = 'logo' />
        </STCFooter>
    )
}
