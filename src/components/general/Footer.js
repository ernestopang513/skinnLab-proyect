import React from 'react'
import styled from 'styled-components'


const STCFooter = styled.footer`

    background-color:white;
    color:black;
    padding:20px 0;
    text-align:center;
    margin-top:40px;

    p{
        color: black;
    }

`;
export const Footer = () => {
    return (
        <STCFooter>
            <p>Skinlab footer</p>
        </STCFooter>
    )
}
