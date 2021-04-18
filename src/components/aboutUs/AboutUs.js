import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { Wrapper } from '../../stylish__src/stylish__src'

export const AboutUs = () => {

    const location = useLocation();
    console.log(location.pathname)
    console.log(location.hash)

    // useEffect(() => {
    //     window.location.reload()

    //   }, [location.pathname]);
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
            </Wrapper>
        </div>
    )
}
