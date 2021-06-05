import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../../stylish__src/stylish__src'
import './HomeScreen.css';
import { ImageSlider } from './slider/ImageSlider';
import { FaInstagram,FaFacebookSquare,FaWhatsapp } from "react-icons/fa";
import logoCircular from '../../imagenes/logoCircular.png'
import maquina from '../../imagenes/tattooMachine.svg';
import anchor from '../../imagenes/anchor.svg';
import triangulos from '../../imagenes/triangulos.svg';
import { dataSlider } from './slider/dataSlider';
import { dataSliderperfos } from './slider/perfosData';
import home from '../../imagenes/tattooMachineBackground.jpg';


const BackgroundHome = styled.div`

    background-image: url(${home});
    background-size: cover;
    .blur{
        background-color: rgba(0,0,0,.3);
        padding-bottom: 30px;
        padding-top: 30px;
    }
    background-position-y: bottom ;
    background-position-x: right;
`;

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
    display: block;
    /* align-self: center; */

    @media(min-width: 768px){
        width: 70%;
        margin: 0;
    }
`;

const MaquinaLogo = styled.img`
    margin: 0 auto;
    width: 60%;

    @media(min-width: 768px){
        width: 70%;
    }
`;
const AnchorLogo = styled.img`
    margin: 0 auto;
    width: 30%;
`;

const Pframe = styled.p`

    margin-top: 40px;
    text-align: center;

    display: block;

    @media(min-width: 768px){
        margin-top: 0;
    }
    

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

const WrapperFlexContainer = styled.div`

    margin-top: 50px;
 .HomeScreenFlex{
     flex-basis: 50%;
 }
    .flexBasis{
        flex-basis: 50%;
        display: flex;

    }
    .wats{
        display: block;
        text-align: center;
        margin-top: 20px;
    }

@media (min-width: 768px){
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
`;


export const HomeScreen = () => {
    return (
        <div>
            {/* <Wrapper> */}
                <main>
                    <BackgroundHome>
                    <div className = 'blur'>


                    <h1>El mejor estudio.</h1>
                    <WrapperFlexContainer>

                        <div className = 'HomeScreenFlex'>

                        {/* <div style = {{display: 'flex'}}> */}
                            <LogoImg alt = 'logoSkinLab' src = {logoCircular}/>
                        {/* </div> */}
                        </div>
                        <div>
                            <SocialMedia>
                                <SocialMediaIcon target = '_blank' href = 'https://www.instagram.com/skinlabcoyoacan/?hl=es-la'><FaInstagram/></SocialMediaIcon>
                                
                                <SocialMediaIcon target = '_blank' href = 'https://www.facebook.com/skinlabtatuajesyperforaciones'><FaFacebookSquare/></SocialMediaIcon>

                                <SocialMediaIcon target = '_blank' href = 'https://www.instagram.com/skin_lab_estudio/?hl=es-la'><FaInstagram/></SocialMediaIcon>
                            </SocialMedia>

                            

                            <p style = {{marginTop: '30px'}}>
                                Tatuajes y perforaciones.
                            </p>
                                <SocialMediaIcon className = 'wats' target = '_blank' href = 'http://wa.me/525513956948'><FaWhatsapp/></SocialMediaIcon>
                        </div>
                    </WrapperFlexContainer>
                    </div>
                    </BackgroundHome>
                    <WrapperFlexContainer>
                        <div className = 'flexBasis' >
                            <MaquinaLogo alt = 'logoMagina' src = {maquina}/>
                        </div>
                        <Pframe>
                            <iframe className = 'ytFrame' loading = 'lazy' src="https://www.youtube.com/embed/JZjQDYaKqOg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen = {true}>
                            </iframe>    
                        </Pframe>
                        
                    </WrapperFlexContainer>
                </main>
            {/* </Wrapper> */}
            <div className = 'sliceFlex sliceFlexFondo1'>
                <div className = 'fondo'>
                    <GlassCard>
                        <ImageSlider dataSlider = {dataSlider}/>
                    </GlassCard>
                </div>
                    <div className = 'flexBasis'>
                        <p>Curabitur interdum erat auctor velit dictum ornare. Etiam ut orci nec massa bibendum ultricies. Vestibulum id mollis urna.</p>
                        <div style = {{display: 'flex',marginTop: '20px'}}>
                            <AnchorLogo alt = 'logoAnchor' src = {anchor}/>
                        </div>
                </div>
            </div>
            <div className = 'sliceFlex sliceFlexFondo2'>

                <div className = 'fondo2'>
                    <GlassCard>
                        <ImageSlider dataSlider = {dataSliderperfos}/>
                    </GlassCard>
                </div>
                <div className = 'flexBasis'>
                    <p>Curabitur interdum erat auctor velit dictum ornare. Etiam ut orci nec massa bibendum ultricies. Vestibulum id mollis urna.</p>
                    <div style = {{display: 'flex',marginTop: '20px'}}>
                        <AnchorLogo alt = 'logoAnchor' src = {triangulos}/>
                    </div>
                </div>
            
            </div>
        </div>
    )
}
