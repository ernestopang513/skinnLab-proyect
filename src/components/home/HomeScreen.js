import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../../stylish__src/stylish__src'
import './HomeScreen.css';



export const HomeScreen = () => {
    return (
        <div>
            <Wrapper>
                <main>
                <h1>Tatto y Body Piercing.</h1>


                <p>
                    Algunos de nuestros trabajos poderosos
                </p>

                <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fskinlabtatuajesyperforaciones%2Fvideos%2F744816142884556%2F&show_text=false&width=560" width={350} height={314} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
                </main>
                {/* <a href="https://www.fontspace.com/category/scribble"><IMG src="https://see.fontimg.com/api/renderfont4/8L7n/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SU5JQ0lP/ten-o-clock-regular.png" alt="Scribble fonts"/></a> */}
            </Wrapper>
        </div>
    )
}
