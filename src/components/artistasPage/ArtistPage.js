import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../../stylish__src/stylish__src';
import corcholata from '../../imagenes/corcholata.jpg'
import { FaInstagram,FaFacebookSquare } from "react-icons/fa";
import pattern from '../../imagenes/patternBackground.jpg'
import tebo from '../../imagenes/tebo.jpg'
import rich from '../../imagenes/rich.jpg'
import circulos from '../../imagenes/circulos1.svg'
import flechas from '../../imagenes/flechas.svg'
import harry from '../../imagenes/harry.svg'




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
    .artista{
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
        background-color: rgba(0,0,0, .7);
        padding-bottom: 30px;
    }
    .marginTop{
        margin-top: 10px;
    }
    .artistPageFlex{
        margin-top: 30px;
        @media (min-width: 768px){
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 30px;
            margin-bottom: 30px;
        }
    }
    .artistPageFlex2{
        margin-top: 30px;
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
    .lgo{
        height: 5rem;
        margin: 10px auto 0 auto;
        display: block;
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
                            <img className = 'artista' src = {corcholata} alt = 'pepe'/>
                        </div>
                        <div className = 'basisFlex2'>
                            <a target = '_blank' href = 'https://www.instagram.com/corcholata666/?hl=es-la'><FaInstagram/></a>
                            <p>Mi trabajo</p>
                            <img className = 'lgo' src ={harry} alt= 'icono' />
                        </div>
                    </div>
                    <div className = 'artistPageFlex2'>
                        <div className = 'basisFlex'>
                            <p className = 'marginTop'>@tebotattoomx</p>
                            <img className = 'artista' src = {tebo} alt = 'tebo'/>
                        </div>
                        <div className = 'basisFlex2'>
                            <a target = '_blank' href = 'https://www.instagram.com/tebotattoomx/?hl=es-la'><FaInstagram/></a>
                            <p>Mi trabajo</p>
                            <img className = 'lgo' src ={circulos} alt= 'icono' />
                        </div>
                    </div>
                    <div className = 'artistPageFlex'>
                        <div className = 'basisFlex'>
                            <p className = 'marginTop'>@richigarciasandoval</p>
                            <img className = 'artista' src = {rich} alt = 'rich'/>
                        </div>
                        <div className = 'basisFlex2'>
                            <a target = '_blank' href = 'https://www.instagram.com/richigarciasandoval'><FaInstagram/></a>
                            <p>Mi trabajo</p>
                            <img className = 'lgo' src ={flechas} alt= 'icono' />
                        </div>
                    </div>
                </Wrapper>
            </div>
        </ArtistPageStyle>
    )
}
