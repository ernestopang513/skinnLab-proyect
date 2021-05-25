import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../../stylish__src/stylish__src'
import './HomeScreen.css';
import { ImageSlider } from './slider/ImageSlider';
import { FaInstagram,FaFacebookSquare } from "react-icons/fa";
import logoCircular from '../../imagenes/logoCircular.png'
// import fondo from '';


const SocialMediaIcon = styled.a`
    color: white;
    font-size: 30px;
    :first-child{
        margin-right: 20px;
    }
    :nth-child(2){
        margin-right: 20px;
    }
`;
const SocialMedia = styled.div`

    display: flex;
    justify-content: center;

`;
const LogoImg = styled.img`
    margin: 0 auto;
    width: 60%;
    align-self: center;
`;
// const DivFondo = styled.div`
//     background: url(${fondo});
// `;


export const HomeScreen = () => {
    return (
        <div>
            <Wrapper>
                <main>
                    <h1>Tatto y Body Piercing.</h1>

                    <SocialMedia>
                    <SocialMediaIcon target = '_blank' href = 'https://www.instagram.com/skinlabcoyoacan/?hl=es-la'><FaInstagram/></SocialMediaIcon>
                    
                    <SocialMediaIcon target = '_blank' href = 'https://www.facebook.com/skinlabtatuajesyperforaciones'><FaFacebookSquare/></SocialMediaIcon>

                    <SocialMediaIcon target = '_blank' href = 'https://www.instagram.com/skin_lab_estudio/?hl=es-la'><FaInstagram/></SocialMediaIcon>
                    </SocialMedia>
                    <div style = {{display: 'flex'}}>
                        <LogoImg src = {logoCircular}/>
                    </div>

                    <p style = {{marginTop: '30px'}}>
                        Algunos de nuestros trabajos.
                    </p>
                    {/* <DivFrame>
                        <iframe  src="https://www.youtube.com/embed/JZjQDYaKqOg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen = {true}>
                        </iframe>

                    </DivFrame> */}

                    

                    <ImageSlider/>
                </main>
            </Wrapper>
            <Wrapper>
                <p>Embedded post</p>
                <p>Embedded post</p>
            </Wrapper>
        </div>
    )
}
