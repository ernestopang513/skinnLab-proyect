import React, { useState } from 'react'
import styled from 'styled-components';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Imagenes = styled.section`

/* position: relative; */
width: 400px;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
position: relative;
/* margin-top:10px; */



.image {
    // border-radius: 20px;
    /* width: 100%; */
    max-height: 300px;
    user-select: none;
}

.right-arrow{
    position: absolute;
    top:50%;
    right:5px;
    font-size:2rem;
    color:#fff;
    z-index:10;
    cursor:pointer;
    user-select:none;
    
}
.left-arrow{
    position: absolute;
    top:50%;
    left:5px;
    font-size:2rem;
    color:#fff;
    z-index:10;
    cursor:pointer;
    user-select:none;

}


`;

export const ImageSlider = ({dataSlider}) => {
    const [current, setCurrent] = useState(0);
    const length = dataSlider.length;

    const nextSlide = () =>{
        setCurrent(current === length -1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1);
    }

    console.log(current);
    return (
        <Imagenes className ='slidder'>
            <AiOutlineLeft 
                className ='left-arrow'
                onClick = {prevSlide}  
            />
            <AiOutlineRight 
                className ='right-arrow' 
                onClick = {nextSlide}
            />
            {
                dataSlider.map((slider,index) =>{
                    return(
                        <div
                            className = {index === current ? 'slide ' : 'slide'}
                            key = {index}
                        >

                            {index === current &&(
                                <img  src={slider.image} alt = 'tatoo'  className = 'image'/>
                            )}

                        </div>
                    )
                })
            }
        </Imagenes>
    )
}
