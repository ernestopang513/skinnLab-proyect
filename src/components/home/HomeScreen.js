import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../../stylish__src/stylish__src'
import './HomeScreen.css';
import { ImageSlider } from './slider/ImageSlider';



export const HomeScreen = () => {
    return (
        <div>
            <Wrapper>
                <main>
                <h1>Tatto y Body Piercing.</h1>


                <p style = {{marginTop: '30px'}}>
                    Algunos de nuestros trabajos.
                </p>

                {/* <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fskinlabtatuajesyperforaciones%2Fvideos%2F744816142884556%2F&show_text=false&width=560" width={350} height={314} style={{border: 'none', overflow: 'hidden',marginTop: '20px'}} scrolling="no" frameBorder={0} allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />     */}

                </main>
            </Wrapper>
            <ImageSlider/>
            <Wrapper>
                <p>Embedded post</p>
                <p>Embedded post</p>
            </Wrapper>
        </div>
    )
}
