import React, { useState } from 'react'
import LogoBrowser from '../img/descarga.gif'
import { Header } from './Header'

export const Input = () => {

    const [ValorInput, setValorInput] = useState([''])

    const [state, setstate] = useState('')

    const [images,setImages]=useState([]);

    
    
    console.log(ValorInput)
    
    const handleInputView=(e)=>{
        setstate(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(state.trim().length>2){
            setValorInput('');
            setValorInput(val=>[state,...val]);
            setstate('');
            getGifts();
        } 
    }

    const getGifts=async()=>{
        const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(state)}&limit=20&api_key=r38WTE8WScHNRkGZgpaIDuTeWamubMzk`
        const resp= await fetch(url);
        const {data}= await resp.json();
        

        const gifs=data.map(img=>{
            return{
                id:img.id,
                title:img.title,
                url:img.images?.downsized.url
            }
        })
        console.log(gifs);
        setImages(gifs)
    }


    return (
    <>
        <Header/>

        <form onSubmit={handleSubmit}>
        <img className='BuscadorImg' alt="ImagenBuscador" src={LogoBrowser}/>
            <input 
            type="text"
            value={state}
            onChange={handleInputView}
            placeholder='Busca algo...'/>
        </form>
        

        
        {
            ValorInput.map(valor=>(
            <h1 key={valor}>{valor}</h1>
            ))
        }

        <div className="ContenedorUno">  
        {
            images.map(({id,title,url})=>{
                return(
                <div className="ContenedorDos" key={id}>
                <img className="ContenedorDosImagen" key={id} src={url} alt={title}/>
                <p className="ContenedorDosTitulo">{title}</p>
             </div>
            )})
        }
        </div>

    </>
    )
}






