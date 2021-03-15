import React from 'react'
import LogoEarth from '../img/Earth.jpg'


export const Header = () => {
    return (
        
        <section>
            <h1 className='BuscadorH1'>Gif Planet</h1>
            <img src={LogoEarth} alt="ImagenCabecera" className='CabeceraImg'/>
        </section>
        
    )
}
