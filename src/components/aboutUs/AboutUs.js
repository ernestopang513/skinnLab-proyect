import React from 'react';
import styled from 'styled-components';
import { FaInstagram,FaFacebookSquare,FaWhatsapp } from "react-icons/fa";

import { Wrapper } from '../../stylish__src/stylish__src'
import './AboutUs.css';
import cuadrados from '../../imagenes/cuadrados1.svg';
// import image from '../../imagenes/tattooAboutUs.png'
import mapa from '../../imagenes/mapa.jpg'

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
        width: 20%;
        @media (min-width: 768px){
            width: 10%;
        }
    }
    .mapa{
        width: 100%;
        display: block;
        margin: 30px auto 0 auto;
        @media (min-width: 768px){
            width: 50%;
        }
    }
    .wats{
        display: block;
        text-align: center;
        margin-top: 20px;
        color: white;
        font-size: 50px;
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
            <Wrapper>

                <p>No dudes en contactarnos</p>
                <a className = 'wats' target = '_blank' href = 'http://wa.me/525513956948'><FaWhatsapp/></a>
                <p>Canal de Miramontes 2960, Coapa, Parque Alameda del Sur, Coyoacán, Ciudad de México, CDMX</p>

                <a target = '_blank' href = 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%3Fapi%3D1%26destination%3D19.307361694118%252C-99.1240866%26fbclid%3DIwAR2StncPcv3-ksKWkkzBbRytP7oPpm0TODbHvr8Lr6fikpvpNvkbUogiTA0&h=AT3njjYG7Qcg4_mPkQWTA123Shr7FJlfMqq5doZnsyKuCAszTlHxUkojUvUTKIM0TOoYhIp97txhUqRhtMoXD048Q6Q7SiE7WcZv8sgbprpqtcQoYz0OZGEmPx7_hfoU1eiD8w'><img  className = 'mapa' alt = 'mapa' src = {mapa}  /></a>
            </Wrapper>
            </div>

        </AboutUsWrapper>
    )
}
