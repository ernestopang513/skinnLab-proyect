import React from 'react';
import styled from 'styled-components';
// import { Wrapper } from '../../stylish__src/stylish__src'
import './AboutUs.css';
// import image from '../../imagenes/tattooAboutUs.png'

const AboutUsWrapper = styled.div`


    h1{
        font-family: 'Dancing Script', cursive;
        font-size: 20px;
        text-align: center;
    }
    p{
        font-family: 'Dancing Script', cursive;
        margin-top: 20px;

    }
    /* .aboutUs__fondo{
        background-image: url('../../imagenes/tattooAboutUs.png');
    } */

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
            </div>
        </AboutUsWrapper>
    )
}
