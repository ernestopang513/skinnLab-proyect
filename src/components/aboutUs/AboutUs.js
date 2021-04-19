import React from 'react';
import { Wrapper } from '../../stylish__src/stylish__src'

export const AboutUs = () => {
    return (
        <div>
            <h1>
                About Us
            </h1>
            <Wrapper>
                {/* <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v10.0" nonce="TjitWBU9">
                    console.log('hola')
                </script> */}
                <div id="fb-root "></div>
                <div className="fb-post w-background" data-href="https://www.facebook.com/skinlabtatuajesyperforaciones/photos/a.145934059449251/755187435190574/" data-width="350" data-show-text="true"><blockquote cite="https://www.facebook.com/skinlabtatuajesyperforaciones/photos/a.145934059449251/755187435190574/?type=3" className="fb-xfbml-parse-ignore"><p>Microdermal realizada en SKIN LAB por &#064;corcholata666
                Citas y cotizaciones disponibles por Messenger o WhatsApp...</p>Publicado por <a href="https://www.facebook.com/skinlabtatuajesyperforaciones/">SKIN LAB</a> en&nbsp;<a href="https://www.facebook.com/skinlabtatuajesyperforaciones/photos/a.145934059449251/755187435190574/?type=3">Viernes, 16 de abril de 2021</a></blockquote></div>


                <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fskinlabtatuajesyperforaciones%2Fvideos%2F744816142884556%2F&show_text=false&width=560" width={350} height={314} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
            </Wrapper>
        </div>
    )
}
