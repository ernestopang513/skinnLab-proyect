import React from 'react';
import styled from 'styled-components';
import { FaInstagram,FaFacebookSquare } from "react-icons/fa";

import { Wrapper } from '../../stylish__src/stylish__src'
import './AboutUs.css';
import cuadrados from '../../imagenes/cuadrados1.svg';
// import image from '../../imagenes/tattooAboutUs.png'

const AboutUsWrapper = styled.div`


    h1{
        font-family: 'Dancing Script', cursive;
        font-size: 30px;
        text-align: center;
    }
    p{
        font-family: 'Dancing Script', cursive;
        margin-top: 20px;
        color: white;
    }

    .socialMedia{
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }
    .socialMediaIcon{
        color: white;
        font-size: 50px;
    }
        .socialMediaIcon:first-child{
            margin-right: 20px;
        }
        .socialMediaIcon:nth-child(2){
            margin-right: 20px;
        }
    .logo{
        height: 20%;
    }
`;

export const AboutUs = () => {
    return (
        <AboutUsWrapper>
            <div className = 'aboutUs__fondo'>
                <h1>
                Estudio de tatuajes y perforaciones.
                </h1>

                <p>Establecido desde el año 2002</p>
                    {/* <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fskinlabtatuajesyperforaciones%2Fvideos%2F744816142884556%2F&show_text=false&width=560" width={350} height={314} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" /> */}
                <div className = 'socialMedia'>
                                    <a className = 'socialMediaIcon' target = '_blank' href = 'https://www.instagram.com/skinlabcoyoacan/?hl=es-la'><FaInstagram/></a>
                                    
                                    <a className = 'socialMediaIcon' target = '_blank' href = 'https://www.facebook.com/skinlabtatuajesyperforaciones'><FaFacebookSquare/></a>

                                    <a className = 'socialMediaIcon' target = '_blank' href = 'https://www.instagram.com/skin_lab_estudio/?hl=es-la'><FaInstagram/></a>
                </div>

                <img className = 'logo' src = {cuadrados} alt = 'cuadrados'/>
            </div>

            <Wrapper>
                <p>Canal de Miramontes 2960, Coapa, Parque Alameda del Sur, Coyoacán, Ciudad de México, CDMX</p>
            </Wrapper>
        </AboutUsWrapper>
    )
}
