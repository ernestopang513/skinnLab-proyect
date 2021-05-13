import React from 'react'
import styled from 'styled-components'


const STCFooter = styled.footer`

    background-color:white;
    color:black;
    padding:20px 0;
    text-align:center;
    margin-top:40px;

`;
export const Footer = () => {
    return (
        <STCFooter>
            <p>Skinlab footer</p>
            <p>Aqui quiero poner un mapa </p>
        </STCFooter>
    )
}
