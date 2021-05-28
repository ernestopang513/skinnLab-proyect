import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../../stylish__src/stylish__src'
import './HomeScreen.css';
import { ImageSlider } from './slider/ImageSlider';
import { FaInstagram,FaFacebookSquare } from "react-icons/fa";
import logoCircular from '../../imagenes/logoCircular.png'
import maquina from '../../imagenes/tattooMachine.svg';
import maquina2 from '../../imagenes/maquina.png';



const SocialMediaIcon = styled.a`
    color: white;
    font-size: 50px;
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
    margin-top: 30px;

`;
const LogoImg = styled.img`
    margin: 0 auto;
    width: 60%;
    align-self: center;
`;

const MaquinaLogo = styled.img`
    margin: 0 auto;
    width: 60%;
`;

const Pframe = styled.p`

    margin-top: 40px;
    text-align: center;
    

`;
const GlassCard = styled.div`
    margin: auto;
    background: rgba(255,255,255, 0.5);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 1 );
    backdrop-filter: blur(2px);
    border: 1px solid rgba(255,255,255, .5);
    width: 320px;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const HomeScreen = () => {
    return (
        <div>
            <Wrapper>
                <main>
                    <h1>El mejor estudio.</h1>

                    <div style = {{display: 'flex'}}>
                        <LogoImg alt = 'logoSkinLab' src = {logoCircular}/>
                    </div>
                    <SocialMedia>
                    <SocialMediaIcon target = '_blank' href = 'https://www.instagram.com/skinlabcoyoacan/?hl=es-la'><FaInstagram/></SocialMediaIcon>
                    
                    <SocialMediaIcon target = '_blank' href = 'https://www.facebook.com/skinlabtatuajesyperforaciones'><FaFacebookSquare/></SocialMediaIcon>

                    <SocialMediaIcon target = '_blank' href = 'https://www.instagram.com/skin_lab_estudio/?hl=es-la'><FaInstagram/></SocialMediaIcon>
                    </SocialMedia>

                    <p style = {{marginTop: '30px'}}>
                        Tatuajes y perforaciones.
                    </p>

                    <div style = {{display: 'flex',marginTop: '20px'}}>
                        <MaquinaLogo alt = 'logoMagina' src = {maquina}/>
                    </div>
                    <Pframe>
                        <iframe className = 'ytFrame' loading = 'lazy' src="https://www.youtube.com/embed/JZjQDYaKqOg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen = {true}>
                        </iframe>    
                    </Pframe>

                </main>
            </Wrapper>
                <div className = 'fondo'>
                    <GlassCard>
                        <ImageSlider/>
                    </GlassCard>
                </div>
            <Wrapper>
                <p>Embedded post</p>
                <p>Embedded post</p>
            </Wrapper>
        </div>
    )
}
