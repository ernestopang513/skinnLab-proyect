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
    }


    @media (min-width: 768px ){
        .menu{
            display: none;
        }
    }


`;
export const Header = ({open, setOpen}) => {
    const handleMenu = () => {
        setOpen(!open);
        console.log(open);
        
    }
    return (
        <>
            <HeaderStyled>
                <h1>Skin Lab</h1>
                <div 
                    className = 'menu'
                    onClick = {handleMenu}
                >
                    <div className = 'box'></div>
                    <div className = 'box'></div>
                    <div className = 'box'></div>
                </div>
            </HeaderStyled>   
        </>
    )
}
