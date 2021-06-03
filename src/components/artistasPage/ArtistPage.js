import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../../stylish__src/stylish__src';
import corcholata from '../../imagenes/corcholata.jpg'
import { FaInstagram,FaFacebookSquare } from "react-icons/fa";
import pattern from '../../imagenes/patternBackground.jpg'
import tebo from '../../imagenes/tebo.jpg'
import rich from '../../imagenes/rich.jpg'




const ArtistPageStyle = styled.div`
    background-image: url(${pattern});
    background-size: cover;
    h2{
        font-family: 'Dancing Script', cursive;
        text-align: center;
        @media (min-width: 768px){
            font-size: 40px;
        }
    }
    img{
        width: 50%;
        height: auto;
        display: block;
        margin: 20px auto 0 auto;
        @media (min-width: 768px){
            width: 50%;
        }
    }
    a{
        color: white;
        display: block;
        text-align: center;
        margin-top: 10px;
        font-size: 30px;
        @media (min-width: 768px){
            font-size: 50px;
        }
    }
    p{
        color: whitesmoke;
        @media (min-width: 768px){
            font-size: 30px;
        }
    }
    .blur{
        width: 100%;
        height: 100%;
        padding-top: 30px;
        background-color: rgba(0,0,0, .3);
        padding-bottom: 30px;
    }
    .marginTop{
        margin-top: 10px;
    }
    .artistPageFlex{
        @media (min-width: 768px){
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 30px;
            margin-bottom: 30px;
        }
    }
    .artistPageFlex2{
        @media (min-width: 768px){
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-around;
            align-items: center;
            margin-top: 30px;
            margin-bottom: 30px;
        }
    }
    .basisFlex{
        @media (min-width: 768px){
            flex-basis: 50%;
        }

    }
    .basisFlex2{
        @media (min-width: 768px){
            flex-basis: 30%;
        }
    }
    
`;

export const ArtistPage = () => {
    return (
        <ArtistPageStyle>
            <div className = 'blur'>

                <Wrapper>
                    <h2>Nuestos artistas</h2>
                    <p className = 'marginTop'>En skinlab tenemos a los mejores artistas</p>
                    <div className = 'artistPageFlex'>
                        <div className = 'basisFlex'>
                            <p className = 'marginTop'>@Corcholata</p>
                            <img src = {corcholata} alt = 'pepe'/>
                        </div>
                        <div className = 'basisFlex2'>
                            <a target = '_blank' href = 'https://www.instagram.com/corcholata666/?hl=es-la/media/'><FaInstagram/></a>
                            <p>Visista mi instagram para ver mas de mi trabajo</p>
                        </div>
                    </div>
                    <div className = 'artistPageFlex2'>
                        <div className = 'basisFlex'>
                            <p className = 'marginTop'>@Corcholata</p>
                            <img src = {tebo} alt = 'tebo'/>
                        </div>
                        <div className = 'basisFlex2'>
                            <a target = '_blank' href = 'https://www.instagram.com/corcholata666/?hl=es-la/media/'><FaInstagram/></a>
                            <p>Visista mi instagram para ver mas de mi trabajo</p>
                        </div>
                    </div>
                    <div className = 'artistPageFlex'>
                        <div className = 'basisFlex'>
                            <p className = 'marginTop'>@Corcholata</p>
                            <img src = {rich} alt = 'rich'/>
                        </div>
                        <div className = 'basisFlex2'>
                            <a target = '_blank' href = 'https://www.instagram.com/corcholata666/?hl=es-la/media/'><FaInstagram/></a>
                            <p>Visista mi instagram para ver mas de mi trabajo</p>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </ArtistPageStyle>
    )
}
