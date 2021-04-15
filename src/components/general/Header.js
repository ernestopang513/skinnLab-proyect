import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-around;    
    .box{
        width: 20px;
        height: 2px;
        background-color: black;
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
    }
`;
export const Header = ({open, handleMenu}) => {
    
    return (
        <>
            <HeaderStyled
                open = {open}
            >
                <h1>Skin Lab</h1>
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
